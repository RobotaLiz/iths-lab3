import styles from './Product.module.css';

export default function Product({item, click}) {
  
    return (
        <div key={item.id} className={styles.card} onClick={() => click(item)}>
        <img src={item.image} alt={item.title} className={styles.image} />
        <h3 className={styles.productTitle}>{item.title}</h3>
        <p className={styles.price}>{item.price} USD</p>
        <p className={styles.clickHint}>Klicka för mer info</p>
      </div>
    );
  }