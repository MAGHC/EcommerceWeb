import { Cart } from '../../scheme/cart';
import { addAndEditCart } from '../../service/firebase';
import style from './CartCard.module.css';

const CartCard = ({ cart }: { cart: Cart }) => {
  const handleQuantityPlus = () => {
    addAndEditCart(cart, cart.quantity + 1);
  };
  const handleQuantityMinus = () => {
    if (cart.quantity < 2) return;
    addAndEditCart(cart, cart.quantity - 1);
  };

  return (
    <li className={style.container}>
      <div>
        <div className={style.productSimpleDeatil}>
          <img src={cart.imgs[0]} alt="mainImgs" />
          <h6>{cart.title}</h6>
          <h6>{cart.description}</h6>
        </div>
      </div>
      <div className={style.optionSection}>
        <h6>옵션 : {cart.options}</h6>
        <h6>
          갯수 :
          <button onClick={handleQuantityMinus} className={style.btn}>
            -
          </button>
          {cart.quantity}
          <button onClick={handleQuantityPlus} className={style.btn}>
            +
          </button>
        </h6>
      </div>
      <div className={style.fee}>
        <h6>fee:무료</h6>
        <h6>주문 가격 : {cart.price * cart.quantity}</h6>
      </div>
      <button className={style.btn}>X</button>
    </li>
  );
};

export default CartCard;
