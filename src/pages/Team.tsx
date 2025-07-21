import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Linkedin, Instagram, Mail } from 'lucide-react';

const Team = () => {
  const coreCouncil = [
    { id: 1, name: 'Rtr. Saanvi M S', role: 'President', image: 'https://randomuser.me/api/portraits/men/1.jpg' },
    { id: 2, name: 'Rtr. Saichandan A', role: 'Vice President', image: 'https://randomuser.me/api/portraits/women/2.jpg' },
    { id: 3, name: 'Rtr. Anne Thyagaraj', role: 'Secretary', image: 'https://randomuser.me/api/portraits/men/3.jpg' },
    { id: 4, name: 'Rtr. Meghana K', role: 'Joint Secretary', image: 'https://randomuser.me/api/portraits/women/4.jpg' },
    { id: 5, name: 'Rtr. Nupreeth Mandappa K V', role: 'Treasurer', image: 'https://randomuser.me/api/portraits/women/5.jpg' },
    { id: 6, name: 'Rtr. Varsha B', role: 'Joint Treasurer', image: 'https://randomuser.me/api/portraits/men/6.jpg' },
  ];

  const sergeants = Array.from({ length: 3 }, (_, i) => ({
    id: 10 + i,
    name: i === 0 ? 'Rtr. Kavana P R' : i === 1 ? 'Rtr. Udbhav S Chetty' : 'Rtr. Deona Braganza',
    image: `https://randomuser.me/api/portraits/men/${10 + i}.jpg`,
  }));
  const technicalDirectors = Array.from({ length: 2 }, (_, i) => ({
    id: 20 + i,
    name: i === 0 ? 'Rtr. Vinith S Kiran' : 'Rtr. Aishwarya JA',
    
    image: `https://randomuser.me/api/portraits/men/${20 + i}.jpg`,
  }));
  const clubServiceDirectors = Array.from({ length: 4 }, (_, i) => ({
    id: 30 + i,
    name: i === 0 ? 'Rtr. Gagan HS' : i === 1 ? 'Rtr. Srilakshmi' : i === 2 ? 'Rtr. Madhura C M' : `Club Service Director ${i + 1}`,
    
    image: `https://randomuser.me/api/portraits/women/${30 + i}.jpg`,
  }));
  const communityServiceDirectors = Array.from({ length: 4 }, (_, i) => ({
    id: 40 + i,
    name: i === 0 ? 'Rtr. Obana Pujar' : i === 1 ? 'Rtr. Parinitha V' : i === 2 ? 'Rtr. Yashvanth M' : 'Rtr. Rudra Prajapati',
    
    image: `https://randomuser.me/api/portraits/men/${40 + i}.jpg`,
  }));
  const internationalServiceDirectors = Array.from({ length: 3 }, (_, i) => ({
    id: 50 + i,
    name: i === 0 ? 'Rtr. Aditya Jamane' : i === 1 ? 'Rtr. Nikhil Rajesh' : 'Rtr. Diya Shetty',
    
    image: `https://randomuser.me/api/portraits/women/${50 + i}.jpg`,
  }));
  const professionalDevelopmentDirectors = Array.from({ length: 2 }, (_, i) => ({
    id: 60 + i,
    name: i === 0 ? 'Rtr. Disha G R' : 'Rtr. Sreshta Karthikeyan',
    image: `https://randomuser.me/api/portraits/men/${60 + i}.jpg`,
  }));
  const publicRelationsDirectors = Array.from({ length: 3 }, (_, i) => ({
    id: 70 + i,
    name: i === 0 ? 'Rtr. J B Nidhish' : i === 1 ? 'Rtr. Malini R' : 'Rtr. Ashutosh',
    image: `https://randomuser.me/api/portraits/women/${70 + i}.jpg`,
  }));
  const mediaAndDesignDirectors = Array.from({ length: 3 }, (_, i) => ({
    id: 80 + i,
    name: i === 0 ? 'Rtr. Mayank Gupta' : i === 1 ? 'Rtr. Saharsh Raj' : 'Rtr. Pranathi R Girimaji',
    image: `https://randomuser.me/api/portraits/men/${80 + i}.jpg`,
  }));
  const editorialDirectors = Array.from({ length: 2 }, (_, i) => ({
    id: 90 + i,
    name: i === 0 ? 'Rtr. Keerti Bhat' : 'Rtr. Makarla Ranvitha',
    image: `https://randomuser.me/api/portraits/women/${90 + i}.jpg`,
  }));
  const fellowshipChairs = Array.from({ length: 2 }, (_, i) => ({
    id: 110 + i,
    name: i === 0 ? 'Rtr. Ananya Gladys' : 'Rtr. Manya Rungta',
    image: `https://randomuser.me/api/portraits/men/${110 + i}.jpg`,
  }));
  const clubAdvisors = [
    { id: 100, name: 'IPP Rtr. Gaganjith R', image: 'https://randomuser.me/api/portraits/men/100.jpg' },
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
              Core Council
            </Badge>
          )}
        </div>
        
        <h3 className="text-xl font-bold mb-2 text-white group-hover:text-accent-pink transition-colors duration-300">
          {member.name}
        </h3>
        
        <p className="text-accent-pink font-semibold mb-2">{member.role}</p>
        
        <div className="flex justify-center space-x-3">
          {/* Remove the two small social buttons */}
        </div>
      </CardContent>
    </Card>
  );

  return (
    <div className="min-h-screen bg-black text-white">
      <Header />
      
      <div className="pt-20">
        {/* Hero Section */}
        <section className="py-20 bg-gradient-to-br from-black via-deep-base to-section-bg">
          <div className="container mx-auto px-6 text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-accent-pink to-button-active bg-clip-text text-transparent">
              Our Team
            </h1>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Meet the passionate individuals driving positive change in our community through dedication and service.
            </p>
          </div>
        </section>

        {/* Core Council */}
        <section className="py-20 bg-deep-base">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
                Core Council
              </h2>
              <p className="text-xl text-gray-300 max-w-2xl mx-auto">
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

        {/* Club Advisor */}
        <section className="py-12 bg-section-bg">
          <div className="container mx-auto px-6">
            <h2 className="text-3xl font-bold mb-8 text-white">Immediate Past President & Club Advisor</h2>
            <div className="flex justify-center">
              {clubAdvisors.map((member) => <TeamCard key={member.id} member={member} />)}
            </div>
          </div>
        </section>

        {/* Sergeants at Arms */}
        <section className="py-12 bg-section-bg">
          <div className="container mx-auto px-6">
            <h2 className="text-3xl font-bold mb-8 text-white">Sergeant at Arms</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {sergeants.map((member) => <TeamCard key={member.id} member={member} />)}
            </div>
          </div>
        </section>

        {/* Technical Directors */}
        <section className="py-12 bg-deep-base">
          <div className="container mx-auto px-6">
            <h2 className="text-3xl font-bold mb-8 text-white">Technical Directors</h2>
            <div className="grid md:grid-cols-2 gap-8">
              {technicalDirectors.map((member) => <TeamCard key={member.id} member={member} />)}
            </div>
          </div>
        </section>

        {/* Club Service Directors */}
        <section className="py-12 bg-section-bg">
          <div className="container mx-auto px-6">
            <h2 className="text-3xl font-bold mb-8 text-white">Club Service Directors</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {clubServiceDirectors.map((member) => <TeamCard key={member.id} member={member} />)}
            </div>
          </div>
        </section>

        {/* Community Service Directors */}
        <section className="py-12 bg-deep-base">
          <div className="container mx-auto px-6">
            <h2 className="text-3xl font-bold mb-8 text-white">Community Service Directors</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {communityServiceDirectors.map((member) => <TeamCard key={member.id} member={member} />)}
            </div>
          </div>
        </section>

        {/* International Service Directors */}
        <section className="py-12 bg-section-bg">
          <div className="container mx-auto px-6">
            <h2 className="text-3xl font-bold mb-8 text-white">International Service Directors</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {internationalServiceDirectors.map((member) => <TeamCard key={member.id} member={member} />)}
            </div>
          </div>
        </section>

        {/* Professional Development Directors */}
        <section className="py-12 bg-deep-base">
          <div className="container mx-auto px-6">
            <h2 className="text-3xl font-bold mb-8 text-white">Professional Development Directors</h2>
            <div className="grid md:grid-cols-2 gap-8">
              {professionalDevelopmentDirectors.map((member) => <TeamCard key={member.id} member={member} />)}
            </div>
          </div>
        </section>

        {/* Public Relations Directors */}
        <section className="py-12 bg-section-bg">
          <div className="container mx-auto px-6">
            <h2 className="text-3xl font-bold mb-8 text-white">Public Relations Directors</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {publicRelationsDirectors.map((member) => <TeamCard key={member.id} member={member} />)}
            </div>
          </div>
        </section>

        {/* Media and Design Directors */}
        <section className="py-12 bg-deep-base">
          <div className="container mx-auto px-6">
            <h2 className="text-3xl font-bold mb-8 text-white">Media and Design Directors</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {mediaAndDesignDirectors.map((member) => <TeamCard key={member.id} member={member} />)}
            </div>
          </div>
        </section>

        {/* Editorial Directors */}
        <section className="py-12 bg-section-bg">
          <div className="container mx-auto px-6">
            <h2 className="text-3xl font-bold mb-8 text-white">Editorial Directors</h2>
            <div className="grid md:grid-cols-2 gap-8">
              {editorialDirectors.map((member) => <TeamCard key={member.id} member={member} />)}
            </div>
          </div>
        </section>

        {/* Fellowship Chair */}
        <section className="py-12 bg-deep-base">
          <div className="container mx-auto px-6">
            <h2 className="text-3xl font-bold mb-8 text-white">Fellowship Chair</h2>
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

