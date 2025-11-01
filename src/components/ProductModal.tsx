import { useState, useEffect } from "react";
import { Button } from "./ui/button.tsx"; // DIUBAH: Tambah ekstensi
import { X, ShoppingBag, Instagram, Package, Clock, Shield, Star, Music } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion"; // DIUBAH: Menggunakan framer-motion
import type { Product } from "./ProductGallery.tsx"; // DIUBAH: Tambah ekstensi

interface ProductModalProps {
  product: Product | null;
  isOpen: boolean;
  onClose: () => void;
}

// Definisikan Tipe Ukuran
type ProductSize = '10ml' | '50ml';

export function ProductModal({ product, isOpen, onClose }: ProductModalProps) {
  const [selectedImage, setSelectedImage] = useState(0);
  // BARU: State untuk melacak ukuran yang dipilih
  const [selectedSize, setSelectedSize] = useState<ProductSize>('50ml');

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  useEffect(() => {
    if (product) {
      // Reset state saat modal dibuka/produk diganti
      setSelectedImage(0);
      setSelectedSize('50ml'); // Reset ke 50ml
    }
  }, [product]);

  if (!product) return null;

  const displayImages = product.images.length > 0 ? product.images : [product.imageUrl];
  const hasMultipleImages = displayImages.length > 1;

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50"
          />

          {/* Modal */}
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ duration: 0.2 }}
              className="w-full max-w-[1200px] bg-gradient-to-br from-[#0a0a0a] via-[#1a1a1a] to-[#0a0a0a] border border-[#D4AF37]/20 text-white rounded-lg overflow-hidden shadow-2xl relative" style={{ height: "90vh" }}
            >
              {/* Close Button */}
              <button
                onClick={onClose}
                className="cursor-pointer absolute right-6 top-6 z-10 rounded-full p-2.5 bg-black/80 hover:bg-[#D4AF37] transition-all duration-300 border border-white/10 hover:border-[#D4AF37] group"
              >
                <X className="w-5 h-5 text-white group-hover:rotate-90 transition-transform duration-300" />
              </button>

              {/* Golden accent line */}
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent opacity-50" />
              
              <div className="flex flex-col md:grid md:grid-cols-2 gap-0 h-full overflow-y-auto md:overflow-y-hidden">
                
                {/* Kolom Kiri - Images */}
                <div className="relative bg-gradient-to-br from-[#1a1a1a] to-[#0a0a0a] p-6 md:p-10 flex flex-col overflow-y-hidden md:overflow-y-auto min-h-0">
                  {/* Main Image */}
                  <div className="flex-1 mb-6 relative min-h-0">
                    <div className="relative h-full min-h-[200px] md:min-h-0 rounded-xl overflow-hidden border border-white/5 shadow-2xl">
                      <AnimatePresence mode="wait">
                        <motion.div
                          key={selectedImage}
                          initial={{ opacity: 0, scale: 0.9 }}
                          animate={{ opacity: 1, scale: 1 }}
                          exit={{ opacity: 0, scale: 0.9 }}
                          transition={{ duration: 0.3 }}
                          className="w-full h-full aspect-square"
                        >
                          <img
                            src={displayImages[selectedImage]}
                            alt={product.name}
                            className="w-full h-full object-cover"
                          />
                        </motion.div>
                      </AnimatePresence>
                      <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent pointer-events-none" />
                    </div>
                  </div>

                  {/* Thumbnails */}
                  {hasMultipleImages && (
                    <div className="flex overflow-x-auto gap-2 mt-auto py-2">
                      {displayImages.map((image, index) => (
                        <motion.div
                          key={index}
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                          className="flex-shrink-0"
                        >
                          <button
                            onClick={() => setSelectedImage(index)}
                            className={`w-20 h-20 md:w-24 md:h-24 rounded-lg overflow-hidden border-2 transition-all duration-300 relative group ${
                              selectedImage === index
                                ? "border-[#D4AF37] shadow-lg shadow-[#D4AF37]/30"
                                : "border-white/10 hover:border-white/30"
                            }`}
                          >
                            <img
                              src={image}
                              alt={`${product.name} view ${index + 1}`}
                              className="w-full h-full object-cover"
                            />
                            {selectedImage === index && (
                              <div className="absolute inset-0 bg-[#D4AF37]/20" />
                            )}
                            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300" />
                          </button>
                        </motion.div>
                      ))}
                    </div>
                  )}
                </div>

                {/* Kolom Kanan - Details */}
                <div className="p-6 md:p-10 flex flex-col overflow-y-auto md:overflow-y-auto min-h-0">
                  {/* Header */}
                  <div className="mb-8">
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex-1">
                        <h2 className="text-white mb-3 text-3xl md:text-4xl font-bold">{product.name}</h2>
                        <div className="flex items-center gap-2 mb-4">
                          <div className="flex text-[#D4AF37]">
                            {[...Array(5)].map((_, i) => (
                              <Star key={i} className="w-4 h-4 fill-current" />
                            ))}
                          </div>
                          <span className="text-white/50 text-sm">(4.9/5)</span>
                        </div>
                        {/* DIUBAH: Harga dinamis berdasarkan state */}
                        <p className="text-[#D4AF37] text-2xl md:text-3xl font-bold">
                          {product.price[selectedSize]}
                        </p>
                      </div>
                    </div>
                  </div>
                  
                  {/* --- BLOK INI DIUBAH TOTAL --- */}
                  {/* Pilihan Ukuran (Menggantikan Features Grid) */}
                  <div className="mb-8">
                    <h3 className="text-white/90 mb-4 text-xl font-semibold flex items-center gap-2">
                      <div className="w-1 h-6 bg-[#D4AF37] rounded-full" />
                      Pilih Ukuran
                    </h3>
                    <div className="grid grid-cols-2 gap-4">
                      <button
                        onClick={() => setSelectedSize('10ml')}
                        className={`p-4 rounded-lg border-2 text-left transition-all duration-300 ${
                          selectedSize === '10ml'
                            ? 'border-[#D4AF37] bg-[#D4AF37]/10'
                            : 'border-white/10 bg-white/5 hover:bg-white/10'
                        }`}
                      >
                        <span className={`block font-bold text-lg ${selectedSize === '10ml' ? 'text-[#D4AF37]' : 'text-white'}`}>
                          10ml
                        </span>
                        <span className="text-white/60 text-sm">Travel Size</span>
                      </button>
                      <button
                        onClick={() => setSelectedSize('50ml')}
                        className={`p-4 rounded-lg border-2 text-left transition-all duration-300 ${
                          selectedSize === '50ml'
                            ? 'border-[#D4AF37] bg-[#D4AF37]/10'
                            : 'border-white/10 bg-white/5 hover:bg-white/10'
                        }`}
                      >
                        <span className={`block font-bold text-lg ${selectedSize === '50ml' ? 'text-[#D4AF37]' : 'text-white'}`}>
                          50ml
                        </span>
                        <span className="text-white/60 text-sm">Full Size</span>
                      </button>
                    </div>
                  </div>
                  {/* --- AKHIR BLOK YANG DIUBAH --- */}

                  {/* Description */}
                  <div className="mb-8">
                    <h3 className="text-white mb-4 text-xl font-semibold flex items-center gap-2">
                      <div className="w-1 h-6 bg-[#D4AF37] rounded-full" />
                      Deskripsi
                    </h3>
                    <p className="text-white/70 leading-relaxed">
                      {product.description}
                    </p>
                  </div>

                  {/* Product Details */}
                  <div className="mb-8">
                    <h3 className="text-white mb-4 text-xl font-semibold flex items-center gap-2">
                      <div className="w-1 h-6 bg-[#D4AF37] rounded-full" />
                      Detail Produk
                    </h3>
                    <ul className="space-y-3 text-white/70">
                      <li className="flex items-center gap-3">
                        <div className="w-1.5 h-1.5 rounded-full bg-[#D4AF37]" />
                        Premium packaging dengan box eksklusif
                      </li>
                      <li className="flex items-center gap-3">
                        <div className="w-1.5 h-1.5 rounded-full bg-[#D4AF37]" />
                        Long-lasting formula 6-8 jam
                      </li>
                      <li className="flex items-center gap-3">
                        <div className="w-1.5 h-1.5 rounded-full bg-[#D4AF37]" />
                        100% Original & Authentic
                      </li>
                      <li className="flex items-center gap-3">
                        <div className="w-1.5 h-1.5 rounded-full bg-[#D4AF37]" />
                        Suitable untuk segala aktivitas
                      </li>
                    </ul>
                  </div>

                  {/* Divider */}
                  <div className="h-px bg-gradient-to-r from-transparent via-white/20 to-transparent mb-8 mt-auto" />

                  {/* CTA Buttons */}
                  <div className="space-y-3">
                    <h3 className="text-white mb-4 text-xl font-semibold flex items-center gap-2">
                      <div className="w-1 h-6 bg-[#D4AF37] rounded-full" />
                      Beli Sekarang
                    </h3>
                    
                    <a
                      href={product.tokopediaLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block"
                    >
                      <Button className="w-full cursor-pointer bg-[#03AC0E] hover:bg-[#02930C] text-white flex items-center justify-center gap-3 h-14 text-base transition-all duration-300 hover:shadow-lg hover:shadow-[#03AC0E]/30">
                        <img src="/assets/tokopedia.svg" alt="" className="w-5 h-5" />
                        Beli di Tokopedia
                      </Button>
                    </a>

                    <a
                      href={product.shopeeLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block"
                    >
                      <Button className="w-full cursor-pointer bg-[#EE4D2D] hover:bg-[#D73111] text-white flex items-center justify-center gap-3 h-14 text-base transition-all duration-300 hover:shadow-lg hover:shadow-[#EE4D2D]/30">
                        <img src="/assets/small.png" alt="shopee" className="w-7 h-7" />
                        Beli di Shopee
                      </Button>
                    </a>

                    <a
                      href={product.tiktokLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block"
                    >
                      <Button
                        variant="outline"
                        className="w-full cursor-pointer border-white/20 hover:border-[#D4AF37] text-black flex items-center justify-center gap-3 h-14 text-base transition-all duration-300 hover:shadow-lg hover:shadow-[#D4AF37]/20 bg-white"
                      >
                        <img src="/assets/tiktok.svg" alt="tiktok" className="w-5 h-5 "/>
                        Lihat di Tiktok
                      </Button>
                    </a>
                  </div>
                </div>
              </div>

              {/* Bottom golden accent line */}
              <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent opacity-50" />
            </motion.div>
          </div>
        </>
      )}
    </AnimatePresence>
  );
}

export default ProductModal;
