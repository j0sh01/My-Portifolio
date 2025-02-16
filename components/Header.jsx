import Link from 'next/link';
import { Button } from "@/components/ui/button";
import { useState } from 'react';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-14 max-w-screen-2xl items-center justify-between">
        <div className="flex items-center space-x-2">
          <Link href="/" className="mr-6 flex items-center space-x-2">
            <span className="font-bold">Joshua J Michael</span>
          </Link>
          <button onClick={toggleMenu} className="md:hidden">
            ☰
          </button>
        </div>
        <nav className={`md:flex items-center space-x-6 text-sm font-medium ${isOpen ? 'block' : 'hidden'}`}>
          <Link href="#education">Education</Link>
          <Link href="#projects">Projects</Link>
          <Link href="#skills">Skills</Link>
          <Link href="#contact">Contact</Link>
        </nav>
        <div className="flex items-center space-x-2">
          <a href="/api/download">
            <Button variant="outline">Download CV</Button>
          </a>
        </div>
      </div>
    </header>
  );
}
