
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { useToast } from '@/hooks/use-toast';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { MapPin, Check, Phone, Clock, Heart, Shield, Award } from 'lucide-react';

const Services = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Service packages with pricing in Ethiopian Birr
  const servicePackages = [
    {
      id: 'basic',
      name: 'Basic Health Screening',
      price: 250,
      originalPrice: 300,
      icon: Heart,
      features: [
        'Complete Blood Count (CBC)',
        'Blood Pressure Check',
        'Basic Consultation',
        'Health Report',
        'Follow-up Call'
      ],
      popular: false,
      gradient: 'from-emerald-50 to-teal-50',
      accent: 'emerald'
    },
    {
      id: 'premium',
      name: 'Comprehensive Wellness',
      price: 450,
      originalPrice: 550,
      icon: Shield,
      features: [
        'Full Blood Panel Analysis',
        'Cardiovascular Assessment',
        'Nutritional Consultation',
        'Lifestyle Recommendations',
        'Digital Health Tracking',
        '3-Month Follow-up'
      ],
      popular: true,
      gradient: 'from-blue-50 to-indigo-50',
      accent: 'blue'
    },
    {
      id: 'executive',
      name: 'Executive Health Package',
      price: 600,
      originalPrice: 750,
      icon: Award,
      features: [
        'Advanced Diagnostic Screening',
        'Specialist Consultations',
        'Personalized Health Plan',
        'Priority Booking',
        'Annual Health Monitoring',
        'Telemedicine Access',
        'VIP Service'
      ],
      popular: false,
      gradient: 'from-purple-50 to-pink-50',
      accent: 'purple'
    }
  ];

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
          description: "We'll get back to you within 24 hours.",
        });
        setFormData({ name: '', email: '', phone: '', service: '', message: '' });
      } else {
        throw new Error('Failed to send message');
      }
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to send message. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-emerald-50">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <div className="inline-flex items-center px-6 py-3 bg-emerald-100 rounded-full mb-8 text-emerald-700 font-medium">
            <Heart className="w-5 h-5 mr-2" />
            Professional Health Services
          </div>
          <h1 className="text-5xl md:text-7xl font-bold text-slate-800 mb-6">
            Your Health,
            <span className="bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent"> Our Priority</span>
          </h1>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
            Comprehensive diagnostic services with modern technology and expert care, 
            designed to keep you healthy and informed about your wellbeing.
          </p>
        </div>
      </section>

      {/* Main Grid Layout */}
      <div className="max-w-7xl mx-auto px-4 pb-20">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          
          {/* Service Packages - Spans 2 columns on large screens */}
          <div className="lg:col-span-2">
            <div className="mb-12">
              <h2 className="text-4xl font-bold text-slate-800 mb-4 text-center lg:text-left">
                Health Packages
              </h2>
              <p className="text-slate-600 text-lg text-center lg:text-left">
                Choose the package that best fits your health monitoring needs
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
              {servicePackages.map((pkg) => {
                const IconComponent = pkg.icon;
                return (
                  <Card key={pkg.id} className={`relative overflow-hidden bg-gradient-to-br ${pkg.gradient} border-0 shadow-lg hover:shadow-xl transition-all duration-500 hover:scale-105 group ${pkg.popular ? 'ring-2 ring-blue-200' : ''}`}>
                    {pkg.popular && (
                      <div className="absolute top-4 right-4 bg-blue-500 text-white text-xs px-3 py-1 rounded-full font-semibold">
                        Most Popular
                      </div>
                    )}
                    
                    <CardHeader className="text-center pb-4">
                      <div className={`w-16 h-16 mx-auto mb-4 rounded-2xl bg-gradient-to-br from-${pkg.accent}-500 to-${pkg.accent}-600 flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                        <IconComponent className="w-8 h-8 text-white" />
                      </div>
                      <CardTitle className="text-xl font-bold text-slate-800">{pkg.name}</CardTitle>
                      <div className="flex items-center justify-center gap-2 mt-2">
                        <span className="text-3xl font-bold text-slate-800">{pkg.price}</span>
                        <span className="text-lg text-slate-600">ETB</span>
                        {pkg.originalPrice && (
                          <span className="text-sm text-slate-400 line-through ml-2">{pkg.originalPrice} ETB</span>
                        )}
                      </div>
                    </CardHeader>

                    <CardContent className="pt-0">
                      <ul className="space-y-3 mb-6">
                        {pkg.features.map((feature, index) => (
                          <li key={index} className="flex items-start gap-3">
                            <Check className={`w-5 h-5 text-${pkg.accent}-500 mt-0.5 flex-shrink-0`} />
                            <span className="text-slate-600">{feature}</span>
                          </li>
                        ))}
                      </ul>
                      
                      <Button 
                        className={`w-full bg-gradient-to-r from-${pkg.accent}-500 to-${pkg.accent}-600 hover:from-${pkg.accent}-600 hover:to-${pkg.accent}-700 text-white font-semibold py-3 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300`}
                        onClick={() => setFormData({...formData, service: pkg.name})}
                      >
                        Select Package
                      </Button>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-1">
            <Card className="bg-white/80 backdrop-blur-sm border-0 shadow-xl sticky top-8">
              <CardHeader>
                <CardTitle className="text-2xl font-bold text-slate-800 text-center">
                  Book Your Service
                </CardTitle>
                <p className="text-slate-600 text-center">
                  Get in touch with our healthcare team
                </p>
              </CardHeader>
              
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <Label htmlFor="name" className="text-slate-700 font-medium">Full Name</Label>
                    <Input
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="mt-1 border-slate-200 focus:border-emerald-500 focus:ring-emerald-500"
                      placeholder="Enter your full name"
                    />
                  </div>

                  <div>
                    <Label htmlFor="email" className="text-slate-700 font-medium">Email Address</Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="mt-1 border-slate-200 focus:border-emerald-500 focus:ring-emerald-500"
                      placeholder="your.email@example.com"
                    />
                  </div>

                  <div>
                    <Label htmlFor="phone" className="text-slate-700 font-medium">Phone Number</Label>
                    <Input
                      id="phone"
                      name="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={handleInputChange}
                      required
                      className="mt-1 border-slate-200 focus:border-emerald-500 focus:ring-emerald-500"
                      placeholder="+251 9XX XXX XXX"
                    />
                  </div>

                  <div>
                    <Label htmlFor="service" className="text-slate-700 font-medium">Preferred Service</Label>
                    <select
                      id="service"
                      name="service"
                      value={formData.service}
                      onChange={handleInputChange}
                      required
                      className="w-full mt-1 px-3 py-2 border border-slate-200 rounded-md focus:border-emerald-500 focus:ring-emerald-500 bg-white"
                    >
                      <option value="">Select a service</option>
                      {servicePackages.map(pkg => (
                        <option key={pkg.id} value={pkg.name}>{pkg.name}</option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <Label htmlFor="message" className="text-slate-700 font-medium">Additional Message</Label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      rows={4}
                      className="mt-1 border-slate-200 focus:border-emerald-500 focus:ring-emerald-500"
                      placeholder="Tell us about your specific needs or questions..."
                    />
                  </div>

                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-gradient-to-r from-emerald-500 to-teal-600 hover:from-emerald-600 hover:to-teal-700 text-white font-semibold py-3 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
                  >
                    {isSubmitting ? 'Sending...' : 'Send Message'}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Map and Contact Info Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          {/* Static Map Display */}
          <div className="order-2 lg:order-1">
            <Card className="bg-white border-0 shadow-xl overflow-hidden h-96">
              <CardHeader className="pb-0">
                <CardTitle className="flex items-center gap-2 text-slate-800">
                  <MapPin className="w-5 h-5 text-emerald-500" />
                  Find Our Location
                </CardTitle>
              </CardHeader>
              <CardContent className="p-0">
                <div className="w-full h-80 rounded-b-lg bg-gradient-to-br from-emerald-50 to-teal-50 flex items-center justify-center relative overflow-hidden">
                  {/* Static Map Background */}
                  <div className="absolute inset-0 opacity-20">
                    <div className="w-full h-full bg-gradient-to-br from-emerald-100 to-blue-100"></div>
                  </div>
                  
                  {/* Location Information */}
                  <div className="text-center p-8 relative z-10">
                    <div className="w-16 h-16 bg-emerald-500 rounded-full flex items-center justify-center shadow-lg mx-auto mb-4">
                      <MapPin className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-xl font-semibold text-slate-800 mb-2">Health Diagnostic Center</h3>
                    <p className="text-slate-600 mb-2">Bole, Addis Ababa, Ethiopia</p>
                    <p className="text-sm text-slate-500 mb-4">Near Millennium Hall</p>
                    <div className="text-xs text-slate-400">
                      <p>Coordinates: 9.011898626972641, 38.85263916611005</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Contact Information */}
          <div className="order-1 lg:order-2">
            <div className="space-y-6">
              <div>
                <h3 className="text-3xl font-bold text-slate-800 mb-4">
                  Visit Our Facility
                </h3>
                <p className="text-slate-600 text-lg leading-relaxed">
                  Located in the heart of Addis Ababa, our modern diagnostic center 
                  offers convenient access to comprehensive health services.
                </p>
              </div>

              <div className="space-y-4">
                <div className="flex items-start gap-4 p-4 bg-white rounded-xl shadow-md">
                  <div className="w-12 h-12 bg-emerald-100 rounded-xl flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-6 h-6 text-emerald-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-slate-800">Address</h4>
                    <p className="text-slate-600">Bole, Addis Ababa, Ethiopia</p>
                    <p className="text-slate-600">Near Millennium Hall</p>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-4 bg-white rounded-xl shadow-md">
                  <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Phone className="w-6 h-6 text-blue-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-slate-800">Phone</h4>
                    <p className="text-slate-600">+251 11 123 4567</p>
                    <p className="text-slate-600">+251 9XX XXX XXX</p>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-4 bg-white rounded-xl shadow-md">
                  <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Clock className="w-6 h-6 text-purple-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-slate-800">Hours</h4>
                    <p className="text-slate-600">Monday - Friday: 8:00 AM - 6:00 PM</p>
                    <p className="text-slate-600">Saturday: 9:00 AM - 4:00 PM</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Features Section */}
        <div className="text-center mb-12">
          <h3 className="text-4xl font-bold text-slate-800 mb-6">
            Why Choose Our Services?
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-6 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="w-16 h-16 bg-emerald-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Shield className="w-8 h-8 text-emerald-600" />
              </div>
              <h4 className="text-xl font-bold text-slate-800 mb-2">Certified Professionals</h4>
              <p className="text-slate-600">Licensed healthcare providers with years of experience</p>
            </div>

            <div className="p-6 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Heart className="w-8 h-8 text-blue-600" />
              </div>
              <h4 className="text-xl font-bold text-slate-800 mb-2">Modern Equipment</h4>
              <p className="text-slate-600">State-of-the-art diagnostic technology for accurate results</p>
            </div>

            <div className="p-6 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="w-16 h-16 bg-purple-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Award className="w-8 h-8 text-purple-600" />
              </div>
              <h4 className="text-xl font-bold text-slate-800 mb-2">Quality Care</h4>
              <p className="text-slate-600">Personalized attention and comprehensive health solutions</p>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Services;
