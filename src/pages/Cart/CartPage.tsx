import CartCard from '../../components/CartCard/CartCard';
import { Cart } from '../../scheme/cart';
import { getCart } from '../../service/firebase';
import style from './CartPage.module.css';
import { useQuery } from 'react-query';

const CartPage = () => {
  const { data: cart } = useQuery<Cart[]>(['cart'], getCart);

  console.log(cart, '확인');
  const total = cart && cart?.reduce((prev, cur) => prev + cur.price * cur.quantity, 0);

  return (
    <section>
      {cart?.length === 0 && <p> 장바구니에 물건을 담아주세요</p>}
      <ul className={style.ul}>
        {cart &&
          cart.map((item, i) => {
            return <CartCard key={i} cart={item}></CartCard>;
          })}
      </ul>
      <div>총 가격 : {total}</div>
    </section>
  );
};

export default CartPage;
