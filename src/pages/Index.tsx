
import React, { useEffect, useState } from 'react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';
import { Scissors, Sparkles, Crown, Star, Users, Award, Calendar } from 'lucide-react';

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
      icon: Scissors,
      price: "$35"
    },
    {
      title: "Beard Sculpting",
      description: "Professional beard trimming and shaping",
      icon: Sparkles,
      price: "$25"
    },
    {
      title: "Hair Artistry",
      description: "Creative designs and patterns",
      icon: Crown,
      price: "$45"
    },
    {
      title: "Full Grooming",
      description: "Complete barbershop experience",
      icon: Star,
      price: "$65"
    }
  ];

  const stats = [
    { number: "+20", label: "Years Of Experience", icon: Award },
    { number: "+80", label: "Our Awesome Expert", icon: Users },
    { number: "+20K", label: "Happy Customer", icon: Star }
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
    <div className="min-h-screen bg-white">
      <Navigation />
      
      {/* Hero Section - Inspired by reference layout */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center min-h-[80vh]">
            {/* Left Content */}
            <div className="lg:col-span-6 space-y-8">
              <div className={`transition-all duration-1000 ${isVisible ? 'animate-fade-in' : 'opacity-0'}`}>
                <h1 className="text-6xl md:text-7xl font-montserrat font-black text-obsidian leading-tight">
                  Find The best
                  <br />
                  <span className="text-obsidian">Barber Shop</span>
                  <br />
                  <span className="font-playfair italic text-5xl md:text-6xl text-sage">For you</span>
                </h1>
              </div>
              
              <p className={`text-lg text-gray-600 font-montserrat max-w-lg leading-relaxed transition-all duration-1000 delay-300 ${
                isVisible ? 'animate-fade-in' : 'opacity-0'
              }`}>
                Haircut Services For men and women, Where here the customer's hair, scalp, Face and body can be pampered, with the best services and facilities.
              </p>

              <div className={`flex flex-col sm:flex-row gap-4 transition-all duration-1000 delay-500 ${
                isVisible ? 'animate-fade-in' : 'opacity-0'
              }`}>
                <Button className="bg-sage text-white hover:bg-sage/90 font-montserrat font-bold text-lg px-8 py-4 rounded-lg transition-all duration-300 hover:scale-105">
                  <Calendar className="mr-2 h-5 w-5" />
                  Book Now
                </Button>
                <Button variant="outline" className="border-obsidian text-obsidian hover:bg-obsidian hover:text-white font-montserrat font-bold text-lg px-8 py-4 rounded-lg transition-all duration-300 hover:scale-105">
                  ▶ Watch Video
                </Button>
              </div>

              {/* Stats Section */}
              <div className={`grid grid-cols-3 gap-6 pt-8 transition-all duration-1000 delay-700 ${
                isVisible ? 'animate-fade-in' : 'opacity-0'
              }`}>
                {stats.map((stat, index) => (
                  <div key={stat.label} className="text-center">
                    <div className="flex justify-center mb-2">
                      <stat.icon className="h-6 w-6 text-sage" />
                    </div>
                    <div className="text-3xl font-montserrat font-bold text-sage mb-1">
                      {stat.number}
                    </div>
                    <div className="text-sm text-gray-600 font-montserrat">
                      {stat.label}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Content - Hero Image */}
            <div className="lg:col-span-6 relative">
              <div className={`relative transition-all duration-1000 delay-300 ${
                isVisible ? 'animate-slide-in-right' : 'opacity-0'
              }`}>
                {/* Main Hero Image */}
                <div className="relative">
                  <div className="absolute inset-0 bg-gradient-to-br from-sage/20 to-bronze/20 rounded-3xl transform rotate-3"></div>
                  <div className="relative bg-white rounded-3xl shadow-2xl p-4 transform -rotate-2 hover:rotate-0 transition-transform duration-500">
                    <img 
                      src="https://images.unsplash.com/photo-1622286346003-c4b4f5d3b7bc?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                      alt="Professional Afro Haircut" 
                      className="w-full h-[500px] object-cover rounded-2xl"
                    />
                  </div>
                </div>

                {/* Floating "Show more" button */}
                <div className="absolute bottom-8 right-8">
                  <div className="w-16 h-16 bg-obsidian rounded-full flex items-center justify-center text-white font-montserrat font-semibold text-sm hover:scale-110 transition-transform duration-300 cursor-pointer">
                    Show<br />more
                  </div>
                </div>

                {/* Background decorative elements */}
                <div className="absolute -top-8 -left-8 w-32 h-32 bg-gold/20 rounded-full blur-xl"></div>
                <div className="absolute -bottom-8 -right-8 w-24 h-24 bg-sage/20 rounded-full blur-lg"></div>
              </div>

              {/* Pagination dots */}
              <div className="flex justify-center mt-8 space-x-2">
                <button className="w-3 h-3 bg-sage rounded-full"></button>
                <button className="w-3 h-3 bg-gray-300 rounded-full"></button>
                <button className="w-3 h-3 bg-gray-300 rounded-full"></button>
              </div>
              
              {/* Navigation arrows */}
              <div className="absolute top-1/2 -left-4 transform -translate-y-1/2">
                <Button variant="outline" size="icon" className="rounded-full bg-white shadow-lg hover:scale-110 transition-transform duration-300">
                  ← Back
                </Button>
              </div>
              <div className="absolute top-1/2 -right-4 transform -translate-y-1/2">
                <Button variant="outline" size="icon" className="rounded-full bg-white shadow-lg hover:scale-110 transition-transform duration-300">
                  Next →
                </Button>
              </div>
              
              {/* Page indicator */}
              <div className="absolute bottom-4 right-4 text-sm text-gray-500 font-montserrat">
                02<span className="text-gray-300">/06</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section - Enhanced Grid */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-montserrat font-bold text-obsidian mb-6 animate-fade-in">
              Our Premium Services
            </h2>
            <p className="text-xl text-gray-600 font-montserrat max-w-2xl mx-auto animate-fade-in">
              Experience exceptional grooming with our signature services
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <Card key={service.title} className={`group bg-white border-0 shadow-lg hover:shadow-xl transition-all duration-500 hover:scale-105 hover:-translate-y-2 animate-scale-in`} style={{animationDelay: `${index * 200}ms`}}>
                <CardContent className="p-8 text-center">
                  <div className="w-16 h-16 bg-sage/10 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:bg-sage group-hover:scale-110 transition-all duration-300">
                    <service.icon className="h-8 w-8 text-sage group-hover:text-white transition-colors duration-300" />
                  </div>
                  <h3 className="text-xl font-montserrat font-bold text-obsidian mb-4 group-hover:text-sage transition-colors duration-300">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 font-montserrat mb-6 leading-relaxed">
                    {service.description}
                  </p>
                  <div className="text-2xl font-montserrat font-bold text-sage">
                    {service.price}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* About Preview - Enhanced */}
      <section className="py-20 bg-white relative overflow-hidden">
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="animate-slide-in-left">
              <h2 className="text-4xl md:text-5xl font-montserrat font-bold text-obsidian mb-6">
                Crafting <span className="font-playfair italic text-sage">Excellence</span>
              </h2>
              <p className="text-lg text-gray-600 font-montserrat mb-8 leading-relaxed">
                At The Art, we believe barbering is more than just a haircut—it's an art form. 
                Our master barbers combine traditional techniques with modern innovation to deliver 
                exceptional grooming experiences that celebrate Afro-centric style.
              </p>
              <Button className="bg-sage text-white hover:bg-sage/90 font-montserrat font-bold px-8 py-4 rounded-lg transition-all duration-300 hover:scale-105">
                Learn Our Story
              </Button>
            </div>
            <div className="animate-slide-in-right">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-br from-sage/20 to-bronze/20 rounded-3xl transform rotate-3"></div>
                <img 
                  src="https://images.unsplash.com/photo-1503951914875-452162b0f3f1?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                  alt="Master Barber at Work" 
                  className="relative rounded-2xl shadow-2xl hover:scale-105 transition-transform duration-500 w-full"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials - Enhanced */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-montserrat font-bold text-obsidian mb-6">
              What Our Clients Say
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={testimonial.name} className={`bg-white border-0 shadow-lg hover:shadow-xl transition-all duration-500 hover:scale-105 animate-fade-in`} style={{animationDelay: `${index * 300}ms`}}>
                <CardContent className="p-8">
                  <div className="flex mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="text-gold h-5 w-5 fill-current" />
                    ))}
                  </div>
                  <p className="text-gray-600 font-montserrat mb-6 italic leading-relaxed">
                    "{testimonial.text}"
                  </p>
                  <p className="text-obsidian font-montserrat font-semibold">
                    - {testimonial.name}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Booking Section - Enhanced */}
      <section className="py-20 bg-sage">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-montserrat font-bold text-white mb-6 animate-fade-in">
              Book Your <span className="font-playfair italic">Experience</span>
            </h2>
            <p className="text-xl text-white/90 font-montserrat mb-12 animate-fade-in">
              Ready to experience the art of premium barbering? Book your appointment today.
            </p>

            <Card className="bg-white shadow-2xl animate-scale-in rounded-2xl overflow-hidden">
              <CardContent className="p-8">
                <form onSubmit={handleBooking} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <Input 
                      placeholder="Your Name" 
                      className="border-gray-200 focus:border-sage transition-colors duration-300 rounded-lg h-12"
                      required
                    />
                    <Input 
                      type="email" 
                      placeholder="Email Address" 
                      className="border-gray-200 focus:border-sage transition-colors duration-300 rounded-lg h-12"
                      required
                    />
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <Input 
                      type="tel" 
                      placeholder="Phone Number" 
                      className="border-gray-200 focus:border-sage transition-colors duration-300 rounded-lg h-12"
                      required
                    />
                    <Input 
                      type="date" 
                      className="border-gray-200 focus:border-sage transition-colors duration-300 rounded-lg h-12"
                      required
                    />
                  </div>
                  <Textarea 
                    placeholder="Preferred service and any special requests..." 
                    rows={4}
                    className="border-gray-200 focus:border-sage transition-colors duration-300 rounded-lg"
                  />
                  <Button type="submit" className="w-full bg-sage text-white hover:bg-sage/90 font-montserrat font-bold text-lg py-4 rounded-lg transition-all duration-300 hover:scale-105">
                    <Calendar className="mr-2 h-5 w-5" />
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
