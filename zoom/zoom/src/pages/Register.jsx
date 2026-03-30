import React from 'react';
import Layout from '../layouts/Layout';
import { Link } from 'react-router-dom';

export default function Register() {
  return (
    <Layout>
      <div className="flex justify-center items-center min-h-[calc(100vh-200px)]">
        <div className="bg-white rounded-2xl w-full max-w-[400px] p-10 shadow-sm border border-slate-100">
          <div className="text-center mb-8">
            <h2 className="text-2xl font-semibold mb-2">Create Account</h2>
            <p className="text-slate-500">Start your interview prep journey</p>
          </div>

          <form onSubmit={(e) => e.preventDefault()}>
            <div className="flex flex-col gap-2 mb-4">
              <label className="text-sm font-medium text-slate-800">Full Name</label>
              <input type="text" className="px-4 py-3 border border-slate-200 rounded-lg text-base outline-none transition focus:border-primary focus:ring-2 focus:ring-primary/10" placeholder="John Doe" />
            </div>

            <div className="flex flex-col gap-2 mb-4">
              <label className="text-sm font-medium text-slate-800">Email address</label>
              <input type="email" className="px-4 py-3 border border-slate-200 rounded-lg text-base outline-none transition focus:border-primary focus:ring-2 focus:ring-primary/10" placeholder="you@example.com" />
            </div>
            
            <div className="flex flex-col gap-2 mb-6">
              <label className="text-sm font-medium text-slate-800">Password</label>
              <input type="password" className="px-4 py-3 border border-slate-200 rounded-lg text-base outline-none transition focus:border-primary focus:ring-2 focus:ring-primary/10" placeholder="••••••••" />
            </div>

            <Link to="/simulator" className="w-full inline-flex justify-center items-center py-3.5 bg-primary text-white rounded-lg font-medium transition hover:-translate-y-0.5 hover:shadow-md">
              Start for Free
            </Link>
          </form>

          <div className="mt-8 text-center text-sm text-slate-500">
            Already have an account? <Link to="/login" className="text-primary font-semibold hover:underline">Sign in</Link>
          </div>
        </div>
      </div>
    </Layout>
  );
}
