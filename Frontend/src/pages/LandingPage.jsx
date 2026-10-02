import React from 'react';
import {
  HeroSection,
  ArchitectureSection,
  LatestLaunchesSection,
  ProductsShowcaseSection,
  GlobalPresenceSection,
  BusinessUnitsSection,
  TestimonialsCoverflow
} from '../components/landing';

export const LandingPage = () => {
  return (
    <>
      {/* Hero: "From Scratch to SaaS" Builder Engine Animation */}
      <HeroSection />

      {/* Section 1: Architecture & Philosophy (Left Blueprint, Right Copy) */}
      <ArchitectureSection />

      {/* Section 2: Latest Launches with Mockups */}
      <LatestLaunchesSection />

      {/* Section 3: SaaS Products Showcase with Pinned Terminal Window */}
      <ProductsShowcaseSection />

      {/* Section 4: Global Presence & Cloud Edge Nodes */}
      <GlobalPresenceSection />

      {/* Section 5: Business Units with Luxury Hover Transitions */}
      <BusinessUnitsSection />

      {/* Section 6: Testimonials with 3D Coverflow Effect */}
      <TestimonialsCoverflow />
    </>
  );
};

export default LandingPage;
