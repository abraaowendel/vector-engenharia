import { useEffect, useState } from "react";
import * as C from "./styled";

import Imagem1 from "../../assets/images/slide-1.jpg";
import Imagem2 from "../../assets/images/slide-2.jpg";
import Imagem3 from "../../assets/images/slide-3.jpg";

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
    }, 3000);

    return () => clearInterval(intervalId);
  }, [slides, currentSlideIndex]);

  return (
    <C.Filtro>
      <C.Container
        style={{
          backgroundImage: `url("${slides[currentSlideIndex].content}")`,
        }}
      >
        <C.Buttons>
          <div style={{backgroundColor: currentSlideIndex == 0 ? "#fff": "#cccccc"}} onClick={() => setCurrentSlideIndex(0)}></div>
          <div style={{backgroundColor: currentSlideIndex == 1 ? "#fff": "#cccccc"}} onClick={() => setCurrentSlideIndex(1)}></div>
          <div style={{backgroundColor: currentSlideIndex == 2 ? "#fff": "#cccccc"}} onClick={() => setCurrentSlideIndex(2)}></div>
        </C.Buttons>
      </C.Container>
    </C.Filtro>
  );
};
