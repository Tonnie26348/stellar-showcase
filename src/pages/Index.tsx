import { Link } from "react-router-dom";
import { ArrowRight, Download, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import Layout from "@/components/Layout";

const Index = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="min-h-[90vh] flex items-center section-padding relative overflow-hidden">
        {/* Background decorative elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-20 right-10 w-72 h-72 bg-primary/5 rounded-full blur-3xl animate-float" />
          <div className="absolute bottom-20 left-10 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-float delay-300" />
        </div>

        <div className="container-custom relative z-10">
          <div className="max-w-4xl">
            <div className="flex items-center gap-2 mb-6 animate-fade-up">
              <Sparkles className="h-5 w-5 text-primary" />
              <span className="text-primary font-medium text-sm tracking-wide uppercase">
                Finance Professional
              </span>
            </div>

            <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl font-bold mb-6 animate-fade-up delay-100">
              <span className="text-foreground">Hello, I'm</span>
              <br />
              <span className="text-gradient">Mercy Mutea</span>
            </h1>

            <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-2xl leading-relaxed animate-fade-up delay-200">
              A focused <span className="text-foreground font-medium">Accountant</span> with 4+ years of diverse experience in bookkeeping and financial operations. MBA in Finance graduate and CPA finalist.
            </p>

            <div className="flex flex-wrap gap-4 animate-fade-up delay-300">
              <Button asChild size="lg" className="group">
                <Link to="/contact">
                  Get in Touch
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <a href="#" download>
                  <Download className="mr-2 h-4 w-4" />
                  Download CV
                </a>
              </Button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-8 mt-16 pt-16 border-t border-border/50 animate-fade-up delay-400">
              <div>
                <p className="font-serif text-4xl md:text-5xl font-bold text-gradient">4+</p>
                <p className="text-muted-foreground mt-2">Years Experience</p>
              </div>
              <div>
                <p className="font-serif text-4xl md:text-5xl font-bold text-gradient">98%</p>
                <p className="text-muted-foreground mt-2">Deadline Success</p>
              </div>
              <div>
                <p className="font-serif text-4xl md:text-5xl font-bold text-gradient">MBA</p>
                <p className="text-muted-foreground mt-2">In Finance</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Highlights Section */}
      <section className="section-padding bg-card/30">
        <div className="container-custom">
          <h2 className="font-serif text-3xl md:text-4xl font-bold mb-4 animate-fade-up">
            Why Work With Me
          </h2>
          <p className="text-muted-foreground mb-12 max-w-2xl animate-fade-up delay-100">
            Bringing precision, dedication, and extensive financial expertise to every role.
          </p>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                title: "Technical Expertise",
                description: "Proficient in QuickBooks, SAP, Tally, and advanced Excel for comprehensive financial management.",
              },
              {
                title: "Multi-Industry Experience",
                description: "Worked across manufacturing, healthcare, banking, and corporate services sectors.",
              },
              {
                title: "Detail-Oriented",
                description: "Proven track record in cash handling, account reconciliations, and error resolution.",
              },
            ].map((item, index) => (
              <div
                key={item.title}
                className={`card-glass rounded-xl p-8 hover-lift animate-fade-up delay-${(index + 2) * 100}`}
              >
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-6">
                  <div className="w-3 h-3 rounded-full bg-primary" />
                </div>
                <h3 className="font-serif text-xl font-semibold mb-3">{item.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>

          <div className="text-center mt-12 animate-fade-up">
            <Button asChild variant="outline" size="lg">
              <Link to="/about">
                Learn More About Me
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Index;
