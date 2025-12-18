import { Code, Users, Wrench } from "lucide-react";
import Layout from "@/components/Layout";

const hardSkills = [
  { name: "Intuit QuickBooks", level: 95 },
  { name: "SAP", level: 85 },
  { name: "Tally", level: 90 },
  { name: "Microsoft Excel", level: 95 },
  { name: "Data Analysis", level: 85 },
  { name: "Financial Reporting", level: 90 },
  { name: "Accounts Reconciliations", level: 95 },
  { name: "Tax Returns", level: 85 },
];

const softSkills = [
  "Effective Communication",
  "Team Work",
  "Time Management",
  "Problem-solving",
  "Flexibility",
  "Attention to Detail",
];

const certifications = [
  "CPA Finalist - Kenya",
  "MBA in Finance",
  "Bachelor's in Accounting & Business Administration",
];

const Skills = () => {
  return (
    <Layout>
      {/* Hero */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="max-w-4xl">
            <p className="text-primary font-medium text-sm tracking-wide uppercase mb-4 animate-fade-up">
              Expertise
            </p>
            <h1 className="font-serif text-4xl md:text-6xl font-bold mb-6 animate-fade-up delay-100">
              Skills & <span className="text-gradient">Competencies</span>
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed animate-fade-up delay-200">
              A comprehensive toolkit of technical abilities and professional skills 
              developed through years of hands-on experience and continuous learning.
            </p>
          </div>
        </div>
      </section>

      {/* Technical Skills */}
      <section className="section-padding pt-0">
        <div className="container-custom">
          <div className="flex items-center gap-3 mb-8">
            <Wrench className="h-6 w-6 text-primary" />
            <h2 className="font-serif text-3xl font-bold">Technical Skills</h2>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {hardSkills.map((skill, index) => (
              <div
                key={skill.name}
                className={`card-glass rounded-xl p-6 animate-fade-up delay-${Math.min(index * 50, 400)}`}
              >
                <div className="flex justify-between items-center mb-3">
                  <span className="font-medium text-foreground">{skill.name}</span>
                  <span className="text-primary font-semibold">{skill.level}%</span>
                </div>
                <div className="h-2 bg-secondary rounded-full overflow-hidden">
                  <div
                    className="h-full bg-gradient-to-r from-primary to-gold-light rounded-full transition-all duration-1000 ease-out"
                    style={{ width: `${skill.level}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Soft Skills */}
      <section className="section-padding bg-card/30">
        <div className="container-custom">
          <div className="flex items-center gap-3 mb-8">
            <Users className="h-6 w-6 text-primary" />
            <h2 className="font-serif text-3xl font-bold">Soft Skills</h2>
          </div>

          <div className="flex flex-wrap gap-4">
            {softSkills.map((skill, index) => (
              <div
                key={skill}
                className={`px-8 py-4 rounded-xl border border-border/50 bg-secondary/50 hover:border-primary/50 hover:bg-primary/5 transition-all duration-300 animate-fade-up delay-${index * 100}`}
              >
                <span className="font-medium text-foreground">{skill}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="flex items-center gap-3 mb-8">
            <Code className="h-6 w-6 text-primary" />
            <h2 className="font-serif text-3xl font-bold">Certifications & Education</h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {certifications.map((cert, index) => (
              <div
                key={cert}
                className={`card-glass rounded-xl p-8 text-center hover-lift animate-fade-up delay-${index * 100}`}
              >
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-6">
                  <div className="w-8 h-8 rounded-full bg-gradient-to-br from-primary to-gold-light" />
                </div>
                <h3 className="font-serif text-lg font-semibold text-foreground">
                  {cert}
                </h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Software Proficiency */}
      <section className="section-padding bg-card/30">
        <div className="container-custom">
          <h2 className="font-serif text-3xl font-bold mb-8 text-center">
            Software Proficiency
          </h2>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-3xl mx-auto">
            {["QuickBooks", "SAP", "Tally", "MS Excel"].map((software, index) => (
              <div
                key={software}
                className={`card-glass rounded-xl p-6 text-center hover-lift animate-scale-in delay-${index * 100}`}
              >
                <div className="text-3xl mb-3">💼</div>
                <p className="font-medium text-foreground">{software}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Skills;
