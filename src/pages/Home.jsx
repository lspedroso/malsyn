import React from 'react';
import Hero from '../components/Hero';
import Sobre from '../components/Sobre';
import Principios from '../components/Principios';
import ClienteTab from '../components/ClienteTab';

export default function Home() {
  return (
    <main id="page-home">
      <Hero />
      <Sobre />
      <Principios />
      <ClienteTab />
    </main>
  );
}
