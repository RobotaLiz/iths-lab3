"use client";

import { useCart } from "../context/CartProvider";
import styles from "./page.module.css";
import ToProducts from "../components/ToProducts";

export default function CheckoutPage() {
  const { cartItems, deleteFromCart,totalCost } = useCart();

  return (
    <div className={styles.container}>
      <h1>Checka ut</h1>
      {cartItems.length === 0 ? (
        <>
          <p>Du har inte lagt nåt i din kundkorg!</p>
          <ToProducts />
        </>
      ) : (
        <>
          <ul className={styles.cartList}>
            {cartItems.map((item, index) => (
              <li key={index} className={styles.cartItem}>
                <div>
                  <h3>{item.title}</h3>
                  <p>{item.price} USD</p>
                  <button onClick={() => deleteFromCart(item.id)}>
                    Ta bort
                  </button>
                </div>
              </li>
            ))}
          </ul>
          <p>Totalt: {totalCost}</p>
          <button>Lägg order</button>
        </>
      )}
    </div>
  );
}
