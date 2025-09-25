import { useState } from 'react';
import { MapPin, Phone, Mail, Clock, Send, MessageSquare } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Badge } from '@/components/ui/badge';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { useToast } from '@/hooks/use-toast';

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    company: '',
    phone: '',
    service: '',
    message: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Compose email with form details
    const subject = encodeURIComponent(`Contact Form: ${formData.service || 'General Inquiry'}`);
    const body = encodeURIComponent(
      `Name: ${formData.firstName} ${formData.lastName}\n` +
      `Email: ${formData.email}\n` +
      `Phone: ${formData.phone}\n` +
      `Company: ${formData.company}\n` +
      `Service: ${formData.service}\n\n` +
      `Message:\n${formData.message}`
    );
    
    const mailtoLink = `mailto:teja.c@datainsit.com?subject=${subject}&body=${body}`;
    window.open(mailtoLink, '_blank');
    
    // Show success message
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    toast({
      title: "Email Client Opened!",
      description: "Please send the email from your email client.",
    });
    
    setFormData({
      firstName: '',
      lastName: '',
      email: '',
      company: '',
      phone: '',
      service: '',
      message: '',
    });
    
    setIsSubmitting(false);
  };

  const handleCallUs = () => {
    window.open('tel:+917842525922', '_self');
  };

  const handleSendEmail = () => {
    window.open('mailto:teja.c@datainsit.com', '_blank');
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const contactInfo = [
    {
      icon: MapPin,
      title: 'Headquarters',
      details: ['109 E. 17th St. Suite #5952 Cheyenne, WY 82001']
    },
    {
      icon: Phone,
      title: 'Phone',
      details: ['+1 307 529 1956']
    },
    {
      icon: Mail,
      title: 'Email',
      details: ['']
    },
    {
      icon: Clock,
      title: 'Business Hours',
      details: ['Mon - Fri: 8:00 AM - 6:00 PM PST', 'Sat: 9:00 AM - 2:00 PM PST']
    }
  ];

  const offices = [
    {
      city: 'INDIA',
      address: '',
      phone: '',
      type: 'Headquarters'
    },
    {
      city: 'USA',
      address: '',
      phone: '',
      type: 'East Coast Office'
    },
    {
      city: 'Austin',
      address: '',
      phone: '',
      type: 'Central Office'
    }
  ];

  const services = [
    'Cloud Migration & Infrastructure',
    'Cybersecurity Solutions',
    'AI & Machine Learning',
    'Digital Transformation',
    'Data Analytics & BI',
    'Mobile & Web Development',
    'General Inquiry'
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-hero py-20 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 animate-fade-in-up">
              Get In Touch
              <span className="block text-secondary-light">Let's Build Together</span>
            </h1>
            <p className="text-xl mb-8 text-white/90 animate-fade-in-up [animation-delay:0.3s]">
              Ready to transform your business? Contact our expert team to discuss your 
              technology needs and discover how we can help you achieve your goals.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <Card className="gradient-card border-0 shadow-medium animate-slide-in-right">
              <CardHeader>
                <CardTitle className="text-2xl flex items-center gap-2">
                  <MessageSquare className="w-6 h-6 text-primary" />
                  Send Us a Message
                </CardTitle>
                <CardDescription>
                  Fill out the form below and we'll get back to you within 24 hours.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="firstName">First Name *</Label>
                      <Input
                        id="firstName"
                        value={formData.firstName}
                        onChange={(e) => handleInputChange('firstName', e.target.value)}
                        required
                        className="mt-1"
                      />
                    </div>
                    <div>
                      <Label htmlFor="lastName">Last Name *</Label>
                      <Input
                        id="lastName"
                        value={formData.lastName}
                        onChange={(e) => handleInputChange('lastName', e.target.value)}
                        required
                        className="mt-1"
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="email">Email Address *</Label>
                      <Input
                        id="email"
                        type="email"
                        value={formData.email}
                        onChange={(e) => handleInputChange('email', e.target.value)}
                        required
                        className="mt-1"
                      />
                    </div>
                    <div>
                      <Label htmlFor="phone">Phone Number</Label>
                      <Input
                        id="phone"
                        type="tel"
                        value={formData.phone}
                        onChange={(e) => handleInputChange('phone', e.target.value)}
                        className="mt-1"
                      />
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="company">Company Name</Label>
                    <Input
                      id="company"
                      value={formData.company}
                      onChange={(e) => handleInputChange('company', e.target.value)}
                      className="mt-1"
                    />
                  </div>

                  <div>
                    <Label htmlFor="service">Service of Interest</Label>
                    <Select value={formData.service} onValueChange={(value) => handleInputChange('service', value)}>
                      <SelectTrigger className="mt-1">
                        <SelectValue placeholder="Select a service" />
                      </SelectTrigger>
                      <SelectContent>
                        {services.map((service) => (
                          <SelectItem key={service} value={service}>
                            {service}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>

                  <div>
                    <Label htmlFor="message">Message *</Label>
                    <Textarea
                      id="message"
                      value={formData.message}
                      onChange={(e) => handleInputChange('message', e.target.value)}
                      required
                      rows={5}
                      placeholder="Tell us about your project requirements..."
                      className="mt-1"
                    />
                  </div>

                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="btn-primary w-full text-lg py-3"
                  >
                    {isSubmitting ? (
                      <>
                        <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                        Sending...
                      </>
                    ) : (
                      <>
                        <Send className="w-5 h-5 mr-2" />
                        Send Message
                      </>
                    )}
                  </Button>
                </form>
              </CardContent>
            </Card>

            {/* Contact Information */}
            <div className="space-y-6 animate-slide-in-right [animation-delay:0.3s]">
              <div>
                <h2 className="text-3xl font-bold mb-6">Contact Information</h2>
                <p className="text-muted-foreground text-lg mb-8">
                  Multiple ways to reach our team and get the support you need.
                </p>
              </div>

              <div className="grid gap-6">
                {contactInfo.map((info, index) => (
                  <Card key={info.title} className="gradient-card border-0 shadow-soft card-hover animate-scale-in" style={{ animationDelay: `${index * 0.1}s` }}>
                    <CardContent className="p-6">
                      <div className="flex items-start gap-4">
                        <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center text-white flex-shrink-0">
                          <info.icon className="w-6 h-6" />
                        </div>
                        <div className="flex-1">
                          <h3 className="font-semibold text-lg mb-2">{info.title}</h3>
                          <div className="space-y-1 mb-3">
                            {info.details.map((detail, detailIndex) => (
                              <p key={detailIndex} className="text-muted-foreground break-all">
                                {detail}
                              </p>
                            ))}
                          </div>
                          {info.title === 'Email' && (
                            <Button size="sm" variant="outline" onClick={handleSendEmail}>
                              Send Email
                            </Button>
                          )}
                          {info.title === 'Phone' && (
                            <Button size="sm" variant="outline" onClick={handleCallUs}>
                              Call Us
                            </Button>
                          )}
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Office Locations */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-4 animate-fade-in">
              Our Global Offices
            </h2>
            <p className="text-xl text-muted-foreground animate-fade-in-up">
              Find us around the world. Local expertise with global reach.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {offices.map((office, index) => (
              <Card key={office.city} className="gradient-card border-0 shadow-soft text-center card-hover animate-fade-in-up" style={{ animationDelay: `${index * 0.1}s` }}>
                <CardContent className="p-6">
                  <div className="w-12 h-12 bg-gradient-primary rounded-full flex items-center justify-center text-white mx-auto mb-4">
                    <MapPin className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{office.city}</h3>
                  <Badge className="bg-primary text-primary-foreground mb-3">
                    {office.type}
                  </Badge>
                  <p className="text-muted-foreground text-sm mb-2">{office.address}</p>
                  <p className="text-primary font-medium">{office.phone}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-4 animate-fade-in">
              Frequently Asked Questions
            </h2>
            <p className="text-xl text-muted-foreground animate-fade-in-up">
              Quick answers to common questions about our services and process.
            </p>
          </div>

          <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-8">
            {[
              {
                question: 'How quickly can you start a project?',
                answer: 'We typically begin new projects within 1-2 weeks of contract signing, depending on project scope and team availability.'
              },
              {
                question: 'Do you offer ongoing support?',
                answer: 'Yes, we provide comprehensive post-implementation support and maintenance services to ensure long-term success.'
              },
              {
                question: 'What industries do you serve?',
                answer: 'We work with clients across 25+ industries including healthcare, finance, retail, manufacturing, and technology.'
              },
              {
                question: 'Can you work with our existing team?',
                answer: 'Absolutely! We collaborate closely with your internal teams and can work as an extension of your organization.'
              }
            ].map((faq, index) => (
              <Card key={faq.question} className="gradient-card border-0 shadow-soft animate-scale-in" style={{ animationDelay: `${index * 0.2}s` }}>
                <CardContent className="p-6">
                  <h3 className="font-semibold text-lg mb-3">{faq.question}</h3>
                  <p className="text-muted-foreground">{faq.answer}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;