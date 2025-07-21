
import { useState } from 'react';

const PolaroidBanner = () => {
  const topRowPolaroids = [
    {
      id: 1,
      image: '/lovable-uploads/image1.png',
      caption: 'Pawsitivity',
      rotation: 'rotate-2'
    },
    {
      id: 2,
      image: '/lovable-uploads/image2.png',
      caption: 'Mind matters',
      rotation: '-rotate-1'
    },
    {
      id: 3,
      image: '/lovable-uploads/image3.png',
      caption: 'Project Disha felicitation',
      rotation: 'rotate-1'
    },
    {
      id: 4,
      image: '/lovable-uploads/image4.png',
      caption: 'Her Stories',
      rotation: '-rotate-2'
    },
    {
      id: 5,
      image: '/lovable-uploads/image5.png',
      caption: 'Yes to access',
      rotation: 'rotate-2'
    },
    {
      id: 6,
      image: '/lovable-uploads/image6.png',
      caption: 'Rota hikes',
      rotation: '-rotate-1'
    }
  ];

  const bottomRowPolaroids = [
    {
      id: 7,
      image: '/lovable-uploads/image7.png',
      caption: 'Project Sanjeevini',
      rotation: 'rotate-1'
    },
    {
      id: 8,
      image: '/lovable-uploads/image8.png',
      caption: 'Walkathon',
      rotation: '-rotate-2'
    },
    {
      id: 9,
      image: '/lovable-uploads/image9.png',
      caption: 'Tech Mitra',
      rotation: 'rotate-2'
    },
    {
      id: 10,
      image: '/lovable-uploads/image10.png',
      caption: 'Snow Lit',
      rotation: '-rotate-1'
    },
    {
      id: 11,
      image: '/lovable-uploads/image14.png',
      caption: 'Prabodhan 3.0',
      rotation: 'rotate-1'
    },
    {
      id: 12,
      image: '/lovable-uploads/image12.png',
      caption: 'Secret Santa',
      rotation: '-rotate-2'
    }
  ];

  const PolaroidCard = ({ polaroid }: { polaroid: any }) => (
    <div 
      className={`flex-shrink-0 transform ${polaroid.rotation} hover:rotate-0 hover:scale-110 transition-all duration-500 group relative`}
    >
      <div className="bg-white p-4 shadow-2xl rounded-lg border border-gray-200 hover:shadow-accent-pink/20 hover:shadow-2xl">
        <img 
          src={polaroid.image}
          alt={polaroid.caption}
          className="w-56 h-56 object-cover rounded mb-4"
        />
        <p className="text-black text-center font-heading text-base font-medium">
          {polaroid.caption}
        </p>
        {/* Tape effect */}
        <div className="absolute -top-2 left-1/2 transform -translate-x-1/2 w-16 h-6 bg-yellow-200/70 rotate-12 rounded-sm"></div>
      </div>
    </div>
  );

  return (
    <section className="py-20 bg-deep-base overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-serif font-bold mb-6 text-transparent bg-gradient-to-r from-accent-pink to-bright-purple bg-clip-text">
            Moments That Matter
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto font-heading">
            Every picture tells a story of impact, community, and positive change.
          </p>
        </div>
        
        {/* Dual Layer Scrolling Container */}
        <div className="relative space-y-8">
          {/* Top Row - Moving Right */}
          <div className="relative">
            <div className="flex space-x-8 animate-scroll">
              {/* First set */}
              {topRowPolaroids.map((polaroid) => (
                <PolaroidCard key={polaroid.id} polaroid={polaroid} />
              ))}
              
              {/* Duplicate set for seamless loop */}
              {topRowPolaroids.map((polaroid) => (
                <PolaroidCard key={`duplicate-top-${polaroid.id}`} polaroid={polaroid} />
              ))}
            </div>
          </div>

          {/* Bottom Row - Moving Left */}
          <div className="relative">
            <div className="flex space-x-8 animate-scroll-reverse">
              {/* First set */}
              {bottomRowPolaroids.map((polaroid) => (
                <PolaroidCard key={polaroid.id} polaroid={polaroid} />
              ))}
              
              {/* Duplicate set for seamless loop */}
              {bottomRowPolaroids.map((polaroid) => (
                <PolaroidCard key={`duplicate-bottom-${polaroid.id}`} polaroid={polaroid} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PolaroidBanner;
