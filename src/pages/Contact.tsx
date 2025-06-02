
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
      details: ["Summit Feyel Bet", "Addis Ababa", "Ethiopia"],
      icon: MapPin,
      accent: "[#173d26]"
    },
    {
      title: "Call or Text",
      details: ["0935652525", "Available Daily"],
      icon: Phone,
      accent: "blue-500"
    },
    {
      title: "Email Us",
      details: ["info@theart.com", "bookings@theart.com"],
      icon: Mail,
      accent: "purple-500"
    },
    {
      title: "Business Hours",
      details: ["Mon-Fri: 9AM - 8PM", "Sat: 8AM - 6PM", "Sun: 10AM - 4PM"],
      icon: Clock,
      accent: "orange-500"
    }
  ];

  const services = [
    "Signature Cut - 150 Birr",
    "Master Fade - 120 Birr", 
    "Classic Shave - 80 Birr",
    "Beard Trim - 100 Birr",
    "Hair Wash & Style - 60 Birr",
    "Full Service Package - 250 Birr"
  ];

  // Ethiopian male testimonials
  const testimonials = [
    {
      name: "Abebe Tadesse",
      text: "The Art delivers exceptional service. Every visit exceeds my expectations with their professional approach.",
      rating: 5,
      role: "Business Owner",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&q=80"
    },
    {
      name: "Dawit Bekele",
      text: "Outstanding craftsmanship and attention to detail. This is truly premium barbering in Addis Ababa.",
      rating: 5,
      role: "Engineer",
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&q=80"
    },
    {
      name: "Tekle Alemu",
      text: "Professional service from start to finish. The team understands modern Ethiopian gentleman's style perfectly.",
      rating: 5,
      role: "Teacher",
      avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&q=80"
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      
      {/* Hero Section - Clean Layout */}
      <section className="pt-20 pb-16 bg-gradient-to-br from-slate-50 to-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center px-6 py-3 bg-[#173d26]/10 rounded-full mb-8 text-[#173d26] font-medium">
              <Scissors className="w-5 h-5 mr-2" />
              Premium Barbershop Experience
            </div>
            <h1 className="text-5xl md:text-6xl font-playfair font-bold text-gray-900 mb-6">
              Get In Touch
              <br />
              <span className="text-[#173d26] italic">With The Art</span>
            </h1>
            <p className="text-xl text-gray-600 font-montserrat max-w-2xl mx-auto mb-8">
              Ready to experience the finest in men's grooming? Contact us today to schedule your appointment.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button className="bg-[#173d26] text-white hover:bg-[#173d26]/90 font-montserrat font-bold text-lg px-8 py-4 rounded-xl">
                <Calendar className="mr-2 h-5 w-5" />
                Book Appointment
              </Button>
              <Button variant="outline" className="border-2 border-gray-800 text-gray-800 hover:bg-gray-800 hover:text-white font-montserrat font-bold text-lg px-8 py-4 rounded-xl">
                <Phone className="mr-2 h-5 w-5" />
                Call Now
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-playfair font-bold text-gray-900 mb-4">
                Visit <span className="text-[#173d26] italic">The Art</span>
              </h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                Multiple ways to connect with our master barbers
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {contactInfo.map((info, index) => (
                <Card key={info.title} className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                  <CardContent className="p-6 text-center">
                    <div className={`w-16 h-16 ${info.accent === '[#173d26]' ? 'bg-[#173d26]' : `bg-${info.accent}`} rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg`}>
                      <info.icon className="h-8 w-8 text-white" />
                    </div>
                    <h3 className="text-xl font-montserrat font-bold text-gray-900 mb-3">
                      {info.title}
                    </h3>
                    <div className="space-y-1">
                      {info.details.map((detail, idx) => (
                        <p key={idx} className="text-gray-600 font-montserrat">
                          {detail}
                        </p>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-playfair font-bold text-gray-900 mb-4">
                Find <span className="text-[#173d26] italic">Our Location</span>
              </h2>
              <p className="text-xl text-gray-600">
                Located at Summit Feyel Bet for your convenience
              </p>
            </div>

            <Card className="shadow-xl border-0 overflow-hidden">
              <CardContent className="p-0">
                <div className="grid grid-cols-1 lg:grid-cols-2">
                  {/* Map Display */}
                  <div className="h-96 lg:h-full">
                    <iframe
                      src="https://www.openstreetmap.org/export/embed.html?bbox=38.8476%2C9.0069%2C38.8576%2C9.0169&layer=mapnik&marker=9.011898626972641%2C38.85263916611005"
                      width="100%"
                      height="100%"
                      style={{ border: 0, minHeight: '400px' }}
                      allowFullScreen
                      loading="lazy"
                      title="The Art Barbershop Location"
                    ></iframe>
                  </div>

                  {/* Location Info */}
                  <div className="p-8 bg-white">
                    <h3 className="text-3xl font-playfair font-bold text-gray-900 mb-6">
                      Visit Our Shop
                    </h3>
                    <div className="space-y-6">
                      <div className="flex items-start space-x-4">
                        <div className="w-12 h-12 bg-[#173d26] rounded-xl flex items-center justify-center flex-shrink-0">
                          <MapPin className="w-6 h-6 text-white" />
                        </div>
                        <div>
                          <h4 className="font-bold text-gray-900 mb-2">Address</h4>
                          <p className="text-gray-600">Summit Feyel Bet<br/>Addis Ababa<br/>Ethiopia</p>
                        </div>
                      </div>

                      <div className="flex items-start space-x-4">
                        <div className="w-12 h-12 bg-blue-500 rounded-xl flex items-center justify-center flex-shrink-0">
                          <Phone className="w-6 h-6 text-white" />
                        </div>
                        <div>
                          <h4 className="font-bold text-gray-900 mb-2">Phone</h4>
                          <p className="text-gray-600 text-lg font-semibold">0935652525</p>
                        </div>
                      </div>

                      <div className="flex items-start space-x-4">
                        <div className="w-12 h-12 bg-orange-500 rounded-xl flex items-center justify-center flex-shrink-0">
                          <Clock className="w-6 h-6 text-white" />
                        </div>
                        <div>
                          <h4 className="font-bold text-gray-900 mb-2">Hours</h4>
                          <p className="text-gray-600">
                            Mon-Fri: 9AM - 8PM<br/>
                            Sat: 8AM - 6PM<br/>
                            Sun: 10AM - 4PM
                          </p>
                        </div>
                      </div>

                      <Button className="w-full bg-[#173d26] text-white hover:bg-[#173d26]/90 font-montserrat font-bold text-lg py-4 rounded-xl">
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

      {/* Contact Form */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-playfair font-bold text-gray-900 mb-4">
                Book Your <span className="text-[#173d26] italic">Appointment</span>
              </h2>
              <p className="text-xl text-gray-600">
                Send us a message and we'll get back to you shortly.
              </p>
            </div>

            <Card className="shadow-xl border-0">
              <CardContent className="p-8">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <Label htmlFor="name" className="text-gray-900 font-montserrat font-semibold">
                        Full Name *
                      </Label>
                      <Input 
                        id="name" 
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        placeholder="Enter your full name" 
                        className="mt-2 h-12 border-2 border-gray-200 focus:border-[#173d26] rounded-xl" 
                        required 
                      />
                    </div>
                    <div>
                      <Label htmlFor="phone" className="text-gray-900 font-montserrat font-semibold">
                        Phone Number *
                      </Label>
                      <Input 
                        id="phone" 
                        name="phone"
                        type="tel" 
                        value={formData.phone}
                        onChange={handleInputChange}
                        placeholder="0911 123 456" 
                        className="mt-2 h-12 border-2 border-gray-200 focus:border-[#173d26] rounded-xl" 
                        required
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <Label htmlFor="email" className="text-gray-900 font-montserrat font-semibold">
                        Email Address *
                      </Label>
                      <Input 
                        id="email" 
                        name="email"
                        type="email" 
                        value={formData.email}
                        onChange={handleInputChange}
                        placeholder="your.email@example.com" 
                        className="mt-2 h-12 border-2 border-gray-200 focus:border-[#173d26] rounded-xl" 
                        required 
                      />
                    </div>
                    <div>
                      <Label htmlFor="service" className="text-gray-900 font-montserrat font-semibold">
                        Preferred Service
                      </Label>
                      <select 
                        id="service" 
                        name="service"
                        value={formData.service}
                        onChange={handleInputChange}
                        className="mt-2 h-12 w-full border-2 border-gray-200 focus:border-[#173d26] rounded-xl px-4 bg-white"
                      >
                        <option value="">Select a service</option>
                        {services.map((service) => (
                          <option key={service} value={service}>{service}</option>
                        ))}
                      </select>
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="message" className="text-gray-900 font-montserrat font-semibold">
                      Message
                    </Label>
                    <Textarea 
                      id="message" 
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      placeholder="Tell us about your preferred style or any questions..." 
                      rows={5} 
                      className="mt-2 border-2 border-gray-200 focus:border-[#173d26] rounded-xl resize-none" 
                    />
                  </div>

                  <Button 
                    type="submit" 
                    disabled={isSubmitting}
                    className="w-full bg-[#173d26] text-white hover:bg-[#173d26]/90 disabled:opacity-50 font-montserrat font-bold text-lg py-4 rounded-xl"
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
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Ethiopian Testimonials */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-playfair font-bold text-gray-900 mb-4">
                What Our <span className="text-[#173d26] italic">Clients Say</span>
              </h2>
              <p className="text-xl text-gray-600">
                Trusted by professionals across Addis Ababa
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {testimonials.map((testimonial, index) => (
                <Card key={testimonial.name} className="border-0 shadow-lg hover:shadow-xl transition-all duration-300">
                  <CardContent className="p-6">
                    <div className="flex mb-4 justify-center">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="text-yellow-500 h-5 w-5 fill-current" />
                      ))}
                    </div>
                    
                    <p className="text-gray-600 font-montserrat mb-6 italic text-center leading-relaxed">
                      "{testimonial.text}"
                    </p>
                    
                    <div className="text-center border-t border-gray-200 pt-4">
                      <img 
                        src={testimonial.avatar} 
                        alt={testimonial.name}
                        className="w-16 h-16 rounded-full mx-auto mb-3 object-cover"
                      />
                      <p className="text-gray-900 font-playfair font-bold text-lg">
                        {testimonial.name}
                      </p>
                      <p className="text-[#173d26] font-montserrat font-medium text-sm">
                        {testimonial.role}
                      </p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Contact;
