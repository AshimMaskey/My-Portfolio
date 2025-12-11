"use client";

import { useState } from "react";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import Hero from "@/components/hero";
import { Card } from "@/components/ui/card";
import {
  Github,
  Mail,
  Linkedin,
  ArrowUpRight,
  Code2,
  Zap,
  Users,
} from "lucide-react";
import type React from "react";
import Image from "next/image";
import Education from "@/components/education";
import WorkExperience from "@/components/work-experience";
import toast from "react-hot-toast";
import GithubGraph from "@/components/github-graph";

export default function Home() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    const toastId = toast.loading("Sending message...");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (data.success) {
        toast.success("Message sent successfully!", { id: toastId });
        setFormData({ name: "", email: "", message: "" });
      } else {
        toast.error("Failed to send message.", { id: toastId });
      }
    } catch (error) {
      console.error(error);
      toast.error("Something went wrong.", { id: toastId });
    } finally {
      setLoading(false);
    }
  };
  const skills = [
    {
      category: "Frontend",
      items: [
        "React.js",
        "Next.js",
        "TypeScript",
        "Tailwind CSS",
        "Shadcn/UI",
        "Responsive Design",
      ],
      icon: Code2,
    },
    {
      category: "Backend",
      items: [
        "Node.js",
        "Express.js",
        "PostgreSQL",
        "MongoDB",
        "Prisma ORM",
        "Next.js Server Actions",
      ],
      icon: Zap,
    },
    {
      category: "Tools & Soft Skills",
      items: [
        "Git & GitHub Collaboration",
        "Vercel Deployment",
        "Postman (API Testing)",
        "Documentation & Writing",
        "Figma (Basic UI/UX Design)",
        "Agile/Scrum experience",
      ],
      icon: Users,
    },
  ];

  const projects = [
    {
      title: "Shoe E-Commerce Platform",
      type: "Individual Project",
      description:
        "A full-featured e-commerce platform built individually, with real-time product management, order processing, and an admin dashboard.",
      role: "Developed the whole project e-commerce project using Next.js, PostgreSQL and other tech.",
      keyFeatures: [
        "Attractive product listing and details",
        "Authentication using clerk and cloudinary for file storage",
        "Admin dashboard for viewing analytics with data visualization, managing products and orders",
      ],
      technologies: [
        "Next.js",
        "TypeScript",
        "Tailwind CSS",
        "PostgreSQL",
        "Prisma ORM",
        "Shadcn/UI",
        "Clerk Auth",
        "Cloudinary",
        "Recharts.js",
      ],
      image: "/simple1.png",
      github: "https://github.com/AshimMaskey/simplesole",
      live: "https://simplesole.vercel.app",
    },
    {
      title: "Hemp Products E-Commerce",
      type: "Group Project",
      description:
        "Collaborative e-commerce platform for hemp products, focusing on team development, real-time updates, and order placement.",
      role: "Worked with a team to implement product listing, shopping cart, and wishlist system, contributed to backend APIs and GitHub collaboration.",
      keyFeatures: [
        "Team collaboration with GitHub",
        "Real-time product updates",
        "Admin dashboard for managing key metrices",
      ],
      technologies: [
        "Next.js",
        "TypeScript",
        "PostgreSQl",
        "Prisma",
        "Tailwind CSS",
        "Recharts.js",
        "Next Auth",
        "Upload Care",
        "Framer Motion",
      ],
      image: "/antique.png",
      github: "https://github.com/GoingGeniusGroup/antique-nepal",
      live: "https://antique-nepal-khaki.vercel.app/",
    },
    {
      title: "Novel Management System",
      type: "Individual Project",
      description:
        "A system to manage novels and chapters for a web platform, including user accounts, reviews, and ratings.",
      role: "Developed the whole novel management system including both frontend and backend of the website with recommendation algorithm",
      keyFeatures: [
        "Chapter and novel management",
        "User authentication and reviews",
        "Rating system for user feedback",
      ],
      technologies: [
        "React",
        "Node.js",
        "Express.js",
        "MongoDB",
        "Tailwind CSS",
        "Shadcn/UI",
        "Cloudinary",
      ],
      image: "/novel.png",
      github: "https://github.com/AshimMaskey/Novel-Management-System",
      live: "https://novel-management-system-frontend.vercel.app/",
    },
    {
      title: "Portfolio Website",
      type: "Individual Project",
      description:
        "Personal portfolio website showcasing projects, skills, and contact info with a responsive and interactive design.",
      role: "Designed and implemented the full frontend using React, Tailwind CSS, and Next.js; integrated Shadcn/ UI for components",
      keyFeatures: [
        "Responsive and mobile-friendly design",
        "Beautifully designed different sections",
        "Dark theme and light theme integration",
        "Contact form with mailing integration (nodemailer)",
      ],
      technologies: [
        "React",
        "Next.js",
        "Tailwind CSS",
        "Nodemailer",
        "Shadcn/UI",
      ],
      image: "/portfolio.png",
      github: "https://github.com/AshimMaskey/My-Portfolio",
      live: "https://ashim-maskey.vercel.app/",
    },
  ];

  return (
    <main className="bg-background text-foreground">
      <Navbar />

      {/* Hero Section */}
      <section className="mt-7 md:mt-25 mb-15 flex justify-center">
        <Hero />
      </section>

      {/* About Section */}
      <section
        id="about"
        className="pt-2 mb-18 px-4 scroll-mt-16 bg-gradient-to-b from-transparent via-primary/5 to-transparent"
      >
        <div className="max-w-6xl mx-auto space-y-12">
          <div className="space-y-6">
            <h2 className="text-4xl md:text-5xl font-bold">
              {" "}
              <span className="text-primary">👋</span> About Me
            </h2>

            <p className="text-lg text-foreground/70 leading-relaxed text-pretty">
              Full-stack developer with hands-on experience in Next.js and the
              MERN stack. Completed a{" "}
              <span className="inline-block px-2 py-1 text-lg bg-primary/10 text-primary rounded-md font-medium">
                3-month Internship
              </span>{" "}
              at Going Genius Group of Companies, contributing to real-world
              projects and collaborating with teams on GitHub.
            </p>

            <ul className="text-lg text-foreground/70 leading-relaxed space-y-2 mt-4 list-disc list-inside">
              <li>Experienced with Git, GitHub collaboration, and teamwork</li>
              <li>Builds clean and responsive user interfaces</li>
              <li>Writes efficient, maintainable backend and frontend code</li>
              <li>Enjoys learning new technologies and improving every day</li>
            </ul>
          </div>

          {/* Skills Section */}
          <div className="space-y-8">
            <h3 className="text-2xl md:text-3xl font-bold">
              💻 Skills & Expertise
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {skills.map((skillGroup) => {
                const IconComponent = skillGroup.icon;
                return (
                  <Card
                    key={skillGroup.category}
                    className="p-6 card-hover cursor-pointer border-primary/10 hover:border-primary/30"
                  >
                    <div className="flex items-center gap-4 mb-4">
                      <div
                        className={`p-3 rounded-full ${
                          skillGroup.category === "Frontend"
                            ? "bg-gradient-to-tr from-blue-400 to-indigo-500"
                            : skillGroup.category === "Backend"
                            ? "bg-gradient-to-tr from-green-400 to-teal-500"
                            : "bg-gradient-to-tr from-yellow-400 to-orange-500"
                        }`}
                      >
                        <IconComponent className="w-6 h-6 text-white" />
                      </div>
                      <h4 className="font-semibold text-lg">
                        {skillGroup.category}
                      </h4>
                    </div>
                    <ul className="space-y-3">
                      {skillGroup.items.map((skill) => (
                        <li
                          key={skill}
                          className="text-foreground/70 flex items-center gap-2 text-md"
                        >
                          <span className="w-1.5 h-1.5 rounded-full bg-gradient-to-r from-primary to-accent"></span>
                          {skill}
                        </li>
                      ))}
                    </ul>
                  </Card>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      <Education />
      <WorkExperience />

      {/* Projects Section */}
      <section id="projects" className="pb-18 pt-2 px-4 scroll-mt-16">
        <div className="max-w-6xl mx-auto space-y-12">
          <div className="space-y-4">
            <h2 className="text-4xl md:text-5xl font-bold">
              🚀 Featured Projects
            </h2>
            <p className="text-lg text-foreground/70">
              Here are some of my recent projects that showcase my skills and
              experience.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project, idx) => (
              <Card
                key={idx}
                className="overflow-hidden card-hover border-primary/10 hover:border-primary/30 group"
              >
                <div className="relative h-48 overflow-hidden bg-gradient-to-br from-primary/10 to-accent/10">
                  <Image
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                </div>

                <div className="px-6 space-y-4">
                  <div>
                    <span className="text-xs font-medium px-2 py-1 bg-primary/10 text-primary rounded-full">
                      {project.type}
                    </span>
                  </div>
                  <h3 className="text-xl font-semibold">{project.title}</h3>

                  <p className="text-sm text-foreground/70">
                    {project.description}
                  </p>
                  {project.role && (
                    <p className="text-sm text-foreground/60 mt-1">
                      <strong>Role:</strong> {project.role}
                    </p>
                  )}
                  {project.keyFeatures && (
                    <ul className="mt-2 list-disc list-inside text-foreground/60 text-sm space-y-1">
                      {project.keyFeatures.map((feature) => (
                        <li key={feature}>{feature}</li>
                      ))}
                    </ul>
                  )}

                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="text-xs badge-gradient px-3 py-1 rounded-full font-medium text-primary/80"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  <div className="flex gap-3 pt-4">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex hover:underline items-center gap-1 text-primary hover:text-accent transition-colors text-sm font-medium"
                    >
                      <Github size={16} /> View on GitHub
                    </a>
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center hover:underline gap-1 text-primary hover:text-accent transition-colors text-sm font-medium ml-auto"
                    >
                      Live Demo <ArrowUpRight size={16} />
                    </a>
                  </div>
                  {project.title === "Novel Management System" && (
                    <span className="text-red-600 text-sm mt-1">
                      ⚠️ This project may take 2-3 minutes to load (backend
                      hosted on Render)
                    </span>
                  )}
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>
      <GithubGraph />

      {/* Contact Section */}
      <section id="contact" className="pb-20 pt-2 px-4 scroll-mt-16">
        <div className="max-w-6xl mx-auto space-y-12">
          <div className="space-y-4">
            <h2 className="text-4xl md:text-5xl font-bold">💬 Get In Touch</h2>
            <p className="text-lg text-foreground/70">
              I&apos;m actively open to full-time opportunities. Feel free to
              reach out—I would love to connect.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-12">
            {/* Email Card */}
            <Card className="p-6 card-hover border-primary/10 hover:border-primary/30 bg-gradient-to-br from-primary/5 to-accent/5">
              <Mail className="w-8 h-8 text-primary mb-4" />
              <h3 className="font-semibold mb-2">Email</h3>
              <a
                href="mailto:ashimmaskey4@gmail.com"
                className="text-primary hover:text-accent transition-colors text-sm font-medium"
              >
                ashimmaskey4@gmail.com
              </a>
            </Card>

            {/* LinkedIn Card */}
            <Card className="p-6 card-hover border-primary/10 hover:border-primary/30 bg-gradient-to-br from-primary/5 to-accent/5">
              <Linkedin className="w-8 h-8 text-primary mb-4" />
              <h3 className="font-semibold mb-2">LinkedIn</h3>
              <a
                href="https://www.linkedin.com/in/ashim-maskey-2a3400318/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary hover:text-accent transition-colors text-sm font-medium"
              >
                linkedin.com/in/ashim-maskey-2a3400318/
              </a>
            </Card>

            {/* GitHub Card */}
            <Card className="p-6 card-hover border-primary/10 hover:border-primary/30 bg-gradient-to-br from-primary/5 to-accent/5">
              <Github className="w-8 h-8 text-primary mb-4" />
              <h3 className="font-semibold mb-2">GitHub</h3>
              <a
                href="https://github.com/AshimMaskey/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary hover:text-accent transition-colors text-sm font-medium"
              >
                github.com/AshimMaskey
              </a>
            </Card>
            <Card className="p-6 card-hover border-primary/10 hover:border-primary/30 bg-gradient-to-br from-primary/5 to-accent/5">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="currentColor"
                className="w-8 h-8 text-primary mb-4"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3 5.25a2.25 2.25 0 012.25-2.25h1.5a2.25 2.25 0 012.25 2.25v1.5a2.25 2.25 0 01-.659 1.591l-1.591 1.591a16.04 16.04 0 006.364 6.364l1.591-1.591A2.25 2.25 0 0116.5 14.25h1.5a2.25 2.25 0 012.25 2.25v1.5a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 19.5v-1.5a2.25 2.25 0 01.659-1.591l1.591-1.591a16.04 16.04 0 01-6.364-6.364L3.659 6.75A2.25 2.25 0 013 5.25z"
                />
              </svg>

              <h3 className="font-semibold mb-2">Phone</h3>
              <a
                href="tel:+977-9869599949"
                className="text-primary hover:text-accent transition-colors text-sm font-medium"
              >
                +977-9869599949
              </a>
            </Card>
          </div>

          {/* Contact Form */}
          <Card className="p-8 md:p-12 border-primary/10 bg-gradient-to-br from-primary/5 to-accent/5">
            <h3 className="text-2xl font-bold mb-6">Send Me a Message</h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium mb-2"
                >
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 rounded-lg border border-primary/20 bg-background text-foreground placeholder:text-foreground/40 focus:outline-none focus:ring-2 focus:ring-primary transition-all"
                  placeholder="Your name"
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium mb-2"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 rounded-lg border border-primary/20 bg-background text-foreground placeholder:text-foreground/40 focus:outline-none focus:ring-2 focus:ring-primary transition-all"
                  placeholder="your@gmail.com"
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium mb-2"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full px-4 py-2 rounded-lg border border-primary/20 bg-background text-foreground placeholder:text-foreground/40 focus:outline-none focus:ring-2 focus:ring-primary resize-none transition-all"
                  placeholder="How can I help you?"
                />
              </div>

              <button
                type="submit"
                disabled={loading} // disable button while sending
                className={`w-full cursor-pointer flex justify-center items-center gap-2 bg-purple-600 text-white py-3 rounded-lg font-medium transition-all duration-300 ${
                  loading ? "opacity-70 cursor-not-allowed" : ""
                }`}
              >
                {loading ? (
                  <svg
                    className="w-5 h-5 animate-spin text-white"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <circle
                      className="opacity-25"
                      cx="12"
                      cy="12"
                      r="10"
                      stroke="currentColor"
                      strokeWidth="4"
                    ></circle>
                    <path
                      className="opacity-75"
                      fill="currentColor"
                      d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"
                    ></path>
                  </svg>
                ) : null}
                {loading ? "Sending..." : "Send Message"}
              </button>
            </form>
          </Card>
        </div>
      </section>

      <Footer />
    </main>
  );
}
