"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Phone, Mail } from "lucide-react";
import Image from "next/image";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/services", label: "Services" },
    { href: "/about", label: "About Us" },
    { href: "/contact", label: "Contact" },
  ];

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? "bg-white/90 backdrop-blur-xl shadow-xl py-3"
          : "bg-gradient-to-b from-black/80 via-black/60 to-transparent py-4"
      }`}
    >
      <nav className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-3 group">
            <motion.div
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
              className={`relative w-40 md:w-48 h-10 md:h-12 rounded-lg px-2 py-1.5 ${
                isScrolled ? "bg-white" : "bg-white/95"
              }`}
            >
              <Image
                src="/images/rkp-logo-design.png"
                alt="RKP Associates - Chartered Accountants"
                fill
                className="object-contain"
                priority
              />
            </motion.div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`px-5 py-2.5 rounded-full font-semibold transition-all duration-300 ${
                  isScrolled
                    ? "text-black hover:text-primary-600 hover:bg-primary-50"
                    : "text-white hover:text-white hover:bg-white/20"
                }`}
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/contact"
              className={`ml-4 px-6 py-2.5 font-semibold rounded-full transition-all duration-300 shadow-lg hover:shadow-xl ${
                isScrolled
                  ? "bg-primary-600 text-white hover:bg-primary-700"
                  : "bg-white text-primary-700 hover:bg-primary-50"
              }`}
            >
              Get Started
            </Link>
          </div>

          {/* Contact Info - Desktop */}
          <div className="hidden xl:flex items-center space-x-6">
            <a
              href="tel:+91XXXXXXXXXX"
              className={`flex items-center space-x-2 font-medium transition-colors ${
                isScrolled
                  ? "text-black hover:text-primary-600"
                  : "text-white hover:text-primary-300"
              }`}
            >
              <Phone className="w-4 h-4" />
              <span className="text-sm">+91 9435565649</span>
            </a>
            <a
              href="mailto:info@rkpassociates.in"
              className={`flex items-center space-x-2 font-medium transition-colors ${
                isScrolled
                  ? "text-black hover:text-primary-600"
                  : "text-white hover:text-primary-300"
              }`}
            >
              <Mail className="w-4 h-4" />
              <span className="text-sm">info@rkpassociates.in</span>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className={`lg:hidden p-2.5 rounded-xl transition-all duration-300 ${
              isScrolled
                ? "bg-secondary-100 hover:bg-secondary-200"
                : "bg-white/20 hover:bg-white/30 backdrop-blur-sm"
            }`}
          >
            {isMobileMenuOpen ? (
              <X
                className={`w-6 h-6 ${isScrolled ? "text-black" : "text-white"}`}
              />
            ) : (
              <Menu
                className={`w-6 h-6 ${isScrolled ? "text-black" : "text-white"}`}
              />
            )}
          </button>
        </div>

        {/* Mobile Menu - Fixed 0.9 Opacity Background */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className={`lg:hidden mt-4 pb-4 border-t pt-4 ${
                isScrolled
                  ? "bg-white/90 backdrop-blur-xl border-secondary-200"
                  : "bg-black/90 backdrop-blur-xl border-white/20"
              }`}
            >
              <div className="flex flex-col space-y-3">
                {navLinks.map((link, index) => (
                  <motion.div
                    key={link.href}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <Link
                      href={link.href}
                      onClick={() => setIsMobileMenuOpen(false)}
                      className={`block px-4 py-3 rounded-xl font-semibold transition-all duration-300 ${
                        isScrolled
                          ? "text-black hover:text-primary-600 hover:bg-primary-50"
                          : "text-white hover:text-white hover:bg-white/20"
                      }`}
                    >
                      {link.label}
                    </Link>
                  </motion.div>
                ))}
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.4 }}
                >
                  <Link
                    href="/contact"
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="block w-full text-center px-6 py-3 bg-primary-600 text-white font-semibold rounded-xl hover:bg-primary-700 transition-all duration-300"
                  >
                    Get Started
                  </Link>
                </motion.div>
                <div
                  className={`pt-4 border-t space-y-3 ${
                    isScrolled ? "border-secondary-200" : "border-white/20"
                  }`}
                >
                  <a
                    href="tel:+91XXXXXXXXXX"
                    className={`flex items-center space-x-3 px-4 py-3 rounded-xl transition-colors ${
                      isScrolled
                        ? "text-black hover:bg-secondary-100"
                        : "text-white hover:bg-white/10"
                    }`}
                  >
                    <Phone className="w-5 h-5 text-primary-600" />
                    <span className="font-medium">+91 XXXXX XXXXX</span>
                  </a>
                  <a
                    href="mailto:info@rkpassociates.in"
                    className={`flex items-center space-x-3 px-4 py-3 rounded-xl transition-colors ${
                      isScrolled
                        ? "text-black hover:bg-secondary-100"
                        : "text-white hover:bg-white/10"
                    }`}
                  >
                    <Mail className="w-5 h-5 text-primary-600" />
                    <span className="font-medium">info@rkpassociates.in</span>
                  </a>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </motion.header>
  );
}
