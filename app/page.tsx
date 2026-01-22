import { CategorySection } from "@/components/CategorySection";
import Footer from "@/components/Footer";
import Learn from "@/components/Learn";
import MusicDance from "@/components/MusicDance";
import Navigation from "@/components/Navigation";
import { PatternBackground } from "@/components/PatternBackground";
import Story from "@/components/Story";
import { Shapes, BookOpen, Sun, Rocket, Music, Cat } from "lucide-react";
import { toy } from "./theme/colors";
import { Hero } from "@/components/Hero";

export default function Home() {
  // Mock Data
  const learningVideos = [
    {
      id: '1',
      title: 'Counting with Colors',
      duration: '5:30',
      color: "bg-[#4CAF50]",
      icon: <Shapes size={64} className="text-white opacity-80" />,
    },
    {
      id: '2',
      title: 'The Alphabet Song',
      duration: '3:45',
      color: "bg-[#4FC3F7]",
      icon: <BookOpen size={64} className="text-white opacity-80" />,
    },
    {
      id: '3',
      title: 'Shapes in Nature',
      duration: '6:15',
      color: "bg-[#FFEB3B]",
      icon: <Sun size={64} className="text-white opacity-80" />,
    },
    {
      id: '4',
      title: 'Big & Small',
      duration: '4:20',
      color: "bg-[#FF6B6B]",
      icon: <Rocket size={64} className="text-white opacity-80" />,
    },
  ]
  const musicVideos = [
    {
      id: '5',
      title: 'Morning Dance Party',
      duration: '12:00',
      color: "bg-[#FF6B6B]",
      icon: <Music size={64} className="text-white opacity-80" />,
    },
    {
      id: '6',
      title: 'Sleepy Time Lullabies',
      duration: '15:30',
      color: "bg-[#4FC3F7]",
      icon: <Sun size={64} className="text-white opacity-80" />,
    },
    {
      id: '7',
      title: 'Animal Sounds',
      duration: '4:45',
      color: "bg-[#4CAF50]",
      icon: <Cat size={64} className="text-white opacity-80" />,
    },
  ]
  const storyVideos = [
    {
      id: '8',
      title: 'The Little Bear',
      duration: '8:15',
      color: "bg-[#FFEB3B]",
      icon: <Cat size={64} className="text-white opacity-80" />,
    },
    {
      id: '9',
      title: 'Space Adventure',
      duration: '10:00',
      color: "bg-[#4FC3F7]",
      icon: <Rocket size={64} className="text-white opacity-80" />,
    },
    {
      id: '10',
      title: 'Magic Garden',
      duration: '7:30',
      color: "bg-[#4CAF50]",
      icon: <Shapes size={64} className="text-white opacity-80" />,
    },
  ]
  return (
    <>
      <Navigation />
      <Hero />

      <div className="relative">
        <PatternBackground type="dots" color="#4A4A4A" opacity={0.03} />

        <div className="space-y-4 md:space-y-12 pb-20">
          <CategorySection
            title="Let's Learn!"
            description="Fun lessons for growing minds"
            color="bg-[#4CAF50]"
            videos={learningVideos}
            pattern="dots"
          />

          <CategorySection
            title="Music & Dance"
            description="Move your body to the beat"
            color="bg-[#FF6B6B]"
            videos={musicVideos}
            pattern="waves"
          />

          <CategorySection
            title="Story Time"
            description="Magical tales before nap time"
            color="bg-[#FFEB3B]"
            videos={storyVideos}
            pattern="dots"
          />
        </div>
      </div>

      <Footer />
    </>
  );
}
