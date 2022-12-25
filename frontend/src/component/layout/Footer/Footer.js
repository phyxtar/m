import React from 'react';
import play from '../../../images/play.png';
import logo from '../../../images/logo.png';
import './Footer.css';

const Footer = () => {
  return (
    <footer id='footer'>
      <div className='container'>
        <div className='row'>
          <div className='col-md-3 text-center'>
            <div className='leftFooter'>
              <h4>DOWNLOAD OUR APP</h4>
              <p>Download App for Android and IOS mobile phone</p>
              <img src={play} alt='App' style={{ width: '50%' }} />
            </div>
          </div>
          <div className='col-md-6 text-center'>
            <div className='middleFooter'>
              <img
                src={logo}
                style={{
                  width: '70%',
                }}
                alt='Logo'
              />
              <p>Ab Har Bussiness Bada Hai, Bazaar.com Ke Sath!!!</p>

              <p>Copyrights 2021 &copy; m-bazaar.com</p>
            </div>
          </div>
          <div className='col-md-3 text-center'>
            <div className='rightFooter'>
              <h1>Follow Us</h1>
              <a href='https://www.instagram.com/bazaarcom7/'>Instagram</a>
              <a href='https://www.instagram.com/bazaarcom7/'>Youtube</a>
              <a href='https://www.facebook.com/profile.php?id=100085530316914'>
                Facebook
              </a>
              <a
                href='http://ec2-18-183-250-19.ap-northeast-1.compute.amazonaws.com/'
                target='_blank'
                rel='noreferrer'
              >
                Become A Merchant
              </a>
              <a href='tel:18003094131'>Reach Us - 18003094131</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
