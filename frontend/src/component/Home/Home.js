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

          <h2 className='homeHeading'>Featured Product</h2>

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
