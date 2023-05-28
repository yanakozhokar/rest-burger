// import SpecialOfferImg from '../../images/special-offer.png';
import { AiFillInfoCircle } from 'react-icons/ai';
import './Gallery.css';

export const Gallery = () => {
  return (
    <div className="gallery">
      <div className="gallery__special-offer-container">
        <div className="gallery__special-offer-card">
          <p className="gallery__special-offer-title">Earn 10% Reward Points</p>
          <p className="gallery__special-offer-description">
            You will earn 10% reward points from your orders, you can spend your
            reward points on future orders.
          </p>
          <button type="button" className="gallery__special-offer-btn">
            View offer
          </button>
          <AiFillInfoCircle
            width={20}
            height={20}
            className="gallery__special-offer-info-icon"
          />
        </div>
      </div>
    </div>
  );
};
