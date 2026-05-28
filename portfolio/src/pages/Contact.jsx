// src/pages/Contact.jsx
// Contact Page — Contact form with EmailJS integration, field validation, and social cards
import { useState } from 'react';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import { FaPaperPlane, FaEnvelope, FaPhone, FaMapMarkerAlt } from 'react-icons/fa';
import { toast } from 'react-toastify';
import emailjs from 'emailjs-com';
import { personalInfo } from '../data';
import { useForm } from '../hooks/useForm';
import Card from '../components/ui/Card';
import Button from '../components/ui/Button';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.1 },
  },
  exit: {
    opacity: 0,
    y: 20,
    transition: { duration: 0.3 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { type: 'spring', stiffness: 100, damping: 15 },
  },
};

export default function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Initialize custom form hook
  const { values, errors, handleChange, validate, reset } = useForm({
    name: '',
    email: '',
    message: '',
  });

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Run field validations
    if (!validate()) {
      toast.error('Please correct the validation errors in the form.');
      return;
    }

    setIsSubmitting(true);

    try {
      // NOTE: Replace these placeholder credentials with your actual EmailJS keys!
      // You can get them by registering at https://www.emailjs.com/
      const serviceId = 'service_portfolio_default';
      const templateId = 'template_portfolio';
      const publicKey = 'user_dummy_key_change_me';

      // Simple wrapper to simulate a successful send if keys are not configured yet,
      // or to run the actual EmailJS send operation if keys are provided.
      if (publicKey === 'user_dummy_key_change_me') {
        // Simulating API latency
        await new Promise((resolve) => setTimeout(resolve, 1500));
        console.log('Mock email sent with values:', values);
        toast.success('Thank you! Your message has been sent successfully (Demo Mode).');
        reset();
      } else {
        await emailjs.send(
          serviceId,
          templateId,
          {
            from_name: values.name,
            from_email: values.email,
            message: values.message,
            to_name: personalInfo.name,
          },
          publicKey
        );
        toast.success('Thank you! Your message has been sent successfully.');
        reset();
      }
    } catch (error) {
      console.error('Email send failed:', error);
      toast.error('Oops! Something went wrong. Please try again later.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <Helmet>
        <title>Contact | {personalInfo.name}</title>
        <meta
          name="description"
          content={`Get in touch with ${personalInfo.name} for collaboration, full-time opportunities, or inquiries about MERN fullstack applications.`}
        />
      </Helmet>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        exit="exit"
        className="section-container min-h-[calc(100vh-64px)] py-16"
      >
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h1 className="text-4xl font-extrabold tracking-tight mb-4">
            Contact <span className="gradient-text">Me</span>
          </h1>
          <p className="text-gray-600 dark:text-gray-400">
            Have a question or want to work together? Drop me a message below or reach out via email.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Info Details Column */}
          <motion.div variants={itemVariants} className="lg:col-span-5 space-y-6">
            <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-100 mb-2">
              Let's Connect!
            </h2>
            <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed mb-6">
              I am open to discussions about Full Stack / Frontend Developer roles, code projects, or junior internships. Feel free to contact me using the details here.
            </p>

            {/* Email Card */}
            <Card className="hover:scale-102 transition-transform">
              <a href={`mailto:${personalInfo.email}`} className="flex items-center gap-4 group">
                <div className="w-12 h-12 rounded-xl bg-purple-100 dark:bg-purple-900/30 text-purple-600 dark:text-purple-400 flex items-center justify-center group-hover:scale-110 transition-transform">
                  <FaEnvelope size={20} />
                </div>
                <div>
                  <h4 className="text-xs font-bold text-gray-400 uppercase tracking-wider">Email Address</h4>
                  <p className="text-sm font-semibold text-gray-700 dark:text-gray-200 group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors break-all">
                    {personalInfo.email}
                  </p>
                </div>
              </a>
            </Card>

            {/* Phone Card */}
            <Card className="hover:scale-102 transition-transform">
              <a href={`tel:${personalInfo.phone}`} className="flex items-center gap-4 group">
                <div className="w-12 h-12 rounded-xl bg-blue-100 dark:bg-blue-900/30 text-blue-500 dark:text-blue-450 flex items-center justify-center group-hover:scale-110 transition-transform">
                  <FaPhone size={20} />
                </div>
                <div>
                  <h4 className="text-xs font-bold text-gray-400 uppercase tracking-wider">Phone / Mobile</h4>
                  <p className="text-sm font-semibold text-gray-700 dark:text-gray-200 group-hover:text-blue-500 transition-colors">
                    {personalInfo.phone}
                  </p>
                </div>
              </a>
            </Card>

            {/* Location Card */}
            <Card className="hover:scale-102 transition-transform">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-cyan-100 dark:bg-cyan-900/30 text-cyan-500 flex items-center justify-center">
                  <FaMapMarkerAlt size={20} />
                </div>
                <div>
                  <h4 className="text-xs font-bold text-gray-400 uppercase tracking-wider">Current Location</h4>
                  <p className="text-sm font-semibold text-gray-700 dark:text-gray-200">
                    {personalInfo.location}
                  </p>
                </div>
              </div>
            </Card>
          </motion.div>

          {/* Form Column */}
          <motion.div variants={itemVariants} className="lg:col-span-7">
            <Card className="p-6 md:p-8">
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Name */}
                <div className="flex flex-col space-y-2">
                  <label htmlFor="name" className="text-sm font-semibold text-gray-700 dark:text-gray-300">
                    Full Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={values.name}
                    onChange={handleChange}
                    placeholder="Enter your name"
                    className={`
                      w-full px-4 py-3 rounded-xl border bg-white/50 dark:bg-gray-950/50 backdrop-blur-sm
                      text-gray-800 dark:text-gray-100 placeholder-gray-400 dark:placeholder-gray-500
                      transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-purple-500/50
                      ${errors.name
                        ? 'border-red-400 focus:ring-red-500/50'
                        : 'border-gray-200 dark:border-gray-800 focus:border-purple-500'
                      }
                    `}
                  />
                  {errors.name && (
                    <span className="text-xs font-medium text-red-500">{errors.name}</span>
                  )}
                </div>

                {/* Email */}
                <div className="flex flex-col space-y-2">
                  <label htmlFor="email" className="text-sm font-semibold text-gray-700 dark:text-gray-300">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={values.email}
                    onChange={handleChange}
                    placeholder="example@domain.com"
                    className={`
                      w-full px-4 py-3 rounded-xl border bg-white/50 dark:bg-gray-950/50 backdrop-blur-sm
                      text-gray-800 dark:text-gray-100 placeholder-gray-400 dark:placeholder-gray-500
                      transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-purple-500/50
                      ${errors.email
                        ? 'border-red-400 focus:ring-red-500/50'
                        : 'border-gray-200 dark:border-gray-800 focus:border-purple-500'
                      }
                    `}
                  />
                  {errors.email && (
                    <span className="text-xs font-medium text-red-500">{errors.email}</span>
                  )}
                </div>

                {/* Message */}
                <div className="flex flex-col space-y-2">
                  <label htmlFor="message" className="text-sm font-semibold text-gray-700 dark:text-gray-300">
                    Your Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={values.message}
                    onChange={handleChange}
                    rows="5"
                    placeholder="Describe how I can help you..."
                    className={`
                      w-full px-4 py-3 rounded-xl border bg-white/50 dark:bg-gray-950/50 backdrop-blur-sm
                      text-gray-800 dark:text-gray-100 placeholder-gray-400 dark:placeholder-gray-500
                      transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-purple-500/50 resize-y
                      ${errors.message
                        ? 'border-red-400 focus:ring-red-500/50'
                        : 'border-gray-200 dark:border-gray-800 focus:border-purple-500'
                      }
                    `}
                  />
                  {errors.message && (
                    <span className="text-xs font-medium text-red-500">{errors.message}</span>
                  )}
                </div>

                {/* Submit button */}
                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full justify-center shadow-md py-3.5"
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-5 h-5 rounded-full border-2 border-white/50 border-t-white animate-spin" />
                      Sending Message...
                    </>
                  ) : (
                    <>
                      <FaPaperPlane size={14} />
                      Send Message
                    </>
                  )}
                </Button>
              </form>
            </Card>
          </motion.div>
        </div>
      </motion.div>
    </>
  );
}
