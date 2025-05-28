
import React, { useEffect, useState } from 'react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';
import { useNavigate } from 'react-router-dom';
import { Scissors, Sparkles, Crown, Star, Users, Award, Calendar, Clock, Trophy, Shield } from 'lucide-react';

const Index = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const { toast } = useToast();
  const navigate = useNavigate();

  const heroImages = [
    "/lovable-uploads/2f73b8eb-c08c-42d9-ad2d-8c3b4c89c695.png",
    "/lovable-uploads/400a0cf3-6dc8-4b52-a674-af3495eb386b.png",
    "/lovable-uploads/cd3c3732-5a9c-4a54-b64b-f50d0e71cab0.png"
  ];

  useEffect(() => {
    setIsVisible(true);
    
    // Auto-rotate hero images with fade effect
    const imageInterval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % heroImages.length);
    }, 4000);

    return () => clearInterval(imageInterval);
  }, []);

  const handleBooking = (e: React.FormEvent) => {
    e.preventDefault();
    navigate('/contact');
  };

  const handleBookNow = () => {
    navigate('/contact');
  };

  const circularFeatures = [
    { title: "Premium Cuts", icon: Scissors, description: "Expert precision cuts" },
    { title: "Styling", icon: Sparkles, description: "Modern grooming" },
    { title: "VIP Service", icon: Crown, description: "Luxury experience" },
    { title: "Master Barbers", icon: Star, description: "15+ years experience" },
    { title: "Quality Tools", icon: Shield, description: "Professional equipment" },
    { title: "Awards", icon: Trophy, description: "Recognized excellence" }
  ];

  const testimonials = [
    {
      name: "Kebede Tadesse",
      text: "The Art delivers exceptional craftsmanship. Every cut is a masterpiece that perfectly suits my style!",
      rating: 5,
      role: "Business Executive"
    },
    {
      name: "Amanuel Bekele",
      text: "Unmatched skill and attention to detail. This is barbering elevated to art. Highly recommend!",
      rating: 5,
      role: "Creative Director"
    },
    {
      name: "Meles Alemu",
      text: "Premium experience from start to finish. The barbers truly understand modern Ethiopian style.",
      rating: 5,
      role: "Entrepreneur"
    },
    {
      name: "Henok Fikru",
      text: "Professional service with a personal touch. My go-to barbershop for special occasions.",
      rating: 5,
      role: "Marketing Manager"
    },
    {
      name: "Tesfaye Kidane",
      text: "Exceptional grooming experience. The Art sets the standard for premium barbershop services.",
      rating: 5,
      role: "Software Engineer"
    }
  ];

  return (
    <div className="min-h-screen">
      <Navigation />
      
      {/* Revolutionary Hero Section with Circular Clipper Layout */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20" style={{backgroundColor: '#173d26'}}>
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gold/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-1/3 right-1/4 w-64 h-64 bg-white/5 rounded-full blur-2xl animate-pulse" style={{animationDelay: '2s'}}></div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-16">
            <div className={`transition-all duration-1000 ${isVisible ? 'animate-fade-in' : 'opacity-0'}`}>
              <h1 className="text-6xl md:text-8xl font-montserrat font-black text-white leading-tight mb-8">
                Welcome to
                <br />
                <span className="bg-gradient-to-r from-gold to-white bg-clip-text text-transparent">The Art</span>
                <br />
                <span className="font-playfair italic text-4xl md:text-5xl text-gray-300">Barbershop</span>
              </h1>
              <p className="text-xl text-gray-300 font-montserrat max-w-2xl mx-auto leading-relaxed mb-12">
                Where traditional Ethiopian craftsmanship meets modern sophistication. Experience the finest in men's grooming.
              </p>
            </div>
          </div>

          {/* Central Clipper with Circular Features */}
          <div className="relative flex items-center justify-center min-h-[600px]">
            {/* Central Clipper */}
            <div className="relative z-10">
              <div className="w-48 h-48 md:w-64 md:h-64 bg-white/10 backdrop-blur-md rounded-full flex items-center justify-center hover:scale-110 transition-transform duration-500 border border-white/20">
                <Scissors className="w-24 h-24 md:w-32 md:h-32 text-gold" />
              </div>
              <div className="absolute inset-0 bg-gradient-to-br from-gold/20 to-transparent rounded-full animate-pulse"></div>
            </div>

            {/* Circular Orbiting Features */}
            <div className="absolute inset-0">
              {circularFeatures.map((feature, index) => {
                const angle = (index * 60) * (Math.PI / 180); // 60 degrees between each
                const radius = 200; // Distance from center
                const x = Math.cos(angle) * radius;
                const y = Math.sin(angle) * radius;
                
                return (
                  <div
                    key={feature.title}
                    className="absolute group cursor-pointer"
                    style={{
                      left: `calc(50% + ${x}px - 40px)`,
                      top: `calc(50% + ${y}px - 40px)`,
                      animationDelay: `${index * 0.2}s`
                    }}
                  >
                    <div className="w-20 h-20 bg-white/10 backdrop-blur-md rounded-full flex items-center justify-center group-hover:scale-125 group-hover:bg-gold/20 transition-all duration-300 border border-white/20 group-hover:shadow-lg group-hover:shadow-gold/20">
                      <feature.icon className="w-8 h-8 text-white group-hover:text-gold transition-colors duration-300" />
                    </div>
                    <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <div className="bg-white/90 backdrop-blur-sm rounded-lg px-3 py-1 text-xs font-montserrat font-semibold text-obsidian whitespace-nowrap">
                        {feature.title}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          <div className="text-center mt-16">
            <Button 
              onClick={handleBookNow}
              className="bg-gold text-obsidian hover:bg-gold/90 font-montserrat font-bold text-lg px-12 py-4 rounded-xl transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl"
            >
              <Calendar className="mr-2 h-5 w-5" />
              Book Your Experience
            </Button>
          </div>
        </div>
      </section>

      {/* Enhanced Gallery Section with Larger Images */}
      <section className="py-24 bg-gradient-to-br from-white via-gray-50 to-sage/5">
        <div className="container mx-auto px-4">
          <div className="text-center mb-20">
            <div className="inline-flex items-center px-4 py-2 bg-sage/10 rounded-full mb-6">
              <Scissors className="h-4 w-4 text-sage mr-2" />
              <span className="text-sage font-montserrat font-semibold text-sm">Our Gallery</span>
            </div>
            <h2 className="text-5xl md:text-6xl font-montserrat font-bold text-obsidian mb-6">
              Masterful <span className="bg-gradient-to-r from-sage to-gold bg-clip-text text-transparent">Craftsmanship</span>
            </h2>
            <p className="text-xl text-gray-600 font-montserrat max-w-3xl mx-auto">
              Witness the artistry and precision that defines our work
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {heroImages.map((image, index) => (
              <div key={index} className="group relative overflow-hidden rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 hover:scale-105">
                <div className="aspect-[4/5]">
                  <img 
                    src={image} 
                    alt={`The Art Barbershop Service ${index + 1}`}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-obsidian/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="absolute bottom-6 left-6 right-6 transform translate-y-6 group-hover:translate-y-0 transition-transform duration-300">
                    <h3 className="text-white font-montserrat font-bold text-xl mb-2">
                      {index === 0 ? 'Precision Cuts' : index === 1 ? 'Expert Styling' : 'Premium Grooming'}
                    </h3>
                    <p className="text-gray-300 font-montserrat">
                      {index === 0 ? 'Master-level precision cuts' : index === 1 ? 'Professional styling services' : 'Complete grooming experience'}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Ethiopian Testimonials */}
      <section className="py-24 bg-gradient-to-br from-gray-50 via-white to-gold/5">
        <div className="container mx-auto px-4">
          <div className="text-center mb-20">
            <div className="inline-flex items-center px-4 py-2 bg-gold/10 rounded-full mb-6">
              <Star className="h-4 w-4 text-gold mr-2" />
              <span className="text-gold font-montserrat font-semibold text-sm">Client Testimonials</span>
            </div>
            <h2 className="text-5xl md:text-6xl font-montserrat font-bold text-obsidian mb-6">
              Excellence <span className="bg-gradient-to-r from-gold to-sage bg-clip-text text-transparent">Recognized</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.slice(0, 3).map((testimonial, index) => (
              <Card key={testimonial.name} className={`bg-white/80 backdrop-blur-sm border-0 shadow-lg hover:shadow-xl transition-all duration-500 hover:scale-105 animate-fade-in`} style={{animationDelay: `${index * 300}ms`}}>
                <CardContent className="p-8">
                  <div className="flex mb-6">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="text-gold h-5 w-5 fill-current" />
                    ))}
                  </div>
                  <p className="text-gray-600 font-montserrat mb-6 italic leading-relaxed text-lg">
                    "{testimonial.text}"
                  </p>
                  <div>
                    <p className="text-obsidian font-montserrat font-bold text-lg">
                      {testimonial.name}
                    </p>
                    <p className="text-sage font-montserrat">
                      {testimonial.role}
                    </p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button 
              onClick={() => navigate('/contact')}
              className="bg-sage text-white hover:bg-sage/90 font-montserrat font-bold px-8 py-3 rounded-xl transition-all duration-300 hover:scale-105"
            >
              Read More Reviews
            </Button>
          </div>
        </div>
      </section>

      {/* Booking Section */}
      <section className="py-24 bg-gradient-to-br from-sage via-obsidian to-sage">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <div className="inline-flex items-center px-4 py-2 bg-white/10 rounded-full mb-6">
                <Calendar className="h-4 w-4 text-gold mr-2" />
                <span className="text-gold font-montserrat font-semibold text-sm">Book Your Experience</span>
              </div>
              <h2 className="text-5xl md:text-6xl font-montserrat font-bold text-white mb-6">
                Reserve Your <span className="bg-gradient-to-r from-gold to-white bg-clip-text text-transparent">Chair</span>
              </h2>
              <p className="text-xl text-white/90 font-montserrat">
                Experience the finest in men's grooming. Book your session today.
              </p>
            </div>

            <Card className="bg-white/95 backdrop-blur-md shadow-2xl animate-scale-in rounded-3xl overflow-hidden">
              <CardContent className="p-12">
                <form onSubmit={handleBooking} className="space-y-8">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-sm font-montserrat font-semibold text-obsidian">Full Name</label>
                      <Input 
                        placeholder="Enter your name" 
                        className="border-2 border-gray-200 focus:border-sage transition-colors duration-300 rounded-xl h-14 text-lg"
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-montserrat font-semibold text-obsidian">Email Address</label>
                      <Input 
                        type="email" 
                        placeholder="your@email.com" 
                        className="border-2 border-gray-200 focus:border-sage transition-colors duration-300 rounded-xl h-14 text-lg"
                        required
                      />
                    </div>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-sm font-montserrat font-semibold text-obsidian">Phone Number</label>
                      <Input 
                        type="tel" 
                        placeholder="(555) 123-4567" 
                        className="border-2 border-gray-200 focus:border-sage transition-colors duration-300 rounded-xl h-14 text-lg"
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-montserrat font-semibold text-obsidian">Preferred Date</label>
                      <Input 
                        type="date" 
                        className="border-2 border-gray-200 focus:border-sage transition-colors duration-300 rounded-xl h-14 text-lg"
                        required
                      />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-montserrat font-semibold text-obsidian">Service & Preferences</label>
                    <Textarea 
                      placeholder="Tell us about your preferred service and any special requests..." 
                      rows={5}
                      className="border-2 border-gray-200 focus:border-sage transition-colors duration-300 rounded-xl text-lg resize-none"
                    />
                  </div>
                  <Button type="submit" className="w-full bg-sage text-white hover:bg-sage/90 font-montserrat font-bold text-xl py-6 rounded-xl transition-all duration-300 hover:scale-105 shadow-lg">
                    <Calendar className="mr-3 h-6 w-6" />
                    Confirm Booking
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
