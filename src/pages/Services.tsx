
import React from 'react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const Services = () => {
  const services = [
    {
      title: "Signature Cuts",
      description: "Custom haircuts tailored to your face shape and personal style",
      price: "Starting at $40",
      duration: "45-60 min",
      features: ["Consultation", "Precision Cut", "Style Finish", "Hot Towel"],
      icon: "✂️",
      popular: false
    },
    {
      title: "Master Fade",
      description: "Expert fade techniques from skin fades to high top fades",
      price: "Starting at $35",
      duration: "30-45 min",
      features: ["Skin Fade", "Taper Fade", "Drop Fade", "Temple Fade"],
      icon: "🔥",
      popular: true
    },
    {
      title: "Beard Sculpting",
      description: "Professional beard trimming, shaping, and grooming",
      price: "Starting at $25",
      duration: "20-30 min",
      features: ["Trim & Shape", "Line-up", "Beard Oil", "Hot Towel"],
      icon: "🧔",
      popular: false
    },
    {
      title: "Hair Artistry",
      description: "Creative designs, patterns, and artistic expressions",
      price: "Starting at $50",
      duration: "60-90 min",
      features: ["Custom Design", "Precision Lines", "Geometric Patterns", "Logo Creation"],
      icon: "🎨",
      popular: false
    },
    {
      title: "The Full Experience",
      description: "Complete grooming package with all premium services",
      price: "Starting at $75",
      duration: "90-120 min",
      features: ["Cut & Fade", "Beard Work", "Hot Towel", "Scalp Massage", "Style Finish"],
      icon: "💎",
      popular: true
    },
    {
      title: "Express Touch-Up",
      description: "Quick maintenance for existing cuts and styles",
      price: "Starting at $20",
      duration: "15-20 min",
      features: ["Edge-up", "Beard Trim", "Quick Clean-up"],
      icon: "⚡",
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
    <div className="min-h-screen bg-obsidian">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-forest via-forest/70 to-transparent z-10"></div>
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1622286346003-c4b4f5d3b7bc?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80')] bg-cover bg-center"></div>
        
        <div className="relative z-20 container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-7xl font-montserrat font-black text-gold mb-6 animate-fade-in">
              Our <span className="font-playfair italic">Services</span>
            </h1>
            <p className="text-xl md:text-2xl text-white font-montserrat font-light animate-fade-in">
              Premium Grooming Tailored to Perfection
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-forest">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-montserrat font-bold text-gold mb-6 animate-fade-in">
              Signature Services
            </h2>
            <p className="text-xl text-gray-300 font-montserrat max-w-2xl mx-auto animate-fade-in">
              Each service is crafted with precision and delivered with the highest standards of excellence
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card 
                key={service.title} 
                className={`relative bg-obsidian border-bronze hover:border-gold transition-all duration-500 hover:scale-105 group animate-scale-in ${
                  service.popular ? 'ring-2 ring-gold' : ''
                }`}
                style={{animationDelay: `${index * 150}ms`}}
              >
                {service.popular && (
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                    <span className="bg-gold text-forest px-4 py-1 rounded-full text-sm font-montserrat font-bold">
                      Most Popular
                    </span>
                  </div>
                )}
                <CardContent className="p-8">
                  <div className="text-center mb-6">
                    <div className="text-6xl mb-4 group-hover:scale-110 transition-transform duration-300">
                      {service.icon}
                    </div>
                    <h3 className="text-2xl font-montserrat font-bold text-gold mb-3">
                      {service.title}
                    </h3>
                    <p className="text-gray-300 font-montserrat mb-4">
                      {service.description}
                    </p>
                  </div>

                  <div className="space-y-4 mb-6">
                    <div className="flex justify-between items-center">
                      <span className="text-gray-400 font-montserrat">Price:</span>
                      <span className="text-gold font-montserrat font-bold">{service.price}</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-gray-400 font-montserrat">Duration:</span>
                      <span className="text-gray-300 font-montserrat">{service.duration}</span>
                    </div>
                  </div>

                  <div className="mb-6">
                    <h4 className="text-gold font-montserrat font-semibold mb-3">Includes:</h4>
                    <ul className="space-y-2">
                      {service.features.map((feature, idx) => (
                        <li key={idx} className="text-gray-300 font-montserrat text-sm flex items-center">
                          <span className="text-gold mr-2">•</span>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <Button className="w-full bg-gold text-forest hover:bg-gold/90 font-montserrat font-bold py-3 rounded-full transition-all duration-300 hover:scale-105">
                    Book This Service
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Add-ons Section */}
      <section className="py-20 bg-gradient-to-r from-sage to-pine">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-montserrat font-bold text-gold mb-6 animate-fade-in">
              Premium Add-Ons
            </h2>
            <p className="text-xl text-gray-300 font-montserrat max-w-2xl mx-auto animate-fade-in">
              Enhance your experience with our luxury additional services
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {addOns.map((addon, index) => (
              <Card 
                key={addon.service} 
                className={`bg-obsidian border-bronze hover:border-gold transition-all duration-500 hover:scale-105 animate-fade-in`}
                style={{animationDelay: `${index * 100}ms`}}
              >
                <CardContent className="p-6 text-center">
                  <h3 className="text-lg font-montserrat font-bold text-gold mb-2">
                    {addon.service}
                  </h3>
                  <p className="text-2xl font-montserrat font-bold text-gold mb-3">
                    {addon.price}
                  </p>
                  <p className="text-gray-300 font-montserrat text-sm">
                    {addon.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Booking CTA */}
      <section className="py-20 bg-obsidian">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-montserrat font-bold text-gold mb-6 animate-fade-in">
            Ready to Experience <span className="font-playfair italic">Excellence</span>?
          </h2>
          <p className="text-xl text-gray-300 font-montserrat mb-8 max-w-2xl mx-auto animate-fade-in">
            Book your appointment today and discover why The Art is the premier destination for discerning gentlemen.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button className="bg-gold text-forest hover:bg-gold/90 font-montserrat font-bold text-lg px-8 py-4 rounded-full transition-all duration-300 hover:scale-105 animate-glow">
              Book Appointment
            </Button>
            <Button variant="outline" className="border-gold text-gold hover:bg-gold hover:text-forest font-montserrat font-bold text-lg px-8 py-4 rounded-full transition-all duration-300 hover:scale-105">
              Call Us: (555) 123-4567
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Services;
