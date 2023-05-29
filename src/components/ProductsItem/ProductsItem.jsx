import { ImPlus } from 'react-icons/im';
import { BsStarFill } from 'react-icons/bs';
import './ProductsItem.css';

export const ProductsItem = ({ product }) => {
  return (
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
        <p className="products__item-description">{product.description}</p>
      </div>
      <div className="products__item-price-container">
        <p className="products__item-price">${product.price}</p>
        <div className="products__item-icon-container">
          <ImPlus width={14} height={14} className="products__item-icon" />
        </div>
      </div>
    </div>
  );
};
