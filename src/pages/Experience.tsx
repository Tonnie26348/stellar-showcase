import { Briefcase, CheckCircle2 } from "lucide-react";
import Layout from "@/components/Layout";

const experiences = [
  {
    title: "Accounts Receivable Officer",
    company: "Current Company",
    period: "Present",
    achievements: [
      "Data cleansed customer accounts through regular bank and customer reconciliations",
      "Improved workflow efficiency by implementing interim bank reconciliation at 4pm to reduce backlog",
      "Evolved from doing bank reconciliations only to handling all incoming receipts within one year",
      "Effectively met 98% of deadlines set for daily, monthly and annual activities",
    ],
  },
  {
    title: "Accountant",
    company: "Previous Roles",
    period: "4+ Years Experience",
    achievements: [
      "Managed comprehensive accounts payables and receivables",
      "Prepared and filed tax returns with accuracy",
      "Conducted bank reconciliations and maintained financial records",
      "Handled cash management and maintained detailed records",
    ],
  },
];

const industries = [
  "Manufacturing",
  "Healthcare",
  "Banking",
  "Corporate Services",
];

const Experience = () => {
  return (
    <Layout>
      {/* Hero */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="max-w-4xl">
            <p className="text-primary font-medium text-sm tracking-wide uppercase mb-4 animate-fade-up">
              Professional Journey
            </p>
            <h1 className="font-serif text-4xl md:text-6xl font-bold mb-6 animate-fade-up delay-100">
              Building <span className="text-gradient">Excellence</span> Through Experience
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed animate-fade-up delay-200">
              Over 4 years of hands-on experience in financial operations across multiple industries, 
              consistently delivering results and driving efficiency improvements.
            </p>
          </div>
        </div>
      </section>

      {/* Industries */}
      <section className="section-padding pt-0">
        <div className="container-custom">
          <h2 className="font-serif text-2xl font-bold mb-6 animate-fade-up">Industries Worked In</h2>
          <div className="flex flex-wrap gap-3 animate-fade-up delay-100">
            {industries.map((industry) => (
              <span
                key={industry}
                className="px-6 py-3 rounded-full border border-primary/30 bg-primary/5 text-foreground font-medium"
              >
                {industry}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Experience Timeline */}
      <section className="section-padding bg-card/30">
        <div className="container-custom">
          <div className="flex items-center gap-3 mb-12">
            <Briefcase className="h-6 w-6 text-primary" />
            <h2 className="font-serif text-3xl font-bold">Work Experience</h2>
          </div>

          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <div
                key={exp.title}
                className={`relative animate-fade-up delay-${index * 100}`}
              >
                {/* Timeline line */}
                {index < experiences.length - 1 && (
                  <div className="absolute left-6 top-16 bottom-0 w-px bg-border/50 hidden md:block" />
                )}

                <div className="card-glass rounded-xl p-8 md:ml-16 relative">
                  {/* Timeline dot */}
                  <div className="hidden md:block absolute -left-[4.25rem] top-8 w-4 h-4 rounded-full bg-primary shadow-lg shadow-primary/30" />

                  <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6">
                    <div>
                      <h3 className="font-serif text-2xl font-bold text-foreground">
                        {exp.title}
                      </h3>
                      <p className="text-primary font-medium mt-1">{exp.company}</p>
                    </div>
                    <span className="text-muted-foreground mt-2 md:mt-0 text-sm bg-secondary px-4 py-2 rounded-full">
                      {exp.period}
                    </span>
                  </div>

                  <div className="space-y-3">
                    {exp.achievements.map((achievement, i) => (
                      <div key={i} className="flex gap-3">
                        <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                        <p className="text-muted-foreground">{achievement}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Key Achievement */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="card-glass rounded-2xl p-12 text-center max-w-3xl mx-auto animate-scale-in">
            <p className="text-primary font-medium uppercase tracking-wide mb-4">
              Key Achievement
            </p>
            <p className="font-serif text-4xl md:text-5xl font-bold text-gradient mb-4">
              98%
            </p>
            <p className="text-xl text-muted-foreground">
              Deadline adherence rate for daily, monthly, and annual activities
            </p>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Experience;
