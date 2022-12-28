import React from 'react';
import Slider from 'react-slick';

const Category = () => {
  var settings = {
    arrows: false,
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 7,
    slidesToScroll: 4,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
        },
      },
    ],
  };
  return (
    <Slider {...settings}>
      <div>
        <img
          className='slider-imag'
          src='https://res.cloudinary.com/dls5gtxhw/image/upload/v1672160842/category/11n0LdtsN7L._SX100_SY100__lcqqia.jpg'
          alt='Cat'
        />
        <h6 className='cat-heading'>Electronic</h6>
      </div>
      <div>
        <img
          className='slider-imag'
          src='https://res.cloudinary.com/dls5gtxhw/image/upload/v1672160842/category/11gXebGhu6L._SX100_SY100__itsaqg.jpg'
          alt='Cat'
        />
        <h6 className='cat-heading'>Groceries</h6>
      </div>
      <div>
        <img
          className='slider-imag'
          src='https://res.cloudinary.com/dls5gtxhw/image/upload/v1672160842/category/11luqHr9bsL._SX100_SY100__fc593o.jpg'
          alt='Cat'
        />
        <h6 className='cat-heading'>Fashion</h6>
      </div>
      <div>
        <img
          className='slider-imag'
          src='https://res.cloudinary.com/dls5gtxhw/image/upload/v1672160842/category/312t_JcSoDL._SX100_SY100__gtffe6.jpg'
          alt='Cat'
        />
        <h6 className='cat-heading'>Deals</h6>
      </div>
      <div>
        <img
          className='slider-imag'
          src='https://res.cloudinary.com/dls5gtxhw/image/upload/v1672160842/category/11Y884YgKnL._SX100_SY100__pfzju6.jpg'
          alt='Cat'
        />
        <h6 className='cat-heading'>Essentials</h6>
      </div>
      <div>
        <img
          className='slider-imag'
          src='https://res.cloudinary.com/dls5gtxhw/image/upload/v1672160842/category/21xXjwTSVIL._SX100_SY100__jrom9q.png'
          alt='Cat'
        />
        <h6 className='cat-heading'>Beauty</h6>
      </div>
      <div>
        <img
          className='slider-imag'
          src='https://res.cloudinary.com/dls5gtxhw/image/upload/v1672160842/category/118lbTsRMWL._SX100_SY100__ds7ajc.jpg'
          alt='Cat'
        />
        <h6 className='cat-heading'>Appliances</h6>
      </div>
      <div>
        <img
          className='slider-imag'
          src='https://res.cloudinary.com/dls5gtxhw/image/upload/v1672160841/category/110goaYwsDL._SX100_SY100__v4vbpf.jpg'
          alt='Cat'
        />
        <h6 className='cat-heading'>Mobiles</h6>
      </div>
      <div>
        <img
          className='slider-imag'
          src='https://res.cloudinary.com/dls5gtxhw/image/upload/v1672160841/category/31ICLWjUdHL._SX100_SY100__nxhmpa.jpg'
          alt='Cat'
        />
        <h6 className='cat-heading'>Home</h6>
      </div>
      <div>
        <img
          className='slider-imag'
          src='https://res.cloudinary.com/dls5gtxhw/image/upload/v1672160841/category/11V7tDHLoyL._SX100_SY100__prwave.jpg'
          alt='Cat'
        />
        <h6 className='cat-heading'>Books, Toys</h6>
      </div>
    </Slider>
  );
};

export default Category;
