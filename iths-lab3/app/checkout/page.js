"use client";

import { useCart } from "../context/CartProvider";
import styles from "./page.module.css";
import ToProducts from "../components/ToProducts";
import { useRouter } from "next/navigation";

export default function CheckoutPage() {
  const { clearCart, cartItems, deleteFromCart, totalCost } = useCart();

  const router = useRouter();

  const handlePlaceOrder = () => {
    const cost = totalCost.toFixed(2);
    clearCart();
    router.push("/");
    alert('Tack för din beställning! Din totala kostnad är ' + cost + ' USD. Välkommen åter!');
  };

  return (
    <div className={styles.container}>
      <h1 className={styles.header}>Checka ut</h1>
      {cartItems.length === 0 ? (
        <>
          <p className={styles.emptyCartMessage}>Du har inte lagt något i din kundkorg!</p>
          <ToProducts />
        </>
      ) : (
        <>
          <ul className={styles.cartList}>
            {cartItems.map((item, index) => (
              <li key={index} className={styles.cartItem}>
                <img src={item.image} alt={item.title} className={styles.cartImage} />
                <div className={styles.cartDetails}>
                  <h3 className={styles.cartTitle}>{item.title}</h3>
                  <p className={styles.cartQuantity}>
                    Antal: {item.quantity}
                  </p>
                  <p className={styles.cartPrice}>
                    Pris per styck: {item.price.toFixed(2)} USD
                  </p>
                  <p className={styles.cartPrice}>
                    Totalt: {(item.price * item.quantity).toFixed(2)} USD
                  </p>
                  <button
                    onClick={() => deleteFromCart(item.id)}
                    className={styles.removeButton}
                  >
                    Ta bort
                  </button>
                </div>
              </li>
            ))}
          </ul>
          <div className={styles.totalSection}>
            <p className={styles.totalCost}>Totalt: {totalCost.toFixed(2)} USD</p>
            <button className={styles.orderButton} onClick={handlePlaceOrder}>Lägg order</button>
          </div>
          <div>
            <ToProducts/>
          </div>
        </>
      )}
    </div>
  );
}
