import { ChevronDown, Palette, Clock, Flower2, Waves, Sparkles, Frame, Camera, Store, Phone, Mail, Facebook, Instagram, Youtube } from "lucide-react";
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
    alt: "Resin Art 1"
  }, {
    src: gallery2,
    alt: "Resin Art 2"
  }, {
    src: gallery4,
    alt: "Resin Art 3"
  }, {
    src: gallery5,
    alt: "Resin Art 4"
  }, {
    src: gallery6,
    alt: "Resin Art 5"
  }, {
    src: gallery7,
    alt: "Resin Art 6"
  }, {
    src: gallery9,
    alt: "Resin Art 7"
  }];
  const recognitions = ["Featured on Epoxy Resin Supplier Bangladesh", "Trained 100+ students nationwide", "Founder of Tasu's Art & Crafts Academy"];
  return <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 opacity-90" style={{
        background: 'linear-gradient(135deg, hsl(333 72% 84%), hsl(270 40% 77%))'
      }} />
        <div className="absolute inset-0 resin-texture" />
        
        <div className="relative z-10 text-center px-4 animate-fade-in">
          <div className="mb-8 inline-block">
            <div className="w-48 h-48 md:w-64 md:h-64 rounded-full overflow-hidden border-4 border-gold shadow-gold mx-auto">
              <img src={profileImg} alt="Waliza Mostafa" className="w-full h-full object-cover" />
            </div>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold text-foreground mb-4">
            Waliza Mostafa
          </h1>
          
          <p className="text-2xl md:text-3xl text-muted-foreground mb-6">
            Resin Artist & Trainer
          </p>
          
          <p className="text-xl md:text-2xl font-script text-accent font-semibold">
            Think Different, Build Different.
          </p>
          
          <div className="mt-12 animate-bounce">
            <ChevronDown className="w-8 h-8 mx-auto text-gold" />
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 px-4 md:px-8 bg-background">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in">
              <img src={profileImg} alt="Waliza Mostafa" className="rounded-2xl shadow-soft w-full max-w-md mx-auto" />
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
                  teaching techniques such as resin clocks, flower preservation, geode art, and 
                  nameplate making.
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

      {/* Skills Section */}
      <section className="py-20 px-4 md:px-8 relative overflow-hidden">
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

      {/* Gallery Section */}
      <section className="py-20 px-4 md:px-8 bg-background">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center text-foreground mb-16 animate-fade-in">
            My Artworks
          </h2>
          
          <div className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">
            {galleryImages.map((image, index) => <div key={index} className="break-inside-avoid animate-fade-in" style={{
            animationDelay: `${index * 0.1}s`
          }}>
                <div className="relative overflow-hidden rounded-2xl shadow-soft hover:shadow-gold transition-all duration-300 hover:scale-105 group">
                  <img src={image.src} alt={image.alt} className="w-full h-auto object-cover" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                    <p className="text-white font-medium">{image.alt}</p>
                  </div>
                </div>
              </div>)}
          </div>
          
          <div className="mt-16 text-center">
            <div className="h-1 w-32 bg-gradient-to-r from-transparent via-gold to-transparent rounded-full mx-auto mb-6" />
            <p className="text-xl md:text-2xl font-script text-accent italic">
              "Each piece tells a story — handcrafted with resin and passion."
            </p>
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
      <section className="py-20 px-4 md:px-8 relative overflow-hidden">
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
            <a href="#" className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center hover:bg-gold hover:scale-110 transition-all duration-300" aria-label="Facebook">
              <Facebook className="w-6 h-6 text-foreground" />
            </a>
            <a href="#" className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center hover:bg-gold hover:scale-110 transition-all duration-300" aria-label="Instagram">
              <Instagram className="w-6 h-6 text-foreground" />
            </a>
            <a href="#" className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center hover:bg-gold hover:scale-110 transition-all duration-300" aria-label="YouTube">
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
    </div>;
};
export default Index;