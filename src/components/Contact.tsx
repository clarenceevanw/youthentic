import { motion } from "motion/react";
import { Mail, Instagram, MapPin, Phone } from "lucide-react";

export function Contact() {
  return (
    <section className="min-h-screen py-20 px-4 md:px-8 relative">
      {/* Seamless background */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#000000] to-[#050505] -z-10" />
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="max-w-6xl mx-auto"
      >
        <h2 className="text-white text-center mb-6 text-4xl md:text-5xl lg:text-6xl" style={{ fontWeight: "bold" }}>Contact Us</h2>
        <p className="text-white/60 text-center mb-16 max-w-3xl mx-auto text-lg md:text-xl">
          Get in touch with us for any questions, suggestions, or further information.
        </p>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Contact Info */}
          <div className="space-y-8">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h3 className="text-white mb-6">Get in Touch</h3>
              
              <div className="space-y-6">
                <a
                  href="https://wa.me/6285190073729"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start gap-4 p-4 rounded-lg bg-[#1a1a1a] hover:bg-[#252525] transition-colors group"
                >
                  <div className="w-12 h-12 rounded-full bg-[#D4AF37] flex items-center justify-center flex-shrink-0">
                    <Phone className="w-6 h-6 text-black" />
                  </div>
                  <div>
                    <p className="text-white mb-1">Phone</p>
                    <p className="text-white/60 group-hover:text-[#D4AF37] transition-colors">
                      +6285190073729
                    </p>
                  </div>
                </a>

                <a
                  href="https://instagram.com/youthenticfragrance"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start gap-4 p-4 rounded-lg bg-[#1a1a1a] hover:bg-[#252525] transition-colors group"
                >
                  <div className="w-12 h-12 rounded-full bg-[#D4AF37] flex items-center justify-center flex-shrink-0">
                    <Instagram className="w-6 h-6 text-black" />
                  </div>
                  <div>
                    <p className="text-white mb-1">Instagram</p>
                    <p className="text-white/60 group-hover:text-[#D4AF37] transition-colors">
                      @youthenticfragrance
                    </p>
                  </div>
                </a>

                <a
                  href="mailto:youthenticperfume@gmail.com"
                  className="flex items-start gap-4 p-4 rounded-lg bg-[#1a1a1a] hover:bg-[#252525] transition-colors group"
                >
                  <div className="w-12 h-12 rounded-full bg-[#D4AF37] flex items-center justify-center flex-shrink-0">
                    <Mail className="w-6 h-6 text-black" />
                  </div>
                  <div>
                    <p className="text-white mb-1">Email</p>
                    <p className="text-white/60 group-hover:text-[#D4AF37] transition-colors">
                      youthenticperfume@gmail.com
                    </p>
                  </div>
                </a>

                <a href="https://maps.app.goo.gl/Bv1dMxYJhavnDwtBA" className="flex items-start gap-4 p-4 rounded-lg bg-[#1a1a1a] hover:bg-[#252525] transition-colors group">
                  <div className="w-12 h-12 rounded-full bg-[#D4AF37] flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-6 h-6 text-black" />
                  </div>
                  <div>
                    <p className="text-white mb-1">Location</p>
                    <p className="text-white/60">
                      Wanayasa Residence No C12, Pasir Jaya, Kec. Bogor Bar.,<br />
                       Kota Bogor, Jawa Barat 16119, Indonesia
                    </p>
                  </div>
                </a>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <h3 className="text-white mb-4">Business Hours</h3>
              <div className="p-4 rounded-lg bg-[#1a1a1a]">
                <div className="space-y-2 text-white/70">
                  <div className="flex justify-between">
                    <span>Senin - Sabtu</span>
                    <span>08:00 - 18:00</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Minggu</span>
                    <span>Tutup</span>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Map */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="h-[600px] rounded-lg overflow-hidden"
          >
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d757.868020605324!2d106.78210645187946!3d-6.600241862607823!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zNsKwMzYnMDEuMiJTIDEwNsKwNDYnNTYuOCJF!5e0!3m2!1sen!2sid!4v1761917809315!5m2!1sen!2sid"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Youthentic Location"
            />
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
