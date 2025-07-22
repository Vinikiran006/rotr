import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { QrCode, Heart, Users, BookOpen, Stethoscope, Trees } from 'lucide-react';

const Donate = () => {
  const impactItems = [
    {
      amount: '₹100',
      impact: '5 notebooks for underprivileged students',
      icon: BookOpen,
      color: 'from-blue-500 to-cyan-600'
    },
    {
      amount: '₹500',
      impact: 'Meals for 5 families in need',
      icon: Heart,
      color: 'from-red-500 to-pink-600'
    },
    {
      amount: '₹1000',
      impact: 'Basic medical supplies for health camps',
      icon: Stethoscope,
      color: 'from-green-500 to-emerald-600'
    },
    {
      amount: '₹2000',
      impact: '10 saplings for environmental projects',
      icon: Trees,
      color: 'from-purple-500 to-violet-600'
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
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
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
                      {item.amount}
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

        {/* Donation Methods */}
        <section className="py-20 bg-section-bg">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
                  How to Donate
                </h2>
                <p className="text-xl text-gray-300">
                  Choose your preferred donation method for a secure and convenient experience.
                </p>
              </div>
              
              <div className="flex justify-center">
                {/* QR Code Payment */}
                <Card className="bg-black/50 border-accent-pink/20">
                  <CardContent className="p-8 text-center">
                    <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-r from-purple-highlight to-button-active mb-6">
                      <QrCode size={32} className="text-white" />
                    </div>
                    <h3 className="text-2xl font-bold mb-4 text-white">UPI Payment</h3>
                    <p className="text-gray-300 mb-6">
                      Scan the QR code below to make a quick and secure donation using any UPI app.
                    </p>
                    
                    {/* QR Code Placeholder */}
                    <div className="bg-white p-8 rounded-lg inline-block mb-6">
                      <img src="/lovable-uploads/nupreeth-qr.jpg" alt="UPI QR Code" className="w-48 h-48 object-contain rounded-lg" />
                    </div>
                    
                    <p className="text-sm text-gray-400 mb-4">
                      UPI ID: nupreeth.off@indianbank
                    </p>
                    
                    <Button 
                      className="bg-gradient-to-r from-[#a020f0] via-[#ff5e62] to-[#ffcc29] hover:from-[#ff5e62] hover:to-[#ffcc29] text-white font-semibold shadow-lg border-none px-8"
                    >
                      Download QR Code
                    </Button>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Transparency Section */}
        <section className="py-20 bg-deep-base">
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
        </section>

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
