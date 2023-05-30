import { ProductsTop } from 'components/ProductsTop/ProductsTop';
import { ProductsList } from 'components/ProductsList/ProductsList';

export const Sides = ({ products }) => {
  return (
    <section className="products">
      <ProductsTop title={'Sides'} />
      <ProductsList products={products} />
    </section>
  );
};
