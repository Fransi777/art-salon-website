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

  const services = [
    {
      title: "Master Cuts & Fades",
      description: "Precision cuts and seamless fades crafted by expert hands",
      icon: Scissors,
      price: "$45",
      image: "/lovable-uploads/2f73b8eb-c08c-42d9-ad2d-8c3b4c89c695.png"
    },
    {
      title: "Artisan Styling",
      description: "Professional beard sculpting and detailed grooming",
      icon: Sparkles,
      price: "$35",
      image: "/lovable-uploads/400a0cf3-6dc8-4b52-a674-af3495eb386b.png"
    },
    {
      title: "Signature Looks",
      description: "Custom styling for the modern gentleman",
      icon: Crown,
      price: "$55",
      image: "/lovable-uploads/cd3c3732-5a9c-4a54-b64b-f50d0e71cab0.png"
    },
    {
      title: "Complete Experience",
      description: "Full grooming service with premium treatment",
      icon: Star,
      price: "$75",
      image: "https://images.unsplash.com/photo-1622286346003-c4b4f5d3b7bc?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    }
  ];

  const stats = [
    { number: "15+", label: "Years Experience", icon: Award },
    { number: "50+", label: "Master Barbers", icon: Users },
    { number: "25K+", label: "Satisfied Clients", icon: Star },
    { number: "100%", label: "Satisfaction Rate", icon: Trophy }
  ];

  const testimonials = [
    {
      name: "Marcus Williams",
      text: "The Art delivers exceptional craftsmanship. Every cut is a masterpiece!",
      rating: 5,
      role: "Business Executive"
    },
    {
      name: "Terrell Johnson",
      text: "Unmatched skill and attention to detail. This is barbering elevated to art.",
      rating: 5,
      role: "Creative Director"
    },
    {
      name: "Jamal Thompson",
      text: "Premium experience from start to finish. Worth every penny.",
      rating: 5,
      role: "Entrepreneur"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-100">
      <Navigation />
      
      {/* Enhanced Hero Section with Image Carousel */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-br from-obsidian/5 via-sage/10 to-gold/5"></div>
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-sage/20 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-1/3 right-1/4 w-64 h-64 bg-gold/20 rounded-full blur-2xl animate-pulse" style={{animationDelay: '2s'}}></div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center min-h-[80vh]">
            {/* Left Content */}
            <div className="space-y-8">
              <div className={`transition-all duration-1000 ${isVisible ? 'animate-fade-in' : 'opacity-0'}`}>
                <div className="inline-flex items-center px-4 py-2 bg-sage/10 rounded-full mb-6">
                  <Shield className="h-4 w-4 text-sage mr-2" />
                  <span className="text-sage font-montserrat font-semibold text-sm">Premium Barbershop Experience</span>
                </div>
                <h1 className="text-6xl md:text-7xl font-montserrat font-black text-obsidian leading-tight">
                  Master Your
                  <br />
                  <span className="bg-gradient-to-r from-sage to-gold bg-clip-text text-transparent">Style</span>
                  <br />
                  <span className="font-playfair italic text-4xl md:text-5xl text-gray-600">with precision</span>
                </h1>
              </div>
              
              <p className={`text-xl text-gray-600 font-montserrat max-w-xl leading-relaxed transition-all duration-1000 delay-300 ${
                isVisible ? 'animate-fade-in' : 'opacity-0'
              }`}>
                Where traditional craftsmanship meets modern sophistication. Experience the finest in men's grooming with our master barbers who transform hair into art.
              </p>

              <div className={`flex flex-col sm:flex-row gap-4 transition-all duration-1000 delay-500 ${
                isVisible ? 'animate-fade-in' : 'opacity-0'
              }`}>
                <Button 
                  onClick={handleBookNow}
                  className="bg-sage text-white hover:bg-sage/90 font-montserrat font-bold text-lg px-8 py-4 rounded-xl transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl"
                >
                  <Calendar className="mr-2 h-5 w-5" />
                  Book Your Session
                </Button>
                <Button variant="outline" className="border-2 border-obsidian text-obsidian hover:bg-obsidian hover:text-white font-montserrat font-bold text-lg px-8 py-4 rounded-xl transition-all duration-300 hover:scale-105">
                  <Clock className="mr-2 h-5 w-5" />
                  Our Process
                </Button>
              </div>

              {/* Stats Section */}
              <div className={`grid grid-cols-2 md:grid-cols-4 gap-6 pt-8 transition-all duration-1000 delay-700 ${
                isVisible ? 'animate-fade-in' : 'opacity-0'
              }`}>
                {stats.map((stat, index) => (
                  <div key={stat.label} className="text-center group">
                    <div className="flex justify-center mb-3">
                      <div className="w-12 h-12 bg-sage/10 rounded-2xl flex items-center justify-center group-hover:bg-sage group-hover:scale-110 transition-all duration-300">
                        <stat.icon className="h-6 w-6 text-sage group-hover:text-white transition-colors duration-300" />
                      </div>
                    </div>
                    <div className="text-3xl font-montserrat font-bold text-obsidian mb-1">
                      {stat.number}
                    </div>
                    <div className="text-sm text-gray-600 font-montserrat">
                      {stat.label}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Content - Enhanced Image Carousel */}
            <div className="relative">
              <div className={`relative transition-all duration-1000 delay-300 ${
                isVisible ? 'animate-slide-in-right' : 'opacity-0'
              }`}>
                {/* Main featured image with smooth transitions */}
                <div className="relative group">
                  <div className="absolute inset-0 bg-gradient-to-br from-sage/20 to-gold/20 rounded-3xl transform rotate-1 group-hover:rotate-0 transition-transform duration-500"></div>
                  <div className="relative bg-white rounded-3xl shadow-2xl p-4 transform -rotate-1 group-hover:rotate-0 transition-transform duration-500 overflow-hidden">
                    <div className="relative h-96 rounded-2xl overflow-hidden">
                      {heroImages.map((image, index) => (
                        <img
                          key={index}
                          src={image}
                          alt={`Premium Barber Service ${index + 1}`}
                          className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ${
                            index === currentImageIndex ? 'opacity-100' : 'opacity-0'
                          }`}
                        />
                      ))}
                      <div className="absolute inset-0 bg-gradient-to-t from-obsidian/20 via-transparent to-transparent"></div>
                    </div>
                  </div>
                </div>

                {/* Image indicators */}
                <div className="flex justify-center mt-6 space-x-3">
                  {heroImages.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentImageIndex(index)}
                      className={`w-3 h-3 rounded-full transition-all duration-300 ${
                        index === currentImageIndex 
                          ? 'bg-sage scale-125' 
                          : 'bg-gray-300 hover:bg-sage/60'
                      }`}
                    />
                  ))}
                </div>

                {/* Floating elements */}
                <div className="absolute -top-4 -right-4 w-20 h-20 bg-gold/20 rounded-full blur-xl animate-pulse"></div>
                <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-sage/20 rounded-full blur-lg animate-pulse" style={{animationDelay: '1s'}}></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-24 bg-gradient-to-br from-white via-gray-50 to-sage/5">
        <div className="container mx-auto px-4">
          <div className="text-center mb-20">
            <div className="inline-flex items-center px-4 py-2 bg-sage/10 rounded-full mb-6">
              <Scissors className="h-4 w-4 text-sage mr-2" />
              <span className="text-sage font-montserrat font-semibold text-sm">Our Signature Services</span>
            </div>
            <h2 className="text-5xl md:text-6xl font-montserrat font-bold text-obsidian mb-6">
              Crafted to <span className="bg-gradient-to-r from-sage to-gold bg-clip-text text-transparent">Perfection</span>
            </h2>
            <p className="text-xl text-gray-600 font-montserrat max-w-3xl mx-auto">
              Each service is a masterpiece, delivered with precision and artistry
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <Card key={service.title} className={`group bg-white/80 backdrop-blur-sm border-0 shadow-lg hover:shadow-2xl transition-all duration-500 hover:scale-105 hover:-translate-y-2 animate-scale-in overflow-hidden`} style={{animationDelay: `${index * 200}ms`}}>
                <div className="relative">
                  <img 
                    src={service.image} 
                    alt={service.title}
                    className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-obsidian/60 via-transparent to-transparent"></div>
                  <div className="absolute top-4 right-4">
                    <div className="w-12 h-12 bg-white/20 backdrop-blur-md rounded-2xl flex items-center justify-center">
                      <service.icon className="h-6 w-6 text-white" />
                    </div>
                  </div>
                </div>
                <CardContent className="p-8">
                  <h3 className="text-xl font-montserrat font-bold text-obsidian mb-4 group-hover:text-sage transition-colors duration-300">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 font-montserrat mb-6 leading-relaxed">
                    {service.description}
                  </p>
                  <div className="flex items-center justify-between">
                    <div className="text-2xl font-montserrat font-bold text-sage">
                      {service.price}
                    </div>
                    <Button 
                      onClick={handleBookNow}
                      size="sm" 
                      className="bg-sage/10 text-sage hover:bg-sage hover:text-white transition-all duration-300"
                    >
                      Book Now
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* About Preview */}
      <section className="py-24 bg-gradient-to-br from-obsidian via-gray-900 to-sage text-white relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gold/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-1/3 right-1/4 w-64 h-64 bg-sage/10 rounded-full blur-2xl"></div>
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="animate-slide-in-left">
              <div className="inline-flex items-center px-4 py-2 bg-white/10 rounded-full mb-6">
                <Award className="h-4 w-4 text-gold mr-2" />
                <span className="text-gold font-montserrat font-semibold text-sm">Master Craftsmanship</span>
              </div>
              <h2 className="text-5xl md:text-6xl font-montserrat font-bold mb-6">
                Where <span className="bg-gradient-to-r from-gold to-sage bg-clip-text text-transparent">Art</span> Meets Precision
              </h2>
              <p className="text-xl text-gray-300 font-montserrat mb-8 leading-relaxed">
                For over 15 years, we've redefined the barbershop experience. Our master barbers don't just cut hair—they craft signature looks that reflect your unique style and personality.
              </p>
              <Button className="bg-gold text-obsidian hover:bg-gold/90 font-montserrat font-bold px-8 py-4 rounded-xl transition-all duration-300 hover:scale-105">
                Discover Our Story
              </Button>
            </div>
            <div className="animate-slide-in-right">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-br from-gold/20 to-sage/20 rounded-3xl transform rotate-3"></div>
                <img 
                  src="https://images.unsplash.com/photo-1503951914875-452162b0f3f1?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                  alt="Master Barber" 
                  className="relative rounded-2xl shadow-2xl hover:scale-105 transition-transform duration-500 w-full"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
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

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
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
