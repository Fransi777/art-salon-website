
import React, { useEffect, useState } from 'react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';

const Index = () => {
  const [isVisible, setIsVisible] = useState(false);
  const { toast } = useToast();

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const handleBooking = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Booking Request Sent!",
      description: "We'll contact you soon to confirm your appointment.",
    });
  };

  const services = [
    {
      title: "Precision Fades",
      description: "Expert fade cuts tailored to your style",
      icon: "✂️",
      price: "$35"
    },
    {
      title: "Beard Sculpting",
      description: "Professional beard trimming and shaping",
      icon: "🧔",
      price: "$25"
    },
    {
      title: "Hair Artistry",
      description: "Creative designs and patterns",
      icon: "🎨",
      price: "$45"
    },
    {
      title: "Full Grooming",
      description: "Complete barbershop experience",
      icon: "💎",
      price: "$65"
    }
  ];

  const testimonials = [
    {
      name: "Marcus Johnson",
      text: "The Art transformed my look completely. Best barbershop in the city!",
      rating: 5
    },
    {
      name: "Kevin Washington",
      text: "Professional service and incredible attention to detail. Highly recommended.",
      rating: 5
    },
    {
      name: "Andre Thompson",
      text: "Been coming here for 2 years. Consistency and quality every single time.",
      rating: 5
    }
  ];

  return (
    <div className="min-h-screen bg-obsidian">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-forest via-forest/90 to-transparent z-10"></div>
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1503951914875-452162b0f3f1?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80')] bg-cover bg-center"></div>
        
        <div className="relative z-20 text-center px-4 max-w-4xl mx-auto">
          <h1 className={`text-5xl md:text-7xl font-montserrat font-black text-gold mb-6 transition-all duration-1000 ${
            isVisible ? 'animate-fade-in' : 'opacity-0'
          }`}>
            THE <span className="font-playfair italic">ART</span>
          </h1>
          <p className={`text-xl md:text-2xl text-white font-montserrat font-light mb-8 transition-all duration-1000 delay-300 ${
            isVisible ? 'animate-fade-in' : 'opacity-0'
          }`}>
            Where Style Meets Craftsmanship
          </p>
          <p className={`text-lg text-gray-300 font-montserrat max-w-2xl mx-auto mb-10 transition-all duration-1000 delay-500 ${
            isVisible ? 'animate-fade-in' : 'opacity-0'
          }`}>
            Experience premium Afro-centric barbering with precision cuts, expert fades, 
            and artistic grooming that celebrates your unique style.
          </p>
          <div className={`flex flex-col sm:flex-row gap-4 justify-center transition-all duration-1000 delay-700 ${
            isVisible ? 'animate-fade-in' : 'opacity-0'
          }`}>
            <Button className="bg-gold text-forest hover:bg-gold/90 font-montserrat font-bold text-lg px-8 py-4 rounded-full transition-all duration-300 hover:scale-105 animate-glow">
              Book Appointment
            </Button>
            <Button variant="outline" className="border-gold text-gold hover:bg-gold hover:text-forest font-montserrat font-bold text-lg px-8 py-4 rounded-full transition-all duration-300 hover:scale-105">
              View Gallery
            </Button>
          </div>
        </div>

        {/* Floating Elements */}
        <div className="absolute top-1/4 left-10 w-20 h-20 bg-gold/20 rounded-full blur-lg animate-float"></div>
        <div className="absolute bottom-1/4 right-10 w-16 h-16 bg-bronze/20 rounded-full blur-lg animate-float" style={{animationDelay: '1s'}}></div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-forest relative">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-montserrat font-bold text-gold mb-6 animate-fade-in">
              Our Services
            </h2>
            <p className="text-xl text-gray-300 font-montserrat max-w-2xl mx-auto animate-fade-in">
              Precision cuts and expert grooming tailored to celebrate your unique style
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <Card key={service.title} className={`bg-obsidian border-bronze hover:border-gold transition-all duration-500 hover:scale-105 hover:shadow-2xl group animate-scale-in`} style={{animationDelay: `${index * 200}ms`}}>
                <CardContent className="p-8 text-center">
                  <div className="text-6xl mb-6 group-hover:scale-110 transition-transform duration-300">
                    {service.icon}
                  </div>
                  <h3 className="text-2xl font-montserrat font-bold text-gold mb-4">
                    {service.title}
                  </h3>
                  <p className="text-gray-300 font-montserrat mb-6">
                    {service.description}
                  </p>
                  <div className="text-3xl font-montserrat font-bold text-gold">
                    {service.price}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* About Preview */}
      <section className="py-20 bg-gradient-to-r from-sage to-pine relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1521587760476-6c12a4b040da?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80')] bg-cover bg-center opacity-20"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="animate-slide-in-left">
              <h2 className="text-4xl md:text-5xl font-montserrat font-bold text-gold mb-6">
                Crafting <span className="font-playfair italic">Excellence</span>
              </h2>
              <p className="text-xl text-gray-200 font-montserrat mb-8 leading-relaxed">
                At The Art, we believe barbering is more than just a haircut—it's an art form. 
                Our master barbers combine traditional techniques with modern innovation to deliver 
                exceptional grooming experiences that celebrate Afro-centric style.
              </p>
              <Button className="bg-gold text-forest hover:bg-gold/90 font-montserrat font-bold px-8 py-4 rounded-full transition-all duration-300 hover:scale-105">
                Learn Our Story
              </Button>
            </div>
            <div className="animate-slide-in-right">
              <div className="relative">
                <img 
                  src="https://images.unsplash.com/photo-1622286346003-c4b4f5d3b7bc?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                  alt="Master Barber at Work" 
                  className="rounded-2xl shadow-2xl hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-gold/20 rounded-full blur-xl"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-obsidian">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-montserrat font-bold text-gold mb-6">
              What Our Clients Say
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={testimonial.name} className={`bg-forest border-bronze hover:border-gold transition-all duration-500 hover:scale-105 animate-fade-in`} style={{animationDelay: `${index * 300}ms`}}>
                <CardContent className="p-8">
                  <div className="flex mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <span key={i} className="text-gold text-xl">★</span>
                    ))}
                  </div>
                  <p className="text-gray-300 font-montserrat mb-6 italic">
                    "{testimonial.text}"
                  </p>
                  <p className="text-gold font-montserrat font-semibold">
                    - {testimonial.name}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Booking Section */}
      <section className="py-20 bg-gradient-to-r from-forest to-sage">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-montserrat font-bold text-gold mb-6 animate-fade-in">
              Book Your <span className="font-playfair italic">Experience</span>
            </h2>
            <p className="text-xl text-gray-300 font-montserrat mb-12 animate-fade-in">
              Ready to experience the art of premium barbering? Book your appointment today.
            </p>

            <Card className="bg-obsidian border-bronze shadow-2xl animate-scale-in">
              <CardContent className="p-8">
                <form onSubmit={handleBooking} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <Input 
                      placeholder="Your Name" 
                      className="bg-forest border-bronze text-gold placeholder:text-gray-400 focus:border-gold transition-colors duration-300"
                      required
                    />
                    <Input 
                      type="email" 
                      placeholder="Email Address" 
                      className="bg-forest border-bronze text-gold placeholder:text-gray-400 focus:border-gold transition-colors duration-300"
                      required
                    />
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <Input 
                      type="tel" 
                      placeholder="Phone Number" 
                      className="bg-forest border-bronze text-gold placeholder:text-gray-400 focus:border-gold transition-colors duration-300"
                      required
                    />
                    <Input 
                      type="date" 
                      className="bg-forest border-bronze text-gold focus:border-gold transition-colors duration-300"
                      required
                    />
                  </div>
                  <Textarea 
                    placeholder="Preferred service and any special requests..." 
                    rows={4}
                    className="bg-forest border-bronze text-gold placeholder:text-gray-400 focus:border-gold transition-colors duration-300"
                  />
                  <Button type="submit" className="w-full bg-gold text-forest hover:bg-gold/90 font-montserrat font-bold text-lg py-4 rounded-full transition-all duration-300 hover:scale-105">
                    Book Appointment
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
