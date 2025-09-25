import { ArrowRight, CheckCircle, Users, Award, Clock, Cloud, Rocket, Shield, Brain } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { useNavigate } from 'react-router-dom';
import heroImage from '@/assets/hero-image.jpg';

const Home = () => {
  const navigate = useNavigate();

  const handleStartJourney = () => {
    navigate('/contact');
  };
  const services = [
    {
      title: 'Cloud Solutions',
      description: 'Scalable cloud infrastructure and migration services tailored to your business needs.',
      icon: Cloud,
    },
    {
      title: 'Digital Transformation',
      description: 'Modernize your business processes with cutting-edge technology solutions.',
      icon: Rocket,
    },
    {
      title: 'Cybersecurity',
      description: 'Comprehensive security solutions to protect your digital assets and data.',
      icon: Shield,
    },
    {
      title: 'AI & Analytics',
      description: 'Harness the power of artificial intelligence and data analytics for growth.',
      icon: Brain,
    },
  ];

  const testimonials = [
    {
      name: 'Johnson',
      company: '',
      text: 'TechConsult Pro transformed our IT infrastructure completely. Their expertise is unmatched.',
      rating: 5,
    },
    {
      name: 'Michael',
      company: '',
      text: 'Outstanding service and support. They delivered beyond our expectations.',
      rating: 4,
    },
    {
      name: 'Emily Rodriguez',
      company: '',
      text: 'Professional, reliable, and innovative. The perfect IT consultancy partner.',
      rating: 4,
    },
  ];

  const stats = [
    { icon: Users, label: 'Happy Clients', value: '500+' },
    { icon: Award, label: 'Projects Completed', value: '1,200+' },
    { icon: Clock, label: 'Years of Experience', value: '15+' },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-hero min-h-[80vh] flex items-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src={heroImage} 
            alt="Professional IT consulting team" 
            className="w-full h-full object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-primary opacity-80"></div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center text-white">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-fade-in-up">
              Transform Your Business with
              <span className="block text-secondary-light animate-bounce-in">Expert IT Solutions</span>
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-white/90 animate-fade-in-up [animation-delay:0.3s]">
              Leading IT consultancy providing innovative technology solutions for businesses of all sizes.
              Unlock your potential with our expert guidance.
            </p>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-muted">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            {stats.map((stat, index) => (
              <div key={stat.label} className="text-center animate-scale-in" style={{ animationDelay: `${index * 0.2}s` }}>
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-primary rounded-full text-white mb-4">
                  <stat.icon className="w-8 h-8" />
                </div>
                <h3 className="text-3xl font-bold text-primary mb-2">{stat.value}</h3>
                <p className="text-muted-foreground">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4 animate-fade-in">
              Our Premium Services
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto animate-fade-in-up">
              Comprehensive IT solutions designed to drive your business forward in the digital age.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, index) => (
              <Card key={service.title} className="card-hover gradient-card border-0 animate-scale-in" style={{ animationDelay: `${index * 0.1}s` }}>
                <CardHeader className="text-center">
                  <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center text-white mx-auto mb-4">
                    <service.icon className="w-8 h-8" />
                  </div>
                  <CardTitle className="text-xl font-semibold">{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-center text-muted-foreground">
                    {service.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4 animate-fade-in">
              What Our Clients Say
            </h2>
            <p className="text-xl text-muted-foreground animate-fade-in-up">
              Success stories from businesses we've helped transform.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={testimonial.name} className="card-hover gradient-card border-0 animate-slide-in-right" style={{ animationDelay: `${index * 0.2}s` }}>
                <CardContent className="p-6">
                  <div className="flex mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <span key={i} className="text-yellow-400 text-xl">★</span>
                    ))}
                  </div>
                  <p className="text-muted-foreground mb-4 italic">"{testimonial.text}"</p>
                  <div>
                    <p className="font-semibold text-foreground">{testimonial.name}</p>
                    <p className="text-sm text-muted-foreground">{testimonial.company}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-primary text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 animate-fade-in">
            Ready to Transform Your Business?
          </h2>
          <p className="text-xl mb-8 text-white/90 max-w-2xl mx-auto animate-fade-in-up">
            Join hundreds of satisfied clients who have revolutionized their operations with our expert IT solutions.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-bounce-in">
            <Button className="btn-secondary text-lg px-8 py-4" onClick={handleStartJourney}>
              Start Your Journey
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;