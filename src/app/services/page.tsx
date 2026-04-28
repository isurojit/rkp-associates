"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  CheckCircle,
  ChevronDown,
  BarChart3,
  FileCheck,
  Calculator,
  Cpu,
  Shield,
  Users,
  TrendingUp,
  Star,
  Zap,
  Target,
} from "lucide-react";
import Header from "@/components/ui/Header";
import Footer from "@/components/ui/Footer";
import { services } from "@/lib/data";

// Animation variants
const fadeInUp = {
  hidden: { opacity: 0, y: 80 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] },
  },
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.2,
    },
  },
};

export default function ServicesPage() {
  const heroRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });

  const heroY = useTransform(scrollYProgress, [0, 1], ["0%", "40%"]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.7], [1, 0]);
  const heroScale = useTransform(scrollYProgress, [0, 1], [1, 1.15]);

  const serviceIcons = [
    BarChart3,
    FileCheck,
    Calculator,
    Cpu,
    FileCheck,
    Shield,
    Users,
  ];

  return (
    <main className="min-h-screen overflow-x-hidden bg-white">
      <Header />

      {/* ============================================
          HERO SECTION - Enhanced with Better Image
      ============================================= */}
      <section
        ref={heroRef}
        className="relative min-h-[70vh] flex items-center justify-center overflow-hidden"
      >
        {/* Parallax Background - Better Image */}
        <motion.div
          style={{ y: heroY, scale: heroScale }}
          className="absolute inset-0 z-0"
        >
          {/* Dark gradient overlay for text readability */}
          <div className="absolute inset-0 bg-gradient-to-br from-black/75 via-primary-950/70 to-black/75 z-10" />
          <div className="absolute inset-0 bg-primary-900/40 z-10" />
          {/* Better Hero Image - Modern Office/Meeting */}
          <Image
            src="https://images.unsplash.com/photo-1554224154-26032ffc0d07?w=1920&h=1080&fit=crop"
            alt="Professional Financial Services Meeting"
            fill
            className="object-cover"
            priority
            quality={100}
          />
        </motion.div>

        {/* Animated Background Orbs */}
        <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
          <motion.div
            animate={{
              x: [0, 150, 0],
              y: [0, -100, 0],
              scale: [1, 1.2, 1],
            }}
            transition={{
              duration: 25,
              repeat: Infinity,
              ease: "linear",
            }}
            className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary-500/20 rounded-full blur-3xl"
          />
          <motion.div
            animate={{
              x: [0, -120, 0],
              y: [0, 80, 0],
              scale: [1, 1.3, 1],
            }}
            transition={{
              duration: 30,
              repeat: Infinity,
              ease: "linear",
            }}
            className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-primary-400/15 rounded-full blur-3xl"
          />
        </div>

        {/* Hero Content */}
        <motion.div
          style={{ opacity: heroOpacity }}
          className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8 py-20 relative z-10 text-center"
        >
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <span className="inline-flex items-center px-6 py-3 bg-white/10 backdrop-blur-md text-white rounded-full text-sm font-semibold mb-8 border border-white/20 shadow-xl">
              <span className="w-2.5 h-2.5 bg-green-400 rounded-full mr-3 animate-pulse" />
              Comprehensive Financial Solutions
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-8 leading-tight"
          >
            Our Services
            <span className="block mt-2 bg-gradient-to-r from-primary-300 via-white to-primary-300 bg-clip-text text-transparent">
              Tailored for Your Success
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.7 }}
            className="text-base sm:text-lg md:text-xl text-white/80 mb-12 max-w-3xl mx-auto leading-relaxed"
          >
            From auditing to tax consultancy, we offer end-to-end financial
            services tailored to your business needs with precision and
            expertise.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.9 }}
            className="flex flex-wrap justify-center gap-4 sm:gap-6"
          >
            <Link
              href="/contact"
              className="group px-8 sm:px-10 py-4 sm:py-5 bg-white text-primary-700 font-bold rounded-full hover:bg-primary-50 transition-all duration-300 shadow-2xl hover:shadow-white/20 flex items-center space-x-3 text-sm sm:text-base"
            >
              <span>Get Started</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              href="/about"
              className="px-8 sm:px-10 py-4 sm:py-5 bg-white/10 backdrop-blur-md text-white font-bold rounded-full border-2 border-white/30 hover:bg-white/20 transition-all duration-300 flex items-center space-x-3 text-sm sm:text-base"
            >
              <span>About Us</span>
              <ArrowRight className="w-5 h-5" />
            </Link>
          </motion.div>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 1 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10"
        >
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            className="flex flex-col items-center text-white/60"
          >
            <span className="text-xs sm:text-sm mb-2 font-medium">
              Scroll to explore
            </span>
            <ChevronDown className="w-6 h-6" />
          </motion.div>
        </motion.div>
      </section>

      {/* ============================================
          SERVICES GRID SECTION
      ============================================= */}
      <section className="section-padding bg-gradient-to-br from-secondary-50 via-white to-primary-50 relative overflow-hidden">
        {/* Background Decorations */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <motion.div
            animate={{
              x: [0, 50, 0],
              y: [0, 30, 0],
              scale: [1, 1.1, 1],
            }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            className="absolute -top-20 -right-20 w-80 h-80 bg-primary-200/30 rounded-full blur-3xl"
          />
          <motion.div
            animate={{
              x: [0, -40, 0],
              y: [0, 50, 0],
              scale: [1, 1.2, 1],
            }}
            transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
            className="absolute top-1/2 -left-20 w-72 h-72 bg-primary-300/20 rounded-full blur-3xl"
          />
          <div className="absolute inset-0 opacity-30">
            <div
              className="absolute inset-0"
              style={{
                backgroundImage:
                  "radial-gradient(circle at 2px 2px, rgba(59, 130, 246, 0.15) 1px, transparent 0)",
                backgroundSize: "48px 48px",
              }}
            />
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8 relative z-10">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
            className="text-center mb-16"
          >
            <motion.span
              variants={fadeInUp}
              className="inline-block px-5 py-2.5 bg-primary-100 text-primary-700 rounded-full text-sm font-bold mb-6"
            >
              What We Offer
            </motion.span>
            <motion.h2
              variants={fadeInUp}
              className="text-3xl sm:text-4xl md:text-5xl font-bold text-secondary-900 mb-6"
            >
              Comprehensive Financial Solutions
            </motion.h2>
            <motion.p
              variants={fadeInUp}
              className="text-base sm:text-lg text-secondary-600 max-w-3xl mx-auto leading-relaxed"
            >
              Our expertise spans across multiple domains, ensuring you receive
              holistic financial guidance tailored to your unique requirements.
            </motion.p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
            className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8"
          >
            {services.map((service, index) => {
              const IconComponent = serviceIcons[index % serviceIcons.length];
              return (
                <motion.div
                  key={index}
                  variants={fadeInUp}
                  whileHover={{ y: -12, transition: { duration: 0.3 } }}
                  className="group card bg-white/80 backdrop-blur-xl hover:shadow-2xl hover:shadow-primary-500/10 transition-all duration-500 border border-primary-100 overflow-hidden"
                >
                  <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary-500 to-primary-700 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500" />

                  <div className="relative p-6 sm:p-8">
                    <div className="w-16 h-16 bg-gradient-to-br from-primary-500 to-primary-700 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-6 transition-all duration-300 shadow-xl shadow-primary-500/30">
                      <IconComponent className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-secondary-900 mb-3">
                      {service.title}
                    </h3>
                    <p className="text-secondary-600 mb-6 line-clamp-3 leading-relaxed">
                      {service.description}
                    </p>
                    <Link
                      href="/contact"
                      className="text-primary-600 font-bold hover:text-primary-700 flex items-center space-x-2 group-hover:space-x-3 transition-all"
                    >
                      <span>Get Started</span>
                      <ArrowRight className="w-4 h-4" />
                    </Link>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* ============================================
          WHY CHOOSE OUR SERVICES
      ============================================= */}
      <section className="section-padding bg-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={staggerContainer}
              className="order-2 lg:order-1"
            >
              <div className="relative">
                <div className="absolute -top-4 -left-4 w-72 h-72 bg-primary-200 rounded-full blur-3xl opacity-50" />
                <div className="relative grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                  {[
                    {
                      icon: TrendingUp,
                      title: "Expert Team",
                      desc: "22+ Chartered Accountants",
                    },
                    {
                      icon: Shield,
                      title: "100% Compliance",
                      desc: "Statutory & Regulatory",
                    },
                    {
                      icon: Users,
                      title: "150+ Professionals",
                      desc: "Dedicated Support",
                    },
                    {
                      icon: CheckCircle,
                      title: "38+ Years",
                      desc: "Industry Experience",
                    },
                  ].map((item, index) => (
                    <motion.div
                      key={index}
                      variants={fadeInUp}
                      whileHover={{ scale: 1.05, y: -8 }}
                      className="card text-center p-5 sm:p-6 hover:border-primary-200 border-2 border-transparent transition-all duration-300"
                    >
                      <div className="w-14 h-14 bg-gradient-to-br from-primary-500 to-primary-700 rounded-xl flex items-center justify-center mx-auto mb-4 shadow-lg">
                        <item.icon className="w-7 h-7 text-white" />
                      </div>
                      <h3 className="text-base sm:text-lg font-bold text-secondary-900 mb-2">
                        {item.title}
                      </h3>
                      <p className="text-xs sm:text-sm text-secondary-600">
                        {item.desc}
                      </p>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={staggerContainer}
              className="order-1 lg:order-2"
            >
              <motion.span
                variants={fadeInUp}
                className="inline-block px-5 py-2.5 bg-primary-100 text-primary-700 rounded-full text-sm font-bold mb-6"
              >
                Why Choose Us
              </motion.span>
              <motion.h2
                variants={fadeInUp}
                className="text-3xl sm:text-4xl md:text-5xl font-bold text-secondary-900 mb-6 leading-tight"
              >
                Excellence in Every{" "}
                <span className="text-primary-600">Service</span>
              </motion.h2>
              <motion.p
                variants={fadeInUp}
                className="text-base sm:text-lg text-secondary-600 mb-8 leading-relaxed"
              >
                We combine deep expertise with cutting-edge tools to ensure our
                clients receive tailored, efficient, and high-quality solutions.
              </motion.p>

              <div className="space-y-6 mb-10">
                {[
                  {
                    title: "Client-Centric Approach",
                    desc: "We prioritize understanding your unique needs and delivering solutions that align with your objectives.",
                  },
                  {
                    title: "Excellence in Execution",
                    desc: "Our dedicated professionals work meticulously to ensure every project is executed with precision.",
                  },
                  {
                    title: "Technology Driven",
                    desc: "We embrace the latest technology to deliver enhanced value and efficiency to our clients.",
                  },
                ].map((item, index) => (
                  <motion.div
                    key={index}
                    variants={fadeInUp}
                    whileHover={{ x: 10 }}
                    className="flex items-start space-x-4 p-4 rounded-2xl hover:bg-secondary-50 transition-all duration-300"
                  >
                    <div className="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center flex-shrink-0">
                      <CheckCircle className="w-6 h-6 text-primary-600" />
                    </div>
                    <div>
                      <h4 className="font-bold text-secondary-900 mb-1">
                        {item.title}
                      </h4>
                      <p className="text-secondary-600 text-sm leading-relaxed">
                        {item.desc}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>

              <motion.div variants={fadeInUp}>
                <Link
                  href="/contact"
                  className="btn-primary inline-flex items-center space-x-2 group"
                >
                  <span>Get Started Today</span>
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Link>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ============================================
          CTA SECTION - Modern Glass White Design
      ============================================= */}
      <section className="section-padding bg-gradient-to-br from-secondary-50 via-white to-primary-50 relative overflow-hidden">
        {/* Background Decorations */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <motion.div
            animate={{
              x: [0, 80, 0],
              y: [0, -40, 0],
              scale: [1, 1.15, 1],
            }}
            transition={{ duration: 22, repeat: Infinity, ease: "linear" }}
            className="absolute -top-20 -right-20 w-96 h-96 bg-primary-200/40 rounded-full blur-3xl"
          />
          <motion.div
            animate={{
              x: [0, -60, 0],
              y: [0, 50, 0],
              scale: [1, 1.2, 1],
            }}
            transition={{ duration: 28, repeat: Infinity, ease: "linear" }}
            className="absolute -bottom-20 -left-20 w-80 h-80 bg-primary-300/30 rounded-full blur-3xl"
          />
          {/* Subtle Grid Pattern */}
          <div className="absolute inset-0 opacity-20">
            <div
              className="absolute inset-0"
              style={{
                backgroundImage:
                  "radial-gradient(circle at 2px 2px, rgba(59, 130, 246, 0.2) 1px, transparent 0)",
                backgroundSize: "50px 50px",
              }}
            />
          </div>
        </div>

        <div className="max-w-5xl mx-auto px-4 md:px-6 lg:px-8 relative z-10">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
          >
            {/* Main CTA Card - Glass White */}
            <motion.div
              variants={fadeInUp}
              className="relative bg-white/80 backdrop-blur-xl rounded-3xl sm:rounded-[2.5rem] p-8 sm:p-12 lg:p-16 border border-primary-100 shadow-2xl shadow-primary-500/10 overflow-hidden"
            >
              {/* Top Accent Line */}
              <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-primary-400 via-primary-600 to-primary-400" />

              {/* Corner Decorations */}
              <div className="absolute top-0 right-0 w-40 h-40 bg-gradient-to-br from-primary-100/50 to-transparent rounded-bl-full" />
              <div className="absolute bottom-0 left-0 w-40 h-40 bg-gradient-to-tr from-primary-100/50 to-transparent rounded-tr-full" />

              <div className="relative">
                {/* Icon Row */}
                <motion.div
                  variants={staggerContainer}
                  className="flex justify-center gap-4 mb-8"
                >
                  {[Star, Zap, Target].map((Icon, index) => (
                    <motion.div
                      key={index}
                      variants={fadeInUp}
                      className="w-12 h-12 bg-gradient-to-br from-primary-500 to-primary-700 rounded-xl flex items-center justify-center shadow-lg shadow-primary-500/30"
                    >
                      <Icon className="w-6 h-6 text-white" />
                    </motion.div>
                  ))}
                </motion.div>

                {/* Heading */}
                <motion.h2
                  variants={fadeInUp}
                  className="text-3xl sm:text-4xl md:text-5xl font-bold text-secondary-900 mb-6 text-center leading-tight"
                >
                  Ready to Transform
                  <span className="block text-primary-600">Your Business?</span>
                </motion.h2>

                {/* Description */}
                <motion.p
                  variants={fadeInUp}
                  className="text-base sm:text-lg text-secondary-600 mb-10 leading-relaxed text-center max-w-2xl mx-auto"
                >
                  Partner with RKP Associates to navigate complexities and
                  unlock new opportunities for growth. Let's build success
                  together.
                </motion.p>

                {/* Stats Row */}
                <motion.div
                  variants={staggerContainer}
                  className="grid grid-cols-3 gap-4 sm:gap-8 mb-10 max-w-xl mx-auto"
                >
                  {[
                    { value: "38+", label: "Years" },
                    { value: "150+", label: "Experts" },
                    { value: "500+", label: "Clients" },
                  ].map((stat, index) => (
                    <motion.div
                      key={index}
                      variants={fadeInUp}
                      className="text-center p-4 rounded-2xl bg-primary-50/50"
                    >
                      <div className="text-2xl sm:text-3xl font-bold text-primary-600 mb-1">
                        {stat.value}
                      </div>
                      <div className="text-xs sm:text-sm text-secondary-600 font-medium">
                        {stat.label}
                      </div>
                    </motion.div>
                  ))}
                </motion.div>

                {/* CTA Buttons */}
                <motion.div
                  variants={fadeInUp}
                  className="flex flex-col sm:flex-row items-center justify-center gap-4"
                >
                  <Link
                    href="/contact"
                    className="w-full sm:w-auto px-10 py-4 bg-primary-600 text-white font-bold rounded-full hover:bg-primary-700 transition-all duration-300 shadow-xl shadow-primary-500/30 flex items-center justify-center space-x-2 text-base sm:text-lg"
                  >
                    <span>Contact Us Today</span>
                    <ArrowRight className="w-5 h-5" />
                  </Link>
                  <Link
                    href="/services"
                    className="w-full sm:w-auto px-10 py-4 bg-white text-primary-600 font-bold rounded-full border-2 border-primary-200 hover:bg-primary-50 transition-all duration-300 flex items-center justify-center space-x-2 text-base sm:text-lg"
                  >
                    <span>View All Services</span>
                    <ArrowRight className="w-5 h-5" />
                  </Link>
                </motion.div>

                {/* Trust Badge */}
                <motion.div
                  variants={fadeInUp}
                  className="mt-10 pt-8 border-t border-primary-100 flex items-center justify-center space-x-6 text-sm text-secondary-500"
                >
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-green-500" />
                    <span>Free Consultation</span>
                  </div>
                  <div className="w-px h-4 bg-secondary-300" />
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-green-500" />
                    <span>24hr Response</span>
                  </div>
                  <div className="w-px h-4 bg-secondary-300" />
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-green-500" />
                    <span>Trusted Since 1986</span>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
