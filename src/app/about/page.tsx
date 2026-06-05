"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { Award, Users, Target, Lightbulb } from "lucide-react";
import Header from "@/components/ui/Header";
import Footer from "@/components/ui/Footer";
import { partners, teamComposition, vision, mission } from "@/lib/data";
import Link from "next/link";
import Image from "next/image";
import {
  ArrowRight,
  CheckCircle,
  ChevronDown,
  BarChart3,
  FileCheck,
  Calculator,
  Cpu,
  Shield,
  TrendingUp,
  Star,
  Zap,
} from "lucide-react";

export default function AboutPage() {
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
    <main className="min-h-screen">
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
            src="https://images.unsplash.com/photo-1707157284454-553ef0a4ed0d?w=1920&h=1080&fit=crop"
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
              Established 1986
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-8 leading-tight"
          >
            <span className="block mt-2 bg-gradient-to-r from-primary-300 via-white to-primary-300 bg-clip-text text-transparent">
              About RKP Associates
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.7 }}
            className="text-base sm:text-lg md:text-xl text-white/80 mb-12 max-w-3xl mx-auto leading-relaxed"
          >
            With nearly four decades of experience, RKP Associates prides itself
            on its profound understanding of audit and compliance consultancy.
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
              href="#partners"
              className="px-8 sm:px-10 py-4 sm:py-5 bg-white/10 backdrop-blur-md text-white font-bold rounded-full border-2 border-white/30 hover:bg-white/20 transition-all duration-300 flex items-center space-x-3 text-sm sm:text-base"
            >
              <span>Know Our Partners</span>
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

      {/* Story Section */}
      <section className="section-padding bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-bold text-secondary-900 mb-6">
                Our Story
              </h2>
              <p className="text-secondary-600 mb-6 leading-relaxed">
                Established in 1986, RKP Associates has built a reputation for
                excellence in Auditing and Assurance Services, encompassing both
                Internal and Statutory Audits. Our dedicated team of experienced
                professionals brings extensive expertise in Taxation, Financial
                Advisory, Legal Services, and Corporate Consultancy.
              </p>
              <p className="text-secondary-600 mb-6 leading-relaxed">
                We specialize in providing comprehensive IT-related services,
                including IT Control and Application Control Assessment,
                Implementation of the Internal Financial Control (IFC) and IFC
                Framework, Evaluation of ERP implementation effectiveness across
                various platforms, including SAP and Oracle, and Segregation of
                Duties and Continuous Control Monitoring utilizing Robotic
                Process Automation (RPA).
              </p>
              <p className="text-secondary-600 leading-relaxed">
                With nearly four decades of experience, RKP Associates prides
                itself on its profound understanding of audit and compliance
                consultancy. We are committed to identifying weaknesses in
                internal controls and ensuring robust statutory compliance to
                safeguard our clients against potential legal repercussions.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="grid grid-cols-2 gap-4"
            >
              <div className="card text-center">
                <div className="text-4xl font-bold text-primary-600 mb-2">
                  38+
                </div>
                <div className="text-secondary-600">Years of Experience</div>
              </div>
              <div className="card text-center">
                <div className="text-4xl font-bold text-primary-600 mb-2">
                  150+
                </div>
                <div className="text-secondary-600">Team Members</div>
              </div>
              <div className="card text-center">
                <div className="text-4xl font-bold text-primary-600 mb-2">
                  22
                </div>
                <div className="text-secondary-600">Chartered Accountants</div>
              </div>
              <div className="card text-center">
                <div className="text-4xl font-bold text-primary-600 mb-2">
                  Multiple
                </div>
                <div className="text-secondary-600">Locations</div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="section-padding gradient-bg">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="card"
            >
              <div className="w-14 h-14 bg-primary-600 rounded-xl flex items-center justify-center mb-6">
                <Target className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-secondary-900 mb-4">
                Vision
              </h3>
              <p className="text-lg text-secondary-600 italic">"{vision}"</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="card"
            >
              <div className="w-14 h-14 bg-primary-600 rounded-xl flex items-center justify-center mb-6">
                <Lightbulb className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-secondary-900 mb-4">
                Mission
              </h3>
              <p className="text-secondary-600 leading-relaxed">{mission}</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Team Composition */}
      <section className="section-padding bg-white">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-secondary-900 mb-4">
              Our Team Composition
            </h2>
            <p className="text-lg text-secondary-600 max-w-2xl mx-auto">
              We are proud to have a diverse and highly skilled team of
              professionals dedicated to delivering excellence.
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {teamComposition.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                className={`card text-center ${item.role === "TOTAL" ? "bg-primary-600 text-white col-span-2 md:col-span-1" : ""}`}
              >
                <div
                  className={`text-3xl font-bold mb-2 ${item.role === "TOTAL" ? "text-white" : "text-primary-600"}`}
                >
                  {item.count}
                </div>
                <div
                  className={`text-sm ${item.role === "TOTAL" ? "text-primary-100" : "text-secondary-600"}`}
                >
                  {item.role}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Partners */}
      <section className="section-padding gradient-bg" id="partners">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-secondary-900 mb-4">
              Our Partners
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {partners.map((partner, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 group"
              >
                <div className="relative h-80 overflow-hidden">
                  <img
                    src={partner.image}
                    alt={partner.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />

                  <div className="absolute top-4 right-4 bg-primary-600 text-white text-xs px-3 py-1 rounded-full">
                    {partner.experience}
                  </div>
                </div>

                <div className="p-6">
                  <h3 className="text-xl font-bold text-secondary-900">
                    {partner.name}
                  </h3>

                  <p className="text-primary-600 font-medium mt-1">
                    {partner.role}
                  </p>

                  <div className="w-12 h-1 bg-primary-600 rounded-full mt-4"></div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-primary-600 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold mb-6"
          >
            Partner With Us
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-lg text-primary-100 mb-8"
          >
            Experience the difference of working with a team that truly cares
            about your success.
          </motion.p>
          <motion.a
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            href="/contact"
            className="px-8 py-4 bg-white text-primary-600 font-semibold rounded-lg hover:bg-primary-50 transition-all duration-300 inline-block"
          >
            Get in Touch
          </motion.a>
        </div>
      </section>

      <Footer />
    </main>
  );
}
