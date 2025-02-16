import React, { useState } from 'react';
import { School, GraduationCap, BookOpen, Building2 } from 'lucide-react';
import { Card, CardContent } from "@/components/ui/card";

const TimelineItem = ({ year, title, school, description, icon: Icon, isLast }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className="relative flex items-center mb-8">
      {/* Vertical Line */}
      {!isLast && <div className="absolute h-full w-0.5 bg-primary/30 left-6 top-6" />}
      
      {/* Icon Circle */}
      <div 
        className={`relative z-10 flex items-center justify-center w-12 h-12 rounded-full bg-primary/20 
          transition-all duration-300 ${isHovered ? 'bg-primary text-background scale-110' : 'text-primary'}`}
      >
        <Icon size={24} />
      </div>
      
      {/* Content Card */}
      <Card 
        className={`ml-4 flex-1 transform transition-all duration-300 hover:scale-102 
          hover:shadow-lg cursor-pointer`}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <CardContent className="p-4">
          <div className="text-sm text-muted-foreground">{year}</div>
          <h3 className="text-xl font-bold mt-1">{title}</h3>
          <div className="text-md font-medium text-primary mt-1">{school}</div>
          <p className="mt-2 text-muted-foreground">{description}</p>
        </CardContent>
      </Card>
    </div>
  );
};

export default function EducationTimeline() {
  const educationData = [
    {
      year: "2007 - 2013",
      title: "Primary Education",
      school: "Muungano Primary Shool",
      description: "Completed primary education with excellent academic performance and participated in various extracurricular activities.",
      icon: Building2
    },
    {
      year: "2014 - 2017",
      title: "Secondary Education",
      school: "Mwandoya Secondary School",
      description: "Achieved outstanding results in national examinations. Active member of science club and debate team.",
      icon: School
    },
    {
      year: "2018 - 2020",
      title: "Advanced Level",
      school: "Kibiti Boys High School",
      description: "Specialized in EGM (Economics, Geography, Mathematics) with exceptional grades. Led the school's robotics team.",
      icon: BookOpen
    },
    {
      year: "2020 - 2023",
      title: "Bachelor's Degree",
      school: "University of Dar es Salaam",
      description: "Pursued Bachelor's degree in Business Information Technology with focus on software development and Artificial Intelligence to automate Business Processes.",
      icon: GraduationCap
    }
  ];

  return (
    <section id="education" className="container py-12 md:py-16 lg:py-24">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold tracking-tighter mb-8 md:mb-12 text-center">
          Educational Journey
        </h2>
        
        <div className="space-y-4 px-4">
          {educationData.map((item, index) => (
            <TimelineItem 
              key={index}
              {...item}
              isLast={index === educationData.length - 1}
            />
          ))}
        </div>
      </div>
    </section>
  );
}