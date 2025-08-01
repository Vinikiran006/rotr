import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { QrCode, Heart, Users, BookOpen, Stethoscope, Trees, Utensils, Shirt } from 'lucide-react';

const Donate = () => {
  const impactItems = [
    {
      impact: 'Notebooks, pens, and supplies for underprivileged students',
      icon: BookOpen,
      color: 'from-blue-500 to-cyan-600'
    },
    {
      impact: 'Nutritious meals for families in need',
      icon: Utensils,
      color: 'from-red-500 to-pink-600'
    },
    {
      impact: 'Clean and warm clothing for children and adults',
      icon: Shirt,
      color: 'from-yellow-500 to-orange-500'
    }
  ];
  

  return (
    <div className="min-h-screen bg-black text-white">
      <Header />
      
      <div className="pt-20">
        {/* Hero Section */}
        <section className="py-20 bg-gradient-to-br from-black via-deep-base to-section-bg">
          <div className="container mx-auto px-6 text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-accent-pink to-button-active bg-clip-text text-transparent">
              Support Our Mission
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
              Your generous donation helps us create lasting impact in our community through 
              education, health, environment, and leadership development initiatives.
            </p>
            <Button 
              size="lg"
              className="bg-gradient-to-r from-[#a020f0] via-[#ff5e62] to-[#ffcc29] hover:from-[#ff5e62] hover:to-[#ffcc29] text-white px-12 py-6 text-xl font-semibold transition-all duration-300 transform hover:scale-105"
            >
              Donate Now
            </Button>
          </div>
        </section>

        {/* Impact Visualization */}
        <section className="py-20 bg-deep-base">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
                Your Impact
              </h2>
              <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                See how your contribution directly translates to positive change in our community.
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {impactItems.map((item, index) => (
                <Card 
                  key={index}
                  className="bg-black/50 border-accent-pink/20 hover:border-accent-pink/50 transition-all duration-300 group hover:transform hover:scale-105"
                >
                  <CardContent className="p-8 text-center">
                    <div className={`inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-r ${item.color} mb-6`}>
                      <item.icon size={32} className="text-white" />
                    </div>
                    <h3 className="text-2xl font-bold mb-4 text-accent-pink">
                      
                    </h3>
                    <p className="text-gray-300 leading-relaxed">
                      {item.impact}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        
        <section className="py-20 bg-section-bg">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
                  How to donate
                </h2>
                <p className="text-xl text-gray-300">
                  Fill out our donation form and start your donation journey with Rotaract BMSY.
                </p>
              </div>
              <Card className="bg-black/50 border-accent-pink/20">
                <CardContent className="p-8">
                  <div className="bg-gradient-to-r from-purple-highlight/10 to-button-active/10 p-8 rounded-lg border border-accent-pink/20">
                    <div className="text-center mb-6">
                      <h3 className="text-2xl font-bold text-white mb-4">Donation Form</h3>
                      <p className="text-gray-300">
                      Complete the form below to express your interest in donating food, stationery, or clothes.
                      </p>
                    </div>
                    <div className="w-full flex justify-center">
                      <iframe
                        src="https://docs.google.com/forms/d/e/1FAIpQLSe-9XUZSIe8Zx2N8q5kncp6sGJaQ5z4KbgNmNJbJpHaOxlDrQ/viewform?embedded=true"
                        width="100%"
                        height={460}
                        frameBorder={0}
                        title="Rotaract Registration Form"
                        className="rounded-lg border-none w-full max-w-2xl"
                        allowFullScreen
                      >
                        Loading…
                      </iframe>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Transparency Section */}
        {/* <section className="py-20 bg-deep-base">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
                Transparency & Accountability
              </h2>
              <p className="text-xl text-gray-300 mb-12">
                We believe in complete transparency about how your donations are utilized.
              </p>
              
              <div className="grid md:grid-cols-3 gap-8">
                <Card className="bg-black/50 border-accent-pink/20">
                  <CardContent className="p-6 text-center">
                    <div className="text-3xl font-bold text-accent-pink mb-2">85%</div>
                    <p className="text-white font-semibold mb-2">Direct Impact</p>
                    <p className="text-gray-300 text-sm">
                      Goes directly to projects and beneficiaries
                    </p>
                  </CardContent>
                </Card>
                
                <Card className="bg-black/50 border-accent-pink/20">
                  <CardContent className="p-6 text-center">
                    <div className="text-3xl font-bold text-accent-pink mb-2">10%</div>
                    <p className="text-white font-semibold mb-2">Operations</p>
                    <p className="text-gray-300 text-sm">
                      For logistics and operational expenses
                    </p>
                  </CardContent>
                </Card>
                
                <Card className="bg-black/50 border-accent-pink/20">
                  <CardContent className="p-6 text-center">
                    <div className="text-3xl font-bold text-accent-pink mb-2">5%</div>
                    <p className="text-white font-semibold mb-2">Technology</p>
                    <p className="text-gray-300 text-sm">
                      For maintaining digital infrastructure
                    </p>
                  </CardContent>
                </Card>
              </div>
              
            </div>
          </div>
        </section> */}

        {/* Thank You Section */}
        <section className="py-18 bg-section-bg">
          <div className="container mx-auto px-6 text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
              Thank You for Your Support
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
              Every donation, no matter the size, makes a significant difference in someone's life. 
              Together, we can build a better future for our community.
            </p>
            
          </div>
        </section>
      </div>

      <Footer />
    </div>
  );
};

export default Donate;
