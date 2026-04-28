"use client";

import {
  motion,
  useScroll,
  useTransform,
  useSpring,
  AnimatePresence,
} from "framer-motion";
import { useRef, useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  CheckCircle,
  Phone,
  Mail,
  MapPin,
  TrendingUp,
  Shield,
  Users,
  Award,
  Star,
  ChevronDown,
  BarChart3,
  FileCheck,
  Calculator,
  Cpu,
  Clock,
  Target,
} from "lucide-react";
import Header from "@/components/ui/Header";
import Footer from "@/components/ui/Footer";
import {
  stats,
  expertise,
  services,
  commitments,
  connectWays,
} from "@/lib/data";

// Animation variants
const fadeInUp = {
  hidden: { opacity: 0, y: 80 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] },
  },
};

const fadeInLeft = {
  hidden: { opacity: 0, x: -80 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] },
  },
};

const fadeInRight = {
  hidden: { opacity: 0, x: 80 },
  visible: {
    opacity: 1,
    x: 0,
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

const scaleIn = {
  hidden: { opacity: 0, scale: 0.85 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
  },
};

export default function Home() {
  const heroRef = useRef<HTMLDivElement>(null);
  const aboutRef = useRef<HTMLDivElement>(null);
  const servicesRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });

  const heroY = useTransform(scrollYProgress, [0, 1], ["0%", "40%"]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.7], [1, 0]);
  const heroScale = useTransform(scrollYProgress, [0, 1], [1, 1.15]);

  const { scrollYProgress: aboutProgress } = useScroll({
    target: aboutRef,
    offset: ["start end", "end start"],
  });

  const aboutRotate = useTransform(aboutProgress, [0, 1], [-5, 5]);
  const aboutScale = useTransform(aboutProgress, [0, 1], [0.95, 1.05]);

  const [activeTestimonial, setActiveTestimonial] = useState(0);
  const [countedStats, setCountedStats] = useState(stats.map(() => 0));

  const testimonials = [
    {
      quote:
        "RKP Associates transformed our financial operations with their expert guidance and meticulous attention to detail. Their professionalism is unmatched.",
      author: "Rajesh Kumar",
      role: "CEO, TechCorp India",
      image:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face",
    },
    {
      quote:
        "Their tax consultancy services saved us significant amounts while ensuring complete compliance. Highly recommended for any business!",
      author: "Priya Sharma",
      role: "CFO, Global Industries",
      image:
        "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&fit=crop&crop=face",
    },
    {
      quote:
        "The internal audit process was seamless. Their team's professionalism and expertise exceeded our expectations in every way.",
      author: "Amit Patel",
      role: "Director, Patel Enterprises",
      image:
        "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop&crop=face",
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 6000);
    return () => clearInterval(interval);
  }, [testimonials.length]);

  // Counter animation for stats
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const duration = 2000;
            const steps = 60;
            const interval = duration / steps;

            stats.forEach((stat, index) => {
              const targetValue = parseInt(stat.number) || 10;
              let currentValue = 0;
              const increment = targetValue / steps;

              const counter = setInterval(() => {
                currentValue += increment;
                if (currentValue >= targetValue) {
                  currentValue = targetValue;
                  clearInterval(counter);
                }
                setCountedStats((prev) => {
                  const newStats = [...prev];
                  newStats[index] = Math.floor(currentValue);
                  return newStats;
                });
              }, interval);
            });

            observer.disconnect();
          }
        });
      },
      { threshold: 0.5 },
    );

    const statsElement = document.getElementById("stats-section");
    if (statsElement) observer.observe(statsElement);

    return () => observer.disconnect();
  }, []);

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
          HERO SECTION - Full Page Parallax
      ============================================= */}
      {/* Hero Section with Parallax */}
      <section
        ref={heroRef}
        className="relative min-h-screen flex items-center justify-center overflow-hidden"
      >
        {/* Parallax Background with Darker Overlay */}
        <motion.div
          style={{ y: heroY, scale: heroScale }}
          className="absolute inset-0 z-0"
        >
          {/* Darker gradient overlay for better text readability */}
          <div className="absolute inset-0 bg-gradient-to-br from-black/80 via-black/70 to-black/80 z-10" />
          <div className="absolute inset-0 bg-primary-950/60 z-10" />
          <Image
            src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1920&h=1080&fit=crop"
            alt="Modern Corporate Building"
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

        {/* Grid Pattern Overlay */}
        <div className="absolute inset-0 z-0 opacity-5">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage:
                "linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)",
              backgroundSize: "50px 50px",
            }}
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
              Established 1986 • Trusted by 500+ Clients Across India
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold text-white mb-8 leading-tight tracking-tight"
          >
            Empowering Growth Through
            <span className="block mt-2 bg-gradient-to-r from-primary-300 via-white to-primary-300 bg-clip-text text-transparent">
              Expert Financial Solutions
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.7 }}
            className="text-base sm:text-lg md:text-xl text-white/80 mb-12 max-w-3xl mx-auto leading-relaxed"
          >
            With nearly four decades of excellence, RKP Associates delivers
            unparalleled financial expertise, precision, and innovation tailored
            to your business needs.
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
              href="/services"
              className="px-8 sm:px-10 py-4 sm:py-5 bg-white/10 backdrop-blur-md text-white font-bold rounded-full border-2 border-white/30 hover:bg-white/20 transition-all duration-300 flex items-center space-x-3 text-sm sm:text-base"
            >
              <span>Our Services</span>
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

        {/* Floating Stats Cards - Desktop */}
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1.2 }}
          className="absolute bottom-0 left-0 right-0 z-10 hidden lg:block"
        >
          <div className="max-w-7xl mx-auto px-8 pb-8">
            <div className="grid grid-cols-4 gap-6 bg-white/10 backdrop-blur-xl rounded-3xl p-8 border border-white/20 shadow-2xl">
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1.4 + index * 0.1 }}
                  className="text-center group"
                >
                  <div className="text-4xl xl:text-5xl font-bold text-white mb-2 group-hover:text-primary-300 transition-colors">
                    {stat.number}
                  </div>
                  <div className="text-white/70 text-sm font-medium">
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </section>

      {/* ============================================
          ABOUT SECTION - Image Grid with Parallax
      ============================================= */}
      <section
        ref={aboutRef}
        className="section-padding bg-white relative overflow-hidden"
      >
        {/* Background Decorations */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-primary-100 rounded-full blur-3xl opacity-50 -translate-y-1/2 translate-x-1/2" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-primary-50 rounded-full blur-3xl opacity-50 translate-y-1/2 -translate-x-1/2" />

        <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={fadeInLeft}
            >
              <span className="inline-block px-5 py-2.5 bg-primary-100 text-primary-700 rounded-full text-sm font-bold mb-6">
                About Our Firm
              </span>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-secondary-900 mb-6 leading-tight">
                Nearly Four Decades of{" "}
                <span className="text-primary-600">Excellence</span>
              </h2>
              <p className="text-base sm:text-lg text-secondary-600 mb-8 leading-relaxed">
                Established in 1986, RKP Associates has built a reputation for
                excellence in Auditing and Assurance Services. Our dedicated
                team brings extensive expertise in Taxation, Financial Advisory,
                Legal Services, and Corporate Consultancy.
              </p>

              <div className="grid grid-cols-2 gap-6 mb-10">
                {[
                  {
                    icon: Shield,
                    label: "Statutory Compliance",
                    value: "100%",
                    color: "text-green-600",
                  },
                  {
                    icon: TrendingUp,
                    label: "Client Growth",
                    value: "95%",
                    color: "text-blue-600",
                  },
                  {
                    icon: Users,
                    label: "Team Strength",
                    value: "150+",
                    color: "text-purple-600",
                  },
                  {
                    icon: Award,
                    label: "Industry Awards",
                    value: "25+",
                    color: "text-amber-600",
                  },
                ].map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    whileHover={{ scale: 1.05, y: -5 }}
                    className="flex items-center space-x-4 p-4 rounded-2xl hover:bg-secondary-50 transition-all duration-300"
                  >
                    <div className="w-14 h-14 bg-gradient-to-br from-primary-500 to-primary-700 rounded-xl flex items-center justify-center shadow-lg">
                      <item.icon className="w-7 h-7 text-white" />
                    </div>
                    <div>
                      <div className={`text-2xl font-bold ${item.color}`}>
                        {item.value}
                      </div>
                      <div className="text-sm text-secondary-600 font-medium">
                        {item.label}
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>

              <Link
                href="/about"
                className="btn-primary inline-flex items-center space-x-2 group"
              >
                <span>Learn More About Us</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </motion.div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={fadeInRight}
              className="relative"
            >
              <motion.div
                style={{ rotate: aboutRotate, scale: aboutScale }}
                className="grid grid-cols-2 gap-4 sm:gap-6"
              >
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 }}
                  className="space-y-4 sm:space-y-6"
                >
                  <div className="relative h-48 sm:h-64 rounded-2xl sm:rounded-3xl overflow-hidden shadow-2xl group">
                    <Image
                      src="https://images.unsplash.com/photo-1556761175-b413da4baf72?w=600&h=400&fit=crop"
                      alt="Team Meeting"
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </div>
                  <div className="relative h-36 sm:h-48 rounded-2xl sm:rounded-3xl overflow-hidden shadow-2xl group">
                    <Image
                      src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=600&h=400&fit=crop"
                      alt="Office Work"
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </div>
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.4 }}
                  className="space-y-4 sm:space-y-6 pt-12 sm:pt-16"
                >
                  <div className="relative h-36 sm:h-48 rounded-2xl sm:rounded-3xl overflow-hidden shadow-2xl group">
                    <Image
                      src="https://images.unsplash.com/photo-1551434678-e076c223a692?w=600&h=400&fit=crop"
                      alt="Financial Analysis"
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </div>
                  <div className="relative h-48 sm:h-64 rounded-2xl sm:rounded-3xl overflow-hidden shadow-2xl group">
                    <Image
                      src="https://images.unsplash.com/photo-1552664730-d307ca884978?w=600&h=400&fit=crop"
                      alt="Team Collaboration"
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </div>
                </motion.div>
              </motion.div>

              {/* Experience Badge */}
              <motion.div
                initial={{ scale: 0, rotate: -180 }}
                whileInView={{ scale: 1, rotate: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.6, type: "spring", stiffness: 200 }}
                className="absolute -bottom-6 -left-6 bg-gradient-to-br from-primary-600 to-primary-800 text-white rounded-2xl sm:rounded-3xl p-6 shadow-2xl"
              >
                <div className="text-4xl sm:text-5xl font-bold">38+</div>
                <div className="text-primary-100 text-sm sm:text-base font-medium">
                  Years of Excellence
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ============================================
    SERVICES SECTION - Redesigned
============================================= */}
      <section
        ref={servicesRef}
        className="section-padding bg-gradient-to-br from-secondary-50 via-white to-primary-50 relative overflow-hidden"
      >
        {/* Modern Background Decorations - Replaced Triangle */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {/* Subtle gradient orb 1 */}
          <motion.div
            animate={{
              x: [0, 50, 0],
              y: [0, 30, 0],
              scale: [1, 1.1, 1],
            }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            className="absolute -top-20 -right-20 w-96 h-96 bg-primary-200/30 rounded-full blur-3xl"
          />
          {/* Subtle gradient orb 2 */}
          <motion.div
            animate={{
              x: [0, -40, 0],
              y: [0, 50, 0],
              scale: [1, 1.2, 1],
            }}
            transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
            className="absolute top-1/2 -left-20 w-80 h-80 bg-primary-300/20 rounded-full blur-3xl"
          />
          {/* Subtle gradient orb 3 */}
          <motion.div
            animate={{
              x: [0, 30, 0],
              y: [0, -40, 0],
            }}
            transition={{ duration: 22, repeat: Infinity, ease: "linear" }}
            className="absolute -bottom-20 right-1/3 w-72 h-72 bg-primary-100/40 rounded-full blur-3xl"
          />
          {/* Subtle dot pattern */}
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
              Our Services
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
              From auditing to tax consultancy, we offer end-to-end financial
              services tailored to your business needs.
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
                  className="group card bg-white hover:shadow-2xl transition-all duration-500 border border-secondary-100 overflow-hidden"
                >
                  <div className="relative p-6 sm:p-8">
                    {/* Subtle hover gradient effect */}
                    <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary-500 to-primary-700 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500" />

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
                      href="/services"
                      className="text-primary-600 font-bold hover:text-primary-700 flex items-center space-x-2 group-hover:space-x-3 transition-all"
                    >
                      <span>Learn More</span>
                      <ArrowRight className="w-4 h-4" />
                    </Link>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mt-12"
          >
            <Link
              href="/services"
              className="btn-primary inline-flex items-center space-x-2 group"
            >
              <span>View All Services</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* ============================================
    WHY CHOOSE US SECTION - Fixed Mobile Grid
============================================= */}
      <section className="section-padding bg-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={fadeInLeft}
              className="order-2 lg:order-1"
            >
              <div className="relative">
                <div className="absolute -top-4 -left-4 w-72 h-72 bg-primary-200 rounded-full blur-3xl opacity-50" />

                {/* Changed from grid-cols-2 to grid-cols-1 on mobile */}
                <div className="relative grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                  {expertise.map((item, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, scale: 0.9 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 }}
                      whileHover={{ scale: 1.05, y: -8 }}
                      className="card text-center p-5 sm:p-6 hover:border-primary-200 border-2 border-transparent transition-all duration-300"
                    >
                      <div className="w-14 h-14 bg-gradient-to-br from-primary-500 to-primary-700 rounded-xl flex items-center justify-center mx-auto mb-4 shadow-lg">
                        <CheckCircle className="w-7 h-7 text-white" />
                      </div>
                      <h3 className="text-base sm:text-lg font-bold text-secondary-900 mb-2">
                        {item.title}
                      </h3>
                      <p className="text-xs sm:text-sm text-secondary-600 leading-relaxed">
                        {item.description}
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
              variants={fadeInRight}
              className="order-1 lg:order-2"
            >
              <span className="inline-block px-5 py-2.5 bg-primary-100 text-primary-700 rounded-full text-sm font-bold mb-6">
                Why Choose Us
              </span>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-secondary-900 mb-6 leading-tight">
                We Focus on Your{" "}
                <span className="text-primary-600">Success</span>
              </h2>
              <p className="text-base sm:text-lg text-secondary-600 mb-8 leading-relaxed">
                We focus on your professional strengths without breaching the
                Code of Ethics. Our commitment to quality and integrity sets us
                apart.
              </p>

              <div className="space-y-6 mb-10">
                {commitments.map((commitment, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    whileHover={{ x: 10 }}
                    className="flex items-start space-x-4 p-4 rounded-2xl hover:bg-secondary-50 transition-all duration-300"
                  >
                    <div className="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center flex-shrink-0">
                      <CheckCircle className="w-6 h-6 text-primary-600" />
                    </div>
                    <div>
                      <h4 className="font-bold text-secondary-900 mb-1">
                        {commitment.title}
                      </h4>
                      <p className="text-secondary-600 text-sm leading-relaxed">
                        {commitment.description}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>

              <Link
                href="/about"
                className="btn-secondary inline-flex items-center space-x-2 group"
              >
                <span>Discover More</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ============================================
          TESTIMONIALS SECTION
      ============================================= */}
      <section className="section-padding bg-secondary-900 text-white relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-96 h-96 bg-primary-500 rounded-full blur-3xl" />
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-primary-600 rounded-full blur-3xl" />
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
              className="inline-block px-5 py-2.5 bg-white/10 text-white rounded-full text-sm font-bold mb-6"
            >
              Testimonials
            </motion.span>
            <motion.h2
              variants={fadeInUp}
              className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6"
            >
              What Our Clients Say
            </motion.h2>
          </motion.div>

          <div className="max-w-4xl mx-auto">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeTestimonial}
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -50 }}
                transition={{ duration: 0.5 }}
                className="card bg-white/10 backdrop-blur-xl border border-white/20 p-8 sm:p-12"
              >
                <div className="flex items-center justify-center mb-8">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-6 h-6 text-yellow-400 fill-yellow-400"
                    />
                  ))}
                </div>
                <p className="text-lg sm:text-xl md:text-2xl text-white/90 text-center mb-8 leading-relaxed italic">
                  "{testimonials[activeTestimonial].quote}"
                </p>
                <div className="flex items-center justify-center space-x-4">
                  <div className="w-16 h-16 rounded-full overflow-hidden border-2 border-white/30">
                    <Image
                      src={testimonials[activeTestimonial].image}
                      alt={testimonials[activeTestimonial].author}
                      width={64}
                      height={64}
                      className="object-cover"
                    />
                  </div>
                  <div className="text-left">
                    <div className="font-bold text-white">
                      {testimonials[activeTestimonial].author}
                    </div>
                    <div className="text-white/60 text-sm">
                      {testimonials[activeTestimonial].role}
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Testimonial Indicators */}
            <div className="flex justify-center space-x-3 mt-8">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setActiveTestimonial(index)}
                  className={`h-2.5 rounded-full transition-all duration-500 ${
                    activeTestimonial === index
                      ? "bg-white w-10"
                      : "bg-white/30 w-2.5 hover:bg-white/50"
                  }`}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ============================================
    CONNECT SECTION - Compact Light Glass Design
============================================= */}
      <section className="section-padding bg-gradient-to-br from-secondary-50 via-white to-primary-50 relative overflow-hidden">
        {/* Subtle Background Decorations */}
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
          {/* Header - Compact */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={staggerContainer}
            className="text-center mb-10"
          >
            <motion.span
              variants={fadeInUp}
              className="inline-block px-5 py-2 bg-primary-100 text-primary-700 rounded-full text-sm font-bold mb-4"
            >
              Get In Touch
            </motion.span>
            <motion.h2
              variants={fadeInUp}
              className="text-2xl sm:text-3xl md:text-4xl font-bold text-secondary-900 mb-3"
            >
              Connect With Us
            </motion.h2>
            <motion.p
              variants={fadeInUp}
              className="text-sm sm:text-base text-secondary-600 max-w-xl mx-auto"
            >
              Ready to transform your business? Reach out through any channel
              below.
            </motion.p>
          </motion.div>

          {/* Contact Cards - Compact Grid */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={staggerContainer}
            className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-6"
          >
            {/* Phone Card */}
            <motion.a
              href="tel:+919435565649"
              variants={fadeInUp}
              whileHover={{ y: -8, scale: 1.02 }}
              className="group relative bg-white/80 backdrop-blur-xl rounded-2xl p-5 lg:p-6 border border-primary-100 hover:border-primary-300 hover:shadow-xl hover:shadow-primary-500/10 transition-all duration-300 overflow-hidden"
            >
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-green-400 to-green-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300" />

              <div className="flex items-center space-x-4">
                <div className="w-14 h-14 bg-gradient-to-br from-green-400 to-green-600 rounded-xl flex items-center justify-center flex-shrink-0 shadow-lg shadow-green-500/30 group-hover:scale-110 transition-transform duration-300">
                  <Phone className="w-7 h-7 text-white" />
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="text-base font-bold text-secondary-900 mb-1">
                    Call Us
                  </h3>
                  <a
                    href="tel:+919435565649"
                    className="text-sm sm:text-base font-bold text-primary-600 hover:text-primary-700 transition-colors"
                  >
                    +91 94355 65649
                  </a>
                  <p className="text-xs text-secondary-500 mt-1">Tap to call</p>
                </div>
              </div>
            </motion.a>

            {/* Email Card */}
            <motion.a
              href="mailto:info@rkpassociates.in"
              variants={fadeInUp}
              whileHover={{ y: -8, scale: 1.02 }}
              className="group relative bg-white/80 backdrop-blur-xl rounded-2xl p-5 lg:p-6 border border-primary-100 hover:border-primary-300 hover:shadow-xl hover:shadow-primary-500/10 transition-all duration-300 overflow-hidden"
            >
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-400 to-blue-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300" />

              <div className="flex items-center space-x-4">
                <div className="w-14 h-14 bg-gradient-to-br from-blue-400 to-blue-600 rounded-xl flex items-center justify-center flex-shrink-0 shadow-lg shadow-blue-500/30 group-hover:scale-110 transition-transform duration-300">
                  <Mail className="w-7 h-7 text-white" />
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="text-base font-bold text-secondary-900 mb-1">
                    Email Us
                  </h3>
                  <a
                    href="mailto:info@rkpassociates.in"
                    className="text-sm font-bold text-primary-600 hover:text-primary-700 transition-colors truncate block"
                  >
                    info@rkpassociates.in
                  </a>
                  <p className="text-xs text-secondary-500 mt-1">
                    We reply within 24hrs
                  </p>
                </div>
              </div>
            </motion.a>

            {/* Visit Offices Card - FIXED */}
            <Link
              href="/contact"
              className="group relative bg-white/80 backdrop-blur-xl rounded-2xl p-5 lg:p-6 border border-primary-100 hover:border-primary-300 hover:shadow-xl hover:shadow-primary-500/10 transition-all duration-300 overflow-hidden block"
            >
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-purple-400 to-purple-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300" />

              <div className="flex items-center space-x-4">
                <div className="w-14 h-14 bg-gradient-to-br from-purple-400 to-purple-600 rounded-xl flex items-center justify-center flex-shrink-0 shadow-lg shadow-purple-500/30 group-hover:scale-110 transition-transform duration-300">
                  <MapPin className="w-7 h-7 text-white" />
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="text-base font-bold text-secondary-900 mb-1">
                    Visit Offices
                  </h3>
                  <p className="text-sm font-medium text-secondary-700">
                    Multiple Locations
                  </p>
                  <p className="text-xs text-secondary-500 mt-1">
                    Across India
                  </p>
                </div>
              </div>
            </Link>
          </motion.div>

          {/* Business Hours & Reach Out - Compact Inline */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            {/* Business Hours */}
            <div className="flex items-center space-x-4 px-5 py-2.5 bg-white/80 backdrop-blur-md rounded-full border border-primary-100">
              <Clock className="w-4 h-4 text-primary-600" />
              <span className="text-secondary-700 text-sm font-medium">
                Mon - Fri: 9AM - 6PM
              </span>
              <span className="text-secondary-400">|</span>
              <span className="text-secondary-700 text-sm font-medium">
                Sat: 9AM - 1PM
              </span>
            </div>

            {/* Reach Out CTA */}
            <Link
              href="/contact"
              className="flex items-center space-x-2 px-5 py-2.5 bg-primary-600 text-white rounded-full hover:bg-primary-700 transition-all duration-300 font-semibold text-sm shadow-lg shadow-primary-500/30"
            >
              <span>Reach Out to Office</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
