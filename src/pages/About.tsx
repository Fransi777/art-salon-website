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
  return <div className="min-h-screen bg-white">
      <Navigation />
      
      {/* Hero Section with Owner Profile */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center min-h-[80vh]">
            {/* Left Content */}
            <div className="lg:col-span-6 space-y-8">
              {/* Owner Profile Image - Circular and Prominent */}
              <div className="text-center lg:text-left mb-8">
                <div className="relative inline-block">
                  
                  {/* Decorative ring */}
                  
                  
                </div>
                
                {/* Owner Introduction */}
                <div className="mt-6">
                  <h3 className="text-2xl md:text-3xl font-playfair font-bold text-obsidian mb-2">
                    Artist Henok Berihun
                  </h3>
                  <p className="text-lg text-bronze font-montserrat font-semibold mb-4">
                    Master Barber & Founder
                  </p>
                  <p className="text-gray-600 font-montserrat max-w-md mx-auto lg:mx-0 leading-relaxed">
                    With over 15 years of artistic excellence, Henok has transformed the landscape of Ethiopian barbering, 
                    blending traditional craftsmanship with contemporary sophistication.
                  </p>
                </div>
              </div>

              <div className="animate-fade-in">
                
              </div>
              
              

              {/* Stats Section */}
              
            </div>

            {/* Right Content - Hero Image */}
            <div className="lg:col-span-6 relative">
              <div className="relative animate-slide-in-right">
                <div className="absolute inset-0 bg-gradient-to-br from-sage/20 to-bronze/20 rounded-3xl transform rotate-3"></div>
                
                <div className="absolute -top-8 -left-8 w-32 h-32 bg-gold/20 rounded-full blur-xl"></div>
                
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Values */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-montserrat font-bold text-obsidian mb-6">
              Our Mission & Values
            </h2>
            <p className="text-xl text-gray-600 font-montserrat max-w-2xl mx-auto">
              The principles that guide everything we do
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="group bg-white border-0 shadow-lg hover:shadow-xl transition-all duration-500 hover:scale-105 hover:-translate-y-2">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-sage/10 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:bg-sage group-hover:scale-110 transition-all duration-300">
                  <Target className="h-8 w-8 text-sage group-hover:text-white transition-colors duration-300" />
                </div>
                <h3 className="text-xl font-montserrat font-bold text-obsidian mb-4 group-hover:text-sage transition-colors duration-300">
                  Excellence
                </h3>
                <p className="text-gray-600 font-montserrat leading-relaxed">
                  We strive for perfection in every cut, ensuring each client leaves feeling confident and styled to perfection.
                </p>
              </CardContent>
            </Card>

            <Card className="group bg-white border-0 shadow-lg hover:shadow-xl transition-all duration-500 hover:scale-105 hover:-translate-y-2">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-sage/10 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:bg-sage group-hover:scale-110 transition-all duration-300">
                  <Heart className="h-8 w-8 text-sage group-hover:text-white transition-colors duration-300" />
                </div>
                <h3 className="text-xl font-montserrat font-bold text-obsidian mb-4 group-hover:text-sage transition-colors duration-300">
                  Heritage
                </h3>
                <p className="text-gray-600 font-montserrat leading-relaxed">
                  We honor the rich tradition of Black barbering while pushing the boundaries of modern styling.
                </p>
              </CardContent>
            </Card>

            <Card className="group bg-white border-0 shadow-lg hover:shadow-xl transition-all duration-500 hover:scale-105 hover:-translate-y-2">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-sage/10 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:bg-sage group-hover:scale-110 transition-all duration-300">
                  <Gem className="h-8 w-8 text-sage group-hover:text-white transition-colors duration-300" />
                </div>
                <h3 className="text-xl font-montserrat font-bold text-obsidian mb-4 group-hover:text-sage transition-colors duration-300">
                  Community
                </h3>
                <p className="text-gray-600 font-montserrat leading-relaxed">
                  We create a welcoming space where style, culture, and community come together in harmony.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-montserrat font-bold text-obsidian mb-6">
              Meet the <span className="font-playfair italic text-sage">Artists</span>
            </h2>
            <p className="text-xl text-gray-600 font-montserrat max-w-2xl mx-auto">
              Our master barbers bring decades of combined experience and unmatched skill to every service
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {team.map((member, index) => <Card key={member.name} className="group bg-white border-0 shadow-lg hover:shadow-xl transition-all duration-500 hover:scale-105 hover:-translate-y-2">
                <CardContent className="p-8">
                  <div className="relative mb-6">
                    <div className="absolute inset-0 bg-gradient-to-br from-sage/20 to-bronze/20 rounded-xl transform rotate-2 group-hover:rotate-0 transition-transform duration-300"></div>
                    <img src={member.image} alt={member.name} className="relative w-full h-64 object-cover rounded-xl group-hover:scale-105 transition-transform duration-500" />
                  </div>
                  <h3 className="text-2xl font-montserrat font-bold text-obsidian mb-2 group-hover:text-sage transition-colors duration-300">
                    {member.name}
                  </h3>
                  <p className="text-bronze font-montserrat font-semibold mb-4">
                    {member.role}
                  </p>
                  <div className="space-y-2 text-gray-600 font-montserrat">
                    <p><span className="text-sage font-semibold">Experience:</span> {member.experience}</p>
                    <p><span className="text-sage font-semibold">Specialty:</span> {member.specialty}</p>
                  </div>
                </CardContent>
              </Card>)}
          </div>
        </div>
      </section>

      <Footer />
    </div>;
};
export default About;