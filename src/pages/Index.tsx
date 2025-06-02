import React, { useEffect, useState } from 'react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Switch } from '@/components/ui/switch';
import { useToast } from '@/hooks/use-toast';
import { useNavigate } from 'react-router-dom';
import { Scissors, Sparkles, Crown, Star, Users, Award, Calendar, Clock, Trophy, Shield, Play, ChevronDown, ArrowRight, CheckCircle, MapPin, Phone, Sun, Moon } from 'lucide-react';
const Index = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [scrollY, setScrollY] = useState(0);
  const [isDarkMode, setIsDarkMode] = useState(true);
  const {
    toast
  } = useToast();
  const navigate = useNavigate();
  const heroImages = ["/lovable-uploads/2f73b8eb-c08c-42d9-ad2d-8c3b4c89c695.png", "/lovable-uploads/400a0cf3-6dc8-4b52-a674-af3495eb386b.png", "/lovable-uploads/cd3c3732-5a9c-4a54-b64b-f50d0e71cab0.png"];
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
  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
  };
  const premiumServices = [{
    title: "Master Cuts",
    icon: Scissors,
    description: "Precision sculpting with artistic flair",
    price: "From 150 Birr",
    features: ["Consultation", "Wash & Cut", "Styling", "Finishing Touch"],
    image: "https://images.unsplash.com/photo-1503951914875-452162b0f3f1?w=500&q=80"
  }, {
    title: "Royal Treatment",
    icon: Crown,
    description: "Complete luxury grooming experience",
    price: "From 250 Birr",
    features: ["Hot Towel", "Beard Trim", "Massage", "Premium Products"],
    image: "https://images.unsplash.com/photo-1599351431202-1e0f0137899a?w=500&q=80"
  }, {
    title: "Beard Artistry",
    icon: Sparkles,
    description: "Expert beard styling and maintenance",
    price: "From 100 Birr",
    features: ["Shape & Trim", "Oil Treatment", "Precision Lines", "Aftercare"],
    image: "https://images.unsplash.com/photo-1621605815971-fbc98d665033?w=500&q=80"
  }, {
    title: "VIP Experience",
    icon: Trophy,
    description: "Private suite with premium services",
    price: "From 400 Birr",
    features: ["Private Suite", "Complimentary Drinks", "Extended Session", "Exclusive Products"],
    image: "https://images.unsplash.com/photo-1585747860715-2ba37e788b70?w=500&q=80"
  }];
  const testimonials = [{
    name: "Abebe Tadesse",
    text: "The Art delivers exceptional service. Every visit exceeds my expectations with their professional approach.",
    rating: 5,
    role: "Business Owner",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&q=80"
  }, {
    name: "Dawit Bekele",
    text: "Outstanding craftsmanship and attention to detail. This is truly premium barbering in Addis Ababa.",
    rating: 5,
    role: "Engineer",
    avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&q=80"
  }, {
    name: "Tekle Alemu",
    text: "Professional service from start to finish. The team understands modern Ethiopian gentleman's style perfectly.",
    rating: 5,
    role: "Teacher",
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&q=80"
  }];
  const stats = [{
    number: "2000+",
    label: "Happy Clients",
    icon: Users
  }, {
    number: "10+",
    label: "Years Experience",
    icon: Award
  }, {
    number: "98%",
    label: "Satisfaction Rate",
    icon: Star
  }, {
    number: "24/7",
    label: "Support",
    icon: Shield
  }];
  const themeClasses = isDarkMode ? "bg-gradient-to-br from-black via-gray-900 to-[#173d26]" : "bg-white";
  const textColor = isDarkMode ? "text-white" : "text-[#173d26]";
  const cardBg = isDarkMode ? "bg-gradient-to-br from-gray-800/50 to-[#173d26]/30" : "bg-white border-[#173d26]/20";
  return <div className={`min-h-screen transition-all duration-500 ${themeClasses} overflow-x-hidden`}>
      <Navigation />
      
      {/* Color Toggle */}
      <div className="fixed top-20 right-4 z-50 bg-black/20 backdrop-blur-sm rounded-full p-3 shadow-lg">
        <div className="flex items-center gap-3">
          <Sun className={`h-4 w-4 ${isDarkMode ? 'text-gray-400' : 'text-yellow-500'}`} />
          <Switch checked={isDarkMode} onCheckedChange={toggleTheme} />
          <Moon className={`h-4 w-4 ${isDarkMode ? 'text-yellow-400' : 'text-gray-400'}`} />
        </div>
      </div>
      
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background Images */}
        <div className="absolute inset-0">
          <div className={`absolute inset-0 ${isDarkMode ? 'bg-black/70' : 'bg-white/90'} z-10`}></div>
          {heroImages.map((image, index) => <div key={index} className={`absolute inset-0 transition-all duration-3000 ${currentImageIndex === index ? 'opacity-30 scale-105' : 'opacity-0 scale-100'}`} style={{
          backgroundImage: `url(${image})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }} />)}
        </div>

        {/* Content */}
        <div className="container mx-auto px-4 relative z-20">
          <div className={`max-w-4xl mx-auto text-center ${textColor}`}>
            {/* Logo */}
            <div className="mb-8">
              <img src="/lovable-uploads/fb01ca19-0340-4e03-8f65-cf04865664d6.png" alt="The Art Barbershop Logo" className="w-24 h-24 md:w-32 md:h-32 mx-auto filter drop-shadow-2xl object-contain" />
            </div>

            <h1 className="text-6xl md:text-8xl font-playfair font-bold leading-tight mb-6">
              <span className={`block ${textColor}`}>The Art</span>
              <span className="block text-3xl md:text-5xl font-montserrat bg-gradient-to-r from-[#efe0bf] to-[#f0c515] bg-clip-text mt-2 text-[#937800] font-normal">
                of Sophistication
              </span>
            </h1>

            <p className={`text-xl md:text-2xl ${isDarkMode ? 'text-gray-300' : 'text-[#173d26]/80'} font-montserrat mb-8 leading-relaxed`}>
              Where Ethiopian tradition meets modern luxury. Experience the pinnacle of men's grooming.
            </p>

            <div className="flex flex-col md:flex-row gap-4 justify-center mb-12">
              <Button onClick={handleBookNow} className="bg-gradient-to-r from-[#937800] to-[#f0c515] text-[#173d26] hover:from-[#f0c515] hover:to-[#efe0bf] font-montserrat font-bold text-lg px-10 py-6 rounded-full transition-all duration-300 hover:scale-105 shadow-xl">
                <Calendar className="mr-3 h-6 w-6" />
                Book Your Experience
              </Button>
              
              <Button variant="outline" onClick={() => document.getElementById('services')?.scrollIntoView({
              behavior: 'smooth'
            })} className={`border-2 ${isDarkMode ? 'border-[#f0c515] text-[#f0c515] hover:bg-[#f0c515] hover:text-[#173d26]' : 'border-[#173d26] text-[#173d26] hover:bg-[#173d26] hover:text-white'} font-montserrat font-semibold text-lg px-10 py-6 rounded-full transition-all duration-300 shadow-lg`}>
                <Play className="mr-3 h-6 w-6" />
                Explore Services
              </Button>
            </div>

            {/* Scroll Indicator */}
            <div className="animate-bounce">
              <ChevronDown className={`h-8 w-8 ${isDarkMode ? 'text-[#f0c515]' : 'text-[#173d26]'} mx-auto`} />
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
            {stats.map((stat, index) => <Card key={stat.label} className="bg-white shadow-xl text-center p-6 hover:shadow-2xl transition-all duration-300 hover:scale-105 rounded-2xl border border-[#173d26]/10">
                <CardContent className="p-0">
                  <stat.icon className="h-12 w-12 text-[#173d26] mx-auto mb-4" />
                  <div className="text-4xl font-montserrat font-bold text-[#173d26] mb-2">{stat.number}</div>
                  <div className="text-[#173d26]/70 font-montserrat">{stat.label}</div>
                </CardContent>
              </Card>)}
          </div>
        </div>
      </section>

      {/* Premium Services Section */}
      <section id="services" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-8 py-4 bg-[#173d26]/10 border-[#173d26]/20 rounded-full mb-8 border">
              <Scissors className="h-6 w-6 text-[#173d26] mr-4" />
              <span className="text-[#173d26] font-montserrat font-semibold text-lg">Premium Services</span>
            </div>
            <h2 className="text-5xl md:text-6xl font-playfair font-bold text-[#173d26] mb-8">
              Artisan <span className="bg-gradient-to-r from-[#efe0bf] to-[#f0c515] bg-clip-text italic font-bold text-[937800] text-[#937800]">Mastery</span>
            </h2>
            <p className="text-xl text-[#173d26]/80 font-montserrat max-w-3xl mx-auto leading-relaxed">
              Each service is a carefully curated experience, delivered by master craftsmen
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-8">
            {premiumServices.map((service, index) => <Card key={service.title} className="bg-white shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 overflow-hidden rounded-2xl border border-[#173d26]/10">
                {/* Service Image */}
                <div className="relative h-48 overflow-hidden">
                  <img src={service.image} alt={service.title} className="w-full h-full object-cover hover:scale-110 transition-transform duration-300" />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#173d26]/80 to-transparent"></div>
                  <div className="absolute top-4 right-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-[#efe0bf] to-[#f0c515] rounded-xl flex items-center justify-center shadow-lg">
                      <service.icon className="w-6 h-6 text-[#173d26]" />
                    </div>
                  </div>
                </div>

                <CardContent className="p-6">
                  <h3 className="text-2xl font-playfair font-bold text-[#173d26] mb-3">
                    {service.title}
                  </h3>
                  
                  <p className="text-[#173d26]/70 font-montserrat mb-4 leading-relaxed">
                    {service.description}
                  </p>
                  
                  <div className="bg-gradient-to-r from-[#937800] to-[#f0c515] bg-clip-text text-transparent font-montserrat font-bold text-xl mb-4 bg-slate-950">
                    {service.price}
                  </div>

                  <div className="space-y-2 mb-6">
                    {service.features.map((feature, idx) => <div key={idx} className="flex items-center text-sm text-[#173d26]/70">
                        <CheckCircle className="w-4 h-4 text-[#173d26] mr-2" />
                        {feature}
                      </div>)}
                  </div>
                  
                  <Button onClick={handleBookNow} className="w-full bg-gradient-to-r from-[#937800] to-[#f0c515] text-[#173d26] hover:from-[#f0c515] hover:to-[#efe0bf] transition-all duration-300 rounded-xl py-3 font-semibold shadow-lg hover:shadow-xl">
                    Select Service
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </CardContent>
              </Card>)}
          </div>
        </div>
      </section>

      {/* Gallery Showcase */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-8 py-4 bg-white rounded-full mb-8 border border-[#173d26]/20 shadow-sm">
              <Award className="h-6 w-6 text-[#173d26] mr-4" />
              <span className="text-[#173d26] font-montserrat font-semibold text-lg">Our Artistry</span>
            </div>
            <h2 className="text-5xl md:text-6xl font-playfair font-bold text-[#173d26] mb-8">
              Masterful <span className="bg-gradient-to-r from-[#efe0bf] to-[#f0c515] bg-clip-text italic text-[#937800] font-bold">Precision</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {heroImages.map((image, index) => <div key={index} className="relative overflow-hidden rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-1">
                <div className="aspect-[4/5] relative group">
                  <img src={image} alt={`The Art Barbershop Mastery ${index + 1}`} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#173d26]/90 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <div className="absolute bottom-8 left-8 right-8 transform translate-y-8 group-hover:translate-y-0 transition-transform duration-500 opacity-0 group-hover:opacity-100">
                    <h3 className="text-white font-playfair font-bold text-2xl mb-3 bg-gradient-to-r from-[#efe0bf] to-[#f0c515] bg-clip-text text-transparent">
                      {index === 0 ? 'Precision Artistry' : index === 1 ? 'Master Styling' : 'Luxury Experience'}
                    </h3>
                    <p className="text-gray-300 font-montserrat">
                      {index === 0 ? 'Expert cuts with mathematical precision' : index === 1 ? 'Sophisticated styling techniques' : 'Complete grooming luxury'}
                    </p>
                  </div>
                </div>
              </div>)}
          </div>
        </div>
      </section>

      {/* Ethiopian Testimonials */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-8 py-4 bg-[#173d26]/10 border-[#173d26]/20 rounded-full mb-8 border">
              <Star className="h-6 w-6 text-[#173d26] mr-4" />
              <span className="text-[#173d26] font-montserrat font-semibold text-lg">Client Excellence</span>
            </div>
            <h2 className="text-5xl md:text-6xl font-playfair font-bold text-[#173d26] mb-8">
              Trusted by <span className="bg-gradient-to-r from-[#efe0bf] to-[#f0c515] bg-clip-text italic text-[#937800]">Professionals</span>
            </h2>
            <p className="text-xl text-[#173d26]/80 font-montserrat max-w-2xl mx-auto">
              Hear from our satisfied clients across Addis Ababa
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {testimonials.map((testimonial, index) => <Card key={testimonial.name} className="bg-white shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 rounded-2xl border border-[#173d26]/10">
                <CardContent className="p-8">
                  <div className="flex mb-6 justify-center">
                    {[...Array(testimonial.rating)].map((_, i) => <Star key={i} className="text-[#173d26] h-6 w-6 fill-current" />)}
                  </div>
                  
                  <p className="text-[#173d26]/70 font-montserrat mb-6 italic leading-relaxed text-center">
                    "{testimonial.text}"
                  </p>
                  
                  <div className="border-t border-[#173d26]/20 pt-6 text-center">
                    <img src={testimonial.avatar} alt={testimonial.name} className="w-16 h-16 rounded-full mx-auto mb-3 object-cover" />
                    <p className="text-[#173d26] font-playfair font-bold text-lg mb-1">
                      {testimonial.name}
                    </p>
                    <p className="text-[#173d26] font-montserrat font-medium text-sm">
                      {testimonial.role}
                    </p>
                  </div>
                </CardContent>
              </Card>)}
          </div>
        </div>
      </section>

      {/* Contact CTA Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center px-8 py-4 bg-[#173d26]/10 border-[#173d26]/20 rounded-full mb-8 border">
              <Star className="h-6 w-6 text-[#173d26] mr-4" />
              <span className="text-[#173d26] font-montserrat font-semibold text-lg">Ready for Your Transformation?</span>
            </div>
            <h3 className="text-4xl md:text-5xl font-playfair font-bold text-[#173d26] mb-6">
              Become Part of Our <span className="bg-gradient-to-r from-[#efe0bf] to-[#f0c515] bg-clip-text italic text-[#937800]">Gallery</span>
            </h3>
            <p className="text-xl text-[#173d26]/80 font-montserrat mb-8 leading-relaxed">
              Experience the artistry that transforms not just your look, but your confidence. 
              Book your session and join our collection of satisfied clients.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button onClick={handleBookNow} className="bg-gradient-to-r from-[#937800] to-[#f0c515] text-[#173d26] hover:from-[#f0c515] hover:to-[#efe0bf] font-montserrat font-bold text-lg px-8 py-4 rounded-full shadow-xl hover:shadow-2xl hover:scale-105 transition-all duration-300">
                <Calendar className="mr-2 h-5 w-5" />
                Book Your Experience
              </Button>
              <Button variant="outline" className="border-2 border-[#173d26] text-[#173d26] hover:bg-[#173d26] hover:text-white font-montserrat font-semibold text-lg px-8 py-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300">
                <Phone className="mr-2 h-5 w-5" />
                Call 0935652525
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>;
};
export default Index;