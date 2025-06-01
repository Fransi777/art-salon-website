
import React, { useState } from 'react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { useToast } from '@/hooks/use-toast';
import { MapPin, Phone, Mail, Clock, Calendar, Scissors, Star } from 'lucide-react';

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch('https://formspree.io/f/xvgrpjrb', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        toast({
          title: "Message Sent Successfully!",
          description: "We'll get back to you within 24 hours."
        });
        setFormData({
          name: '',
          email: '',
          phone: '',
          service: '',
          message: ''
        });
      } else {
        throw new Error('Failed to send message');
      }
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to send message. Please try again.",
        variant: "destructive"
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactInfo = [
    {
      title: "Visit Our Shop",
      details: ["123 Style Street", "Urban District", "City, State 12345"],
      icon: MapPin,
      gradient: "from-sage/20 to-forest/20",
      iconBg: "bg-sage"
    },
    {
      title: "Call or Text",
      details: ["(555) 123-4567", "Available 24/7"],
      icon: Phone,
      gradient: "from-gold/20 to-bronze/20",
      iconBg: "bg-gold"
    },
    {
      title: "Email Us",
      details: ["info@theart.com", "bookings@theart.com"],
      icon: Mail,
      gradient: "from-bronze/20 to-gold/20",
      iconBg: "bg-bronze"
    },
    {
      title: "Business Hours",
      details: ["Mon-Fri: 9AM - 8PM", "Sat: 8AM - 6PM", "Sun: 10AM - 4PM"],
      icon: Clock,
      gradient: "from-forest/20 to-sage/20",
      iconBg: "bg-forest"
    }
  ];

  const services = [
    "Signature Cut",
    "Master Fade",
    "Classic Shave",
    "Beard Trim",
    "Hair Wash & Style",
    "Full Service Package"
  ];

  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
        <div className="absolute inset-0 bg-gradient-to-br from-obsidian/5 via-sage/5 to-gold/5"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center min-h-[80vh]">
            {/* Left Content */}
            <div className="lg:col-span-6 space-y-8">
              <div className="animate-fade-in">
                <div className="inline-flex items-center px-6 py-3 bg-sage/10 rounded-full mb-8 text-sage font-medium">
                  <Scissors className="w-5 h-5 mr-2" />
                  Premium Barbershop Experience
                </div>
                <h1 className="text-6xl md:text-7xl font-montserrat font-black text-obsidian leading-tight">
                  Get In
                  <br />
                  <span className="text-obsidian">Touch</span>
                  <br />
                  <span className="font-playfair italic text-5xl md:text-6xl text-sage">With The Art</span>
                </h1>
              </div>
              
              <p className="text-lg text-gray-600 font-montserrat max-w-lg leading-relaxed">
                Ready to experience the finest in men's grooming? Contact us today to schedule your appointment 
                or get answers to any questions about our premium services.
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button className="bg-sage text-white hover:bg-sage/90 font-montserrat font-bold text-lg px-8 py-4 rounded-xl transition-all duration-300 hover:scale-105 shadow-lg">
                  <Calendar className="mr-2 h-5 w-5" />
                  Book Appointment
                </Button>
                <Button variant="outline" className="border-2 border-obsidian text-obsidian hover:bg-obsidian hover:text-white font-montserrat font-bold text-lg px-8 py-4 rounded-xl transition-all duration-300">
                  <Phone className="mr-2 h-5 w-5" />
                  Call Now
                </Button>
              </div>
            </div>

            {/* Right Content - Contact Image */}
            <div className="lg:col-span-6 relative">
              <div className="relative animate-slide-in-right">
                <div className="absolute inset-0 bg-gradient-to-br from-sage/20 to-bronze/20 rounded-3xl transform rotate-3"></div>
                <div className="relative bg-white rounded-3xl shadow-2xl p-4 transform -rotate-2 hover:rotate-0 transition-transform duration-500">
                  <img 
                    alt="The Art Barbershop Interior" 
                    className="w-full h-[500px] object-cover rounded-2xl" 
                    src="/lovable-uploads/9e9c53bc-beda-4b09-bee8-d43fce62ef07.jpg" 
                  />
                  <div className="absolute top-6 left-6 bg-white/90 backdrop-blur-sm rounded-xl p-3 shadow-lg">
                    <div className="flex items-center space-x-2">
                      <Star className="w-5 h-5 text-gold fill-current" />
                      <span className="font-bold text-obsidian">4.9/5</span>
                      <span className="text-gray-600 text-sm">Reviews</span>
                    </div>
                  </div>
                </div>
                <div className="absolute -top-8 -left-8 w-32 h-32 bg-gold/20 rounded-full blur-xl"></div>
                <div className="absolute -bottom-8 -right-8 w-24 h-24 bg-sage/20 rounded-full blur-lg"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Advanced Contact Info Grid */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-sage/5">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-montserrat font-bold text-obsidian mb-6">
              Visit <span className="font-playfair italic text-sage">The Art</span>
            </h2>
            <p className="text-xl text-gray-600 font-montserrat max-w-2xl mx-auto">
              Multiple ways to connect with our master barbers
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {contactInfo.map((info, index) => (
              <Card key={info.title} className={`group bg-gradient-to-br ${info.gradient} border-0 shadow-xl hover:shadow-2xl transition-all duration-500 hover:scale-105 hover:-translate-y-2 overflow-hidden relative`}>
                <div className="absolute inset-0 bg-gradient-to-br from-white/50 to-transparent"></div>
                <CardContent className="p-8 text-center relative z-10">
                  <div className={`w-16 h-16 ${info.iconBg} rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-all duration-300 shadow-lg`}>
                    <info.icon className="h-8 w-8 text-white transition-colors duration-300" />
                  </div>
                  <h3 className="text-xl font-montserrat font-bold text-obsidian mb-4 group-hover:text-sage transition-colors duration-300">
                    {info.title}
                  </h3>
                  <div className="space-y-2">
                    {info.details.map((detail, idx) => (
                      <p key={idx} className="text-gray-700 font-montserrat font-medium">
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

      {/* Map Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-montserrat font-bold text-obsidian mb-6">
                Find <span className="font-playfair italic text-sage">Our Location</span>
              </h2>
              <p className="text-xl text-gray-600 font-montserrat max-w-2xl mx-auto">
                Located in the heart of the city for your convenience
              </p>
            </div>

            <Card className="bg-white shadow-2xl border-0 rounded-3xl overflow-hidden">
              <CardContent className="p-0">
                <div className="grid grid-cols-1 lg:grid-cols-2">
                  {/* Map Display */}
                  <div className="relative h-96 lg:h-full bg-gradient-to-br from-sage/10 to-forest/10">
                    <iframe
                      src={`https://www.openstreetmap.org/export/embed.html?bbox=38.8476%2C9.0069%2C38.8576%2C9.0169&layer=mapnik&marker=9.011898626972641%2C38.85263916611005`}
                      width="100%"
                      height="100%"
                      style={{ border: 0, minHeight: '400px' }}
                      allowFullScreen
                      loading="lazy"
                      title="The Art Barbershop Location"
                      className="rounded-l-3xl"
                    ></iframe>
                    <div className="absolute top-4 left-4 bg-white/95 backdrop-blur-sm rounded-xl p-4 shadow-lg">
                      <div className="flex items-center space-x-2 text-obsidian">
                        <MapPin className="w-5 h-5 text-sage" />
                        <span className="font-bold">The Art Barbershop</span>
                      </div>
                    </div>
                  </div>

                  {/* Location Info */}
                  <div className="p-12 bg-gradient-to-br from-white to-sage/5">
                    <h3 className="text-3xl font-montserrat font-bold text-obsidian mb-6">
                      Visit Our Shop
                    </h3>
                    <div className="space-y-6">
                      <div className="flex items-start space-x-4">
                        <div className="w-12 h-12 bg-sage rounded-xl flex items-center justify-center flex-shrink-0">
                          <MapPin className="w-6 h-6 text-white" />
                        </div>
                        <div>
                          <h4 className="font-bold text-obsidian mb-2">Address</h4>
                          <p className="text-gray-600">123 Style Street<br/>Urban District<br/>City, State 12345</p>
                        </div>
                      </div>

                      <div className="flex items-start space-x-4">
                        <div className="w-12 h-12 bg-gold rounded-xl flex items-center justify-center flex-shrink-0">
                          <Clock className="w-6 h-6 text-white" />
                        </div>
                        <div>
                          <h4 className="font-bold text-obsidian mb-2">Hours</h4>
                          <p className="text-gray-600">
                            Mon-Fri: 9AM - 8PM<br/>
                            Sat: 8AM - 6PM<br/>
                            Sun: 10AM - 4PM
                          </p>
                        </div>
                      </div>

                      <Button className="w-full bg-sage text-white hover:bg-sage/90 font-montserrat font-bold text-lg py-4 rounded-xl transition-all duration-300 hover:scale-105">
                        Get Directions
                      </Button>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Enhanced Contact Form with Formspree */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-sage/5">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-montserrat font-bold text-obsidian mb-6">
                Book Your <span className="font-playfair italic text-sage">Appointment</span>
              </h2>
              <p className="text-xl text-gray-600 font-montserrat max-w-2xl mx-auto">
                Ready for the ultimate grooming experience? Send us a message and we'll get back to you shortly.
              </p>
            </div>

            <Card className="bg-white shadow-2xl border-0 rounded-3xl overflow-hidden">
              <CardContent className="p-12">
                <form onSubmit={handleSubmit} className="space-y-8">
                  {/* Personal Information */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="name" className="text-obsidian font-montserrat font-semibold text-lg">
                        Full Name *
                      </Label>
                      <Input 
                        id="name" 
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        placeholder="Enter your full name" 
                        className="h-14 border-2 border-gray-200 focus:border-sage focus:ring-sage rounded-xl transition-all duration-300 text-lg" 
                        required 
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="phone" className="text-obsidian font-montserrat font-semibold text-lg">
                        Phone Number *
                      </Label>
                      <Input 
                        id="phone" 
                        name="phone"
                        type="tel" 
                        value={formData.phone}
                        onChange={handleInputChange}
                        placeholder="(555) 123-4567" 
                        className="h-14 border-2 border-gray-200 focus:border-sage focus:ring-sage rounded-xl transition-all duration-300 text-lg" 
                        required
                      />
                    </div>
                  </div>

                  {/* Contact Details */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="email" className="text-obsidian font-montserrat font-semibold text-lg">
                        Email Address *
                      </Label>
                      <Input 
                        id="email" 
                        name="email"
                        type="email" 
                        value={formData.email}
                        onChange={handleInputChange}
                        placeholder="your.email@example.com" 
                        className="h-14 border-2 border-gray-200 focus:border-sage focus:ring-sage rounded-xl transition-all duration-300 text-lg" 
                        required 
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="service" className="text-obsidian font-montserrat font-semibold text-lg">
                        Preferred Service
                      </Label>
                      <select 
                        id="service" 
                        name="service"
                        value={formData.service}
                        onChange={handleInputChange}
                        className="h-14 w-full border-2 border-gray-200 focus:border-sage focus:ring-sage rounded-xl transition-all duration-300 text-lg px-4 bg-white"
                      >
                        <option value="">Select a service</option>
                        {services.map((service) => (
                          <option key={service} value={service}>{service}</option>
                        ))}
                      </select>
                    </div>
                  </div>

                  {/* Message */}
                  <div className="space-y-2">
                    <Label htmlFor="message" className="text-obsidian font-montserrat font-semibold text-lg">
                      Message
                    </Label>
                    <Textarea 
                      id="message" 
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      placeholder="Tell us about your preferred style, any special requests, or questions you may have..." 
                      rows={6} 
                      className="border-2 border-gray-200 focus:border-sage focus:ring-sage rounded-xl transition-all duration-300 resize-none text-lg p-4" 
                    />
                  </div>

                  {/* Submit Button */}
                  <div className="pt-6">
                    <Button 
                      type="submit" 
                      disabled={isSubmitting}
                      className="w-full bg-sage text-white hover:bg-sage/90 disabled:opacity-50 font-montserrat font-bold text-lg py-4 rounded-xl transition-all duration-300 hover:scale-[1.02] hover:shadow-lg"
                    >
                      {isSubmitting ? (
                        <>
                          <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                          Sending Message...
                        </>
                      ) : (
                        <>
                          <Mail className="mr-2 h-5 w-5" />
                          Send Message
                        </>
                      )}
                    </Button>
                  </div>
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

export default Contact;
