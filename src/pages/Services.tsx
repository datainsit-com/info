import { ArrowRight, Cloud, Shield, Brain, Cog, Database, Smartphone, Check, Star, Award, Users, Clock, Target, Zap } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { useNavigate } from 'react-router-dom';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';

const Services = () => {
  const navigate = useNavigate();

  const handleStartJourney = () => {
    navigate('/contact');
  };
  const services = [
    {
      id: 1,
      title: 'Cloud Migration & Infrastructure',
      description: 'Seamlessly migrate your business to the cloud with our expert guidance and support.',
      detailedDescription: 'Our cloud migration services help businesses transition from legacy systems to modern cloud platforms like AWS, Azure, and Google Cloud. We provide comprehensive assessment, strategy development, migration execution, and ongoing optimization to ensure your cloud infrastructure is secure, scalable, and cost-effective.',
      icon: Cloud,
      features: ['Multi-cloud Strategy', '24/7 Monitoring', 'Cost Optimization', 'Security Compliance'],
      technologies: ['AWS', 'Azure', 'Google Cloud', 'Kubernetes', 'Docker'],
      pricing: 'Starting from $5,000/month',
      category: 'Infrastructure'
    },
    {
      id: 2,
      title: 'Cybersecurity Solutions',
      description: 'Protect your digital assets with comprehensive security assessments and solutions.',
      detailedDescription: 'Our cybersecurity team provides end-to-end security solutions including vulnerability assessments, penetration testing, security policy development, incident response, and compliance management. We help organizations build robust security frameworks that protect against evolving cyber threats.',
      icon: Shield,
      features: ['Threat Assessment', 'Incident Response', 'Compliance Management', 'Security Training'],
      technologies: ['SIEM', 'EDR', 'Firewall Management', 'Zero Trust', 'Multi-Factor Authentication'],
      pricing: 'Custom pricing available',
      category: 'Security'
    },
    {
      id: 3,
      title: 'AI & Machine Learning',
      description: 'Harness the power of artificial intelligence to drive innovation and efficiency.',
      detailedDescription: 'Transform your business with custom AI and machine learning solutions. We develop intelligent systems for predictive analytics, automation, natural language processing, computer vision, and data-driven decision making. Our AI solutions are designed to integrate seamlessly with your existing workflows.',
      icon: Brain,
      features: ['Predictive Analytics', 'Process Automation', 'NLP Solutions', 'Computer Vision'],
      technologies: ['TensorFlow', 'PyTorch', 'scikit-learn', 'OpenAI', 'Hugging Face'],
      pricing: 'Project-based from $15,000',
      category: 'Innovation'
    },
    {
      id: 4,
      title: 'Digital Transformation',
      description: 'Modernize your business processes with cutting-edge digital solutions.',
      detailedDescription: 'We guide organizations through comprehensive digital transformation journeys, helping them modernize legacy systems, implement new technologies, optimize workflows, and create digital-first experiences. Our approach ensures sustainable change management and measurable business outcomes.',
      icon: Cog,
      features: ['Process Optimization', 'System Integration', 'Change Management', 'Training & Support'],
      technologies: ['APIs', 'Microservices', 'Low-Code Platforms', 'Workflow Automation'],
      pricing: 'Engagement-based pricing',
      category: 'Transformation'
    },
    {
      id: 5,
      title: 'Data Analytics & Business Intelligence',
      description: 'Turn your data into actionable insights with advanced analytics solutions.',
      detailedDescription: 'Our data analytics services help organizations unlock the value of their data through advanced analytics, business intelligence dashboards, data warehousing, and real-time reporting. We create data-driven cultures that enable informed decision-making at all levels.',
      icon: Database,
      features: ['Data Visualization', 'Real-time Dashboards', 'Predictive Modeling', 'Data Governance'],
      technologies: ['Power BI', 'Tableau', 'Snowflake', 'Apache Spark', 'Databricks'],
      pricing: 'Starting from $8,000/month',
      category: 'Analytics'
    },
    {
      id: 6,
      title: 'Mobile & Web Development',
      description: 'Create powerful mobile and web applications that engage your customers.',
      detailedDescription: 'We develop custom mobile and web applications that deliver exceptional user experiences. Our development team specializes in responsive web design, native and cross-platform mobile apps, progressive web applications, and e-commerce solutions that drive business growth.',
      icon: Smartphone,
      features: ['Responsive Design', 'Cross-platform Apps', 'E-commerce Solutions', 'API Integration'],
      technologies: ['React', 'React Native', 'Flutter', 'Node.js', 'GraphQL'],
      pricing: 'Project-based from $25,000',
      category: 'Development'
    }
  ];

  const categories = ['All', 'Infrastructure', 'Security', 'Innovation', 'Transformation', 'Analytics', 'Development'];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-hero py-20 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 animate-fade-in-up">
              Premium IT Services
              <span className="block text-secondary-light">& Solutions</span>
            </h1>
            <p className="text-xl mb-8 text-white/90 animate-fade-in-up [animation-delay:0.3s]">
              Comprehensive technology solutions tailored to meet your unique business needs and drive digital excellence.
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4 animate-fade-in">
              Our Service Portfolio
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto animate-fade-in-up">
              From cloud infrastructure to AI solutions, we provide end-to-end technology services 
              that transform businesses and drive sustainable growth.
            </p>
          </div>

          {/* Service Categories Filter */}
          <div className="flex flex-wrap justify-center gap-2 mb-12">
            {categories.map((category, index) => (
              <Badge 
                key={category} 
                variant="secondary" 
                className="cursor-pointer hover:bg-primary hover:text-primary-foreground transition-smooth animate-scale-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {category}
              </Badge>
            ))}
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card key={service.id} className="card-hover gradient-card border-0 shadow-soft animate-scale-in" style={{ animationDelay: `${index * 0.1}s` }}>
                <CardHeader className="text-center pb-4">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-primary rounded-full text-white mb-4 mx-auto">
                    <service.icon className="w-8 h-8" />
                  </div>
                  <div className="flex justify-between items-start mb-2">
                    <Badge className="bg-primary text-primary-foreground text-xs">
                      {service.category}
                    </Badge>
                  </div>
                  <CardTitle className="text-xl font-semibold mb-2">{service.title}</CardTitle>
                  <CardDescription className="text-muted-foreground">
                    {service.description}
                  </CardDescription>
                </CardHeader>
                <CardContent className="pt-0">
                  <div className="space-y-4">
                    <div>
                      <p className="text-sm font-medium text-muted-foreground mb-2">Key Features:</p>
                      <div className="flex flex-wrap gap-1">
                        {service.features.slice(0, 2).map((feature, featureIndex) => (
                          <Badge key={featureIndex} variant="outline" className="text-xs">
                            {feature}
                          </Badge>
                        ))}
                        {service.features.length > 2 && (
                          <Badge variant="outline" className="text-xs">
                            +{service.features.length - 2} more
                          </Badge>
                        )}
                      </div>
                    </div>
                    
                    <div className="flex justify-between items-center pt-4 border-t border-border">
                      <span className="text-sm font-medium text-primary">{service.pricing}</span>
                      <Dialog>
                        <DialogTrigger asChild>
                          <Button className="btn-primary text-sm px-4 py-2">
                            Learn More
                          </Button>
                        </DialogTrigger>
                        <DialogContent className="max-w-2xl max-h-[80vh] overflow-y-auto">
                          <DialogHeader>
                            <div className="flex items-center gap-3 mb-4">
                              <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center text-white">
                                <service.icon className="w-6 h-6" />
                              </div>
                              <div>
                                <DialogTitle className="text-2xl">{service.title}</DialogTitle>
                                <Badge className="bg-primary text-primary-foreground">
                                  {service.category}
                                </Badge>
                              </div>
                            </div>
                            <DialogDescription className="text-base leading-relaxed">
                              {service.detailedDescription}
                            </DialogDescription>
                          </DialogHeader>
                          
                          <div className="space-y-6 mt-6">
                            <div>
                              <h4 className="font-semibold mb-3">Key Features</h4>
                              <div className="grid grid-cols-2 gap-2">
                                {service.features.map((feature, featureIndex) => (
                                  <div key={featureIndex} className="flex items-center gap-2">
                                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                                    <span className="text-sm">{feature}</span>
                                  </div>
                                ))}
                              </div>
                            </div>
                            
                            <div>
                              <h4 className="font-semibold mb-3">Technologies</h4>
                              <div className="flex flex-wrap gap-2">
                                {service.technologies.map((tech, techIndex) => (
                                  <Badge key={techIndex} variant="secondary">
                                    {tech}
                                  </Badge>
                                ))}
                              </div>
                            </div>
                            
                            <div className="flex justify-between items-center pt-4 border-t border-border">
                              <div>
                                <p className="text-sm text-muted-foreground">Pricing</p>
                                <p className="font-semibold text-primary">{service.pricing}</p>
                              </div>
                              <div className="space-x-2">
                                <Button className="btn-primary" onClick={handleStartJourney} >Contact Us</Button>
                              </div>
                            </div>
                          </div>
                        </DialogContent>
                      </Dialog>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-4 animate-fade-in">
              Why Choose TechConsult Pro?
            </h2>
            <p className="text-xl text-muted-foreground animate-fade-in-up">
              We deliver exceptional results through expertise, innovation, and partnership.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center animate-scale-in">
              <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center text-white mb-4 mx-auto">
                <span className="text-2xl">🎯</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Expert Consultants</h3>
              <p className="text-muted-foreground">Certified professionals with deep industry expertise and proven track records.</p>
            </div>
            
            <div className="text-center animate-scale-in [animation-delay:0.2s]">
              <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center text-white mb-4 mx-auto">
                <span className="text-2xl">⚡</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Rapid Implementation</h3>
              <p className="text-muted-foreground">Agile methodologies ensure quick deployment and immediate business value.</p>
            </div>
            
            <div className="text-center animate-scale-in [animation-delay:0.4s]">
              <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center text-white mb-4 mx-auto">
                <span className="text-2xl">🤝</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Long-term Partnership</h3>
              <p className="text-muted-foreground">Ongoing support and strategic guidance to ensure sustained success.</p>
            </div>
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
            Let's discuss how our premium IT services can drive your business forward. 
            Schedule a consultation today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-bounce-in">
            <Button className="btn-secondary text-lg px-8 py-4" onClick={handleStartJourney}>
              Schedule Consultation
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;