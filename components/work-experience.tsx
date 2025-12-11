import { Card } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ExternalLink } from "lucide-react";
import Image from "next/image";

export default function WorkExperience() {
  const experienceData = {
    period: "3-months (Sept - Nov, 2025)",
    title: "Full Stack Developer Intern",
    companyLogo: "/logo.webp",
    companyLink:
      "https://www.linkedin.com/company/going-genius-group-of-companies/posts/?feedView=all",
    company: "Going Genius Group of Companies.",
    individualProject: {
      title: "Shoe E-Commerce Platform (Individual)",
      description:
        "Developed a complete shoe e-commerce platform using Next.js, Prisma, Supabase (PostgreSQL), and Clerk.",
      technologies: [
        "Next.js",
        "Prisma",
        "Supabase",
        "PostgreSQL",
        "Clerk",
        "Shadcn/ UI",
        "Cloudinary",
      ],
      highlights: [
        "Built full-stack e-commerce solution from scratch",
        "Implemented authentication and user management",
        "Implemented Cloudinary for Image Upload",
        "Created responsive UI with modern design patterns",
        "Implemented caching for the reducing server load",
        "Worked on CMS of the platform like Company name, footer section and some section in homepage",
      ],
    },
    teamProject: {
      title: "E-Commerce for Hemp Products (Team)",
      description:
        "Worked collaboratively on the product module including wishlist, cart, user-side individual products, and review management in admin section using GitHub.",
      technologies: ["GitHub", "Next.js", "PostgreSQL", "Team Collaboration"],
      highlights: [
        "Collaborated using Git and GitHub workflows",
        "Implemented main shop section",
        "Created individual product pages",
        "Implemented wishlist functionality",
        "Developed shopping cart system",
        "Built review management system in admin side",
      ],
    },
  };

  return (
    <section
      id="experience"
      className="py-20 px-4 scroll-mt-16 bg-gradient-to-b from-transparent via-accent/5 to-transparent"
    >
      <div className="max-w-6xl mx-auto space-y-12">
        <div className="space-y-4">
          <h2 className="text-5xl font-bold">💼 Work Experience</h2>
        </div>

        <div className="flex gap-4">
          <div className="flex flex-col items-center">
            <div className="w-4 h-4 rounded-full bg-gradient-to-r from-primary to-accent mt-1.5 ring-4 ring-background"></div>
          </div>

          <Card className="flex-1 p-6 border-primary/10 hover:border-primary/30 transition-colors">
            <span className="inline-block px-3 py-1 text-sm font-medium text-primary bg-primary/10 rounded-full w-max">
              {experienceData.period}
            </span>

            <h3 className="text-2xl font-semibold">{experienceData.title}</h3>
            <a
              href={experienceData.companyLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-primary font-medium hover:underline"
            >
              <Image
                src={experienceData.companyLogo}
                alt={experienceData.company}
                width={24}
                height={24}
                className="rounded-full object-cover"
              />
              <span>{experienceData.company}</span>
            </a>

            <Tabs defaultValue="individual" className="w-full">
              <TabsList className="grid w-full grid-cols-2 mb-6">
                <TabsTrigger value="individual" className="cursor-pointer">
                  Individual Project
                </TabsTrigger>
                <TabsTrigger value="team" className="cursor-pointer">
                  Team Project
                </TabsTrigger>
              </TabsList>

              <TabsContent value="individual" className="space-y-4">
                <div className="space-y-3">
                  <h4 className="text-lg font-semibold text-foreground">
                    {experienceData.individualProject.title}
                  </h4>
                  <p className="text-foreground/70 leading-relaxed">
                    {experienceData.individualProject.description}
                  </p>
                  <a
                    href="https://simplesole.vercel.app/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary hover:underline text-sm inline-flex items-center gap-1"
                  >
                    <ExternalLink className="w-4 h-4" />
                    Live Demo
                  </a>
                  <div className="flex flex-wrap gap-2 pt-2">
                    {experienceData.individualProject.technologies.map(
                      (tech) => (
                        <span
                          key={tech}
                          className="text-xs px-3 py-1 rounded-full bg-blue-100 text-blue-800 font-medium"
                        >
                          {tech}
                        </span>
                      )
                    )}
                  </div>

                  <div className="pt-4">
                    <h5 className="text-sm font-semibold text-foreground/80 mb-2">
                      Key Highlights:
                    </h5>
                    <ul className="space-y-2">
                      {experienceData.individualProject.highlights.map(
                        (highlight, idx) => (
                          <li
                            key={idx}
                            className="flex items-start gap-2 text-sm text-foreground/70"
                          >
                            <span className="w-1.5 h-1.5 rounded-full bg-gradient-to-r from-blue-400 to-blue-600 mt-1.5 flex-shrink-0"></span>
                            {highlight}
                          </li>
                        )
                      )}
                    </ul>
                  </div>
                </div>
              </TabsContent>

              <TabsContent value="team" className="space-y-4">
                <div className="space-y-3">
                  <h4 className="text-lg font-semibold text-foreground">
                    {experienceData.teamProject.title}
                  </h4>
                  <p className="text-foreground/70 leading-relaxed">
                    {experienceData.teamProject.description}
                  </p>
                  <a
                    href="https://antique-nepal-khaki.vercel.app/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary hover:underline text-sm inline-flex items-center gap-1"
                  >
                    <ExternalLink className="w-4 h-4" />
                    Live Demo
                  </a>
                  <div className="flex flex-wrap gap-2 pt-2">
                    {experienceData.teamProject.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="text-xs px-3 py-1 rounded-full bg-green-100 text-green-800 font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="pt-4">
                    <h5 className="text-sm font-semibold text-foreground/80 mb-2">
                      Key Contributions:
                    </h5>
                    <ul className="space-y-2">
                      {experienceData.teamProject.highlights.map(
                        (highlight, idx) => (
                          <li
                            key={idx}
                            className="flex items-start gap-2 text-sm text-foreground/70"
                          >
                            <span className="w-1.5 h-1.5 rounded-full bg-gradient-to-r from-green-400 to-green-600 mt-1.5 flex-shrink-0"></span>
                            {highlight}
                          </li>
                        )
                      )}
                    </ul>
                  </div>
                </div>
              </TabsContent>
            </Tabs>
          </Card>
        </div>
      </div>
    </section>
  );
}
