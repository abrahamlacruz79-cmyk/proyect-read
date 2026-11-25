
import { useEffect, useState } from "react";

import imagen1 from "../assets/images/imagen1.jpg";
import imagen2 from "../assets/images/imagen2.jpg";
import imagen3 from "../assets/images/imagen3.jpg";
import imagen4 from "../assets/images/imagen4 (2).jpg";
import imagen5 from "../assets/images/imagen5 (2).jpg";
import imagen6 from "../assets/images/imagen6 (2).jpg";
import imagen7 from "../assets/images/imagen7.jpg";
import imagen8 from "../assets/images/imagen8.jpg";
import imagen9 from "../assets/images/imagen9.jpg";
import imagen10 from "../assets/images/imagen10.jpg";

const images = [
  {
    id: 1,
    image: imagen10,
    title: "Mazda 3",
    description: "Diseño deportivo, comodidad y tecnología."
  },
  

  {
    id: 2,
    image: imagen7,
    title: "Mazda CX-30",
    description: "Elegancia y rendimiento para tus recorridos."
  },
  {
    id: 3,
    image: imagen8,
    title: "Mazda CX-50",
    description: "Potencia y aventura en cada camino."
  },
   {
    id: 4,
    image: imagen1,
    title: "Mazda BT-50",
    description: "Espacio y comodidad para toda la familia."
  },

  {
    id: 5,
    image: imagen5,
    title: "Mazda CX-90",
    description: "Espacio y comodidad para toda la familia."
  },
  {
    id: 6,
    image: imagen4,
    title: "Mazda 2",
    description: "Perfecto para recorrer la ciudad."
  },
  {
    id: 7,
    image: imagen3,
    title: "Mazda MX-5",
    description: "Deportivo y diseñado para disfrutar."
  },

  {
    id: 8,
    image: imagen6,
    title: "Mazda CX-60",
    description: "Compacto y ágil para la ciudad."
  },

  {
    id: 9,
    image: imagen2,
    title: "Mazda CX-70",
    description: "Estilo y tecnología de alto nivel."
  },
  {
    id: 10,
    image: imagen9,
    title: "Mazda CX-5",
    description: "Versatilidad y comodidad para viajar."
  }
];

const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const previousImage = () => {
    setCurrentIndex((previous) =>
      previous === 0 ? images.length - 1 : previous - 1
    );
  };

  const nextImage = () => {
    setCurrentIndex((previous) =>
      (previous + 1) % images.length
    );
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((previous) =>
        (previous + 1) % images.length
      );
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const currentImage = images[currentIndex];

  return (
    <section
      style={{
        width: "100%",
        maxWidth: "1200px",
        margin: "30px auto",
        fontFamily: "Arial, sans-serif"
      }}
    >
      <div
        style={{
          position: "relative",
          height: "550px",
          overflow: "hidden",
          borderRadius: "15px",
          backgroundColor: "#111"
        }}
      >
        <img
  key={currentImage.id}
  src={currentImage.image}
  alt={currentImage.title}
  onError={() => console.log("No se pudo cargar:", currentImage.image)}
  style={{
    width: "100%",
    height: "100%",
    objectFit: "cover"
  }}
/>

        <div
          style={{
            position: "absolute",
            bottom: 0,
            left: 0,
            width: "100%",
            padding: "40px",
            boxSizing: "border-box",
            color: "white",
            background: "linear-gradient(transparent, rgba(0,0,0,0.9))"
          }}
        >
          <span
            style={{
              color: "#e60012",
              fontWeight: "bold",
              letterSpacing: "2px"
            }}
          >
            CONCESIONARIO MAZDA
          </span>

          <h2 style={{ fontSize: "38px", margin: "12px 0" }}>
            {currentImage.title}
          </h2>

          <p style={{ fontSize: "17px" }}>
            {currentImage.description}
          </p>

          <button
            style={{
              padding: "12px 25px",
              backgroundColor: "#c90016",
              color: "white",
              border: "none",
              borderRadius: "5px",
              cursor: "pointer"
            }}
          >
            Conoce más
          </button>
        </div>

        <button onClick={previousImage} style={arrowStyle("left")}>
          &#10094;
        </button>

        <button onClick={nextImage} style={arrowStyle("right")}>
          &#10095;
        </button>
      </div>

      <div
        style={{
          display: "flex",
          justifyContent: "center",
          gap: "10px",
          padding: "20px"
        }}
      >
        {images.map((image, index) => (
          <button
            key={image.id}
            onClick={() => setCurrentIndex(index)}
            aria-label={`Ver ${image.title}`}
            style={{
              width: "13px",
              height: "13px",
              borderRadius: "50%",
              border: "none",
              cursor: "pointer",
              backgroundColor:
                currentIndex === index ? "#c90016" : "#aaa"
            }}
          />
        ))}
      </div>
    </section>
  );
};

const arrowStyle = (position) => ({
  position: "absolute",
  top: "50%",
  [position]: "15px",
  transform: "translateY(-50%)",
  backgroundColor: "rgba(0,0,0,0.6)",
  color: "white",
  border: "none",
  borderRadius: "50%",
  padding: "15px",
  fontSize: "22px",
  cursor: "pointer"
});

export default Carousel;
