import { Request, Response, NextFunction } from 'express';
import nodemailer from 'nodemailer';
import Message from '../models/Message.js';
import logger from '../config/logger.js';
import { AppError } from '../utils/AppError.js';

// Setup Nodemailer transporter if config exists
const getTransporter = () => {
  const host = process.env.SMTP_HOST;
  const port = parseInt(process.env.SMTP_PORT || '587');
  const user = process.env.SMTP_USER;
  const pass = process.env.SMTP_PASS;

  if (host && user && pass) {
    return nodemailer.createTransport({
      host,
      port,
      secure: port === 465,
      auth: { user, pass },
    });
  }
  return null;
};

export const submitMessage = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
  try {
    const { name, email, subject, message } = req.body;
    
    // Save to Database
    const newMessage = await Message.create({
      name,
      email,
      subject,
      message,
    });

    // Send email notification to Admin
    const transporter = getTransporter();
    if (transporter) {
      const adminEmail = process.env.SMTP_USER; // send to self or customized email
      const mailOptions = {
        from: `"${name}" <${email}>`,
        to: adminEmail,
        subject: `Portfolio Contact: ${subject}`,
        text: `You received a new message from your portfolio website:
        
Name: ${name}
Email: ${email}
Subject: ${subject}
Message:
${message}`,
        html: `
          <h3>New Message from Portfolio Website</h3>
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Subject:</strong> ${subject}</p>
          <p><strong>Message:</strong></p>
          <p style="white-space: pre-line; background-color: #f9f9f9; padding: 15px; border-radius: 5px;">${message}</p>
        `,
      };

      transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
          logger.error('Nodemailer failed to send email: %o', error);
        } else {
          logger.info('Email notification sent: %s', info.messageId);
        }
      });
    } else {
      logger.info('SMTP not fully configured. Contact Message logged: Name: %s, Email: %s, Message: %s', name, email, message);
    }

    res.status(201).json({
      status: 'success',
      message: 'Your message has been sent successfully!',
      data: {
        contact: newMessage,
      },
    });
  } catch (error) {
    next(error);
  }
};

export const getAllMessages = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
  try {
    const messages = await Message.find().sort({ createdAt: -1 });

    res.status(200).json({
      status: 'success',
      results: messages.length,
      data: {
        messages,
      },
    });
  } catch (error) {
    next(error);
  }
};

export const markAsRead = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
  try {
    const { id } = req.params;
    const message = await Message.findByIdAndUpdate(
      id,
      { isRead: true },
      { new: true }
    );

    if (!message) {
      return next(new AppError('No message found with that ID', 404));
    }

    res.status(200).json({
      status: 'success',
      data: {
        message,
      },
    });
  } catch (error) {
    next(error);
  }
};

export const deleteMessage = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
  try {
    const { id } = req.params;
    const message = await Message.findByIdAndDelete(id);

    if (!message) {
      return next(new AppError('No message found with that ID', 404));
    }

    res.status(204).json({
      status: 'success',
      data: null,
    });
  } catch (error) {
    next(error);
  }
};
