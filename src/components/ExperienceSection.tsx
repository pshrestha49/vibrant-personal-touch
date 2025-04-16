
interface Experience {
  company: string;
  role: string;
  period: string;
  location: string;
  responsibilities: string[];
}

const experiences: Experience[] = [
  {
    company: "Parsedom",
    role: "Intermediate Backend Developer",
    period: "October 2023 - Present",
    location: "Canada",
    responsibilities: [
      "Scraped, transformed and stored data in a database for several projects and websites reducing data redundancy and maintaining data consistency",
      "Created a dockerized system for in house package built on top of scrapy framework."
    ]
  },
  {
    company: "QuickFox Consulting",
    role: "Software Engineer",
    period: "February 2023 - September 2023",
    location: "New Baneshwor",
    responsibilities: [
      "Scraped, transformed and stored data in a database for WHO and sent a report with data with the given format",
      "Extracted data using desktop automation for BIR hospital while transforming and sending the data to email on timely schedule which helped to generate reports",
      "Designed and implemented Abstract Factory Method for news aggregator application which scrapes news from nearly 35 portals",
      "Developed scripts to perform data transformations as part of the ETL process",
      "Improved code structure while monitoring interns to follow the best code practices for writing efficient codes",
      "Researched OCR models to use for desktop automation to increase the accuracy for text extraction",
      "Made multiple APIs for the mobile App QuickSamachar in FASTAPI",
      "Researched ffmpeg for video streaming to integrate into the QuickRPA platform",
      "Reviewed and maintained code structures following standard practices such as PEP8"
    ]
  },
  {
    company: "QuickFox Consulting",
    role: "Software Engineer Intern",
    period: "November, 2022 - February, 2023",
    location: "New Baneshwor",
    responsibilities: [
      "Researched and presented a session for version control such as GIT and coding principles",
      "Studied, developed and deployed software bots using Robot Framework for various projects, automation repetitive tasks"
    ]
  }
];

const ExperienceSection = () => {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-card" id="experience">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl font-bold mb-12 text-center">Experience</h2>
        
        <div className="space-y-12">
          {experiences.map((exp, idx) => (
            <div 
              key={`${exp.company}-${exp.period}`}
              className="relative pl-8 animate-fade-in"
              style={{ animationDelay: `${idx * 0.3}s` }}
            >
              <div className="absolute left-0 top-0 w-px h-full bg-primary/30" />
              <div className="absolute left-0 top-0 w-2 h-2 rounded-full bg-primary -translate-x-[3px]" />
              
              <div className="mb-4">
                <h3 className="text-xl font-semibold text-accent">{exp.company}</h3>
                <p className="text-lg font-medium">{exp.role}</p>
                <p className="text-sm text-foreground/60">
                  {exp.period} | {exp.location}
                </p>
              </div>
              
              <ul className="list-disc list-inside space-y-2 text-foreground/80">
                {exp.responsibilities.map((resp, i) => (
                  <li key={i}>{resp}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
