import React from 'react';
import { Hero } from '../components/home/Hero';
import { Stats } from '../components/home/Stats';
import { Services } from '../components/home/Services';
import { Mission } from '../components/home/Mission';
import { Contact } from '../components/home/Contact';

export const Home: React.FC = () => {
  return (
    <main>
      <Hero />
      <Stats />
      <Services />
      <Mission />
      <Contact />
    </main>
  );
};
