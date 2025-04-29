import React, { useEffect, useRef } from 'react';

interface Education {
  institution: string;
  degree: string;
  location: string;
  period: string;
  details?: string;
}

const Education = () => {
  const elementsRef = useRef<(HTMLElement | null)[]>([]);
  
  const educationData: Education[] = [
    {
      institution: "Lovely Professional University",
      degree: "Bachelor of Technology - Computer Science and Engineering",
      location: "Punjab, India",
      period: "Since Aug' 22",
      details: "CGPA: 7.23"
    },
    {
      institution: "Shankar Narayan College",
      degree: "Intermediate",
      location: "Mumbai, Maharashtra",
      period: "Aug' 18 - Mar' 20"
    },
    {
      institution: "St. Appollonia's Convent English School",
      degree: "Matriculation",
      location: "Mumbai, Maharashtra",
      period: "Apr' 17 - Mar' 18"
    }
  ];
  
  const certificatesData = [
    { 
      name: "Cloud Computing", 
      issuer: "NPTEL", 
      date: "Oct' 24",
      image: "/certificates/NPTEL.jpg",
      verifyLink: "https://archive.nptel.ac.in/content/noc/NOC24/SEM2/Ecertificates/106/noc24-cs118/Course/NPTEL24CS118S167020168404431689.pdf"
    },
    { 
      name: "Building Web application in PHP", 
      issuer: "Coursera", 
      date: "Nov' 24",
      image: "/certificates/PHP.jpg",
      verifyLink: "https://www.coursera.org/account/accomplishments/verify/STA3JXCYA414"
    },
    { 
      name: "Server-side JavaScript with Node.JS", 
      issuer: "Coursera", 
      date: "Apr' 24",
      image: "/certificates/nodejs.jpg",
      verifyLink: "https://www.coursera.org/account/accomplishments/verify/22THA6LTP5Z5"
    },
    { 
      name: "Programming in C++: A Hands-on Introduction", 
      issuer: "Coursera", 
      date: "Feb' 24",
      image: "/certificates/c++.jpg",
      verifyLink: "https://www.coursera.org/account/accomplishments/specialization/4ZS99ZD7BYBL"
    },
    { 
      name: "The Bits and Bytes of Computer Networking", 
      issuer: "Coursera", 
      date: "Jan' 24",
      image: "/certificates/Networking.jpg",
      verifyLink: "https://www.coursera.org/account/accomplishments/verify/6MNFMRPF5AY4"
    },
    
  ];

  const extraCurricularData = [
    {
      title: "Inter-Hostel Kho-Kho Competition",
      date: "Feb' 25",
      image: "/activities/Kho-kho.jpg",
      description: "Competed in Inter-Hostel Kho-Kho Competition"
    },
    {
      title: "Smart India Hackathon",
      date: "Sep' 24",
      image: "/activities/Hackathon.jpg",
      description: "Contributed to SIH by developing innovative solutions for real-world challenges"
    },
    {
      title: "WWF India Campaign",
      date: "Jul' 23",
      image: "/activities/WWH.png",
      description: "Collaborated with WWF India in \"Adopt a Plant\" campaign"
    }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('appear');
        }
      });
    }, { threshold: 0.1 });

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
    <section id="education" className="section-padding">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <div 
            ref={el => elementsRef.current[0] = el}
            className="text-center mb-12 animate-fade-in"
          >
            <h2 className="text-3xl font-bold mb-2">Education & Certificates</h2>
            <div className="w-20 h-1 bg-gradient-to-r from-primary to-secondary mx-auto"></div>
          </div>
          
          <div className="space-y-16">
            {/* Certificates */}
            <div
              ref={el => elementsRef.current[1] = el}
              className="animate-fade-in"
            >
              <h3 className="text-xl font-bold mb-6 flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-2 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                Certificates
              </h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {certificatesData.map((cert, index) => (
                  <div 
                    key={index}
                    className="bg-white p-4 border border-gray-100 rounded-lg shadow-sm hover:shadow-md transition-shadow"
                  >
                    <div className="flex flex-col">
                      <div className="relative w-full aspect-[4/3] mx-auto overflow-hidden rounded-lg mb-4 bg-gray-100">
                        <img 
                          src={cert.image} 
                          alt={cert.name}
                          className="w-full h-full object-contain transition-transform duration-300 hover:scale-110"
                        />
                      </div>
                      <div>
                        <div className="flex justify-between items-start mb-2">
                          <div>
                            <h4 className="font-semibold text-gray-800">{cert.name}</h4>
                            <p className="text-sm text-gray-500">{cert.issuer}</p>
                          </div>
                          <span className="text-xs font-medium text-primary bg-primary/10 px-2 py-1 rounded">
                            {cert.date}
                          </span>
                        </div>
                        <div>
                          <a 
                            href={cert.verifyLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-sm text-primary hover:underline inline-block mt-2 px-3 py-1 bg-primary/10 rounded-md hover:bg-primary/20 transition-colors"
                          >
                            View Certificate
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Extra-Curricular Activities */}
            <div
              ref={el => elementsRef.current[2] = el}
              className="animate-fade-in"
            >
              <h3 className="text-xl font-bold mb-4 flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-2 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
                Extra-Curricular Activities
              </h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {extraCurricularData.map((activity, index) => (
                  <div 
                    key={index}
                    className="bg-white p-4 border border-gray-100 rounded-lg shadow-sm hover:shadow-md transition-shadow"
                  >
                    <div className="flex flex-col">
                      <div className="relative w-full aspect-square overflow-hidden rounded-lg mb-4">
                        <img 
                          src={activity.image} 
                          alt={activity.title}
                          className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
                        />
                      </div>
                      <div>
                        <div className="flex justify-between items-start mb-2">
                          <div>
                            <h4 className="font-semibold text-gray-800">{activity.title}</h4>
                            <p className="text-sm text-gray-500">{activity.description}</p>
                          </div>
                          <span className="text-xs font-medium text-primary bg-primary/10 px-2 py-1 rounded">
                            {activity.date}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            {/* Education Timeline */}
            <div 
              ref={el => elementsRef.current[3] = el}
              className="animate-fade-in"
            >
              <h3 className="text-xl font-bold mb-6 flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-2 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
                </svg>
                Education
              </h3>
              
              <div className="relative border-l-2 border-gray-200 pl-6 space-y-10">
                {educationData.map((edu, index) => (
                  <div key={index} className="relative">
                    <div className="absolute -left-[25px] mt-1.5 h-4 w-4 rounded-full border-2 border-primary bg-white"></div>
                    <div className="mb-1 text-sm font-medium text-gray-500">{edu.period}</div>
                    <h4 className="text-lg font-semibold">{edu.institution}</h4>
                    <p className="text-gray-700">{edu.degree}</p>
                    <p className="text-gray-500 text-sm">{edu.location}</p>
                    {edu.details && <p className="text-primary text-sm mt-1">{edu.details}</p>}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
