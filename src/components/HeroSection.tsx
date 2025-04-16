
import { Github, Linkedin, Mail, Phone } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="min-h-screen flex flex-col justify-center px-4 sm:px-6 lg:px-8 animate-fade-in">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-4xl sm:text-6xl font-bold font-space-grotesk bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary mb-4">
          Pratham Shrestha
        </h1>
        <h2 className="text-xl sm:text-2xl text-accent/80 mb-8">
          Software Engineer & Backend Developer
        </h2>
        
        <div className="flex gap-4 mb-12">
          <a href="https://github.com/prathamshrestha" 
             className="flex items-center gap-2 text-foreground/80 hover:text-accent transition-colors"
             target="_blank" rel="noopener noreferrer">
            <Github className="h-5 w-5" />
            <span>GitHub</span>
          </a>
          <a href="https://linkedin.com/in/prathamshrestha" 
             className="flex items-center gap-2 text-foreground/80 hover:text-accent transition-colors"
             target="_blank" rel="noopener noreferrer">
            <Linkedin className="h-5 w-5" />
            <span>LinkedIn</span>
          </a>
          <a href="mailto:prathamshrestha358@gmail.com" 
             className="flex items-center gap-2 text-foreground/80 hover:text-accent transition-colors">
            <Mail className="h-5 w-5" />
            <span>Email</span>
          </a>
          <a href="tel:+1(416)8358923" 
             className="flex items-center gap-2 text-foreground/80 hover:text-accent transition-colors">
            <Phone className="h-5 w-5" />
            <span>Phone</span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
