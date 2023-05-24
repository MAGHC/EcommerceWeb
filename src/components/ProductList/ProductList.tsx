import style from './ProductList.module.css';
import ProductCard from '../ProductCard/ProductCard';
import { Product } from '../../scheme/products';

const ProductList = ({ products }: { products: Product[] }) => {
  return (
    <ul className={style.ul}>
      {products.map((product) => (
        <ProductCard key={product.id} product={product}></ProductCard>
      ))}
    </ul>
  );
};

export default ProductList;
