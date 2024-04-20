import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import * as C from "./styled";

import Imagem1 from "../../assets/images/slide-1.webp";
import Imagem2 from "../../assets/images/slide-2.webp";
import Imagem3 from "../../assets/images/slide-3.webp";

export const Home = () => {
  const [slides, setSlides] = useState([
    { content: Imagem1 },
    { content: Imagem2 },
    { content: Imagem3 },
  ]);

  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentSlideIndex((prevIndex) => {
        const nextIndex = prevIndex + 1;
        return nextIndex < slides.length ? nextIndex : 0;
      });
    }, 4000);

    return () => clearInterval(intervalId);
  }, [slides, currentSlideIndex]);

  return (
    <C.Filtro>
      <motion.div
        initial={{ opacity: 0.5, scale: 1 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6 }}
      >
        <C.Container
          style={{
            backgroundImage: `url("${slides[currentSlideIndex].content}")`,
          }}
        >
          <C.Buttons>
            <div
              style={{
                backgroundColor: currentSlideIndex == 0 ? "#fff" : "#cccccc",
              }}
              onClick={() => setCurrentSlideIndex(0)}
              aria-label="Mostrar a 1º imagem"
            ></div>
            <div
              style={{
                backgroundColor: currentSlideIndex == 1 ? "#fff" : "#cccccc",
              }}
              onClick={() => setCurrentSlideIndex(1)}
              aria-label="Mostrar a 2º imagem"
            ></div>
            <div
              style={{
                backgroundColor: currentSlideIndex == 2 ? "#fff" : "#cccccc",
              }}
              onClick={() => setCurrentSlideIndex(2)}
              aria-label="Mostrar a 3º imagem"
            ></div>  
          </C.Buttons>
        </C.Container>
      </motion.div>
    </C.Filtro>
  );
};
