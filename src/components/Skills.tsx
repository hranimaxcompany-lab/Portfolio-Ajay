import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { Code, Palette, Database, Globe, Monitor, Users } from 'lucide-react';

const Skills = () => {
  const skillCategories = [
    {
      icon: Code,
      title: "Frontend Development",
      color: "text-blue-600",
      skills: [
        { name: "HTML5/CSS3", level: 95 },
        { name: "JavaScript ES6+", level: 90 },
        { name: "React JS", level: 85 },
        { name: "Redux", level: 80 },
        { name: "TypeScript", level: 75 }
      ]
    },
    {
      icon: Palette,
      title: "Design & UX",
      color: "text-purple-600",
      skills: [
        { name: "Responsive Design", level: 95 },
        { name: "Bootstrap/Tailwind", level: 90 },
        { name: "UI/UX Design", level: 85 },
        { name: "Adobe Photoshop", level: 80 },
        { name: "Figma/XD", level: 75 }
      ]
    },
    {
      icon: Database,
      title: "Backend & Database",
      color: "text-green-600",
      skills: [
        { name: "RESTful APIs", level: 80 },
        { name: "Node.js", level: 70 },
        { name: "MongoDB", level: 75 },
        { name: "MySQL", level: 85 },
        { name: "Express.js", level: 70 }
      ]
    },
    {
      icon: Globe,
      title: "Web Technologies",
      color: "text-orange-600",
      skills: [
        { name: "SEO Optimization", level: 85 },
        { name: "Web Performance", level: 80 },
        { name: "Accessibility (WCAG)", level: 90 },
        { name: "Version Control (Git)", level: 85 },
        { name: "Webpack/Vite", level: 70 }
      ]
    },
    {
      icon: Monitor,
      title: "System Administration",
      color: "text-red-600",
      skills: [
        { name: "Windows 7-11", level: 95 },
        { name: "MS Office Suite", level: 90 },
        { name: "Network Troubleshooting", level: 85 },
        { name: "System Maintenance", level: 90 },
        { name: "Data Management", level: 95 }
      ]
    },
    {
      icon: Users,
      title: "Soft Skills",
      color: "text-indigo-600",
      skills: [
        { name: "Team Leadership", level: 85 },
        { name: "Training & Mentoring", level: 90 },
        { name: "Problem Solving", level: 95 },
        { name: "Communication", level: 90 },
        { name: "Project Management", level: 80 }
      ]
    }
  ];

  const tools = [
    "Visual Studio Code", "Git & GitHub", "Adobe Creative Suite", "Figma",
    "Chrome DevTools", "Postman", "Netlify", "Vercel", "Firebase", "MongoDB Atlas"
  ];

  return (
    <section id="skills" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            Skills & Expertise
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            A comprehensive skill set covering modern web development, system administration, and user experience design.
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {skillCategories.map((category, index) => (
            <Card key={index} className="p-6 hover:shadow-soft transition-all duration-300 group">
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <div className="p-2 bg-primary/10 rounded-lg group-hover:bg-primary/20 transition-colors">
                    <category.icon className={`h-6 w-6 ${category.color}`} />
                  </div>
                  <h3 className="text-lg font-semibold text-foreground">{category.title}</h3>
                </div>

                <div className="space-y-3">
                  {category.skills.map((skill, skillIndex) => (
                    <div key={skillIndex} className="space-y-1">
                      <div className="flex justify-between text-sm">
                        <span className="text-foreground font-medium">{skill.name}</span>
                        <span className="text-muted-foreground">{skill.level}%</span>
                      </div>
                      <Progress value={skill.level} className="h-2" />
                    </div>
                  ))}
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* Tools & Technologies */}
        <Card className="p-8 bg-gradient-card">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-semibold text-foreground mb-4">Tools & Technologies</h3>
            <p className="text-muted-foreground">
              Proficient in industry-standard tools and modern development environments
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-3">
            {tools.map((tool, index) => (
              <Badge 
                key={index} 
                variant="secondary" 
                className="px-4 py-2 text-sm hover:bg-primary hover:text-primary-foreground transition-colors cursor-default"
              >
                {tool}
              </Badge>
            ))}
          </div>
        </Card>
      </div>
    </section>
  );
};

export default Skills;