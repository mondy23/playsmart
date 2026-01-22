"use client"
import { motion } from 'framer-motion'
import { Play, Star, Music, BookOpen } from 'lucide-react'
import { PatternBackground } from './PatternBackground'

export function Hero() {
  return (
    <div className="relative w-full overflow-hidden bg-[#FDFBF7] pt-8 pb-16 md:py-20">
      <PatternBackground type="waves" color="#B8D4E8" opacity={0.3} />

      {/* Decorative floating shapes */}
      <motion.div
        animate={{ y: [0, -20, 0], rotate: [0, 5, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute top-20 left-[10%] w-16 h-16 rounded-full bg-[#FFEB3B] opacity-60 blur-sm"
      />
      <motion.div
        animate={{ y: [0, 30, 0], rotate: [0, -10, 0] }}
        transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
        className="absolute bottom-20 right-[5%] w-24 h-24 rounded-3xl bg-[#4CAF50] opacity-60 blur-sm rotate-12"
      />

      <div className="max-w-7xl mx-auto px-4 md:px-8 relative z-10">
        <div className="flex flex-col md:flex-row items-center gap-12">
          {/* Text Content */}
          <div className="flex-1 text-center md:text-left">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <span className="inline-block px-4 py-2 rounded-full bg-[#4FC3F7]/20 text-[#4A4A4A] font-bold text-sm mb-6 border border-[#4FC3F7]/30">
                👋 Welcome to the Playroom!
              </span>

              <h1 className="text-5xl md:text-7xl font-extrabold text-[#4A4A4A] leading-[1.1] mb-6 tracking-tight">
                Learn, Play, <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#4FC3F7] via-[#FF6B6B] to-[#FFEB3B]">
                  & Grow Together
                </span>
              </h1>

              <p className="text-xl text-[#8A8A8A] font-medium mb-8 max-w-lg mx-auto md:mx-0">
                Safe, educational adventures for curious little minds. No ads, just joy.
              </p>

              <div className="flex flex-col sm:flex-row items-center gap-4 justify-center md:justify-start">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-4 bg-[#4A4A4A] text-white rounded-2xl font-bold text-lg shadow-lg shadow-[#4A4A4A]/20 flex items-center gap-3"
                >
                  <Play fill="currentColor" size={20} />
                  Start Watching
                </motion.button>

                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-4 bg-white text-[#4A4A4A] border-2 border-gray-100 rounded-2xl font-bold text-lg shadow-sm hover:border-[#4FC3F7] transition-colors"
                >
                  Browse Topics
                </motion.button>
              </div>
            </motion.div>
          </div>

          {/* Hero Illustration */}
          <div className="flex-1 w-full max-w-md md:max-w-lg relative">
            <motion.div
              initial={{ opacity: 0, scale: 0.8, rotate: -5 }}
              animate={{ opacity: 1, scale: 1, rotate: 0 }}
              transition={{ duration: 0.8, type: 'spring' }}
              className="relative z-10"
            >
              <div className="bg-white p-4 rounded-[40px] shadow-xl border-b-12 border-r-4 border-[#4FC3F7]/20">
                <div className="bg-[#4FC3F7] rounded-[32px] aspect-[4/3] relative overflow-hidden flex items-center justify-center group cursor-pointer">
                  <div className="absolute inset-0 bg-gradient-to-tr from-white/10 to-transparent" />

                  {/* Abstract Character */}
                  <div className="relative">
                    <div className="w-32 h-32 bg-white rounded-full shadow-lg flex items-center justify-center">
                      <div className="w-24 h-24 bg-[#FFEB3B] rounded-full flex items-center justify-center relative overflow-hidden">
                        <div className="absolute top-6 left-6 w-3 h-3 bg-[#4A4A4A] rounded-full" />
                        <div className="absolute top-6 right-6 w-3 h-3 bg-[#4A4A4A] rounded-full" />
                        <div className="absolute bottom-6 w-8 h-4 border-b-4 border-[#4A4A4A] rounded-full" />
                      </div>
                    </div>
                  </div>

                  <div className="absolute bottom-6 left-6 right-6 bg-white/90 backdrop-blur-md p-4 rounded-2xl shadow-sm">
                    <div className="flex items-center gap-3">
                      <div className="p-2 bg-[#FF6B6B] rounded-xl text-white">
                        <Music size={20} />
                      </div>
                      <div>
                        <h3 className="font-bold text-[#4A4A4A]">Morning Songs</h3>
                        <p className="text-xs text-[#8A8A8A] font-bold">12 mins • Music</p>
                      </div>
                      <div className="ml-auto w-10 h-10 bg-[#4A4A4A] rounded-full flex items-center justify-center text-white">
                        <Play size={16} fill="currentColor" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Floating Elements behind */}
            <motion.div
              animate={{ y: [0, -15, 0] }}
              transition={{ duration: 4, repeat: Infinity, delay: 0.5 }}
              className="absolute -top-8 -right-8 w-24 h-24 bg-[#FF6B6B] rounded-3xl -z-10 rotate-12 opacity-80"
            />
            <motion.div
              animate={{ y: [0, 15, 0] }}
              transition={{ duration: 5, repeat: Infinity, delay: 1 }}
              className="absolute -bottom-8 -left-8 w-32 h-32 bg-[#4FC3F7] rounded-full -z-10 opacity-80"
            />
          </div>
        </div>
      </div>
    </div>
  )
}
