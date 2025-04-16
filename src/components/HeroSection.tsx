
import { Github, Linkedin, Mail, Phone } from "lucide-react";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";

const HeroSection = () => {
  return (
    <section className="min-h-screen flex flex-col justify-center px-4 sm:px-6 lg:px-8 animate-fade-in bg-background">
      <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center gap-8">
        <Avatar className="w-48 h-48 border-4 border-primary/50 shadow-lg">
          <AvatarImage 
            src="/lovable-uploads/8835af1e-bf42-432e-b170-1f702b9c5567.png" 
            alt="Pratham Shrestha" 
            className="object-cover"
          />
          <AvatarFallback>PS</AvatarFallback>
        </Avatar>
        
        <div>
          <h1 className="text-4xl sm:text-6xl font-bold font-space-grotesk text-foreground mb-4">
            Pratham Shrestha
          </h1>
          <h2 className="text-xl sm:text-2xl text-accent mb-8">
            Software Engineer & Backend Developer
          </h2>
          
          <div className="flex gap-4 flex-wrap">
            {[
              { 
                href: "https://github.com/prathamshrestha", 
                icon: Github, 
                text: "GitHub",
                color: "text-[#333]"
              },
              { 
                href: "https://linkedin.com/in/prathamshrestha", 
                icon: Linkedin, 
                text: "LinkedIn",
                color: "text-[#0A66C2]"
              },
              { 
                href: "mailto:prathamshrestha358@gmail.com", 
                icon: Mail, 
                text: "Email",
                color: "text-[#EA4335]"
              },
              { 
                href: "tel:+1(416)8358923", 
                icon: Phone, 
                text: "Phone",
                color: "text-[#34A853]"
              }
            ].map(({ href, icon: Icon, text, color }) => (
              <a 
                key={text}
                href={href} 
                className={`flex items-center gap-2 ${color} hover:opacity-80 transition-opacity`}
                target="_blank" 
                rel="noopener noreferrer"
              >
                <Icon className="h-5 w-5" />
                <span>{text}</span>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;

