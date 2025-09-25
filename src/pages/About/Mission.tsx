import { Target, Eye, Heart, Globe, Users, Lightbulb, Rocket, Zap, Shield, Star, Handshake, BookOpen, Leaf } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

const Mission = () => {
  const coreValues = [
    {
      icon: Heart,
      title: 'Client-Centric Approach',
      description: 'Every decision we make is guided by what\'s best for our clients\' success and growth.',
      examples: ['Personalized solutions', 'Dedicated support teams', '24/7 availability']
    },
    {
      icon: Lightbulb,
      title: 'Innovation Excellence',
      description: 'We stay at the forefront of technology to provide cutting-edge solutions.',
      examples: ['Emerging tech adoption', 'R&D investments', 'Continuous improvement']
    },
    {
      icon: Users,
      title: 'Collaboration & Partnership',
      description: 'We work as an extension of your team, fostering long-term relationships.',
      examples: ['Cross-functional teams', 'Knowledge sharing', 'Joint planning sessions']
    },
    {
      icon: Globe,
      title: 'Global Perspective',
      description: 'Our solutions consider global markets and international best practices.',
      examples: ['Multi-region expertise', 'Cultural awareness', 'Scalable architectures']
    }
  ];

  const impactAreas = [
    {
      title: 'Digital Transformation',
      description: 'Helping businesses modernize their operations and embrace digital-first strategies.',
      stats: '85% faster processes',
      icon: Rocket
    },
    {
      title: 'Operational Efficiency',
      description: 'Streamlining workflows and eliminating bottlenecks through smart automation.',
      stats: '40% cost reduction',
      icon: Zap
    },
    {
      title: 'Security & Compliance',
      description: 'Protecting digital assets while maintaining regulatory compliance.',
      stats: '99.9% security uptime',
      icon: Shield
    },
    {
      title: 'Innovation Enablement',
      description: 'Empowering teams with tools and technologies that foster creativity.',
      stats: '3x faster deployment',
      icon: Lightbulb
    }
  ];

  const commitments = [
    {
      title: 'Quality Assurance',
      description: 'We maintain rigorous quality standards in every project deliverable.',
      icon: Star
    },
    {
      title: 'Ethical Practices',
      description: 'We conduct business with integrity, transparency, and social responsibility.',
      icon: Handshake
    },
    {
      title: 'Continuous Learning',
      description: 'We invest in our team\'s growth and stay current with industry trends.',
      icon: BookOpen
    },
    {
      title: 'Sustainable Solutions',
      description: 'We design environmentally conscious and socially responsible solutions.',
      icon: Leaf
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-hero py-20 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 animate-fade-in-up">
              Mission & Vision
              <span className="block text-secondary-light">Driving Tomorrow</span>
            </h1>
            <p className="text-xl mb-8 text-white/90 animate-fade-in-up [animation-delay:0.3s]">
              Our commitment to transforming businesses through innovative technology solutions 
              and building a better digital future for everyone.
            </p>
          </div>
        </div>
      </section>

      {/* Mission & Vision Cards */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12">
              {/* Mission Card */}
              <Card className="gradient-card border-0 shadow-strong animate-slide-in-right">
                <CardHeader className="text-center pb-6">
                  <div className="w-20 h-20 bg-gradient-primary rounded-full flex items-center justify-center text-white mx-auto mb-6">
                    <Target className="w-10 h-10" />
                  </div>
                  <CardTitle className="text-3xl font-bold">Our Mission</CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <CardDescription className="text-lg leading-relaxed text-center">
                    To empower businesses with innovative technology solutions that drive growth, 
                    efficiency, and competitive advantage while fostering sustainable digital transformation.
                  </CardDescription>
                  
                  <div className="space-y-4">
                    <h4 className="font-semibold text-lg">How We Fulfill Our Mission:</h4>
                    <div className="space-y-3">
                      {[
                        'Delivering personalized solutions tailored to unique business needs',
                        'Providing expert guidance throughout the digital transformation journey',
                        'Ensuring measurable ROI and sustainable business impact',
                        'Building long-term partnerships based on trust and results'
                      ].map((point, index) => (
                        <div key={index} className="flex items-start gap-3">
                          <div className="w-6 h-6 bg-primary rounded-full flex items-center justify-center text-white text-sm mt-0.5 flex-shrink-0">✓</div>
                          <p className="text-muted-foreground">{point}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Vision Card */}
              <Card className="gradient-card border-0 shadow-strong animate-slide-in-right [animation-delay:0.3s]">
                <CardHeader className="text-center pb-6">
                  <div className="w-20 h-20 bg-gradient-primary rounded-full flex items-center justify-center text-white mx-auto mb-6">
                    <Eye className="w-10 h-10" />
                  </div>
                  <CardTitle className="text-3xl font-bold">Our Vision</CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <CardDescription className="text-lg leading-relaxed text-center">
                    To be the global leader in technology consulting, recognized for our innovation, 
                    expertise, and transformative impact on businesses worldwide.
                  </CardDescription>
                  
                  <div className="space-y-4">
                    <h4 className="font-semibold text-lg">Our Vision for the Future:</h4>
                    <div className="space-y-3">
                      {[
                        'Leading the industry in emerging technology adoption and implementation',
                        'Creating a global network of successful digital transformation stories',
                        'Fostering innovation that benefits businesses and society as a whole',
                        'Building sustainable technology solutions for future generations'
                      ].map((point, index) => (
                        <div key={index} className="flex items-start gap-3">
                          <div className="w-6 h-6 bg-primary rounded-full flex items-center justify-center text-white text-sm mt-0.5 flex-shrink-0">✓</div>
                          <p className="text-muted-foreground">{point}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-4 animate-fade-in">
              Our Core Values
            </h2>
            <p className="text-xl text-muted-foreground animate-fade-in-up">
              The fundamental principles that guide our decisions and define our culture.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {coreValues.map((value, index) => (
              <Card key={value.title} className="gradient-card border-0 shadow-medium card-hover animate-scale-in" style={{ animationDelay: `${index * 0.2}s` }}>
                <CardContent className="p-8">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center text-white flex-shrink-0">
                      <value.icon className="w-6 h-6" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-semibold mb-3">{value.title}</h3>
                      <p className="text-muted-foreground mb-4">{value.description}</p>
                      <div>
                        <h4 className="font-medium mb-2 text-sm uppercase tracking-wide">In Practice:</h4>
                        <div className="flex flex-wrap gap-2">
                          {value.examples.map((example, exampleIndex) => (
                            <span key={exampleIndex} className="bg-primary/10 text-primary px-3 py-1 rounded-full text-sm">
                              {example}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Impact Areas */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-4 animate-fade-in">
              Our Impact Areas
            </h2>
            <p className="text-xl text-muted-foreground animate-fade-in-up">
              Where we make a difference in transforming businesses and driving success.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {impactAreas.map((area, index) => (
              <Card key={area.title} className="gradient-card border-0 shadow-soft text-center card-hover animate-fade-in-up" style={{ animationDelay: `${index * 0.1}s` }}>
                <CardContent className="p-6">
                  <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center text-white mx-auto mb-4">
                    <area.icon className="w-8 h-8" />
                  </div>
                  <h3 className="text-lg font-semibold mb-3">{area.title}</h3>
                  <p className="text-muted-foreground text-sm mb-4">{area.description}</p>
                  <div className="bg-primary/10 text-primary px-3 py-2 rounded-lg">
                    <span className="font-semibold text-sm">{area.stats}</span>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Commitments */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-4 animate-fade-in">
              Our Commitments
            </h2>
            <p className="text-xl text-muted-foreground animate-fade-in-up">
              The promises we make to our clients, team members, and the community.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {commitments.map((commitment, index) => (
              <div key={commitment.title} className="text-center animate-scale-in" style={{ animationDelay: `${index * 0.1}s` }}>
                <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center text-white mx-auto mb-4">
                  <commitment.icon className="w-8 h-8" />
                </div>
                <h3 className="text-lg font-semibold mb-3">{commitment.title}</h3>
                <p className="text-muted-foreground text-sm">{commitment.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-gradient-primary text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6 animate-fade-in">
            Ready to Transform Together?
          </h2>
          <p className="text-xl mb-8 text-white/90 max-w-2xl mx-auto animate-fade-in-up">
            Let's discuss how our mission and values align with your business objectives 
            to create meaningful and lasting change.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-bounce-in">
            <button className="btn-secondary text-lg px-8 py-4">
              Start Your Journey
            </button>
            <button className="text-lg px-8 py-4 border-2 border-white text-white hover:bg-white hover:text-primary transition-smooth rounded-lg">
              Learn More About Us
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Mission;