// @ts-check
import React from 'react';
import styles from './styles.module.css';

/**
 * @param {{number: string, name: string, quantity: string, specs: React.ReactNode,
 * usage: React.ReactNode, image?: string}} props
 */
export function KitItem({ number, name, quantity, specs, usage, image }) {
  return (
    <article className={styles.card} aria-labelledby={`kit-title-${number}`}>
      <header className={styles.header}>
        <span className={styles.number}>{number}</span>
        <h3 id={`kit-title-${number}`} className={styles.title}>{name}</h3>
        <span className={styles.quantity}>× {quantity}</span>
      </header>
      <div className={styles.body}>
        {image ? (
          <img className={styles.photo} src={image} alt={`${name}实物照片`} loading="lazy" />
        ) : (
          <div className={styles.placeholder}>图 {number} · 实物照片待补充</div>
        )}
        <dl className={styles.details}>
          <dt>规格</dt>
          <dd>{specs}</dd>
          <dt>用途</dt>
          <dd>{usage}</dd>
        </dl>
      </div>
    </article>
  );
}
