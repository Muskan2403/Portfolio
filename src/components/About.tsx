import { useEffect, useRef } from 'react';

const About = () => {
  const elementsRef = useRef<(HTMLElement | null)[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          // Add reveal class when section comes into view
          entry.target.classList.add('reveal');
          
          // Reset and animate child elements
          const children = entry.target.querySelectorAll('.animate-child');
          children.forEach((child) => {
            child.classList.remove('reveal');
          });
          
          // Stagger the animations with delays
          children.forEach((child, index) => {
            setTimeout(() => {
              child.classList.add('reveal');
            }, index * 200);
          });
        } else {
          // Remove reveal class when section is out of view
          entry.target.classList.remove('reveal');
          
          // Reset child elements
          const children = entry.target.querySelectorAll('.animate-child');
          children.forEach((child) => {
            child.classList.remove('reveal');
          });
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
    <section id="about" className="py-20 bg-gray-100 w-full">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <div 
            ref={el => elementsRef.current[0] = el}
            className="text-center mb-12 opacity-0 translate-y-8 transition-all duration-1000 ease-out"
          >
            <h2 className="text-4xl font-bold mb-2 transform transition-all duration-1000 hover:scale-105">About <span style={{ 
              background: 'linear-gradient(to right, hsl(262, 31%, 54%), hsl(199, 91%, 53%))',
              WebkitBackgroundClip: 'text',
              backgroundClip: 'text',
              color: 'transparent',
              fontWeight: 'bold',
              display: 'inline-block'
            }}>Me</span></h2>
            <div className="w-20 h-1 bg-gradient-to-r from-primary to-secondary mx-auto transform transition-all duration-1000 hover:scale-110"></div>
          </div>
          
          <div 
            ref={el => elementsRef.current[1] = el}
            className="max-w-3xl mx-auto opacity-0 translate-y-8 transition-all duration-1000 ease-out"
          >
            <h3 className="text-2xl font-bold mb-4 animate-child opacity-0 translate-y-4 transition-all duration-1000 ease-out">
              Hi, I'm <span style={{ 
                background: 'linear-gradient(to right, hsl(262, 31%, 54%), hsl(199, 91%, 53%))',
                WebkitBackgroundClip: 'text',
                backgroundClip: 'text',
                color: 'transparent',
                fontWeight: 'bold',
                display: 'inline-block'
              }}>Muskan Darji</span>
            </h3>
            <div className="space-y-4">
              <p className="text-gray-700 animate-child opacity-0 translate-y-4 transition-all duration-1000 ease-out">
                I am a Computer Science Engineering student at Lovely Professional University with a passion for building web applications and solving complex problems.
              </p>
              <p className="text-gray-700 animate-child opacity-0 translate-y-4 transition-all duration-1000 ease-out">
                With expertise in JavaScript, Java, and PHP, I create efficient applications with clean architecture and maintainable code. My recent training in Data Structures & Algorithms has further strengthened my problem-solving abilities.
              </p>
              <p className="text-gray-700 animate-child opacity-0 translate-y-4 transition-all duration-1000 ease-out">
                When I'm not coding, I enjoy participating in hackathons like SIH and contributing to environmental initiatives like the "Adopt a Plant" campaign with WWF India.
              </p>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 text-sm mt-8">
              <a 
                href="mailto:muskandarji24@gmail.com" 
                className="animate-child opacity-0 translate-y-4 transition-all duration-1000 ease-out flex flex-col items-center p-4 bg-white rounded-lg shadow-sm hover:shadow-md hover:scale-105 transform"
              >
                <svg 
                  xmlns="http://www.w3.org/2000/svg" 
                  className="h-8 w-8 text-primary mb-2 transform transition-transform duration-300 hover:scale-110" 
                  fill="none" 
                  viewBox="0 0 24 24" 
                  stroke="currentColor"
                >
                  <path 
                    strokeLinecap="round" 
                    strokeLinejoin="round" 
                    strokeWidth={2} 
                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" 
                  />
                </svg>
                <span className="text-xs text-gray-600">Email</span>
              </a>
              <a 
                href="tel:+919372851278" 
                className="animate-child opacity-0 translate-y-4 transition-all duration-1000 ease-out flex flex-col items-center p-4 bg-white rounded-lg shadow-sm hover:shadow-md hover:scale-105 transform"
              >
                <svg 
                  xmlns="http://www.w3.org/2000/svg" 
                  className="h-8 w-8 text-primary mb-2 transform transition-transform duration-300 hover:scale-110" 
                  fill="none" 
                  viewBox="0 0 24 24" 
                  stroke="currentColor"
                >
                  <path 
                    strokeLinecap="round" 
                    strokeLinejoin="round" 
                    strokeWidth={2} 
                    d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" 
                  />
                </svg>
                <span className="text-xs text-gray-600">Phone</span>
              </a>
              <a 
                href="https://www.linkedin.com/in/muskandarji30/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="animate-child opacity-0 translate-y-4 transition-all duration-1000 ease-out flex flex-col items-center p-4 bg-white rounded-lg shadow-sm hover:shadow-md hover:scale-105 transform"
              >
                <svg 
                  xmlns="http://www.w3.org/2000/svg" 
                  className="h-8 w-8 text-primary mb-2 transform transition-transform duration-300 hover:scale-110" 
                  fill="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                </svg>
                <span className="text-xs text-gray-600">LinkedIn</span>
              </a>
              <a 
                href="https://github.com/Muskan2403" 
                target="_blank" 
                rel="noopener noreferrer"
                className="animate-child opacity-0 translate-y-4 transition-all duration-1000 ease-out flex flex-col items-center p-4 bg-white rounded-lg shadow-sm hover:shadow-md hover:scale-105 transform"
              >
                <svg 
                  xmlns="http://www.w3.org/2000/svg" 
                  className="h-8 w-8 text-primary mb-2 transform transition-transform duration-300 hover:scale-110" 
                  fill="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                </svg>
                <span className="text-xs text-gray-600">GitHub</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
