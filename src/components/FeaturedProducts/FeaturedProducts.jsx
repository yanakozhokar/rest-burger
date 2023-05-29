import React, { useRef } from 'react';
import Slider from 'react-slick';
import { MdStar } from 'react-icons/md';
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io';
import './FeaturedProducts.css';
import DoubleSmokey from '../../images/double-smokey-bbq-angus-burger.png';

// const imagePath = 'src/images/double-smokey-bbq-angus-burger.png';

export const FeaturedProducts = ({ products }) => {
  const sliderRef = useRef(null);
  const imagePath = '../../images/double-smokey-bbq-angus-burger.png';

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    arrows: false,
    slidesToShow: 3,
    slidesToScroll: 1,
  };

  const onPrevBtnClick = () => {
    sliderRef.current.slickPrev();
  };

  const onNextBtnClick = () => {
    sliderRef.current.slickNext();
  };

  const imgHandler = url => {
    const a = require(`../../images/${url}`);
    console.log(a);
    return;
  };

  return (
    <section className="featured products">
      <img src="../../images/signature-sirloin.png" alt="" />
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
                src={imgHandler(product.url)}
                alt={product.name}
                className="products__item-img"
              />
            </div>
            <h3 className="products__item-title">{product.name}</h3>
            <p className="products__item-description">{product.description}</p>
          </div>
        ))}
      </Slider>
    </section>
  );
};
