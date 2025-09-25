import { Users, Target, Award, TrendingUp, Star, Cloud, Bot, Globe, Trophy, Rocket } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

const About = () => {
  const stats = [
    { icon: Users, label: 'Expert Consultants', value: '50+' },
    { icon: Award, label: 'Successful Projects', value: '1,200+' },
    { icon: TrendingUp, label: 'Client Satisfaction', value: '98%' },
    { icon: Target, label: 'Industries Served', value: '25+' },
  ];

  const timeline = [
    {
      year: '2009',
      title: 'Founded',
      description: 'DatainsiT was established with a vision to transform businesses through technology.',
      icon: Star
    },
    {
      year: '2012',
      title: 'Cloud Expansion',
      description: 'Expanded services to include comprehensive cloud migration and infrastructure solutions.',
      icon: Cloud
    },
    {
      year: '2016',
      title: 'AI Innovation',
      description: 'Pioneered AI and machine learning consulting services for enterprise clients.',
      icon: Bot
    },
    {
      year: '2019',
      title: 'Global Reach',
      description: 'Opened international offices and expanded to serve clients across multiple continents.',
      icon: Globe
    },
    {
      year: '2022',
      title: 'Industry Leadership',
      description: 'Recognized as a leading IT consultancy with numerous industry awards and certifications.',
      icon: Trophy
    },
    {
      year: '2024',
      title: 'Future Vision',
      description: 'Continuing to innovate with emerging technologies and sustainable digital solutions.',
      icon: Rocket
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-hero py-20 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 animate-fade-in-up">
              About
              <span className="block text-secondary-light">U S</span>
            </h1>
            <p className="text-xl mb-8 text-white/90 animate-fade-in-up [animation-delay:0.3s]">
              Your trusted partner in digital transformation, delivering innovative IT solutions 
              that drive business excellence and sustainable growth since 2009.
            </p>
          </div>
        </div>
      </section>

      {/* Company Overview */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-foreground mb-6 animate-fade-in">
                Transforming Businesses Through Technology
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed animate-fade-in-up">
                At DataInsit, we believe that technology is the catalyst for business transformation. 
                For over 15 years, we have been helping organizations navigate the complex digital landscape, 
                providing strategic guidance, innovative solutions, and unwavering support to achieve their goals.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="animate-fade-in-up">
                <h3 className="text-2xl font-semibold mb-4">Our Approach</h3>
                <p className="text-muted-foreground mb-6">
                  We combine deep technical expertise with business acumen to deliver solutions that not only 
                  solve immediate challenges but also position our clients for future success. Our collaborative 
                  approach ensures that every solution is tailored to your unique needs and objectives.
                </p>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 bg-primary rounded-full flex items-center justify-center text-white text-sm mt-0.5">✓</div>
                    <div>
                      <h4 className="font-medium">Strategic Planning</h4>
                      <p className="text-sm text-muted-foreground">Comprehensive assessment and roadmap development</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 bg-primary rounded-full flex items-center justify-center text-white text-sm mt-0.5">✓</div>
                    <div>
                      <h4 className="font-medium">Expert Implementation</h4>
                      <p className="text-sm text-muted-foreground">Seamless execution by certified professionals</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 bg-primary rounded-full flex items-center justify-center text-white text-sm mt-0.5">✓</div>
                    <div>
                      <h4 className="font-medium">Ongoing Support</h4>
                      <p className="text-sm text-muted-foreground">Continuous optimization and enhancement</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="animate-scale-in">
                <div className="grid grid-cols-2 gap-6">
                  {stats.map((stat, index) => (
                    <Card key={stat.label} className="gradient-card border-0 shadow-soft text-center animate-bounce-in" style={{ animationDelay: `${index * 0.1}s` }}>
                      <CardContent className="p-6">
                        <div className="inline-flex items-center justify-center w-12 h-12 bg-gradient-primary rounded-full text-white mb-3">
                          <stat.icon className="w-6 h-6" />
                        </div>
                        <div className="text-2xl font-bold text-primary mb-1">{stat.value}</div>
                        <div className="text-sm text-muted-foreground">{stat.label}</div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12">
              <Card className="gradient-card border-0 shadow-medium animate-slide-in-right">
                <CardHeader className="text-center pb-4">
                  <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center text-white mx-auto mb-4">
                    <Target className="w-8 h-8" />
                  </div>
                  <CardTitle className="text-2xl">Our Mission</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-center text-base leading-relaxed">
                    To empower businesses with innovative technology solutions that drive growth, efficiency, 
                    and competitive advantage. We are committed to delivering exceptional value through 
                    expertise, innovation, and unwavering dedication to our clients' success.
                  </CardDescription>
                </CardContent>
              </Card>

              <Card className="gradient-card border-0 shadow-medium animate-slide-in-right [animation-delay:0.3s]">
                <CardHeader className="text-center pb-4">
                  <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center text-white mx-auto mb-4">
                    <TrendingUp className="w-8 h-8" />
                  </div>
                  <CardTitle className="text-2xl">Our Vision</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-center text-base leading-relaxed">
                    To be the global leader in technology consulting, recognized for our innovation, 
                    expertise, and transformative impact on businesses worldwide. We envision a future 
                    where technology seamlessly integrates with business strategy to create sustainable value.
                  </CardDescription>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Company Timeline */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-4 animate-fade-in">
              Our Journey
            </h2>
            <p className="text-xl text-muted-foreground animate-fade-in-up">
              From startup to industry leader - discover the milestones that shaped our company.
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="relative">
              {/* Timeline line */}
              <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-primary opacity-30 hidden md:block"></div>
              
              {timeline.map((event, index) => (
                <div key={event.year} className="relative flex items-start mb-12 animate-slide-in-right" style={{ animationDelay: `${index * 0.2}s` }}>
                  <div className="flex-shrink-0 w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center text-white shadow-medium z-10">
                    <event.icon className="w-8 h-8" />
                  </div>
                  <div className="ml-8 flex-1">
                    <div className="flex items-center gap-4 mb-2">
                      <span className="text-2xl font-bold text-primary">{event.year}</span>
                      <h3 className="text-xl font-semibold">{event.title}</h3>
                    </div>
                    <p className="text-muted-foreground">{event.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-4 animate-fade-in">
              Our Core Values
            </h2>
            <p className="text-xl text-muted-foreground animate-fade-in-up">
              The principles that guide everything we do.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: Target, title: 'Excellence', description: 'We strive for excellence in every project and client interaction.' },
              { icon: Users, title: 'Partnership', description: 'We build lasting relationships based on trust and mutual success.' },
              { icon: TrendingUp, title: 'Innovation', description: 'We embrace emerging technologies and creative problem-solving.' },
              { icon: Award, title: 'Integrity', description: 'We conduct business with honesty, transparency, and ethical standards.' }
            ].map((value, index) => (
              <Card key={value.title} className="gradient-card border-0 shadow-soft text-center card-hover animate-scale-in" style={{ animationDelay: `${index * 0.1}s` }}>
                <CardContent className="p-6">
                  <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center text-white mx-auto mb-4">
                    <value.icon className="w-8 h-8" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{value.title}</h3>
                  <p className="text-muted-foreground text-sm">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;