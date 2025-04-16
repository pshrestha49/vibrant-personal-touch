
const SkillsSection = () => {
  const skills = {
    languages: ["Python", "JavaScript"],
    tools: ["Pandas", "NumPy", "Selenium", "Git", "GitHub", "Docker", "Postgres", "Linux", "SQLite", "RestAPI", "Nmap"],
    frameworks: ["Django", "Robot Framework", "FASTAPI", "Scrapy", "Crawlee", "NodeJS"],
    cloud: ["AWS", "SQLite", "PostgreSQL"],
    softSkills: ["Adaptability", "Time management", "Communication", "Problem Solving", "Team Work", "Attention to Detail"]
  };

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8" id="skills">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl font-bold mb-12 text-center">Skills & Technologies</h2>
        
        {Object.entries(skills).map(([category, items], idx) => (
          <div key={category} className="mb-12 animate-fade-in" style={{ animationDelay: `${idx * 0.2}s` }}>
            <h3 className="text-xl font-semibold mb-4 capitalize text-accent">
              {category.replace(/([A-Z])/g, ' $1').trim()}
            </h3>
            <div className="flex flex-wrap gap-3">
              {items.map((skill) => (
                <span
                  key={skill}
                  className="px-4 py-2 rounded-full bg-card text-foreground/80 hover:text-accent 
                           hover:scale-105 transition-all duration-300 animate-float"
                  style={{ animationDelay: `${Math.random() * 2}s` }}
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default SkillsSection;
