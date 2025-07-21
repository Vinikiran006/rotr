import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { ArrowRight, Users, Heart, Lightbulb, Globe, BookOpen, Stethoscope, Droplet, Coins, Baby, Handshake, Target, Award, Sparkles } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import PolaroidBanner from '@/components/PolaroidBanner';
import StatsSection from '@/components/StatsSection';

const Index = () => {
  const [currentText, setCurrentText] = useState(0);
  const heroTexts = [
    "Service Above Self",
    "Youth Leading Change", 
    "Community First",
    "Building Tomorrow"
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentText((prev) => (prev + 1) % heroTexts.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  const initiatives = [
    {
      icon: <Handshake className="w-8 h-8" />,
      title: "Peacebuilding and Conflict Prevention",
      description: "Promoting peace and conflict resolution through dialogue, education, and community initiatives.",
    },
    {
      icon: <Stethoscope className="w-8 h-8" />,
      title: "Disease Prevention and Treatment",
      description: "Improving health outcomes through disease prevention, treatment, and health education.",
    },
    {
      icon: <Droplet className="w-8 h-8" />,
      title: "Water, Sanitation, and Hygiene",
      description: "Ensuring access to clean water, sanitation, and hygiene for healthier communities.",
    },
    {
      icon: <Baby className="w-8 h-8" />,
      title: "Maternal and Child Health",
      description: "Supporting mothers and children to reduce mortality and improve health and nutrition.",
    },
    {
      icon: <BookOpen className="w-8 h-8" />,
      title: "Basic Education and Literacy",
      description: "Promoting literacy and education for children and adults to build brighter futures.",
    },
    {
      icon: <Coins className="w-8 h-8" />,
      title: "Community Economic Development",
      description: "Strengthening local economies and creating opportunities for sustainable growth.",
    },
    {
      icon: <Globe className="w-8 h-8" />,
      title: "Environment",
      description: "Protecting the environment and promoting sustainable practices for a greener planet.",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-deep-base via-section-bg to-deep-base text-white font-poppins overflow-x-hidden">
      <Header />
      
      {/* Hero Section */}
      <section className="relative min-h-screen flex flex-col justify-center overflow-hidden pt-20">
        <div className="absolute inset-0 bg-gradient-to-br from-dark-purple/20 via-deep-base to-purple-accent/20"></div>
        <div className="absolute inset-0">
          <div className="absolute top-20 left-20 w-72 h-72 bg-purple-highlight/10 rounded-full blur-3xl animate-glow"></div>
          <div className="absolute bottom-20 right-20 w-96 h-96 bg-bright-purple/10 rounded-full blur-3xl animate-glow delay-1000"></div>
        </div>
        
        <div className="container mx-auto px-6 text-center relative z-10 max-w-5xl flex-1 flex flex-col justify-center">
          <div className="space-y-8 animate-fade-in">
            {/* Logo Section */}
            <div className="flex justify-center items-center mb-8 transform hover:scale-105 transition-all duration-700">
              <img 
                src="/lovable-uploads/5d412404-e118-4763-a5fb-69304897cc03.png" 
                alt="Rotaract Club Logos" 
                className="h-16 md:h-20 w-auto animate-fade-in delay-300"
              />
            </div>
            
            <div className="space-y-8">              
              <div className="h-16 flex items-center justify-center">
                <p className="text-2xl md:text-4xl font-bold text-transparent bg-gradient-to-r from-[#a020f0] via-[#ff5e62] to-[#ffcc29] bg-clip-text animate-glow">
                  {heroTexts[currentText]}
                </p>
              </div>
              
              <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto font-light leading-relaxed opacity-0 animate-fade-in delay-500">
                Empowering youth to create positive change in our community through service, leadership, and fellowship.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-8 opacity-0 animate-fade-in delay-700">
              <Link to="/join">
                <Button 
                  size="lg"
                  className="bg-gradient-to-r from-[#a020f0] via-[#ff5e62] to-[#ffcc29] hover:from-[#ff5e62] hover:to-[#ffcc29] text-white px-8 py-3 text-base font-semibold transition-all duration-500 rounded-full group transform hover:scale-110 shadow-lg border-none"
                >
                  Join Our Community
                  <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-2 transition-transform duration-300" />
                </Button>
              </Link>
              <Link to="/projects">
                <Button 
                  variant="outline" 
                  size="lg"
                  className="border-2 border-[#ffcc29] text-[#ffcc29] bg-transparent hover:bg-[#ffcc29] hover:text-black px-8 py-3 text-base font-semibold transition-all duration-500 rounded-full transform hover:scale-110 shadow-none"
                >
                  Explore Projects
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <StatsSection />

      {/* About Rotaract & Rotary */}
      <section className="py-16 bg-gradient-to-br from-deep-base via-section-bg to-deep-base">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-8">
            {/* Rotary Section */}
            <div className="bg-gradient-to-br from-dark-accent/50 to-purple-accent/50 backdrop-blur-sm rounded-3xl p-8 border border-purple-highlight/20 hover:border-purple-highlight/40 transition-all duration-500">
              <div className="text-center mb-6">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full mb-4 overflow-hidden">
                  <img src="/rotary-logo.png" alt="Rotary International Logo" className="w-14 h-14 object-contain" />
                </div>
                <h2 className="text-3xl font-bold mb-4 text-transparent bg-gradient-to-r from-purple-highlight to-bright-purple bg-clip-text">
                  What is Rotary?
                </h2>
              </div>
              <div className="space-y-4 text-gray-300 leading-relaxed">
                <p className="text-lg">
                  <strong className="text-white">Rotary International</strong> is the parent organization that empowers Rotaract clubs worldwide.
                </p>
                <p>
                  Founded in 1905, Rotary brings together business and professional leaders to provide humanitarian service, advance goodwill, and promote peace through fellowship.
                </p>
                <div className="flex items-center justify-center space-x-4 mt-6">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-[#ffcc29]">1.2M+</div>
                    <div className="text-sm text-gray-400">Rotarians</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-[#ffcc29]">35K+</div>
                    <div className="text-sm text-gray-400">Clubs</div>
                  </div>
                </div>
                <div className="flex justify-center mt-8">
                  <a
                    href="https://www.rotary.org/en"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-gradient-to-r from-[#a020f0] via-[#ff5e62] to-[#ffcc29] hover:from-[#ff5e62] hover:to-[#ffcc29] text-white px-6 py-2 rounded-full font-semibold transition-all duration-300 shadow-lg border-none"
                  >
                    Learn More
                  </a>
                </div>
              </div>
            </div>

            {/* Rotaract Section */}
            <div className="bg-gradient-to-br from-dark-accent/50 to-purple-accent/50 backdrop-blur-sm rounded-3xl p-8 border border-purple-highlight/20 hover:border-purple-highlight/40 transition-all duration-500">
              <div className="text-center mb-6">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full mb-4">
                  <img src="/rotaract-logo.png" alt="Rotaract Club Logo" className="w-14 h-14 object-contain" />
                </div>
                <h2 className="text-3xl font-bold mb-4 text-transparent bg-gradient-to-r from-purple-highlight to-bright-purple bg-clip-text">
                  What is Rotaract?
                </h2>
              </div>
              <div className="space-y-4 text-gray-300 leading-relaxed">
                <p className="text-lg">
                  <strong className="text-white">Rotaract</strong> = <strong className="text-[#ffcc29]">Rotary</strong> + <strong className="text-[#ffcc29]">Action</strong>
                </p>
                <p>
                  A global network of young leaders (18-30) who develop leadership skills, serve communities, and build international friendships through service projects.
                </p>
                <div className="flex items-center justify-center space-x-4 mt-6">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-[#ffcc29]">1.4M+</div>
                    <div className="text-sm text-gray-400">Members Worldwide</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-[#ffcc29]">200+</div>
                    <div className="text-sm text-gray-400">Countries</div>
                  </div>
                </div>
                <div className="flex justify-center mt-8">
                  <a
                    href="https://www.rotary.org/en/get-involved/rotaract-clubs"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-gradient-to-r from-[#a020f0] via-[#ff5e62] to-[#ffcc29] hover:from-[#ff5e62] hover:to-[#ffcc29] text-white px-6 py-2 rounded-full font-semibold transition-all duration-300 shadow-lg border-none"
                  >
                    Learn More
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Moments That Matter (Polaroid Banner) */}
      <PolaroidBanner />

      {/* Initiatives Section */}
      <section className="py-16 bg-gradient-to-br from-deep-base via-section-bg to-deep-base">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-transparent bg-gradient-to-r from-purple-highlight to-bright-purple bg-clip-text">
              Our Impact Areas
            </h2>
            <p className="text-lg text-gray-300 max-w-2xl mx-auto font-light">
              Seven key pillars that drive our mission to create lasting positive change
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {initiatives.map((initiative, index) => (
              <div 
                key={index}
                className="bg-gradient-to-br from-dark-accent/50 to-purple-accent/50 backdrop-blur-sm rounded-2xl p-6 text-center group hover:bg-gradient-to-br hover:from-purple-accent/30 hover:to-bright-purple/30 transition-all duration-500 border border-purple-highlight/20 hover:border-purple-highlight/50 transform hover:scale-105 hover:shadow-2xl hover:shadow-purple-highlight/10"
              >
                <div className="text-purple-highlight mb-4 flex justify-center group-hover:scale-125 transition-transform duration-500">
                  {initiative.icon}
                </div>
                <h3 className="text-lg font-semibold mb-3 text-white group-hover:text-button-active transition-colors duration-300">
                  {initiative.title}
                </h3>
                <p className="text-gray-300 leading-relaxed font-light text-sm">
                  {initiative.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-gradient-to-br from-deep-base via-dark-purple/20 to-deep-base">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-transparent bg-gradient-to-r from-purple-highlight to-bright-purple bg-clip-text">
            Ready to Make an Impact?
          </h2>
          <p className="text-lg text-gray-300 mb-8 max-w-3xl mx-auto font-light leading-relaxed">
            Join a community of passionate young leaders committed to creating positive change. 
            Your journey of service and growth starts here.
          </p>
          <Link to="/join">
            <Button 
              size="lg"
              className="bg-gradient-to-r from-[#a020f0] via-[#ff5e62] to-[#ffcc29] hover:from-[#ff5e62] hover:to-[#ffcc29] text-white px-10 py-4 text-lg font-semibold transition-all duration-500 rounded-full group transform hover:scale-110 hover:shadow-2xl border-none shadow-lg"
            >
              Join Rotaract BMSY
              <ArrowRight className="ml-3 w-6 h-6 group-hover:translate-x-2 transition-transform duration-300" />
            </Button>
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
