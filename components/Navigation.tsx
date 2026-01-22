"use client"
import { Heart, Home, LucideHouse, Search, User } from "lucide-react"
import { PlaySmartLogo } from "./PlaySmartLogo"
import { Button } from "./ui/button"
import { motion } from "framer-motion"
import { toy } from "@/app/theme/colors"

const Navigation = () => {
    const navItems = [
        {
          icon: Home,
          label: "Home",
          color: toy.blue,
        },
        {
          icon: Search,
          label: "Explore",
          color: toy.mint,
        },
        {
          icon: Heart,
          label: "Favorites",
          color: toy.coral
        },
        {
          icon: User,
          label: "Profile",
          color: toy.yellow
        },
      ];
      
    return (
        <nav className='h-19 lg:h-25 sticky top-0 z-50 bg-white/70 backdrop-blur-md shadow-sm'>
            <div className="max-w-6xl mx-auto h-19 lg:h-25 flex items-center justify-between px-4">
                <PlaySmartLogo size="md" />

                <div className="hidden lg:flex items-center gap-6">
                {
                    navItems.map((item) => (
                        <motion.button
                        key={item.label}
                        whileHover={{
                          scale: 1.05,
                          y: -2,
                        }}
                        whileTap={{
                          scale: 0.95,
                        }}
                        className="flex flex-col items-center gap-1 group"
                      >
                        <div
                          className={`p-3 rounded-2xl text-white shadow-sm group-hover:shadow-md transition-shadow`}
                          style={{ backgroundColor: item.color }}
                        >
                          <item.icon size={24} strokeWidth={2.5} />
                        </div>
                        <span className="text-sm font-semibold text-[#8A8A8A] group-hover:text-[#4A4A4A] transition-colors">
                          {item.label}
                        </span>
                      </motion.button> 
                    ))
                }
                </div>
            </div>
        </nav>
    )
}

export default Navigation