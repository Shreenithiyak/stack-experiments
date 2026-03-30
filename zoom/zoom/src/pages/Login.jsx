import React from 'react';
import Layout from '../layouts/Layout';
import { Link } from 'react-router-dom';

export default function Login() {
  return (
    <Layout>
      <div className="flex justify-center items-center min-h-[calc(100vh-200px)]">
        <div className="bg-white rounded-2xl w-full max-w-[400px] p-10 shadow-sm border border-slate-100">
          <div className="text-center mb-8">
            <h2 className="text-2xl font-semibold mb-2">Welcome Back</h2>
            <p className="text-slate-500">Sign in to your InterviewReady account</p>
          </div>

          <form onSubmit={(e) => e.preventDefault()}>
            <div className="flex flex-col gap-2 mb-4">
              <label className="text-sm font-medium text-slate-800">Email address</label>
              <input type="email" className="px-4 py-3 border border-slate-200 rounded-lg text-base outline-none transition focus:border-primary focus:ring-2 focus:ring-primary/10" placeholder="you@example.com" />
            </div>
            
            <div className="flex flex-col gap-2 mb-6">
              <div className="flex justify-between">
                <label className="text-sm font-medium text-slate-800">Password</label>
                <a href="#" className="text-sm text-primary hover:underline">Forgot?</a>
              </div>
              <input type="password" className="px-4 py-3 border border-slate-200 rounded-lg text-base outline-none transition focus:border-primary focus:ring-2 focus:ring-primary/10" placeholder="••••••••" />
            </div>

            <Link to="/dashboard" className="w-full inline-flex justify-center items-center py-3.5 bg-primary text-white rounded-lg font-medium transition hover:-translate-y-0.5 hover:shadow-md">
              Sign In
            </Link>
          </form>

          <div className="mt-8 text-center text-sm text-slate-500">
            Don't have an account? <Link to="/register" className="text-primary font-semibold hover:underline">Sign up</Link>
          </div>
        </div>
      </div>
    </Layout>
  );
}
