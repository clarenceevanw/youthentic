import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "./ui/button.tsx";
import { useState, useEffect } from "react";

// DIUBAH: Interface 'price'
export interface Product {
  id: number;
  name: string;
  price: {
    '10ml': string;
    '50ml': string;
  };
  description: string;
  imageUrl: string;
  images: string[];
  tokopediaLink: string;
  shopeeLink: string;
  tiktokLink: string;
}

const tiktokLink = "https://www.tiktok.com/@youthenticfragrance";

// DIUBAH: Semua 'price' di-update ke format objek
export const products: Product[] = [
  {
    id: 1,
    name: "Crimson Woods",
    price: { '10ml': "Rp 29.999 - Rp 34.999", '50ml': "Rp 100.000 - Rp 139.999" },
    description:
      "Aroma yang tenang, dewasa, dan penuh karakter. Perpaduan rempah, kayu, dan musk menghadirkan wangi yang stabil, earthy, dan berkelas. Bukan aroma yang teriak. Tapi aroma yang tinggal.",
    imageUrl: "/assets/50ml/Crimson.png",
    images: ["/assets/50ml/Crimson.png", "/assets/detail-product/YUTENTIK/CRIMSON 50ML/c.jpeg", "/assets/detail-product/YUTENTIK/CRIMSON 50ML/1.jpeg", "/assets/detail-product/YUTENTIK/CRIMSON 50ML/2.jpeg", "/assets/detail-product/YUTENTIK/CRIMSON 50ML/3.jpeg", "/assets/detail-product/YUTENTIK/CRIMSON 50ML/4.jpeg"],
    tokopediaLink: "https://vt.tokopedia.com/t/ZSHcY1jGLKrbN-u7Jry/",
    shopeeLink: "https://id.shp.ee/Ex3Eje3",
    tiktokLink: tiktokLink,
  },
  {
    id: 2,
    name: "Citrus Rush",
    price: { '10ml': "Rp 29.999 - Rp 34.999", '50ml': "Rp 100.000 - Rp 139.999" },
    description:
      "Bangun hari dengan wangi yang cerah, renyah, dan bikin fokus. Citrus Rush memadukan semburat jeruk segar dengan nuansa floral lembut dan akhir yang bersih—pas untuk kerja, kuliah, sampai hangout siang hari. Ringan, clean, dan quietly unstoppable.",
    imageUrl: "/assets/50ml/Citrus Rush.png",
    images: ["/assets/50ml/Citrus Rush.png", "/assets/detail-product/YUTENTIK/CRIMSON 50ML/c.jpeg", "/assets/detail-product/YUTENTIK/CRIMSON 50ML/1.jpeg", "/assets/detail-product/YUTENTIK/CRIMSON 50ML/2.jpeg", "/assets/detail-product/YUTENTIK/CRIMSON 50ML/3.jpeg", "/assets/detail-product/YUTENTIK/CRIMSON 50ML/4.jpeg"],
    tokopediaLink: "https://vt.tokopedia.com/t/ZSHcY12uXVsGx-ykriK/",
    shopeeLink: "https://id.shp.ee/UAfkYse",
    tiktokLink: tiktokLink,
  },
  {
    id: 3,
    name: "Lumira",
    price: { '10ml': "Rp 29.999 - Rp 34.999", '50ml': "Rp 100.000 - Rp 139.999" },
    description:
      "Lumira terasa seperti cahaya hangat yang menyentuh kulit—halus, airy, dan menenangkan. Bukaan segar yang ringan berbaur dengan floral transparan, lalu merapat menjadi jejak amber–musk yang lembut dan skin-like. Hasilnya wangi yang terasa rapi, nyaman, dan memberi rasa percaya diri tanpa harus berisik.",
    imageUrl: "/assets/50ml/Lumira.png",
    images: ["/assets/50ml/Lumira.png", "/assets/detail-product/YUTENTIK/CRIMSON 50ML/c.jpeg", "/assets/detail-product/YUTENTIK/CRIMSON 50ML/1.jpeg", "/assets/detail-product/YUTENTIK/CRIMSON 50ML/2.jpeg", "/assets/detail-product/YUTENTIK/CRIMSON 50ML/3.jpeg", "/assets/detail-product/YUTENTIK/CRIMSON 50ML/4.jpeg"],
    tokopediaLink: "https://vt.tokopedia.com/t/ZSHcY18DcnRMr-1IiEL/",
    shopeeLink: "https://id.shp.ee/tu5fmAk",
    tiktokLink: tiktokLink,
  },
  {
    id: 4,
    name: "Ethereal Bloom",
    price: { '10ml': "Rp 29.999 - Rp 34.999", '50ml': "Rp 100.000 - Rp 139.999" },
    description:
      "Essence dari Barcelona | Sweet – Feminine – Radiant. Ethereal Bloom adalah aroma untuk perempuan yang lembut tapi kuat, manis tapi tetap dewasa. Wangi yang membuat orang nyaman dan ingin lebih dekat.",
    imageUrl: "/assets/50ml/Ethereal.png",
    images: ["/assets/50ml/Ethereal.png", "/assets/detail-product/YUTENTIK/ETHEREAL 50ML/COVER.jpeg", "/assets/detail-product/YUTENTIK/ETHEREAL 50ML/2.jpeg", "/assets/detail-product/YUTENTIK/ETHEREAL 50ML/1.jpeg"],
    tokopediaLink: "https://vt.tokopedia.com/t/ZSHcFow2FojF4-mJRd1/",
    shopeeLink: "https://id.shp.ee/YxcD1RC",
    tiktokLink: tiktokLink,
  },
  {
    id: 5,
    name: "Noche",
    price: { '10ml': "Rp 29.999 - Rp 34.999", '50ml': "Rp 100.000 - Rp 139.999" },
    description:
      "Essence dari Barcelona | Bold – Sweet – Magnetic. Noche adalah wangi untuk kamu yang datang diam-diam, tapi sulit dilupakan. Aromanya manis, misterius, dan berani—seperti malam hari yang penuh kemungkinan.",
    imageUrl: "/assets/50ml/Noche.png",
    images: ["/assets/50ml/Noche.png", "/assets/detail-product/YUTENTIK/NOCHE 50ML/COVER.jpeg", "/assets/detail-product/YUTENTIK/NOCHE 50ML/2.jpeg", "/assets/detail-product/YUTENTIK/NOCHE 50ML/1.jpeg"],
    tokopediaLink: "https://vt.tokopedia.com/t/ZSHcFoEMF1DnY-tqlQt/",
    shopeeLink: "https://id.shp.ee/98P81SM",
    tiktokLink: tiktokLink,
  },
  {
    id: 6,
    name: "Noir",
    price: { '10ml': "Rp 29.999 - Rp 34.999", '50ml': "Rp 100.000 - Rp 139.999" },
    description:
      "Aroma manis yang tenang tapi menggoda. Dibuat untuk kamu yang nggak suka ramai, tapi selalu diperhatikan. Tenang, lembut, tapi magnetik. Seperti tatapan yang nggak banyak bicara, tapi bikin penasaran lama.",
    imageUrl: "/assets/50ml/Noir.png",
    images: ["/assets/50ml/Noir.png", "/assets/detail-product/YUTENTIK/NOIR 50ML/COVER.jpeg", "/assets/detail-product/YUTENTIK/NOIR 50ML/1.jpeg", "/assets/detail-product/YUTENTIK/NOIR 50ML/2.jpeg", "/assets/detail-product/YUTENTIK/NOIR 50ML/3.jpeg", "/assets/detail-product/YUTENTIK/NOIR 50ML/4.jpeg"],
    tokopediaLink: "https://vt.tokopedia.com/t/ZSHcY1e9H59G9-n7TRH/",
    shopeeLink: "https://id.shp.ee/oqeDdHL",
    tiktokLink: tiktokLink,
  },
  {
    id: 7,
    name: "Celestial Drift",
    price: { '10ml': "Rp 29.999 - Rp 34.999", '50ml': "Rp 100.000 - Rp 139.999" },
    description:
      "Wangi tenang yang dibuat lebih lama untuk kamu yang percaya sejak awal. Dengan aroma segar, bersih, dan menenangkan, parfum ini cocok untuk kamu yang ingin hadir dengan percaya diri tanpa harus banyak bicara. Parfum ini seperti udara pagi yang jernih: ringan, lembut, dan penuh arah.",
    imageUrl: "/assets/50ml/Celes.png",
    images: ["/assets/50ml/Celes.png", "/assets/detail-product/YUTENTIK/CELES 50ML/COVER.jpeg", "/assets/detail-product/YUTENTIK/CELES 50ML/1.jpeg", "/assets/detail-product/YUTENTIK/CELES 50ML/2.jpeg", "/assets/detail-product/YUTENTIK/CELES 50ML/3.jpeg", "/assets/detail-product/YUTENTIK/CELES 50ML/4.jpeg"],
    tokopediaLink: "https://vt.tokopedia.com/t/ZSHcY1dhJcRMS-p6148/",
    shopeeLink: "https://id.shp.ee/q3AUDk4",
    tiktokLink: tiktokLink,
  },
  {
    id: 8,
    name: "Velvet Essence",
    price: { '10ml': "Rp 29.999 - Rp 34.999", '50ml': "Rp 100.000 - Rp 139.999" },
    description:
      "Essence dari Barcelona | Creamy – Calm – Intimate. Velvet Essence adalah aroma yang terasa seperti pulang. Ini adalah jenis wangi yang tidak mencuri perhatian—tapi meninggalkan kesan nyaman dan tenang.",
    imageUrl: "/assets/50ml/Velvet.png",
    images: ["/assets/50ml/Velvet.png", "/assets/detail-product/YUTENTIK/velvet 50ML/C.jpeg", "/assets/detail-product/YUTENTIK/velvet 50ML/2.jpeg", "/assets/detail-product/YUTENTIK/velvet 50ML/1.jpeg"],
    tokopediaLink: "https://vt.tokopedia.com/t/ZSHcY1FYoCbKF-sYpnp/",
    shopeeLink: "https://id.shp.ee/poVBoX1",
    tiktokLink: tiktokLink,
  },
];

interface ProductGalleryProps {
  onProductClick: (product: Product) => void;
  galleryRef?: React.RefObject<HTMLDivElement>;
}

export function ProductGallery({
  onProductClick,
  galleryRef,
}: ProductGalleryProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [itemsPerPage, setItemsPerPage] = useState(4); // Default ke 4

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) setItemsPerPage(1);       // Mobile
      else if (window.innerWidth <= 1024) setItemsPerPage(2); // Tablet
      else setItemsPerPage(4);                                // Desktop
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const totalPages = Math.ceil(products.length / itemsPerPage);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % totalPages);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + totalPages) % totalPages);
  };

  const visibleProducts = products.slice(
    currentIndex * itemsPerPage,
    (currentIndex + 1) * itemsPerPage
  );

  return (
    <section
      ref={galleryRef}
      className="min-h-screen py-20 px-4 md:px-8 relative"
    >
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/60 to-transparent -z-10 pointer-events-none" />

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="max-w-7xl mx-auto relative"
      >
        <h2 className="text-white text-center mb-6 text-4xl md:text-5xl lg:text-6xl" style={{ fontWeight: "bold" }}>
          Discover Your Scent
        </h2>
        <p className="text-white/60 text-center mb-16 max-w-3xl mx-auto text-lg md:text-xl">
          Our premium fragrance collection, designed for every moment in your life.
        </p>

        <div className="relative flex items-center gap-4 md:gap-6">
          <Button
            variant="outline"
            size="icon"
            onClick={prevSlide}
            className="flex-shrink-0 rounded-full border-white/20 bg-black/80 backdrop-blur-sm hover:bg-[#D4AF37]/30 hover:border-[#D4AF37] transition-all shadow-lg shadow-black/50 z-20 cursor-pointer"
          >
            <ChevronLeft className="w-5 h-5 md:w-6 md:h-6 text-white" />
          </Button>

          {/* Products Grid */}
          <div className="flex-1 overflow-hidden">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
              {visibleProducts.map((product, index) => (
                <motion.div
                  key={`${product.id}-${currentIndex}`} // Key unik
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="group cursor-pointer w-full max-w-xs mx-auto"
                  onClick={() => onProductClick(product)}
                >
                  <div className="relative overflow-hidden rounded-lg bg-[#1a1a1a] transition-transform duration-300 group-hover:scale-105 shadow-lg shadow-black/50">
                    <div className="aspect-[3/4] relative">
                      <img
                        src={product.imageUrl}
                        alt={product.name}
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                      <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <Button className="bg-[#D4AF37] hover:bg-[#C5A028] text-black cursor-pointer">
                          View Details
                        </Button>
                      </div>
                    </div>
                    <div className="p-4">
                      <h3 className="text-white mb-1">{product.name}</h3>
                      {/* DIUBAH: Tampilkan harga 50ml di galeri */}
                      <p className="text-[#D4AF37]">{product.price['50ml']}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          <Button
            variant="outline"
            size="icon"
            onClick={nextSlide}
            className="flex-shrink-0 rounded-full border-white/20 bg-black/80 backdrop-blur-sm hover:bg-[#D4AF37]/30 hover:border-[#D4AF37] transition-all shadow-lg shadow-black/50 z-20 cursor-pointer"
          >
            <ChevronRight className="w-5 h-5 md:w-6 md:h-6 text-white" />
          </Button>
        </div>

        {/* Indicator dots */}
        <div className="flex justify-center gap-2" style={{ marginTop: "1.5rem" }}>
          {Array.from({ length: totalPages }).map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-2 h-2 rounded-full transition-all duration-300 cursor-pointer ${
                index === currentIndex ? "bg-[#D4AF37] w-8" : "bg-white/30"
              }`}
            />
          ))}
        </div>
      </motion.div>
    </section>
  );
}
