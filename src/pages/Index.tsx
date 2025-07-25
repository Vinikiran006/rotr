import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import {
  ArrowRight,
  Handshake,
  Stethoscope,
  Droplet,
  Baby,
  BookOpen,
  Coins,
  Globe,
} from 'lucide-react';
import PolaroidBanner from '@/components/PolaroidBanner';
import StatsSection from '@/components/StatsSection';

const Index = () => {
  const initiatives = [
    { icon: <Handshake className="w-8 h-8" />, title: "Peacebuilding and Conflict Prevention", description: "Promoting peace and conflict resolution through dialogue, education, and community initiatives." },
    { icon: <Stethoscope className="w-8 h-8" />, title: "Disease Prevention and Treatment", description: "Improving health outcomes through disease prevention, treatment, and health education." },
    { icon: <Droplet className="w-8 h-8" />, title: "Water, Sanitation, and Hygiene", description: "Ensuring access to clean water, sanitation, and hygiene for healthier communities." },
    { icon: <Baby className="w-8 h-8" />, title: "Maternal and Child Health", description: "Supporting mothers and children to reduce mortality and improve health and nutrition." },
    { icon: <BookOpen className="w-8 h-8" />, title: "Basic Education and Literacy", description: "Promoting literacy and education for children and adults to build brighter futures." },
    { icon: <Coins className="w-8 h-8" />, title: "Community Economic Development", description: "Strengthening local economies and creating opportunities for sustainable growth." },
    { icon: <Globe className="w-8 h-8" />, title: "Environment", description: "Protecting the environment and promoting sustainable practices for a greener planet." },
  ];

  // Split for two-row display: first row = 4, second row = 3
  const firstRow = initiatives.slice(0, 4);
  const secondRow = initiatives.slice(4, 7);

  const panelGradient =
    "bg-gradient-to-br from-dark-accent/50 to-purple-accent/50 backdrop-blur-sm rounded-2xl p-8 border border-purple-highlight/20 shadow flex flex-col justify-center font-poppins";

  return (
    <div className="min-h-screen bg-gradient-to-br from-deep-base via-section-bg to-deep-base text-white font-poppins overflow-x-hidden">
      <Header />

      {/* Logo Section */}
      <div className="flex justify-center items-center gap-4 sm:gap-10 md:gap-14 mt-24 mb-10 overflow-x-auto">
        <img src="/logos/rotaract-district.png" alt="Rotaract District Logo" className="h-16 sm:h-20 w-auto object-contain" />
        <img src="/logos/bms-yelahanka.jpeg" alt="BMS Yelahanka Logo" className="h-16 sm:h-20 w-auto object-contain" />
        {/* Desktop/Tablet Third Logo */}
        <img
          src="/logos/unite-for-good.png"
          alt="Unite for Good Logo"
          className="hidden sm:block h-16 sm:h-20 w-auto object-contain"
        />
        {/* Mobile-Only Small Third Logo */}
        <img
          src="/rotaract-logo.png"
          alt="Unite for Good Logo Small"
          className="block sm:hidden h-10 w-auto object-contain"
        />
      </div>

      {/* What is Rotary & What is Rotaract */}
      <section className="py-8">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-10">
            {/* Rotary */}
            <div className={panelGradient}>
              <div className="text-center mb-3">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full mb-2 overflow-hidden bg-[#1e0b2e] mx-auto">
                  <img src="/rotary-logo.png" alt="Rotary International Logo" className="w-12 h-12 object-contain" />
                </div>
                <h2 className="text-3xl font-bold mb-2 text-transparent bg-gradient-to-r from-purple-highlight to-bright-purple bg-clip-text font-poppins">
                  What is Rotary?
                </h2>
              </div>
              <div className="space-y-3 text-gray-300 leading-relaxed text-center font-poppins text-lg">
                <p>
                  <span className="text-white font-semibold">Rotary International</span> is the parent organization that empowers Rotaract clubs worldwide.
                </p>
                <div className="flex items-center justify-center space-x-8 mt-2">
                  <div className="text-center">
                    <div className="text-xl font-bold text-[#ffcc29]">1.2M+</div>
                    <div className="text-xs text-gray-400">Rotarians</div>
                  </div>
                  <div className="text-center">
                    <div className="text-xl font-bold text-[#ffcc29]">35K+</div>
                    <div className="text-xs text-gray-400">Clubs</div>
                  </div>
                </div>
                <div className="flex justify-center mt-4">
                  <a
                    href="https://www.rotary.org/en"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-gradient-to-r from-[#a020f0] via-[#ff5e62] to-[#ffcc29] hover:from-[#ff5e62] hover:to-[#ffcc29] text-white px-4 py-2 rounded-full font-semibold transition-all duration-300 shadow-md border-none text-base"
                  >
                    Learn More
                  </a>
                </div>
              </div>
            </div>
            {/* Rotaract */}
            <div className={panelGradient}>
              <div className="text-center mb-3">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full mb-2 overflow-hidden bg-[#1e0b2e] mx-auto">
                  <img src="/rotaract-logo.png" alt="Rotaract Club Logo" className="w-12 h-12 object-contain" />
                </div>
                <h2 className="text-3xl font-bold mb-2 text-transparent bg-gradient-to-r from-purple-highlight to-bright-purple bg-clip-text font-poppins">
                  What is Rotaract?
                </h2>
              </div>
              <div className="space-y-3 text-gray-300 leading-relaxed text-center font-poppins text-lg">
                <p>
                  <span className="text-white font-semibold">Rotaract</span> = <span className="text-[#ffcc29]">Rotary</span> + <span className="text-[#ffcc29]">Action</span>
                </p>
                <p>
                  A global network for young leaders (ages 18–30) that empowers them to take action, develop leadership skills, and create global friendships.
                </p>
                <div className="flex items-center justify-center space-x-8 mt-2">
                  <div className="text-center">
                    <div className="text-xl font-bold text-[#ffcc29]">1.4M+</div>
                    <div className="text-xs text-gray-400">Members Worldwide</div>
                  </div>
                  <div className="text-center">
                    <div className="text-xl font-bold text-[#ffcc29]">200+</div>
                    <div className="text-xs text-gray-400">Countries</div>
                  </div>
                </div>
                <div className="flex justify-center mt-4">
                  <a
                    href="https://www.rotary.org/en/get-involved/rotaract-clubs"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-gradient-to-r from-[#a020f0] via-[#ff5e62] to-[#ffcc29] hover:from-[#ff5e62] hover:to-[#ffcc29] text-white px-4 py-2 rounded-full font-semibold transition-all duration-300 shadow-md border-none text-base"
                  >
                    Learn More
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Us Section */}
      <section className="py-10">
        <div className="container mx-auto px-6">
          <div className={`${panelGradient} max-w-5xl mx-auto items-center text-center`}>
            <h2 className="text-3xl font-bold text-transparent bg-gradient-to-r from-purple-highlight to-bright-purple bg-clip-text mb-3 font-poppins">
              About Us
            </h2>
            <p className="text-lg text-gray-200 mb-3 font-poppins">
              The Rotaract Club of BMS Institute of Technology, Yelahanka, is a vibrant hub of youth leadership and community-driven initiatives. Our journey is defined by meaningful projects and impactful service, rooted in our unwavering commitment to building a better tomorrow.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center my-4">
              <Link to="/join">
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-[#a020f0] via-[#ff5e62] to-[#ffcc29] hover:from-[#ff5e62] hover:to-[#ffcc29] text-white px-8 py-3 text-base font-semibold transition-all duration-500 rounded-full group transform hover:scale-110 shadow-lg border-none font-poppins"
                >
                  Join Our Community
                  <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-2 transition-transform duration-300" />
                </Button>
              </Link>
              <Link to="/projects">
                <Button
                  variant="outline"
                  size="lg"
                  className="border-2 border-[#ffcc29] text-[#ffcc29] bg-transparent hover:bg-[#ffcc29] hover:text-black px-8 py-3 text-base font-semibold transition-all duration-500 rounded-full transform hover:scale-110 shadow-none font-poppins"
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

      {/* Moments That Matter (Polaroid Banner) */}
      <PolaroidBanner />

      {/* Initiatives Section - 4 in first row, 3 in second row */}
      <section className="py-16 bg-gradient-to-br from-deep-base via-section-bg to-deep-base">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-transparent bg-gradient-to-r from-purple-highlight to-bright-purple bg-clip-text font-poppins">
              Rotary's 7 areas of focus
            </h2>
            <p className="text-lg text-gray-300 max-w-2xl mx-auto font-light font-poppins">
              Seven key pillars that drive our mission to create lasting positive change
            </p>
          </div>
          {/* First Row: 4 Columns */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 mb-6">
            {firstRow.map((initiative, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-dark-accent/50 to-purple-accent/50 backdrop-blur-sm rounded-2xl p-6 text-center group hover:bg-gradient-to-br hover:from-purple-accent/30 hover:to-bright-purple/30 transition-all duration-500 border border-purple-highlight/20 hover:border-purple-highlight/50 transform hover:scale-105 hover:shadow-2xl hover:shadow-purple-highlight/10"
              >
                <div className="text-purple-highlight mb-4 flex justify-center group-hover:scale-125 transition-transform duration-500">
                  {initiative.icon}
                </div>
                <h3 className="text-lg font-semibold mb-3 text-white group-hover:text-button-active transition-colors duration-300 font-poppins">
                  {initiative.title}
                </h3>
                <p className="text-gray-300 leading-relaxed font-light text-sm font-poppins">
                  {initiative.description}
                </p>
              </div>
            ))}
          </div>
          {/* Second Row: 3 Columns, Centered */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 justify-items-center">
            {secondRow.map((initiative, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-dark-accent/50 to-purple-accent/50 backdrop-blur-sm rounded-2xl p-6 text-center group hover:bg-gradient-to-br hover:from-purple-accent/30 hover:to-bright-purple/30 transition-all duration-500 border border-purple-highlight/20 hover:border-purple-highlight/50 transform hover:scale-105 hover:shadow-2xl hover:shadow-purple-highlight/10"
              >
                <div className="text-purple-highlight mb-4 flex justify-center group-hover:scale-125 transition-transform duration-500">
                  {initiative.icon}
                </div>
                <h3 className="text-lg font-semibold mb-3 text-white group-hover:text-button-active transition-colors duration-300 font-poppins">
                  {initiative.title}
                </h3>
                <p className="text-gray-300 leading-relaxed font-light text-sm font-poppins">
                  {initiative.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action block */}
      <section className="py-16 bg-gradient-to-br from-deep-base via-dark-purple/20 to-deep-base">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-transparent bg-gradient-to-r from-purple-highlight to-bright-purple bg-clip-text font-poppins">
            Ready to Make an Impact?
          </h2>
          <p className="text-lg text-gray-300 mb-8 max-w-3xl mx-auto font-light leading-relaxed font-poppins">
            Join a community of passionate young leaders committed to creating positive change.
            Your journey of service and growth starts here.
          </p>
          {/* Upcoming Events Section (just before Call to Action) */}
          <section className="py-6">
            <div className="container mx-auto px-6">
              <div className={`${panelGradient} max-w-lg mx-auto text-center`}>
                <h2 className="text-2xl font-bold bg-gradient-to-r from-purple-highlight to-bright-purple bg-clip-text text-transparent mb-2 font-poppins">
                  Upcoming Events
                </h2>
                <p className="text-lg text-gray-200 font-poppins">Stay tuned!!</p>
              </div>
            </div>
          </section>
          <Link to="/join">
            <Button
              size="lg"
              className="bg-gradient-to-r from-[#a020f0] via-[#ff5e62] to-[#ffcc29] hover:from-[#ff5e62] hover:to-[#ffcc29] text-white px-10 py-4 text-lg font-semibold transition-all duration-500 rounded-full group transform hover:scale-110 shadow-lg border-none font-poppins"
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
