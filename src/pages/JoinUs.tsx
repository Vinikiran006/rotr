import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Users, Award, Network, TrendingUp, Clock, Heart, Globe } from 'lucide-react';

const JoinUs = () => {
  const benefits = [
    {
      icon: TrendingUp,
      title: 'Skill Development',
      description: 'Enhance your leadership, communication, and project management skills through hands-on experience.',
      color: 'from-accent-pink to-purple-highlight'
    },
    {
      icon: Award,
      title: 'Certifications',
      description: 'Earn recognized certificates for your community service hours and leadership roles.',
      color: 'from-purple-highlight to-button-active'
    },
    {
      icon: Network,
      title: 'Global Network',
      description: 'Connect with Rotaractors worldwide and build lifelong professional relationships.',
      color: 'from-button-active to-accent-pink'
    },
    {
      icon: Heart,
      title: 'Personal Growth',
      description: 'Develop empathy, social responsibility, and a deeper understanding of community needs.',
      color: 'from-accent-pink to-maroon-accent'
    }
  ];

  const faqs = [
    {
      question: 'Who can join Rotaract?',
      answer: 'Students aged 18-30 from any department of BMS Institute of Technology, Yelahanka can join. We welcome all passionate individuals who want to make a positive impact.'
    },
    {
      question: 'Are there any membership fees?',
      answer: 'There are minimal annual dues to support club activities and projects. The exact amount will be communicated during the orientation process.'
    },
    {
      question: 'What is the time commitment?',
      answer: 'We understand you have academic commitments. Typically, members dedicate 4-6 hours per month to club activities, including meetings and service projects.'
    },
    {
      question: 'Do I need prior experience in community service?',
      answer: 'Not at all! We provide training and mentorship. Your enthusiasm to serve and learn is all we need.'
    },
    {
      question: 'What kind of projects will I work on?',
      answer: "Projects span across education, health, environment, and community development. From digital literacy programs to tree plantation drives, there's something for everyone."
    }
  ];

  return (
    <div className="min-h-screen bg-black text-white">
      <Header />
      <div className="pt-20">

        {/* Hero Section with Responsive Background Image */}
<section
  className="relative w-full min-h-[55vw] md:min-h-[40vw] lg:min-h-[36vw] flex items-center justify-center overflow-hidden"
  style={{
    backgroundImage: "url('/join_us.jpg')",
    backgroundSize: 'cover',         // Fills both right/left, no gaps!
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center center',
    backgroundColor: '#111111'
  }}
>
  {/* Overlay for readability */}
  <div className="absolute inset-0 bg-gradient-to-b from-black/80 to-black/30 z-0 pointer-events-none" />
  <div className="relative z-10 w-full text-center px-4 py-8 flex flex-col items-center">
    <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 bg-gradient-to-r from-accent-pink to-button-active bg-clip-text text-transparent">
      Join Our Community
    </h1>
    <p className="text-base sm:text-lg md:text-xl text-gray-300 max-w-2xl md:max-w-3xl mx-auto mb-6">
      Be part of a dynamic community of young leaders committed to creating positive change. 
      Develop skills, build networks, and make a lasting impact.
    </p>
    <a
      href="https://docs.google.com/forms/d/e/1FAIpQLSej0Dum4THRYocF3CiHyE1EzpmRthnCd-TbiVmY1bZES5qV6g/viewform"
      target="_blank"
      rel="noopener noreferrer"
      className="inline-block bg-gradient-to-r from-[#a020f0] via-[#ff5e62] to-[#ffcc29] hover:from-[#ff5e62] hover:to-[#ffcc29] text-white px-6 py-3 text-base font-semibold transition-all duration-300 transform hover:scale-105 border-none shadow-lg rounded-full"
    >
      Start Your Journey
    </a>
  </div>
</section>




        {/* Why Join Section */}
        <section className="py-20 bg-deep-base">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
                Why Join Rotaract?
              </h2>
              <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                Discover the incredible benefits of being part of our community-focused organization.
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {benefits.map((benefit, index) => (
                <Card 
                  key={index}
                  className="bg-black/50 border-accent-pink/20 hover:border-accent-pink/50 transition-all duration-300 group hover:transform hover:scale-105"
                >
                  <CardContent className="p-8 text-center">
                    <div className={`inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-r ${benefit.color} mb-6`}>
                      <benefit.icon size={32} className="text-white" />
                    </div>
                    <h3 className="text-xl font-bold mb-4 text-white group-hover:text-accent-pink transition-colors duration-300">
                      {benefit.title}
                    </h3>
                    <p className="text-gray-300 leading-relaxed">
                      {benefit.description}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Registration Form Section */}
        <section className="py-20 bg-section-bg">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
                  Ready to Join?
                </h2>
                <p className="text-xl text-gray-300">
                  Fill out our registration form and start your journey with Rotaract BMSY.
                </p>
              </div>
              <Card className="bg-black/50 border-accent-pink/20">
                <CardContent className="p-8">
                  <div className="bg-gradient-to-r from-purple-highlight/10 to-button-active/10 p-8 rounded-lg border border-accent-pink/20">
                    <div className="text-center mb-6">
                      <h3 className="text-2xl font-bold text-white mb-4">Registration Form</h3>
                      <p className="text-gray-300">
                        Complete the form below to express your interest in joining Rotaract Club of BMS Yelahanka.
                      </p>
                    </div>
                    <div className="w-full flex justify-center">
                      <iframe
                        src="https://docs.google.com/forms/d/e/1FAIpQLSej0Dum4THRYocF3CiHyE1EzpmRthnCd-TbiVmY1bZES5qV6g/viewform?embedded=true"
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

        {/* FAQ Section */}
        <section className="py-20 bg-deep-base">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
                  Frequently Asked Questions
                </h2>
                <p className="text-xl text-gray-300">
                  Get answers to common questions about joining Rotaract BMSY.
                </p>
              </div>
              <Accordion type="single" collapsible className="space-y-4">
                {faqs.map((faq, index) => (
                  <AccordionItem 
                    key={index} 
                    value={`item-${index}`}
                    className="bg-black/50 border border-accent-pink/20 rounded-lg px-6"
                  >
                    <AccordionTrigger className="text-white hover:text-accent-pink text-left">
                      {faq.question}
                    </AccordionTrigger>
                    <AccordionContent className="text-gray-300 leading-relaxed">
                      {faq.answer}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          </div>
        </section>
      </div>

      <Footer />
    </div>
  );
};

export default JoinUs;
