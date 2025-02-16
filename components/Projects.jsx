import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

const projects = [
  {
    title: "Tenacious FreightMaster",
    description: "Developed custom modules and apps for ERPNext using client scripts, server scripts, and integrations.",
    technologies: ["Frappe", "ERPNext", "Python", "JavaScript"],
    link: "https://github.com/j0sh01/Tenacious-FreightMaster"
  },
  {
    title: "Digital Document Management System",
    description: "Built a scalable e-commerce platform with modern technologies to handle high traffic.",
    technologies: ["PHP", "Javascript", "MySQL", "CSS", "HTML"],
    link: "https://github.com/j0sh01/Digital-Document-Management-System"
  },
  {
    title: "Portfolio Website",
    description: "Designed and developed a personal portfolio showcasing my skills, projects, and achievements.",
    technologies: ["Next.js", "Tailwind CSS", "JavaScript"],
    link: "https://example.com/portfolio"
  },
];

export default function Projects() {
  return (
    <section id="projects" className="container py-12">
      <h2 className="text-3xl font-bold tracking-tighter mb-8">Projects</h2>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((project, index) => (
          <Card key={index} className="shadow-lg hover:shadow-xl transition-shadow">
            <CardHeader>
              <CardTitle>{project.title}</CardTitle>
              <CardDescription>{project.description}</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech, techIndex) => (
                  <Badge key={techIndex} variant="secondary">{tech}</Badge>
                ))}
              </div>
            </CardContent>
            <CardFooter>
              <Button asChild>
                <a href={project.link} target="_blank" rel="noopener noreferrer">View Project</a>
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </section>
  );
}
