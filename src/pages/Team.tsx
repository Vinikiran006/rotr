import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Linkedin, Instagram, Mail } from 'lucide-react';

const Team = () => {
  const coreCouncil = [
    { id: 1, name: 'Rtr. Saanvi M S', role: 'President', image: '/team/Saanvi.jpg' },
    { id: 2, name: 'Rtr. Saichandan A', role: 'Vice President', image: '/team/sai.png' },
    { id: 3, name: 'Rtr. Anne Thyagaraj', role: 'Secretary', image: '/team/Anne.jpg' },
    { id: 4, name: 'Rtr. Meghana K', role: 'Joint Secretary', image: '/team/meghan.jpg' },
    { id: 5, name: 'Rtr. Nupreeth Mandappa K V', role: 'Treasurer', image: '/team/NUPREETH.jpeg' },
    { id: 6, name: 'Rtr. Varsha B', role: 'Joint Treasurer', image: '/team/Varsha_B_Pic.jpg' },
  ];

  const sergeants = [
    { id: 11, name: 'Rtr. Kavana P R', image: '/team/IMG_20250325_221400_078 - Kavana P R CB-2023-27.webp' },
    { id: 12, name: 'Rtr. Udbhav S Chetty', image: '/team/udbhav.JPG' },
    { id: 13, name: 'Rtr. Deona Braganza', image: '/team/Deona.jpg' },
  ];
  const technicalDirectors = [
    { id: 21, name: 'Rtr. Vinith S Kiran', image: '/team/Vinith.jpg' },
    { id: 22, name: 'Rtr. Aishwarya JA', image: '/team/IMG_20250608_221121 - Aishwarya J A CS-2023-27.jpg' },
  ];
  const clubServiceDirectors = [
    { id: 31, name: 'Rtr. Gagan HS', image: '/team/GaganHS.jpeg' },
    { id: 32, name: 'Rtr. Srilakshmi', image: '/team/srilakshmi.jpg' },
    { id: 33, name: 'Rtr. Madhura C M', image: '/team/IMG_20250608_230420 - Madhura C M IS-2023-27.jpg' },
    
  ];
  const communityServiceDirectors = [
    { id: 41, name: 'Rtr. Obana Pujar', image: '/team/Screenshot_20250606-223418_Instagram - Obana Pujar CB-2023-27.jpg' },
    { id: 42, name: 'Rtr. Parinitha V', image: '/team/Screenshot_20250607_225207 - Parinitha V ECE-1.jpg' },
    { id: 43, name: 'Rtr. Yashvanth M', image: '/team/WhatsApp Image 2025-03-11 at 22.29.40_35c1cc65 - Yashvanth M.jpg' },
    { id: 44, name: 'Rtr. Rudra Prajapati', image: '/team/image.png' },
  ];
  const internationalServiceDirectors = [
    { id: 51, name: 'Rtr. Aditya Jamane', image: '/team/IMG-20240706-WA0000 - Aditya Jamane.jpg' },
    { id: 52, name: 'Rtr. Nikhil Rajesh', image: '/team/Nikhil.jpeg' },
    { id: 53, name: 'Rtr. Diya Shetty', image: '/team/IMG-20250305-WA0227 - Diya Shetty AIML-6-2024-28.jpg' },
  ];
  const professionalDevelopmentDirectors = [
    { id: 61, name: 'Rtr. Disha G R', image: '/team/IMG-20250323-WA0031 - Disha G R CSE-13-2024-28.jpg' },
    { id: 62, name: 'Rtr. Sreshta Karthikeyan', image: '/team/IMG_20250608_192347 - Sreshta Karthikeyan IS-2023-27.jpg' },
  ];
  const publicRelationsDirectors = [
    { id: 71, name: 'Rtr. J B Nidhish', image: '/team/IMG-20250421-WA0051~3 - J B Nidhish CSE-7.jpg' },
    { id: 72, name: 'Rtr. Malini R', image: '/team/IMG_7020 - Malini R CSE-6.jpeg' },
    { id: 73, name: 'Rtr. Ashutosh', image: '/team/Ashutosh.jpg' },
  ];
  const mediaAndDesignDirectors = [
    { id: 81, name: 'Rtr. Mayank Gupta', image: '/team/Mayank.jpeg' },
    { id: 82, name: 'Rtr. Saharsh Raj', image: '/team/saharsh.png' },
    { id: 83, name: 'Rtr. Pranathi R Girimaji', image: '/team/IMG-20250622-WA0061 - Pranathi.jpg' },
  ];
  const editorialDirectors = [
    { id: 91, name: 'Rtr. Keerti Bhat', image: '/team/IMG_20250608_211141 - Keerti Bhat.jpg' },
    { id: 92, name: 'Rtr. Makarla Ranvitha', image: '/team/IMG-20250509-WA0062 - Ranvitha Makarla.jpg' },
  ];
  const fellowshipChairs = [
    { id: 110, name: 'Rtr. Ananya Gladys', image: '/team/photo-output - Ananya Gladys EC-2023-27.jpeg' },
    { id: 111, name: 'Rtr. Manya Rungta', image: '/team/Manya.jpg' },
  ];
  const clubAdvisors = [
    { id: 100, name: 'IPP Rtr. Gaganjith R', image: '/team/IMG-20250528-WA0059 - Gaganjith R.jpg' },
  ];

  const TeamCard = ({ member, isCore = false }) => (
    <Card className="bg-section-bg/80 border-accent-pink/20 hover:border-accent-pink/50 transition-all duration-300 group hover:transform hover:scale-105">
      <CardContent className="p-6 text-center">
        <div className="relative mb-6">
          <img
            src={member.image}
            alt={member.name}
            className="w-32 h-32 rounded-full mx-auto object-cover border-4 border-accent-pink/30 group-hover:border-accent-pink transition-colors duration-300"
          />
          {isCore && (
            <Badge className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-purple-highlight to-button-active text-white">
              Core Team           </Badge>
          )}
        </div>
        <h3 className="text-xl font-bold mb-2 text-white group-hover:text-accent-pink transition-colors duration-300 font-poppins">
          {member.name}
        </h3>
        <p className="text-accent-pink font-semibold mb-2 font-poppins">{member.role}</p>
        <div className="flex justify-center space-x-3"></div>
      </CardContent>
    </Card>
  );

  return (
    <div className="min-h-screen bg-black text-white font-poppins">
      <Header />

      <div className="pt-20">
        {/* Hero Section */}
        <section className="py-20 bg-gradient-to-br from-black via-deep-base to-section-bg">
          <div className="container mx-auto px-6 text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-accent-pink to-button-active bg-clip-text text-transparent font-poppins">
              Our Team
            </h1>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto font-poppins">
              Meet the passionate individuals driving positive change in our community through dedication and service.
            </p>
          </div>
        </section>

        <section className="py-20 bg-deep-base">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white font-poppins">
                Core Team
              </h2>
              <p className="text-xl text-gray-300 max-w-2xl mx-auto font-poppins">
                The leadership team steering our club's vision and mission.
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {coreCouncil.map((member) => (
                <TeamCard key={member.id} member={member} isCore={true} />
              ))}
            </div>
          </div>
        </section>

        <section className="py-12 bg-section-bg">
          <div className="container mx-auto px-6">
            <h2 className="text-3xl font-bold mb-8 text-white font-poppins">Immediate Past President & Club Advisor</h2>
            <div className="flex justify-center">
              {clubAdvisors.map((member) => <TeamCard key={member.id} member={member} />)}
            </div>
          </div>
        </section>

        <section className="py-12 bg-section-bg">
          <div className="container mx-auto px-6">
            <h2 className="text-3xl font-bold mb-8 text-white font-poppins">Sergeant at Arms</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {sergeants.map((member) => <TeamCard key={member.id} member={member} />)}
            </div>
          </div>
        </section>

        <section className="py-12 bg-deep-base">
          <div className="container mx-auto px-6">
            <h2 className="text-3xl font-bold mb-8 text-white font-poppins">Technical Directors</h2>
            <div className="grid md:grid-cols-2 gap-8">
              {technicalDirectors.map((member) => <TeamCard key={member.id} member={member} />)}
            </div>
          </div>
        </section>

        <section className="py-12 bg-section-bg">
          <div className="container mx-auto px-6">
            <h2 className="text-3xl font-bold mb-8 text-white font-poppins">Club Service Directors</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {clubServiceDirectors.map((member) => <TeamCard key={member.id} member={member} />)}
            </div>
          </div>
        </section>

        <section className="py-12 bg-deep-base">
          <div className="container mx-auto px-6">
            <h2 className="text-3xl font-bold mb-8 text-white font-poppins">Community Service Directors</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {communityServiceDirectors.map((member) => <TeamCard key={member.id} member={member} />)}
            </div>
          </div>
        </section>

        <section className="py-12 bg-section-bg">
          <div className="container mx-auto px-6">
            <h2 className="text-3xl font-bold mb-8 text-white font-poppins">International Service Directors</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {internationalServiceDirectors.map((member) => <TeamCard key={member.id} member={member} />)}
            </div>
          </div>
        </section>

        <section className="py-12 bg-deep-base">
          <div className="container mx-auto px-6">
            <h2 className="text-3xl font-bold mb-8 text-white font-poppins">Professional Development Directors</h2>
            <div className="grid md:grid-cols-2 gap-8">
              {professionalDevelopmentDirectors.map((member) => <TeamCard key={member.id} member={member} />)}
            </div>
          </div>
        </section>

        <section className="py-12 bg-section-bg">
          <div className="container mx-auto px-6">
            <h2 className="text-3xl font-bold mb-8 text-white font-poppins">Public Relations Directors</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {publicRelationsDirectors.map((member) => <TeamCard key={member.id} member={member} />)}
            </div>
          </div>
        </section>

        <section className="py-12 bg-deep-base">
          <div className="container mx-auto px-6">
            <h2 className="text-3xl font-bold mb-8 text-white font-poppins">Media and Design Directors</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {mediaAndDesignDirectors.map((member) => <TeamCard key={member.id} member={member} />)}
            </div>
          </div>
        </section>

        <section className="py-12 bg-section-bg">
          <div className="container mx-auto px-6">
            <h2 className="text-3xl font-bold mb-8 text-white font-poppins">Editorial Directors</h2>
            <div className="grid md:grid-cols-2 gap-8">
              {editorialDirectors.map((member) => <TeamCard key={member.id} member={member} />)}
            </div>
          </div>
        </section>

        <section className="py-12 bg-deep-base">
          <div className="container mx-auto px-6">
            <h2 className="text-3xl font-bold mb-8 text-white font-poppins">Fellowship Chair</h2>
            <div className="grid md:grid-cols-2 gap-8">
              {fellowshipChairs.map((member) => <TeamCard key={member.id} member={member} />)}
            </div>
          </div>
        </section>
      </div>

      <Footer />
    </div>
  );
};

export default Team;
