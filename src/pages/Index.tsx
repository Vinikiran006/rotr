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

  const firstRow = initiatives.slice(0, 4);
  const secondRow = initiatives.slice(4, 7);

  const panelGradient =
    "bg-gradient-to-br from-dark-accent/50 to-purple-accent/50 backdrop-blur-sm border border-purple-highlight/20 shadow flex flex-col justify-center font-poppins";

  return (
    <div className="min-h-screen bg-gradient-to-br from-deep-base via-section-bg to-deep-base text-white font-poppins overflow-x-hidden">
      <Header />

      {/* Logo Section - Flush with hero, no margin below */}
      {/* <div className="flex justify-center items-center gap-4 sm:gap-10 md:gap-14 mt-24 mb-0 overflow-x-auto">
        <img src="/logos/rotaract-district.png" alt="Rotaract District Logo" className="h-16 sm:h-20 w-auto object-contain" />
        <img src="/logos/bms-yelahanka.jpeg" alt="BMS Yelahanka Logo" className="h-16 sm:h-20 w-auto object-contain" />
        <img
          src="/logos/unite-for-good.png"
          alt="Unite for Good Logo"
          className="hidden sm:block h-16 sm:h-20 w-auto object-contain"
        />
        <img
          src="/rotaract-logo.png"
          alt="Unite for Good Logo Small"
          className="block sm:hidden h-10 w-auto object-contain"
        />
      </div> */}

      {/* Hero Section */}
      <section
        className="relative flex flex-col items-center justify-center min-h-[80vh] sm:min-h-[400px] md:min-h-[500px] lg:min-h-[650px] mb-0 mx-0 overflow-hidden shadow-xl w-full bg-black"
        style={{ borderRadius: 0, paddingTop: 0 }}
      >
        {/* Blackened/darkened hero image */}
        <img
          src="/bb.jpg"
          alt=""
          className="absolute inset-0 w-full h-full object-cover"
          aria-hidden="true"
          draggable="false"
          style={{ zIndex: 1, objectPosition: 'center center' }}
        />
        <div
          className="absolute inset-0 bg-gradient-to-b from-black/10 via-black/5 to-black/0"
          style={{ zIndex: 2 }}
          aria-hidden="true"
        />
        <div className="relative z-10 flex flex-col items-center px-2 py-8 sm:px-8 w-full">
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-2 text-center font-poppins
            bg-gradient-to-r from-[#fffbe0] via-[#ffd700] to-[#bf5af2] text-transparent bg-clip-text drop-shadow-[0_2px_12px_#000]">
            Welcome to Rotaract Club of BMS Yelahanka
          </h1>
          <p className="max-w-xl mx-auto text-base sm:text-lg md:text-lg mb-7 text-center font-poppins text-[#FFFBEA] font-medium drop-shadow-[0_1px_8px_#000]">
            Empowering young leaders to create positive change through service, fellowship, and professional development.
          </p>
          {/* Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center w-full max-w-[450px] mx-auto">
            <Link to="/join" className="flex-1">
              <Button
                size="lg"
                className="w-full bg-gradient-to-r from-[#fffcc1] to-[#fbbf24] hover:from-[#fffcc1] hover:to-[#a020f0] text-black px-6 py-3 sm:px-8 sm:py-3 text-base font-semibold transition-all duration-500 rounded-full shadow-lg border-none font-poppins"
              >
                Join Our Community
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-2 transition-transform duration-300" />
              </Button>
            </Link>
            <Link to="/projects" className="flex-1">
              <Button
                variant="outline"
                size="lg"
                className="w-full border-2 border-[#fffcc1] text-[#fffcc1] bg-transparent hover:bg-[#fbbf24] hover:text-black px-6 py-3 sm:px-8 sm:py-3 text-base font-semibold transition-all duration-500 rounded-full shadow-none font-poppins"
              >
                Explore Projects
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* --- Remainder of your page unchanged --- */}

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
                  <span className="text-white font-semibold">Rotary </span> is a global network of more than 1.2 million neighbors, friends, leaders, and problem-solvers who see a world where people unite and take action to create lasting change – across the globe, in our communities, and in ourselves.
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
                  <img src="/rotary-logo.png" alt="Rotaract Club Logo" className="w-12 h-12 object-contain" />
                </div>
                <h2 className="text-3xl font-bold mb-2 text-transparent bg-gradient-to-r from-purple-highlight to-bright-purple bg-clip-text font-poppins">
                  What is Rotaract?
                </h2>
              </div>
              <div className="space-y-3 text-gray-300 leading-relaxed text-center font-poppins text-lg">
                <p>
                  <span className="text-white font-semibold">Rotaract</span> = <span className="text-[#ffcc29]">Rotary</span> in <span className="text-[#ffcc29]">Action</span>
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

      {/* Stats Section */}
      <StatsSection />

      {/* Moments That Matter (Polaroid Banner) */}
      <PolaroidBanner />

      {/* Initiatives Section */}
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
            
<section className="py-16 bg-[#09060a]">
  <div className="container mx-auto px-4">
    <div className="text-center mb-12">
      <h2 className="text-3xl md:text-4xl font-extrabold mb-3 text-transparent bg-gradient-to-r from-[#ac2255] via-[#920dc3] to-[#ffd700] bg-clip-text font-poppins">
        The Four-Way Test
      </h2>
      <p className="text-md md:text-lg text-[#bfa7c9] max-w-2xl mx-auto font-normal font-poppins">
        Four questions that guide all Rotarians in everything we think, say, or do.
      </p>
    </div>
    <div className="grid grid-cols-2 md:grid-cols-4 gap-9">
      {/* 1. Heart - BENEFICIAL */}
      <div className="rounded-xl p-7 flex flex-col items-center bg-[#1a1020] shadow-lg">
        <div className="rounded-lg flex items-center justify-center mb-3 w-20 h-20 bg-[#19141a] border-2 border-[#ffd700]/50 shadow-md">
          <svg width="56" height="56" viewBox="0 0 56 56" fill="none">
            <path d="M28 44s-12-8.5-12-16a8 8 0 0 1 12-6A8 8 0 0 1 40 28c0 7.5-12 16-12 16z"
              stroke="#edeaf0" strokeWidth="3" fill="none" />
            <path d="M28 44s-7-5-9-10" stroke="#ffd700" strokeWidth="2" fill="none"/>
          </svg>
        </div>
        <span className="block text-lg mt-2 text-[#edeaf0] text-center font-semibold font-poppins">
          Will it be <br/>BENEFICIAL?
        </span>
      </div>

      {/* 2. Law/Equality - FAIRNESS */}
      <div className="rounded-xl p-7 flex flex-col items-center bg-[#161014] shadow-lg">
        <div className="rounded-lg flex items-center justify-center mb-3 w-20 h-20 bg-[#231b2a] border-2 border-[#de0c96]/60 shadow-md">
          <svg width="56" height="56" viewBox="0 0 56 56" fill="none">
            <rect x="14" y="36" width="28" height="6" rx="3" fill="#edeaf0"/>
            <rect x="26" y="13" width="4" height="22" rx="2" fill="#edeaf0"/>
            <ellipse cx="20" cy="34" rx="5" ry="2.2" fill="#ffd700"/>
            <ellipse cx="36" cy="34" rx="5" ry="2.2" fill="#ffd700"/>
            <rect x="20" y="21" width="16" height="2.6" rx="1.2" fill="#bfa7c9"/>
            <circle cx="28" cy="9.5" r="2" fill="#ffd700"/>
          </svg>
        </div>
        <span className="block text-lg mt-2 text-[#edeaf0] text-center font-semibold font-poppins">
          Is it FAIR <br/>to all concerned?
        </span>
      </div>

      {/* 3. People icon - GOODWILL */}
      <div className="rounded-xl p-7 flex flex-col items-center bg-[#120b1a] shadow-lg">
        <div className="rounded-lg flex items-center justify-center mb-3 w-20 h-20 bg-[#19141a] border-2 border-[#920dc3]/60 shadow-md">
          <svg width="56" height="56" viewBox="0 0 56 56" fill="none">
            <circle cx="28" cy="20" r="7" fill="#edeaf0"/>
            <circle cx="17" cy="30" r="4.2" fill="#edeaf0"/>
            <circle cx="39" cy="30" r="4.2" fill="#edeaf0"/>
            <ellipse cx="28" cy="39" rx="13" ry="4" fill="#19141a" />
            <circle cx="28" cy="20" r="7" stroke="#ffd700" strokeWidth="1.6"/>
            <ellipse cx="28" cy="39" rx="13" ry="4" stroke="#ffd700" strokeWidth="1"/>
            {/* Smiles */}
            <path d="M25 23 q3 3 6 0" stroke="#ac2255" strokeWidth="1.7" fill="none"/>
            <path d="M14.7 32.3 q1.5 2 3 0" stroke="#ac2255" strokeWidth="1.2" fill="none"/>
            <path d="M37.3 32.3 q1.5 2 3 0" stroke="#ac2255" strokeWidth="1.2" fill="none"/>
          </svg>
        </div>
        <span className="block text-lg mt-2 text-[#edeaf0] text-center font-semibold font-poppins">
          Build GOODWILL <br/>& FRIENDSHIPS?
        </span>
      </div>

      {/* 4. Heart - TRUTH */}
      <div className="rounded-xl p-7 flex flex-col items-center bg-[#1c050f] shadow-lg">
        <div className="rounded-lg flex items-center justify-center mb-3 w-20 h-20 bg-[#19141a] border-2 border-[#ffd700] shadow-md">
          <svg width="56" height="56" viewBox="0 0 56 56" fill="none">
            <path d="M28 44s-12-8.5-12-16a8 8 0 0 1 12-6A8 8 0 0 1 40 28c0 7.5-12 16-12 16z"
              stroke="#edeaf0" strokeWidth="3" fill="none" />
            <path d="M34 31 q-6 7-12 0" stroke="#ffd700" strokeWidth="2" fill="none"/>
          </svg>
        </div>
        <span className="block text-lg mt-2 text-[#edeaf0] text-center font-semibold font-poppins">
          Is it the <br/>TRUTH?
        </span>
      </div>
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
