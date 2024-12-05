'use client';

import Link from 'next/link';
import { useCart } from '../context/CartProvider';
import styles from './Header.module.css';
import MiniCart from './MiniCart';
import BudgetBar from './BudgetBar';

export default function Header() {
  const { cartItemCount } = useCart();

  return (
    <header className={styles.header}>
      <h1 className={styles.title}>
        <Link href="/">Webbshop</Link>
      </h1>
      
      <BudgetBar />
      <MiniCart/>
    </header>
  );
}
