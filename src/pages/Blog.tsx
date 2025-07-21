import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { ArrowRight, Calendar, User, Tag, Star } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const Blog = () => {
  const blogPosts = [
    {
      id: 1,
      title: "Digital Literacy Drive: Bridging the Technology Gap",
      excerpt: "Our recent digital literacy initiative reached over 200 community members, teaching essential computer skills and internet safety.",
      image: "https://images.unsplash.com/photo-1527576539890-dfa815648363?w=600&h=400&fit=crop",
      author: "Team Rotaract BMSY",
      date: "June 15, 2024",
      category: "Community Service",
      readTime: "5 min read"
    },
    {
      id: 2,
      title: "Tree Plantation Drive: Growing a Greener Tomorrow",
      excerpt: "300 saplings planted across Yelahanka in our environmental conservation initiative, involving local schools and communities.",
      image: "https://images.unsplash.com/photo-1500673922987-e212871fec22?w=600&h=400&fit=crop",
      author: "Environmental Team",
      date: "June 10, 2024",
      category: "Environment",
      readTime: "4 min read"
    },
    {
      id: 3,
      title: "Youth Leadership Summit 2024: Inspiring Change Makers",
      excerpt: "100+ young leaders gathered to discuss community challenges and innovative solutions for sustainable development.",
      image: "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?w=600&h=400&fit=crop",
      author: "Leadership Team",
      date: "June 5, 2024",
      category: "Leadership",
      readTime: "6 min read"
    },
    {
      id: 4,
      title: "Health & Wellness Camp: Caring for Community",
      excerpt: "Free health checkups, awareness sessions, and medical consultations provided to 500+ community members.",
      image: "https://images.unsplash.com/photo-1470813740244-df37b8c1edcb?w=600&h=400&fit=crop",
      author: "Health Team",
      date: "May 28, 2024",
      category: "Health",
      readTime: "7 min read"
    },
    {
      id: 5,
      title: "Educational Resource Distribution: Supporting Learning",
      excerpt: "Books, stationery, and digital learning tools distributed to underprivileged students across 10 local schools.",
      image: "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?w=600&h=400&fit=crop",
      author: "Education Team",
      date: "May 20, 2024",
      category: "Education",
      readTime: "5 min read"
    },
    {
      id: 6,
      title: "Blood Donation Drive: Saving Lives Together",
      excerpt: "Annual blood donation camp collected 150+ units, potentially saving over 450 lives in our community.",
      image: "https://images.unsplash.com/photo-1500375592092-40eb2168fd21?w=600&h=400&fit=crop",
      author: "Health Team",
      date: "May 15, 2024",
      category: "Health",
      readTime: "4 min read"
    }
  ];

  const categories = ["All", "Community Service", "Environment", "Leadership", "Health", "Education"];

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
              Discover the impact we're making through our community service initiatives, 
              leadership programs, and youth development activities.
            </p>
          </div>

          {/* Blog Posts Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post) => (
              <article 
                key={post.id}
                className="bg-gradient-to-br from-dark-accent/30 to-purple-accent/30 backdrop-blur-sm rounded-2xl overflow-hidden group hover:bg-gradient-to-br hover:from-purple-accent/40 hover:to-bright-purple/30 transition-all duration-500 border border-accent-pink/20 hover:border-accent-pink/40 transform hover:scale-105 hover:shadow-2xl hover:shadow-accent-pink/10"
              >
                <div className="relative overflow-hidden">
                  <img 
                    src={post.image} 
                    alt={post.title}
                    className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute top-4 left-4 bg-gradient-to-r from-accent-pink to-bright-purple text-white px-3 py-1 rounded-full text-sm font-medium">
                    {post.category}
                  </div>
                </div>
                
                <div className="p-6">
                  <h3 className="text-lg font-semibold mb-3 text-white group-hover:text-pink-bright transition-colors duration-300 line-clamp-2">
                    {post.title}
                  </h3>
                  <p className="text-gray-300 text-sm mb-4 line-clamp-3">
                    {post.excerpt}
                  </p>
                  
                  <div className="flex items-center text-xs text-gray-400 mb-4 space-x-4">
                    <div className="flex items-center space-x-1">
                      <User size={14} />
                      <span>{post.author}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Calendar size={14} />
                      <span>{post.date}</span>
                    </div>
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <span className="text-xs text-gray-400">{post.readTime}</span>
                    <Button 
                      size="sm"
                      className="bg-gradient-to-r from-[#a020f0] via-[#ff5e62] to-[#ffcc29] hover:from-[#ff5e62] hover:to-[#ffcc29] text-white font-semibold shadow-lg border-none"
                    >
                      Read More
                      <ArrowRight className="ml-1 w-3 h-3 group-hover/btn:translate-x-1 transition-transform duration-300" />
                    </Button>
                  </div>
                </div>
              </article>
            ))}
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
                  className="bg-gradient-to-br from-dark-accent/30 to-purple-accent/30 backdrop-blur-sm rounded-2xl overflow-hidden group hover:bg-gradient-to-br hover:from-purple-accent/40 hover:to-bright-purple/30 transition-all duration-500 border border-accent-pink/20 hover:border-accent-pink/40 transform hover:scale-105 hover:shadow-2xl hover:shadow-accent-pink/10"
                >
                  <CardContent className="p-8">
                    <div className="flex mb-4">
                      {[...Array(review.rating)].map((_, i) => (
                        <Star key={i} className="w-5 h-5 fill-[#ffcc29] text-[#ffcc29] drop-shadow" />
                      ))}
                    </div>
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
};

export default Blog;
