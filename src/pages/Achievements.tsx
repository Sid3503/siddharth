import { useRef } from "react";
import { motion, useScroll, useTransform, useInView } from "framer-motion";
import Navbar from "@/components/Navbar";
import SmoothScroll from "@/components/SmoothScroll";

interface AchievementItem {
  title: string;
  description: string;
  image: string;
}

const achievements: AchievementItem[] = [
  {
    title: "Level SuperMind Hackathon 2025",
    description:
      "Finalist in the Level Supermind Hackathon 2025, a national level competition in collaboration with BeerBiceps, Hitesh Choudhary, AWS, LangFlow, and DataStax.",
    image: "/images/level_supermind.jpg",
  },
  {
    title: "Google GenAI Exchange Hackathon 2024",
    description:
      "Finalist among the top 5 teams in the Glance Problem Track, out of over 38,000 registrations and 3,300 teams formed across Asia.",
    image: "/images/achieve-google.png",
  },
  {
    title: "Smart India Hackathon 2023",
    description:
      "Ranked 7th all-India and waitlisted for a computer vision problem statement in SIH 2023.",
    image: "/images/achieve-sih.png",
  },
];

const AchievementCard = ({ item, index }: { item: AchievementItem; index: number }) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(cardRef, { once: true, margin: "-50px" });

  const { scrollYProgress } = useScroll({
    target: cardRef,
    offset: ["start end", "end start"],
  });

  const totalCards = achievements.length;
  const maxScale = 1;
  const minScale = 0.9 + (totalCards - 1 - index) * 0.02;

  const scale = useTransform(
    scrollYProgress,
    [0, 0.3, 0.7, 1],
    [maxScale, maxScale, minScale, minScale]
  );

  return (
    <motion.div
      ref={cardRef}
      className="sticky mb-16"
      style={{ 
        top: `calc(8rem + ${index * 50}px)`, 
        scale, 
        transformOrigin: "top center",
        zIndex: index + 1, 
        perspective: 1200 
      }}
    >
      <div className="rounded-xl overflow-hidden bg-card border border-border group cursor-pointer">
        {/* Top meta bar */}
        <div className="flex items-center justify-between px-5 py-3 border-b border-border">
          <span className="font-mono text-xs text-primary">Achievement</span>
          <span className="font-mono text-xs text-muted-foreground">#{index + 1}</span>
        </div>

        {/* Split layout: image + text */}
        <div className="grid grid-cols-1 md:grid-cols-2">
          {/* Image half */}
          <div className="relative flex items-center justify-center p-6 overflow-hidden aspect-[16/9] md:aspect-[4/3] bg-muted/20">
            <motion.img
              src={item.image}
              alt={item.title}
              className="w-full h-full object-contain transition-transform duration-700 group-hover:scale-105"
              loading="lazy"
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              transition={{ duration: 0.6 }}
            />
          </div>

          {/* Text half */}
          <div className="flex flex-col justify-center px-6 md:px-10 py-8">
            <motion.h3
              className="text-2xl md:text-3xl lg:text-4xl font-display font-bold text-foreground mb-4"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              {item.title}
            </motion.h3>
            <motion.p
              className="text-sm md:text-base text-muted-foreground leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              {item.description}
            </motion.p>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

const AchievementsPage = () => {
  return (
    <SmoothScroll>
      <div className="min-h-screen bg-background">
        <Navbar />
        <div className="blur-content">
          
          {/* Hero */}
          <section className="relative px-6 md:px-12 lg:px-20 pt-32 pb-0">
            <div className="max-w-7xl mx-auto flex flex-col md:flex-row md:items-end md:justify-between gap-4">
              <motion.h1
                className="text-5xl sm:text-7xl md:text-8xl lg:text-[7rem] font-display font-bold leading-[1.0] tracking-[-0.03em] text-foreground"
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
              >
                achievements
              </motion.h1>

              <motion.p
                className="font-mono text-xs text-muted-foreground pb-3 max-w-xs md:text-right"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                milestones and competitive engagements
              </motion.p>
            </div>

            <motion.div
              className="max-w-7xl mx-auto mt-10 h-px bg-border"
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 0.9, ease: "easeOut" }}
              style={{ transformOrigin: "left" }}
            />
          </section>

          {/* Content layer */}
          <section className="px-6 md:px-12 lg:px-20 py-16 pb-32">
            <div className="max-w-6xl mx-auto flex flex-col relative">
              {achievements.map((item, index) => (
                <AchievementCard key={item.title} item={item} index={index} />
              ))}
            </div>
          </section>

        </div>
      </div>
    </SmoothScroll>
  );
};

export default AchievementsPage;
