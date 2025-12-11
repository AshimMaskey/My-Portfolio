"use client";

import { ArrowRight, ChevronDown, Download } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative flex justify-center overflow-hidden pt-0">
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 -left-1/2 w-full h-full bg-gradient-to-r from-primary/20 via-transparent to-transparent rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 -right-1/2 w-full h-full bg-gradient-to-l from-accent/20 via-transparent to-transparent rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-6xl mx-auto px-4 w-full">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className="space-y-8">
            <div className="space-y-6">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 border border-primary/20 rounded-full">
                <div className="w-2 h-2 rounded-full bg-primary animate-pulse"></div>
                <span className="text-sm font-medium text-primary">
                  Available for Work 😊
                </span>
              </div>
              {/* Mobile Image (only visible on small screens) */}
              <div className="flex md:hidden justify-start">
                <div className="relative w-40 sm:w-48 aspect-square rounded-full overflow-hidden border border-white/20 shadow-lg shadow-primary/20 ring-1 ring-primary/20">
                  <Image
                    src="/profile.jpg"
                    alt="Profile"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>

              <div className="space-y-4">
                <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight">
                  Hi, I&apos;m{" "}
                  <span className="gradient-text">Ashim Maskey</span>
                </h1>
                <h2 className="text-2xl md:text-3xl text-foreground/70 font-medium">
                  Full Stack Developer
                </h2>
              </div>

              <p className="text-lg text-foreground/60 leading-relaxed max-w-xl text-pretty">
                I create clean, responsive, and user-friendly web experiences
                using modern tools and technologies.
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-4 pt-4">
              <a href="/resume.pdf" download>
                <button className=" bg-purple-600 cursor-pointer text-white hover:-translate-y-1 px-8 py-3 rounded-sm font-medium flex items-center gap-2 transition-all duration-300">
                  <Download size={18} />
                  Download Resume
                </button>
              </a>
            </div>
          </div>

          {/* Hero Image */}
          {/* Hero Image */}
          {/* Desktop Image */}
          <div className="relative hidden md:flex items-center justify-center">
            <div className="relative w-3/4 aspect-square rounded-full overflow-hidden border border-white/20 shadow-xl shadow-primary/20 ring-1 ring-primary/30">
              <Image
                src="/profile.jpg"
                alt="Profile"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
