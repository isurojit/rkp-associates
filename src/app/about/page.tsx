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
  Sparkles,
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
      <section className="relative section-padding overflow-hidden bg-gradient-to-br from-slate-50 via-white to-primary-50">
        {/* Decorative Background */}
        <div className="absolute top-0 left-0 w-72 h-72 bg-primary-100 rounded-full blur-3xl opacity-30" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-primary-200 rounded-full blur-3xl opacity-20" />

        <div className="max-w-7xl mx-auto relative z-10">
          {/* Heading */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <span className="inline-block px-4 py-2 rounded-full bg-primary-100 text-primary-700 text-sm font-semibold mb-4">
              Our Purpose
            </span>

            <h2 className="text-4xl md:text-5xl font-bold text-secondary-900 mb-4">
              Vision & Mission
            </h2>

            <p className="max-w-3xl mx-auto text-secondary-600 text-lg">
              Guided by integrity, expertise, and innovation, we strive to
              empower businesses with trusted financial and advisory solutions.
            </p>
          </motion.div>

          {/* Cards */}
          <div className="grid lg:grid-cols-2 gap-8">
            {/* Vision Card */}
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              whileHover={{ y: -8 }}
              className="group relative bg-white rounded-3xl p-8 border border-slate-200 shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-40 h-40 bg-primary-50 rounded-full blur-3xl opacity-50" />

              <div className="relative z-10">
                <div className="w-16 h-16 bg-primary-600 rounded-2xl flex items-center justify-center mb-6">
                  <Target className="w-8 h-8 text-white" />
                </div>

                <h3 className="text-3xl font-bold text-secondary-900 mb-6">
                  Our Vision
                </h3>

                <blockquote className="text-xl italic text-secondary-700 leading-relaxed border-l-4 border-primary-600 pl-5">
                  "{vision}"
                </blockquote>
              </div>
            </motion.div>

            {/* Mission Card */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              whileHover={{ y: -8 }}
              className="group relative bg-white rounded-3xl p-8 border border-slate-200 shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden"
            >
              <div className="absolute bottom-0 left-0 w-40 h-40 bg-primary-50 rounded-full blur-3xl opacity-50" />

              <div className="relative z-10">
                <div className="w-16 h-16 bg-primary-600 rounded-2xl flex items-center justify-center mb-6">
                  <Lightbulb className="w-8 h-8 text-white" />
                </div>

                <h3 className="text-3xl font-bold text-secondary-900 mb-6">
                  Our Mission
                </h3>

                <p className="text-secondary-600 leading-relaxed mb-8">
                  {mission}
                </p>

                {/* Core Values */}
                <div className="grid grid-cols-2 gap-3">
                  {["Integrity", "Excellence", "Trust", "Innovation"].map(
                    (value, index) => (
                      <motion.div
                        key={value}
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ delay: index * 0.1 }}
                        viewport={{ once: true }}
                        className="bg-primary-50 rounded-xl px-4 py-3 text-sm font-medium text-primary-700 text-center"
                      >
                        {value}
                      </motion.div>
                    ),
                  )}
                </div>
              </div>
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
          {/* Heading */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="inline-block px-4 py-2 rounded-full bg-primary-100 text-primary-700 text-sm font-semibold mb-4">
              Leadership Team
            </span>

            <h2 className="text-4xl md:text-5xl font-bold text-secondary-900 mb-5">
              Meet Our Partners
            </h2>

            <p className="max-w-3xl mx-auto text-secondary-600 text-lg leading-relaxed">
              Our experienced partners bring deep expertise in taxation, audit,
              compliance, and strategic advisory, helping businesses navigate
              complex financial and regulatory landscapes with confidence.
            </p>
          </motion.div>

          {/* Cards */}
          <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-8">
            {partners.map((partner, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
                className="group bg-white rounded-3xl border border-slate-200 overflow-hidden hover:-translate-y-2 hover:shadow-2xl hover:border-primary-200 transition-all duration-300"
              >
                {/* Image Section */}
                <div className="relative bg-gradient-to-b from-slate-50 to-white">
                  <div className="h-[380px] flex items-center justify-center p-4 overflow-hidden">
                    <img
                      src={partner.image}
                      alt={partner.name}
                      className="max-h-full max-w-full object-contain transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                </div>

                {/* Content */}
                <div className="p-7">
                  <h3 className="text-2xl font-bold text-secondary-900">
                    {partner.name}
                  </h3>

                  <p className="text-primary-600 font-semibold mt-1">
                    {partner.role}
                  </p>

                  <div className="w-16 h-1 rounded-full bg-primary-600 mt-5 mb-5"></div>

                  {/* Badges */}
                  <div className="flex flex-wrap gap-2 mb-5">
                    <span className="px-3 py-1.5 bg-primary-50 text-primary-700 rounded-full text-sm font-medium">
                      {partner.experience}
                    </span>

                    <span className="px-3 py-1.5 bg-slate-100 text-slate-700 rounded-full text-sm">
                      Partner
                    </span>
                  </div>

                  {/* Expertise */}
                  <div className="bg-slate-50 rounded-xl p-4 mb-6">
                    <p className="text-xs uppercase tracking-wider text-secondary-500 font-semibold mb-2">
                      Expertise
                    </p>

                    <p className="text-secondary-700 text-sm leading-relaxed">
                      {partner.expertise}
                    </p>
                  </div>

                  {/* CTA */}
                  <Link
                    href={`/partners/${partner.slug}`}
                    className="inline-flex items-center gap-2 font-semibold text-primary-600 hover:text-primary-700 transition-all"
                  >
                    View Profile
                    <ArrowRight
                      size={18}
                      className="transition-transform duration-300 group-hover:translate-x-1"
                    />
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA SECTION */}
      <section className="relative overflow-hidden py-24 bg-gradient-to-br from-slate-50 via-white to-primary-50">
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage:
              "linear-gradient(#2563eb 1px, transparent 1px), linear-gradient(to right, #2563eb 1px, transparent 1px)",
            backgroundSize: "40px 40px",
          }}
        />
        {/* Floating Particles */}
        {[...Array(12)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full bg-primary-200/40"
            style={{
              width: `${Math.random() * 12 + 6}px`,
              height: `${Math.random() * 12 + 6}px`,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -30, 0],
              opacity: [0.2, 0.8, 0.2],
            }}
            transition={{
              duration: Math.random() * 4 + 4,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        ))}

        {/* Background Blobs */}
        <div className="absolute top-0 left-0 w-96 h-96 bg-primary-100 rounded-full blur-3xl opacity-40" />

        <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-primary-200 rounded-full blur-3xl opacity-20" />

        <div className="max-w-6xl mx-auto px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="
        backdrop-blur-xl
        bg-white/60
        border
        border-white/50
        rounded-[32px]
        shadow-[0_20px_80px_rgba(0,0,0,0.08)]
        p-10 md:p-16
        text-center
      "
          >
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary-100 text-primary-700 text-sm font-medium mb-6">
              <Sparkles size={16} />
              Let's Build Success Together
            </div>

            {/* Heading */}
            <h2 className="text-4xl md:text-6xl font-bold text-secondary-900 mb-6">
              Ready to Grow Your
              <span className="block text-primary-600">
                Business With Confidence?
              </span>
            </h2>

            {/* Description */}
            <p className="max-w-3xl mx-auto text-lg text-secondary-600 leading-relaxed mb-12">
              Whether you're launching a startup, expanding operations, or
              ensuring compliance, our team provides strategic guidance, expert
              financial solutions, and long-term support to help your business
              thrive.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-5 mb-12">
              {[
                ["15+", "Years Experience"],
                ["500+", "Clients Served"],
                ["100%", "Commitment"],
                ["PAN", "India Services"],
              ].map(([value, label]) => (
                <motion.div
                  key={label}
                  whileHover={{ y: -5 }}
                  className="
              bg-white/70
              backdrop-blur-md
              border border-white/60
              rounded-2xl
              p-5
            "
                >
                  <div className="text-3xl font-bold text-primary-600">
                    {value}
                  </div>

                  <div className="text-sm text-secondary-600 mt-1">{label}</div>
                </motion.div>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.a
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
                href="/contact"
                className="
            inline-flex items-center justify-center gap-2
            px-8 py-4
            rounded-xl
            bg-primary-600
            text-white
            font-semibold
            shadow-lg
          "
              >
                Schedule Consultation
                <ArrowRight size={18} />
              </motion.a>

              <motion.a
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
                href="/services"
                className="
            inline-flex items-center justify-center
            px-8 py-4
            rounded-xl
            border
            border-primary-200
            bg-white/70
            backdrop-blur-md
            text-secondary-900
            font-semibold
          "
              >
                Explore Services
              </motion.a>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
