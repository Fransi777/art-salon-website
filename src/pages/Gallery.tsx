
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
import { Scissors, Sparkles, Award, Users, Eye, Heart, Camera } from 'lucide-react';

const Gallery = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');

  const categories = ['All', 'Precision Cuts', 'Beard Artistry', 'Creative Styling', 'Classic Elegance'];

  const galleryImages = [
    {
      id: 1,
      url: "https://images.unsplash.com/photo-1622286346003-c4b4f5d3b7bc?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      category: "Precision Cuts",
      title: "Master Fade Technique",
      description: "Seamless blend with surgical precision"
    },
    {
      id: 2,
      url: "https://images.unsplash.com/photo-1521587760476-6c12a4b040da?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      category: "Beard Artistry",
      title: "Sculptured Perfection",
      description: "Expert beard shaping and design"
    },
    {
      id: 3,
      url: "https://images.unsplash.com/photo-1503951914875-452162b0f3f1?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      category: "Creative Styling",
      title: "Artistic Expression",
      description: "Modern patterns with traditional craftsmanship"
    },
    {
      id: 4,
      url: "https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      category: "Classic Elegance",
      title: "Timeless Sophistication",
      description: "Classic cuts with contemporary refinement"
    },
    {
      id: 5,
      url: "https://images.unsplash.com/photo-1622902046580-2b47f47f5471?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      category: "Precision Cuts",
      title: "Ultra-Clean Finish",
      description: "Impeccable skin fade mastery"
    },
    {
      id: 6,
      url: "https://images.unsplash.com/photo-1588516903720-8ceb67f9ef84?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      category: "Beard Artistry",
      title: "Complete Transformation",
      description: "Full beard grooming excellence"
    }
  ];

  const stats = [
    { icon: Users, number: "1,500+", label: "Masterpieces Created" },
    { icon: Award, number: "15+", label: "Years of Excellence" },
    { icon: Scissors, number: "50+", label: "Master Artisans" },
    { icon: Heart, number: "98%", label: "Client Satisfaction" }
  ];

  const filteredImages = selectedCategory === 'All' 
    ? galleryImages 
    : galleryImages.filter(img => img.category === selectedCategory);

  return (
    <div className="min-h-screen bg-gradient-to-br from-white via-gray-50 to-sage/5">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden pt-20">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-br from-obsidian/5 via-sage/10 to-gold/5"></div>
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-sage/20 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-1/3 right-1/4 w-64 h-64 bg-gold/20 rounded-full blur-2xl animate-pulse" style={{animationDelay: '2s'}}></div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center space-y-8">
            <div className="animate-fade-in">
              <div className="inline-flex items-center px-6 py-3 bg-sage/10 rounded-full mb-8">
                <Camera className="h-5 w-5 text-sage mr-2" />
                <span className="text-sage font-montserrat font-semibold">Visual Portfolio</span>
              </div>
              <h1 className="text-7xl md:text-8xl font-montserrat font-black text-obsidian leading-tight mb-6">
                Our <span className="bg-gradient-to-r from-sage to-gold bg-clip-text text-transparent">Artistry</span>
              </h1>
              <h2 className="text-5xl md:text-6xl font-playfair italic text-gray-600 mb-8">
                Showcase
              </h2>
            </div>
            
            <p className="text-xl text-gray-600 font-montserrat max-w-4xl mx-auto leading-relaxed animate-fade-in" style={{animationDelay: '0.3s'}}>
              Every cut tells a story. Every style reflects mastery. Explore our gallery of transformative work where traditional barbering meets contemporary artistry.
            </p>

            {/* Stats Section */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 pt-16 animate-fade-in max-w-4xl mx-auto" style={{animationDelay: '0.6s'}}>
              {stats.map((stat, index) => (
                <div key={index} className="text-center group">
                  <div className="w-16 h-16 bg-sage/10 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:bg-sage group-hover:scale-110 transition-all duration-300">
                    <stat.icon className="w-8 h-8 text-sage group-hover:text-white transition-colors duration-300" />
                  </div>
                  <div className="text-3xl font-montserrat font-black text-obsidian mb-2">{stat.number}</div>
                  <div className="text-sm font-montserrat text-gray-600">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Featured Carousel */}
      <section className="py-24 bg-gradient-to-br from-white to-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-4 py-2 bg-gold/10 rounded-full mb-6">
              <Eye className="h-4 w-4 text-gold mr-2" />
              <span className="text-gold font-montserrat font-semibold text-sm">Featured Work</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-montserrat font-bold text-obsidian mb-4">
              Latest <span className="bg-gradient-to-r from-gold to-sage bg-clip-text text-transparent">Masterpieces</span>
            </h2>
            <p className="text-lg text-gray-600 font-montserrat max-w-2xl mx-auto">Our most recent creations showcasing technical excellence and artistic vision</p>
          </div>
          
          <Carousel className="w-full max-w-6xl mx-auto">
            <CarouselContent>
              {galleryImages.slice(0, 4).map((image) => (
                <CarouselItem key={image.id} className="md:basis-1/2 lg:basis-1/3">
                  <Card className="group bg-white border-0 shadow-lg hover:shadow-2xl overflow-hidden transition-all duration-500 hover:scale-105">
                    <div className="relative">
                      <img 
                        src={image.url} 
                        alt={image.title}
                        className="w-full h-80 object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-obsidian/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                      <div className="absolute bottom-0 left-0 right-0 p-6 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                        <h3 className="text-xl font-montserrat font-bold text-white mb-2">
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
            <CarouselPrevious className="bg-sage text-white hover:bg-sage/90 border-0 shadow-lg" />
            <CarouselNext className="bg-sage text-white hover:bg-sage/90 border-0 shadow-lg" />
          </Carousel>
        </div>
      </section>

      {/* Filter Section */}
      <section className="py-16 bg-gradient-to-r from-gray-50 to-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h3 className="text-2xl font-montserrat font-bold text-obsidian mb-4">Browse by Category</h3>
            <p className="text-gray-600 font-montserrat">Discover our specialized techniques and styles</p>
          </div>
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category) => (
              <Button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-8 py-3 rounded-xl font-montserrat font-semibold transition-all duration-300 hover:scale-105 ${
                  selectedCategory === category
                    ? 'bg-sage text-white shadow-lg shadow-sage/25'
                    : 'bg-white border-2 border-sage text-sage hover:bg-sage hover:text-white shadow-lg'
                }`}
              >
                {category}
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-24 bg-gradient-to-br from-white via-gray-50 to-sage/5">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredImages.map((image, index) => (
              <Card 
                key={image.id} 
                className="group bg-white border-0 shadow-lg hover:shadow-2xl transition-all duration-500 hover:scale-105 hover:-translate-y-2 overflow-hidden"
              >
                <div className="relative">
                  <img 
                    src={image.url} 
                    alt={image.title}
                    className="w-full h-80 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-obsidian/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="w-12 h-12 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center">
                      <Eye className="h-5 w-5 text-white" />
                    </div>
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 p-6 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                    <h3 className="text-xl font-montserrat font-bold text-white mb-2">
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
