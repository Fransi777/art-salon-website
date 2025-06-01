
import React, { useEffect, useState } from 'react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { useToast } from '@/hooks/use-toast';
import { useNavigate } from 'react-router-dom';
import { 
  Scissors, 
  Sparkles, 
  Crown, 
  Star, 
  Users, 
  Award, 
  Calendar, 
  Clock, 
  Trophy, 
  Shield, 
  Play, 
  ChevronDown,
  ArrowRight,
  CheckCircle,
  MapPin,
  Phone
} from 'lucide-react';

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
      setCurrentImageIndex(prev => (prev + 1) % heroImages.length);
    }, 4000);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      clearInterval(imageInterval);
    };
  }, []);

  const handleBookNow = () => {
    navigate('/contact');
  };

  const premiumServices = [
    {
      title: "Master Cuts",
      icon: Scissors,
      description: "Precision sculpting with artistic flair",
      price: "From $85",
      features: ["Consultation", "Wash & Cut", "Styling", "Finishing Touch"],
      gradient: "from-amber-500/20 via-gold/30 to-yellow-500/20",
      accent: "amber-500",
      image: "https://images.unsplash.com/photo-1503951914875-452162b0f3f1?w=500&q=80"
    },
    {
      title: "Royal Treatment",
      icon: Crown,
      description: "Complete luxury grooming experience",
      price: "From $120",
      features: ["Hot Towel", "Beard Trim", "Massage", "Premium Products"],
      gradient: "from-purple-500/20 via-violet-400/30 to-indigo-500/20",
      accent: "purple-500",
      image: "https://images.unsplash.com/photo-1599351431202-1e0f0137899a?w=500&q=80"
    },
    {
      title: "Beard Artistry",
      icon: Sparkles,
      description: "Expert beard styling and maintenance",
      price: "From $45",
      features: ["Shape & Trim", "Oil Treatment", "Precision Lines", "Aftercare"],
      gradient: "from-emerald-500/20 via-teal-400/30 to-cyan-500/20",
      accent: "emerald-500",
      image: "https://images.unsplash.com/photo-1621605815971-fbc98d665033?w=500&q=80"
    },
    {
      title: "VIP Experience",
      icon: Trophy,
      description: "Private suite with premium services",
      price: "From $200",
      features: ["Private Suite", "Complimentary Drinks", "Extended Session", "Exclusive Products"],
      gradient: "from-rose-500/20 via-pink-400/30 to-red-500/20",
      accent: "rose-500",
      image: "https://images.unsplash.com/photo-1585747860715-2ba37e788b70?w=500&q=80"
    }
  ];

  const testimonials = [
    {
      name: "Kebede Tadesse",
      text: "The Art delivers unmatched craftsmanship. Every visit is a premium experience that exceeds expectations.",
      rating: 5,
      role: "Business Executive",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&q=80"
    },
    {
      name: "Amanuel Bekele",
      text: "Exceptional skill and attention to detail. This is barbering elevated to true artistry.",
      rating: 5,
      role: "Creative Director",
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&q=80"
    },
    {
      name: "Meles Alemu",
      text: "Premium experience from start to finish. The team truly understands modern Ethiopian style.",
      rating: 5,
      role: "Entrepreneur",
      avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&q=80"
    }
  ];

  const stats = [
    { number: "5000+", label: "Happy Clients", icon: Users },
    { number: "15+", label: "Years Experience", icon: Award },
    { number: "98%", label: "Satisfaction Rate", icon: Star },
    { number: "24/7", label: "Support", icon: Shield }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-black to-slate-800 text-white overflow-x-hidden">
      <Navigation />
      
      {/* Hero Section with Advanced Grid */}
      <section className="relative min-h-screen grid grid-cols-12 grid-rows-6 gap-4 p-4 overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0 col-span-12 row-span-6">
          <div className="absolute inset-0 bg-gradient-to-br from-black/80 via-slate-900/60 to-black/90 z-10"></div>
          {heroImages.map((image, index) => (
            <div
              key={index}
              className={`absolute inset-0 transition-all duration-3000 ${
                currentImageIndex === index ? 'opacity-40 scale-105' : 'opacity-0 scale-100'
              }`}
              style={{
                backgroundImage: `url(${image})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                filter: 'brightness(0.4) contrast(1.1)'
              }}
            />
          ))}
          
          {/* Floating Elements */}
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gold/10 rounded-full blur-3xl animate-pulse" 
               style={{ transform: `translateY(${scrollY * 0.3}px)` }} />
          <div className="absolute bottom-1/3 right-1/4 w-64 h-64 bg-white/5 rounded-full blur-2xl animate-pulse"
               style={{ transform: `translateY(${scrollY * -0.2}px)`, animationDelay: '2s' }} />
        </div>

        {/* Logo Section */}
        <div className="col-span-12 row-span-1 flex items-center justify-center z-20 relative">
          <div className={`transition-all duration-2000 ${isVisible ? 'animate-scale-in opacity-100' : 'opacity-0'}`}>
            <img 
              src="/lovable-uploads/fb01ca19-0340-4e03-8f65-cf04865664d6.png" 
              alt="The Art Barbershop Logo" 
              className="w-24 h-24 md:w-32 md:h-32 filter drop-shadow-2xl hover:scale-110 transition-transform duration-700 object-scale-down" 
            />
          </div>
        </div>

        {/* Main Headline */}
        <div className="col-span-12 md:col-span-8 md:col-start-3 row-span-2 flex flex-col items-center justify-center z-20 relative">
          <h1 className="text-6xl md:text-8xl lg:text-9xl font-playfair font-bold text-center leading-tight mb-4">
            <span className="block bg-gradient-to-r from-gold via-yellow-400 to-gold bg-clip-text text-transparent animate-glow">
              The Art
            </span>
            <span className="block text-3xl md:text-5xl lg:text-6xl font-montserrat font-light text-gray-300 mt-2">
              of Sophistication
            </span>
          </h1>
        </div>

        {/* Subtitle */}
        <div className="col-span-12 md:col-span-10 md:col-start-2 row-span-1 flex items-center justify-center z-20 relative">
          <p className="text-lg md:text-xl lg:text-2xl text-gray-300 font-montserrat text-center leading-relaxed animate-fade-in"
             style={{ animationDelay: '1s' }}>
            Where Ethiopian tradition meets modern luxury. Experience the pinnacle of men's grooming.
          </p>
        </div>

        {/* CTA Buttons */}
        <div className="col-span-12 md:col-span-8 md:col-start-3 row-span-1 flex flex-col md:flex-row gap-4 items-center justify-center z-20 relative">
          <Button 
            onClick={handleBookNow}
            className="group relative bg-gradient-to-r from-gold to-yellow-600 text-black hover:from-yellow-600 hover:to-gold font-montserrat font-bold text-lg px-10 py-6 rounded-full transition-all duration-500 hover:scale-105 shadow-2xl hover:shadow-gold/50 overflow-hidden"
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
            className="group border-2 border-gold text-gold hover:bg-gold hover:text-black font-montserrat font-semibold text-lg px-10 py-6 rounded-full transition-all duration-500 hover:scale-105 bg-transparent"
          >
            <Play className="mr-3 h-6 w-6 group-hover:scale-110 transition-transform duration-300" />
            Explore Services
          </Button>
        </div>

        {/* Scroll Indicator */}
        <div className="col-span-12 row-span-1 flex items-end justify-center z-20 relative pb-8">
          <div className="animate-bounce">
            <ChevronDown className="h-8 w-8 text-gold" />
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-gradient-to-r from-slate-800 to-slate-900">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <Card key={stat.label} className="bg-gradient-to-br from-white/10 to-white/5 border-white/20 backdrop-blur-xl text-center p-6 hover:scale-105 transition-all duration-500">
                <CardContent className="p-0">
                  <stat.icon className="h-12 w-12 text-gold mx-auto mb-4" />
                  <div className="text-3xl md:text-4xl font-bold text-white mb-2">{stat.number}</div>
                  <div className="text-gray-300 font-montserrat">{stat.label}</div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Premium Services Section */}
      <section id="services" className="py-32 bg-gradient-to-b from-slate-900 to-black relative overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="text-center mb-20">
            <div className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-gold/20 to-amber-500/20 backdrop-blur-sm rounded-full mb-8 border border-gold/30">
              <Scissors className="h-6 w-6 text-gold mr-4" />
              <span className="text-gold font-montserrat font-semibold text-lg">Premium Services</span>
            </div>
            <h2 className="text-5xl md:text-7xl font-playfair font-bold text-white mb-8">
              Artisan <span className="bg-gradient-to-r from-gold to-yellow-600 bg-clip-text text-transparent">Mastery</span>
            </h2>
            <p className="text-xl text-gray-300 font-montserrat max-w-3xl mx-auto leading-relaxed">
              Each service is a carefully curated experience, delivered by master craftsmen
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-8">
            {premiumServices.map((service, index) => (
              <Card 
                key={service.title} 
                className="group relative bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl border-2 border-white/20 transition-all duration-700 hover:scale-105 hover:shadow-2xl hover:shadow-gold/20 rounded-3xl overflow-hidden hover:border-gold/60"
                style={{ animationDelay: `${index * 200}ms` }}
              >
                {/* Service Image */}
                <div className="relative h-48 overflow-hidden rounded-t-3xl">
                  <img 
                    src={service.image} 
                    alt={service.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                  <div className="absolute top-4 right-4">
                    <div className={`w-12 h-12 bg-gradient-to-br from-${service.accent}/80 to-${service.accent} rounded-xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                      <service.icon className="w-6 h-6 text-white" />
                    </div>
                  </div>
                </div>

                <CardContent className="p-6 text-center relative z-10">
                  <h3 className="text-2xl font-playfair font-bold text-white mb-3 group-hover:text-gold transition-colors duration-300">
                    {service.title}
                  </h3>
                  
                  <p className="text-gray-300 font-montserrat mb-4 leading-relaxed">
                    {service.description}
                  </p>
                  
                  <div className="text-gold font-montserrat font-bold text-xl mb-4">
                    {service.price}
                  </div>

                  <div className="space-y-2 mb-6">
                    {service.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center text-sm text-gray-400">
                        <CheckCircle className="w-4 h-4 text-gold mr-2" />
                        {feature}
                      </div>
                    ))}
                  </div>
                  
                  <Button 
                    onClick={handleBookNow}
                    className="w-full bg-gradient-to-r from-gold to-yellow-600 text-black hover:from-yellow-600 hover:to-gold transition-all duration-300 rounded-xl py-3 font-semibold shadow-lg hover:shadow-gold/30"
                  >
                    Select Service
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Showcase */}
      <section className="py-32 bg-gradient-to-b from-black to-slate-900">
        <div className="container mx-auto px-4">
          <div className="text-center mb-20">
            <div className="inline-flex items-center px-8 py-4 bg-white/10 backdrop-blur-sm rounded-full mb-8 border border-white/20">
              <Award className="h-6 w-6 text-white mr-4" />
              <span className="text-white font-montserrat font-semibold text-lg">Our Artistry</span>
            </div>
            <h2 className="text-5xl md:text-7xl font-playfair font-bold text-white mb-8">
              Masterful <span className="bg-gradient-to-r from-gold to-white bg-clip-text text-transparent">Precision</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {heroImages.map((image, index) => (
              <div key={index} className="group relative overflow-hidden rounded-3xl shadow-2xl hover:shadow-gold/20 transition-all duration-700 hover:scale-105">
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
      <section className="py-32 bg-gradient-to-b from-slate-900 to-black">
        <div className="container mx-auto px-4">
          <div className="text-center mb-20">
            <div className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-gold/20 to-amber-500/20 backdrop-blur-sm rounded-full mb-8 border border-gold/30">
              <Star className="h-6 w-6 text-gold mr-4" />
              <span className="text-gold font-montserrat font-semibold text-lg">Client Excellence</span>
            </div>
            <h2 className="text-5xl md:text-7xl font-playfair font-bold text-white mb-8">
              Luxury <span className="bg-gradient-to-r from-gold to-yellow-600 bg-clip-text text-transparent">Recognized</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {testimonials.map((testimonial, index) => (
              <Card 
                key={testimonial.name} 
                className="group relative bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl border-0 transition-all duration-700 hover:scale-105 hover:shadow-2xl rounded-3xl overflow-hidden"
                style={{ animationDelay: `${index * 300}ms` }}
              >
                <CardContent className="p-8 relative z-10">
                  <div className="flex mb-6 justify-center">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="text-gold h-6 w-6 fill-current hover:scale-110 transition-transform duration-200" />
                    ))}
                  </div>
                  
                  <p className="text-gray-300 font-montserrat mb-6 italic leading-relaxed text-center">
                    "{testimonial.text}"
                  </p>
                  
                  <div className="border-t border-gold/30 pt-6 text-center">
                    <img 
                      src={testimonial.avatar} 
                      alt={testimonial.name}
                      className="w-16 h-16 rounded-full mx-auto mb-3 object-cover"
                    />
                    <p className="text-white font-playfair font-bold text-lg mb-1">
                      {testimonial.name}
                    </p>
                    <p className="text-gold font-montserrat font-medium text-sm">
                      {testimonial.role}
                    </p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact CTA Section */}
      <section className="py-20 bg-gradient-to-r from-gold/10 to-amber-500/10 border-t border-gold/20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h3 className="text-4xl md:text-5xl font-playfair font-bold text-white mb-6">
              Ready for the <span className="text-gold">Ultimate Experience?</span>
            </h3>
            <p className="text-xl text-gray-300 font-montserrat mb-8 leading-relaxed">
              Book your appointment today and discover why we're the premier choice for discerning gentlemen.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                onClick={handleBookNow}
                className="bg-gradient-to-r from-gold to-yellow-600 text-black hover:from-yellow-600 hover:to-gold font-montserrat font-bold text-lg px-8 py-4 rounded-full transition-all duration-300 hover:scale-105"
              >
                <Calendar className="mr-2 h-5 w-5" />
                Book Now
              </Button>
              <Button 
                variant="outline"
                className="border-2 border-gold text-gold hover:bg-gold hover:text-black font-montserrat font-semibold text-lg px-8 py-4 rounded-full transition-all duration-300"
              >
                <Phone className="mr-2 h-5 w-5" />
                Call Us
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
