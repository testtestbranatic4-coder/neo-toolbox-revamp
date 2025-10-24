import { Mail, MessageSquare, Send, Github, Twitter, Linkedin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useState } from "react";
import { toast } from "sonner";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("Message sent successfully! We'll get back to you soon.");
    setFormData({ name: "", email: "", subject: "", message: "" });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const contactMethods = [
    {
      icon: Mail,
      title: "Email Us",
      description: "Send us an email anytime",
      link: "mailto:contact@neotoolbox.com",
      value: "contact@neotoolbox.com",
    },
    {
      icon: MessageSquare,
      title: "Community",
      description: "Join our developer community",
      link: "#",
      value: "Discord Server",
    },
  ];

  const socialLinks = [
    { icon: Github, link: "#", label: "GitHub" },
    { icon: Twitter, link: "#", label: "Twitter" },
    { icon: Linkedin, link: "#", label: "LinkedIn" },
  ];

  return (
    <div className="min-h-screen py-24">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center space-y-4 mb-16 animate-fade-in">
          <h1 className="text-4xl md:text-6xl font-bold">
            Get In <span className="text-gradient">Touch</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Have questions, suggestions, or just want to say hello? We'd love to hear from you.
          </p>
        </div>

        <div className="max-w-6xl mx-auto grid lg:grid-cols-5 gap-12">
          {/* Contact Info */}
          <div className="lg:col-span-2 space-y-8 animate-fade-in" style={{ animationDelay: '0.1s' }}>
            <div>
              <h2 className="text-2xl font-bold mb-6">Contact Information</h2>
              <p className="text-muted-foreground mb-8">
                Choose your preferred way to reach out to us. We respond to all inquiries within 24 hours.
              </p>

              <div className="space-y-6">
                {contactMethods.map((method, index) => (
                  <a
                    key={index}
                    href={method.link}
                    className="block p-6 card-gradient border border-border rounded-xl hover-glow group"
                  >
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                        <method.icon className="w-6 h-6 text-primary" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-lg mb-1">{method.title}</h3>
                        <p className="text-sm text-muted-foreground mb-2">
                          {method.description}
                        </p>
                        <p className="text-primary">{method.value}</p>
                      </div>
                    </div>
                  </a>
                ))}
              </div>
            </div>

            {/* Social Links */}
            <div>
              <h3 className="font-semibold text-lg mb-4">Follow Us</h3>
              <div className="flex gap-3">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.link}
                    aria-label={social.label}
                    className="w-12 h-12 bg-card border border-border rounded-lg flex items-center justify-center hover:border-primary hover:bg-primary/10 transition-all duration-300 hover:scale-110"
                  >
                    <social.icon className="w-5 h-5 text-muted-foreground hover:text-primary transition-colors" />
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-3 animate-fade-in" style={{ animationDelay: '0.2s' }}>
            <div className="card-gradient border border-border rounded-xl p-8">
              <h2 className="text-2xl font-bold mb-6">Send Us a Message</h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid sm:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label htmlFor="name" className="text-sm font-medium">
                      Your Name
                    </label>
                    <Input
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="John Doe"
                      required
                      className="bg-background border-border focus:border-primary transition-colors"
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="email" className="text-sm font-medium">
                      Email Address
                    </label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="john@example.com"
                      required
                      className="bg-background border-border focus:border-primary transition-colors"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label htmlFor="subject" className="text-sm font-medium">
                    Subject
                  </label>
                  <Input
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder="What's this about?"
                    required
                    className="bg-background border-border focus:border-primary transition-colors"
                  />
                </div>

                <div className="space-y-2">
                  <label htmlFor="message" className="text-sm font-medium">
                    Message
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell us more..."
                    rows={6}
                    required
                    className="bg-background border-border focus:border-primary transition-colors resize-none"
                  />
                </div>

                <Button
                  type="submit"
                  size="lg"
                  className="w-full bg-gradient-to-r from-primary to-secondary text-primary-foreground hover:shadow-glow transition-all duration-300 group"
                >
                  Send Message
                  <Send className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Button>
              </form>
            </div>
          </div>
        </div>

        {/* FAQ Section */}
        <div className="mt-20 max-w-4xl mx-auto animate-fade-in" style={{ animationDelay: '0.3s' }}>
          <h2 className="text-3xl font-bold text-center mb-12">
            Frequently Asked <span className="text-gradient">Questions</span>
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              {
                q: "How do I request a new tool?",
                a: "Send us a message with your tool idea and we'll review it for our roadmap.",
              },
              {
                q: "Are all tools free to use?",
                a: "Yes! All our core tools are completely free with no hidden costs.",
              },
              {
                q: "Can I contribute to the project?",
                a: "Absolutely! We welcome contributions from the community.",
              },
              {
                q: "How often are new tools added?",
                a: "We release new tools and updates regularly based on user feedback.",
              },
            ].map((faq, index) => (
              <div
                key={index}
                className="p-6 card-gradient border border-border rounded-xl hover-glow"
              >
                <h3 className="font-semibold text-lg mb-2">{faq.q}</h3>
                <p className="text-muted-foreground">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
