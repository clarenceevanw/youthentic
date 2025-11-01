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
  pengiriman: [
    {
      question: "Berapa lama waktu pengiriman?",
      answer: "Waktu pengiriman bervariasi tergantung lokasi. Untuk area Jabodetabek biasanya 1-2 hari kerja, sedangkan untuk luar pulau Jawa 3-5 hari kerja."
    },
    {
      question: "Apakah ada biaya pengiriman?",
      answer: "Biaya pengiriman ditanggung oleh pembeli dan dihitung otomatis berdasarkan alamat tujuan. Kami sering mengadakan promo free ongkir, jadi pantau terus akun media sosial kami!"
    },
    {
      question: "Apakah produk dikemas dengan aman?",
      answer: "Ya, semua produk kami dikemas dengan bubble wrap berlapis dan box yang kokoh untuk memastikan produk sampai dengan aman tanpa kerusakan."
    }
  ],
  retur: [
    {
      question: "Apakah bisa melakukan retur produk?",
      answer: "Ya, kami menerima retur dalam waktu 7 hari sejak produk diterima jika terdapat cacat produksi atau kerusakan saat pengiriman. Pastikan produk masih dalam kondisi segel dan belum digunakan."
    },
    {
      question: "Bagaimana proses retur?",
      answer: "Hubungi customer service kami melalui Instagram atau email dengan menyertakan foto produk dan bukti pembelian. Tim kami akan membantu proses retur Anda."
    },
    {
      question: "Apakah biaya retur ditanggung toko?",
      answer: "Jika retur disebabkan oleh kesalahan kami (produk cacat atau salah kirim), biaya retur ditanggung toko. Untuk alasan lain, biaya retur ditanggung pembeli."
    }
  ],
  komplain: [
    {
      question: "Bagaimana cara mengajukan komplain?",
      answer: "Anda dapat mengajukan komplain melalui Instagram DM, email, atau langsung melalui platform marketplace tempat Anda membeli (Tokopedia/Shopee)."
    },
    {
      question: "Berapa lama respon komplain?",
      answer: "Tim customer service kami akan merespon komplain Anda maksimal dalam 1x24 jam pada hari kerja."
    },
    {
      question: "Apa saja yang bisa dikomplain?",
      answer: "Anda dapat mengajukan komplain untuk produk rusak, produk tidak sesuai deskripsi, keterlambatan pengiriman, atau masalah lainnya terkait pesanan Anda."
    }
  ],
  produk: [
    {
      question: "Apakah produk Youthentic original?",
      answer: "Ya, semua produk Youthentic adalah 100% original dan diproduksi dengan standar kualitas tinggi menggunakan bahan-bahan premium."
    },
    {
      question: "Berapa lama ketahanan aroma parfum?",
      answer: "Parfum Youthentic memiliki ketahanan aroma 6-8 jam untuk parfum biasa dan hingga 12 jam untuk varian intense/ekstrak."
    },
    {
      question: "Apakah ada kemasan travel size?",
      answer: "Saat ini kami menyediakan ukuran 50ml dan 100ml. Travel size sedang dalam pengembangan dan akan segera hadir!"
    },
    {
      question: "Apakah parfum aman untuk kulit sensitif?",
      answer: "Parfum kami telah melalui uji dermatologi. Namun, jika Anda memiliki kulit sangat sensitif, kami sarankan untuk melakukan patch test terlebih dahulu atau konsultasikan dengan dokter kulit."
    }
  ]
};

const categories = [
  { id: "pengiriman", label: "Pengiriman" },
  { id: "retur", label: "Retur" },
  { id: "komplain", label: "Komplain" },
  { id: "produk", label: "Produk" }
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
          Temukan jawaban untuk pertanyaan yang sering diajukan
        </p>

        <div className="grid w-full grid-cols-2 md:grid-cols-4 bg-[#1a1a1a] border border-white/10 mb-8 p-1 rounded-lg" style={{ gap: "0.4rem" }}>
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveTab(category.id)}
              className={`p-2 cursor-pointer rounded-md transition-colors duration-200 text-sm font-medium ${
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
