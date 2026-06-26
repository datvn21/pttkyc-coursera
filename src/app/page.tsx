"use client";

import React from 'react';
import TopBanner from '@/components/TopBanner';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Companies from '@/components/Companies';
import InvestInCareer from '@/components/InvestInCareer';
import Outcomes from '@/components/Outcomes';
import CareerSkills from '@/components/CareerSkills';
import SearchPrograms from '@/components/SearchPrograms';
import Testimonials from '@/components/Testimonials';
import FAQ from '@/components/FAQ';
import BottomBanner from '@/components/BottomBanner';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <div className="min-h-screen font-sans">
      <TopBanner />
      <Navbar />
      <Hero />
      <Companies />
      <InvestInCareer />
      <Outcomes />
      <CareerSkills />
      <SearchPrograms />
      <Testimonials />
      <FAQ />
      <BottomBanner />
      <Footer />
    </div>
  );
}
