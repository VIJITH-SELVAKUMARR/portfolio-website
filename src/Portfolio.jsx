import React from 'react';
import Navigation from './components/Navigation';
import HeroSection from './components/HeroSection';
import AboutSection from './components/AboutSection';
import SkillsSection from './components/SkillsSection';
//import ProjectsSection from './components/ProjectsSection';
import ContactSection from './components/ContactSection';

export default function Portfolio() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      <HeroSection />
      <AboutSection />
      <SkillsSection />
      {/* <ProjectsSection /> */}
      <ContactSection />
      
      {/* Footer */}
      <footer className="py-12 bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center">
          <div className="mb-6">
            <div className="font-bold text-2xl bg-gradient-to-r from-orange-400 to-orange-500 bg-clip-text text-transparent">
              Vijith Selvakumar
            </div>
          </div>
          <p className="text-gray-400 mb-6">
            Creating beautiful digital experiences, one project at a time.
          </p>
          <div className="border-t border-gray-800 pt-6">
            <p className="text-gray-500 text-sm">
              © 2025 Vijith Selvakumar. All rights reserved. Built with passion and creativity.
            </p>
          </div>
        </div>
      </footer>
      
      <style>{`
        @keyframes spin-slow {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }
        
        .animate-spin-slow {
          animation: spin-slow 20s linear infinite;
        }
        
        .line-clamp-3 {
          display: -webkit-box;
          -webkit-line-clamp: 3;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
        
        html {
          scroll-behavior: smooth;
        }
      `}</style>
    </div>
  );
}