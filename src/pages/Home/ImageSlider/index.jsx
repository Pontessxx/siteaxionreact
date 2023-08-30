import React, { useState, useEffect } from 'react';

const ImageSlider = () => {
  const images = [  './img/img1-car.png',    './img/img2-car.png',    './img/img3-car.png',    './img/img4-car.png'];
  const [count, setCount] = useState(0);

  useEffect(() => {
    const time = 2500;

    const showImage = () => {
      setCount((prevCount) => (prevCount + 1) % images.length);
    };

    const interval = setInterval(showImage, time);

    return () => {
      clearInterval(interval);
    };
  }, [images.length]);

  return (
    <>
      <img id="img-car" src={images[count]} alt="Slide" />
    </>
  );
};

export default ImageSlider;
