import React, { useState } from "react";
import {
  Carousel,
  CarouselItem,
  CarouselControl,
  CarouselIndicators,
  CarouselCaption
} from "reactstrap";

const items = [
  {
    src:
      "https://res.cloudinary.com/mrmagician/image/upload/v1583792412/eced_fbfunz.png"
  },
  {
    src:
      "https://res.cloudinary.com/mrmagician/image/upload/v1583760960/dcrust1_bxe05v.jpg"
  },
  {
    src:
      "https://res.cloudinary.com/mrmagician/image/upload/v1583760958/dcrust2_pwmxrq.jpg"
  },
  {
    src:
      "https://res.cloudinary.com/mrmagician/image/upload/v1583760966/dcrust3_qk7eo2.jpg"
  },
  {
    src:
      "https://res.cloudinary.com/mrmagician/image/upload/v1583760954/dcrust4_egbk22.jpg"
  }
];

const CarouselComp = props => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [animating, setAnimating] = useState(false);

  const next = () => {
    if (animating) return;
    const nextIndex = activeIndex === items.length - 1 ? 0 : activeIndex + 1;
    setActiveIndex(nextIndex);
  };

  const previous = () => {
    if (animating) return;
    const nextIndex = activeIndex === 0 ? items.length - 1 : activeIndex - 1;
    setActiveIndex(nextIndex);
  };

  const goToIndex = newIndex => {
    if (animating) return;
    setActiveIndex(newIndex);
  };

  const slides = items.map(item => {
    return (
      <CarouselItem
        onExiting={() => setAnimating(true)}
        onExited={() => setAnimating(false)}
        key={item.src}
      >
        <img src={item.src} alt={item.altText} className="img-fluid" />
        <CarouselCaption
          captionText={item.caption}
          captionHeader={item.caption}
        />
      </CarouselItem>
    );
  });

  return (
    <Carousel activeIndex={activeIndex} next={next} previous={previous}>
      <CarouselIndicators
        items={items}
        activeIndex={activeIndex}
        onClickHandler={goToIndex}
      />
      {slides}
      <CarouselControl
        direction="prev"
        directionText="Previous"
        onClickHandler={previous}
      />
      <CarouselControl
        direction="next"
        directionText="Next"
        onClickHandler={next}
      />
    </Carousel>
  );
};

export default CarouselComp;
