import React, { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';

const Festive = () => {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };
  return (
    <Carousel activeIndex={index} onSelect={handleSelect}>
      <Carousel.Item>
        <img
          className='d-block w-100'
          src='https://res.cloudinary.com/dls5gtxhw/image/upload/v1672048858/my%20images/Gaurav_Singh_Post_26_ehv26d.png'
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
          src='https://res.cloudinary.com/dls5gtxhw/image/upload/v1672048858/my%20images/Gaurav_Singh_Post_26_ehv26d.png'
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

export default Festive;
