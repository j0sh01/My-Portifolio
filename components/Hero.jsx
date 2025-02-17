import { Button } from "@/components/ui/button";
import Image from 'next/image'; 
import jmichael from '../src/images/jmichael.png';

export default function Hero() {
  return (
    <section className="container grid items-center gap-6 pb-8 pt-6 md:py-10">
      <div className="flex justify-between items-center">
        {/* Left Section: Text Content */}
        <div className="flex max-w-[980px] flex-col items-start gap-2">
          <h1 className="text-3xl font-extrabold leading-tight tracking-tighter md:text-4xl">
            Hi, I&apos;m Joshua Joseph Michael<br className="hidden sm:inline" />
            Frappe/ERPNext Expert & Full-Stack Developer
          </h1>
          <p className="max-w-[700px] text-lg text-muted-foreground">
            As a Frappe/ERPNext expert with nearly a year of experience, I specialize
            in developing custom apps and modules using client-side JavaScript
            and server-side Python. With a strong foundation in Python, JavaScript, 
            and PHP, I bring expertise in building scalable, efficient, and user-friendly 
            ERP solutions. Whether it&apos;s scripting or designing, I craft tailored digital 
            solutions for your business needs.
          </p>
          <div className="flex gap-4 mt-4">
            {/* Button to scroll to Contact section */}
            <Button asChild>
              <a href="#contact">Contact Me</a>
            </Button>
            {/* Button to scroll to Projects section */}
            <Button asChild variant="outline">
              <a href="#projects">View Projects</a>
            </Button>
          </div>
        </div>

        {/* Right Section: Image */}
        <div className="flex-shrink-0">
          <Image src={jmichael} alt="Joshua Joseph Michael" width={300} height={300} />
        </div>
      </div>
    </section>
  );
}
