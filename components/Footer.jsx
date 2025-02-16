export default function Footer() {
  return (
    <footer className="border-t bg-muted">
      <div className="container flex flex-col items-center justify-between gap-4 py-10 md:h-24 md:flex-row md:py-4">
        {/* Left Section: Text Content */}
        <div className="flex flex-col items-center gap-4 px-8 md:flex-row md:gap-2 md:px-0">
          <p className="text-center text-sm leading-loose text-muted-foreground md:text-left">
            © {new Date().getFullYear()} Joshua Joseph Michael. Built with Next.js and Tailwind CSS.
          </p>
        </div>

        {/* Right Section: Social Media Links */}
        <div className="flex space-x-4">
          <a
            href="https://github.com/j0sh01"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-primary transition-colors"
            aria-label="GitHub"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="w-5 h-5"
            >
              <path
                fillRule="evenodd"
                d="M12 2C6.477 2 2 6.477 2 12c0 4.418 2.865 8.166 6.839 9.489.5.091.682-.217.682-.483 0-.237-.009-.868-.014-1.703-2.782.603-3.37-1.343-3.37-1.343-.454-1.155-1.11-1.462-1.11-1.462-.908-.62.07-.608.07-.608 1.003.071 1.532 1.031 1.532 1.031.892 1.529 2.341 1.087 2.91.832.091-.647.35-1.087.637-1.338-2.22-.252-4.555-1.11-4.555-4.936 0-1.09.39-1.98 1.03-2.678-.103-.253-.446-1.268.098-2.645 0 0 .84-.269 2.75 1.025A9.563 9.563 0 0 1 12 6.846a9.56 9.56 0 0 1 2.507.337c1.91-1.294 2.75-1.025 2.75-1.025.544 1.377.202 2.392.1 2.645.64.698 1.03 1.588 1.03 2.678 0 3.835-2.337 4.68-4.566 4.926.36.31.68.919.68 1.852 0 1.338-.012 2.421-.012 2.751 0 .267.18.577.688.48C19.138 20.161 22 16.418 22 12c0-5.523-4.477-10-10-10z"
                clipRule="evenodd"
              />
            </svg>
          </a>
          <a
            href="http://linkedin.com/in/joshua-michael-5249a4299"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-primary transition-colors"
            aria-label="LinkedIn"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="w-5 h-5"
            >
              <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
            </svg>
          </a>
          <a
            href="mailto:joshuajmichael255@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-primary transition-colors"
            aria-label="Email"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="w-5 h-5"
            >
              <path d="M12 13.293l-11-7V20a1 1 0 001 1h20a1 1 0 001-1V6.293l-11 7zm0-2.586L22.313 5H1.687L12 10.707z" />
            </svg>
          </a>
        </div>
      </div>
    </footer>
  );
}
