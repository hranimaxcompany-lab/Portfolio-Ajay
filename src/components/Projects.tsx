import { useState } from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ExternalLink, Github, Eye } from 'lucide-react';

// Import project images
import ecommerceImage from '@/assets/project-ecommerce.jpg';
import hospitalImage from '@/assets/project-hospital.jpg';
import portfolioImage from '@/assets/project-portfolio.jpg';
import lmsImage from '@/assets/project-lms.jpg';
import businessImage from '@/assets/project-business.jpg';
import dashboardImage from '@/assets/project-dashboard.jpg';

const Projects = () => {
  const [filter, setFilter] = useState('all');

  const projects = [
    {
      id: 1,
      title: "E-Commerce React Platform",
      description: "Full-featured e-commerce platform built with React, Redux, and RESTful APIs. Features include user authentication, shopping cart, payment integration, and admin dashboard.",
      image: ecommerceImage,
      category: "web-app",
      technologies: ["React", "Redux", "Node.js", "MongoDB", "Stripe"],
      liveUrl: "#",
      githubUrl: "#",
      featured: true
    },
    {
      id: 2,
      title: "Hospital Management System",
      description: "Comprehensive hospital data management system for patient records, appointments, and staff management. Improved data accuracy by 99% and reduced processing time by 20%.",
      image: hospitalImage,
      category: "system",
      technologies: ["HTML5", "CSS3", "JavaScript", "MySQL", "PHP"],
      liveUrl: "#",
      githubUrl: "#",
      featured: true
    },
    {
      id: 3,
      title: "Portfolio Website Template",
      description: "Modern, responsive portfolio template for developers and designers. Features smooth animations, dark mode toggle, and optimized performance.",
      image: portfolioImage,
      category: "web-design",
      technologies: ["React", "Tailwind CSS", "Framer Motion", "TypeScript"],
      liveUrl: "#",
      githubUrl: "#",
      featured: false
    },
    {
      id: 4,
      title: "Learning Management System",
      description: "Educational platform for online courses with student progress tracking, video streaming, and interactive assignments. Used by 150+ students.",
      image: lmsImage,
      category: "web-app",
      technologies: ["React", "Firebase", "Material-UI", "Video.js"],
      liveUrl: "#",
      githubUrl: "#",
      featured: false
    },
    {
      id: 5,
      title: "Responsive Business Website",
      description: "Corporate website with CMS integration, SEO optimization, and accessibility compliance (WCAG). Improved page load speed by 40%.",
      image: businessImage,
      category: "web-design",
      technologies: ["HTML5", "SCSS", "JavaScript", "Webpack", "CMS"],
      liveUrl: "#",
      githubUrl: "#",
      featured: false
    },
    {
      id: 6,
      title: "Data Visualization Dashboard",
      description: "Interactive dashboard for hospital patient data visualization with real-time updates and comprehensive reporting features.",
      image: dashboardImage,
      category: "system",
      technologies: ["React", "D3.js", "Chart.js", "REST API", "Excel Integration"],
      liveUrl: "#",
      githubUrl: "#",
      featured: false
    }
  ];

  const categories = [
    { id: 'all', label: 'All Projects' },
    { id: 'web-app', label: 'Web Applications' },
    { id: 'web-design', label: 'Web Design' },
    { id: 'system', label: 'System Projects' }
  ];

  const filteredProjects = filter === 'all' 
    ? projects 
    : projects.filter(project => project.category === filter);

  const featuredProjects = projects.filter(project => project.featured);

  return (
    <section id="projects" className="py-20 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            Featured Projects
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            A showcase of my recent work in web development, system administration, and user interface design.
          </p>
        </div>

        {/* Featured Projects */}
        <div className="mb-16">
          <h3 className="text-2xl font-semibold text-foreground mb-8 text-center">Highlighted Work</h3>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {featuredProjects.map((project) => (
              <Card key={project.id} className="group overflow-hidden hover:shadow-strong transition-all duration-300">
                <div className="relative overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center space-x-4">
                    <Button variant="secondary" size="sm">
                      <Eye className="h-4 w-4 mr-2" />
                      Live Demo
                    </Button>
                    <Button variant="secondary" size="sm">
                      <Github className="h-4 w-4 mr-2" />
                      Code
                    </Button>
                  </div>
                </div>
                <div className="p-6">
                  <h4 className="text-xl font-semibold text-foreground mb-3">{project.title}</h4>
                  <p className="text-muted-foreground mb-4 leading-relaxed">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech, index) => (
                      <Badge key={index} variant="secondary" className="text-xs">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                  <div className="flex space-x-3">
                    <Button variant="default" size="sm" className="flex-1">
                      <ExternalLink className="h-4 w-4 mr-2" />
                      View Project
                    </Button>
                    <Button variant="outline" size="sm">
                      <Github className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-3 mb-8">
          {categories.map((category) => (
            <Button
              key={category.id}
              variant={filter === category.id ? "default" : "outline"}
              onClick={() => setFilter(category.id)}
              className="transition-all duration-300"
            >
              {category.label}
            </Button>
          ))}
        </div>

        {/* All Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <Card key={project.id} className="group overflow-hidden hover:shadow-soft transition-all duration-300">
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-4 right-4">
                  {project.featured && (
                    <Badge className="bg-primary text-primary-foreground">Featured</Badge>
                  )}
                </div>
              </div>
              <div className="p-6">
                <h4 className="text-lg font-semibold text-foreground mb-2">{project.title}</h4>
                <p className="text-muted-foreground text-sm mb-4 line-clamp-3">{project.description}</p>
                <div className="flex flex-wrap gap-1 mb-4">
                  {project.technologies.slice(0, 3).map((tech, index) => (
                    <Badge key={index} variant="secondary" className="text-xs">
                      {tech}
                    </Badge>
                  ))}
                  {project.technologies.length > 3 && (
                    <Badge variant="secondary" className="text-xs">
                      +{project.technologies.length - 3}
                    </Badge>
                  )}
                </div>
                <div className="flex space-x-2">
                  <Button variant="default" size="sm" className="flex-1 text-xs">
                    <ExternalLink className="h-3 w-3 mr-1" />
                    Live
                  </Button>
                  <Button variant="outline" size="sm" className="text-xs">
                    <Github className="h-3 w-3 mr-1" />
                    Code
                  </Button>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <p className="text-muted-foreground mb-6">
            Interested in working together? Let's discuss your project!
          </p>
          <Button variant="hero" size="lg">
            Start a Project
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Projects;