import React, { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';

const Promote = () => {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };
  return (
    <Carousel activeIndex={index} onSelect={handleSelect}>
      <Carousel.Item>
        <img
          className='d-block w-100'
          src='https://res.cloudinary.com/dls5gtxhw/image/upload/v1672069649/my%20images/black-friday-sale-banner-with-limited-time-offer-details_1017-28051_uyxxrl.webp'
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
          src='https://res.cloudinary.com/dls5gtxhw/image/upload/v1672069646/my%20images/1600w-BjBIq-T_6j4_m2exlw.webp'
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

export default Promote;
