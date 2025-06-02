
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
    <div className="min-h-screen bg-[#173d26]">
      <Navigation />
      
      {/* Hero Section with Owner Profile */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center min-h-[80vh]">
            {/* Left Content */}
            <div className="lg:col-span-6 space-y-8">
              {/* Owner Introduction */}
              <div className="text-center lg:text-left">
                <h3 className="text-4xl md:text-5xl font-playfair font-bold text-white mb-4 leading-tight">
                  Artist Henok Berihun
                </h3>
                <p className="text-xl md:text-2xl bg-gradient-to-r from-[#efe0bf] to-[#f0c515] bg-clip-text text-transparent font-montserrat font-semibold mb-6">
                  Master Barber & Founder
                </p>
                <p className="text-lg text-gray-300 font-montserrat max-w-2xl mx-auto lg:mx-0 leading-relaxed">
                  With over 15 years of artistic excellence, Henok has transformed the landscape of Ethiopian barbering, 
                  blending traditional craftsmanship with contemporary sophistication.
                </p>
              </div>
            </div>

            {/* Right Content - Hero Image */}
            <div className="lg:col-span-6 relative">
              <div className="relative">
                {/* Portrait Image with Seamless Background Blending */}
                <div className="relative">
                  <img 
                    src="/lovable-uploads/9265fdd2-8387-4d0f-ac9b-f0e40947c59a.png" 
                    alt="Artist Henok Berihun - Master Barber & Founder" 
                    className="w-full max-w-md mx-auto object-cover rounded-2xl shadow-2xl"
                    style={{
                      background: 'linear-gradient(135deg, #173d26 0%, #1a4129 50%, #173d26 100%)',
                      padding: '2px'
                    }}
                  />
                  
                  {/* Subtle glow effect */}
                  <div className="absolute -inset-1 bg-gradient-to-r from-[#efe0bf]/20 to-[#f0c515]/20 rounded-2xl blur-lg opacity-50"></div>
                </div>
                
                {/* Decorative elements */}
                <div className="absolute -top-8 -left-8 w-32 h-32 bg-gradient-to-r from-[#efe0bf]/10 to-[#f0c515]/10 rounded-full blur-xl"></div>
                <div className="absolute -bottom-8 -right-8 w-40 h-40 bg-gradient-to-r from-[#f0c515]/10 to-[#efe0bf]/10 rounded-full blur-xl"></div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Background pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{
            backgroundImage: `radial-gradient(circle at 25% 25%, #efe0bf 1px, transparent 1px),
                             radial-gradient(circle at 75% 75%, #f0c515 1px, transparent 1px)`,
            backgroundSize: '50px 50px'
          }}></div>
        </div>
      </section>

      {/* Mission & Values */}
      <section className="py-20 bg-gradient-to-b from-[#173d26] to-[#1a4129]">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-montserrat font-bold text-white mb-6">
              Our Mission & Values
            </h2>
            <p className="text-xl text-gray-300 font-montserrat max-w-2xl mx-auto">
              The principles that guide everything we do
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="group bg-gradient-to-br from-gray-800/30 to-[#173d26]/50 border-0 shadow-xl hover:shadow-2xl transition-all duration-500 hover:scale-105 hover:-translate-y-2 rounded-2xl backdrop-blur-sm">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-[#efe0bf]/20 to-[#f0c515]/20 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:bg-gradient-to-r group-hover:from-[#efe0bf] group-hover:to-[#f0c515] group-hover:scale-110 transition-all duration-300">
                  <Target className="h-8 w-8 text-[#f0c515] group-hover:text-[#173d26] transition-colors duration-300" />
                </div>
                <h3 className="text-xl font-montserrat font-bold text-white mb-4 group-hover:text-[#f0c515] transition-colors duration-300">
                  Excellence
                </h3>
                <p className="text-gray-300 font-montserrat leading-relaxed">
                  We strive for perfection in every cut, ensuring each client leaves feeling confident and styled to perfection.
                </p>
              </CardContent>
            </Card>

            <Card className="group bg-gradient-to-br from-gray-800/30 to-[#173d26]/50 border-0 shadow-xl hover:shadow-2xl transition-all duration-500 hover:scale-105 hover:-translate-y-2 rounded-2xl backdrop-blur-sm">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-[#efe0bf]/20 to-[#f0c515]/20 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:bg-gradient-to-r group-hover:from-[#efe0bf] group-hover:to-[#f0c515] group-hover:scale-110 transition-all duration-300">
                  <Heart className="h-8 w-8 text-[#f0c515] group-hover:text-[#173d26] transition-colors duration-300" />
                </div>
                <h3 className="text-xl font-montserrat font-bold text-white mb-4 group-hover:text-[#f0c515] transition-colors duration-300">
                  Heritage
                </h3>
                <p className="text-gray-300 font-montserrat leading-relaxed">
                  We honor the rich tradition of Black barbering while pushing the boundaries of modern styling.
                </p>
              </CardContent>
            </Card>

            <Card className="group bg-gradient-to-br from-gray-800/30 to-[#173d26]/50 border-0 shadow-xl hover:shadow-2xl transition-all duration-500 hover:scale-105 hover:-translate-y-2 rounded-2xl backdrop-blur-sm">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-[#efe0bf]/20 to-[#f0c515]/20 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:bg-gradient-to-r group-hover:from-[#efe0bf] group-hover:to-[#f0c515] group-hover:scale-110 transition-all duration-300">
                  <Gem className="h-8 w-8 text-[#f0c515] group-hover:text-[#173d26] transition-colors duration-300" />
                </div>
                <h3 className="text-xl font-montserrat font-bold text-white mb-4 group-hover:text-[#f0c515] transition-colors duration-300">
                  Community
                </h3>
                <p className="text-gray-300 font-montserrat leading-relaxed">
                  We create a welcoming space where style, culture, and community come together in harmony.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-[#173d26]">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-montserrat font-bold text-white mb-6">
              Meet the <span className="font-playfair italic bg-gradient-to-r from-[#efe0bf] to-[#f0c515] bg-clip-text text-transparent">Artists</span>
            </h2>
            <p className="text-xl text-gray-300 font-montserrat max-w-2xl mx-auto">
              Our master barbers bring decades of combined experience and unmatched skill to every service
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <Card key={member.name} className="group bg-gradient-to-br from-gray-800/30 to-[#173d26]/50 border-0 shadow-xl hover:shadow-2xl transition-all duration-500 hover:scale-105 hover:-translate-y-2 rounded-2xl backdrop-blur-sm">
                <CardContent className="p-8">
                  <div className="relative mb-6">
                    <div className="absolute inset-0 bg-gradient-to-br from-[#efe0bf]/20 to-[#f0c515]/20 rounded-xl transform rotate-2 group-hover:rotate-0 transition-transform duration-300"></div>
                    <img 
                      src={member.image} 
                      alt={member.name} 
                      className="relative w-full h-64 object-cover rounded-xl group-hover:scale-105 transition-transform duration-500" 
                    />
                  </div>
                  <h3 className="text-2xl font-montserrat font-bold text-white mb-2 group-hover:text-[#f0c515] transition-colors duration-300">
                    {member.name}
                  </h3>
                  <p className="bg-gradient-to-r from-[#efe0bf] to-[#f0c515] bg-clip-text text-transparent font-montserrat font-semibold mb-4">
                    {member.role}
                  </p>
                  <div className="space-y-2 text-gray-300 font-montserrat">
                    <p><span className="text-[#f0c515] font-semibold">Experience:</span> {member.experience}</p>
                    <p><span className="text-[#f0c515] font-semibold">Specialty:</span> {member.specialty}</p>
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
