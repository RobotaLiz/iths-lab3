"use client";

import { useCart } from "../context/CartProvider";
import styles from "./BudgetBar.module.css";

export default function BudgetBar() {
  const { budget, totalCost, budgetProgress } = useCart();

  return (
    <div className={styles.container}>
      <div className={styles.progressBar}>
        <div
          className={styles.progress}
          style={{ width: `${budgetProgress}%` }}
        >
        </div>
        
      </div>
      <p className={styles.info}>
            {totalCost.toFixed(2)} USD av {budget.toFixed(2)} USD
          </p>
    </div>
  );
}
