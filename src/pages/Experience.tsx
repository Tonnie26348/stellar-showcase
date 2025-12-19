import { Briefcase, CheckCircle2 } from "lucide-react";
import Layout from "@/components/Layout";

const experiences = [
  {
    title: "Accountant",
    company: "Abyssinia Group of Industries",
    period: "August 2021 - Present",
    achievements: [
      "Bank reconciliations and customer account reconciliations",
      "Daily posting and allocation of collections into the accounting system & prepare bank deposits",
      "Generating monthly banking reports and preparing banks audit schedules",
      "Daily posting of interbank and intercompany transfers",
      "Investigate and resolve customer queries",
      "Posting and maintaining audit schedules",
    ],
  },
  {
    title: "Accounts Assistant",
    company: "East African Business Company Limited",
    period: "September 2020 - July 2021",
    achievements: [
      "Processing sales and purchases",
      "Stock reconciliation and M-Pesa/Bank reconciliation",
      "Compute taxes and prepare tax returns",
      "Local creditor's reconciliation",
      "Managing disbursements and reconciliations of petty cash",
    ],
  },
  {
    title: "Credit Control Intern",
    company: "The Aga Khan University Hospital",
    period: "November 2019 - February 2020",
    achievements: [
      "Managing the debts of creditors and processing incoming funds",
      "Resolving account queries and managing debt recovery",
      "Preparing statements, client reports and all relevant accounts information",
      "Checking and posting of receipts to accounting systems",
    ],
  },
  {
    title: "Accounts Clerk",
    company: "Vivid Gold",
    period: "February 2019 - May 2019",
    achievements: [
      "Prepare and submit customer receipts and invoices",
      "Prepare and coordinate bank activities",
      "Balance/reconcile cash deposits made to the bank",
      "Maintain orderly financial filing system and debt collection",
    ],
  },
  {
    title: "Human Resource Intern",
    company: "Commercial Bank of Africa",
    period: "January 2018 - September 2018",
    achievements: [
      "Productivity analysis for employees",
      "Medical reconciliation and communicating with employees",
      "Assist in payroll and on-boarding of new employees",
    ],
  },
  {
    title: "Finance Intern",
    company: "Gertrude Children's Hospital",
    period: "September 2017 - December 2017",
    achievements: [
      "Did reconciliation of creditors",
      "Prepare financial management reports based on accounting control procedures",
      "Assisted the main accountants at the branch level",
      "Cash management and participation in banking",
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
