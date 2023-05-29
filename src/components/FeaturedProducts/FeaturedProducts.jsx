import React, { useRef } from 'react';
import { MdStar } from 'react-icons/md';
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io';
import Slider from 'react-slick';
import { ProductsItem } from 'components/ProductsItem/ProductsItem';
import './FeaturedProducts.css';

export const FeaturedProducts = ({ products }) => {
  const sliderRef = useRef(null);

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 5000,
    slidesToShow: 3,
    slidesToScroll: 1,
  };

  const onPrevBtnClick = () => {
    sliderRef.current.slickPrev();
  };

  const onNextBtnClick = () => {
    sliderRef.current.slickNext();
  };

  return (
    <section className="featured products">
      <div className="products__top">
        <div className="products__title-container">
          <MdStar width={20} height={20} className="products__star" />
          <h2 className="products__title">Featured products</h2>
        </div>
        <div className="products__controls">
          <button
            type="button"
            className="products__btn-prev"
            onClick={onPrevBtnClick}
          >
            <IoIosArrowBack className="products__arrow" />
          </button>
          <button
            type="button"
            className="products__btn-next"
            onClick={onNextBtnClick}
          >
            <IoIosArrowForward className="products__arrow" />
          </button>
        </div>
      </div>
      <Slider ref={sliderRef} {...settings}>
        {products.map(product => (
          <ProductsItem product={product} />
        ))}
      </Slider>
    </section>
  );
};
