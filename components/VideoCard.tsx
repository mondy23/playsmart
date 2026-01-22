import React from 'react'
import { Play } from 'lucide-react'
import { motion } from 'framer-motion'
interface VideoCardProps {
  title: string
  duration: string
  thumbnailColor: string
  categoryColor: string
  icon?: React.ReactNode
}
export function VideoCard({
  title,
  duration,
  thumbnailColor,
  categoryColor,
  icon,
}: VideoCardProps) {
  return (
    <motion.div
      whileHover={{
        scale: 1.03,
        y: -4,
      }}
      whileTap={{
        scale: 0.98,
      }}
      className="group relative shrink-0 w-72 md:w-80 cursor-pointer"
    >
      {/* Card Container - "Block" style with thick bottom border for 3D feel */}
      <div className="bg-white rounded-3xl overflow-hidden shadow-sm border-b-[6px] border-r-2 border-gray-100 hover:shadow-lg hover:border-b-8 transition-all duration-300">
        {/* Thumbnail Area */}
        <div
          className={`h-48 w-full ${thumbnailColor} relative flex items-center justify-center overflow-hidden`}
        >
          {/* Decorative shapes in background */}
          <div className="absolute top-[-20%] right-[-20%] w-32 h-32 rounded-full bg-white/20" />
          <div className="absolute bottom-[-10%] left-[-10%] w-24 h-24 rounded-full bg-white/20" />

          {/* Main Icon/Illustration */}
          <div className="relative z-10 transform group-hover:scale-110 transition-transform duration-500">
            {icon}
          </div>

          {/* Play Button Overlay */}
          <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-black/10 backdrop-blur-[2px]">
            <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center shadow-lg transform scale-0 group-hover:scale-100 transition-transform duration-300 delay-75">
              <Play
                size={32}
                className="text-toy-charcoal ml-1"
                fill="currentColor"
              />
            </div>
          </div>

          {/* Duration Badge */}
          <div className="absolute bottom-3 right-3 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-sm font-bold text-toy-charcoal shadow-sm">
            {duration}
          </div>
        </div>

        {/* Content Area */}
        <div className="p-5">
          <div
            className={`inline-block px-3 py-1 rounded-full text-xs font-bold text-white mb-2 ${categoryColor}`}
          >
            NEW
          </div>
          <h3 className="text-lg font-bold text-toy-charcoal leading-tight mb-1 line-clamp-2">
            {title}
          </h3>
          <div className="flex items-center gap-2 mt-2">
            <div className="w-2 h-2 rounded-full bg-green-400" />
            <span className="text-sm text-toy-gray font-medium">
              Safe for kids
            </span>
          </div>
        </div>
      </div>
    </motion.div>
  )
}
