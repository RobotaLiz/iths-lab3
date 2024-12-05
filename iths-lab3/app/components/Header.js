'use client';

import Link from 'next/link';
import { useCart } from '../context/CartProvider';
import styles from './Header.module.css';
import MiniCart from './MiniCart';

export default function Header() {
  const { cartItemCount } = useCart();

  return (
    <header className={styles.header}>
      <h1 className={styles.title}>
        <Link href="/">Webbshop</Link>
      </h1>
      <MiniCart/>
    </header>
  );
}
