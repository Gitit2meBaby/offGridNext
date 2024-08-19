'use client'
import Banner from '@/components/Banner';
import CallToAction from '@/components/CallToAction';
import Hero from '@/components/Hero';
import InfoSection from '@/components/InfoSection';
import ProductsSection from '@/components/ProductsSection';
import Quote from '@/components/Quote';
import Testimonials from '@/components/Testimonials';
import { useNav } from '@/NavContext';
import { Suspense } from 'react';

export default function HomePage() {
  const { isModalOpen } = useNav();
  return (
    <main>
      <Hero />
      <InfoSection />
      <CallToAction />
      <ProductsSection />
      <Testimonials />
      <Banner />
      {isModalOpen && <Suspense><Quote /></Suspense>}
    </main>
  );
}

// <!-- fandango  ----  ftpPass@standalonepower  -->