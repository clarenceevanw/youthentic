import { Instagram, Mail, Phone, ShoppingBag } from "lucide-react";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative bg-gradient-to-b from-transparent to-black border-t border-white/10 py-12 px-4 md:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div>
            <h3 className="text-white mb-4">YOUTHENTIC</h3>
            <p className="text-white/60 mb-4">
              Premium perfume brand untuk generasi modern yang autentik dan percaya diri.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <a href="#hero" className="text-white/60 hover:text-[#D4AF37] transition-colors">
                  Home
                </a>
              </li>
              <li>
                <a href="#about" className="text-white/60 hover:text-[#D4AF37] transition-colors">
                  About Us
                </a>
              </li>
              <li>
                <a href="#products" className="text-white/60 hover:text-[#D4AF37] transition-colors">
                  Products
                </a>
              </li>
              <li>
                <a href="#contact" className="text-white/60 hover:text-[#D4AF37] transition-colors">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Social Media */}
          <div>
            <h4 className="text-white mb-4">Follow Us</h4>
            <div className="flex gap-4">
              <a
                href="https://wa.me/6285190073729"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-[#1a1a1a] hover:bg-[#D4AF37] flex items-center justify-center transition-colors group"
              >
                <Phone className="w-5 h-5 text-white group-hover:text-black" />
              </a>
              <a
                href="https://instagram.com/youthenticfragrance"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-[#1a1a1a] hover:bg-[#D4AF37] flex items-center justify-center transition-colors group"
              >
                <Instagram className="w-5 h-5 text-white group-hover:text-black" />
              </a>
              <a
                href="mailto:youthenticperfume@gmail.com"
                className="w-10 h-10 rounded-full bg-[#1a1a1a] hover:bg-[#D4AF37] flex items-center justify-center transition-colors group"
              >
                <Mail className="w-5 h-5 text-white group-hover:text-black" />
              </a>
              <a
                href="https://tokopedia.com/youthentic-perfume"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-[#1a1a1a] hover:bg-[#D4AF37] flex items-center justify-center transition-colors group"
              >
                <ShoppingBag className="w-5 h-5 text-white group-hover:text-black" />
              </a>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="pt-8 border-t border-white/10 text-center">
          <p className="text-white/60">
            © {currentYear} Youthentic. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
