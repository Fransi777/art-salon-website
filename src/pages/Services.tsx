
import React from 'react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Scissors, Sparkles, Crown, Star, Zap, Gem } from 'lucide-react';

const Services = () => {
  const services = [
    {
      title: "Signature Cuts",
      description: "Custom haircuts tailored to your face shape and personal style",
      price: "Starting at $40",
      duration: "45-60 min",
      features: ["Consultation", "Precision Cut", "Style Finish", "Hot Towel"],
      icon: Scissors,
      popular: false
    },
    {
      title: "Master Fade",
      description: "Expert fade techniques from skin fades to high top fades",
      price: "Starting at $35",
      duration: "30-45 min",
      features: ["Skin Fade", "Taper Fade", "Drop Fade", "Temple Fade"],
      icon: Sparkles,
      popular: true
    },
    {
      title: "Beard Sculpting",
      description: "Professional beard trimming, shaping, and grooming",
      price: "Starting at $25",
      duration: "20-30 min",
      features: ["Trim & Shape", "Line-up", "Beard Oil", "Hot Towel"],
      icon: Crown,
      popular: false
    },
    {
      title: "Hair Artistry",
      description: "Creative designs, patterns, and artistic expressions",
      price: "Starting at $50",
      duration: "60-90 min",
      features: ["Custom Design", "Precision Lines", "Geometric Patterns", "Logo Creation"],
      icon: Star,
      popular: false
    },
    {
      title: "The Full Experience",
      description: "Complete grooming package with all premium services",
      price: "Starting at $75",
      duration: "90-120 min",
      features: ["Cut & Fade", "Beard Work", "Hot Towel", "Scalp Massage", "Style Finish"],
      icon: Gem,
      popular: true
    },
    {
      title: "Express Touch-Up",
      description: "Quick maintenance for existing cuts and styles",
      price: "Starting at $20",
      duration: "15-20 min",
      features: ["Edge-up", "Beard Trim", "Quick Clean-up"],
      icon: Zap,
      popular: false
    }
  ];

  const addOns = [
    {
      service: "Hot Towel Treatment",
      price: "$10",
      description: "Relaxing hot towel application with premium oils"
    },
    {
      service: "Scalp Massage",
      price: "$15",
      description: "Therapeutic scalp massage with essential oils"
    },
    {
      service: "Eyebrow Trim",
      price: "$10",
      description: "Professional eyebrow grooming and shaping"
    },
    {
      service: "Nose Hair Trim",
      price: "$5",
      description: "Quick and precise nose hair trimming"
    }
  ];

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
                  Premium
                  <br />
                  <span className="text-obsidian">Services</span>
                  <br />
                  <span className="font-playfair italic text-5xl md:text-6xl text-sage">For You</span>
                </h1>
              </div>
              
              <p className="text-lg text-gray-600 font-montserrat max-w-lg leading-relaxed">
                Experience exceptional grooming with our signature services. From precision cuts to artistic designs, 
                each service is crafted with the highest standards of excellence.
              </p>

              <Button className="bg-sage text-white hover:bg-sage/90 font-montserrat font-bold text-lg px-8 py-4 rounded-lg transition-all duration-300 hover:scale-105">
                Book Your Service
              </Button>
            </div>

            {/* Right Content - Service Showcase */}
            <div className="lg:col-span-6 relative">
              <div className="relative animate-slide-in-right">
                <div className="absolute inset-0 bg-gradient-to-br from-sage/20 to-bronze/20 rounded-3xl transform rotate-3"></div>
                <div className="relative bg-white rounded-3xl shadow-2xl p-4 transform -rotate-2 hover:rotate-0 transition-transform duration-500">
                  <img 
                    src="https://images.unsplash.com/photo-1503951914875-452162b0f3f1?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                    alt="Premium Services" 
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

      {/* Services Grid */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-montserrat font-bold text-obsidian mb-6">
              Signature Services
            </h2>
            <p className="text-xl text-gray-600 font-montserrat max-w-2xl mx-auto">
              Each service is crafted with precision and delivered with the highest standards of excellence
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card 
                key={service.title} 
                className={`relative group bg-white border-0 shadow-lg hover:shadow-xl transition-all duration-500 hover:scale-105 hover:-translate-y-2 ${
                  service.popular ? 'ring-2 ring-sage' : ''
                }`}
              >
                {service.popular && (
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                    <span className="bg-sage text-white px-4 py-1 rounded-full text-sm font-montserrat font-bold">
                      Most Popular
                    </span>
                  </div>
                )}
                <CardContent className="p-8">
                  <div className="text-center mb-6">
                    <div className="w-16 h-16 bg-sage/10 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:bg-sage group-hover:scale-110 transition-all duration-300">
                      <service.icon className="h-8 w-8 text-sage group-hover:text-white transition-colors duration-300" />
                    </div>
                    <h3 className="text-2xl font-montserrat font-bold text-obsidian mb-3 group-hover:text-sage transition-colors duration-300">
                      {service.title}
                    </h3>
                    <p className="text-gray-600 font-montserrat mb-4">
                      {service.description}
                    </p>
                  </div>

                  <div className="space-y-4 mb-6">
                    <div className="flex justify-between items-center">
                      <span className="text-gray-500 font-montserrat">Price:</span>
                      <span className="text-sage font-montserrat font-bold">{service.price}</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-gray-500 font-montserrat">Duration:</span>
                      <span className="text-gray-600 font-montserrat">{service.duration}</span>
                    </div>
                  </div>

                  <div className="mb-6">
                    <h4 className="text-sage font-montserrat font-semibold mb-3">Includes:</h4>
                    <ul className="space-y-2">
                      {service.features.map((feature, idx) => (
                        <li key={idx} className="text-gray-600 font-montserrat text-sm flex items-center">
                          <span className="text-sage mr-2">•</span>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <Button className="w-full bg-sage text-white hover:bg-sage/90 font-montserrat font-bold py-3 rounded-lg transition-all duration-300 hover:scale-105">
                    Book This Service
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Add-ons Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-montserrat font-bold text-obsidian mb-6">
              Premium Add-Ons
            </h2>
            <p className="text-xl text-gray-600 font-montserrat max-w-2xl mx-auto">
              Enhance your experience with our luxury additional services
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {addOns.map((addon, index) => (
              <Card 
                key={addon.service} 
                className="group bg-white border-0 shadow-lg hover:shadow-xl transition-all duration-500 hover:scale-105 hover:-translate-y-2"
              >
                <CardContent className="p-6 text-center">
                  <h3 className="text-lg font-montserrat font-bold text-obsidian mb-2 group-hover:text-sage transition-colors duration-300">
                    {addon.service}
                  </h3>
                  <p className="text-2xl font-montserrat font-bold text-sage mb-3">
                    {addon.price}
                  </p>
                  <p className="text-gray-600 font-montserrat text-sm">
                    {addon.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Services;
