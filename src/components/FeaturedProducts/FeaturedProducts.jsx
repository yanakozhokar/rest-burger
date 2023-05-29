import React, { useRef } from 'react';
import { MdStar } from 'react-icons/md';
import { ImPlus } from 'react-icons/im';
import { BsStarFill } from 'react-icons/bs';
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io';
import Slider from 'react-slick';
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
      <Slider as="ul" ref={sliderRef} {...settings}>
        {products.map(product => (
          <div key={product.id} className="products__item">
            <div className="products__item-img-container">
              <img
                src={process.env.PUBLIC_URL + '/images/' + product.url}
                alt={product.name}
                className="products__item-img"
              />
              {product.recommended === 'true' && (
                <div className="products__item-recommended-container">
                  <BsStarFill
                    width={12}
                    height={12}
                    className="products__recommended-icon"
                  />
                  <p className="products__recommended-text">Recommended</p>
                </div>
              )}
            </div>
            <div className="products__item-description-container">
              <h3 className="products__item-title">{product.name}</h3>
              <p className="products__item-description">
                {product.description}
              </p>
            </div>
            <div className="products__item-price-container">
              <p className="products__item-price">${product.price}</p>
              <div className="products__item-icon-container">
                <ImPlus
                  width={14}
                  height={14}
                  className="products__item-icon"
                />
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </section>
  );
};
