"use client"
import React, { useRef } from 'react'
import { motion, useInView, Variants } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import { VideoCard } from './VideoCard'

interface Video {
  id: string
  title: string
  duration: string
  color: string
  icon: React.ReactNode
}

interface CategorySectionProps {
  title: string
  description?: string
  color: string // Tailwind color class for accents
  videos: Video[]
  pattern?: 'dots' | 'waves'
}

export function CategorySection({
  title,
  description,
  color,
  videos,
  pattern = 'dots',
}: CategorySectionProps) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  // Explicitly type variants as Framer Motion Variants
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1, // OK here
      },
    },
  }

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: 'spring', // 'spring' is allowed
        stiffness: 50,
      },
    },
  }

  return (
    <section ref={ref} className="py-8 md:py-12 relative overflow-hidden">
      {/* Background decoration */}
      <div
        className={`absolute top-0 left-0 w-full h-full opacity-30 pointer-events-none -z-10 ${
          pattern === 'waves' ? 'bg-toy-blue/5' : 'bg-transparent'
        }`}
      />

      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="flex items-end justify-between mb-8">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-toy-charcoal mb-2 flex items-center gap-3">
              <span className={`w-4 h-8 rounded-full ${color}`} />
              {title}
            </h2>
            {description && (
              <p className="text-toy-gray text-lg ml-7 font-medium">{description}</p>
            )}
          </div>

          <button className="hidden md:flex items-center gap-2 text-toy-charcoal font-bold hover:gap-3 transition-all group">
            See All
            <div
              className={`w-8 h-8 rounded-full ${color} flex items-center justify-center text-white group-hover:scale-110 transition-transform`}
            >
              <ArrowRight size={16} />
            </div>
          </button>
        </div>

        <motion.div
  variants={containerVariants}
  initial="hidden"
  animate={isInView ? 'visible' : 'hidden'}
  className="flex gap-6 overflow-x-auto pb-8 pt-2 px-2 -mx-2 snap-x snap-mandatory no-scrollbar"
>
  {videos.map((video) => (
    <motion.div key={video.id} variants={itemVariants} className="snap-start">
      <VideoCard
        title={video.title}
        duration={video.duration}
        thumbnailColor={video.color}
        categoryColor={color}
        icon={video.icon}
      />
    </motion.div>
  ))}

  {/* "See More" Card */}
  <motion.div
    variants={itemVariants}
    className="snap-start shrink-0 w-48 flex items-center justify-center"
  >
    <button className="w-20 h-20 rounded-full bg-white border-4 border-gray-100 flex items-center justify-center text-toy-gray hover:scale-110 hover:border-toy-blue hover:text-toy-blue transition-all">
      <ArrowRight size={32} />
    </button>
  </motion.div>
</motion.div>

      </div>
    </section>
  )
}
