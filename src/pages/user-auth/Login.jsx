import React, { useState } from 'react';
import { motion } from 'framer-motion';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleLogin = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => setIsSubmitting(false), 2000); // Loading animation
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-[#111827]">
      <motion.div
        className="bg-white bg-opacity-10 p-10 rounded-3xl shadow-2xl shadow-black/50 backdrop-blur-lg max-w-md w-full"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <h2 className="text-3xl font-bold text-[#ffffff] text-center mb-8">Kirish Sahifasi</h2>
        <form onSubmit={handleLogin} className="space-y-6">
          <div className="relative">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="w-full px-4 py-3 rounded-lg bg-transparent border border-[#ffffff] text-[#ffffff] placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#2dd4bf]"
              placeholder="Email"
            />
          </div>
          <div className="relative">
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="w-full px-4 py-3 rounded-lg bg-transparent border border-[#ffffff] text-[#ffffff] placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#2dd4bf]"
              placeholder="Parol"
            />
          </div>
          <motion.button
            type="submit"
            className="w-full py-3 mt-4 rounded-lg bg-[#2dd4bf] text-[#111827] font-bold transition-transform transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#ffffff]"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            disabled={isSubmitting}
          >
            {isSubmitting ? (
              <span className="loader ease-linear rounded-full border-4 border-t-4 border-[#ffffff] h-6 w-6 mx-auto"></span>
            ) : (
              'Kirish'
            )}
          </motion.button>
        </form>
        <div className="mt-6 text-center text-[#ffffff]">
          <p className="text-sm">
            Hisobingiz yo'qmi?{' '}
            <a href="/register" className="text-[#2dd4bf] hover:underline">
              Ro'yxatdan o'tish
            </a>
          </p>
        </div>
      </motion.div>
    </div>
  );
};

export default Login;
