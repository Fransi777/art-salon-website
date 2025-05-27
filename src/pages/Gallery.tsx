
import React, { useState } from 'react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { 
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Scissors, Sparkles, Award, Users } from 'lucide-react';

const Gallery = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');

  const categories = ['All', 'Fades', 'Beard Work', 'Hair Art', 'Classic Cuts'];

  const galleryImages = [
    {
      id: 1,
      url: "https://images.unsplash.com/photo-1622286346003-c4b4f5d3b7bc?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      category: "Fades",
      title: "Precision Fade",
      description: "Clean, sharp fade with perfect blend"
    },
    {
      id: 2,
      url: "https://images.unsplash.com/photo-1521587760476-6c12a4b040da?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      category: "Beard Work",
      title: "Beard Sculpting",
      description: "Expert beard trimming and shaping"
    },
    {
      id: 3,
      url: "https://images.unsplash.com/photo-1503951914875-452162b0f3f1?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      category: "Hair Art",
      title: "Creative Design",
      description: "Artistic hair patterns and designs"
    },
    {
      id: 4,
      url: "https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      category: "Classic Cuts",
      title: "Classic Style",
      description: "Timeless cut with modern precision"
    },
    {
      id: 5,
      url: "https://images.unsplash.com/photo-1622902046580-2b47f47f5471?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      category: "Fades",
      title: "Skin Fade",
      description: "Ultra-clean skin fade technique"
    },
    {
      id: 6,
      url: "https://images.unsplash.com/photo-1588516903720-8ceb67f9ef84?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      category: "Beard Work",
      title: "Full Beard Trim",
      description: "Complete beard grooming service"
    }
  ];

  const stats = [
    { icon: Users, number: "500+", label: "Happy Clients" },
    { icon: Scissors, number: "10+", label: "Years Experience" },
    { icon: Award, number: "25+", label: "Awards Won" },
    { icon: Sparkles, number: "1000+", label: "Cuts Delivered" }
  ];

  const filteredImages = selectedCategory === 'All' 
    ? galleryImages 
    : galleryImages.filter(img => img.category === selectedCategory);

  return (
    <div className="min-h-screen bg-gradient-to-br from-forest via-obsidian to-forest">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
        <div className="absolute inset-0 bg-gradient-to-br from-forest/90 via-obsidian/90 to-sage/90"></div>
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-gold/10 rounded-full blur-3xl animate-float"></div>
          <div className="absolute bottom-1/3 right-1/4 w-48 h-48 bg-bronze/10 rounded-full blur-2xl animate-float" style={{animationDelay: '2s'}}></div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center space-y-8">
            <div className="animate-fade-in">
              <h1 className="text-7xl md:text-8xl font-montserrat font-black text-gold leading-tight mb-4">
                Our Work
              </h1>
              <h2 className="text-5xl md:text-6xl font-playfair italic text-sage mb-6">
                Portfolio
              </h2>
              <h3 className="text-4xl md:text-5xl font-montserrat font-bold text-gold">
                Gallery
              </h3>
            </div>
            
            <p className="text-xl text-gray-300 font-montserrat max-w-3xl mx-auto leading-relaxed animate-fade-in" style={{animationDelay: '0.3s'}}>
              Explore our collection of premium cuts, artistic designs, and transformative grooming experiences. 
              Each image tells a story of craftsmanship and style.
            </p>

            {/* Stats Section */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 pt-12 animate-fade-in" style={{animationDelay: '0.6s'}}>
              {stats.map((stat, index) => (
                <div key={index} className="text-center group">
                  <div className="w-16 h-16 bg-gold/20 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-gold/30 transition-all duration-300 group-hover:scale-110">
                    <stat.icon className="w-8 h-8 text-gold" />
                  </div>
                  <div className="text-3xl font-montserrat font-black text-gold mb-2">{stat.number}</div>
                  <div className="text-sm font-montserrat text-gray-300">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Featured Carousel */}
      <section className="py-20 bg-gradient-to-r from-sage/20 to-bronze/20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-montserrat font-bold text-gold mb-4">Featured Work</h2>
            <p className="text-lg text-gray-300 font-montserrat">Our latest masterpieces</p>
          </div>
          
          <Carousel className="w-full max-w-5xl mx-auto">
            <CarouselContent>
              {galleryImages.slice(0, 4).map((image) => (
                <CarouselItem key={image.id} className="md:basis-1/2 lg:basis-1/3">
                  <Card className="group bg-obsidian/50 border-gold/20 overflow-hidden hover:border-gold/50 transition-all duration-500">
                    <div className="relative">
                      <img 
                        src={image.url} 
                        alt={image.title}
                        className="w-full h-80 object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-obsidian via-transparent to-transparent opacity-0 group-hover:opacity-90 transition-opacity duration-300"></div>
                      <div className="absolute bottom-0 left-0 right-0 p-6 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                        <h3 className="text-xl font-montserrat font-bold text-gold mb-2">
                          {image.title}
                        </h3>
                        <p className="text-gray-300 font-montserrat mb-3">
                          {image.description}
                        </p>
                        <span className="inline-block px-3 py-1 bg-sage text-white text-sm font-montserrat rounded-full">
                          {image.category}
                        </span>
                      </div>
                    </div>
                  </Card>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="bg-gold text-forest hover:bg-gold/90" />
            <CarouselNext className="bg-gold text-forest hover:bg-gold/90" />
          </Carousel>
        </div>
      </section>

      {/* Filter Section */}
      <section className="py-12 bg-gradient-to-r from-forest/50 to-sage/50">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category) => (
              <Button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-8 py-3 rounded-full font-montserrat font-semibold transition-all duration-300 hover:scale-105 ${
                  selectedCategory === category
                    ? 'bg-gold text-forest shadow-lg shadow-gold/25'
                    : 'bg-transparent border-2 border-gold text-gold hover:bg-gold hover:text-forest'
                }`}
              >
                {category}
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-20 bg-gradient-to-br from-obsidian via-forest to-sage">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredImages.map((image, index) => (
              <Card 
                key={image.id} 
                className="group bg-obsidian/30 border-gold/20 hover:border-gold/50 transition-all duration-500 hover:scale-105 hover:-translate-y-2 overflow-hidden backdrop-blur-sm"
              >
                <div className="relative">
                  <img 
                    src={image.url} 
                    alt={image.title}
                    className="w-full h-80 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-obsidian via-transparent to-transparent opacity-0 group-hover:opacity-90 transition-opacity duration-300"></div>
                  <div className="absolute bottom-0 left-0 right-0 p-6 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                    <h3 className="text-xl font-montserrat font-bold text-gold mb-2">
                      {image.title}
                    </h3>
                    <p className="text-gray-300 font-montserrat mb-3">
                      {image.description}
                    </p>
                    <span className="inline-block px-3 py-1 bg-sage text-white text-sm font-montserrat rounded-full">
                      {image.category}
                    </span>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Gallery;
