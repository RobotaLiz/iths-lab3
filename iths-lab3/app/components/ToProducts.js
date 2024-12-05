"use client";

import Link from "next/link";
import styles from "./ToProducts.module.css";

export default function ToProducts() {
  return (
    <Link href="/" className={styles.link}>
      Tillbaka till Webbshop
    </Link>
  );
}
