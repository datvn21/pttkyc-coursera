"use client";

import React from 'react';
import TopBanner from '@/components/TopBanner';
import Navbar from '@/components/Navbar';
import ContinueLearning from '@/components/ContinueLearning';
import Hero from '@/components/Hero';
import Companies from '@/components/Companies';
import InvestInCareer from '@/components/InvestInCareer';
import LivestreamEvents from '@/components/LivestreamEvents';
import Outcomes from '@/components/Outcomes';
import CareerSkills from '@/components/CareerSkills';
import GuidedProjectsForYou from '@/components/GuidedProjectsForYou';
import PopularCourses from '@/components/PopularCourses';
import TopSpecializations from '@/components/TopSpecializations';
import NewReleases from '@/components/NewReleases';
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
      <ContinueLearning />
      <Hero />
      <Companies />
      <InvestInCareer />
      <GuidedProjectsForYou />
      <PopularCourses />
      <LivestreamEvents />
      <Outcomes />
      <CareerSkills />
      <TopSpecializations />
      <NewReleases />
      <SearchPrograms />
      <Testimonials />
      <FAQ />
      <BottomBanner />
      <Footer />
    </div>
  );
}
