'use client';

import { useState, useEffect } from 'react';
import { useCart } from './context/CartProvider';
import Product from './components/Product';
import ProductModal from './components/ProductModal';
import styles from './page.module.css';

export default function Home() {
  const [products, setProducts] = useState([]);
  const { addToCart } = useCart();
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    const fetchData = async () => {

      fetch('https://fakestoreapi.com/products/categories')
            .then(res=>res.json())
            .then(json=>console.log(json))

      try {
        const response = await fetch('https://fakestoreapi.com/products');
        if (!response.ok) throw new Error('Error');
        const data = await response.json();
        setProducts(data);
        console.log(data[0]);
      } catch (error) {
        console.error('Error when getting products', error);
      }
    };

    fetchData();
  }, []);

  const handleProductClick = (product) => {
    setSelectedProduct(product);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Webbshop</h1>
      <div className={styles.grid}>
        {products.map((product) => (
        <Product item={product} click={handleProductClick}/>
        ))}
      </div>
      {selectedProduct && (
        <ProductModal
          product={selectedProduct}
          isOpen={isModalOpen}
          onClose={closeModal}
          onAddToCart={(product) => {
            addToCart(product);
            closeModal();
          }}
        />
      )}
    </div>
  );
}
