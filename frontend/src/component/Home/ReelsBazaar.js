import './VideoCarousel.css';
import React from 'react';
import { Carousel } from 'react-bootstrap';
import ReactPlayer from 'react-player';
import 'bootstrap/dist/css/bootstrap.css';

const ReelsBazaar = () => {
  const videoProperties = [
    {
      id: 1,
      title: 'Coming Soon',
      src: 'https://res.cloudinary.com/dls5gtxhw/video/upload/v1672049804/my%20images/Y2Mate.is_-_COMING_SOON-8zFswUOzzoc-1080p-1655735812975_s98zws.mp4',
      // credit: 'Video by cottonbro from Pexels',
    },
    {
      id: 2,
      title: 'Intro',
      src: 'https://res.cloudinary.com/dls5gtxhw/video/upload/v1672125596/my%20images/yt5s.io-Bazaar.com_application_intro-_480p_ubpv0q.mp4',
      // credit: 'Video by cottonbro from Pexels',
    },
    {
      id: 3,
      title: 'Business Strategy',
      src: 'https://res.cloudinary.com/dls5gtxhw/video/upload/v1672125594/my%20images/yt5s.io-Business_Strategy-_480p_qbkwi0.mp4',
      // credit: 'Video by cottonbro from Pexels',
    },
  ];

  return (
    <div className='container'>
      <div className='row'>
        <div className='col'>
          <Carousel className='reelcra'>
            {videoProperties.map((videoObj) => {
              return (
                <Carousel.Item key={videoObj.id}>
                  <ReactPlayer
                    url={videoObj.src}
                    pip={true}
                    controls={true}
                    playing={true}
                  />
                  <Carousel.Caption>
                    <h3>{videoObj.title}</h3>
                    <p>{videoObj.credit}</p>
                  </Carousel.Caption>
                </Carousel.Item>
              );
            })}
          </Carousel>
        </div>
      </div>
    </div>
  );
};

export default ReelsBazaar;
