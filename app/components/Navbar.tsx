"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export function Navbar() {
  const pathname = usePathname();

  const isActive = (path: string) => pathname === path;

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/work", label: "Work" },
    { href: "/logs", label: "Logs" },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 bg-primary-dark/95 backdrop-blur-sm border-b border-secondary-warm z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link
            href="/"
            className="text-xl font-bold text-accent-gold hover:text-accent-light transition-colors pl-1 sm:pl-2"
          >
            CPC
          </Link>

          {/* Nav Links */}
          <div className="flex gap-4 sm:gap-8">
            {navLinks.map(({ href, label }) => (
              <Link
                key={href}
                href={href}
                className={`font-medium text-sm transition-colors ${
                  isActive(href)
                    ? "text-accent-gold border-b-2 border-accent-gold"
                    : "text-accent-light hover:text-accent-gold"
                }`}
              >
                {label}
              </Link>
            ))}
          </div>

          {/* Contact CTA */}
          <a
            href="mailto:christianpepscaasi@gmail.com"
            className="px-4 py-2 bg-accent-gold text-primary-dark border border-accent-light font-semibold rounded-lg hover:bg-accent-light hover:text-primary-dark transition-all duration-200 text-sm shadow-sm hover:shadow"
          >
            Contact
          </a>
        </div>
      </div>
    </nav>
  );
}
