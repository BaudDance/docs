// @ts-check
import React from 'react';
import styles from './styles.module.css';

/**
 * @param {{number: string, name: string, quantity: string, image: string}} props
 */
export function KitItem({ number, name, quantity, image }) {
  return (
    <article className={styles.item} aria-labelledby={`kit-title-${number}`}>
      <img className={styles.photo} src={image} alt={`${name}实物照片`} loading="lazy" />
      <div className={styles.details}>
        <span className={styles.number}>{number}</span>
        <h3 id={`kit-title-${number}`} className={styles.title}>
          {name.split(/(（[^）]*）|\s+)/).map((part, index) => (
            /^\s*$/.test(part) ? part : (
              <span key={index} className={styles.namePart}>{part}</span>
            )
          ))}
        </h3>
        <p className={styles.quantity}>{quantity}</p>
      </div>
    </article>
  );
}
