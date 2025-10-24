import { ArrowRight, Sparkles, Zap, Shield, Code2, Palette, Database } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import ToolCard from "@/components/ToolCard";
import heroImage from "@/assets/hero-bg.jpg";

const Home = () => {
  const featuredTools = [
    {
      icon: Code2,
      title: "Code Formatter",
      description: "Format your code with proper indentation and style",
    },
    {
      icon: Palette,
      title: "Color Palette",
      description: "Create beautiful color schemes for your projects",
    },
    {
      icon: Database,
      title: "Database Designer",
      description: "Design and visualize your database schema",
    },
    {
      icon: Shield,
      title: "Password Generator",
      description: "Generate secure passwords with custom requirements",
    },
    {
      icon: Zap,
      title: "Performance Monitor",
      description: "Monitor and analyze your application performance",
    },
    {
      icon: Sparkles,
      title: "Image Optimizer",
      description: "Compress and optimize images without quality loss",
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 z-0">
          <img 
            src={heroImage} 
            alt="Neo Tool Box" 
            className="w-full h-full object-cover opacity-40"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-background via-background/80 to-background" />
        </div>

        {/* Hero Content */}
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center space-y-8 animate-fade-in">
            <div className="inline-block">
              <span className="px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium border border-primary/20 animate-pulse-glow">
                ✨ Your Ultimate Developer Toolkit
              </span>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold leading-tight">
              Build Faster with{" "}
              <span className="text-gradient">Neo Tool Box</span>
            </h1>
            
            <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto">
              A comprehensive collection of developer tools designed to supercharge your workflow and boost productivity
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4">
              <Link to="/tools">
                <Button size="lg" className="group bg-gradient-to-r from-primary to-secondary text-primary-foreground hover:shadow-glow transition-all duration-300">
                  Explore Tools
                  <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
              <Link to="/about">
                <Button size="lg" variant="outline" className="border-primary/30 hover:bg-primary/10 hover:border-primary transition-all duration-300">
                  Learn More
                </Button>
              </Link>
            </div>
          </div>
        </div>

        {/* Animated gradient orbs */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-secondary/20 rounded-full blur-3xl animate-float" style={{ animationDelay: '1s' }} />
      </section>

      {/* Features Section */}
      <section className="py-20 relative">
        <div className="container mx-auto px-4">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl md:text-5xl font-bold">
              Why Choose <span className="text-gradient">Neo Tool Box</span>?
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Everything you need to streamline your development process
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {[
              {
                icon: Zap,
                title: "Lightning Fast",
                description: "Optimized tools that work at the speed of thought",
              },
              {
                icon: Shield,
                title: "Secure & Private",
                description: "Your data stays private, processed locally when possible",
              },
              {
                icon: Sparkles,
                title: "Always Improving",
                description: "Regular updates with new tools and features",
              },
            ].map((feature, index) => (
              <div
                key={index}
                className="group p-8 card-gradient border border-border rounded-xl hover-glow animate-fade-in"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className="w-14 h-14 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <feature.icon className="w-7 h-7 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Explore More Tools Section */}
      <section className="py-20 bg-gradient-to-b from-background to-muted/20">
        <div className="container mx-auto px-4">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl md:text-5xl font-bold">
              Explore More <span className="text-gradient">Tools</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Discover powerful utilities for every aspect of development
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {featuredTools.map((tool, index) => (
              <div
                key={index}
                className="animate-scale-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <ToolCard {...tool} />
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link to="/tools">
              <Button size="lg" variant="outline" className="group border-primary/30 hover:bg-primary/10 hover:border-primary">
                View All Tools
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
