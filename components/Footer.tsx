import { toy } from '@/app/theme/colors'
import { Heart, Shapes, Sun } from 'lucide-react'

const Footer = () => {
    return (
        <footer className="bg-white border-t-4 border-toy-blue/10 py-12 relative overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 text-center relative z-10">
                <div className="flex justify-center gap-4 mb-8">
                    <div className="w-12 h-12 rounded-full flex items-center justify-center text-white"
                        style={{ backgroundColor: toy.blue }}
                    >
                        <Shapes size={24} />
                    </div>
                    <div className="w-12 h-12 rounded-full flex items-center justify-center text-white"
                        style={{ backgroundColor: toy.mint }}
                    >
                        <Heart size={24} fill="currentColor" />
                    </div>
                    <div className="w-12 h-12 rounded-full flex items-center justify-center text-white"
                        style={{ backgroundColor: toy.coral }}
                    >
                        <Sun size={24} />
                    </div>
                </div>
                <p className="text-toy-gray font-medium">
                    Made with joy for little explorers.
                </p>
                <p className="text-sm text-toy-gray/60 mt-2">
                    © 2026 PlaySmart Kids
                </p>
            </div>

            {/* Footer decoration */}
            <div
                className="absolute bottom-0 left-0 w-full h-4"
                style={{
                    background: `linear-gradient(to right, ${toy.blue}, ${toy.mint}, ${toy.coral})`,
                }}
            />
        </footer>
    )
}

export default Footer