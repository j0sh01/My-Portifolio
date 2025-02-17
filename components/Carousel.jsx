import { useEffect, useState } from 'react';
import Image from 'next/image'; 
import nairobi from '../src/images/nairobi.jpeg';
import nairobi1 from '../src/images/nairobi1.jpeg';

const images = [
  { src: nairobi, alt: 'Photo Image' },
  { src: nairobi1, alt: 'Photo Image' },
  { src: nairobi, alt: 'Photo Image' },
  // Add more image paths here
];

const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [fade, setFade] = useState('fade-enter-active');

  useEffect(() => {
    const intervalId = setInterval(() => {
      setFade('fade-exit-active');
      setTimeout(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
        setFade('fade-enter-active');
      }, 500); // Match this time with the transition duration
    }, 5000); // Change image every 5 seconds

    return () => clearInterval(intervalId);
  }, []);

  useEffect(() => {
    console.log(`Current index: ${currentIndex}, Image: ${images[currentIndex].src}`);
  }, [currentIndex]);

  return (
    <div className="carousel">
      <Image 
        src={images[currentIndex].src} 
        alt={images[currentIndex].alt} 
        width={800} // Specify width
        height={600} // Specify height
        className={`carousel-image ${fade}`} 
      />
    </div>
  );
};

export default Carousel;
