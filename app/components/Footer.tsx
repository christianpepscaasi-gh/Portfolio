import React from "react";
import { profileData } from "@/data/profile";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary-dark border-t border-secondary-warm mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div>
            <h3 className="text-lg font-bold text-accent-gold mb-2">
              Christian Peps Caasi
            </h3>
            <p className="text-accent-light/70 text-sm">
              Mobile & Web Developer | OJT Software Development
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-accent-light mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a
                  href="/"
                  className="text-accent-light/70 hover:text-accent-gold transition-colors"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="/work"
                  className="text-accent-light/70 hover:text-accent-gold transition-colors"
                >
                  Work
                </a>
              </li>
              <li>
                <a
                  href="/logs"
                  className="text-accent-light/70 hover:text-accent-gold transition-colors"
                >
                  Logs
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold text-accent-light mb-4">Contact</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a
                  href={`mailto:${profileData.email}`}
                  className="text-accent-light/70 hover:text-accent-gold transition-colors break-all"
                >
                  {profileData.email}
                </a>
              </li>
              <li>
                <a
                  href={`tel:${profileData.phone}`}
                  className="text-accent-light/70 hover:text-accent-gold transition-colors"
                >
                  {profileData.phone}
                </a>
              </li>
              {profileData.social.github && (
                <li>
                  <a
                    href={profileData.social.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-accent-light/70 hover:text-accent-gold transition-colors"
                  >
                    GitHub
                  </a>
                </li>
              )}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-secondary-warm pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-accent-light/60">
          <p>© {currentYear} Christian Peps Caasi. All rights reserved.</p>
          <p>Crafted with care | Next.js + Tailwind CSS</p>
        </div>
      </div>
    </footer>
  );
}
