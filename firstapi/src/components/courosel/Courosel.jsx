import React, { useState } from "react";
import "./courosel.css";

function Corosel({ data }) {
  const [slide, setSlide] = useState(0);

  const leftmove = () => {
    setSlide(slide === 0?data.length-1: slide - 1); // Circular movement
  };

  const rightmove = () => {
    setSlide(slide === data.length - 1 ? 0 : slide + 1); // Circular movement
  };
  

  return (
    <div className="corosel">
      
      {data.map((s, index) => (
        <img
          src={s.url}
          alt=""
          key={index}
          height="300"
          width="100%"
          className={slide === index ? "slide" : "slide slide-hidden"}
        />
      ))}
      <i onClick={leftmove} className="left bi bi-arrow-left-circle-fill"></i>
      <i onClick={rightmove} className="right bi bi-arrow-right-circle-fill"></i>
    </div>
  );
}

export default Corosel;
