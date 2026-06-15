import { Request, Response, NextFunction } from 'express';
import Project from '../models/Project.js';
import Blog from '../models/Blog.js';
import Message from '../models/Message.js';

export const getDashboardStats = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
  try {
    const totalProjects = await Project.countDocuments();
    
    // Blog aggregation
    const totalBlogs = await Blog.countDocuments();
    const publishedBlogs = await Blog.countDocuments({ isPublished: true });
    const draftBlogs = totalBlogs - publishedBlogs;
    
    // Sum of blog views
    const viewStats = await Blog.aggregate([
      {
        $group: {
          _id: null,
          totalViews: { $sum: '$views' },
        },
      },
    ]);
    const totalBlogViews = viewStats[0]?.totalViews || 0;

    // Contact Messages
    const totalMessages = await Message.countDocuments();
    const unreadMessages = await Message.countDocuments({ isRead: false });

    res.status(200).json({
      status: 'success',
      data: {
        projects: {
          total: totalProjects,
        },
        blogs: {
          total: totalBlogs,
          published: publishedBlogs,
          drafts: draftBlogs,
          views: totalBlogViews,
        },
        messages: {
          total: totalMessages,
          unread: unreadMessages,
        },
      },
    });
  } catch (error) {
    next(error);
  }
};
