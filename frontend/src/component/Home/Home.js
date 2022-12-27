import React, { Fragment, useEffect } from 'react';
// import { CgMouse } from 'react-icons/cg';
import './Home.css';
import ProductCard from './ProductCard.js';
import MetaData from '../layout/MetaData';
import { clearErrors, getProduct } from '../../actions/productAction';
import { useSelector, useDispatch } from 'react-redux';
import Loader from '../layout/Loader/Loader';
import { useAlert } from 'react-alert';
import Search from '../Product/Search';
import TopShop from './TopShop';
import Festive from './Festive';
import Discount from './Discount';
import Promote from './Promote';
import ReelsBazaar from './ReelsBazaar';

const Home = () => {
  const alert = useAlert();
  const dispatch = useDispatch();
  const { loading, error, products } = useSelector((state) => state.products);

  useEffect(() => {
    if (error) {
      alert.error(error);
      dispatch(clearErrors());
    }
    dispatch(getProduct());
  }, [dispatch, error, alert]);

  return (
    <Fragment>
      {loading ? (
        <Loader />
      ) : (
        <Fragment>
          <MetaData title='Home - Welcome to Bazaar.com' />

          <div className='banner'>
            <h1>
              Asli Savings Million + <br />
              Find A <span className='text-danger'>Store Near You...</span>
            </h1>

            <Search />

            {/* <a href='#products'>
              <button>
                Scroll
                <CgMouse />
              </button>
            </a> */}
          </div>
          <div>
            <h2 className='homeHeading'>Top Shops By Bazaar.com</h2>
            <TopShop />
          </div>

          <div>
            <h2 className='homeHeading'>Reels by Bazaar.com</h2>
            <ReelsBazaar />
          </div>

          <div>
            <h2 className='homeHeading'>Festival / Heavy Discount</h2>
            <Festive />
          </div>

          <div>
            <h2 className='homeHeading'>Promote By Bazaar.com</h2>
            <Promote />
          </div>

          <div>
            <h2 className='homeHeading'>50% or more Discount</h2>
            <Discount />
          </div>

          <h2 className='homeHeading2'>Featured Products By Bazaar.com</h2>

          <div className='container' id='products'>
            {products &&
              products.map((product) => <ProductCard product={product} />)}
          </div>
        </Fragment>
      )}
    </Fragment>
  );
};

export default Home;
