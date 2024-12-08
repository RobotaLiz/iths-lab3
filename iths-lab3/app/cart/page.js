"use client";

import Link from "next/link";
import { useCart } from "../context/CartProvider";
import styles from "./page.module.css";
import ToProducts from "../components/ToProducts";
import CartProduct from "../components/CartProduct";

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
              <CartProduct key={index} item={item} index={index}/>
            ))}
          </ul>
          <Link href="/checkout" className={styles.link}>
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
