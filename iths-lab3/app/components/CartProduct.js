import { useCart } from '../context/CartProvider';
import styles from "./CartProduct.module.css";

export default function CartProduct({ item }) {

  const { addToCart, removeFromCart, deleteFromCart } = useCart();

  return (
    <li className={styles.cartItem}>
      <img src={item.image} alt={item.title} className={styles.image} />
      <div>
        <h3>{item.title}</h3>
        <p>{item.price} USD</p>
        <p>Antal: {item.quantity}</p>
        <button onClick={() => addToCart(item)}>+</button>
        <button onClick={() => removeFromCart(item.id)}>-</button>

        <button onClick={() => deleteFromCart(item.id)}>X</button>
      </div>
    </li>
  );
}
