import { useState } from "react";
import { motion } from "framer-motion";

export default function BirthdaySite() {
  const [candleLit, setCandleLit] = useState(true);
  const [wish, setWish] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleBlow = async () => {
    setCandleLit(false);
    try {
      await fetch("/api/saveWish", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ wish }),
      });
    } catch (e) {
      console.error("Dilek kaydedilemedi", e);
    }
    setSubmitted(true);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-black to-indigo-950 flex flex-col items-center justify-center relative overflow-hidden">
      {/* Arkaplan yıldızlar */}
      <div className="absolute inset-0 z-0">
        {[...Array(50)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute bg-white rounded-full"
            style={{ width: 2, height: 2, top: Math.random() * 100 + "%", left: Math.random() * 100 + "%" }}
            animate={{ opacity: [0, 1, 0] }}
            transition={{ duration: 2, repeat: Infinity, delay: i * 0.2 }}
          />
        ))}
      </div>

      {/* Pasta */}
      <motion.div
        initial={{ y: -300, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ type: "spring", stiffness: 100 }}
        className="z-10 flex flex-col items-center"
      >
        <div className="w-40 h-24 bg-pink-400 rounded-t-2xl relative flex items-start justify-center">
          <div className="w-2 h-10 bg-yellow-200 absolute top-0"></div>
          {candleLit && (
            <motion.div
              className="w-4 h-6 bg-gradient-to-t from-yellow-400 to-yellow-200 rounded-full absolute top-[-20px]"
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ repeat: Infinity, duration: 0.5 }}
            ></motion.div>
          )}
        </div>
        <div className="w-48 h-24 bg-pink-500 rounded-b-2xl"></div>
      </motion.div>

      {/* Dilek kısmı */}
      <div className="mt-8 z-10 text-center">
        {!submitted ? (
          <>
            <input
              type="text"
              placeholder="Dileğini yaz..."
              value={wish}
              onChange={(e) => setWish(e.target.value)}
              className="px-4 py-2 rounded-lg text-black"
            />
            <button
              onClick={handleBlow}
              className="ml-4 px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700"
            >
              Muma Üfle 🎂
            </button>
          </>
        ) : (
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-white text-lg mt-4"
          >
            Dileğin kaydedildi ✨
          </motion.p>
        )}
      </div>
    </div>
  );
}
