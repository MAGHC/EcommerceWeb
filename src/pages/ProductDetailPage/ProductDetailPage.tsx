import { useState } from 'react';
import { useLocation } from 'react-router-dom';
import ImageViewer from './../../components/ImageViewer/ImageViewer';
import { Product } from '../../scheme/products';
import style from './ProductDetailPage.module.css';
import { addAndEditCart } from '../../service/firebase';
import { AddCartT } from '../../scheme/cart';

type LoactionState = {
  state: { product: Product };
};

const ProductDetailPage = () => {
  const {
    state: { product },
  } = useLocation() as LoactionState;
  console.log(product);

  const [opt, setOpt] = useState(product.options[0]);

  const handleSubmit = () => {
    const cartProdut = { ...product, options: opt };
    addAndEditCart(cartProdut);
    alert('성공');
  };

  console.log(opt);

  return (
    <section className={style.section}>
      <ImageViewer imgs={product.imgs}></ImageViewer>
      <div className={style.right}>
        <div>
          <h3>{product.title}</h3>
          <h5>{product.price}￦</h5>
          <p>{product.description}</p>
        </div>
        <div>
          <select className={style.select} onChange={(e) => setOpt(e.target.value)}>
            {product.options &&
              product.options.map((opt, i) => {
                return (
                  <option key={i} value={opt}>
                    {opt}
                  </option>
                );
              })}
          </select>
        </div>
        <button onClick={handleSubmit} className={style.btn}>
          장바구니
        </button>
      </div>
    </section>
  );
};

export default ProductDetailPage;
