
import React, { useEffect, useState } from 'react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';
import { useNavigate } from 'react-router-dom';
import { Scissors, Sparkles, Crown, Star, Users, Award, Calendar, Clock, Trophy, Shield, Play, ChevronDown } from 'lucide-react';

const Index = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [scrollY, setScrollY] = useState(0);
  const { toast } = useToast();
  const navigate = useNavigate();

  const heroImages = [
    "/lovable-uploads/2f73b8eb-c08c-42d9-ad2d-8c3b4c89c695.png",
    "/lovable-uploads/400a0cf3-6dc8-4b52-a674-af3495eb386b.png",
    "/lovable-uploads/cd3c3732-5a9c-4a54-b64b-f50d0e71cab0.png"
  ];

  useEffect(() => {
    setIsVisible(true);
    
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    
    const imageInterval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % heroImages.length);
    }, 5000);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      clearInterval(imageInterval);
    };
  }, []);

  const handleBooking = (e: React.FormEvent) => {
    e.preventDefault();
    navigate('/contact');
  };

  const handleBookNow = () => {
    navigate('/contact');
  };

  const luxuryServices = [
    { 
      title: "Signature Cuts", 
      icon: Scissors, 
      description: "Precision sculpting with master techniques",
      price: "From $85",
      gradient: "from-blue-600/20 to-purple-600/20",
      accent: "blue-500"
    },
    { 
      title: "Royal Grooming", 
      icon: Crown, 
      description: "Complete luxury grooming experience",
      price: "From $120",
      gradient: "from-purple-600/20 to-pink-600/20",
      accent: "purple-500"
    },
    { 
      title: "Beard Artistry", 
      icon: Sparkles, 
      description: "Expert beard styling and maintenance",
      price: "From $45",
      gradient: "from-emerald-600/20 to-teal-600/20",
      accent: "emerald-500"
    },
    { 
      title: "VIP Experience", 
      icon: Trophy, 
      description: "Private suite with premium services",
      price: "From $200",
      gradient: "from-amber-600/20 to-orange-600/20",
      accent: "amber-500"
    }
  ];

  const testimonials = [
    {
      name: "Kebede Tadesse",
      text: "The Art delivers exceptional craftsmanship. Every cut is a masterpiece that perfectly suits my style!",
      rating: 5,
      role: "Business Executive",
      gradient: "from-indigo-600/20 to-blue-600/20"
    },
    {
      name: "Amanuel Bekele",
      text: "Unmatched skill and attention to detail. This is barbering elevated to art. Highly recommend!",
      rating: 5,
      role: "Creative Director",
      gradient: "from-violet-600/20 to-purple-600/20"
    },
    {
      name: "Meles Alemu",
      text: "Premium experience from start to finish. The barbers truly understand modern Ethiopian style.",
      rating: 5,
      role: "Entrepreneur",
      gradient: "from-rose-600/20 to-pink-600/20"
    }
  ];

  return (
    <div className="min-h-screen bg-black text-white overflow-x-hidden">
      <Navigation />
      
      {/* Cinematic Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-black via-gray-900 to-black">
          <div className="absolute inset-0 opacity-20">
            {heroImages.map((image, index) => (
              <div
                key={index}
                className={`absolute inset-0 transition-opacity duration-2000 ${
                  currentImageIndex === index ? 'opacity-100' : 'opacity-0'
                }`}
                style={{
                  backgroundImage: `url(${image})`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                  filter: 'brightness(0.3) contrast(1.2)'
                }}
              />
            ))}
          </div>
          
          {/* Parallax Elements */}
          <div 
            className="absolute top-1/4 left-1/4 w-96 h-96 bg-gold/5 rounded-full blur-3xl animate-pulse"
            style={{ transform: `translateY(${scrollY * 0.5}px)` }}
          />
          <div 
            className="absolute bottom-1/3 right-1/4 w-64 h-64 bg-white/3 rounded-full blur-2xl animate-pulse"
            style={{ 
              transform: `translateY(${scrollY * -0.3}px)`,
              animationDelay: '2s'
            }}
          />
        </div>

        {/* Hero Content */}
        <div className="container mx-auto px-4 relative z-10 text-center">
          <div className={`transition-all duration-1500 ${isVisible ? 'animate-fade-in' : 'opacity-0 translate-y-10'}`}>
            {/* Logo Animation */}
            <div className="mb-8 animate-scale-in" style={{ animationDelay: '0.5s' }}>
              <img 
                src="/lovable-uploads/fb01ca19-0340-4e03-8f65-cf04865664d6.png" 
                alt="The Art Barbershop Logo" 
                className="w-32 h-32 mx-auto filter drop-shadow-2xl hover:scale-110 transition-transform duration-500"
              />
            </div>

            {/* Main Headline */}
            <h1 className="text-7xl md:text-9xl font-playfair font-bold leading-tight mb-6">
              <span className="block bg-gradient-to-r from-gold via-white to-gold bg-clip-text text-transparent animate-glow">
                The Art
              </span>
              <span className="block text-4xl md:text-6xl font-montserrat font-light text-gray-300 mt-4">
                of Sophistication
              </span>
            </h1>

            {/* Subtitle */}
            <p className="text-xl md:text-2xl text-gray-300 font-montserrat max-w-3xl mx-auto leading-relaxed mb-12 animate-fade-in" style={{ animationDelay: '1s' }}>
              Where Ethiopian tradition meets modern luxury. Experience the pinnacle of men's grooming.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col md:flex-row gap-6 justify-center items-center animate-fade-in" style={{ animationDelay: '1.5s' }}>
              <Button 
                onClick={handleBookNow}
                className="group relative bg-gradient-to-r from-gold to-yellow-600 text-black hover:from-yellow-600 hover:to-gold font-montserrat font-bold text-lg px-12 py-6 rounded-full transition-all duration-500 hover:scale-105 shadow-2xl hover:shadow-gold/50 overflow-hidden"
              >
                <span className="relative z-10 flex items-center">
                  <Calendar className="mr-3 h-6 w-6" />
                  Book Your Experience
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </Button>
              
              <Button 
                variant="outline"
                onClick={() => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })}
                className="group border-2 border-gold text-gold hover:bg-gold hover:text-black font-montserrat font-semibold text-lg px-12 py-6 rounded-full transition-all duration-500 hover:scale-105 bg-transparent"
              >
                <Play className="mr-3 h-6 w-6 group-hover:scale-110 transition-transform duration-300" />
                Explore Services
              </Button>
            </div>
          </div>

          {/* Scroll Indicator */}
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
            <ChevronDown className="h-8 w-8 text-gold" />
          </div>
        </div>
      </section>

      {/* Enhanced Luxury Services Section */}
      <section id="services" className="py-32 bg-gradient-to-b from-black to-gray-900 relative overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="text-center mb-20">
            <div className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-gold/20 to-amber-500/20 backdrop-blur-sm rounded-full mb-8 border border-gold/30">
              <Scissors className="h-6 w-6 text-gold mr-4" />
              <span className="text-gold font-montserrat font-semibold text-lg">Premium Services</span>
            </div>
            <h2 className="text-6xl md:text-7xl font-playfair font-bold text-white mb-8">
              Artisan <span className="bg-gradient-to-r from-gold to-yellow-600 bg-clip-text text-transparent">Mastery</span>
            </h2>
            <p className="text-xl text-gray-300 font-montserrat max-w-3xl mx-auto leading-relaxed">
              Each service is a carefully curated experience, delivered by master craftsmen
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {luxuryServices.map((service, index) => (
              <Card 
                key={service.title} 
                className={`group relative bg-gradient-to-br ${service.gradient} backdrop-blur-xl border-0 transition-all duration-700 hover:scale-105 hover:shadow-2xl rounded-3xl overflow-hidden`}
                style={{ animationDelay: `${index * 200}ms` }}
              >
                {/* Gradient border effect */}
                <div className={`absolute inset-0 bg-gradient-to-r from-${service.accent} via-transparent to-${service.accent} opacity-0 group-hover:opacity-30 transition-opacity duration-500 rounded-3xl`} />
                
                {/* Floating particles */}
                <div className="absolute inset-0 overflow-hidden rounded-3xl">
                  <div className={`absolute top-4 left-4 w-2 h-2 bg-${service.accent} rounded-full opacity-40 animate-pulse`} style={{ animationDelay: '0s' }} />
                  <div className={`absolute top-8 right-6 w-1 h-1 bg-${service.accent} rounded-full opacity-60 animate-pulse`} style={{ animationDelay: '1s' }} />
                  <div className={`absolute bottom-6 left-8 w-1.5 h-1.5 bg-${service.accent} rounded-full opacity-50 animate-pulse`} style={{ animationDelay: '2s' }} />
                </div>

                <CardContent className="p-8 text-center relative z-10">
                  <div className="mb-8 relative">
                    <div className={`w-24 h-24 bg-gradient-to-br from-${service.accent}/30 to-transparent rounded-2xl flex items-center justify-center mx-auto group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 border border-${service.accent}/40 shadow-lg`}>
                      <service.icon className={`w-12 h-12 text-${service.accent}`} />
                    </div>
                    
                    {/* Glow effect */}
                    <div className={`absolute inset-0 w-24 h-24 mx-auto bg-${service.accent} rounded-2xl opacity-0 group-hover:opacity-20 blur-xl transition-opacity duration-500`} />
                  </div>
                  
                  <h3 className="text-2xl font-playfair font-bold text-white mb-4 group-hover:text-gold transition-colors duration-300">
                    {service.title}
                  </h3>
                  
                  <p className="text-gray-300 font-montserrat mb-6 leading-relaxed">
                    {service.description}
                  </p>
                  
                  <div className="text-gold font-montserrat font-bold text-xl mb-8">
                    {service.price}
                  </div>
                  
                  <Button 
                    onClick={handleBookNow}
                    className={`w-full bg-transparent border-2 border-${service.accent} text-${service.accent} hover:bg-${service.accent} hover:text-white transition-all duration-300 rounded-xl py-3 font-semibold shadow-lg hover:shadow-${service.accent}/30`}
                  >
                    Select Service
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Showcase */}
      <section className="py-32 bg-gradient-to-b from-gray-900 to-black">
        <div className="container mx-auto px-4">
          <div className="text-center mb-20">
            <div className="inline-flex items-center px-8 py-4 bg-white/10 backdrop-blur-sm rounded-full mb-8 border border-white/20">
              <Award className="h-6 w-6 text-white mr-4" />
              <span className="text-white font-montserrat font-semibold text-lg">Our Artistry</span>
            </div>
            <h2 className="text-6xl md:text-7xl font-playfair font-bold text-white mb-8">
              Masterful <span className="bg-gradient-to-r from-gold to-white bg-clip-text text-transparent">Precision</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {heroImages.map((image, index) => (
              <div 
                key={index} 
                className="group relative overflow-hidden rounded-3xl shadow-2xl hover:shadow-gold/20 transition-all duration-700 hover:scale-105"
              >
                <div className="aspect-[4/5] relative">
                  <img 
                    src={image} 
                    alt={`The Art Barbershop Mastery ${index + 1}`}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 filter brightness-90 group-hover:brightness-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <div className="absolute bottom-8 left-8 right-8 transform translate-y-8 group-hover:translate-y-0 transition-transform duration-500 opacity-0 group-hover:opacity-100">
                    <h3 className="text-white font-playfair font-bold text-2xl mb-3">
                      {index === 0 ? 'Precision Artistry' : index === 1 ? 'Master Styling' : 'Luxury Experience'}
                    </h3>
                    <p className="text-gray-300 font-montserrat">
                      {index === 0 ? 'Expert cuts with mathematical precision' : index === 1 ? 'Sophisticated styling techniques' : 'Complete grooming luxury'}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Enhanced Testimonials */}
      <section className="py-32 bg-gradient-to-b from-black to-gray-900">
        <div className="container mx-auto px-4">
          <div className="text-center mb-20">
            <div className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-gold/20 to-amber-500/20 backdrop-blur-sm rounded-full mb-8 border border-gold/30">
              <Star className="h-6 w-6 text-gold mr-4" />
              <span className="text-gold font-montserrat font-semibold text-lg">Client Excellence</span>
            </div>
            <h2 className="text-6xl md:text-7xl font-playfair font-bold text-white mb-8">
              Luxury <span className="bg-gradient-to-r from-gold to-yellow-600 bg-clip-text text-transparent">Recognized</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {testimonials.map((testimonial, index) => (
              <Card 
                key={testimonial.name} 
                className={`group relative bg-gradient-to-br ${testimonial.gradient} backdrop-blur-xl border-0 transition-all duration-700 hover:scale-105 hover:shadow-2xl rounded-3xl overflow-hidden`}
                style={{ animationDelay: `${index * 300}ms` }}
              >
                {/* Animated border */}
                <div className="absolute inset-0 bg-gradient-to-r from-gold/50 via-transparent to-gold/50 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl" 
                     style={{ background: 'linear-gradient(90deg, transparent, rgba(226, 212, 180, 0.3), transparent)' }} />
                
                <CardContent className="p-10 relative z-10">
                  <div className="flex mb-8 justify-center">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="text-gold h-7 w-7 fill-current hover:scale-110 transition-transform duration-200" style={{ animationDelay: `${i * 100}ms` }} />
                    ))}
                  </div>
                  
                  <p className="text-gray-300 font-montserrat mb-8 italic leading-relaxed text-lg text-center">
                    "{testimonial.text}"
                  </p>
                  
                  <div className="border-t border-gold/30 pt-8 text-center">
                    <p className="text-white font-playfair font-bold text-xl mb-2">
                      {testimonial.name}
                    </p>
                    <p className="text-gold font-montserrat font-medium">
                      {testimonial.role}
                    </p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Luxury Booking Section */}
      <section className="py-32 bg-gradient-to-br from-gray-900 via-black to-gray-900 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-gold/5 via-transparent to-gold/5" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-20">
              <div className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-gold/30 to-amber-500/30 backdrop-blur-sm rounded-full mb-8 border border-gold/40">
                <Calendar className="h-6 w-6 text-gold mr-4" />
                <span className="text-gold font-montserrat font-semibold text-lg">Reserve Excellence</span>
              </div>
              <h2 className="text-6xl md:text-7xl font-playfair font-bold text-white mb-8">
                Your <span className="bg-gradient-to-r from-gold to-white bg-clip-text text-transparent">Experience</span> Awaits
              </h2>
              <p className="text-xl text-gray-300 font-montserrat max-w-2xl mx-auto">
                Reserve your seat at Ethiopia's most distinguished barbershop
              </p>
            </div>

            <Card className="group bg-gradient-to-br from-white/95 via-gray-50/95 to-white/90 backdrop-blur-xl shadow-2xl rounded-3xl border-2 border-gold/20 hover:border-gold/40 transition-all duration-500">
              <CardContent className="p-12">
                <form onSubmit={handleBooking} className="space-y-8">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="space-y-3">
                      <label className="text-sm font-montserrat font-bold text-gray-800 uppercase tracking-wider">Full Name</label>
                      <Input 
                        placeholder="Enter your name" 
                        className="border-2 border-gray-300 focus:border-gold focus:ring-gold transition-all duration-300 rounded-xl h-16 text-lg bg-white/80 shadow-inner"
                        required
                      />
                    </div>
                    <div className="space-y-3">
                      <label className="text-sm font-montserrat font-bold text-gray-800 uppercase tracking-wider">Email Address</label>
                      <Input 
                        type="email" 
                        placeholder="your@email.com" 
                        className="border-2 border-gray-300 focus:border-gold focus:ring-gold transition-all duration-300 rounded-xl h-16 text-lg bg-white/80 shadow-inner"
                        required
                      />
                    </div>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="space-y-3">
                      <label className="text-sm font-montserrat font-bold text-gray-800 uppercase tracking-wider">Phone Number</label>
                      <Input 
                        type="tel" 
                        placeholder="(555) 123-4567" 
                        className="border-2 border-gray-300 focus:border-gold focus:ring-gold transition-all duration-300 rounded-xl h-16 text-lg bg-white/80 shadow-inner"
                        required
                      />
                    </div>
                    <div className="space-y-3">
                      <label className="text-sm font-montserrat font-bold text-gray-800 uppercase tracking-wider">Preferred Date</label>
                      <Input 
                        type="date" 
                        className="border-2 border-gray-300 focus:border-gold focus:ring-gold transition-all duration-300 rounded-xl h-16 text-lg bg-white/80 shadow-inner"
                        required
                      />
                    </div>
                  </div>
                  <div className="space-y-3">
                    <label className="text-sm font-montserrat font-bold text-gray-800 uppercase tracking-wider">Service & Preferences</label>
                    <Textarea 
                      placeholder="Tell us about your preferred service and any special requests..." 
                      rows={6}
                      className="border-2 border-gray-300 focus:border-gold focus:ring-gold transition-all duration-300 rounded-xl text-lg resize-none bg-white/80 shadow-inner"
                    />
                  </div>
                  <Button 
                    type="submit" 
                    className="w-full bg-gradient-to-r from-gold to-yellow-600 text-black hover:from-yellow-600 hover:to-gold font-montserrat font-bold text-xl py-8 rounded-xl transition-all duration-500 hover:scale-105 shadow-2xl hover:shadow-gold/50 border-2 border-gold/30"
                  >
                    <Calendar className="mr-4 h-7 w-7" />
                    Reserve Your Experience
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
