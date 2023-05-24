import { useNavigate } from 'react-router-dom';
import { Product } from '../../scheme/products';
import style from './ProductCard.module.css';

const ProductCard = ({ product }: { product: Product }) => {
  const navigate = useNavigate();

  return (
    <li
      onClick={() => navigate(`product/${product.id}`, { state: { product } })}
      className={style.container}
    >
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
    </li>
  );
};

export default ProductCard;
