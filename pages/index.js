"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function BirthdayPage() {
  const [wish, setWish] = useState("");
  const [blown, setBlown] = useState(false);
  const [showWind, setShowWind] = useState(false);
  const [showSmoke, setShowSmoke] = useState(false);

  const handleBlow = () => {
    if (!wish) return alert("Bir dilek yazmalısın ✨");
    console.log("Yeni Dilek:", wish);

    // Rüzgar animasyonu başlat
    setShowWind(true);

    setTimeout(() => {
      setBlown(true); // alevi söndür
      setShowWind(false);
      setShowSmoke(true); // dumanı göster
      setTimeout(() => setShowSmoke(false), 3000);
    }, 1500);
  };

  return (
    <div className="relative flex flex-col items-center justify-center h-screen bg-gradient-to-b from-[#0b0f2e] to-black overflow-hidden">
      {/* Yıldızlar */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(80)].map((_, i) => (
          <div
            key={i}
            className="absolute w-[2px] h-[2px] bg-white rounded-full animate-twinkle"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
            }}
          />
        ))}
      </div>

      {/* Pasta */}
      <motion.div
        initial={{ y: -300, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ type: "spring", stiffness: 70, damping: 12 }}
        className="relative flex flex-col items-center"
      >
        {/* Mum */}
        <motion.div
          initial={{ y: -200, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.8, type: "spring", stiffness: 80 }}
          className="relative z-20"
        >
          {/* Mum gövdesi */}
          <div className="w-4 h-16 bg-gradient-to-b from-pink-200 to-pink-600 rounded-t-md mx-auto shadow-md" />

          {/* Alev */}
          <AnimatePresence>
            {!blown && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1, scale: [1, 1.1, 1, 0.95, 1] }}
                exit={{ opacity: 0 }}
                transition={{
                  repeat: Infinity,
                  repeatType: "mirror",
                  duration: 0.5,
                }}
                className="w-6 h-6 bg-gradient-to-t from-yellow-500 via-orange-400 to-transparent rounded-full blur-sm absolute -top-6 left-1/2 -translate-x-1/2"
              />
            )}
          </AnimatePresence>

          {/* Duman */}
          <AnimatePresence>
            {showSmoke && (
              <motion.div
                initial={{ opacity: 0, y: 0 }}
                animate={{ opacity: [0.7, 0.5, 0], y: -40 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 2 }}
                className="w-8 h-8 rounded-full bg-gradient-to-t from-gray-400 to-transparent blur-md absolute -top-10 left-1/2 -translate-x-1/2"
              />
            )}
          </AnimatePresence>
        </motion.div>

        {/* 3 Katlı Pasta */}
        <div className="relative flex flex-col items-center mt-2">
          {/* Üst kat */}
          <div className="w-32 h-10 bg-gradient-to-b from-pink-300 to-pink-500 rounded-t-lg shadow-lg border-b-4 border-pink-600" />
          {/* Orta kat */}
          <div className="w-40 h-12 bg-gradient-to-b from-pink-400 to-pink-600 shadow-lg border-b-4 border-pink-700" />
          {/* Alt kat */}
          <div className="w-52 h-14 bg-gradient-to-b from-pink-500 to-pink-700 rounded-b-xl shadow-xl" />
        </div>
      </motion.div>

      {/* Dilek Kutusu */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="mt-10 flex flex-col items-center gap-3"
      >
        <input
          type="text"
          placeholder="Bir dilek dile ✨"
          value={wish}
          onChange={(e) => setWish(e.target.value)}
          className="px-4 py-2 rounded-lg text-black shadow-md focus:outline-none"
        />
        <button
          onClick={handleBlow}
          className="px-6 py-2 bg-pink-600 text-white rounded-xl shadow-lg hover:bg-pink-700 transition"
        >
          🎂 Muma Üfle
        </button>
      </motion.div>

      {/* Rüzgar Efekti */}
      <AnimatePresence>
        {showWind && (
          <motion.div
            initial={{ opacity: 0, x: -200 }}
            animate={{ opacity: 0.7, x: 200 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.5 }}
            className="absolute top-1/3 w-40 h-20 bg-gradient-to-r from-transparent via-white/40 to-transparent blur-xl rounded-full"
          />
        )}
      </AnimatePresence>
    </div>
  );
            }
            
