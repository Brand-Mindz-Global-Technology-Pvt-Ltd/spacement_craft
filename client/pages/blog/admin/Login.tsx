import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../../contexts/AuthContext';
import { toast } from 'react-hot-toast';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const { login } = useAuth();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    e.preventDefault();

    if (!email || !password) {
      toast.error('Please fill in all fields');
      return;
    }

    setLoading(true);
    try {
      await login(email, password, rememberMe);
      toast.success('Login successful!');
      navigate('/admin/blog/dashboard');
    } catch (err: any) {
      console.error('Login error:', err);

      // Simplified Error Handling with Support Link
      toast.error('Invalid email or password. Please try again.');
    } finally {
      setLoading(false);
    }
  };

return (
  <div className="min-h-screen w-full relative overflow-hidden bg-black flex items-center justify-center">
    {/* Animated Background Gradient */}
    <div className="absolute inset-0 bg-gradient-to-br from-[#0DF7D4]/20 via-black to-[#2C7BDC]/20" />

    {/* Floating Orbs */}
    <div className="absolute top-20 left-20 w-72 h-72 bg-[#0DF7D4]/30 rounded-full blur-[120px] animate-pulse" />
    <div className="absolute bottom-20 right-20 w-96 h-96 bg-[#2C7BDC]/30 rounded-full blur-[120px] animate-pulse delay-1000" />

    {/* Login Card */}
    <div className="relative z-10 w-full max-w-md px-6">
      {/* Logo/Title */}
      <div className="text-center mb-8">
        <h1 className="font-reem text-4xl md:text-5xl text-white mb-2 tracking-wide">
          Admin Panel
        </h1>
        <div className="h-1 w-24 mx-auto bg-gradient-to-r from-[#0DF7D4] to-[#2C7BDC] rounded-full" />
      </div>

      {/* Card */}
      <div
        className="relative backdrop-blur-xl bg-white/5 border border-white/10 rounded-2xl p-8 shadow-2xl"
        style={{
          boxShadow: '0 8px 32px 0 rgba(13, 247, 212, 0.1)'
        }}
      >
        {/* Inner Glow */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#0DF7D4]/5 to-[#2C7BDC]/5 rounded-2xl" />

        <div className="relative z-10">
          <h2 className="font-reem text-2xl text-white mb-6 text-center">
            Welcome Back
          </h2>

          <form onSubmit={handleSubmit} className="space-y-5">
            {/* Email Input */}
            <div>
              <label className="block text-sm font-inter text-gray-300 mb-2">
                Email Address
              </label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:border-[#0DF7D4] focus:ring-[#0DF7D4]/20 transition-all font-inter"
                placeholder="admin@example.com"
                disabled={loading}
              />
            </div>

            {/* Password Input */}
            <div>
              <label className="block text-sm font-inter text-gray-300 mb-2">
                Password
              </label>
              <div className="relative">
                <input
                  type={showPassword ? "text" : "password"}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full px-4 py-3 pr-12 bg-white/5 border border-white/10 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:border-[#0DF7D4] focus:ring-[#0DF7D4]/20 transition-all font-inter"
                  placeholder="••••••••"
                  disabled={loading}
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-[#0DF7D4] transition-colors"
                  disabled={loading}
                >
                  {showPassword ? (
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.88 9.88l-3.29-3.29m7.532 7.532l3.29 3.29M3 3l3.59 3.59m0 0A9.953 9.953 0 0112 5c4.478 0 8.268 2.943 9.543 7a10.025 10.025 0 01-4.132 5.411m0 0L21 21" />
                    </svg>
                  ) : (
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                    </svg>
                  )}
                </button>
              </div>
            </div>

            {/* Remember Me */}
            <div className="flex items-center">
              <input
                type="checkbox"
                id="rememberMe"
                checked={rememberMe}
                onChange={(e) => setRememberMe(e.target.checked)}
                className="w-4 h-4 rounded border-white/10 bg-white/5 text-[#0DF7D4] focus:ring-[#0DF7D4] focus:ring-offset-0"
                disabled={loading}
              />
              <label htmlFor="rememberMe" className="ml-2 text-sm font-inter text-gray-300">
                Remember me
              </label>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              disabled={loading}
              className="w-full py-3 px-4 bg-gradient-to-r from-[#0DF7D4] to-[#2C7BDC] text-white font-inter font-semibold rounded-lg hover:shadow-lg hover:shadow-[#0DF7D4]/50 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
            >
              {loading ? (
                <>
                  <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                  <span>Signing in...</span>
                </>
              ) : (
                'Sign In'
              )}
            </button>
          </form>
        </div>
      </div>

      {/* Footer Text */}
      <div className="text-center mt-8">
        <p className="text-gray-500 text-sm font-inter">
          Having trouble signing in?
        </p>
        <a
          href="mailto:brandmindzteam@gmail.com"
          className="text-[#0DF7D4] hover:text-[#2C7BDC] text-sm font-medium transition-colors mt-1 inline-block"
        >
          Contact Support Team
        </a>
      </div>
    </div>
  </div>
);
};

export default Login;
