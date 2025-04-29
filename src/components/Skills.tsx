import React, { useEffect, useRef } from 'react';
import { cn } from '@/lib/utils';

interface Skill {
  name: string;
  level: number;
  category: string;
}

const Skills = () => {
  const elementsRef = useRef<(HTMLElement | null)[]>([]);
  
  const skillsData: Skill[] = [
    // Languages
    { name: "C++", level: 85, category: "Languages" },
    { name: "JavaScript", level: 80, category: "Languages" },
    { name: "Java", level: 75, category: "Languages" },
    { name: "PHP", level: 70, category: "Languages" },
    
    // Frameworks
    { name: "HTML", level: 90, category: "Frameworks" },
    { name: "CSS", level: 85, category: "Frameworks" },
    { name: "Bootstrap", level: 80, category: "Frameworks" },
    { name: "React", level: 75, category: "Frameworks" },
    { name: "Node.js", level: 70, category: "Frameworks" },
    
    // Tools/Platforms
    { name: "MySQL", level: 75, category: "Tools/Platforms" },
    { name: "MongoDB", level: 70, category: "Tools/Platforms" },
    
    // Soft Skills
    { name: "Problem-Solving", level: 90, category: "Soft Skills" },
    { name: "Time Management", level: 85, category: "Soft Skills" },
    { name: "Adaptability", level: 90, category: "Soft Skills" },
    { name: "Self-Learning", level: 95, category: "Soft Skills" },
    { name: "Team Player", level: 85, category: "Soft Skills" },
  ];
  
  const categories = Array.from(new Set(skillsData.map(skill => skill.category)));

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-in');
          
          // Animate skill bars if they're skill progress bars
          if (entry.target.classList.contains('skill-progress')) {
            const bars = entry.target.querySelectorAll('.skill-bar');
            bars.forEach((bar: Element, index) => {
              if (bar instanceof HTMLElement) {
                setTimeout(() => {
                  const width = bar.dataset.width || "0%";
                  bar.style.width = width;
                }, index * 100);
              }
            });
          }
        } else {
          // Reset skill bars when element leaves viewport
          if (entry.target.classList.contains('skill-progress')) {
            const bars = entry.target.querySelectorAll('.skill-bar');
            bars.forEach((bar: Element) => {
              if (bar instanceof HTMLElement) {
                bar.style.width = "0%";
              }
            });
          }
        }
      });
    }, { 
      threshold: 0.1,
      rootMargin: '-50px'
    });

    elementsRef.current.forEach((el) => {
      if (el) observer.observe(el);
    });

    return () => {
      elementsRef.current.forEach((el) => {
        if (el) observer.unobserve(el);
      });
    };
  }, []);

  return (
    <section id="skills" className="section-padding">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <div 
            ref={el => elementsRef.current[0] = el}
            className="text-center mb-12 transition-all duration-700 ease-out"
          >
            <h2 className="text-3xl font-bold mb-2">Skills</h2>
            <div className="w-20 h-1 bg-gradient-to-r from-primary to-secondary mx-auto"></div>
          </div>
          
          <div 
            ref={el => elementsRef.current[1] = el}
            className="skill-progress transition-all duration-700 ease-out"
          >
            {categories.map((category, catIndex) => (
              <div key={category} className="mb-10">
                <h3 className="text-xl font-bold mb-6">{category}</h3>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-6">
                  {skillsData
                    .filter(skill => skill.category === category)
                    .map((skill, index) => (
                      <div key={skill.name} className="mb-4">
                        <div className="flex justify-between mb-1">
                          <span className="font-medium">{skill.name}</span>
                          <span className="text-sm text-gray-500">{skill.level}%</span>
                        </div>
                        <div className="w-full h-2 bg-gray-200 rounded-full overflow-hidden">
                          <div 
                            className={cn(
                              "skill-bar h-full transition-all duration-1000 ease-out",
                              skill.category === "Languages" 
                                ? "bg-primary" 
                                : skill.category === "Frameworks"
                                ? "bg-secondary"
                                : skill.category === "Tools/Platforms"
                                ? "bg-gradient-to-r from-primary to-secondary"
                                : "bg-primary"
                            )} 
                            data-width={`${skill.level}%`}
                            style={{ width: "0%" }}
                          ></div>
                        </div>
                      </div>
                    ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
