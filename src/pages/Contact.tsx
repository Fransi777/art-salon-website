import React from 'react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { useToast } from '@/hooks/use-toast';
import { MapPin, Phone, Mail, Clock, Calendar } from 'lucide-react';
const Contact = () => {
  const {
    toast
  } = useToast();
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Message Sent!",
      description: "We'll get back to you within 24 hours."
    });
  };
  const contactInfo = [{
    title: "Address",
    details: ["123 Style Street", "Urban District", "City, State 12345"],
    icon: MapPin
  }, {
    title: "Phone",
    details: ["(555) 123-4567", "Call or Text"],
    icon: Phone
  }, {
    title: "Email",
    details: ["info@theart.com", "bookings@theart.com"],
    icon: Mail
  }, {
    title: "Hours",
    details: ["Mon-Fri: 9AM - 8PM", "Sat: 8AM - 6PM", "Sun: 10AM - 4PM"],
    icon: Clock
  }];
  return <div className="min-h-screen bg-white">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center min-h-[80vh]">
            {/* Left Content */}
            <div className="lg:col-span-6 space-y-8">
              <div className="animate-fade-in">
                <h1 className="text-6xl md:text-7xl font-montserrat font-black text-obsidian leading-tight">
                  Get In
                  <br />
                  <span className="text-obsidian">Touch</span>
                  <br />
                  <span className="font-playfair italic text-5xl md:text-6xl text-sage">With Us</span>
                </h1>
              </div>
              
              <p className="text-lg text-gray-600 font-montserrat max-w-lg leading-relaxed">
                Ready to experience premium barbering? Contact us today to schedule your appointment 
                or get answers to any questions you may have.
              </p>

              <Button className="bg-sage text-white hover:bg-sage/90 font-montserrat font-bold text-lg px-8 py-4 rounded-lg transition-all duration-300 hover:scale-105">
                <Calendar className="mr-2 h-5 w-5" />
                Book Appointment
              </Button>
            </div>

            {/* Right Content - Contact Image */}
            <div className="lg:col-span-6 relative">
              <div className="relative animate-slide-in-right">
                <div className="absolute inset-0 bg-gradient-to-br from-sage/20 to-bronze/20 rounded-3xl transform rotate-3"></div>
                <div className="relative bg-white rounded-3xl shadow-2xl p-4 transform -rotate-2 hover:rotate-0 transition-transform duration-500">
                  <img alt="Contact Us" className="w-full h-[500px] object-cover rounded-2xl" src="/lovable-uploads/9e9c53bc-beda-4b09-bee8-d43fce62ef07.jpg" />
                </div>
                <div className="absolute -top-8 -left-8 w-32 h-32 bg-gold/20 rounded-full blur-xl"></div>
                <div className="absolute -bottom-8 -right-8 w-24 h-24 bg-sage/20 rounded-full blur-lg"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Info Grid */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {contactInfo.map((info, index) => <Card key={info.title} className="group bg-white border-0 shadow-lg hover:shadow-xl transition-all duration-500 hover:scale-105 hover:-translate-y-2">
                <CardContent className="p-8 text-center">
                  <div className="w-16 h-16 bg-sage/10 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:bg-sage group-hover:scale-110 transition-all duration-300">
                    <info.icon className="h-8 w-8 text-sage group-hover:text-white transition-colors duration-300" />
                  </div>
                  <h3 className="text-xl font-montserrat font-bold text-obsidian mb-4 group-hover:text-sage transition-colors duration-300">
                    {info.title}
                  </h3>
                  <div className="space-y-2">
                    {info.details.map((detail, idx) => <p key={idx} className="text-gray-600 font-montserrat">
                        {detail}
                      </p>)}
                  </div>
                </CardContent>
              </Card>)}
          </div>
        </div>
      </section>

      {/* Advanced Contact Form */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-montserrat font-bold text-obsidian mb-6">
                Send Us a <span className="font-playfair italic text-sage">Message</span>
              </h2>
              <p className="text-xl text-gray-600 font-montserrat max-w-2xl mx-auto">
                Fill out the form below and we'll get back to you as soon as possible
              </p>
            </div>

            <Card className="bg-white shadow-2xl border-0 rounded-3xl overflow-hidden">
              <CardContent className="p-12">
                <form onSubmit={handleSubmit} className="space-y-8">
                  {/* Personal Information */}
                  <div className="space-y-6">
                    <h3 className="text-2xl font-montserrat font-bold text-obsidian mb-6">
                      Personal Information
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <Label htmlFor="firstName" className="text-obsidian font-montserrat font-semibold">
                          First Name *
                        </Label>
                        <Input id="firstName" placeholder="Enter your first name" className="h-12 border-gray-200 focus:border-sage focus:ring-sage rounded-xl transition-all duration-300" required />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="lastName" className="text-obsidian font-montserrat font-semibold">
                          Last Name *
                        </Label>
                        <Input id="lastName" placeholder="Enter your last name" className="h-12 border-gray-200 focus:border-sage focus:ring-sage rounded-xl transition-all duration-300" required />
                      </div>
                    </div>
                  </div>

                  {/* Contact Details */}
                  <div className="space-y-6">
                    <h3 className="text-2xl font-montserrat font-bold text-obsidian mb-6">
                      Contact Details
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <Label htmlFor="email" className="text-obsidian font-montserrat font-semibold">
                          Email Address *
                        </Label>
                        <Input id="email" type="email" placeholder="your.email@example.com" className="h-12 border-gray-200 focus:border-sage focus:ring-sage rounded-xl transition-all duration-300" required />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="phone" className="text-obsidian font-montserrat font-semibold">
                          Phone Number
                        </Label>
                        <Input id="phone" type="tel" placeholder="(555) 123-4567" className="h-12 border-gray-200 focus:border-sage focus:ring-sage rounded-xl transition-all duration-300" />
                      </div>
                    </div>
                  </div>

                  {/* Appointment Preferences */}
                  <div className="space-y-6">
                    <h3 className="text-2xl font-montserrat font-bold text-obsidian mb-6">
                      Appointment Preferences
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <Label htmlFor="service" className="text-obsidian font-montserrat font-semibold">
                          Preferred Service
                        </Label>
                        <Input id="service" placeholder="e.g., Signature Cut, Master Fade" className="h-12 border-gray-200 focus:border-sage focus:ring-sage rounded-xl transition-all duration-300" />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="date" className="text-obsidian font-montserrat font-semibold">
                          Preferred Date
                        </Label>
                        <Input id="date" type="date" className="h-12 border-gray-200 focus:border-sage focus:ring-sage rounded-xl transition-all duration-300" />
                      </div>
                    </div>
                  </div>

                  {/* Message */}
                  <div className="space-y-6">
                    <h3 className="text-2xl font-montserrat font-bold text-obsidian mb-6">
                      Additional Information
                    </h3>
                    <div className="space-y-2">
                      <Label htmlFor="message" className="text-obsidian font-montserrat font-semibold">
                        Message
                      </Label>
                      <Textarea id="message" placeholder="Tell us about your preferred style, any special requests, or questions you may have..." rows={6} className="border-gray-200 focus:border-sage focus:ring-sage rounded-xl transition-all duration-300 resize-none" />
                    </div>
                  </div>

                  {/* Submit Button */}
                  <div className="pt-6">
                    <Button type="submit" className="w-full bg-sage text-white hover:bg-sage/90 font-montserrat font-bold text-lg py-4 rounded-xl transition-all duration-300 hover:scale-[1.02] hover:shadow-lg">
                      <Mail className="mr-2 h-5 w-5" />
                      Send Message
                    </Button>
                  </div>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <Footer />
    </div>;
};
export default Contact;