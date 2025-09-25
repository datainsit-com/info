import { Mail, Linkedin, Github, MapPin, Calendar, Users, Award, Target, TrendingUp, Zap, Leaf, Handshake } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const Team = () => {
  const leadership = [
    {
      name: 'Sarah Johnson',
      position: 'Chief Executive Officer',
      image: '👩‍💼',
      bio: 'With over 20 years of experience in technology leadership, Sarah drives strategic vision and operational excellence at TechConsult Pro.',
      expertise: ['Strategic Planning', 'Digital Transformation', 'Business Development'],
      education: 'MBA Harvard Business School, BS Computer Science MIT'
    },
    {
      name: 'Michael Chen',
      position: 'Chief Technology Officer', 
      image: '👨‍💻',
      bio: 'Michael leads our technical innovation initiatives, overseeing cloud architecture, AI solutions, and emerging technology adoption.',
      expertise: ['Cloud Architecture', 'AI/ML Solutions', 'System Integration'],
      education: 'MS Computer Science Stanford, BS Electrical Engineering UC Berkeley'
    },
    {
      name: 'Emily Rodriguez',
      position: 'Chief Operating Officer',
      image: '👩‍🔬',
      bio: 'Emily ensures operational efficiency and quality delivery across all client engagements and internal processes.',
      expertise: ['Operations Management', 'Quality Assurance', 'Process Optimization'],
      education: 'MBA Wharton, BS Industrial Engineering'
    }
  ];

  const teamMembers = [
    {
      name: 'David Kim',
      position: 'Senior Cloud Architect',
      image: '👨‍💼',
      specialization: 'AWS, Azure, Multi-cloud Solutions',
      certifications: ['AWS Solutions Architect Professional', 'Azure Expert']
    },
    {
      name: 'Lisa Thompson',
      position: 'Cybersecurity Director',
      image: '👩‍💻',
      specialization: 'Security Architecture, Compliance',
      certifications: ['CISSP', 'CISM', 'SANS GIAC']
    },
    {
      name: 'James Wilson',
      position: 'AI/ML Principal Consultant',
      image: '🧑‍🔬',
      specialization: 'Machine Learning, Data Science',
      certifications: ['Google Cloud ML Engineer', 'AWS ML Specialty']
    },
    {
      name: 'Maria Garcia',
      position: 'Digital Transformation Lead',
      image: '👩‍🏫',
      specialization: 'Process Automation, Change Management',
      certifications: ['PMP', 'Lean Six Sigma Black Belt']
    },
    {
      name: 'Robert Anderson',
      position: 'Senior Data Architect',
      image: '👨‍🔬',
      specialization: 'Data Warehousing, Analytics',
      certifications: ['Snowflake Architect', 'Databricks Certified']
    },
    {
      name: 'Jennifer Liu',
      position: 'Mobile Development Lead',
      image: '👩‍💻',
      specialization: 'React Native, Flutter, iOS/Android',
      certifications: ['Google Flutter Certified', 'AWS Mobile Developer']
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-hero py-20 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 animate-fade-in-up">
              Meet Our
              <span className="block text-secondary-light">Expert Team</span>
            </h1>
            <p className="text-xl mb-8 text-white/90 animate-fade-in-up [animation-delay:0.3s]">
              Passionate professionals dedicated to delivering exceptional technology solutions 
              and driving your business success.
            </p>
          </div>
        </div>
      </section>

      {/* Leadership Team */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-4 animate-fade-in">
              Leadership Team
            </h2>
            <p className="text-xl text-muted-foreground animate-fade-in-up">
              Visionary leaders guiding our company's strategic direction and growth.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {leadership.map((leader, index) => (
              <Card key={leader.name} className="gradient-card border-0 shadow-medium card-hover animate-scale-in" style={{ animationDelay: `${index * 0.2}s` }}>
                <CardContent className="p-8 text-center">
                  <div className="text-6xl mb-4">{leader.image}</div>
                  <h3 className="text-2xl font-semibold mb-2">{leader.name}</h3>
                  <p className="text-primary font-medium mb-4">{leader.position}</p>
                  <p className="text-muted-foreground mb-6 leading-relaxed">{leader.bio}</p>
                  
                  <div className="mb-6">
                    <h4 className="font-semibold mb-2 text-sm uppercase tracking-wide">Expertise</h4>
                    <div className="flex flex-wrap gap-2 justify-center">
                      {leader.expertise.map((skill, skillIndex) => (
                        <span key={skillIndex} className="bg-primary/10 text-primary px-3 py-1 rounded-full text-sm">
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  <div className="mb-6">
                    <h4 className="font-semibold mb-2 text-sm uppercase tracking-wide">Education</h4>
                    <p className="text-sm text-muted-foreground">{leader.education}</p>
                  </div>
                  
                  <div className="flex justify-center gap-3">
                    <Button size="sm" variant="outline" className="flex items-center gap-2">
                      <Linkedin className="w-4 h-4" />
                      LinkedIn
                    </Button>
                    <Button size="sm" variant="outline" className="flex items-center gap-2">
                      <Mail className="w-4 h-4" />
                      Contact
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Team Members */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-4 animate-fade-in">
              Our Expert Consultants
            </h2>
            <p className="text-xl text-muted-foreground animate-fade-in-up">
              Certified professionals with deep expertise across all technology domains.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {teamMembers.map((member, index) => (
              <Card key={member.name} className="gradient-card border-0 shadow-soft card-hover animate-fade-in-up" style={{ animationDelay: `${index * 0.1}s` }}>
                <CardContent className="p-6 text-center">
                  <div className="text-4xl mb-4">{member.image}</div>
                  <h3 className="text-xl font-semibold mb-1">{member.name}</h3>
                  <p className="text-primary font-medium mb-3">{member.position}</p>
                  <p className="text-muted-foreground text-sm mb-4">{member.specialization}</p>
                  
                  <div className="mb-4">
                    <div className="flex items-center justify-center gap-1 mb-2">
                      <Award className="w-4 h-4 text-primary" />
                      <span className="text-sm font-medium">Certifications</span>
                    </div>
                    <div className="space-y-1">
                      {member.certifications.map((cert, certIndex) => (
                        <div key={certIndex} className="bg-primary/10 text-primary px-2 py-1 rounded text-xs">
                          {cert}
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  <Button size="sm" variant="outline" className="w-full">
                    View Profile
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Culture & Values */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-4 animate-fade-in">
              Our Culture
            </h2>
            <p className="text-xl text-muted-foreground animate-fade-in-up">
              Building a workplace where innovation thrives and every team member can excel.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: Target, title: 'Results-Driven', description: 'We focus on delivering measurable outcomes for our clients.' },
              { icon: Leaf, title: 'Continuous Learning', description: 'We invest in our team\'s growth through training and development.' },
              { icon: Handshake, title: 'Collaboration', description: 'We believe in the power of teamwork and knowledge sharing.' },
              { icon: Zap, title: 'Innovation', description: 'We embrace new ideas and cutting-edge technologies.' }
            ].map((value, index) => (
              <div key={value.title} className="text-center animate-scale-in" style={{ animationDelay: `${index * 0.1}s` }}>
                <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center text-white mx-auto mb-4">
                  <value.icon className="w-8 h-8" />
                </div>
                <h3 className="text-lg font-semibold mb-2">{value.title}</h3>
                <p className="text-muted-foreground text-sm">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Join Our Team CTA */}
      <section className="py-20 bg-gradient-primary text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6 animate-fade-in">
            Join Our Growing Team
          </h2>
          <p className="text-xl mb-8 text-white/90 max-w-2xl mx-auto animate-fade-in-up">
            Are you passionate about technology and ready to make an impact? 
            Explore career opportunities with TechConsult Pro.
          </p>
          <Button className="btn-secondary text-lg px-8 py-4 animate-bounce-in">
            View Open Positions
          </Button>
        </div>
      </section>
    </div>
  );
};

export default Team;