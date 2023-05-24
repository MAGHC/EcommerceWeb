import { Link } from 'react-router-dom';
import { Product } from '../../scheme/products';
import style from './ProductCard.module.css';

const ProductCard = ({ product }: { product: Product }) => {
  return (
    <li className={style.container}>
      <Link to={`/product/${product.id}`}>
        <div className={style.mainImg}>
          <img src={product.imgs[0]} alt="productMainImg" />
        </div>
        <div>
          <strong>{product.title}</strong>
        </div>
        <div>
          <strong>{product.price}</strong>
        </div>
        <strong> #{product.categorie}</strong>
      </Link>
    </li>
  );
};

export default ProductCard;
