
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { useToast } from '@/hooks/use-toast';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { 
  MapPin, 
  Check, 
  Phone, 
  Clock, 
  Heart, 
  Shield, 
  Award, 
  Scissors,
  Crown,
  Sparkles,
  Trophy,
  Star,
  Calendar,
  ArrowRight,
  Users,
  Zap,
  Gift
} from 'lucide-react';

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

  // Premium barbershop services with modern design
  const servicePackages = [
    {
      id: 'signature',
      name: 'Signature Cut & Style',
      price: 85,
      originalPrice: 100,
      icon: Scissors,
      popular: false,
      image: "https://images.unsplash.com/photo-1503951914875-452162b0f3f1?w=500&q=80",
      features: [
        'Personal consultation',
        'Precision cutting technique',
        'Professional styling',
        'Premium hair products',
        'Finishing touch'
      ],
      gradient: 'from-blue-500/20 via-indigo-400/30 to-purple-500/20',
      accent: 'blue-500'
    },
    {
      id: 'royal',
      name: 'Royal Grooming Package',
      price: 150,
      originalPrice: 180,
      icon: Crown,
      popular: true,
      image: "https://images.unsplash.com/photo-1599351431202-1e0f0137899a?w=500&q=80",
      features: [
        'Signature cut & style',
        'Traditional hot towel shave',
        'Beard trim & shape',
        'Scalp massage',
        'Premium aftercare',
        'Complimentary beverage'
      ],
      gradient: 'from-gold/20 via-amber-400/30 to-yellow-500/20',
      accent: 'amber-500'
    },
    {
      id: 'beard',
      name: 'Beard Artistry',
      price: 65,
      originalPrice: 80,
      icon: Sparkles,
      popular: false,
      image: "https://images.unsplash.com/photo-1621605815971-fbc98d665033?w=500&q=80",
      features: [
        'Precision beard shaping',
        'Line-up & detailing',
        'Beard oil treatment',
        'Styling consultation',
        'Maintenance tips'
      ],
      gradient: 'from-emerald-500/20 via-teal-400/30 to-cyan-500/20',
      accent: 'emerald-500'
    },
    {
      id: 'vip',
      name: 'VIP Elite Experience',
      price: 250,
      originalPrice: 300,
      icon: Trophy,
      popular: false,
      image: "https://images.unsplash.com/photo-1585747860715-2ba37e788b70?w=500&q=80",
      features: [
        'Private VIP suite',
        'Complete grooming package',
        'Premium product selection',
        'Extended relaxation time',
        'Personal grooming consultation',
        'Exclusive aftercare kit',
        'Priority booking privileges'
      ],
      gradient: 'from-purple-500/20 via-violet-400/30 to-pink-500/20',
      accent: 'purple-500'
    }
  ];

  const additionalServices = [
    { name: 'Hair Wash & Blow Dry', price: 25, icon: Sparkles },
    { name: 'Eyebrow Trimming', price: 15, icon: Zap },
    { name: 'Hot Towel Treatment', price: 20, icon: Gift },
    { name: 'Scalp Treatment', price: 35, icon: Heart }
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
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-black to-slate-800 text-white">
      <Navigation />
      
      {/* Hero Section with Advanced Grid */}
      <section className="pt-20 pb-16 px-4 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-gold/5 via-transparent to-purple-500/5"></div>
        
        {/* Hero Grid Layout */}
        <div className="max-w-7xl mx-auto grid grid-cols-12 grid-rows-4 gap-6 min-h-[80vh]">
          
          {/* Main Headline */}
          <div className="col-span-12 md:col-span-8 row-span-2 flex flex-col justify-center">
            <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-gold/20 to-amber-500/20 backdrop-blur-sm rounded-full mb-6 text-gold font-medium w-fit">
              <Scissors className="w-5 h-5 mr-2" />
              Premium Barbershop Services
            </div>
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-playfair font-bold leading-tight">
              Crafted
              <span className="block bg-gradient-to-r from-gold via-amber-400 to-gold bg-clip-text text-transparent">
                Excellence
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 font-montserrat mt-6 leading-relaxed max-w-2xl">
              Experience the artistry of precision grooming with our signature services, tailored for the modern gentleman.
            </p>
          </div>

          {/* Feature Cards */}
          <div className="col-span-12 md:col-span-4 row-span-2 grid grid-cols-1 gap-4">
            <Card className="bg-gradient-to-br from-white/10 to-white/5 border-white/20 backdrop-blur-xl p-6 hover:scale-105 transition-all duration-500">
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-gold rounded-xl flex items-center justify-center">
                  <Users className="w-6 h-6 text-black" />
                </div>
                <div>
                  <div className="text-2xl font-bold text-white">5000+</div>
                  <div className="text-gray-300 text-sm">Happy Clients</div>
                </div>
              </div>
            </Card>
            <Card className="bg-gradient-to-br from-white/10 to-white/5 border-white/20 backdrop-blur-xl p-6 hover:scale-105 transition-all duration-500">
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-emerald-500 rounded-xl flex items-center justify-center">
                  <Award className="w-6 h-6 text-white" />
                </div>
                <div>
                  <div className="text-2xl font-bold text-white">15+</div>
                  <div className="text-gray-300 text-sm">Years Experience</div>
                </div>
              </div>
            </Card>
          </div>

          {/* CTA Section */}
          <div className="col-span-12 row-span-1 flex flex-col md:flex-row gap-4 items-center justify-start">
            <Button className="bg-gradient-to-r from-gold to-yellow-600 text-black hover:from-yellow-600 hover:to-gold font-montserrat font-bold text-lg px-8 py-4 rounded-full transition-all duration-300 hover:scale-105">
              <Calendar className="mr-2 h-5 w-5" />
              Book Appointment
            </Button>
            <Button variant="outline" className="border-2 border-gold text-gold hover:bg-gold hover:text-black font-montserrat font-semibold text-lg px-8 py-4 rounded-full transition-all duration-300">
              <Phone className="mr-2 h-5 w-5" />
              Call Now
            </Button>
          </div>

          {/* Statistics */}
          <div className="col-span-12 row-span-1 flex justify-center items-end">
            <div className="grid grid-cols-3 gap-8 text-center">
              <div>
                <div className="text-3xl font-bold text-gold">98%</div>
                <div className="text-gray-400 text-sm">Satisfaction</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-gold">24/7</div>
                <div className="text-gray-400 text-sm">Support</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-gold">50+</div>
                <div className="text-gray-400 text-sm">Services</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Services Grid */}
      <div className="max-w-7xl mx-auto px-4 pb-20">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 mb-16">
          
          {/* Services Grid - Spans 3 columns */}
          <div className="lg:col-span-3">
            <div className="mb-12 text-center lg:text-left">
              <h2 className="text-4xl md:text-5xl font-playfair font-bold text-white mb-4">
                Signature Services
              </h2>
              <p className="text-gray-300 text-lg">
                Choose from our curated selection of premium grooming experiences
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
              {servicePackages.map((pkg, index) => {
                const IconComponent = pkg.icon;
                return (
                  <Card 
                    key={pkg.id} 
                    className={`group relative overflow-hidden bg-gradient-to-br ${pkg.gradient} backdrop-blur-xl border-2 border-white/20 transition-all duration-700 hover:scale-105 hover:shadow-2xl hover:shadow-gold/20 rounded-3xl ${pkg.popular ? 'ring-2 ring-gold/50' : ''}`}
                    style={{ animationDelay: `${index * 200}ms` }}
                  >
                    {pkg.popular && (
                      <div className="absolute top-4 right-4 bg-gradient-to-r from-gold to-amber-500 text-black text-xs px-3 py-1 rounded-full font-semibold z-10">
                        Most Popular
                      </div>
                    )}
                    
                    {/* Service Image */}
                    <div className="relative h-48 overflow-hidden rounded-t-3xl">
                      <img 
                        src={pkg.image} 
                        alt={pkg.name}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                    </div>
                    
                    <CardContent className="p-6">
                      <div className="flex items-center justify-between mb-4">
                        <div className={`w-12 h-12 bg-gradient-to-br from-${pkg.accent}/80 to-${pkg.accent} rounded-xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                          <IconComponent className="w-6 h-6 text-white" />
                        </div>
                        <div className="text-right">
                          <div className="flex items-center gap-2">
                            <span className="text-2xl font-bold text-white">${pkg.price}</span>
                            {pkg.originalPrice && (
                              <span className="text-sm text-gray-400 line-through">${pkg.originalPrice}</span>
                            )}
                          </div>
                        </div>
                      </div>
                      
                      <h3 className="text-xl font-playfair font-bold text-white mb-3 group-hover:text-gold transition-colors duration-300">
                        {pkg.name}
                      </h3>
                      
                      <ul className="space-y-2 mb-6">
                        {pkg.features.map((feature, idx) => (
                          <li key={idx} className="flex items-start gap-3">
                            <Check className="w-4 h-4 text-gold mt-0.5 flex-shrink-0" />
                            <span className="text-gray-300 text-sm">{feature}</span>
                          </li>
                        ))}
                      </ul>
                      
                      <Button 
                        className="w-full bg-gradient-to-r from-gold to-yellow-600 text-black hover:from-yellow-600 hover:to-gold font-semibold py-3 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
                        onClick={() => setFormData({...formData, service: pkg.name})}
                      >
                        Select Service
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Button>
                    </CardContent>
                  </Card>
                );
              })}
            </div>

            {/* Additional Services */}
            <div className="mb-12">
              <h3 className="text-2xl font-playfair font-bold text-white mb-6">Additional Services</h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {additionalServices.map((service, index) => (
                  <Card key={service.name} className="bg-gradient-to-br from-white/10 to-white/5 border-white/20 backdrop-blur-xl p-4 hover:scale-105 transition-all duration-300">
                    <CardContent className="p-0 text-center">
                      <service.icon className="w-8 h-8 text-gold mx-auto mb-3" />
                      <h4 className="text-white font-semibold text-sm mb-2">{service.name}</h4>
                      <div className="text-gold font-bold">${service.price}</div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>

          {/* Booking Form Sidebar */}
          <div className="lg:col-span-1">
            <Card className="bg-gradient-to-br from-white/10 to-white/5 border-white/20 backdrop-blur-xl shadow-xl sticky top-8 rounded-3xl">
              <CardHeader className="text-center pb-4">
                <CardTitle className="text-2xl font-playfair font-bold text-white">
                  Book Your Service
                </CardTitle>
                <p className="text-gray-300">
                  Reserve your spot today
                </p>
              </CardHeader>
              
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <Label htmlFor="name" className="text-white font-medium">Full Name</Label>
                    <Input
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="mt-1 bg-white/10 border-white/20 text-white placeholder-gray-400 focus:border-gold focus:ring-gold rounded-xl"
                      placeholder="Enter your name"
                    />
                  </div>

                  <div>
                    <Label htmlFor="email" className="text-white font-medium">Email</Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="mt-1 bg-white/10 border-white/20 text-white placeholder-gray-400 focus:border-gold focus:ring-gold rounded-xl"
                      placeholder="your@email.com"
                    />
                  </div>

                  <div>
                    <Label htmlFor="phone" className="text-white font-medium">Phone</Label>
                    <Input
                      id="phone"
                      name="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={handleInputChange}
                      required
                      className="mt-1 bg-white/10 border-white/20 text-white placeholder-gray-400 focus:border-gold focus:ring-gold rounded-xl"
                      placeholder="+1 (555) 123-4567"
                    />
                  </div>

                  <div>
                    <Label htmlFor="service" className="text-white font-medium">Service</Label>
                    <select
                      id="service"
                      name="service"
                      value={formData.service}
                      onChange={handleInputChange}
                      required
                      className="w-full mt-1 px-3 py-2 bg-white/10 border border-white/20 text-white rounded-xl focus:border-gold focus:ring-gold"
                    >
                      <option value="" className="bg-slate-800">Select a service</option>
                      {servicePackages.map(pkg => (
                        <option key={pkg.id} value={pkg.name} className="bg-slate-800">{pkg.name}</option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <Label htmlFor="message" className="text-white font-medium">Message</Label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      rows={3}
                      className="mt-1 bg-white/10 border-white/20 text-white placeholder-gray-400 focus:border-gold focus:ring-gold rounded-xl resize-none"
                      placeholder="Any special requests..."
                    />
                  </div>

                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-gradient-to-r from-gold to-yellow-600 text-black hover:from-yellow-600 hover:to-gold font-semibold py-3 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
                  >
                    {isSubmitting ? 'Sending...' : 'Book Now'}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Location & Contact Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          {/* Interactive Map */}
          <div className="order-2 lg:order-1">
            <Card className="bg-gradient-to-br from-white/10 to-white/5 border-white/20 backdrop-blur-xl shadow-xl overflow-hidden h-96 rounded-3xl">
              <CardHeader className="pb-0">
                <CardTitle className="flex items-center gap-2 text-white">
                  <MapPin className="w-5 h-5 text-gold" />
                  Find Our Location
                </CardTitle>
              </CardHeader>
              <CardContent className="p-0">
                <div className="w-full h-80 rounded-b-3xl">
                  <iframe
                    src="https://www.openstreetmap.org/export/embed.html?bbox=38.8476%2C9.0069%2C38.8576%2C9.0169&layer=mapnik&marker=9.011898626972641%2C38.85263916611005"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    title="The Art Barbershop Location"
                    className="rounded-b-3xl"
                  />
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Contact Information */}
          <div className="order-1 lg:order-2 space-y-6">
            <div>
              <h3 className="text-3xl font-playfair font-bold text-white mb-4">
                Visit Our Studio
              </h3>
              <p className="text-gray-300 text-lg leading-relaxed">
                Located in the heart of Addis Ababa, our modern studio offers a premium environment for the ultimate grooming experience.
              </p>
            </div>

            <div className="space-y-4">
              <Card className="bg-gradient-to-br from-white/10 to-white/5 border-white/20 backdrop-blur-xl p-6 rounded-2xl hover:scale-105 transition-all duration-300">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-gold rounded-xl flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-6 h-6 text-black" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-white mb-1">Address</h4>
                    <p className="text-gray-300">Bole, Addis Ababa, Ethiopia</p>
                    <p className="text-gray-300">Near Millennium Hall</p>
                  </div>
                </div>
              </Card>

              <Card className="bg-gradient-to-br from-white/10 to-white/5 border-white/20 backdrop-blur-xl p-6 rounded-2xl hover:scale-105 transition-all duration-300">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-emerald-500 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Phone className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-white mb-1">Phone</h4>
                    <p className="text-gray-300">+251 11 123 4567</p>
                    <p className="text-gray-300">+251 9XX XXX XXX</p>
                  </div>
                </div>
              </Card>

              <Card className="bg-gradient-to-br from-white/10 to-white/5 border-white/20 backdrop-blur-xl p-6 rounded-2xl hover:scale-105 transition-all duration-300">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-purple-500 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Clock className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-white mb-1">Hours</h4>
                    <p className="text-gray-300">Monday - Friday: 9:00 AM - 8:00 PM</p>
                    <p className="text-gray-300">Saturday - Sunday: 8:00 AM - 6:00 PM</p>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </div>

        {/* Why Choose Us Section */}
        <div className="text-center mb-12">
          <h3 className="text-4xl font-playfair font-bold text-white mb-12">
            Why Choose <span className="text-gold">The Art</span>?
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="bg-gradient-to-br from-white/10 to-white/5 border-white/20 backdrop-blur-xl p-8 rounded-3xl hover:scale-105 transition-all duration-500">
              <Shield className="w-16 h-16 text-gold mx-auto mb-6" />
              <h4 className="text-xl font-playfair font-bold text-white mb-4">Master Craftsmen</h4>
              <p className="text-gray-300">Skilled professionals with years of experience in precision grooming</p>
            </Card>

            <Card className="bg-gradient-to-br from-white/10 to-white/5 border-white/20 backdrop-blur-xl p-8 rounded-3xl hover:scale-105 transition-all duration-500">
              <Heart className="w-16 h-16 text-gold mx-auto mb-6" />
              <h4 className="text-xl font-playfair font-bold text-white mb-4">Premium Products</h4>
              <p className="text-gray-300">Only the finest grooming products and tools for exceptional results</p>
            </Card>

            <Card className="bg-gradient-to-br from-white/10 to-white/5 border-white/20 backdrop-blur-xl p-8 rounded-3xl hover:scale-105 transition-all duration-500">
              <Award className="w-16 h-16 text-gold mx-auto mb-6" />
              <h4 className="text-xl font-playfair font-bold text-white mb-4">Luxury Experience</h4>
              <p className="text-gray-300">Personalized service in a sophisticated, comfortable environment</p>
            </Card>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Services;
