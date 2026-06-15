import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import { toast } from 'react-toastify';
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaLinkedinIn, FaGithub, FaPaperPlane } from 'react-icons/fa';
import { useForm } from '../hooks/useForm.js';
import { useSubmitContact } from '../hooks/useContact.js';
import { personalInfo } from '../data.js';
import { cn } from '../utils/cn.js';

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (i = 0) => ({ opacity: 1, y: 0, transition: { delay: i * 0.1, duration: 0.5 } }),
};

const rules = {
  name: (v) => (!v.trim() ? 'Name is required' : null),
  email: (v) => {
    if (!v.trim()) return 'Email is required';
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v)) return 'Enter a valid email';
    return null;
  },
  subject: (v) => (!v.trim() ? 'Subject is required' : null),
  message: (v) => (v.trim().length < 5 ? 'Message must be at least 5 characters' : null),
};

const contactItems = [
  { icon: <FaEnvelope />, label: 'Email', value: personalInfo.email, href: `mailto:${personalInfo.email}` },
  { icon: <FaPhone />, label: 'Phone', value: personalInfo.phone, href: `tel:${personalInfo.phone.replace(/-/g, '')}` },
  { icon: <FaMapMarkerAlt />, label: 'Location', value: personalInfo.location, href: null },
  { icon: <FaLinkedinIn />, label: 'LinkedIn', value: 'linkedin.com/in/shree-nithiya-k', href: personalInfo.linkedin },
  { icon: <FaGithub />, label: 'GitHub', value: 'github.com/Shreenithiyak', href: personalInfo.github },
];

export default function Contact() {
  const mutation = useSubmitContact();
  const { values, errors, handleChange, handleSubmit, reset } = useForm(
    { name: '', email: '', subject: '', message: '' },
    rules
  );

  const onSubmit = handleSubmit(async (data) => {
    await mutation.mutateAsync(data);
    toast.success("Message sent! I'll get back to you soon 🎉");
    reset();
  });

  return (
    <>
      <Helmet>
        <title>Contact — Shree Nithiya K</title>
        <meta name="description" content="Get in touch with Shree Nithiya K for job opportunities or collaborations." />
      </Helmet>

      <section className="min-h-screen px-6 lg:px-12 pt-28 pb-20">
        <motion.div variants={fadeUp} initial="hidden" animate="visible" className="text-center mb-14">
          <div className="section-tag">Get In Touch</div>
          <h1 className="section-title">Let&apos;s <span className="gradient-text">Connect</span></h1>
          <p className="text-slate-500 mt-3 text-sm max-w-md mx-auto">
            I&apos;m open to new opportunities and collaborations. Let&apos;s build something great!
          </p>
          <div className="divider-glow" />
        </motion.div>

        <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-5 gap-10">
          {/* Contact info */}
          <motion.div variants={fadeUp} initial="hidden" animate="visible" custom={1}
            className="lg:col-span-2 space-y-4">
            <h2 className="font-display font-bold text-lg mb-4">Drop Me a Message 👋</h2>
            <p className="text-slate-400 text-sm leading-relaxed mb-6">
              Whether you have a project in mind, a job opportunity, or just want to say hi — my inbox is always open.
            </p>

            {contactItems.map(({ icon, label, value, href }) => (
              <div key={label} className="glass-card p-4 flex items-center gap-4">
                <div className="w-9 h-9 rounded-lg flex items-center justify-center text-purple-400 shrink-0"
                  style={{ background: 'rgba(168,85,247,0.12)', border: '1px solid rgba(168,85,247,0.2)' }}>
                  {icon}
                </div>
                <div className="min-w-0">
                  <p className="text-[10px] text-slate-600 uppercase tracking-wider">{label}</p>
                  {href ? (
                    <a href={href} target={href.startsWith('http') ? '_blank' : undefined}
                      rel="noopener noreferrer"
                      className="text-sm font-medium text-slate-300 hover:text-purple-400 transition-colors truncate block">
                      {value}
                    </a>
                  ) : (
                    <p className="text-sm font-medium text-slate-300 truncate">{value}</p>
                  )}
                </div>
              </div>
            ))}
          </motion.div>

          {/* Contact form */}
          <motion.div variants={fadeUp} initial="hidden" animate="visible" custom={2}
            className="lg:col-span-3">
            <form onSubmit={onSubmit} className="glass-card p-8 space-y-5" noValidate>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="cf-name" className="block text-xs font-semibold text-slate-400 mb-1.5">
                    Your Name
                  </label>
                  <input
                    id="cf-name" name="name" type="text" placeholder="John Doe"
                    value={values.name} onChange={handleChange}
                    className={cn('input-dark', errors.name && 'input-error')}
                  />
                  {errors.name && <p className="text-xs text-red-400 mt-1">{errors.name}</p>}
                </div>
                <div>
                  <label htmlFor="cf-email" className="block text-xs font-semibold text-slate-400 mb-1.5">
                    Email Address
                  </label>
                  <input
                    id="cf-email" name="email" type="email" placeholder="you@example.com"
                    value={values.email} onChange={handleChange}
                    className={cn('input-dark', errors.email && 'input-error')}
                  />
                  {errors.email && <p className="text-xs text-red-400 mt-1">{errors.email}</p>}
                </div>
              </div>

              <div>
                <label htmlFor="cf-subject" className="block text-xs font-semibold text-slate-400 mb-1.5">
                  Subject
                </label>
                <input
                  id="cf-subject" name="subject" type="text" placeholder="What's this about?"
                  value={values.subject} onChange={handleChange}
                  className={cn('input-dark', errors.subject && 'input-error')}
                />
                {errors.subject && <p className="text-xs text-red-400 mt-1">{errors.subject}</p>}
              </div>

              <div>
                <label htmlFor="cf-message" className="block text-xs font-semibold text-slate-400 mb-1.5">
                  Message
                </label>
                <textarea
                  id="cf-message" name="message" rows={6}
                  placeholder="Tell me about your project or opportunity..."
                  value={values.message} onChange={handleChange}
                  className={cn('input-dark resize-none', errors.message && 'input-error')}
                />
                {errors.message && <p className="text-xs text-red-400 mt-1">{errors.message}</p>}
              </div>

              <button
                type="submit" disabled={mutation.isPending}
                className="w-full flex items-center justify-center gap-2 py-3.5 rounded-xl text-sm font-bold text-white disabled:opacity-60 transition-all"
                style={{ background: 'linear-gradient(135deg, #7c3aed, #0891b2)' }}
              >
                {mutation.isPending ? (
                  <>
                    <span className="w-4 h-4 border-2 border-white/20 border-t-white rounded-full animate-spin" />
                    Sending...
                  </>
                ) : (
                  <><FaPaperPlane /> Send Message</>
                )}
              </button>
            </form>
          </motion.div>
        </div>
      </section>
    </>
  );
}
