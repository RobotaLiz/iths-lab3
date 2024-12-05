"use client";

import Link from "next/link";
import { useCart } from "../context/CartProvider";
import styles from "./page.module.css";
import ToProducts from "../components/ToProducts";

export default function CartPage() {
  const { addToCart,cartItems, removeFromCart, deleteFromCart, totalCost } = useCart();

  return (
    <div className={styles.container}>
      <h1>Din Kundkorg</h1>
      {cartItems.length === 0 ? (
        <>
          <p>Din kundkorg är tom!</p>
          <ToProducts />
        </>
      ) : (
        <>
          <ul className={styles.cartList}>
            {cartItems.map((item, index) => (
              <li key={index} className={styles.cartItem}>
                <img
                  src={item.image}
                  alt={item.title}
                  className={styles.image}
                />
                <div>
                <h3>{item.title}</h3>
                <p>{item.price} USD</p>
                <p>Antal: {item.quantity}</p>
                <button onClick={() => addToCart(item)}>+</button>
                <button onClick={() => removeFromCart(item.id)}>-</button>

                <button onClick={() => deleteFromCart(item.id)}>X</button>

              </div>
              </li>
            ))}
          </ul>
          <Link href="/checkout">
            Fortsätt till utcheckning {totalCost} USD
          </Link>
          <br/>
          <br/>
          <br/>
          <p>Inte färdig med shoppandet?</p>
          <br/>
          <ToProducts/>
        </>
      )}
    </div>
  );
}
