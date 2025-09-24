
import React from 'react';
import profilePic from './profilePic.webp';
import { ArrowDown, Github, Linkedin, Mail } from 'lucide-react';

export default function HeroSection() {
  const scrollToAbout = () => {
    const aboutSection = document.getElementById('about');
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-orange-50 via-white to-orange-100"></div>
      
      {/* Profile Picture Background Element */}
      <div className="absolute top-20 right-10 w-96 h-96 opacity-10">
        <div className="w-full h-full rounded-full bg-gradient-to-br from-orange-300 to-orange-500 blur-3xl"></div>
      </div>
      
      {/* Geometric Shapes */}
      <div className="absolute top-32 left-16 w-24 h-24 bg-orange-200 rounded-full opacity-20 animate-pulse"></div>
      <div className="absolute bottom-40 left-20 w-16 h-16 bg-orange-300 rounded-full opacity-30"></div>
      
      {/* Main Content */}
      <div className="relative z-10 w-full">
        <div className="flex items-center min-h-screen">
          {/* Left Content - Takes 2/3 of the screen */}
          <div className="w-2/3 px-6 lg:px-16 py-12">
            <div className="max-w-4xl">
              <div className="mb-6">
                <span className="inline-block px-4 py-2 bg-orange-100 text-orange-700 rounded-full text-sm font-medium mb-4">
                  Welcome to my portfolio
                </span>
              </div>
              
              <h1 className="text-4xl lg:text-6xl xl:text-7xl font-bold text-gray-900 mb-6 leading-tight">
                Hi, I'm{' '}
                <span className="bg-gradient-to-r from-orange-500 to-orange-600 bg-clip-text text-transparent">
                  Vijith Selvakumar
                </span>
              </h1>
              
              <p className="text-lg lg:text-xl text-gray-600 mb-8 leading-relaxed max-w-2xl">
                Creative developer & designer crafting beautiful digital experiences 
                with modern technologies and innovative solutions.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 mb-12">
                <button className="px-8 py-4 bg-gradient-to-r from-orange-500 to-orange-600 text-white rounded-full font-semibold hover:shadow-xl hover:scale-105 transition-all duration-300">
                  View My Work
                </button>
                <button className="px-8 py-4 border-2 border-orange-500 text-orange-600 rounded-full font-semibold hover:bg-orange-50 transition-all duration-300">
                  Download CV
                </button>
              </div>
              
              {/* Social Links */}
              <div className="flex gap-6">
                <a href="https://github.com/VIJITH-SELVAKUMARR" className="p-3 bg-white rounded-full shadow-md hover:shadow-xl hover:scale-110 transition-all duration-300 group">
                  <Github className="w-5 h-5 text-gray-600 group-hover:text-orange-500" />
                </a>
                <a href="https://www.linkedin.com/in/vijith-selvakumar/" className="p-3 bg-white rounded-full shadow-md hover:shadow-xl hover:scale-110 transition-all duration-300 group">
                  <Linkedin className="w-5 h-5 text-gray-600 group-hover:text-orange-500" />
                </a>
                <a href="mailto:valiront00@gmail.com" className="p-3 bg-white rounded-full shadow-md hover:shadow-xl hover:scale-110 transition-all duration-300 group">
                  <Mail className="w-5 h-5 text-gray-600 group-hover:text-orange-500" />
                </a>
              </div>
            </div>
          </div>
          
          {/* Right Content - Profile Picture Section (1/3 of screen) */}
          <div className="w-2/3 relative h-screen">
            {/* Profile Picture with right-to-left fade effect */}
            <div className="absolute inset-0 overflow-hidden">
              <img 
                src={profilePic}
                alt="Profile"
                className="w-full h-full object-cover object-center"
                style={{
                  maskImage: 'linear-gradient(to left, black 60%, transparent 100%)',
                  WebkitMaskImage: 'linear-gradient(to left, black 60%, transparent 100%)',
                }}
              />
            </div>
            
            {/* Floating Elements positioned relative to the right section */}
            <div className="absolute top-20 right-8 w-12 h-12 bg-orange-500 rounded-full shadow-lg animate-bounce"></div>
            <div className="absolute bottom-32 right-16 w-8 h-8 bg-orange-300 rounded-full shadow-md"></div>
            <div className="absolute top-1/2 right-4 w-6 h-6 bg-orange-400 rounded-full opacity-70"></div>
          </div>
        </div>
      </div>
      
      {/* Scroll Indicator */}
      <button 
        onClick={scrollToAbout}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 p-2 text-orange-500 hover:text-orange-600 transition-colors animate-bounce"
      >
        <ArrowDown className="w-6 h-6" />
      </button>
    </section>
  );
}