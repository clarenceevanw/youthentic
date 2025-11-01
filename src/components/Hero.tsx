import { motion } from "motion/react";
import { ChevronDown } from "lucide-react";
import { Button } from "./ui/button";
import perfumeImage from "../assets/ParfumDepan.png";

interface HeroProps {
  onBuyNowClick: () => void;
}

const scrollToAbout = () => {
  const aboutSection = document.querySelector("#about");
  if (aboutSection) {
    const offset = 80;
    const elementPosition = aboutSection.getBoundingClientRect().top;
    const offsetPosition = elementPosition + window.pageYOffset - offset;

    window.scrollTo({
      top: offsetPosition,
      behavior: "smooth",
    });
  }
};

export function Hero({ onBuyNowClick }: HeroProps) {
  return (
    <section className="relative h-screen w-full flex items-center justify-center pt-5">
      <div className="relative w-full h-full flex items-center justify-center px-4">
        {/* Large Background Text */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none overflow-hidden">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.5, ease: "easeOut" }}
            className="relative flex flex-col items-center"
          >
            {/* YOUTH */}
            <div
              className="text-[18vw] md:text-[20vw] lg:text-[22vw] leading-[0.8] tracking-tighter"
              style={{
                background:
                  "linear-gradient(180deg, rgba(212,175,55,0.2) 0%, rgba(212,175,55,0.05) 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                fontFamily: "system-ui, -apple-system, sans-serif",
                fontWeight: 900,
                WebkitTextStroke: "1px rgba(212,175,55,0.25)",
              }}
            >
              YOUTH
            </div>

            {/* ENTIC */}
            <div
              className="text-[18vw] md:text-[20vw] lg:text-[22vw] leading-[0.8] tracking-tighter -mt-[3vw]"
              style={{
                background:
                  "linear-gradient(180deg, rgba(212,175,55,0.2) 0%, rgba(212,175,55,0.05) 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                fontFamily: "system-ui, -apple-system, sans-serif",
                fontWeight: 900,
                WebkitTextStroke: "1px rgba(212,175,55,0.25)",
              }}
            >
              ENTIC
            </div>
          </motion.div>
        </div>

        {/* Product Image - In Front */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8, y: 30 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 0.3, ease: "easeOut" }}
          className="relative z-20 flex items-center justify-center"
        >
          {/* Smaller Glow Behind Product */}
          <motion.div
            animate={{ scale: [1, 1.1, 1] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2
                       w-[250px] h-[250px] md:w-[350px] md:h-[350px]
                       bg-[#D4AF37]/30 blur-[100px] rounded-full"
          />

          {/* Product Image */}
          <div className="relative w-[320px] h-[450px] md:w-[450px] md:h-[600px] lg:w-[500px] lg:h-[650px]">
            <img
              src={perfumeImage}
              alt="Youthentic Perfume Collection"
              className="w-full h-full object-contain"
              style={{
                filter: "drop-shadow(0 25px 50px rgba(212, 175, 55, 0.3))",
              }}
            />
          </div>

          {/* Small Info Card on Product */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 1 }}
            className="absolute top-[15%] -left-4 md:-left-8 bg-black/60 backdrop-blur-md border border-white/10 rounded-lg p-3 md:p-4"
          >
            <p className="text-white/60 text-xs mb-1">SIGNATURE SCENT</p>
            <p className="text-white text-sm md:text-base">Midnight Elegance</p>
            <p className="text-[#D4AF37] text-xs mt-1">Limited Edition</p>
          </motion.div>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.button
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.2 }}
          onClick={scrollToAbout}
          className="absolute bottom-6 left-1/2 -translate-x-1/2 cursor-pointer hover:opacity-100 transition-opacity z-50"
        >
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          >
            <ChevronDown className="w-6 h-6 text-white/40" />
          </motion.div>
        </motion.button>
      </div>
    </section>
  );
}
