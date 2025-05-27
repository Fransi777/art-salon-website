
import React, { useState } from 'react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

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
    },
    {
      id: 7,
      url: "https://images.unsplash.com/photo-1621605815971-fbc98d665033?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      category: "Hair Art",
      title: "Geometric Lines",
      description: "Precise geometric hair patterns"
    },
    {
      id: 8,
      url: "https://images.unsplash.com/photo-1634449571010-02389ed0f9b0?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      category: "Classic Cuts",
      title: "Gentleman's Cut",
      description: "Sophisticated classic styling"
    },
    {
      id: 9,
      url: "https://images.unsplash.com/photo-1595476108010-b4d1f102b1b1?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      category: "Fades",
      title: "High Fade",
      description: "High contrast fade with texture"
    }
  ];

  const filteredImages = selectedCategory === 'All' 
    ? galleryImages 
    : galleryImages.filter(img => img.category === selectedCategory);

  return (
    <div className="min-h-screen bg-obsidian">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-forest via-forest/70 to-transparent z-10"></div>
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1503951914875-452162b0f3f1?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80')] bg-cover bg-center"></div>
        
        <div className="relative z-20 container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-7xl font-montserrat font-black text-gold mb-6 animate-fade-in">
              Our <span className="font-playfair italic">Gallery</span>
            </h1>
            <p className="text-xl md:text-2xl text-white font-montserrat font-light animate-fade-in">
              Showcasing the Art of Premium Barbering
            </p>
          </div>
        </div>
      </section>

      {/* Filter Section */}
      <section className="py-12 bg-forest">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category) => (
              <Button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-3 rounded-full font-montserrat font-semibold transition-all duration-300 hover:scale-105 ${
                  selectedCategory === category
                    ? 'bg-gold text-forest'
                    : 'bg-transparent border border-gold text-gold hover:bg-gold hover:text-forest'
                }`}
              >
                {category}
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-20 bg-obsidian">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredImages.map((image, index) => (
              <Card 
                key={image.id} 
                className={`group bg-forest border-bronze hover:border-gold transition-all duration-500 hover:scale-105 overflow-hidden animate-scale-in`}
                style={{animationDelay: `${index * 100}ms`}}
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
                    <p className="text-gray-300 font-montserrat">
                      {image.description}
                    </p>
                    <span className="inline-block mt-2 px-3 py-1 bg-bronze text-white text-sm font-montserrat rounded-full">
                      {image.category}
                    </span>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-gradient-to-r from-forest to-sage">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-montserrat font-bold text-gold mb-6 animate-fade-in">
            Ready for Your <span className="font-playfair italic">Transformation</span>?
          </h2>
          <p className="text-xl text-gray-300 font-montserrat mb-8 max-w-2xl mx-auto animate-fade-in">
            Experience the artistry and precision that goes into every cut. Book your appointment today.
          </p>
          <Button className="bg-gold text-forest hover:bg-gold/90 font-montserrat font-bold text-lg px-8 py-4 rounded-full transition-all duration-300 hover:scale-105 animate-glow">
            Book Your Session
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Gallery;
