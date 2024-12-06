"use client";

import { useCart } from "../context/CartProvider";
import { useState } from "react";
import styles from "./BudgetBar.module.css";
import Image from "next/image"

export default function BudgetBar() {
  const { budget,setBudget, totalCost, budgetProgress } = useCart();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [newBudget, setNewBudget] = useState(budget);

  const handleSave = () => {
    setBudget(Number(newBudget));
    setIsModalOpen(false);
  };

  return (
    <>
      <div className={styles.container}>
        <div className={styles.progressBar}>
          <div
            className={styles.progress}
            style={{ width: `${budgetProgress}%` }}
          ></div>
        </div>
        <div className={styles.infoWrapper}>
          <p className={styles.info}>
            {totalCost.toFixed(2)} USD av {budget.toFixed(2)} USD
          </p>
          <button className={styles.editButton} onClick={() => setIsModalOpen(true)}>
            <Image
              src="/icons/edit_mode_icon.png"
              alt="Edit Budget"
              width={20}
              height={20}
            />
          </button>
        </div>
        
      </div>

      {isModalOpen && (
        <div className={styles.modalOverlay} onClick={() => setIsModalOpen(false)}>
          <div
            className={styles.modalContent}
            onClick={(e) => e.stopPropagation()}
          >
            <h2>Sätt din budget</h2>
            <input
              type="number"
              value={newBudget}
              onChange={(e) => setNewBudget(e.target.value)}
              className={styles.input}
            />
            <div className={styles.modalActions}>
              <button className={styles.saveButton} onClick={handleSave}>
                Spara
              </button>
              <button
                className={styles.cancelButton}
                onClick={() => setIsModalOpen(false)}
              >
                Avbryt
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}