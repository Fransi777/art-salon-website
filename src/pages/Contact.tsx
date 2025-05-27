
import React from 'react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';

const Contact = () => {
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Message Sent!",
      description: "We'll get back to you within 24 hours.",
    });
  };

  const contactInfo = [
    {
      title: "Address",
      details: ["123 Style Street", "Urban District", "City, State 12345"],
      icon: "📍"
    },
    {
      title: "Phone",
      details: ["(555) 123-4567", "Call or Text"],
      icon: "📞"
    },
    {
      title: "Email",
      details: ["info@theart.com", "bookings@theart.com"],
      icon: "✉️"
    },
    {
      title: "Hours",
      details: ["Mon-Fri: 9AM - 8PM", "Sat: 8AM - 6PM", "Sun: 10AM - 4PM"],
      icon: "⏰"
    }
  ];

  return (
    <div className="min-h-screen bg-obsidian">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-forest via-forest/70 to-transparent z-10"></div>
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1521587760476-6c12a4b040da?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80')] bg-cover bg-center"></div>
        
        <div className="relative z-20 container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-7xl font-montserrat font-black text-gold mb-6 animate-fade-in">
              Get In <span className="font-playfair italic">Touch</span>
            </h1>
            <p className="text-xl md:text-2xl text-white font-montserrat font-light animate-fade-in">
              Ready to Experience Premium Barbering?
            </p>
          </div>
        </div>
      </section>

      {/* Contact Info Grid */}
      <section className="py-20 bg-forest">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {contactInfo.map((info, index) => (
              <Card 
                key={info.title} 
                className={`bg-obsidian border-bronze hover:border-gold transition-all duration-500 hover:scale-105 animate-scale-in`}
                style={{animationDelay: `${index * 150}ms`}}
              >
                <CardContent className="p-8 text-center">
                  <div className="text-5xl mb-4">{info.icon}</div>
                  <h3 className="text-xl font-montserrat font-bold text-gold mb-4">
                    {info.title}
                  </h3>
                  <div className="space-y-2">
                    {info.details.map((detail, idx) => (
                      <p key={idx} className="text-gray-300 font-montserrat">
                        {detail}
                      </p>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form & Map */}
      <section className="py-20 bg-gradient-to-r from-sage to-pine">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Contact Form */}
            <div className="animate-slide-in-left">
              <h2 className="text-4xl font-montserrat font-bold text-gold mb-8">
                Send Us a Message
              </h2>
              <Card className="bg-obsidian border-bronze shadow-2xl">
                <CardContent className="p-8">
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <Input 
                        placeholder="First Name" 
                        className="bg-forest border-bronze text-gold placeholder:text-gray-400 focus:border-gold transition-colors duration-300"
                        required
                      />
                      <Input 
                        placeholder="Last Name" 
                        className="bg-forest border-bronze text-gold placeholder:text-gray-400 focus:border-gold transition-colors duration-300"
                        required
                      />
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <Input 
                        type="email" 
                        placeholder="Email Address" 
                        className="bg-forest border-bronze text-gold placeholder:text-gray-400 focus:border-gold transition-colors duration-300"
                        required
                      />
                      <Input 
                        type="tel" 
                        placeholder="Phone Number" 
                        className="bg-forest border-bronze text-gold placeholder:text-gray-400 focus:border-gold transition-colors duration-300"
                      />
                    </div>
                    <Input 
                      placeholder="Subject" 
                      className="bg-forest border-bronze text-gold placeholder:text-gray-400 focus:border-gold transition-colors duration-300"
                      required
                    />
                    <Textarea 
                      placeholder="Your message..." 
                      rows={6}
                      className="bg-forest border-bronze text-gold placeholder:text-gray-400 focus:border-gold transition-colors duration-300"
                      required
                    />
                    <Button type="submit" className="w-full bg-gold text-forest hover:bg-gold/90 font-montserrat font-bold text-lg py-4 rounded-full transition-all duration-300 hover:scale-105">
                      Send Message
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>

            {/* Map & Additional Info */}
            <div className="animate-slide-in-right">
              <h2 className="text-4xl font-montserrat font-bold text-gold mb-8">
                Visit Our Shop
              </h2>
              
              {/* Map Placeholder */}
              <Card className="bg-obsidian border-bronze shadow-2xl mb-8">
                <CardContent className="p-0">
                  <div className="w-full h-80 bg-forest rounded-lg flex items-center justify-center">
                    <div className="text-center">
                      <div className="text-6xl text-gold mb-4">🗺️</div>
                      <p className="text-gold font-montserrat font-semibold">
                        Interactive Map
                      </p>
                      <p className="text-gray-300 font-montserrat text-sm">
                        123 Style Street, Urban District
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Directions & Parking */}
              <Card className="bg-obsidian border-bronze shadow-2xl">
                <CardContent className="p-8">
                  <h3 className="text-2xl font-montserrat font-bold text-gold mb-6">
                    Directions & Parking
                  </h3>
                  <div className="space-y-4 text-gray-300 font-montserrat">
                    <div>
                      <h4 className="text-gold font-semibold mb-2">By Car:</h4>
                      <p>Free street parking available. Parking garage located one block east on Main Street.</p>
                    </div>
                    <div>
                      <h4 className="text-gold font-semibold mb-2">Public Transit:</h4>
                      <p>Blue Line Metro - Style Street Station (2 blocks), Bus routes 15, 23, 45.</p>
                    </div>
                    <div>
                      <h4 className="text-gold font-semibold mb-2">Landmarks:</h4>
                      <p>Located between City Coffee House and Urban Fashion Boutique.</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Booking CTA */}
      <section className="py-20 bg-obsidian">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-montserrat font-bold text-gold mb-6 animate-fade-in">
            Prefer to Book <span className="font-playfair italic">Directly</span>?
          </h2>
          <p className="text-xl text-gray-300 font-montserrat mb-8 max-w-2xl mx-auto animate-fade-in">
            Call us directly or use our online booking system for the fastest appointment scheduling.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button className="bg-gold text-forest hover:bg-gold/90 font-montserrat font-bold text-lg px-8 py-4 rounded-full transition-all duration-300 hover:scale-105 animate-glow">
              Online Booking
            </Button>
            <Button variant="outline" className="border-gold text-gold hover:bg-gold hover:text-forest font-montserrat font-bold text-lg px-8 py-4 rounded-full transition-all duration-300 hover:scale-105">
              Call: (555) 123-4567
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Contact;
