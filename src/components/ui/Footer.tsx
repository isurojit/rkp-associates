import Link from "next/link";
import { Building2, Phone, Mail, MapPin, Globe, Share2 } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-secondary-900 text-white">
      <div className="max-w-7xl mx-auto px-4 md:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Company Info */}
          <div>
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-12 h-12 bg-primary-600 rounded-lg flex items-center justify-center">
                <Building2 className="w-7 h-7 text-white" />
              </div>
              <div>
                <h3 className="text-xl font-bold">RKP Associates</h3>
                <p className="text-sm text-secondary-400">Since 1986</p>
              </div>
            </div>
            <p className="text-secondary-400 mb-6">
              Empowering Growth Through Expert Financial Solutions. Your trusted
              partner in navigating complex financial landscapes.
            </p>
            <div className="flex space-x-4">
              <a
                href="#"
                className="w-10 h-10 bg-secondary-800 rounded-lg flex items-center justify-center hover:bg-primary-600 transition-colors"
              >
                <Share2 className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-secondary-800 rounded-lg flex items-center justify-center hover:bg-primary-600 transition-colors"
              >
                <Globe className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-secondary-800 rounded-lg flex items-center justify-center hover:bg-primary-600 transition-colors"
              >
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Quick Links</h4>
            <ul className="space-y-3">
              <li>
                <Link
                  href="/"
                  className="text-secondary-400 hover:text-white transition-colors"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/services"
                  className="text-secondary-400 hover:text-white transition-colors"
                >
                  Services
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className="text-secondary-400 hover:text-white transition-colors"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="text-secondary-400 hover:text-white transition-colors"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Our Services</h4>
            <ul className="space-y-3">
              <li>
                <Link
                  href="/services"
                  className="text-secondary-400 hover:text-white transition-colors"
                >
                  Internal Audit
                </Link>
              </li>
              <li>
                <Link
                  href="/services"
                  className="text-secondary-400 hover:text-white transition-colors"
                >
                  Statutory Audit
                </Link>
              </li>
              <li>
                <Link
                  href="/services"
                  className="text-secondary-400 hover:text-white transition-colors"
                >
                  Tax Consultancy
                </Link>
              </li>
              <li>
                <Link
                  href="/services"
                  className="text-secondary-400 hover:text-white transition-colors"
                >
                  IT Services
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Contact Us</h4>
            <ul className="space-y-4">
              <li className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-primary-400 mt-1" />
                <span className="text-secondary-400">
                  Multiple locations across key cities in India
                </span>
              </li>
              <li className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-primary-400" />
                <span className="text-secondary-400">+91 XXXXX XXXXX</span>
              </li>
              <li className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-primary-400" />
                <span className="text-secondary-400">
                  info@rkpassociates.in
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-secondary-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-secondary-400 text-sm">
              © {currentYear} RKP Associates. All rights reserved.
            </p>
            <div className="flex space-x-6">
              <Link
                href="#"
                className="text-secondary-400 hover:text-white text-sm transition-colors"
              >
                Privacy Policy
              </Link>
              <Link
                href="#"
                className="text-secondary-400 hover:text-white text-sm transition-colors"
              >
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
