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
  const categories = [{
    id: 'all',
    name: 'All Work',
    icon: Camera
  }, {
    id: 'cuts',
    name: 'Premium Cuts',
    icon: Scissors
  }, {
    id: 'fades',
    name: 'Master Fades',
    icon: Crown
  }, {
    id: 'styling',
    name: 'Artistic Styling',
    icon: Sparkles
  }];
  const galleryImages = [{
    id: 1,
    src: "/lovable-uploads/8d2b224b-ff6b-465f-8fc9-9586e3a6f604.png",
    title: "Precision Beard Work",
    category: "styling",
    description: "Expert beard trimming with professional technique"
  }, {
    id: 2,
    src: "/lovable-uploads/26b3f617-2a98-4a0e-8a44-3a381fffdc88.png",
    title: "Classic Gentleman's Cut",
    category: "cuts",
    description: "Traditional barbering with modern sophistication"
  }, {
    id: 3,
    src: "/lovable-uploads/cf73a6fe-1651-4534-9358-22d44f91d861.png",
    title: "Precision Cutting",
    category: "cuts",
    description: "Meticulous attention to detail in every cut"
  }, {
    id: 4,
    src: "/lovable-uploads/ca682541-49ab-4e1e-9ded-5a9c67dd147b.png",
    title: "Master Hair Cutting",
    category: "cuts",
    description: "Professional hair cutting with artistic precision"
  }, {
    id: 5,
    src: "/lovable-uploads/d5bf8c86-6155-48e8-930f-c359dd40846c.png",
    title: "Beard Artistry",
    category: "styling",
    description: "Artistic beard styling and maintenance"
  }, {
    id: 6,
    src: "/lovable-uploads/f831492b-4adb-4032-9dc9-e9130ee95cb9.png",
    title: "Modern Fade",
    category: "fades",
    description: "Contemporary fade with sharp lines"
  }];
  const stats = [{
    number: "500+",
    label: "Masterpieces Created",
    icon: Award
  }, {
    number: "98%",
    label: "Client Satisfaction",
    icon: Star
  }, {
    number: "15+",
    label: "Years of Excellence",
    icon: Users
  }];
  const filteredImages = selectedCategory === 'all' ? galleryImages : galleryImages.filter(img => img.category === selectedCategory);
  const handleBookNow = () => {
    navigate('/contact');
  };
  return <div className="min-h-screen bg-white">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden pt-20">
        <div className="container mx-auto px-4 relative z-10 text-center">
          <div className="animate-fade-in">
            <div className="inline-flex items-center px-6 py-3 bg-[#173d26]/10 rounded-full mb-8 border border-[#173d26]/20">
              <Camera className="h-5 w-5 text-[#173d26] mr-3" />
              <span className="text-[#173d26] font-montserrat font-semibold">Our Work Portfolio Gallery</span>
            </div>
            
            <h1 className="text-6xl md:text-8xl font-montserrat font-black text-[#173d26] leading-tight mb-8">
              <span className="bg-gradient-to-r from-[#efe0bf] to-[#f0c515] bg-clip-text text-[#937800]">Masterful</span>
              <br />
              <span className="text-[#173d26]">Creations</span>
            </h1>
            
            <p className="text-xl md:text-2xl text-[#173d26]/70 font-montserrat max-w-4xl mx-auto leading-relaxed mb-12">
              Explore our collection of premium cuts, artistic designs, and transformative grooming experiences. 
              Each image tells a story of craftsmanship and style.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto mb-12">
              {stats.map((stat, index) => <div key={stat.label} className="text-center group">
                  <div className="flex justify-center mb-4">
                    <div className="w-16 h-16 bg-[#173d26]/10 border border-[#173d26]/20 rounded-3xl flex items-center justify-center group-hover:bg-[#173d26] group-hover:scale-110 transition-all duration-300">
                      <stat.icon className="h-8 w-8 text-[#173d26] group-hover:text-white transition-colors duration-300" />
                    </div>
                  </div>
                  <div className="text-4xl font-montserrat font-bold text-[#173d26] mb-2">
                    {stat.number}
                  </div>
                  <div className="text-[#173d26]/70 font-montserrat">
                    {stat.label}
                  </div>
                </div>)}
            </div>

            <Button onClick={handleBookNow} className="bg-gradient-to-r from-[#937800] to-[#f0c515] text-[#173d26] hover:from-[#f0c515] hover:to-[#efe0bf] font-montserrat font-bold text-lg px-10 py-4 rounded-2xl transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl">
              Book Your Session
            </Button>
          </div>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-4 mb-16">
            {categories.map(category => <button key={category.id} onClick={() => setSelectedCategory(category.id)} className={`flex items-center px-6 py-3 rounded-2xl font-montserrat font-semibold transition-all duration-300 ${selectedCategory === category.id ? 'bg-[#173d26] text-white shadow-lg scale-105' : 'bg-white text-[#173d26] hover:bg-[#173d26]/10 hover:text-[#173d26] shadow-md hover:shadow-lg hover:scale-105 border border-[#173d26]/20'}`}>
                <category.icon className="h-5 w-5 mr-2" />
                {category.name}
              </button>)}
          </div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="pb-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {filteredImages.map((image, index) => <Card key={image.id} className="group bg-white border-[#173d26]/10 shadow-lg hover:shadow-2xl transition-all duration-500 hover:scale-105 hover:-translate-y-2 overflow-hidden animate-scale-in" style={{
            animationDelay: `${index * 100}ms`
          }}>
                <div className="relative overflow-hidden">
                  <img src={image.src} alt={image.title} className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500" />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#173d26]/90 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="absolute bottom-4 left-4 right-4 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 opacity-0 group-hover:opacity-100">
                    <h3 className="text-white font-montserrat font-bold text-lg mb-1">
                      {image.title}
                    </h3>
                    <p className="text-[#f0c515] font-montserrat text-sm">
                      {image.description}
                    </p>
                  </div>
                </div>
              </Card>)}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-24 bg-gray-50">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-4xl mx-auto">
            <div className="inline-flex items-center px-6 py-3 bg-[#173d26]/10 rounded-full mb-8 border border-[#173d26]/20">
              <Star className="h-5 w-5 text-[#173d26] mr-3" />
              <span className="text-[#173d26] font-montserrat font-semibold">Ready for Your Transformation?</span>
            </div>
            
            <h2 className="text-5xl md:text-6xl font-montserrat font-bold mb-8 text-[#173d26]">
              Become Part of Our 
              <br />
              <span className="bg-gradient-to-r from-[#efe0bf] to-[#f0c515] bg-clip-text text-[#937800]">Gallery</span>
            </h2>
            
            <p className="text-xl text-[#173d26]/70 font-montserrat mb-12 max-w-2xl mx-auto">
              Experience the artistry that transforms not just your look, but your confidence. 
              Book your session and join our collection of satisfied clients.
            </p>
            
            <Button onClick={handleBookNow} className="bg-gradient-to-r from-[#efe0bf] to-[#f0c515] text-[#173d26] hover:from-[#f0c515] hover:to-[#efe0bf] font-montserrat font-bold text-xl px-12 py-6 rounded-2xl transition-all duration-300 hover:scale-105 shadow-lg">
              Book Your Experience
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>;
};
export default Gallery;