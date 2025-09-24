import React from 'react';
import { Award, Users, Coffee, Heart } from 'lucide-react';

export default function AboutSection() {
  const stats = [
    { icon: Award, value: '10+', label: 'Projects Completed' },
    { icon: Users, value: '3+', label: 'Happy Clients' },
    { icon: Coffee, value: '100+', label: 'Cups of Coffee' },
    { icon: Heart, value: '1+', label: 'Years Experience' }
  ];

  return (
    <section id="about" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div>
            <div className="mb-8">
              <span className="inline-block px-4 py-2 bg-orange-100 text-orange-700 rounded-full text-sm font-medium mb-6">
                About Me
              </span>
              <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
                Passionate about creating 
                <span className="bg-gradient-to-r from-orange-500 to-orange-600 bg-clip-text text-transparent"> digital magic</span>
              </h2>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                I'm a full-stack developer with a passion for creating beautiful, 
                functional, and user-friendly digital experiences. I’ve worked with modern tools and frameworks to build projects that are both functional and fun to use. I’m all about clean code, smart design, and making things that people enjoy.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                When I'm not coding, you can find me exploring new design trends, 
                contributing to open-source projects, or enjoying a good cup of coffee 
                while brainstorming my next creative project.
              </p>
            </div>
            
            <div className="grid grid-cols-2 gap-6">
              {stats.map((stat, index) => (
                <div key={index} className="text-center p-6 bg-gradient-to-br from-orange-50 to-white rounded-2xl border border-orange-100 hover:shadow-lg transition-all duration-300">
                  <stat.icon className="w-8 h-8 text-orange-500 mx-auto mb-3" />
                  <div className="text-2xl font-bold text-gray-900 mb-1">{stat.value}</div>
                  <div className="text-sm text-gray-600">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
          
          {/* Right Content */}
          <div className="relative">
            {/* Background Elements */}
            <div className="absolute inset-0 bg-gradient-to-br from-orange-100 to-orange-50 rounded-3xl transform rotate-3"></div>
            <div className="absolute inset-0 bg-gradient-to-tl from-orange-200 to-orange-100 rounded-3xl transform -rotate-2"></div>
            
            {/* Main Image Container */}
            <div className="relative bg-white rounded-3xl p-8 shadow-2xl">
              <img 
                src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=600&h=400&fit=crop"
                alt="Working"
                className="w-full h-80 object-cover rounded-2xl"
              />
              
              {/* Floating Card */}
              <div className="absolute -bottom-6 -right-6 bg-white rounded-2xl shadow-xl p-6 border border-orange-100">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-gradient-to-r from-orange-500 to-orange-600 rounded-full flex items-center justify-center">
                    <Heart className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <div className="text-sm font-semibold text-gray-900">Passion Driven</div>
                    <div className="text-xs text-gray-600">Love what I do</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}