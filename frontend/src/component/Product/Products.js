import React, { Fragment, useEffect, useState } from 'react';
import './Products.css';
import { useSelector, useDispatch } from 'react-redux';
import { clearErrors, getProduct } from '../../actions/productAction';
import Loader from '../layout/Loader/Loader';
import ProductCard from '../Home/ProductCard';
import { useParams } from 'react-router-dom';
import Pagination from 'react-js-pagination';
import Slider from '@material-ui/core/Slider';
import Typography from '@mui/material/Typography';
import { useAlert } from 'react-alert';
import MetaData from '../layout/MetaData';

const categories = [
  'Deals and Savings',
  'Mobile & Electronic Devices',
  'Fashion & Beauty',
  'Groceries & Pet Supplies',
  'Health & Personal Care',
  'Home, Furniture & Appliances',
  'Music, Video and Gaming',
  'FunZone & Inspiration',
  'Books and Education',
  'Toys, Children and baby',
  'Automobile',
  'Office & Professional',
  'Sports, Outdoor & Travel',
  'Gifting',
];

const Products = ({ match }) => {
  const { keyword } = useParams();
  const dispatch = useDispatch();
  const alert = useAlert();

  const [currentPage, setCurrentPage] = useState(1);
  const [category, setCategory] = useState('');
  const [price, setPrice] = useState([0, 25000]);
  const [ratings, setRatings] = useState(0);

  const { products, loading, error, productsCount, resultPerPage } =
    useSelector((state) => state.products);

  const key = keyword;

  const setCurrentPageNo = (e) => {
    setCurrentPage(e);
  };

  const priceHandler = (event, newPrice) => {
    setPrice(newPrice);
  };

  useEffect(() => {
    if (error) {
      alert.error(error);
      dispatch(clearErrors());
    }
    dispatch(getProduct(key, currentPage, price, category, ratings));
  }, [dispatch, key, currentPage, price, category, ratings, alert, error]);

  // let count = filteredProductsCount;

  return (
    <Fragment>
      {loading ? (
        <Loader />
      ) : (
        <Fragment>
          <MetaData title='Products - Bazaar.com' />
          <h2 className='productsHeading'>Products</h2>
          <div className='products'>
            {products &&
              products.map((product) => (
                <ProductCard key={product._id} product={product} />
              ))}
          </div>

          <div className='filterBox'>
            <Typography>Price</Typography>
            <Slider
              value={price}
              onChange={priceHandler}
              valueLabelDisplay='auto'
              aria-labelledby='range-slider'
              min={0}
              max={25000}
            />
            <Typography>Categories</Typography>
            <ul className='categoryBox'>
              {categories.map((category) => (
                <li
                  className='category-link'
                  key={category}
                  onClick={() => setCategory(category)}
                >
                  {category}
                </li>
              ))}
            </ul>

            <fieldset>
              <Typography component='legend'>Ratings Above</Typography>
              <Slider
                value={ratings}
                onChange={(e, newRating) => {
                  setRatings(newRating);
                }}
                aria-labelledby='continuous-slider'
                valueLabelDisplay='auto'
                min={0}
                max={5}
              />
            </fieldset>
          </div>

          {resultPerPage < productsCount && (
            <div className='paginationBox'>
              <Pagination
                activePage={currentPage}
                itemsCountPerPage={resultPerPage}
                totalItemsCount={productsCount}
                onChange={setCurrentPageNo}
                nextPageText='Next'
                prevPageText='Prev'
                firstPageText='1st'
                lastPageText='Last'
                itemClass='page-item'
                linkClass='page-link'
                activeClass='pageItemActive'
                activeLinkClass='pageLinkActive'
              />
            </div>
          )}
        </Fragment>
      )}
    </Fragment>
  );
};

export default Products;
