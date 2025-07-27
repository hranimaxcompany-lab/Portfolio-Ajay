import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { GraduationCap, Award, Users, Target } from 'lucide-react';

const About = () => {
  const highlights = [
    {
      icon: GraduationCap,
      title: "Education",
      description: "Bachelor of Science (B.Sc.) from Vikas Degree College, Jannaram - 2010"
    },
    {
      icon: Award,
      title: "Certifications",
      description: "Diploma in Computer Applications (2017) & Web Designing (2014)"
    },
    {
      icon: Users,
      title: "Teaching",
      description: "120+ hours/term UX/UI instruction to 20+ students with 75% job placement rate"
    },
    {
      icon: Target,
      title: "Specialization",
      description: "React JS, UX-focused responsive design, and accessibility (WCAG)"
    }
  ];

  const experience = [
    {
      title: "Web Designing Instructor",
      company: "Eshika Computer Institute, Jannaram",
      period: "2021 - Present",
      description: "Delivering comprehensive UX/UI and mobile-first design instruction with focus on React Hooks and RESTful API skills."
    },
    {
      title: "Computer Operator",
      company: "Global Maxx Multi-speciality Hospital, Karimnagar",
      period: "2015 - 2020",
      description: "Managed 3,000+ patient records with 99% accuracy. Implemented backup & recovery procedures and Level-1 troubleshooting."
    }
  ];

  return (
    <section id="about" className="py-20 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            About Me
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Passionate about creating modern, accessible web experiences with a strong foundation in both technical development and user-centered design.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Professional Summary */}
          <div className="space-y-6">
            <div>
              <h3 className="text-2xl font-semibold mb-4 text-foreground">Professional Summary</h3>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Computer Operator and Web Design Instructor with 5+ years managing hospital data systems and 3+ years teaching modern web technologies. Skilled in Windows systems administration, HTML/CSS3, React, and UX-focused responsive design. Proven record of reducing downtime and boosting data accuracy.
              </p>
              
              <div className="space-y-3">
                <div className="flex items-center gap-2">
                  <Badge variant="secondary">Help-desk support</Badge>
                  <Badge variant="secondary">RESTful API integration</Badge>
                </div>
                <div className="flex items-center gap-2">
                  <Badge variant="secondary">Accessibility (WCAG)</Badge>
                  <Badge variant="secondary">Growth-oriented organization</Badge>
                </div>
              </div>
            </div>

            {/* Key Highlights */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {highlights.map((item, index) => (
                <Card key={index} className="p-4 hover:shadow-soft transition-all duration-300">
                  <div className="flex items-start space-x-3">
                    <div className="p-2 bg-primary/10 rounded-lg">
                      <item.icon className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-sm text-foreground">{item.title}</h4>
                      <p className="text-xs text-muted-foreground mt-1">{item.description}</p>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>

          {/* Work Experience */}
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold text-foreground">Work Experience</h3>
            
            <div className="space-y-6">
              {experience.map((job, index) => (
                <Card key={index} className="p-6 hover:shadow-soft transition-all duration-300">
                  <div className="space-y-3">
                    <div>
                      <h4 className="text-lg font-semibold text-foreground">{job.title}</h4>
                      <p className="text-primary font-medium">{job.company}</p>
                      <p className="text-sm text-muted-foreground">{job.period}</p>
                    </div>
                    <p className="text-muted-foreground leading-relaxed">{job.description}</p>
                  </div>
                </Card>
              ))}
            </div>

            {/* Contact Info Card */}
            <Card className="p-6 bg-gradient-card border-primary/10">
              <h4 className="font-semibold text-foreground mb-3">Contact Information</h4>
              <div className="space-y-2 text-sm text-muted-foreground">
                <p>📱 +91-97004-15749</p>
                <p>📧 mamidiajay@gmail.com</p>
                <p>📍 Jannaram, Mancherial, IN</p>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;