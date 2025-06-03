
import React from 'react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Card, CardContent } from '@/components/ui/card';
import { Award, Users, Star, Target, Heart, Gem } from 'lucide-react';

const About = () => {
  const team = [{
    name: "Marcus 'The Artist' Johnson",
    role: "Master Barber & Founder",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
    experience: "15+ years",
    specialty: "Precision Fades & Hair Art"
  }, {
    name: "Kevin 'Smooth' Williams",
    role: "Senior Barber",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
    experience: "10+ years",
    specialty: "Beard Sculpting & Classic Cuts"
  }, {
    name: "Andre 'The Craftsman' Davis",
    role: "Creative Barber",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
    experience: "8+ years",
    specialty: "Modern Styles & Line-ups"
  }];

  const stats = [{
    number: "+20",
    label: "Years Of Experience",
    icon: Award
  }, {
    number: "+80",
    label: "Our Awesome Expert",
    icon: Users
  }, {
    number: "+20K",
    label: "Happy Customer",
    icon: Star
  }];

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900">
      <Navigation />
      
      {/* Hero Section with Modern Design */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center min-h-[80vh]">
            {/* Left Content */}
            <div className="lg:col-span-6 space-y-8">
              <div className="text-center lg:text-left animate-fade-in">
                <div className="inline-flex items-center px-6 py-3 bg-[#173d26]/10 dark:bg-sage/20 rounded-full mb-6 border border-[#173d26]/20 dark:border-sage/30">
                  <Star className="h-5 w-5 text-[#173d26] dark:text-sage mr-3" />
                  <span className="text-[#173d26] dark:text-sage font-montserrat font-semibold">Meet the Master</span>
                </div>
                
                <h1 className="text-5xl md:text-7xl font-playfair font-bold text-[#173d26] dark:text-white mb-6 leading-tight">
                  Artist Henok Berihun
                </h1>
                
                <p className="text-2xl md:text-3xl bg-gradient-to-r from-[#efe0bf] to-[#f0c515] dark:from-sage dark:to-white bg-clip-text text-transparent font-montserrat font-semibold mb-8">
                  Master Barber & Founder
                </p>
                
                <p className="text-lg text-[#173d26]/70 dark:text-white/70 font-montserrat max-w-2xl mx-auto lg:mx-0 leading-relaxed mb-8">
                  With over 15 years of artistic excellence, Henok has transformed the landscape of Ethiopian barbering, 
                  blending traditional craftsmanship with contemporary sophistication.
                </p>

                {/* Achievement Stats */}
                <div className="grid grid-cols-3 gap-6 max-w-md mx-auto lg:mx-0">
                  {stats.map((stat) => (
                    <div key={stat.label} className="text-center">
                      <div className="text-3xl font-montserrat font-bold text-[#173d26] dark:text-white mb-1">
                        {stat.number}
                      </div>
                      <div className="text-sm text-[#173d26]/70 dark:text-white/70 font-montserrat">
                        {stat.label}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Right Content - Modern Profile Image */}
            <div className="lg:col-span-6 relative">
              <div className="relative max-w-lg mx-auto">
                {/* Main Profile Image with Modern Design */}
                <div className="relative group">
                  <div className="absolute -inset-4 bg-gradient-to-r from-[#efe0bf]/20 to-[#f0c515]/20 dark:from-sage/20 dark:to-white/20 rounded-3xl blur-xl opacity-50 group-hover:opacity-75 transition-opacity duration-300"></div>
                  
                  <div className="relative bg-white dark:bg-gray-800 p-2 rounded-3xl shadow-2xl">
                    <img 
                      src="/lovable-uploads/d2c978aa-8099-473e-b00c-c0fb18a008d0.png" 
                      alt="Artist Henok Berihun - Master Barber & Founder" 
                      className="w-full h-auto rounded-2xl object-cover transform group-hover:scale-105 transition-transform duration-500" 
                    />
                  </div>
                  
                  {/* Floating Achievement Badge */}
                  <div className="absolute -bottom-4 -left-4 bg-[#173d26] dark:bg-sage text-white rounded-2xl p-4 shadow-lg transform hover:scale-110 transition-transform duration-300">
                    <Award className="h-8 w-8 mb-2" />
                    <div className="text-sm font-montserrat font-bold">15+ Years</div>
                    <div className="text-xs opacity-80">Excellence</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Modern Background Pattern */}
        <div className="absolute inset-0 opacity-5 dark:opacity-10">
          <div 
            style={{
              backgroundImage: `radial-gradient(circle at 25% 25%, #efe0bf 1px, transparent 1px),
                               radial-gradient(circle at 75% 75%, #f0c515 1px, transparent 1px)`,
              backgroundSize: '50px 50px'
            }} 
            className="absolute inset-0"
          ></div>
        </div>
      </section>

      {/* Mission & Values with Modern Cards */}
      <section className="py-20 bg-gray-50 dark:bg-gray-800">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 animate-fade-in">
            <div className="inline-flex items-center px-6 py-3 bg-[#173d26]/10 dark:bg-sage/20 rounded-full mb-6 border border-[#173d26]/20 dark:border-sage/30">
              <Heart className="h-5 w-5 text-[#173d26] dark:text-sage mr-3" />
              <span className="text-[#173d26] dark:text-sage font-montserrat font-semibold">Our Foundation</span>
            </div>
            
            <h2 className="text-4xl md:text-5xl font-montserrat font-bold text-[#173d26] dark:text-white mb-6">
              Mission & Values
            </h2>
            <p className="text-xl text-[#173d26]/70 dark:text-white/70 font-montserrat max-w-2xl mx-auto">
              The principles that guide everything we do
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="group bg-white dark:bg-gray-700 border-[#173d26]/10 dark:border-sage/20 shadow-xl hover:shadow-2xl transition-all duration-500 hover:scale-105 hover:-translate-y-2 rounded-3xl animate-scale-in">
              <CardContent className="p-8 text-center">
                <div className="w-20 h-20 bg-gradient-to-r from-[#efe0bf]/20 to-[#f0c515]/20 dark:from-sage/20 dark:to-white/20 rounded-3xl flex items-center justify-center mx-auto mb-6 group-hover:bg-gradient-to-r group-hover:from-[#efe0bf] group-hover:to-[#f0c515] dark:group-hover:from-sage dark:group-hover:to-white group-hover:scale-110 transition-all duration-300">
                  <Target className="h-10 w-10 text-[#173d26] dark:text-sage group-hover:text-[#173d26] transition-colors duration-300" />
                </div>
                <h3 className="text-2xl font-montserrat font-bold text-[#173d26] dark:text-white mb-4">
                  Excellence
                </h3>
                <p className="text-[#173d26]/70 dark:text-white/70 font-montserrat leading-relaxed">
                  We strive for perfection in every cut, ensuring each client leaves feeling confident and styled to perfection.
                </p>
              </CardContent>
            </Card>

            <Card className="group bg-white dark:bg-gray-700 border-[#173d26]/10 dark:border-sage/20 shadow-xl hover:shadow-2xl transition-all duration-500 hover:scale-105 hover:-translate-y-2 rounded-3xl animate-scale-in" style={{ animationDelay: '100ms' }}>
              <CardContent className="p-8 text-center">
                <div className="w-20 h-20 bg-gradient-to-r from-[#efe0bf]/20 to-[#f0c515]/20 dark:from-sage/20 dark:to-white/20 rounded-3xl flex items-center justify-center mx-auto mb-6 group-hover:bg-gradient-to-r group-hover:from-[#efe0bf] group-hover:to-[#f0c515] dark:group-hover:from-sage dark:group-hover:to-white group-hover:scale-110 transition-all duration-300">
                  <Heart className="h-10 w-10 text-[#173d26] dark:text-sage group-hover:text-[#173d26] transition-colors duration-300" />
                </div>
                <h3 className="text-2xl font-montserrat font-bold text-[#173d26] dark:text-white mb-4">
                  Heritage
                </h3>
                <p className="text-[#173d26]/70 dark:text-white/70 font-montserrat leading-relaxed">
                  We honor the rich tradition of Black barbering while pushing the boundaries of modern styling.
                </p>
              </CardContent>
            </Card>

            <Card className="group bg-white dark:bg-gray-700 border-[#173d26]/10 dark:border-sage/20 shadow-xl hover:shadow-2xl transition-all duration-500 hover:scale-105 hover:-translate-y-2 rounded-3xl animate-scale-in" style={{ animationDelay: '200ms' }}>
              <CardContent className="p-8 text-center">
                <div className="w-20 h-20 bg-gradient-to-r from-[#efe0bf]/20 to-[#f0c515]/20 dark:from-sage/20 dark:to-white/20 rounded-3xl flex items-center justify-center mx-auto mb-6 group-hover:bg-gradient-to-r group-hover:from-[#efe0bf] group-hover:to-[#f0c515] dark:group-hover:from-sage dark:group-hover:to-white group-hover:scale-110 transition-all duration-300">
                  <Gem className="h-10 w-10 text-[#173d26] dark:text-sage group-hover:text-[#173d26] transition-colors duration-300" />
                </div>
                <h3 className="text-2xl font-montserrat font-bold text-[#173d26] dark:text-white mb-4">
                  Community
                </h3>
                <p className="text-[#173d26]/70 dark:text-white/70 font-montserrat leading-relaxed">
                  We create a welcoming space where style, culture, and community come together in harmony.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-montserrat font-bold text-[#173d26] dark:text-white mb-6">
              Meet the <span className="bg-gradient-to-r from-[#f6e27a] via-[#f0c515] to-[#173d26] dark:from-sage dark:via-white dark:to-sage bg-clip-text text-transparent">Artists</span>
            </h2>
            <p className="text-xl text-[#173d26]/70 dark:text-white/70 font-montserrat max-w-2xl mx-auto">
              Our master barbers bring decades of combined experience and unmatched skill to every service
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <Card 
                key={member.name} 
                className="group bg-white dark:bg-gray-800 border-[#173d26]/10 dark:border-sage/20 shadow-xl hover:shadow-2xl transition-all duration-500 hover:scale-105 hover:-translate-y-2 rounded-3xl animate-scale-in"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <CardContent className="p-8">
                  <div className="relative mb-6">
                    <div className="absolute inset-0 bg-gradient-to-br from-[#efe0bf]/20 to-[#f0c515]/20 dark:from-sage/20 dark:to-white/20 rounded-2xl transform rotate-2 group-hover:rotate-0 transition-transform duration-300"></div>
                    <img 
                      src={member.image} 
                      alt={member.name} 
                      className="relative w-full h-64 object-cover rounded-2xl group-hover:scale-105 transition-transform duration-500" 
                    />
                  </div>
                  <h3 className="text-2xl font-montserrat font-bold text-[#173d26] dark:text-white mb-2">
                    {member.name}
                  </h3>
                  <p className="bg-gradient-to-r from-[#efe0bf] to-[#f0c515] dark:from-sage dark:to-white bg-clip-text text-transparent font-montserrat font-semibold mb-4">
                    {member.role}
                  </p>
                  <div className="space-y-2 text-[#173d26]/70 dark:text-white/70 font-montserrat">
                    <p><span className="text-[#173d26] dark:text-white font-semibold">Experience:</span> {member.experience}</p>
                    <p><span className="text-[#173d26] dark:text-white font-semibold">Specialty:</span> {member.specialty}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;
