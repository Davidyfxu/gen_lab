import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Testimonials from './components/Testimonials';
import Process from './components/Process';
import CTA from './components/CTA';

export default function ProviderPage() {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <Testimonials />
      <Process />
      <CTA />
    </div>
  );
}
