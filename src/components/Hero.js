import React from 'react';
import '../css/hero.css';

export default function Hero({ title }) {
  return (
    <>
      <section className="heroSection">
        <h1>{title}</h1>
      </section>
    </>
  );
}
