import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { MapPin, Check, Phone, Clock, Heart, Shield, Award, Scissors, Crown, Sparkles, Trophy, Star, Calendar, ArrowRight, Users } from 'lucide-react';
const Services = () => {
  // Premium barbershop services with Ethiopian pricing
  const servicePackages = [{
    id: 'signature',
    name: 'Signature Cut & Style',
    price: 150,
    originalPrice: 180,
    icon: Scissors,
    popular: false,
    image: "https://images.unsplash.com/photo-1503951914875-452162b0f3f1?w=500&q=80",
    features: ['Personal consultation', 'Precision cutting technique', 'Professional styling', 'Premium hair products', 'Finishing touch']
  }, {
    id: 'royal',
    name: 'Royal Grooming Package',
    price: 250,
    originalPrice: 300,
    icon: Crown,
    popular: true,
    image: "https://images.unsplash.com/photo-1599351431202-1e0f0137899a?w=500&q=80",
    features: ['Signature cut & style', 'Traditional hot towel shave', 'Beard trim & shape', 'Scalp massage', 'Premium aftercare', 'Complimentary tea']
  }, {
    id: 'beard',
    name: 'Beard Artistry',
    price: 100,
    originalPrice: 120,
    icon: Sparkles,
    popular: false,
    image: "https://images.unsplash.com/photo-1621605815971-fbc98d665033?w=500&q=80",
    features: ['Precision beard shaping', 'Line-up & detailing', 'Beard oil treatment', 'Styling consultation', 'Maintenance tips']
  }, {
    id: 'vip',
    name: 'VIP Elite Experience',
    price: 400,
    originalPrice: 500,
    icon: Trophy,
    popular: false,
    image: "https://images.unsplash.com/photo-1585747860715-2ba37e788b70?w=500&q=80",
    features: ['Private VIP suite', 'Complete grooming package', 'Premium product selection', 'Extended relaxation time', 'Personal grooming consultation', 'Exclusive aftercare kit', 'Priority booking privileges']
  }];
  const additionalServices = [{
    name: 'Hair Wash & Blow Dry',
    price: 60,
    icon: Sparkles
  }, {
    name: 'Eyebrow Trimming',
    price: 40,
    icon: Scissors
  }, {
    name: 'Hot Towel Treatment',
    price: 50,
    icon: Heart
  }, {
    name: 'Scalp Treatment',
    price: 80,
    icon: Crown
  }];

  // Ethiopian male testimonials
  const testimonials = [{
    name: "Abebe Tadesse",
    text: "The Art delivers exceptional service. Every visit exceeds my expectations with their professional approach.",
    rating: 5,
    role: "Business Owner",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&q=80"
  }, {
    name: "Dawit Bekele",
    text: "Outstanding craftsmanship and attention to detail. This is truly premium barbering in Addis Ababa.",
    rating: 5,
    role: "Engineer",
    avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&q=80"
  }, {
    name: "Tekle Alemu",
    text: "Professional service from start to finish. The team understands modern Ethiopian gentleman's style perfectly.",
    rating: 5,
    role: "Teacher",
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&q=80"
  }];
  return <div className="min-h-screen bg-white">
      <Navigation />
      
      {/* Hero Section - Clean Layout */}
      <section className="pt-20 pb-16 bg-gradient-to-br from-slate-50 to-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center px-6 py-3 bg-[#173d26]/10 rounded-full mb-8 text-[#173d26] font-medium">
              <Scissors className="w-5 h-5 mr-2" />
              Premium Barbershop Services
            </div>
            <h1 className="text-5xl md:text-6xl font-playfair font-bold text-gray-900 mb-6">
              Crafted
              <span className="block text-[#173d26] italic">Excellence</span>
            </h1>
            <p className="text-xl text-gray-600 font-montserrat max-w-2xl mx-auto mb-8">
              Experience the artistry of precision grooming with our signature services, tailored for the modern Ethiopian gentleman.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <Button className="bg-[#173d26] text-white hover:bg-[#173d26]/90 font-montserrat font-bold text-lg px-8 py-4 rounded-xl">
                <Calendar className="mr-2 h-5 w-5" />
                Book Appointment
              </Button>
              <Button variant="outline" className="border-2 border-gray-800 text-gray-800 hover:bg-gray-800 hover:text-white font-montserrat font-bold text-lg px-8 py-4 rounded-xl">
                <Phone className="mr-2 h-5 w-5" />
                Call 0935652525
              </Button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6 max-w-3xl mx-auto">
              <div className="text-center">
                <div className="text-3xl font-bold text-[#173d26]">2000+</div>
                <div className="text-gray-600 text-sm">Happy Clients</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-[#173d26]">10+</div>
                <div className="text-gray-600 text-sm">Years Experience</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-[#173d26]">98%</div>
                <div className="text-gray-600 text-sm">Satisfaction</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-[#173d26]">24/7</div>
                <div className="text-gray-600 text-sm">Support</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Services - Clean Grid */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-playfair font-bold text-gray-900 mb-4">
                Signature Services
              </h2>
              <p className="text-xl text-gray-600">
                Choose from our curated selection of premium grooming experiences
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
              {servicePackages.map(pkg => {
              const IconComponent = pkg.icon;
              return <Card key={pkg.id} className={`relative border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 ${pkg.popular ? 'ring-2 ring-[#173d26]' : ''}`}>
                    {pkg.popular && <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-[#173d26] text-white text-xs px-4 py-1 rounded-full font-semibold z-10">
                        Most Popular
                      </div>}
                    
                    {/* Service Image */}
                    <div className="relative h-48 overflow-hidden rounded-t-lg">
                      <img src={pkg.image} alt={pkg.name} className="w-full h-full object-cover" />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                    </div>
                    
                    <CardContent className="p-6">
                      <div className="flex items-center justify-between mb-4">
                        <div className="w-12 h-12 bg-[#173d26] rounded-xl flex items-center justify-center shadow-lg">
                          <IconComponent className="w-6 h-6 text-white" />
                        </div>
                        <div className="text-right">
                          <div className="flex items-center gap-2">
                            <span className="text-2xl font-bold text-gray-900">{pkg.price} Birr</span>
                            {pkg.originalPrice && <span className="text-sm text-gray-400 line-through">{pkg.originalPrice} Birr</span>}
                          </div>
                        </div>
                      </div>
                      
                      <h3 className="text-xl font-playfair font-bold text-gray-900 mb-3">
                        {pkg.name}
                      </h3>
                      
                      <ul className="space-y-2 mb-6">
                        {pkg.features.map((feature, idx) => <li key={idx} className="flex items-start gap-3">
                            <Check className="w-4 h-4 text-[#173d26] mt-0.5 flex-shrink-0" />
                            <span className="text-gray-600 text-sm">{feature}</span>
                          </li>)}
                      </ul>
                      
                      <Button className="w-full bg-[#173d26] text-white hover:bg-[#173d26]/90 font-semibold py-3 rounded-xl">
                        Select Service
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Button>
                    </CardContent>
                  </Card>;
            })}
            </div>

            {/* Additional Services */}
            <div className="mb-16">
              <h3 className="text-2xl font-playfair font-bold text-gray-900 mb-6 text-center">Additional Services</h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {additionalServices.map(service => <Card key={service.name} className="border-0 shadow-md hover:shadow-lg transition-all duration-300 text-center p-4">
                    <CardContent className="p-0">
                      <service.icon className="w-8 h-8 text-[#173d26] mx-auto mb-3" />
                      <h4 className="text-gray-900 font-semibold text-sm mb-2">{service.name}</h4>
                      <div className="text-[#173d26] font-bold">{service.price} Birr</div>
                    </CardContent>
                  </Card>)}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Location & Contact */}
      

      {/* Why Choose Us */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h3 className="text-4xl font-playfair font-bold text-gray-900 mb-12">
              Why Choose <span className="text-[#173d26] italic">The Art</span>?
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <Card className="border-0 shadow-lg p-8 text-center">
                <Shield className="w-16 h-16 text-[#173d26] mx-auto mb-6" />
                <h4 className="text-xl font-playfair font-bold text-gray-900 mb-4">Master Craftsmen</h4>
                <p className="text-gray-600">Skilled professionals with years of experience in precision grooming</p>
              </Card>

              <Card className="border-0 shadow-lg p-8 text-center">
                <Heart className="w-16 h-16 text-[#173d26] mx-auto mb-6" />
                <h4 className="text-xl font-playfair font-bold text-gray-900 mb-4">Premium Products</h4>
                <p className="text-gray-600">Only the finest grooming products and tools for exceptional results</p>
              </Card>

              <Card className="border-0 shadow-lg p-8 text-center">
                <Award className="w-16 h-16 text-[#173d26] mx-auto mb-6" />
                <h4 className="text-xl font-playfair font-bold text-gray-900 mb-4">Luxury Experience</h4>
                <p className="text-gray-600">Personalized service in a sophisticated, comfortable environment</p>
              </Card>
            </div>
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
              {testimonials.map(testimonial => <Card key={testimonial.name} className="border-0 shadow-lg">
                  <CardContent className="p-6">
                    <div className="flex mb-4 justify-center">
                      {[...Array(testimonial.rating)].map((_, i) => <Star key={i} className="text-yellow-500 h-5 w-5 fill-current" />)}
                    </div>
                    
                    <p className="text-gray-600 font-montserrat mb-6 italic text-center leading-relaxed">
                      "{testimonial.text}"
                    </p>
                    
                    <div className="text-center border-t border-gray-200 pt-4">
                      <img src={testimonial.avatar} alt={testimonial.name} className="w-16 h-16 rounded-full mx-auto mb-3 object-cover" />
                      <p className="text-gray-900 font-playfair font-bold text-lg">
                        {testimonial.name}
                      </p>
                      <p className="text-[#173d26] font-montserrat font-medium text-sm">
                        {testimonial.role}
                      </p>
                    </div>
                  </CardContent>
                </Card>)}
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>;
};
export default Services;