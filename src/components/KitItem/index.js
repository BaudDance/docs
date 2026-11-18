// @ts-check
import React from 'react';
import styles from './styles.module.css';

/**
 * @param {{number: string, name: string, image: string}} props
 */
export function KitItem({ number, name, image }) {
  return (
    <article className={styles.item} aria-labelledby={`kit-title-${number}`}>
      <img className={styles.photo} src={image} alt={`${name}实物照片`} loading="lazy" />
      <div className={styles.details}>
        <span className={styles.number}>{number}</span>
        <h3 id={`kit-title-${number}`} className={styles.title}>
          {name}
        </h3>
      </div>
    </article>
  );
}
