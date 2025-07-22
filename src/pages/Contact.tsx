import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { MapPin, Mail, Star } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://static.elfsight.com/platform/platform.js';
    script.async = true;
    document.body.appendChild(script);
    return () => {
      document.body.removeChild(script);
    };
  }, []);

  const reviews = [
    {
      name: "Priya Sharma",
      text: "Amazing experience with Rotaract BMSY! The community service projects are truly impactful.",
      rating: 5
    },
    {
      name: "Arjun Patel", 
      text: "Great leadership opportunities and wonderful team to work with. Highly recommend joining!",
      rating: 5
    },
    {
      name: "Sneha Kumar",
      text: "The workshops and events are well organized. Really helped me grow personally and professionally.",
      rating: 5
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black text-white font-poppins">
      <Header />

      <div className="pt-24">
        {/* Hero Section */}
        <section className="py-20 bg-gradient-to-br from-black via-purple-900/20 to-black">
          <div className="container mx-auto px-6 text-center">
            <div className="mb-8 flex justify-center animate-fade-in">
              <img 
                src="/logos/logo.png" 
                alt="Rotaract Club Logos" 
                className="h-20 w-auto"
              />
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6 text-transparent bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text">
              Get In Touch
            </h1>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Ready to make a difference? Connect with us and be part of the change you want to see in the world.
            </p>
          </div>
        </section>

        {/* Contact Info & Form */}
        <section className="py-20 bg-gradient-to-r from-gray-900 via-black to-gray-900">
          <div className="container mx-auto px-6">
            <div className="flex flex-col lg:flex-row gap-8 items-stretch">
              {/* Contact Information */}
              <div className="flex-1 flex flex-col justify-between h-full">
                <h2 className="text-3xl font-bold text-transparent bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text mb-8">
                  Contact Information
                </h2>
                <div className="space-y-6">
                  <div className="flex items-start space-x-4 group transform hover:scale-105 transition-all duration-300">
                    <MapPin className="w-6 h-6 text-purple-400 mt-1 group-hover:text-blue-400 transition-colors" />
                    <div>
                      <h3 className="font-semibold text-white mb-1">Address</h3>
                      <p className="text-gray-300">
                        BMS Institute of Technology<br />
                        Yelahanka, Bangalore - 560064
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4 group transform hover:scale-105 transition-all duration-300">
                    <Mail className="w-6 h-6 text-purple-400 mt-1 group-hover:text-blue-400 transition-colors" />
                    <div>
                      <h3 className="font-semibold text-white mb-1">Email</h3>
                      <p className="text-gray-300">rotaract.bmsy@gmail.com</p>
                    </div>
                  </div>
                </div>
                {/* Map */}
                <div className="mt-8 flex-1 flex items-end">
                  <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 rounded-lg p-4 text-center border border-purple-500/20 w-full">
                    <div className="rounded h-80 w-full overflow-hidden flex items-center justify-center">
                      <iframe
                        title="BMS Institute of Technology Map"
                        src="https://www.google.com/maps?q=BMS+Institute+of+Technology+and+Management,+Yelahanka,+Bangalore&output=embed"
                        width="100%"
                        height="100%"
                        style={{ border: 0, minHeight: '320px', borderRadius: '0.75rem' }}
                        allowFullScreen={true}
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                      ></iframe>
                    </div>
                  </div>
                </div>
              </div>

              {/* Contact Form */}
              <form
                action="https://formspree.io/f/mgvzogvz"
                method="POST"
                className="space-y-6 flex-1 flex flex-col justify-center"
              >
                <input type="hidden" name="_replyto" value={formData.email} />
                <input type="hidden" name="_subject" value="New Contact Form Message" />

                {/* Name Field */}
                <div>
                  <label className="block text-gray-300 mb-2">Name</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 bg-black/30 border border-gray-600 rounded-lg text-white focus:border-purple-400 focus:outline-none transition-all duration-300"
                    placeholder="Your full name"
                  />
                </div>

                {/* Email Field */}
                <div>
                  <label className="block text-gray-300 mb-2">Email</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 bg-black/30 border border-gray-600 rounded-lg text-white focus:border-purple-400 focus:outline-none transition-all duration-300"
                    placeholder="your.email@example.com"
                  />
                </div>

                {/* Message Field */}
                <div>
                  <label className="block text-gray-300 mb-2">Message</label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    rows={5}
                    required
                    className="w-full px-4 py-3 bg-black/30 border border-gray-600 rounded-lg text-white focus:border-purple-400 focus:outline-none resize-none transition-all duration-300"
                    placeholder="Tell us how you'd like to get involved..."
                  />
                </div>

                {/* Submit Button */}
                <Button
                  type="submit"
                  className="bg-gradient-to-r from-[#a020f0] via-[#ff5e62] to-[#ffcc29] hover:from-[#ff5e62] hover:to-[#ffcc29] text-white font-semibold shadow-lg border-none"
                >
                  Send Message
                </Button>
              </form>
            </div>
          </div>
        </section>

       {/* Elfsight Instagram Feed Embed */}
        <section className="py-12 bg-black">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-center mb-8 text-transparent bg-gradient-to-r from-[#ffcc29] to-[#a020f0] bg-clip-text">
              Follow Us on Instagram
            </h2>
            <div className="flex justify-center">
              <div className="w-full sm:w-11/12 md:w-9/12 max-w-3xl bg-black/20 rounded-lg p-4 sm:p-6 shadow-xl overflow-visible">
                <div
                  className="elfsight-app-8b454c00-06af-4faa-9f7c-cd54e7569868"
                  data-elfsight-app-lazy
                ></div>
              </div>
            </div>
          </div>
        </section>

      </div>

      <Footer />
    </div>
  );
};

export default Contact;
