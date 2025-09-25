import { useState } from 'react';
import { MapPin, Clock, DollarSign, Users, TrendingUp, Award, Calendar, Briefcase, ChevronDown, ChevronUp, Target } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { useNavigate } from 'react-router-dom';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

const Career = () => {
  const navigate = useNavigate();

  const handleStartJourney = () => {
    navigate('/contact');
  };
  const jobListings = [
    {
      id: 1,
      title: 'Senior Cloud Solutions Architect',
      department: 'Cloud Services',
      location: 'New York, NY / Remote',
      type: 'Full-time',
      salary: '$120k - $160k',
      experience: '5+ years',
      description: 'Lead cloud transformation initiatives for enterprise clients. Design and implement scalable cloud architectures using AWS, Azure, and GCP.',
      requirements: [
        'Bachelor\'s degree in Computer Science or related field',
        '5+ years of cloud architecture experience',
        'AWS/Azure/GCP certifications preferred',
        'Strong communication and leadership skills',
        'Experience with microservices and containerization'
      ],
      benefits: ['Health Insurance', 'Remote Work', '401k Matching', 'Professional Development']
    },
    {
      id: 2,
      title: 'Cybersecurity Specialist',
      department: 'Security',
      location: 'San Francisco, CA',
      type: 'Full-time',
      salary: '$90k - $130k',
      experience: '3+ years',
      description: 'Protect client systems and data through comprehensive security assessments, incident response, and security solution implementation.',
      requirements: [
        'Bachelor\'s degree in Cybersecurity or related field',
        '3+ years of cybersecurity experience',
        'CISSP, CISM, or similar certifications',
        'Experience with penetration testing',
        'Knowledge of compliance frameworks (SOC2, GDPR, HIPAA)'
      ],
      benefits: ['Health Insurance', 'Flexible Hours', 'Stock Options', 'Training Budget']
    },
    {
      id: 3,
      title: 'AI/ML Consultant',
      department: 'Data Science',
      location: 'Austin, TX / Hybrid',
      type: 'Full-time',
      salary: '$100k - $140k',
      experience: '4+ years',
      description: 'Develop and implement AI/ML solutions for clients across various industries. Work with cutting-edge technologies and large datasets.',
      requirements: [
        'Master\'s degree in Data Science, AI, or related field',
        '4+ years of ML engineering experience',
        'Proficiency in Python, TensorFlow, PyTorch',
        'Experience with cloud ML platforms',
        'Strong statistical and analytical skills'
      ],
      benefits: ['Health Insurance', 'Flexible Work', 'Conference Budget', 'Equity Package']
    },
    {
      id: 4,
      title: 'Digital Transformation Manager',
      department: 'Strategy',
      location: 'Chicago, IL',
      type: 'Full-time',
      salary: '$110k - $150k',
      experience: '6+ years',
      description: 'Lead digital transformation projects for enterprise clients. Manage cross-functional teams and drive strategic technology initiatives.',
      requirements: [
        'MBA or Bachelor\'s in Business/Technology',
        '6+ years of project management experience',
        'PMP certification preferred',
        'Experience with digital transformation',
        'Strong client relationship skills'
      ],
      benefits: ['Health Insurance', 'Bonuses', 'Flexible PTO', 'Leadership Development']
    }
  ];

  const careerPath: Array<{
    level: string;
    duration: string;
    description: string;
    icon: string | React.ComponentType<{ className?: string }>;
  }> = [
    {
      level: 'Junior Consultant',
      duration: '0-2 years',
      description: 'Learn foundational skills, work on client projects under supervision',
      icon: '📚'
    },
    {
      level: 'Consultant',
      duration: '2-4 years', 
      description: 'Lead small projects, develop specialization, mentor junior staff',
      icon: '💼'
    },
    {
      level: 'Senior Consultant',
      duration: '4-7 years',
      description: 'Manage large projects, client relationships, technical leadership',
      icon: '🎯'
    },
    {
      level: 'Principal/Director',
      duration: '7+ years',
      description: 'Strategic planning, business development, industry expertise',
      icon: '👑'
    }
  ];

  const benefits = [
    {
      icon: Users,
      title: 'Collaborative Culture',
      description: 'Work with talented professionals in a supportive environment'
    },
    {
      icon: TrendingUp,
      title: 'Career Growth',
      description: 'Clear advancement paths and continuous learning opportunities'
    },
    {
      icon: Award,
      title: 'Recognition',
      description: 'Performance bonuses and achievement recognition programs'
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-hero py-20 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 animate-fade-in-up">
              Build Your Future with
              <span className="block text-secondary-light">U S</span>
            </h1>
            <p className="text-xl mb-8 text-white/90 animate-fade-in-up [animation-delay:0.3s]">
              Join our team of innovative professionals and help shape the future of technology consulting.
            </p>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 bg-muted">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-foreground mb-4 animate-fade-in">
              Why Work With Us?
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <div key={benefit.title} className="text-center animate-scale-in" style={{ animationDelay: `${index * 0.2}s` }}>
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-primary rounded-full text-white mb-4">
                  <benefit.icon className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-semibold mb-2">{benefit.title}</h3>
                <p className="text-muted-foreground">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Career Path Timeline */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-4 animate-fade-in">
              Your Career Journey
            </h2>
            <p className="text-xl text-muted-foreground animate-fade-in-up">
              Clear progression paths designed to help you reach your full potential.
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="relative">
              {/* Timeline line */}
              <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-primary opacity-30"></div>
              
              {careerPath.map((step, index) => (
                <div key={step.level} className="relative flex items-start mb-12 animate-slide-in-right" style={{ animationDelay: `${index * 0.3}s` }}>
                  <div className="flex-shrink-0 w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center text-white shadow-medium">
                    {typeof step.icon === 'string' ? (
                      <span className="text-2xl">{step.icon}</span>
                    ) : (
                      <step.icon className="w-8 h-8" />
                    )}
                  </div>
                  <div className="ml-8 flex-1">
                    <h3 className="text-2xl font-semibold mb-2">{step.level}</h3>
                    <p className="text-primary font-medium mb-2">{step.duration}</p>
                    <p className="text-muted-foreground">{step.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Job Listings */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-4 animate-fade-in">
              Open Positions
            </h2>
            <p className="text-xl text-muted-foreground animate-fade-in-up">
              Find your perfect role and take the next step in your career.
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <Accordion type="single" collapsible className="space-y-4">
              {jobListings.map((job, index) => (
                <AccordionItem key={job.id} value={`job-${job.id}`} className="animate-fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
                  <Card className="gradient-card border-0 shadow-soft">
                    <AccordionTrigger className="px-6 py-4 hover:no-underline">
                      <div className="flex-1 text-left">
                        <div className="flex flex-wrap items-center gap-4 mb-2">
                          <h3 className="text-xl font-semibold">{job.title}</h3>
                          <Badge className="bg-primary text-primary-foreground">{job.department}</Badge>
                        </div>
                        <div className="flex flex-wrap items-center gap-6 text-sm text-muted-foreground">
                          <div className="flex items-center gap-1">
                            <MapPin className="w-4 h-4" />
                            {job.location}
                          </div>
                          <div className="flex items-center gap-1">
                            <Clock className="w-4 h-4" />
                            {job.type}
                          </div>
                          <div className="flex items-center gap-1">
                            <DollarSign className="w-4 h-4" />
                            {job.salary}
                          </div>
                        </div>
                      </div>
                    </AccordionTrigger>
                    <AccordionContent className="px-6 pb-6">
                      <div className="space-y-6">
                        <div>
                          <h4 className="font-semibold mb-2">Job Description</h4>
                          <p className="text-muted-foreground">{job.description}</p>
                        </div>
                        
                        <div>
                          <h4 className="font-semibold mb-2">Requirements</h4>
                          <ul className="space-y-1 text-muted-foreground">
                            {job.requirements.map((req, reqIndex) => (
                              <li key={reqIndex} className="flex items-start gap-2">
                                <span className="text-primary mt-1">•</span>
                                {req}
                              </li>
                            ))}
                          </ul>
                        </div>
                        
                        <div>
                          <h4 className="font-semibold mb-2">Benefits</h4>
                          <div className="flex flex-wrap gap-2">
                            {job.benefits.map((benefit, benefitIndex) => (
                              <Badge key={benefitIndex} variant="secondary">
                                {benefit}
                              </Badge>
                            ))}
                          </div>
                        </div>
                        
                        <div className="flex gap-4">
                          <Button className="btn-primary" onClick={handleStartJourney}>TO Apply Now</Button>
                        </div>
                      </div>
                    </AccordionContent>
                  </Card>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-primary text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6 animate-fade-in">
            Ready to Join Our Team?
          </h2>
          <p className="text-xl mb-8 text-white/90 max-w-2xl mx-auto animate-fade-in-up">
            Don't see the perfect role? Send us your resume and we'll consider you for future opportunities.
          </p>
          <Button className="btn-secondary text-lg px-8 py-4 animate-bounce-in" onClick={handleStartJourney}>
            To Start Your Journey 
          </Button>
        </div>
      </section>
    </div>
  );
};

export default Career;