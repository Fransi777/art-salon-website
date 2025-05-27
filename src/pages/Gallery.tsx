
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
    <div className="min-h-screen bg-white">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center min-h-[80vh]">
            {/* Left Content */}
            <div className="lg:col-span-6 space-y-8">
              <div className="animate-fade-in">
                <h1 className="text-6xl md:text-7xl font-montserrat font-black text-obsidian leading-tight">
                  Our Work
                  <br />
                  <span className="text-obsidian">Portfolio</span>
                  <br />
                  <span className="font-playfair italic text-5xl md:text-6xl text-sage">Gallery</span>
                </h1>
              </div>
              
              <p className="text-lg text-gray-600 font-montserrat max-w-lg leading-relaxed">
                Explore our collection of premium cuts, artistic designs, and transformative grooming experiences. 
                Each image tells a story of craftsmanship and style.
              </p>

              {/* Filter Buttons */}
              <div className="flex flex-wrap gap-3 pt-4">
                {categories.slice(0, 3).map((category) => (
                  <Button
                    key={category}
                    onClick={() => setSelectedCategory(category)}
                    className={`px-6 py-3 rounded-full font-montserrat font-semibold transition-all duration-300 hover:scale-105 ${
                      selectedCategory === category
                        ? 'bg-sage text-white'
                        : 'bg-transparent border border-sage text-sage hover:bg-sage hover:text-white'
                    }`}
                  >
                    {category}
                  </Button>
                ))}
              </div>
            </div>

            {/* Right Content - Featured Image */}
            <div className="lg:col-span-6 relative">
              <div className="relative animate-slide-in-right">
                <div className="absolute inset-0 bg-gradient-to-br from-sage/20 to-bronze/20 rounded-3xl transform rotate-3"></div>
                <div className="relative bg-white rounded-3xl shadow-2xl p-4 transform -rotate-2 hover:rotate-0 transition-transform duration-500">
                  <img 
                    src="https://images.unsplash.com/photo-1622286346003-c4b4f5d3b7bc?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                    alt="Featured Work" 
                    className="w-full h-[500px] object-cover rounded-2xl"
                  />
                </div>
                <div className="absolute -top-8 -left-8 w-32 h-32 bg-gold/20 rounded-full blur-xl"></div>
                <div className="absolute -bottom-8 -right-8 w-24 h-24 bg-sage/20 rounded-full blur-lg"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Filter Section */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category) => (
              <Button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-3 rounded-full font-montserrat font-semibold transition-all duration-300 hover:scale-105 ${
                  selectedCategory === category
                    ? 'bg-sage text-white'
                    : 'bg-transparent border border-sage text-sage hover:bg-sage hover:text-white'
                }`}
              >
                {category}
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredImages.map((image, index) => (
              <Card 
                key={image.id} 
                className="group bg-white border-0 shadow-lg hover:shadow-xl transition-all duration-500 hover:scale-105 hover:-translate-y-2 overflow-hidden"
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
                    <span className="inline-block mt-2 px-3 py-1 bg-sage text-white text-sm font-montserrat rounded-full">
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
