import React from 'react';
import { Code, Palette, Database, Globe, Smartphone, Zap } from 'lucide-react';

export default function SkillsSection() {
  const skillCategories = [
    {
      icon: Database,
      title: 'Backend Development',
      skills: ['Python','Django', 'MySQL', 'PostgreSQL'],
      color: 'from-orange-500 to-orange-600'
    },
    {
      icon: Palette,
      title: 'Design & UI/UX',
      skills: ['Canva', 'Affinity', 'Flutter Flow', 'User Research'],
      color: 'from-orange-300 to-orange-400'
    },
    {
      icon: Globe,
      title: 'Web Technologies',
      skills: ['REST APIs', 'Authentication', 'Deployment', 'WebSockets'],
      color: 'from-orange-600 to-orange-700'
    },
    {
      icon: Smartphone,
      title: 'Mobile Development',
      skills: ['Flutter', 'iOS', 'Android', 'Cross-platform'],
      color: 'from-orange-400 to-orange-500'
    },
    {
      icon: Code,
      title: 'Frontend Development',
      skills: ['React', 'Vue', 'TypeScript', 'Tailwind CSS'],
      color: 'from-orange-400 to-orange-500'
    },
    {
      icon: Zap,
      title: 'Tools',
      skills: ['Git', 'Docker', 'Firebase', 'Google-Cloud'],
      color: 'from-orange-500 to-orange-600'
    }
  ];

  return (
    <section id="skills" className="py-24 bg-gradient-to-b from-white to-orange-50">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-2 bg-orange-100 text-orange-700 rounded-full text-sm font-medium mb-6">
            My Skills
          </span>
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Technologies I 
            <span className="bg-gradient-to-r from-orange-500 to-orange-600 bg-clip-text text-transparent"> love to work with</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            I'm passionate about staying up-to-date with the latest technologies 
            and continuously improving my skills to deliver the best solutions.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <div 
              key={index} 
              className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 hover:transform hover:scale-105 border border-orange-100"
            >
              <div className={`w-16 h-16 bg-gradient-to-r ${category.color} rounded-2xl flex items-center justify-center mb-6 shadow-lg`}>
                <category.icon className="w-8 h-8 text-white" />
              </div>
              
              <h3 className="text-xl font-bold text-gray-900 mb-4">{category.title}</h3>
              
              <div className="space-y-3">
                {category.skills.map((skill, skillIndex) => (
                  <div 
                    key={skillIndex}
                    className="flex items-center justify-between p-3 bg-orange-50 rounded-xl hover:bg-orange-100 transition-colors duration-300"
                  >
                    <span className="text-gray-700 font-medium">{skill}</span>
                    <div className="flex space-x-1">
                      {[...Array(5)].map((_, i) => (
                        <div 
                          key={i} 
                          className={`w-2 h-2 rounded-full ${
                            i < 4 ? 'bg-orange-400' : 'bg-gray-200'
                          }`}
                        ></div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
        
        {/* Call to Action */}
        <div className="text-center mt-16">
          <div className="inline-flex items-center gap-4 px-8 py-4 bg-white rounded-full shadow-lg border border-orange-200">
            <span className="text-gray-700">Want to see these skills in action?</span>
            <button className="px-6 py-2 bg-gradient-to-r from-orange-500 to-orange-600 text-white rounded-full font-semibold hover:shadow-lg transition-all duration-300">
              View Projects
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}