import React, { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';

const Discount = () => {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };
  return (
    <Carousel activeIndex={index} onSelect={handleSelect}>
      <Carousel.Item>
        <img
          className='d-block w-100'
          src='https://res.cloudinary.com/dls5gtxhw/image/upload/v1672069337/my%20images/banner-pc-1024x350._CB427954858__qkec3i.jpg'
          alt='First slide'
        />
        <Carousel.Caption>
          {/* <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p> */}
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className='d-block w-100'
          src='https://res.cloudinary.com/dls5gtxhw/image/upload/v1672069338/my%20images/pngtree-cross-border-e-commerce-amazon-overseas-simple-fashion-backpack-travel-banner-image_661109_v31uvq.jpg'
          alt='Second slide'
        />

        <Carousel.Caption>
          {/* <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p> */}
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
};

export default Discount;
