import { Badge } from "@/components/ui/badge";

const skills = [
  { category: "Programming Languages", items: ["Python", "JavaScript", "PHP", "SQL"] },
  { category: "Frameworks & Libraries", items: ["React", "Next.js", "Node.js"] },
  { category: "ERP Expertise", items: ["Frappe", "ERPNext", "Client Scripts", "Server Scripts"] },
  { category: "Databases", items: ["MariaDB", "MySQL"] },
  { category: "Web Development", items: ["HTML", "CSS", "Tailwind CSS"] },
  { category: "Tools & Platforms", items: ["Git", "GitHub"] },
  { category: "Other Skills", items: ["API Development", "RESTful Services", "Problem Solving"] },
];

export default function Skills() {
  return (
    <section id="skills" className="container py-12 bg-muted">
      <h2 className="text-3xl font-bold tracking-tighter mb-8">Skills</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {skills.map((group, index) => (
          <div key={index} className="flex flex-col space-y-4">
            <h3 className="text-lg font-semibold">{group.category}</h3>
            <div className="flex flex-wrap gap-2">
              {group.items.map((skill, idx) => (
                <Badge key={idx} variant="secondary">{skill}</Badge>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
