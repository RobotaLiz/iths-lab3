'use client';

import Link from 'next/link';
import { useCart } from '../context/CartProvider';
import styles from './Header.module.css';

export default function Header() {
  const { cartItemCount } = useCart();

  return (
    <header className={styles.header}>
      <h1 className={styles.title}>
        <Link href="/">Webbshop</Link>
      </h1>
      <div className={styles.cart}>
        <Link href="/cart">Kundkorg: {cartItemCount} saker</Link>
      </div>
    </header>
  );
}
