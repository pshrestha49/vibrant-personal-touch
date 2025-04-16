
interface Education {
  school: string;
  degree: string;
  period: string;
  location?: string;
}

const education: Education[] = [
  {
    school: "Seneca College",
    degree: "Post Graduate in Artificial Intelligence",
    period: "Jan, 2025-Ongoing"
  },
  {
    school: "Sagarmatha Engineering, Lalitpur",
    degree: "Bachelor in Computer Engineering",
    period: "2017-2022"
  }
];

const EducationSection = () => {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8" id="education">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl font-bold mb-12 text-center">Education</h2>
        
        <div className="grid gap-8">
          {education.map((edu, idx) => (
            <div 
              key={edu.school}
              className="p-6 rounded-lg bg-card hover:bg-card/80 transition-colors
                         animate-fade-in"
              style={{ animationDelay: `${idx * 0.3}s` }}
            >
              <h3 className="text-xl font-semibold text-accent mb-2">{edu.school}</h3>
              <p className="text-lg mb-1">{edu.degree}</p>
              <p className="text-sm text-foreground/60">{edu.period}</p>
              {edu.location && <p className="text-sm text-foreground/60">{edu.location}</p>}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EducationSection;
