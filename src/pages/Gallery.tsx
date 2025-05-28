
import React, { useState } from 'react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { useNavigate } from 'react-router-dom';
import { Camera, Award, Users, Star, Scissors, Crown, Sparkles } from 'lucide-react';

const Gallery = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const navigate = useNavigate();

  const categories = [
    { id: 'all', name: 'All Work', icon: Camera },
    { id: 'cuts', name: 'Premium Cuts', icon: Scissors },
    { id: 'fades', name: 'Master Fades', icon: Crown },
    { id: 'styling', name: 'Artistic Styling', icon: Sparkles },
  ];

  const galleryImages = [
    {
      id: 1,
      src: "/lovable-uploads/2f73b8eb-c08c-42d9-ad2d-8c3b4c89c695.png",
      title: "Precision Fade",
      category: "fades",
      description: "Modern skin fade with sharp line work"
    },
    {
      id: 2,
      src: "/lovable-uploads/400a0cf3-6dc8-4b52-a674-af3495eb386b.png",
      title: "Classic Styling",
      category: "styling",
      description: "Traditional barbering with contemporary flair"
    },
    {
      id: 3,
      src: "/lovable-uploads/cd3c3732-5a9c-4a54-b64b-f50d0e71cab0.png",
      title: "Signature Cut",
      category: "cuts",
      description: "Custom cut tailored to personal style"
    },
    {
      id: 4,
      src: "https://images.unsplash.com/photo-1622286346003-c4b4f5d3b7bc?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      title: "Beard Sculpting",
      category: "styling",
      description: "Expert beard trimming and shaping"
    },
    {
      id: 5,
      src: "https://images.unsplash.com/photo-1503951914875-452162b0f3f1?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      title: "Master's Touch",
      category: "cuts",
      description: "Artisan craftsmanship in every detail"
    },
    {
      id: 6,
      src: "https://images.unsplash.com/photo-1521587760476-6c12a4b040da?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      title: "Fresh Fade",
      category: "fades",
      description: "Clean, sharp fade with precise execution"
    },
    {
      id: 7,
      src: "https://images.unsplash.com/photo-1599351431202-1e0f0137899a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      title: "Classic Gentleman",
      category: "cuts",
      description: "Timeless style for the modern man"
    },
    {
      id: 8,
      src: "https://images.unsplash.com/photo-1562004760-aceed7bb0fe3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      title: "Contemporary Edge",
      category: "styling",
      description: "Bold styling with modern techniques"
    }
  ];

  const stats = [
    { number: "500+", label: "Masterpieces Created", icon: Award },
    { number: "98%", label: "Client Satisfaction", icon: Star },
    { number: "15+", label: "Years of Excellence", icon: Users },
  ];

  const filteredImages = selectedCategory === 'all' 
    ? galleryImages 
    : galleryImages.filter(img => img.category === selectedCategory);

  const handleBookNow = () => {
    navigate('/contact');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-sage/5">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden pt-20">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-br from-obsidian/10 via-sage/5 to-gold/10"></div>
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-sage/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-1/3 right-1/4 w-64 h-64 bg-gold/10 rounded-full blur-2xl animate-pulse" style={{animationDelay: '2s'}}></div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10 text-center">
          <div className="animate-fade-in">
            <div className="inline-flex items-center px-6 py-3 bg-sage/10 rounded-full mb-8">
              <Camera className="h-5 w-5 text-sage mr-3" />
              <span className="text-sage font-montserrat font-semibold">Our Work Portfolio Gallery</span>
            </div>
            
            <h1 className="text-6xl md:text-8xl font-montserrat font-black text-obsidian leading-tight mb-8">
              <span className="bg-gradient-to-r from-sage to-gold bg-clip-text text-transparent">Masterful</span>
              <br />
              Creations
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-600 font-montserrat max-w-4xl mx-auto leading-relaxed mb-12">
              Explore our collection of premium cuts, artistic designs, and transformative grooming experiences. 
              Each image tells a story of craftsmanship and style.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto mb-12">
              {stats.map((stat, index) => (
                <div key={stat.label} className="text-center group">
                  <div className="flex justify-center mb-4">
                    <div className="w-16 h-16 bg-sage/10 rounded-3xl flex items-center justify-center group-hover:bg-sage group-hover:scale-110 transition-all duration-300">
                      <stat.icon className="h-8 w-8 text-sage group-hover:text-white transition-colors duration-300" />
                    </div>
                  </div>
                  <div className="text-4xl font-montserrat font-bold text-obsidian mb-2">
                    {stat.number}
                  </div>
                  <div className="text-gray-600 font-montserrat">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>

            <Button 
              onClick={handleBookNow}
              className="bg-sage text-white hover:bg-sage/90 font-montserrat font-bold text-lg px-10 py-4 rounded-2xl transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl"
            >
              Book Your Session
            </Button>
          </div>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-4 mb-16">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`flex items-center px-6 py-3 rounded-2xl font-montserrat font-semibold transition-all duration-300 ${
                  selectedCategory === category.id
                    ? 'bg-sage text-white shadow-lg scale-105'
                    : 'bg-white text-gray-600 hover:bg-sage/10 hover:text-sage shadow-md hover:shadow-lg hover:scale-105'
                }`}
              >
                <category.icon className="h-5 w-5 mr-2" />
                {category.name}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="pb-24">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {filteredImages.map((image, index) => (
              <Card 
                key={image.id} 
                className="group bg-white border-0 shadow-lg hover:shadow-2xl transition-all duration-500 hover:scale-105 hover:-translate-y-2 overflow-hidden animate-scale-in"
                style={{animationDelay: `${index * 100}ms`}}
              >
                <div className="relative overflow-hidden">
                  <img 
                    src={image.src} 
                    alt={image.title}
                    className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-obsidian/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="absolute bottom-4 left-4 right-4 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 opacity-0 group-hover:opacity-100">
                    <h3 className="text-white font-montserrat font-bold text-lg mb-1">
                      {image.title}
                    </h3>
                    <p className="text-white/90 font-montserrat text-sm">
                      {image.description}
                    </p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-24 bg-gradient-to-br from-obsidian via-gray-900 to-sage text-white">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-4xl mx-auto">
            <div className="inline-flex items-center px-6 py-3 bg-white/10 rounded-full mb-8">
              <Star className="h-5 w-5 text-gold mr-3" />
              <span className="text-gold font-montserrat font-semibold">Ready for Your Transformation?</span>
            </div>
            
            <h2 className="text-5xl md:text-6xl font-montserrat font-bold mb-8">
              Become Part of Our 
              <br />
              <span className="bg-gradient-to-r from-gold to-sage bg-clip-text text-transparent">Gallery</span>
            </h2>
            
            <p className="text-xl text-gray-300 font-montserrat mb-12 max-w-2xl mx-auto">
              Experience the artistry that transforms not just your look, but your confidence. 
              Book your session and join our collection of satisfied clients.
            </p>
            
            <Button 
              onClick={handleBookNow}
              className="bg-gold text-obsidian hover:bg-gold/90 font-montserrat font-bold text-xl px-12 py-6 rounded-2xl transition-all duration-300 hover:scale-105 shadow-lg"
            >
              Book Your Experience
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Gallery;
