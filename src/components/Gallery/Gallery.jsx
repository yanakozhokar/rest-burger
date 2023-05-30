import { useEffect, useState } from 'react';
import { SpecialOfferBanner } from 'components/SpecialOfferBanner/SpecialOfferBanner';
import { FeaturedProducts } from 'components/FeaturedProducts/FeaturedProducts';
import { SpecialBurgers } from 'components/SpecialBurgers/SpecialBurgers';
import './Gallery.css';

export const Gallery = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch('https://64748ef77de100807b1b337b.mockapi.io/products')
      .then(data => data.json())
      .then(data => setProducts(data))
      .catch(error => console.log(error));
  }, []);

  return (
    <div className="gallery">
      <SpecialOfferBanner />
      <FeaturedProducts
        products={products.filter(product => product.type === 'featured')}
      />
      <SpecialBurgers
        products={products.filter(product => product.type === 'special')}
      />
    </div>
  );
};
