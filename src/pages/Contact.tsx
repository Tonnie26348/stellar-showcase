import { useState } from "react";
import { Mail, Phone, MapPin, Linkedin, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import Layout from "@/components/Layout";

const Contact = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1000));
    
    toast({
      title: "Message Sent!",
      description: "Thank you for reaching out. I'll get back to you soon.",
    });
    
    setIsSubmitting(false);
    (e.target as HTMLFormElement).reset();
  };

  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "mercymutea@email.com",
      href: "mailto:mercymutea@email.com",
    },
    {
      icon: Phone,
      label: "Phone",
      value: "+254 700 000 000",
      href: "tel:+254700000000",
    },
    {
      icon: MapPin,
      label: "Location",
      value: "Nairobi, Kenya",
      href: null,
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      value: "Connect on LinkedIn",
      href: "https://linkedin.com",
    },
  ];

  return (
    <Layout>
      {/* Hero */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="max-w-4xl">
            <p className="text-primary font-medium text-sm tracking-wide uppercase mb-4 animate-fade-up">
              Get In Touch
            </p>
            <h1 className="font-serif text-4xl md:text-6xl font-bold mb-6 animate-fade-up delay-100">
              Let's <span className="text-gradient">Connect</span>
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed animate-fade-up delay-200">
              I'm always open to discussing new opportunities, collaborations, 
              or simply having a conversation about finance and accounting.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="section-padding pt-0">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className="animate-fade-up delay-200">
              <div className="card-glass rounded-2xl p-8 md:p-10">
                <h2 className="font-serif text-2xl font-bold mb-6">Send a Message</h2>
                
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">
                        Name
                      </label>
                      <Input
                        required
                        placeholder="Your name"
                        className="bg-secondary/50 border-border/50 focus:border-primary"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">
                        Email
                      </label>
                      <Input
                        required
                        type="email"
                        placeholder="your@email.com"
                        className="bg-secondary/50 border-border/50 focus:border-primary"
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Subject
                    </label>
                    <Input
                      required
                      placeholder="How can I help you?"
                      className="bg-secondary/50 border-border/50 focus:border-primary"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Message
                    </label>
                    <Textarea
                      required
                      rows={5}
                      placeholder="Your message..."
                      className="bg-secondary/50 border-border/50 focus:border-primary resize-none"
                    />
                  </div>
                  
                  <Button type="submit" size="lg" className="w-full" disabled={isSubmitting}>
                    {isSubmitting ? (
                      "Sending..."
                    ) : (
                      <>
                        Send Message
                        <Send className="ml-2 h-4 w-4" />
                      </>
                    )}
                  </Button>
                </form>
              </div>
            </div>

            {/* Contact Info */}
            <div className="animate-fade-up delay-300">
              <h2 className="font-serif text-2xl font-bold mb-6">Contact Information</h2>
              
              <div className="space-y-4 mb-12">
                {contactInfo.map((info) => (
                  <div key={info.label}>
                    {info.href ? (
                      <a
                        href={info.href}
                        target={info.href.startsWith("http") ? "_blank" : undefined}
                        rel={info.href.startsWith("http") ? "noopener noreferrer" : undefined}
                        className="flex items-center gap-4 p-4 rounded-xl border border-border/50 hover:border-primary/50 hover:bg-primary/5 transition-all group"
                      >
                        <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                          <info.icon className="h-5 w-5 text-primary" />
                        </div>
                        <div>
                          <p className="text-sm text-muted-foreground">{info.label}</p>
                          <p className="font-medium text-foreground">{info.value}</p>
                        </div>
                      </a>
                    ) : (
                      <div className="flex items-center gap-4 p-4 rounded-xl border border-border/50">
                        <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                          <info.icon className="h-5 w-5 text-primary" />
                        </div>
                        <div>
                          <p className="text-sm text-muted-foreground">{info.label}</p>
                          <p className="font-medium text-foreground">{info.value}</p>
                        </div>
                      </div>
                    )}
                  </div>
                ))}
              </div>

              {/* Referees */}
              <div className="card-glass rounded-2xl p-8">
                <h3 className="font-serif text-xl font-bold mb-6">Professional References</h3>
                <p className="text-muted-foreground text-sm mb-4">
                  Available upon request. I have worked with professionals from:
                </p>
                <ul className="space-y-2 text-muted-foreground">
                  <li>• Abyssinia Group of Industries</li>
                  <li>• Taxcom Limited</li>
                  <li>• And more...</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-card/30">
        <div className="container-custom text-center">
          <div className="max-w-2xl mx-auto animate-scale-in">
            <h2 className="font-serif text-3xl md:text-4xl font-bold mb-4">
              Ready to Work Together?
            </h2>
            <p className="text-muted-foreground mb-8">
              I'm actively seeking opportunities where I can contribute my financial expertise 
              and grow professionally.
            </p>
            <Button asChild size="lg">
              <a href="mailto:mercymutea@email.com">
                <Mail className="mr-2 h-4 w-4" />
                Email Me Directly
              </a>
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Contact;
