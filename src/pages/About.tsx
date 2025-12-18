import { Target, Award, BookOpen, TrendingUp } from "lucide-react";
import Layout from "@/components/Layout";

const About = () => {
  return (
    <Layout>
      {/* Hero */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="max-w-4xl">
            <p className="text-primary font-medium text-sm tracking-wide uppercase mb-4 animate-fade-up">
              About Me
            </p>
            <h1 className="font-serif text-4xl md:text-6xl font-bold mb-6 animate-fade-up delay-100">
              Driven by Numbers,{" "}
              <span className="text-gradient">Fueled by Excellence</span>
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed animate-fade-up delay-200">
              I am a focused Accountant with 4+ years of diverse experience in bookkeeping 
              and financial operations. As a CPA finalist, I am skilled in accounting software 
              and MS Office. Detail-oriented with extensive knowledge of cash and record 
              maintenance, comprehensive accounts payables, receivables, tax returns and 
              bank reconciliation.
            </p>
          </div>
        </div>
      </section>

      {/* Education */}
      <section className="section-padding bg-card/30">
        <div className="container-custom">
          <div className="flex items-center gap-3 mb-8">
            <BookOpen className="h-6 w-6 text-primary" />
            <h2 className="font-serif text-3xl font-bold">Education</h2>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {[
              {
                degree: "MBA in Finance",
                institution: "University",
                description: "Advanced studies in financial management, corporate finance, and strategic planning.",
              },
              {
                degree: "CPA Finalist",
                institution: "Kenya",
                description: "Comprehensive professional accounting certification covering taxation, auditing, and financial reporting.",
              },
              {
                degree: "Bachelor's Degree",
                institution: "Accounting & Business Administration",
                description: "Solid foundation in accounting principles, business law, and financial analysis.",
              },
            ].map((edu, index) => (
              <div
                key={edu.degree}
                className={`card-glass rounded-xl p-8 hover-lift animate-fade-up delay-${index * 100}`}
              >
                <h3 className="font-serif text-xl font-semibold text-foreground mb-2">
                  {edu.degree}
                </h3>
                <p className="text-primary font-medium mb-3">{edu.institution}</p>
                <p className="text-muted-foreground">{edu.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Career Goals */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="flex items-center gap-3 mb-8">
            <Target className="h-6 w-6 text-primary" />
            <h2 className="font-serif text-3xl font-bold">Career Goals</h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                icon: Award,
                title: "CPA License",
                description: "Complete my CPA certification to enhance professional credibility and expertise.",
              },
              {
                icon: TrendingUp,
                title: "Senior Role",
                description: "Advance to a senior accounting or finance management position.",
              },
              {
                icon: BookOpen,
                title: "Broaden Experience",
                description: "Expand knowledge across diverse areas of accounting and finance.",
              },
            ].map((goal, index) => (
              <div
                key={goal.title}
                className={`group relative animate-fade-up delay-${index * 100}`}
              >
                <div className="card-glass rounded-xl p-8 hover-lift h-full">
                  <goal.icon className="h-10 w-10 text-primary mb-6" />
                  <h3 className="font-serif text-xl font-semibold mb-3">{goal.title}</h3>
                  <p className="text-muted-foreground">{goal.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Strengths */}
      <section className="section-padding bg-card/30">
        <div className="container-custom">
          <h2 className="font-serif text-3xl font-bold mb-8">Core Strengths</h2>

          <div className="grid md:grid-cols-2 gap-4">
            {[
              {
                title: "Strong Accounting Foundation",
                description: "Over 4 years of practical experience in bookkeeping and financial operations.",
              },
              {
                title: "Advanced Education",
                description: "MBA in Finance, CPA finalist with solid academic background.",
              },
              {
                title: "Technical Proficiency",
                description: "Experienced in QuickBooks, SAP, and Tally accounting systems.",
              },
              {
                title: "Accuracy & Attention to Detail",
                description: "Proven track record in handling cash, reconciliations, and error resolution.",
              },
              {
                title: "Adaptability",
                description: "Worked across manufacturing, healthcare, banking, and corporate services.",
              },
            ].map((strength, index) => (
              <div
                key={strength.title}
                className={`flex gap-4 p-6 rounded-xl border border-border/50 hover:border-primary/50 transition-colors animate-fade-up delay-${index * 100}`}
              >
                <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold text-foreground mb-1">{strength.title}</h3>
                  <p className="text-muted-foreground text-sm">{strength.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default About;
