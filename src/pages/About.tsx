import { Target, Users, Lightbulb, Heart, Rocket, Star } from "lucide-react";

const About = () => {
  const values = [
    {
      icon: Target,
      title: "Our Mission",
      description: "To provide developers with the best tools to streamline their workflow and boost productivity.",
    },
    {
      icon: Lightbulb,
      title: "Innovation",
      description: "Constantly evolving with new tools and features based on developer needs and feedback.",
    },
    {
      icon: Users,
      title: "Community First",
      description: "Built by developers, for developers. Your input shapes our roadmap.",
    },
    {
      icon: Heart,
      title: "Open & Free",
      description: "Essential tools available to everyone. No hidden costs, no paywalls.",
    },
  ];

  const stats = [
    { icon: Rocket, value: "16+", label: "Tools Available" },
    { icon: Users, value: "10K+", label: "Active Users" },
    { icon: Star, value: "4.9", label: "User Rating" },
  ];

  return (
    <div className="min-h-screen py-24">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center space-y-6 mb-20 animate-fade-in">
          <h1 className="text-4xl md:text-6xl font-bold">
            About <span className="text-gradient">Neo Tool Box</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Neo Tool Box is a comprehensive platform designed to make developers' lives easier. 
            We believe that great tools should be accessible to everyone, which is why we've created 
            a suite of utilities that help you code faster, debug smarter, and build better.
          </p>
        </div>

        {/* Stats */}
        <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto mb-20 animate-fade-in" style={{ animationDelay: '0.1s' }}>
          {stats.map((stat, index) => (
            <div
              key={index}
              className="text-center p-8 card-gradient border border-border rounded-xl hover-glow"
            >
              <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-xl flex items-center justify-center">
                <stat.icon className="w-8 h-8 text-primary" />
              </div>
              <div className="text-4xl font-bold text-gradient mb-2">{stat.value}</div>
              <div className="text-muted-foreground">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Story Section */}
        <div className="max-w-4xl mx-auto mb-20 animate-fade-in" style={{ animationDelay: '0.2s' }}>
          <div className="card-gradient border border-border rounded-2xl p-8 md:p-12">
            <h2 className="text-3xl font-bold mb-6">Our Story</h2>
            <div className="space-y-4 text-lg text-muted-foreground leading-relaxed">
              <p>
                Neo Tool Box was born from a simple frustration: developers were wasting too much time 
                switching between different tools and websites to accomplish basic tasks. We knew there 
                had to be a better way.
              </p>
              <p>
                What started as a small collection of utilities has grown into a comprehensive toolkit 
                used by thousands of developers worldwide. Each tool is carefully crafted to solve real 
                problems and integrate seamlessly into your workflow.
              </p>
              <p>
                Today, we continue to expand our offerings based on community feedback, ensuring that 
                Neo Tool Box remains the go-to platform for developers who value efficiency and quality.
              </p>
            </div>
          </div>
        </div>

        {/* Values Grid */}
        <div className="animate-fade-in" style={{ animationDelay: '0.3s' }}>
          <h2 className="text-3xl font-bold text-center mb-12">
            What We <span className="text-gradient">Stand For</span>
          </h2>
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {values.map((value, index) => (
              <div
                key={index}
                className="p-8 card-gradient border border-border rounded-xl hover-glow animate-scale-in"
                style={{ animationDelay: `${0.4 + index * 0.1}s` }}
              >
                <div className="w-14 h-14 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-xl flex items-center justify-center mb-6">
                  <value.icon className="w-7 h-7 text-primary" />
                </div>
                <h3 className="text-2xl font-semibold mb-3">{value.title}</h3>
                <p className="text-muted-foreground leading-relaxed">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="mt-20 text-center card-gradient border border-primary/30 rounded-2xl p-12 animate-fade-in" style={{ animationDelay: '0.5s' }}>
          <h2 className="text-3xl font-bold mb-4">
            Join Our <span className="text-gradient">Journey</span>
          </h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Be part of a growing community of developers who are building the future, one tool at a time.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
