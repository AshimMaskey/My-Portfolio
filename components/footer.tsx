import { Github, Linkedin, Mail } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  // Quick links as an array of objects
  const quickLinks = [
    { href: "#about", label: "About" },
    { href: "#education", label: "Education" },
    { href: "#experience", label: "Experience" },
    { href: "#projects", label: "Projects" },
    { href: "#github", label: "GitHub Contributions" },
    { href: "#contact", label: "Contact" },
  ];

  return (
    <footer className="border-t border-border bg-background">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-8">
          {/* Brand */}
          <div>
            <h3 className="font-bold text-lg text-primary mb-2">
              {"<Ashim/Maskey>"}
            </h3>
            <p className="text-foreground/60 text-sm">
              I build beautiful and user-friendly websites with modern web
              technologies. Let&apos;s create something amazing together!
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm text-foreground/60">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="hover:text-foreground hover:underline transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Social Links */}
          <div>
            <h4 className="font-semibold mb-4">Connect</h4>
            <div className="flex gap-4 mb-4">
              <a
                href="https://github.com/ashimmaskey"
                target="_blank"
                rel="noopener noreferrer"
                className="text-foreground/60 hover:text-foreground transition-colors"
              >
                <Github size={20} />
              </a>
              <a
                href="https://www.linkedin.com/in/ashim-maskey-2a3400318/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-foreground/60 hover:text-foreground transition-colors"
              >
                <Linkedin size={20} />
              </a>

              <a
                href="mailto:ashimmaskey4@gmail.com"
                className="text-foreground/60 hover:text-foreground transition-colors"
              >
                <Mail size={20} />
              </a>
            </div>
            <div>
              <p className="text-sm text-foreground/60">
                Phone: +977-9869599949
              </p>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-border pt-8">
          <p className="text-center text-foreground/40 text-sm">
            © {currentYear} Ashim. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
