import { useEffect, useRef } from 'react';

interface Project {
  title: string;
  description: string[];
  technologies: string[];
  date: string;
  image: string;
}

const Projects = () => {
  const elementsRef = useRef<(HTMLElement | null)[]>([]);
  const projectRefs = useRef<(HTMLElement | null)[]>([]);
  
  const projects: Project[] = [
    {
      title: "Alumni Portal",
      description: [
        "Administered user profiles and networking features including messaging, while enabled scholarship access for 80+ students and real-time updates to boost engagement.",
        "Connected users through intuitive social and academic interaction tools, and designed a scalable job portal interface for future integration.",
        "Implemented an efficient admin panel reducing manual effort by 40%, and optimized database performance to improve data retrieval speed by 30%."
      ],
      technologies: ["HTML", "CSS", "JavaScript", "Bootstrap", "MySQL", "PHP"],
      date: "Nov' 24",
      image: "/projects/Alumni.jpeg"
    },
    {
      title: "Medico Website",
      description: [
        "Built a secure back-end system handling 1000+ medical records with strong authentication, authorization, and encrypted data management.",
        "Designed and developed secure user authentication workflows, including login, registration, and access control using best practices.",
        "Integrated MongoDB for scalable data storage and optimized retrieval with < 200ms query response times for efficient performance."
      ],
      technologies: ["Node.js", "Express.js", "MongoDB"],
      date: "Mar' 24",
      image: "/projects/Medico.jpeg"
    },
    {
      title: "Boggle Game",
      description: [
        "Developed a Boggle Game in Java, improved problem-solving and analytical skills through hands-on coding and regular practice.",
        "Applied advanced algorithms with complexity analysis, exhibited strong data structure skills for efficient, high-performance problem-solving."
      ],
      technologies: ["Java", "Data Structures", "Algorithms"],
      date: "Jun' 24 - Jul' 24",
      image: "/projects/Boggle.jpeg"
    }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('appear');
        } else {
          entry.target.classList.remove('appear');
        }
      });
    }, { 
      threshold: 0.1,
      rootMargin: '50px'
    });

    // Observe all project elements
    projectRefs.current.forEach((el) => {
      if (el) {
        observer.observe(el);
      }
    });

    return () => {
      projectRefs.current.forEach((el) => {
        if (el) {
          observer.unobserve(el);
        }
      });
    };
  }, []);

  return (
    <section id="projects" className="section-padding bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div 
            ref={el => elementsRef.current[0] = el}
            className="text-center mb-12 animate-fade-in"
          >
            <h2 className="text-3xl font-bold mb-2">Projects</h2>
            <div className="w-20 h-1 bg-gradient-to-r from-primary to-secondary mx-auto"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div 
                key={project.title}
                ref={el => projectRefs.current[index] = el}
                className={`project-card ${
                  index % 3 === 0 ? 'slide-from-left' : 
                  index % 3 === 1 ? 'slide-from-bottom' : 
                  'slide-from-right'
                }`}
              >
                <div className="relative h-48 overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
                  />
                </div>
                <div className="p-6">
                  <div className="flex justify-between items-center mb-4">
                    <h3 className="text-xl font-bold">{project.title}</h3>
                    <span className="text-xs font-medium text-gray-500 bg-gray-100 px-2 py-1 rounded">
                      {project.date}
                    </span>
                  </div>
                  
                  <div className="space-y-3 mb-6">
                    {project.description.map((paragraph, pIndex) => (
                      <p key={pIndex} className="text-gray-600 text-sm">
                        {paragraph}
                      </p>
                    ))}
                  </div>
                  
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map(tech => (
                      <span 
                        key={tech}
                        className="text-xs font-medium bg-primary/10 text-primary px-3 py-1 rounded-full"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
