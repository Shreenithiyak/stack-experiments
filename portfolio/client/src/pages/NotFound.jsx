import { Link } from 'react-router-dom';

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center text-center px-6">
      <div className="font-display text-8xl font-extrabold gradient-text mb-4">404</div>
      <h1 className="text-2xl font-bold text-slate-200 mb-3">Page Not Found</h1>
      <p className="text-slate-500 text-sm mb-8">
        The page you&apos;re looking for doesn&apos;t exist or has been moved.
      </p>
      <Link to="/" className="btn-primary">Go Back Home</Link>
    </div>
  );
}
