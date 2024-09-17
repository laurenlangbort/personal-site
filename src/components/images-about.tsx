import React, { useState } from 'react';

// Define the type for each slide object
type Slide = {
  image: string;
};

// Define the slider data
export const SliderData: Slide[] = [
  {
    image: 'https://images.unsplash.com/photo-1654683406260-26b02a22c1f8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&q=80'
  },
  {
    image: 'https://images.unsplash.com/photo-1621543597540-e9be3740352b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1065&q=80'
  },
  {
    image: 'https://images.unsplash.com/photo-1565450443120-ea90b0ca5117?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&q=80'
  }
];

// Define the props type for ImageSlider
type ImageSliderProps = {
  slides: Slide[];
};

// Export only ImageSlider
export const ImageSlider: React.FC<ImageSliderProps> = ({ slides }) => {
  const [current, setCurrent] = useState(0);
  const length = slides.length;

  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  };

  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  };

  return (
    <section className="slider">
      <i className="arrow-left" onClick={prevSlide} />
      <i className="arrow-right" onClick={nextSlide} />
      {slides.map((slide, index) => (
        <div className={index === current ? 'slide active' : 'slide'} key={index}>
          {index === current && <img src={slide.image} alt={`Slide ${index + 1}`} className="image" />}
        </div>
      ))}
    </section>
  );
};