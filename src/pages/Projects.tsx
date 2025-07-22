
import { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const Projects = () => {
  const projectYears = [
    {
      year: "RI Year 2024-2025",
      projects: [
        {
          id: 1,
          image: '/lovable-uploads/image1.png',
          title: 'Pawsitivity'
        },
        {
          id: 2,
          image: '/lovable-uploads/image2.png',
          title: 'Mind matters'
        },
        {
          id: 3,
          image: '/lovable-uploads/image3.png',
          title: 'Project Disha felicitation'
        },
        {
          id: 4,
          image: '/lovable-uploads/image4.png',
          title: 'Her stories'
        },
        {
          id: 5,
          image: '/lovable-uploads/image5.png',
          title: 'Yes to access'
        },
        {
          id: 6,
          image: '/lovable-uploads/image6.png',
          title: 'Rota hikes'
        },
        {
          id: 7,
          image: '/lovable-uploads/image7.png',
          title: 'Project sanjeevani'
        },
        {
          id: 7,
          image: '/lovable-uploads/image8.png',
          title: 'Walkathon'
        },
        {
          id: 7,
          image: '/lovable-uploads/image9.png',
          title: 'Tech Mitra'
        },
        {
          id: 7,
          image: '/lovable-uploads/image10.png',
          title: 'Snow Lit'
        },
        {
          id: 7,
          image: '/lovable-uploads/image14.png',
          title: 'Prabodhan 3.0'
        },
        {
          id: 7,
          image: '/lovable-uploads/image12.png',
          title: 'Secret Santa'
        },

        
      ]
    },
    {
      year: "RI Year 2023-2024", 
      projects: [
        {
          id: 7,
          image: '/lovable-uploads/23-24/1.png',
          title: 'Food for thought Phase 5'
        },
        {
          id: 8,
          image: '/lovable-uploads/23-24/2.png',
          title: 'Book distribution drive'
        },
        {
          id: 9,
          image: '/lovable-uploads/23-24/3.png',
          title: 'Food for thought Phase 6'
        },
        {
          id: 10,
          image: '/lovable-uploads/23-24/4.png',
          title: 'Sense of belongings'
        },
        {
          id: 11,
          image: '/lovable-uploads/23-24/5.png',
          title: 'Plant a tree with us'
        },
        {
          id: 12,
          image: '/lovable-uploads/23-24/6.png',
          title: 'Joy of reading'
        },
        {
          id: 13,
          image: '/lovable-uploads/23-24/7.png',  
          title: 'Dengue awareness drive'
        },
        {
          id: 14,
          image: '/lovable-uploads/23-24/8.png',
          title: 'Decyclers'
        },
        {
          id: 15,
          image: '/lovable-uploads/23-24/9.png',
          title: 'Threads of kindness'
        },
        {
          id: 16,
          image: '/lovable-uploads/23-24/10.png',
          title: 'Deepavali'
        },
      ]
    },
    {
      year: " RI Year 2022-2023",
      projects: [
        {
          id: 11,
          image: '/lovable-uploads/22-23/1.png',
          title: 'Rota Fest'
        },
        {
          id: 12,
          image: '/lovable-uploads/22-23/2.png',
          title: 'Educational Support'
        },
        {
          id: 13,
            image: '/lovable-uploads/22-23/3.png',
          title: 'Food for thought'
        },
        {
          id: 14,
          image: '/lovable-uploads/22-23/4.png',
          title: 'Pedal for health'
        },
        {
          id: 15,
          image: '/lovable-uploads/22-23/5.png',
          title: 'Arram flood relief drive'
        },
        {
          id: 16,
          image: '/lovable-uploads/22-23/6.png',
          title: 'Prabodhan'
        },
        {
          id: 17,
          image: '/lovable-uploads/22-23/7.png',
          title: 'Saksham'
        },
        {
          id: 18,
          image: '/lovable-uploads/22-23/8.png',
          title: 'Decyclers'
        },
        {
          id: 19,
          image: '/lovable-uploads/22-23/9.png',
          title: 'Secret Santa'
        },
        {
          id: 20,
          image: '/lovable-uploads/22-23/10.png',
          title: 'Book donation drive'
        }
      ]
    },
    {
      year: "RI Year 2020-2021",
      projects: [
        {
          id: 21,
          image: '/lovable-uploads/20-21/1.png',
          title: 'Lets talk pride'
        },
        {
          id: 22,
          image: '/lovable-uploads/20-21/2.png',
          title: 'Pratyahara'
        },
        {
          id: 23,
          image: '/lovable-uploads/20-21/3.png',
          title: 'Organ donation pledge'
        },
        {
          id: 24,
          image: '/lovable-uploads/20-21/4.png',
          title: 'Organ donation drive'
        },
        {
          id: 25,
          image: '/lovable-uploads/20-21/5.png',
          title: 'Donate a pad'
        },
        {
          id: 26,
          image: '/lovable-uploads/20-21/6.png',
          title: 'Blood donation camp'
        },
        {
          id: 27,
            image: '/lovable-uploads/20-21/7.png',
          title: 'Home agro drive'
        },
      ]
    }
  ];

  const ongoingProjects = [
    {
      id: 1,
      title: '8th Club Anniversary',
      images: [
        'ongoingp//o11.jpeg',
        'ongoingp//o12.jpeg',
        'ongoingp//o13.jpeg',
        'ongoingp//o14.jpeg'
      ],
      description: 'Our 8th Club Anniversary was a day filled with joy, love, and unforgettable memories! We marked this special occasion at a local orphanage, where the Rotaract spirit truly came alive. The celebration featured vibrant music, energetic dance performances, and lots of shared laughter. '
    },

  ];

  return (
    <div className="min-h-screen bg-black text-white font-sans">
      <Header />
      
      <div className="pt-24">
        {/* Hero Section */}
        <section className="py-20 bg-gradient-to-br from-black via-deep-base to-section-bg">
          <div className="container mx-auto px-6 text-center">
            <h1 className="text-5xl md:text-6xl font-serif font-bold mb-6 bg-gradient-to-r from-purple-highlight to-button-active bg-clip-text text-transparent">
              Our Projects
            </h1>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto font-heading">
              Discover the impactful initiatives we've undertaken to serve our community and create lasting positive change.
            </p>
          </div>
        </section>

        {/* Projects Tabs */}
        <section className="py-20 bg-section-bg">
          <div className="container mx-auto px-6">
            <Tabs defaultValue="ongoing" className="w-full">
              <TabsList className="grid w-full grid-cols-2 mb-12 bg-black/50 border border-purple-highlight/20">
                <TabsTrigger 
                  value="ongoing" 
                  className="data-[state=active]:bg-purple-highlight data-[state=active]:text-white font-heading"
                >
                  Projects of 2025-26
                </TabsTrigger>
                <TabsTrigger 
                  value="previous"
                  className="data-[state=active]:bg-purple-highlight data-[state=active]:text-white font-heading"
                >
                  Previous Projects
                </TabsTrigger>
              </TabsList>
              
              <TabsContent value="ongoing">
                <div className="space-y-12">
                  {ongoingProjects.map((project, index) => (
                    <div 
                      key={project.id} 
                      className={`flex flex-col ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-8 items-center`}
                    >
                      {/* Images Section */}
                      <div className="w-full lg:w-1/2">
                        <div className="grid grid-cols-2 gap-4">
                          {project.images.slice(0, 4).map((image, imgIndex) => (
                            <div key={imgIndex} className="relative overflow-hidden rounded-lg group">
                              <img 
                                src={image} 
                                alt={`${project.title} ${imgIndex + 1}`}
                                className="w-full h-72 object-cover group-hover:scale-110 transition-transform duration-500"
                              />
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Content Section */}
                      <div className="w-full lg:w-1/2 space-y-6">
                        <div className="flex items-center gap-4">
                          <Badge className="bg-green-500 text-white font-heading px-4 py-2">Active</Badge>
                        </div>
                        <h3 className="text-3xl font-bold text-purple-highlight font-heading">
                          {project.title}
                        </h3>
                        <p className="text-gray-300 text-lg leading-relaxed font-sans">
                          {project.description}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </TabsContent>
              
              <TabsContent value="previous">
                <div className="space-y-12">
                  {projectYears.map((yearData) => (
                    <div key={yearData.year}>
                      <h3 className="text-3xl font-bold text-center mb-8 text-purple-highlight font-heading">
                        {yearData.year}
                      </h3>
                      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                        {yearData.projects.map((project) => (
                          <div 
                            key={project.id}
                            className="group cursor-pointer"
                          >
                            <div className="relative overflow-hidden rounded-lg border-2 border-transparent hover:border-purple-highlight/50 transition-all duration-300">
                              <img 
                                src={project.image}
                                alt={project.title}
                                className="w-full h-72 object-cover group-hover:scale-110 transition-transform duration-500"
                              />
                              <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                                <h4 className="text-white font-heading font-semibold text-center px-4">
                                  {project.title}
                                </h4>
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </section>
      </div>

      <Footer />
    </div>
  );
};

export default Projects;
