import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

// Початкові позиції для 6 кроків анімації (відносно в'юпорту)
const STEP_POSITIONS = {
  1: "100%", // Входить справа у в'юпорт
  2: "50%", // Зміщується лівіше
  3: "0%", // По центру екрана (затримка тут)
  4: "-50%", // Зміщується лівіше
  5: "-100%", // На межі виходу
  6: "-150%", // Повністю за в'юпортом зліва
};

const IMAGES = [
  "https://picsum.photos/id/10/400/300",
  "https://picsum.photos/id/20/400/300",
  "https://picsum.photos/id/30/400/300",
  "https://picsum.photos/id/40/400/300",
  "https://picsum.photos/id/50/400/300",
];

export default function ImageCarousel() {
  // Зберігаємо поточний крок для кожного з 5 зображень
  // Початковий розподіл, щоб вони йшли один за одним (конвеєр)
  const [steps, setSteps] = useState([3, 2, 1, 6, 5]);

  useEffect(() => {
    const interval = setInterval(() => {
      setSteps((prevSteps) =>
        prevSteps.map((step) => {
          // Якщо досягли 6 кроку, повертаємось на 1 крок (цикл)
          return step === 6 ? 1 : step + 1;
        }),
      );
    }, 1000); // Затримка 1 секунда на кожному кроці

    return () => clearInterval(interval);
  }, []);

  return (
    <div style={containerStyle}>
      <div style={viewportStyle}>
        {IMAGES.map((src, index) => {
          const currentStep = steps[index];
          const xPosition = STEP_POSITIONS[currentStep];

          return (
            <motion.div
              key={index}
              style={imageWrapperStyle}
              animate={{ x: xPosition, xPercent: "-50%" }}
              transition={{ duration: 0.5, ease: "easeInOut" }}
            >
              <img src={src} alt={`Slide ${index + 1}`} style={imageStyle} />
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}

// Стилі для уникнення витоків пам'яті та правильного позиціонування
const containerStyle = {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  width: "100vw",
  height: "400px",
  overflow: "hidden",
  backgroundColor: "#111",
};

const viewportStyle = {
  position: "relative",
  width: "100%",
  height: "300px",
};

const imageWrapperStyle = {
  position: "absolute",
  left: "50%", // Центрування відносно екрана
  top: 0,
  width: "300px",
  height: "300px",
};

const imageStyle = {
  width: "100%",
  height: "100%",
  objectFit: "cover",
  borderRadius: "8px",
};
