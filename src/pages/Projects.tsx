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
    // --- July Events ---
    {
      id: 1,
      title: 'Charter Day Celebration',
      type: 'Standalone',
      images: [
        '/lovable-uploads/july-events/CharterDay_1.png', // Placeholder for Image 1 from the document
        '/lovable-uploads/july-events/CharterDay_2.png'  // Placeholder for Image 2 from the document
      ],
      description: 'The Rotaract Club of BMS Yelahanka celebrated its 9th Charter Day at Miracle Manna Children’s Home. The event included fun games, singing with the children, distributing ration supplies, and making DIY cards for Rotarians, strengthening bonds through service and fellowship.'
    },
    {
      id: 2,
      title: 'Breast Cancer Screening (Health Camp by RBY)',
      type: 'Collaboration',
      images: [
        '/lovable-uploads/july-events/BreastCancerScreening_1.png', // Placeholder for Image 1 from the document
        '/lovable-uploads/july-events/BreastCancerScreening_2.png'  // Placeholder for Image 2 from the document
      ],
      description: 'A medical drive focused on **breast cancer screening** for awareness and early detection for women around Yelahanka. This is a long-term initiative to conduct at least one health camp monthly, expanding to include ECG and other essential health services.'
    },
    // --- August Events ---
    {
      id: 3,
      title: '9th Installation of Office Bearers (AROHA)',
      type: 'Standalone',
      images: [
        '/lovable-uploads/august-events/Installation_1.png', // Placeholder for Image 1 from the document
        '/lovable-uploads/august-events/Installation_2.png'  // Placeholder for Image 2 from the document
      ],
      description: 'The club’s 9th Installation, "AROHA," formally installed Rtr. Saanvi M S as President and her board. The event, graced by dignitaries, focused on **sustainability** by gifting saplings and crochet keychains, concluding with networking and a fellowship lunch.'
    },
    {
      id: 4,
      title: 'Plantation Drive',
      type: 'Collaboration',
      images: [
        '/lovable-uploads/august-events/PlantationDrive_1.png', // Placeholder for Image 1 from the document
        '/lovable-uploads/august-events/PlantationDrive_2.png'  // Placeholder for Image 2 from the document
      ],
      description: 'A large-scale plantation drive at J B Kaval Tree Park in collaboration with Rotary, Lions Club, Forest Dept. of Karnataka, and IMA (Yelahanka). **Over 300 saplings were planted**, fostering environmental awareness and reinforcing collective responsibility towards sustainability.'
    },
    {
      id: 5,
      title: 'Pragathi Prothsaha 3.0 – 4th School Kit Distribution',
      type: 'Collaboration',
      images: [
        '/lovable-uploads/august-events/SchoolKitDistribution_1.png', // Placeholder for Image 1 from the document
        '/lovable-uploads/august-events/SchoolKitDistribution_2.png'  // Placeholder for Image 2 from the document
      ],
      description: 'Part of an educational outreach, **215 school kits were distributed** to students at Netaji Higher Primary & High School. RAC BMSY contributed 15 kits in collaboration with RAC Vidyaranyapura, aiming to motivate students with essential academic resources.'
    },
    {
      id: 6,
      title: 'Pick Your Pride – Flag Disposal & Awareness Drive',
      type: 'Collaboration',
      images: [
        '/lovable-uploads/august-events/FlagDisposal_1.png', // Placeholder for Image 1 from the document
        // Placeholder for Image 2 from the document (Only one pic was available, second is placeholder)
      ],
      description: 'An initiative in collaboration with RAC United Ranchi (RID 3250) and other clubs to promote respectful National Flag disposal as per the Flag Code of India. Members collected discarded flags and disposed of them through dignified burning/burying, fostering **unity, patriotism, and awareness**.'
    },
    {
      id: 7,
      title: 'Rang-E-Azadi – Independence Day Art Competition',
      type: 'Standalone',
      images: [
        '/lovable-uploads/august-events/ArtCompetition_1.png', // Placeholder for Image 1 from the document
        '/lovable-uploads/august-events/ArtCompetition_2.png'  // Placeholder for Image 2 from the document
      ],
      description: 'An art competition conducted at Sai Shankara Vidhya Shala for Classes 6–10 on the themes "India Through My Eyes" and "My Dream India". The event blended **patriotism with creativity**, providing a platform for self-expression.'
    },
    {
      id: 8,
      title: 'Ice Breaking Session',
      type: 'Standalone',
      images: [
        '/lovable-uploads/august-events/IceBreaking_1.png', // Placeholder for Image 1 from the document
        '/lovable-uploads/august-events/IceBreaking_2.png'  // Placeholder for Image 2 from the document
      ],
      description: 'An online fellowship session for the Core Team and BoDs, organized by the Club Service Avenue. Games like Two Truths & a Lie and Guess the Song fostered **comfort, familiarity, and smoother collaboration** among the leadership team.'
    },
    {
      id: 9,
      title: '8th Eco-Friendly Clay Ganesha Making Workshop',
      type: 'Collaboration',
      images: [
        '/lovable-uploads/august-events/GaneshaWorkshop_1.png', // Placeholder for Image 1 from the document
        '/lovable-uploads/august-events/GaneshaWorkshop_2.png'  // Placeholder for Image 2 from the document
      ],
      description: 'A hands-on workshop in collaboration with RAC Vidyaranyapura, where 14 RAC BMSY members learned to craft idols using eco-friendly clay, promoting **responsible and eco-conscious festive celebrations**.'
    },
    {
      id: 10,
      title: 'Wanderlust Wanderers',
      type: 'Collaboration',
      images: [
        '/lovable-uploads/august-events/WanderlustWanderers_1.png', // Placeholder for Image 1 from the document
        '/lovable-uploads/august-events/WanderlustWanderers_2.png'  // Placeholder for Image 2 from the document
      ],
      description: 'A virtual cultural exchange event hosted with 18 clubs and over 100 participants. Members showcased travel destinations to highlight **cultural diversity, fellowship beyond borders, and inter-club collaboration**.'
    },
    {
      id: 11,
      title: 'World Suicide Prevention Day Seminar',
      type: 'Standalone',
      date: '11th September 2025',
      images: ['/ongoingp/s1.png', '/ongoingp/s2.png'],
      description: 'A seminar led by college counselor Ms. Chethana Srinivas to raise awareness about mental health and break stigmas. Over 100 participants engaged in open dialogue and learned practical ways to support themselves and others. [cite: 33]'
    },
    {
      id: 12,
      title: 'Career Catalyst 2.0',
      type: 'Standalone',
      date: '12th September 2025',
      images: ['/ongoingp/s3.png', '/ongoingp/s4.png'],
      description: 'BMSIT alumnus Shashwath Aiyappa shared insights on leveraging LinkedIn effectively for networking and career growth. The session offered nearly 100 participants valuable tips on building a professional presence. [cite: 33]'
    },
    {
      id: 13,
      title: 'Rota Week Day 3 – Jamming Session',
      type: 'Standalone',
      date: '24th September 2025',
      images: ['/ongoingp/s9.png', '/ongoingp/s10.png'],
      description: 'A fun-filled fellowship activity held in Kuteera with the Rushang music club. Students enjoyed a interactive lunch-break session with song requests gathered via Google Forms, fostering peer bonding through music. [cite: 33]'
    },
    {
      id: 14,
      title: 'Rota Week: Book Donation Drive',
      type: 'Partnership',
      date: '23rd - 26th September 2025',
      images: ['/ongoingp/s5.png', '/ongoingp/s6.png'],
      description: 'A service initiative spread across two days that successfully collected around 750 books with contributions from 191 participants, reinforcing the club’s commitment to education. [cite: 33]'
    },
    {
      id: 15,
      title: 'Unheard Voices: Nepal’s Reality',
      type: 'Host Club',
      date: '29th September 2025',
      images: ['/ongoingp/s7.png', '/ongoingp/s8.png'], // Incremental naming continued
      description: 'An international fellowship event providing a platform for friends from Nepal to share their country’s true situation, fostering empathy and cross-border understanding among 35+ participants. [cite: 33]'
    },

    // --- October 2025 Events ---
    {
      id: 16,
      title: 'Green Circle Tree Geo-tagging',
      type: 'Collaboration',
      date: '11th October 2025',
      images: ['/ongoingp/o1.png', '/ongoingp/o2.png'],
      description: 'Collaborated with Green Circle to map and record trees using mobile applications. 37 student volunteers integrated digital innovation with environmental conservation at People’s Trust. [cite: 22]'
    },
    {
      id: 17,
      title: 'STEMpire – AI & Digital Literacy',
      type: 'Collaboration',
      date: '14th October 2025',
      images: ['/ongoingp/o3.png', '/ongoingp/o4.png'],
      description: 'A one-day outreach program for over 120 school students, introducing AI fundamentals, Python, and web development through hands-on learning sessions and mentor guidance. [cite: 22]'
    },
    {
      id: 18,
      title: 'Belaku: Diwali Celebration',
      type: 'Standalone',
      date: '17th October 2025',
      images: ['/ongoingp/o5.png', '/ongoingp/o6.png'],
      description: 'A heartwarming initiative at Swasthi Foundation to celebrate Diwali with specially abled children through diya painting, games, and sweet distribution, embodying "Service Above Self." [cite: 22]'
    },
    {
      id: 19,
      title: 'Har Dil Mein Deep',
      type: 'Standalone',
      date: '26th October 2025',
      images: ['/ongoingp/o7.png', '/ongoingp/o8.png'],
      description: 'A village-wide Diwali celebration featuring diya painting for children, rangoli competitions, and festive games to spread joy and togetherness in the club’s adopted village. [cite: 22]'
    },
    {
      id: 20,
      title: 'Vigilance Awareness: Street Play',
      type: 'Collaboration',
      date: '29th October 2025',
      images: ['/ongoingp/o9.png', '/ongoingp/o10.png'],
      description: 'Performed "Shalanka – Satya Jayate" at Majestic Bus Stand and Railway Station to raise awareness about integrity and anti-corruption measures under the PIDPI Act. [cite: 22]'
    },
    // --- November 2025 Events ---
    // --- November 2025 Events ---
    {
      id: 21,
      title: 'Food For Thought',
      type: 'Standalone',
      date: '13th, 14th, 15th & 17th November 2025',
      images: ['/ongoingp/n1.png', '/ongoingp/n2.png'],
      description: 'A four-day fundraising initiative featuring food, games, crafts, and e-sports stalls managed by members and BoDs. The event showcased strong teamwork, creativity, and coordination while contributing to a community service cause.'
    },
    {
      id: 22,
      title: 'Cooking Without Smoke',
      type: 'Members-Only',
      date: '29th November 2025',
      images: ['/ongoingp/n3.png'],
      description: 'A fireless cooking competition with 10 teams preparing innovative dishes. Judged on taste, presentation, and creativity, the event promoted sustainability, teamwork, and bonding with a ₹5,000 prize pool.'
    },
    {
      id: 23,
      title: 'Blood Donation Drive',
      type: 'Collaboration',
      date: '21st November 2025',
      images: ['/ongoingp/n4.png', '/ongoingp/n5.png'],
      description: 'A large-scale blood donation drive conducted with NCC, NSS, and Lions Clubs, collecting 408 units of blood. Volunteers efficiently managed donor registration and coordination, showcasing strong humanitarian impact.'
    },
    {
      id: 24,
      title: 'Dreams of Hopes – Career Guidance Workshop',
      type: 'Community Outreach',
      date: '26th November 2025',
      images: ['/ongoingp/n6.png', '/ongoingp/n7.png'],
      description: 'A career guidance session for Classes 8–10 students covering academic streams, exams, and career paths. Included an aptitude test and interactive mentoring to boost clarity and confidence.'
    },
    {
      id: 25,
      title: 'Padho Bharat – Book Donation Drive',
      type: 'Collaboration',
      date: '14th November 2025',
      images: ['/ongoingp/n8.png', '/ongoingp/n9.png'],
      description: 'A large-scale book drive collecting 800 books at BMSIT&M. Donated to support a school library, promoting literacy, educational access, and community engagement.'
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
                  {ongoingProjects.map((project, index) => {
                    const hasImages = project.images && project.images.length > 0;
                    return (
                      <div
                        key={project.id}
                        className={`flex flex-col ${hasImages
                          ? index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'
                          : ''
                          } gap-8 items-center`}
                      >
                        {/* Images Section */}
                        {hasImages && (
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
                        )}

                        {/* Content Section */}
                        <div className={`w-full ${hasImages ? 'lg:w-1/2' : 'max-w-3xl mx-auto'} space-y-6`}>
                          <div className="flex items-center gap-3 flex-wrap">
                            <Badge className="bg-purple-highlight text-white font-heading px-4 py-2">{project.type}</Badge>
                            {project.date && (
                              <span className="text-sm text-gray-400 font-heading border border-gray-700 rounded-full px-3 py-1">
                                {project.date}
                              </span>
                            )}
                          </div>
                          <h3 className="text-3xl font-bold text-purple-highlight font-heading">
                            {project.title}
                          </h3>
                          <p className="text-gray-300 text-lg leading-relaxed font-sans">
                            {project.description}
                          </p>
                        </div>
                      </div>
                    );
                  })}
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