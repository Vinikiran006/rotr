import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Star } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

interface Newsletter {
  image: string;
  link: string;
}

interface Review {
  name: string;
  text: string;
  rating: number;
}

const newsletters: Newsletter[] = [
  {
    image: "/newsletters/q1.png",
    link: "/newsletters/q1.pdf",
  },
  {
    image: "/newsletters/q2.png",
    link: "/newsletters/q2.pdf",
  },
  {
    image: "/newsletters/q3.png",
    link: "/newsletters/q3.pdf",
  },
  {
    image: "/newsletters/q4.png",
    link: "/newsletters/q4.pdf",
  },
];

const reviews: Review[] = [
  {
    name: "Aishwarya ",
    text: "Amazing experience with Rotaract BMSY! The community service projects are truly impactful.",
    rating: 5,
  },
  {
    name: "Vinith",
    text: "Great leadership opportunities and a wonderful team to work with! The mentorship and support from fellow members have helped me grow both personally and professionally. Highly recommend joining if you're looking to make an impact while having fun.",
    rating: 4,
  },
  {
    name: "Saanvi",
    text: "The workshops and events are well organized. Really helped me grow personally and professionally.",
    rating: 5,
  },
];

const Blog: React.FC = () => (
  <div className="min-h-screen bg-gradient-to-br from-deep-base via-section-bg to-deep-base text-white font-poppins">
    <Header />

    <div className="pt-24 pb-20">
      <div className="container mx-auto px-6">

        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 text-transparent bg-gradient-to-r from-accent-pink to-bright-purple bg-clip-text">
            Our Stories
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto font-light leading-relaxed">
            Discover the impact we're making through our community service initiatives, leadership programs, and youth development activities.
          </p>
        </div>

        {/* Newsletter Cards */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold mb-8 text-accent-pink text-center">
            2024-2025 Newsletters
          </h2>
          <div className="flex flex-row flex-wrap gap-8 overflow-x-auto justify-center">
            {newsletters.map((nl, index) => (
              <Card
                key={index}
                className="flex flex-col items-center bg-gradient-to-b from-gray-900/90 to-gray-800/80 rounded-2xl overflow-hidden border-none w-[260px] min-h-[450px]"
              >
                <img
                  src={nl.image}
                  className="w-full h-[400px] object-cover object-top"
                  loading="lazy"
                  style={{ aspectRatio: '3/5' }}
                />
                <CardContent className="flex flex-col items-center justify-center gap-4 py-5 px-3 w-full bg-gradient-to-t from-gray-900/60 to-transparent">
                  <a
                    href={nl.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2 rounded-lg font-semibold bg-gradient-to-r from-indigo-400 via-purple-500 to-pink-400 text-white hover:scale-105 transition"
                  >
                    View
                  </a>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Reviews Section */}
        <section className="py-20 px-2 bg-gradient-to-br from-[#0a0612] via-[#181024] to-[#181024] mt-16 rounded-2xl shadow-xl">
          <h2 className="text-4xl font-bold text-center mb-12 text-[#ffcc29] drop-shadow-lg">
            What Our Members Say
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {reviews.map((review, index) => (
              <Card
                key={index}
                className="bg-gradient-to-br from-dark-accent/30 to-purple-accent/30 backdrop-blur-sm rounded-2xl overflow-hidden group hover:bg-gradient-to-br hover:from-purple-accent/40 hover:to-bright-purple/30 transition-all duration-500 border border-accent-pink/20 hover:border-accent-pink/40 transform hover:scale-105"
              >
                <CardContent className="p-8">
                  {/* <div className="flex mb-4">
                    {[...Array(review.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-[#ffcc29] text-[#ffcc29] drop-shadow" />
                    ))}
                  </div> */}
                  <p className="text-white mb-4 italic text-lg">"{review.text}"</p>
                  <p className="text-[#b983ff] font-semibold">- {review.name}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>
      </div>
    </div>

    <Footer />
  </div>
);

export default Blog;
