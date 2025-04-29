import { cn } from '@/lib/utils';
import { useEffect, useRef, useState } from 'react';
import ParticleBackground from './ParticleBackground';

const Hero = () => {
  const elementsRef = useRef<(HTMLElement | null)[]>([]);
  const [name, setName] = useState('');
  const fullName = "Muskan Darji";
  const sectionRef = useRef<HTMLElement>(null);
  const animationTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          // Add reveal class to make elements visible
          entry.target.classList.add('reveal');
          
          // Clear any existing animation timeout
          if (animationTimeoutRef.current) {
            clearTimeout(animationTimeoutRef.current);
          }
          
          // Reset and start name animation
          setName('');
          let currentIndex = 0;
          const interval = setInterval(() => {
            if (currentIndex <= fullName.length) {
              setName(fullName.slice(0, currentIndex));
              currentIndex++;
            } else {
              clearInterval(interval);
            }
          }, 150);
          
          // Store the timeout reference
          animationTimeoutRef.current = setTimeout(() => {
            setName(fullName);
          }, fullName.length * 150 + 100);
        } else {
          // Remove reveal class when out of view
          entry.target.classList.remove('reveal');
        }
      });
    }, { threshold: 0.1 });

    elementsRef.current.forEach((el) => {
      if (el) observer.observe(el);
    });

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      elementsRef.current.forEach((el) => {
        if (el) observer.unobserve(el);
      });
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
      // Clear any existing animation timeout on cleanup
      if (animationTimeoutRef.current) {
        clearTimeout(animationTimeoutRef.current);
      }
    };
  }, []);

  return (
    <section ref={sectionRef} id="home" className="relative min-h-screen flex items-center overflow-hidden">
      <ParticleBackground />
      
      <div className="container mx-auto px-4 py-20 z-10">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row items-center gap-16">
            <div className="md:w-1/2 text-center md:text-left">
              <h2 
                ref={el => elementsRef.current[0] = el}
                className="text-lg md:text-xl text-primary font-medium mb-3 opacity-0 translate-y-4 transition-all duration-1000 ease-out"
              >
                Welcome, I am
              </h2>
              
              <h1 
                ref={el => elementsRef.current[1] = el}
                className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary opacity-0 translate-y-4 transition-all duration-1000 ease-out"
              >
                {name}
              </h1>
              
              <div 
                ref={el => elementsRef.current[2] = el}
                className="relative w-fit mx-auto md:mx-0 mb-8 opacity-0 translate-y-4 transition-all duration-1000 ease-out"
              >
                <h2 className="text-xl md:text-2xl lg:text-3xl font-medium text-gray-800">
                  Full Stack Developer
                </h2>
                <div className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-primary to-secondary transform origin-left scale-x-0 transition-transform duration-500 group-hover:scale-x-100"></div>
              </div>
              
              <p 
                ref={el => elementsRef.current[3] = el}
                className="text-gray-600 text-lg mb-10 max-w-xl mx-auto md:mx-0 leading-relaxed opacity-0 translate-y-4 transition-all duration-1000 ease-out"
              >
                Passionate computer science engineer skilled in Java, JavaScript, and web development.
                Creating innovative solutions with clean, maintainable code.
              </p>
              
              <div 
                ref={el => elementsRef.current[4] = el}
                className="flex flex-wrap gap-6 justify-center md:justify-start opacity-0 translate-y-4 transition-all duration-1000 ease-out"
              >
                <a
                  href="/MuskanDarji CV.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={cn(
                    "px-8 py-3.5 bg-gradient-to-r from-primary to-secondary text-white rounded-lg",
                    "transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-primary/20",
                    "font-medium text-lg"
                  )}
                >
                  View Resume
                </a>
                <a
                  href="/MuskanDarji CV.pdf"
                  download
                  className={cn(
                    "px-8 py-3.5 border-2 border-primary text-primary rounded-lg",
                    "transition-all duration-300 hover:bg-primary/5 hover:scale-105",
                    "font-medium text-lg"
                  )}
                >
                  Download Resume
                </a>
              </div>
            </div>

            <div 
              ref={el => elementsRef.current[5] = el}
              className="md:w-1/2 relative opacity-0 translate-y-4 transition-all duration-1000 ease-out"
            >
              <div className="relative">
                <div className="w-full aspect-square max-w-md mx-auto rounded-full bg-gradient-to-r p-1.5 from-primary to-secondary">
                  <div className="h-full w-full rounded-full overflow-hidden bg-gray-200 flex items-center justify-center">
                    <img 
                      src="/MuskanPic.jpg" 
                      alt="Muskan Darji" 
                      className="w-full h-full object-cover transform transition-transform duration-700 hover:scale-110"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
