
import React from 'react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Card, CardContent } from '@/components/ui/card';

const About = () => {
  const team = [
    {
      name: "Marcus 'The Artist' Johnson",
      role: "Master Barber & Founder",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      experience: "15+ years",
      specialty: "Precision Fades & Hair Art"
    },
    {
      name: "Kevin 'Smooth' Williams",
      role: "Senior Barber",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      experience: "10+ years",
      specialty: "Beard Sculpting & Classic Cuts"
    },
    {
      name: "Andre 'The Craftsman' Davis",
      role: "Creative Barber",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      experience: "8+ years",
      specialty: "Modern Styles & Line-ups"
    }
  ];

  return (
    <div className="min-h-screen bg-obsidian">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-forest via-forest/70 to-transparent z-10"></div>
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1622286346003-c4b4f5d3b7bc?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80')] bg-cover bg-center"></div>
        
        <div className="relative z-20 container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-7xl font-montserrat font-black text-gold mb-6 animate-fade-in">
              Our <span className="font-playfair italic">Story</span>
            </h1>
            <p className="text-xl md:text-2xl text-white font-montserrat font-light animate-fade-in">
              Crafting Excellence Since 2010
            </p>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20 bg-forest">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="animate-slide-in-left">
              <h2 className="text-4xl font-montserrat font-bold text-gold mb-8">
                Where Tradition Meets Innovation
              </h2>
              <div className="space-y-6 text-gray-300 font-montserrat text-lg leading-relaxed">
                <p>
                  Founded in 2010 by Marcus Johnson, The Art began as a vision to create more than just a barbershop—
                  it was to be a sanctuary where Afro-centric style could be celebrated and elevated to an art form.
                </p>
                <p>
                  Our journey started in a small storefront with just one chair and a dream. Marcus, having honed his 
                  craft in some of the most prestigious barbershops across the country, wanted to create a space that 
                  honored the rich tradition of Black barbering while embracing modern techniques and styles.
                </p>
                <p>
                  Today, The Art stands as a premier destination for discerning clients who appreciate the perfect 
                  blend of craftsmanship, creativity, and cultural pride. Every cut tells a story, every style 
                  celebrates individuality, and every visit is an experience in excellence.
                </p>
              </div>
            </div>
            <div className="animate-slide-in-right">
              <div className="relative">
                <img 
                  src="https://images.unsplash.com/photo-1521587760476-6c12a4b040da?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                  alt="The Art Barbershop Interior" 
                  className="rounded-2xl shadow-2xl"
                />
                <div className="absolute -top-6 -left-6 w-32 h-32 bg-gold/20 rounded-full blur-xl"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Values */}
      <section className="py-20 bg-gradient-to-r from-sage to-pine">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-montserrat font-bold text-gold mb-6 animate-fade-in">
              Our Mission & Values
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="bg-obsidian border-bronze hover:border-gold transition-all duration-500 hover:scale-105 animate-scale-in">
              <CardContent className="p-8 text-center">
                <div className="text-6xl mb-6">🎯</div>
                <h3 className="text-2xl font-montserrat font-bold text-gold mb-4">
                  Excellence
                </h3>
                <p className="text-gray-300 font-montserrat">
                  We strive for perfection in every cut, ensuring each client leaves feeling confident and styled to perfection.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-obsidian border-bronze hover:border-gold transition-all duration-500 hover:scale-105 animate-scale-in" style={{animationDelay: '200ms'}}>
              <CardContent className="p-8 text-center">
                <div className="text-6xl mb-6">🏆</div>
                <h3 className="text-2xl font-montserrat font-bold text-gold mb-4">
                  Heritage
                </h3>
                <p className="text-gray-300 font-montserrat">
                  We honor the rich tradition of Black barbering while pushing the boundaries of modern styling.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-obsidian border-bronze hover:border-gold transition-all duration-500 hover:scale-105 animate-scale-in" style={{animationDelay: '400ms'}}>
              <CardContent className="p-8 text-center">
                <div className="text-6xl mb-6">💎</div>
                <h3 className="text-2xl font-montserrat font-bold text-gold mb-4">
                  Community
                </h3>
                <p className="text-gray-300 font-montserrat">
                  We create a welcoming space where style, culture, and community come together in harmony.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-obsidian">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-montserrat font-bold text-gold mb-6 animate-fade-in">
              Meet the <span className="font-playfair italic">Artists</span>
            </h2>
            <p className="text-xl text-gray-300 font-montserrat max-w-2xl mx-auto animate-fade-in">
              Our master barbers bring decades of combined experience and unmatched skill to every service
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <Card key={member.name} className={`bg-forest border-bronze hover:border-gold transition-all duration-500 hover:scale-105 group animate-fade-in`} style={{animationDelay: `${index * 200}ms`}}>
                <CardContent className="p-8">
                  <div className="relative mb-6">
                    <img 
                      src={member.image} 
                      alt={member.name} 
                      className="w-full h-64 object-cover rounded-xl group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-forest/80 to-transparent rounded-xl"></div>
                  </div>
                  <h3 className="text-2xl font-montserrat font-bold text-gold mb-2">
                    {member.name}
                  </h3>
                  <p className="text-bronze font-montserrat font-semibold mb-4">
                    {member.role}
                  </p>
                  <div className="space-y-2 text-gray-300 font-montserrat">
                    <p><span className="text-gold">Experience:</span> {member.experience}</p>
                    <p><span className="text-gold">Specialty:</span> {member.specialty}</p>
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
