"use client";

import Link from "next/link";
import { useCart } from "../context/CartProvider";
import styles from "./MiniCart.module.css";
import Image from "next/image"
export default function MiniCart() {
  const { cartItemCount } = useCart();

  return (
    <div className={styles.cart}>
      <Link href="/cart" className={styles.link}>
        <Image
          src="/icons/shopping_cart_icon.png"
          alt="Shopping Cart"
          width={24}
          height={24}
          className={styles.cartImage}
        />
        <span className={styles.cartCount}>{cartItemCount}</span>
      </Link>
    </div>
  );
}
