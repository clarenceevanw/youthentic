import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";

interface AboutCard {
  id: number;
  title: string;
  description: string;
  imageUrl: string;
}

const aboutCards: AboutCard[] = [
  {
    id: 1,
    title: "Filosofi Kami",
    description: "Youthentic percaya bahwa setiap individu memiliki cerita unik. Parfum kami dirancang untuk mengekspresikan kepribadian Anda yang autentik dan muda.",
    imageUrl: "/assets/50ml/Noir.png"
  },
  {
    id: 2,
    title: "Bahan Premium",
    description: "Kami hanya menggunakan bahan-bahan premium dan berkualitas tinggi yang dipilih dengan cermat dari Barcelona untuk menciptakan aroma yang sempurna.",
    imageUrl: "https://images.unsplash.com/photo-1759382622584-c1fae60c415d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwZXJmdW1lJTIwaW5ncmVkaWVudHMlMjBsYXZlbmRlcnxlbnwxfHx8fDE3NjE3MTE0MTF8MA&ixlib=rb-4.1.0&q=80&w=1080"
  },
  {
    id: 3,
    title: "Proses Kami",
    description: "Setiap botol melalui proses pembuatan yang teliti dan penuh perhatian. Dari formulasi hingga packaging, kami memastikan kualitas terbaik di setiap tahap.",
    imageUrl: "https://images.unsplash.com/photo-1709662217788-6a8a1b31562a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwZXJmdW1lJTIwbWFraW5nJTIwcHJvY2Vzc3xlbnwxfHx8fDE3NjE3MTE0MTF8MA&ixlib=rb-4.1.0&q=80&w=1080"
  },
  {
    id: 4,
    title: "Identitas",
    description: "Bukan hanya parfum, tapi hadir di setiap nuansa hidup kalian saat hujan turun, di tengah hiruk pikuk kota, atau di momen santai bersama teman. Youthentic diciptakan untuk menemani setiap kepribadian dan kesukaan, karena keaslian punya banyak aroma dan semuanya layak dirayakan.",
    imageUrl: "/assets/50ml/Crimson.png"
  }
];

export function AboutUs() {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

  return (
    <section className="min-h-screen py-20 px-4 md:px-8 relative">
      {/* Seamless background continuation */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#0a0a0a] to-transparent -z-10" />
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="max-w-7xl mx-auto"
      >
        <h2 className="text-white text-center mb-6 text-4xl md:text-5xl lg:text-6xl" style={{ fontWeight: "bold" }}>About Us</h2>
        <p className="text-white/60 text-center mb-16 max-w-3xl mx-auto text-lg md:text-xl">
          Discover our philosophy and dedication in crafting authentic fragrances made with passion and fine ingredients sourced from Barcelona.
        </p>

        <div className="flex flex-col md:flex-row gap-4 items-stretch">
          {aboutCards.map((card) => {
            const isHovered = hoveredCard === card.id;
            const isOtherHovered = hoveredCard !== null && hoveredCard !== card.id;

            return (
              <motion.div
                key={card.id}
                className="relative overflow-hidden rounded-lg cursor-pointer"
                style={{
                  flex: isHovered ? "2" : "1",
                  transition: "flex 0.5s ease-in-out"
                }}
                onMouseEnter={() => setHoveredCard(card.id)}
                onMouseLeave={() => setHoveredCard(null)}
                animate={{
                  opacity: isOtherHovered ? 0.5 : 1
                }}
                transition={{ duration: 0.3 }}
              >
                {/* Background Image */}
                <div className="absolute inset-0">
                  <img
                    src={card.imageUrl}
                    alt={card.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-black/30" />
                </div>

                {/* Content */}
                <div className="relative h-[400px] md:h-[500px] p-6 flex flex-col justify-end">
                  <h3 className="text-white mb-3">{card.title}</h3>
                  
                  <AnimatePresence>
                    {isHovered && (
                      <motion.p
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3 }}
                        className="text-white/80 text-sm md:text-base leading-relaxed"
                      >
                        {card.description}
                      </motion.p>
                    )}
                  </AnimatePresence>
                </div>
              </motion.div>
            );
          })}
        </div>
      </motion.div>
    </section>
  );
}
