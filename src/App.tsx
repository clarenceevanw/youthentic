import { useState, useRef, useEffect } from "react";
import { Analytics } from "@vercel/analytics/react"
// 1. Impor AnimatePresence dan motion
import { AnimatePresence, motion } from "motion/react"; 
import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";
import { AboutUs } from "./components/AboutUs";
import { ProductGallery } from "./components/ProductGallery";
import { ProductModal } from "./components/ProductModal";
import { FAQ } from "./components/FAQ";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";
import type { Product } from "./components/ProductGallery";
import LoadingScreen from "./components/LoadingScreen";

export default function App() {
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const galleryRef = useRef<HTMLDivElement>(null);

  const handleBuyNowClick = () => {
    galleryRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  const handleProductClick = (product: Product) => {
    setSelectedProduct(product);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setTimeout(() => setSelectedProduct(null), 300);
  };

  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulasi loading (3 detik)
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <Analytics />
      <AnimatePresence>
        {isLoading && <LoadingScreen key="loader" />}
      </AnimatePresence>

      {!isLoading && (
        <motion.div
          className="min-h-screen bg-gradient-to-b from-[#000000] via-[#0a0a0a] to-[#000000]"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <Navbar onBuyNowClick={handleBuyNowClick} />
          
          <div id="hero">
            <Hero onBuyNowClick={handleBuyNowClick} />
          </div>
          
          <div id="about">
            <AboutUs />
          </div>
          
          <div id="products">
            <ProductGallery 
              onProductClick={handleProductClick}
              galleryRef={galleryRef}
            />
          </div>
          
          <div id="faq">
            <FAQ />
          </div>
          
          <div id="contact">
            <Contact />
          </div>
          
          <Footer />
          
          <ProductModal
            product={selectedProduct}
            isOpen={isModalOpen}
            onClose={handleCloseModal}
          />
        </motion.div>
      )}
    </>
  );
}
