import { useState } from "react";
import { motion } from "motion/react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "./ui/accordion";

interface FAQItem {
  question: string;
  answer: string;
}

const faqData: Record<string, FAQItem[]> = {
  produk: [
    {
      question: "Apa itu Youthentic.Lite?",
      answer:
        "Youthentic.Lite adalah brand parfum lokal dengan aroma premium yang terinspirasi dari nuansa kota-kota dunia. Kami menghadirkan dua ukuran utama: 10ml (Travel Size) dan 50ml (Loyalist Size), cocok untuk penggunaan harian maupun koleksi pribadi."
    },
    {
      question: "Apakah parfum Youthentic tahan lama?",
      answer:
        "Ya! Ketahanan parfum Youthentic.Lite rata-rata 6–10 jam, tergantung aktivitas dan jenis kulit. Semakin aktif dan hangat tubuhmu, aroma parfum akan semakin kuat karena projection meningkat."
    },
    {
      question: "Apakah produk Youthentic.Lite unisex?",
      answer:
        "Sebagian besar koleksi kami unisex, dengan karakter aroma yang bisa disesuaikan dengan kepribadianmu — dari yang fresh, manis, hingga woody."
    },
    {
      question: "Apakah parfum Youthentic.Lite original buatan sendiri?",
      answer:
        "Ya, seluruh parfum kami diracik dan diproduksi sendiri di Indonesia menggunakan bahan baku impor berkualitas tinggi dari Barcelona."
    },
    {
      question: "Apakah produk Youthentic sudah terdaftar di BPOM?",
      answer:
        "Semua produk Youthentic.Lite telah terdaftar di BPOM dan aman digunakan. Kami memastikan parfum tidak mengandung alkohol berlebihan maupun bahan berbahaya."
    }
  ],

  pengiriman: [
    {
      question: "Di mana saya bisa membeli parfum Youthentic?",
      answer:
        "Kamu bisa membeli produk kami di marketplace resmi:\n• TikTok Shop: @youthentic.lite\n• Shopee: Youthentic.Lite Official\n• Tokopedia: Youthentic.Lite"
    },
    {
      question: "Berapa lama waktu pengiriman produk?",
      answer:
        "Pesanan akan diproses dalam 1–2 hari kerja, dan dikirim melalui ekspedisi pilihanmu. Estimasi waktu pengiriman biasanya 2–5 hari kerja tergantung lokasi."
    },
    {
      question: "Apakah bisa COD (Bayar di Tempat)?",
      answer:
        "Ya, metode pembayaran COD tersedia untuk pembelian melalui Shopee dan TikTok Shop."
    },
    {
      question: "Bagaimana jika paket rusak atau bocor saat pengiriman?",
      answer:
        "Jangan khawatir! Kirim video unboxing dan bukti kerusakan ke DM Instagram atau chat CS TikTok/Shopee. Tim kami akan membantu menggantikan produk baru sesuai kebijakan Youthentic."
    }
  ],

  penggunaan: [
    {
      question: "Bagaimana cara pakai parfum agar tahan lama?",
      answer:
        "Semprotkan parfum di titik nadi seperti leher, pergelangan tangan, belakang telinga, dan dada dengan jarak 10–15 cm. Hindari menggosok area yang disemprot agar aroma tidak rusak."
    },
    {
      question: "Apakah bisa layering dengan parfum lain?",
      answer:
        "Tentu! Beberapa koleksi Youthentic.Lite dirancang agar dapat dikombinasikan (layering) untuk menciptakan aroma khasmu sendiri."
    },
    {
      question: "Kapan waktu terbaik untuk menyemprot parfum?",
      answer:
        "Gunakan setelah mandi, saat kulit sedikit lembap. Kondisi ini membantu aroma menempel lebih lama di kulit."
    }
  ],

  komunitas: [
    {
      question: "Apa itu Scentsy Gang?",
      answer:
        "Scentsy Gang adalah komunitas pecinta parfum Youthentic. Anggota mendapatkan akses eksklusif ke pre-launch scent, event, dan promo khusus dari Youthentic."
    },
    {
      question: "Bagaimana cara jadi affiliate atau reseller Youthentic?",
      answer:
        "Kamu bisa bergabung melalui TikTok Affiliate Center kami. Klik 'Join Affiliate' di produk Youthentic.Lite dan dapatkan komisi dari setiap penjualan melalui link kamu."
    },
    {
      question: "Apakah Youthentic menerima kolaborasi atau sponsorship?",
      answer:
        "Ya, kami terbuka untuk kolaborasi dengan influencer, kampus, maupun event. Kirim proposal ke email: partnership@youthentic.id."
    }
  ],

  lainnya: [
    {
      question: "Apakah Youthentic ramah lingkungan?",
      answer:
        "Kami berkomitmen untuk menggunakan kemasan reusable dan meminimalisir penggunaan plastik. Kami juga menyediakan layanan refill botol 50ml di event tertentu."
    },
    {
      question: "Bagaimana cara membedakan produk asli Youthentic?",
      answer:
        "Pastikan kamu membeli hanya dari official store kami di marketplace resmi. Setiap botol memiliki kode batch dan segel hologram asli sebagai tanda keaslian."
    }
  ]
};


const categories = [
  { id: "produk", label: "Produk" },
  { id: "pengiriman", label: "Pengiriman" },
  { id: "penggunaan", label: "Penggunaan" },
  { id: "komunitas", label: "Komunitas" },
  { id: "lainnya", label: "Lainnya" }
];

export function FAQ() {
  const [activeTab, setActiveTab] = useState("pengiriman");

  return (
    <section className="min-h-screen py-20 px-4 md:px-8 relative">
      {/* Seamless background */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#0a0a0a] to-transparent -z-10" />
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="max-w-4xl mx-auto"
      >
        <h2 className="text-white text-center mb-6 text-4xl md:text-5xl lg:text-6xl" style={{ fontWeight: "bold" }}>Frequently Asked Questions</h2>
        <p className="text-white/60 text-center mb-16 max-w-3xl mx-auto text-lg md:text-xl">
          Discover answers to the questions we’re most often asked.
        </p>

        <div className="flex flex-wrap justify-center bg-[#1a1a1a] border border-white/10 mb-8 p-1 rounded-lg" style={{ gap: "0.4rem" }}>
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveTab(category.id)}
              className={`flex-1 min-w-[120px] p-2 cursor-pointer rounded-md transition-colors duration-200 text-sm font-medium ${
                activeTab === category.id
                  ? "bg-[#D4AF37] text-black shadow"
                  : "text-white/70 hover:bg-white/10"
              }`}
            >
              {category.label}
            </button>
          ))}
        </div>
        {/* Key={activeTab} membuat animasi berjalan setiap kali tab diganti */}
        <motion.div
          key={activeTab}
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
        >
          <Accordion type="single" collapsible className="space-y-4">
            {/* Langsung mapping dari faqData berdasarkan state activeTab */}
            {faqData[activeTab].map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`} // Value dibuat unik untuk setiap item
                className="border border-white/10 rounded-lg px-6 bg-[#0a0a0a]"
              >
                <AccordionTrigger className="text-white hover:text-[#D4AF37] text-left cursor-pointer">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-white/70">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>
      </motion.div>
    </section>
  );
}
