import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Card, CardContent } from '@/components/ui/card';

interface Newsletter {
  title?: string;
  image?: string;
  link: string;
}

interface Review {
  name: string;
  text: string;
  rating: number;
}

/* ----------- 2025-2026 (NEW) ----------- */
const newslettersNew: Newsletter[] = [
  {
    image: "/newsletters/t1.png",
    link: "/newsletters/t1.pdf",
  },
  {
    image: "/newsletters/t2.png",
    link: "/newsletters/t2.pdf",
  },
  {
    image: "/newsletters/t3.png",
    link: "/newsletters/t3.pdf",
  },
  {
    image: "/newsletters/t4.png",
    link: "/newsletters/t4.pdf",
  },

];

/* ----------- 2024-2025 (OLD) ----------- */
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
    name: "Aishwarya",
    text: "Amazing experience with Rotaract BMSY! The community service projects are truly impactful.",
    rating: 5,
  },
  {
    name: "Vinith",
    text: "Great leadership opportunities and a wonderful team to work with! The mentorship helped me grow personally and professionally.",
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

        {/* ----------- NEWSLETTERS ----------- */}
        <div className="mb-20">

          {/* 2025-2026 */}
          <h2 className="text-3xl font-bold mb-8 text-accent-pink text-center">
            2025-2026 Newsletters
          </h2>

          <div className="flex flex-wrap gap-8 justify-center mb-16">
            {newslettersNew.map((nl, index) => (
              <Card
                key={"new-" + index}
                className="flex flex-col items-center bg-gradient-to-b from-gray-900/90 to-gray-800/80 rounded-2xl overflow-hidden border-none w-[260px] min-h-[450px]"
              >
                {nl.image ? (
                  <img
                    src={nl.image}
                    className="w-full h-[400px] object-cover object-top"
                  />
                ) : (
                  <div className="w-full h-[400px] flex flex-col items-center justify-center bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 p-6 text-center">
                    <span className="text-3xl font-bold text-white drop-shadow-md mb-2">New Release</span>
                    <span className="text-xl font-medium text-white/90">{nl.title || "Newsletter"}</span>
                  </div>
                )}
                <CardContent className="flex flex-col items-center py-5">
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

          {/* 2024-2025 */}
          <h2 className="text-3xl font-bold mb-8 text-accent-pink text-center">
            2024-2025 Newsletters
          </h2>

          <div className="flex flex-wrap gap-8 justify-center">
            {newsletters.map((nl, index) => (
              <Card
                key={"old-" + index}
                className="flex flex-col items-center bg-gradient-to-b from-gray-900/90 to-gray-800/80 rounded-2xl overflow-hidden border-none w-[260px] min-h-[450px]"
              >
                {nl.image ? (
                  <img
                    src={nl.image}
                    className="w-full h-[400px] object-cover object-top"
                  />
                ) : (
                  <div className="w-full h-[400px] flex flex-col items-center justify-center bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 p-6 text-center">
                    <span className="text-3xl font-bold text-white drop-shadow-md mb-2">New Release</span>
                    <span className="text-xl font-medium text-white/90">{nl.title || "Newsletter"}</span>
                  </div>
                )}
                <CardContent className="flex flex-col items-center py-5">
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

        {/* ----------- REVIEWS ----------- */}
        <section className="py-20 px-2 bg-gradient-to-br from-[#0a0612] via-[#181024] to-[#181024] mt-16 rounded-2xl shadow-xl">
          <h2 className="text-4xl font-bold text-center mb-12 text-[#ffcc29]">
            What Our Members Say
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            {reviews.map((review, index) => (
              <Card
                key={index}
                className="bg-gradient-to-br from-dark-accent/30 to-purple-accent/30 backdrop-blur-sm rounded-2xl p-6 hover:scale-105 transition"
              >
                <CardContent>
                  <p className="text-white mb-4 italic">"{review.text}"</p>
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
