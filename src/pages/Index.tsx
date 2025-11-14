import { useState } from "react";
import { ChevronDown, Palette, Clock, Flower2, Waves, Sparkles, Frame, Camera, Store, Phone, Mail, Facebook, Instagram, Youtube } from "lucide-react";
import { Button } from "@/components/ui/button";
import Navigation from "@/components/Navigation";
import GalleryLightbox from "@/components/GalleryLightbox";
import logoImg from "@/assets/logo.jpg";
import profileImg from "@/assets/profile.jpg";
import gallery1 from "@/assets/gallery-1.jpg";
import gallery2 from "@/assets/gallery-2.jpg";
import gallery4 from "@/assets/gallery-4.png";
import gallery5 from "@/assets/gallery-5.png";
import gallery6 from "@/assets/gallery-6.jpg";
import gallery7 from "@/assets/gallery-7.jpg";
import gallery9 from "@/assets/gallery-9.jpg";

const Index = () => {
  const [selectedImage, setSelectedImage] = useState<{ src: string; alt: string } | null>(null);
  const skills = [{
    icon: Palette,
    label: "Resin Casting & Molding"
  }, {
    icon: Clock,
    label: "Resin Home Décor (Clock, Tray, Coasters, Table, Name Plate)"
  }, {
    icon: Flower2,
    label: "Flower Preservation & Dry Flower Art"
  }, {
    icon: Waves,
    label: "Geode & Ocean Theme Resin Art"
  }, {
    icon: Sparkles,
    label: "Candle & Texture Art"
  }, {
    icon: Frame,
    label: "Gypsum Art"
  }, {
    icon: Store,
    label: "Workshop Planning & Student Training"
  }, {
    icon: Camera,
    label: "Product Photography & Online Marketing"
  }];
  const galleryImages = [{
    src: gallery1,
    alt: "Ocean Resin Clock",
    category: "Ocean Series"
  }, {
    src: gallery2,
    alt: "Floral Preservation Frame",
    category: "Floral Series"
  }, {
    src: gallery4,
    alt: "Geode Art Tray",
    category: "Geode Collection"
  }, {
    src: gallery5,
    alt: "Marble Coaster Set",
    category: "Home Décor"
  }, {
    src: gallery6,
    alt: "Custom Name Plate",
    category: "Personalized"
  }, {
    src: gallery7,
    alt: "Resin Table Design",
    category: "Furniture"
  }, {
    src: gallery9,
    alt: "Texture Art Piece",
    category: "Texture Collection"
  }];
  const recognitions = ["Featured on Epoxy Resin Supplier Bangladesh", "Trained 100+ students nationwide", "Founder of Tasu's Art & Crafts Academy"];
  
  const scrollToArtworks = () => {
    const element = document.querySelector("#artworks");
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return <div className="min-h-screen bg-background relative">
      {/* Global dot-grid pattern overlay */}
      <div
        className="fixed inset-0 pointer-events-none z-0 opacity-30"
        style={{
          backgroundImage: 'radial-gradient(circle, hsl(var(--gold) / 0.25) 1.5px, transparent 1.5px)',
          backgroundSize: '20px 20px',
          backgroundPosition: '0 0'
        }}
      />
      
      <Navigation />
      
      {/* Hero Section */}
      <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
        {/* Pastel gradient background with texture */}
        <div className="absolute inset-0" style={{
          background: 'linear-gradient(135deg, hsl(333 72% 89%) 0%, hsl(270 40% 87%) 100%)'
        }} />
        <div className="absolute inset-0 resin-texture" />
        
        {/* Subtle dot-grid pattern overlay (visible but soft) */}
        <div
          className="absolute inset-0 pointer-events-none opacity-40"
          style={{
            backgroundImage: 'radial-gradient(circle, hsl(var(--gold) / 0.35) 2px, transparent 2px)',
            backgroundSize: '22px 22px',
            backgroundPosition: '0 0'
          }}
        />
        
        {/* Flowing abstract wavy lines */}
        <svg className="absolute inset-0 w-full h-full opacity-20" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <linearGradient id="waveGradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" style={{ stopColor: 'hsl(43 74% 53%)', stopOpacity: 0 }} />
              <stop offset="50%" style={{ stopColor: 'hsl(43 74% 53%)', stopOpacity: 0.6 }} />
              <stop offset="100%" style={{ stopColor: 'hsl(43 74% 53%)', stopOpacity: 0 }} />
            </linearGradient>
          </defs>
          <path d="M0,200 Q250,150 500,200 T1000,200" stroke="url(#waveGradient)" strokeWidth="3" fill="none" className="animate-pulse" />
          <path d="M0,400 Q300,350 600,400 T1200,400" stroke="rgba(255,255,255,0.4)" strokeWidth="2" fill="none" className="animate-pulse" style={{ animationDelay: '1s' }} />
          <path d="M0,600 Q200,550 400,600 T800,600" stroke="url(#waveGradient)" strokeWidth="2" fill="none" className="animate-pulse" style={{ animationDelay: '2s' }} />
        </svg>
        
        {/* Resin droplet accents */}
        <div className="resin-droplet" style={{ top: '15%', left: '10%', animationDelay: '0s' }} />
        <div className="resin-droplet" style={{ top: '70%', right: '15%', animationDelay: '1.5s', width: '30px', height: '30px' }} />
        <div className="resin-droplet" style={{ bottom: '20%', left: '20%', animationDelay: '3s', width: '35px', height: '35px' }} />
        
        <div className="relative z-10 text-center px-4 animate-fade-in">
          <div className="mb-8 inline-block">
            <div className="relative w-64 h-64 md:w-80 md:h-80 mx-auto">
              {/* Enhanced outer glow with soft shadow */}
              <div className="absolute inset-0 rounded-full bg-gradient-to-br from-gold/50 via-primary/40 to-secondary/50 blur-3xl animate-pulse profile-glow" />
              
              {/* Glass resin ring with glossy gradient */}
              <div className="absolute inset-0 rounded-full resin-ring" />
              
              {/* Inner golden border with enhanced glow */}
              <div className="absolute inset-0 rounded-full border-4 border-gold shadow-gold profile-glow" />
              
              {/* Profile image with glossy overlay */}
              <div className="relative w-full h-full rounded-full overflow-hidden p-2">
                <img
                  src={profileImg}
                  alt="Waliza Mostafa"
                  className=" object-cover object-center rounded-full"
                  style={{ objectPosition: '50% 58%' }}
                />
                {/* Resin glossy reflection */}
                <div className="absolute inset-0 rounded-full bg-gradient-to-br from-white/40 via-transparent to-transparent opacity-60 resin-reflection" />
              </div>
            </div>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold text-foreground mb-4">
            Waliza Mostafa
          </h1>
          
          {/* Wavy line separator under name */}
          <div className="flex justify-center mb-6">
            <div className="wavy-line"></div>
          </div>
          
          <p className="text-2xl md:text-3xl text-muted-foreground mb-3">
            Resin Artist & Trainer
          </p>
          
          <p className="text-lg md:text-xl gradient-text mb-8 italic font-semibold">
            "Creating art that flows beyond the frame"
          </p>
          
          <Button 
            onClick={scrollToArtworks}
            size="lg"
            className="bg-gold text-white hover:bg-gold/90 shadow-gold font-medium px-8 py-6 text-lg"
          >
            Explore My Artworks
          </Button>
          
          <div className="mt-12 animate-bounce">
            <ChevronDown className="w-8 h-8 mx-auto text-gold" />
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-4 md:px-8 bg-background">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in">
              <div className="relative inline-block mx-auto">
                {/* Transparent decorative frame */}
                <div className="absolute -inset-4 border-2 border-gold/40 rounded-3xl pointer-events-none" />
                <div className="absolute -inset-6 border border-gold/20 rounded-[2rem] pointer-events-none" />
                
                <img 
                  src={profileImg} 
                  alt="Waliza Mostafa" 
                  className="rounded-2xl shadow-soft w-full max-w-md mx-auto relative z-10" 
                />
              </div>
            </div>
            
            <div className="animate-fade-in">
              <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
                About Me
              </h2>
              
              <div className="space-y-4 text-muted-foreground text-lg leading-relaxed">
                <p>
                  I am a professional resin artist and founder of Tasu's Art & Crafts Academy, 
                  specializing in resin décor and handicraft training. Since February 27, 2022, 
                  I have conducted over 100 online and offline resin workshops across Bangladesh, 
                  teaching techniques such as resin clocks, flower preservation, geode art,
                  nameplate making, and so on...
                </p>
                
                <p>
                  My goal is to promote resin craftsmanship as a sustainable vocational skill that 
                  empowers women and youth to build creative careers.
                </p>
              </div>
              
              <div className="mt-8 h-1 w-32 bg-gradient-to-r from-gold to-transparent rounded-full" />
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section id="artworks" className="py-20 px-4 md:px-8 bg-background">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center text-foreground mb-16 animate-fade-in">
            My Artworks
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {galleryImages.map((image, index) => (
              <div 
                key={index} 
                className="group relative overflow-hidden rounded-2xl shadow-soft hover:shadow-gold transition-all duration-300 cursor-pointer animate-fade-in" 
                style={{ animationDelay: `${index * 0.1}s` }}
                onClick={() => setSelectedImage(image)}
              >
                <div className="aspect-square overflow-hidden">
                  <img 
                    src={image.src} 
                    alt={image.alt} 
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" 
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                  <p className="text-white font-semibold text-lg mb-1">{image.alt}</p>
                  <p className="text-gold text-sm">{image.category}</p>
                </div>
              </div>
            ))}
          </div>
          
          <div className="mt-16 text-center">
            <div className="h-1 w-32 bg-gradient-to-r from-transparent via-gold to-transparent rounded-full mx-auto mb-6" />
            <p className="text-xl md:text-2xl font-script text-accent italic">
              "Each piece tells a story — handcrafted with resin and passion."
            </p>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 px-4 md:px-8 relative overflow-hidden">
        <div className="absolute inset-0 opacity-30" style={{
        background: 'linear-gradient(180deg, hsl(333 72% 94%), hsl(270 40% 90%))'
      }} />
        <div className="absolute inset-0 resin-texture" />
        
        <div className="max-w-7xl mx-auto relative z-10">
          <h2 className="text-4xl md:text-5xl font-bold text-center text-foreground mb-16 animate-fade-in">
            Skills & Expertise
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {skills.map((skill, index) => <div key={index} className="glass-effect rounded-2xl p-6 gold-shimmer hover:shadow-gold transition-all duration-300 hover:scale-105 animate-fade-in" style={{
            animationDelay: `${index * 0.1}s`
          }}>
                <skill.icon className="w-12 h-12 text-gold mb-4" />
                <p className="text-foreground font-medium text-lg">
                  {skill.label}
                </p>
              </div>)}
          </div>
        </div>
      </section>


      {/* Recognition Section */}
      <section className="py-20 px-4 md:px-8 relative overflow-hidden">
        <div className="absolute inset-0 opacity-20" style={{
        background: 'hsl(270 40% 90%)'
      }} />
        
        <div className="max-w-7xl mx-auto relative z-10">
          <h2 className="text-4xl md:text-5xl font-bold text-center text-foreground mb-16 animate-fade-in">
            Recognitions & Achievements
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            {recognitions.map((recognition, index) => <div key={index} className="glass-effect rounded-2xl p-8 text-center gold-shimmer hover:shadow-gold transition-all duration-300 hover:scale-105 animate-fade-in" style={{
            animationDelay: `${index * 0.1}s`
          }}>
                <p className="text-foreground text-lg font-medium">
                  {recognition}
                </p>
              </div>)}
          </div>
        </div>
      </section>

      {/* Vision Section */}
      <section className="py-20 px-4 md:px-8 bg-background">
        <div className="max-w-4xl mx-auto text-center">
          <div className="h-1 w-32 bg-gradient-to-r from-transparent via-gold to-transparent rounded-full mx-auto mb-8" />
          
          <blockquote className="text-2xl md:text-3xl text-foreground leading-relaxed mb-6 animate-fade-in">
            "My mission is to expand resin art education across Bangladesh and beyond — 
            empowering youth and women to create sustainable careers through creativity."
          </blockquote>
          
          <p className="text-xl font-script text-accent">
            – Waliza Mostafa
          </p>
          
          <div className="h-1 w-32 bg-gradient-to-r from-transparent via-gold to-transparent rounded-full mx-auto mt-8" />
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4 md:px-8 relative overflow-hidden">
        {/* Resin wave divider */}
        <div className="absolute top-0 left-0 right-0 h-16 overflow-hidden">
          <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="w-full h-full">
            <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" fill="hsl(var(--primary-pink))"></path>
          </svg>
        </div>
        <div className="absolute inset-0 opacity-20" style={{
        background: 'hsl(333 72% 94%)'
      }} />
        <div className="absolute inset-0 resin-texture" />
        
        {/* Watermark Logo */}
        <div className="absolute inset-0 flex items-center justify-center opacity-5">
          <img src={logoImg} alt="" className="w-96 h-96 object-contain" />
        </div>
        
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-12 animate-fade-in">
            Contact Me
          </h2>
          
          <div className="space-y-6 mb-12">
            <a href="tel:01788505005" className="flex items-center justify-center gap-3 text-xl text-foreground hover:text-gold transition-colors">
              <Phone className="w-6 h-6" />
              <span>01788505005</span>
            </a>
            
            <a href="mailto:tasus.creations@gmail.com" className="flex items-center justify-center gap-3 text-xl text-foreground hover:text-gold transition-colors">
              <Mail className="w-6 h-6" />
              <span>tasus.creations@gmail.com</span>
            </a>
          </div>
          
          <div className="flex items-center justify-center gap-6 mb-8">
            <a href="https://www.facebook.com/tasusCreationss/" target="_blank" rel="noopener noreferrer" className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center hover:bg-gold hover:scale-110 transition-all duration-300" aria-label="Facebook">
              <Facebook className="w-6 h-6 text-foreground" />
            </a>
            <a href="https://www.instagram.com/tasus_creations/" target="_blank" rel="noopener noreferrer" className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center hover:bg-gold hover:scale-110 transition-all duration-300" aria-label="Instagram">
              <Instagram className="w-6 h-6 text-foreground" />
            </a>
            <a href="http://www.youtube.com/@Tasuscreations" target="_blank" rel="noopener noreferrer" className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center hover:bg-gold hover:scale-110 transition-all duration-300" aria-label="YouTube">
              <Youtube className="w-6 h-6 text-foreground" />
            </a>
          </div>
          
          <p className="text-muted-foreground text-lg">
            For collaborations or custom resin artworks.
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative py-12 px-4 overflow-hidden">
        <div className="absolute inset-0" style={{
        background: 'linear-gradient(135deg, hsl(333 72% 84%), hsl(270 40% 77%), hsl(270 50% 60%))'
      }} />
        
        {/* Watermark Logo */}
        <div className="absolute inset-0 flex items-center justify-center opacity-10">
          <img src={logoImg} alt="" className="w-48 h-48 object-contain" />
        </div>
        
        <div className="relative z-10 text-center">
          <p className="text-white text-lg mb-2">
            © 2025 Waliza Mostafa | Tasu's Creations
          </p>
          <p className="text-gold font-script text-xl font-semibold">
            Think Different. Think Resin.
          </p>
        </div>
      </footer>

      {/* Lightbox */}
      {selectedImage && (
        <GalleryLightbox
          isOpen={!!selectedImage}
          onClose={() => setSelectedImage(null)}
          imageSrc={selectedImage.src}
          imageAlt={selectedImage.alt}
        />
      )}
    </div>;
};
export default Index;
