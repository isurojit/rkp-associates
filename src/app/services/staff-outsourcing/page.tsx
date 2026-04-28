"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  CheckCircle,
  ChevronDown,
  Users,
  Shield,
  Briefcase,
  GraduationCap,
  TrendingUp,
  Heart,
} from "lucide-react";
import Header from "@/components/ui/Header";
import Footer from "@/components/ui/Footer";

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
    transition: { staggerChildren: 0.12, delayChildren: 0.2 },
  },
};

export default function StaffOutsourcing() {
  const heroRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });
  const heroY = useTransform(scrollYProgress, [0, 1], ["0%", "40%"]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.7], [1, 0]);

  return (
    <main className="min-h-screen overflow-x-hidden bg-white">
      <Header />

      {/* Hero Section */}
      <section
        ref={heroRef}
        className="relative min-h-[60vh] flex items-center justify-center overflow-hidden"
      >
        <motion.div style={{ y: heroY }} className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-br from-black/75 via-primary-950/70 to-black/75 z-10" />
          <Image
            src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=1920&h=1080&fit=crop"
            alt="Staff Outsourcing Co-Working"
            fill
            className="object-cover"
            priority
            quality={100}
          />
        </motion.div>

        <motion.div
          style={{ opacity: heroOpacity }}
          className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8 py-20 relative z-10 text-center"
        >
          <motion.span
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="inline-flex items-center px-6 py-3 bg-white/10 backdrop-blur-md text-white rounded-full text-sm font-semibold mb-8 border border-white/20"
          >
            <Users className="w-4 h-4 mr-2" />
            Staff Outsourcing Services
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6"
          >
            Staff Outsourcing / Co-Working
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.7 }}
            className="text-lg md:text-xl text-white/80 max-w-3xl mx-auto"
          >
            Providing relevant resources with adequate training and skill set to
            cater to your customized needs.
          </motion.p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10"
        >
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="flex flex-col items-center text-white/60"
          >
            <ChevronDown className="w-6 h-6" />
          </motion.div>
        </motion.div>
      </section>

      {/* Content Section */}
      <section className="section-padding bg-gradient-to-br from-secondary-50 via-white to-primary-50">
        <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="grid lg:grid-cols-3 gap-12"
          >
            <div className="lg:col-span-2 space-y-8">
              <motion.div variants={fadeInUp}>
                <h2 className="text-3xl font-bold text-secondary-900 mb-6">
                  How We Can Help You?
                </h2>
                <p className="text-lg text-secondary-600 leading-relaxed mb-6">
                  Acquiring and retaining relevant resources has become
                  increasingly complex in today's dynamic environment, with ever
                  changing technical skill set requirements. At RKP, our staff
                  outsourcing / co-working services aim to provide relevant
                  resources with adequate training and skill set to cater the
                  customized need of our clients.
                </p>
                <p className="text-lg text-secondary-600 leading-relaxed">
                  We understand specific requirements of our client and provide
                  relevant resources based on our understanding of job to be
                  performed so that deliverables of various projects can be
                  delivered on timely basis with quality exceeding expectations.
                </p>
              </motion.div>

              <motion.div variants={fadeInUp}>
                <h3 className="text-2xl font-bold text-secondary-900 mb-6">
                  What We Do
                </h3>
                <div className="space-y-4">
                  {[
                    {
                      icon: Briefcase,
                      title: "On/Off Site Staffing",
                      text: "Providing on/off site staff with relevant skill sets tailored to your project requirements.",
                    },
                    {
                      icon: GraduationCap,
                      title: "Regular Training",
                      text: "Providing regular trainings to staff for acceleration in various tools for better quality outcome.",
                    },
                    {
                      icon: Shield,
                      title: "Resource Continuity",
                      text: "Ensuring continuity of relevant resources for long-term period through knowledge transfer and regular monitoring.",
                    },
                    {
                      icon: TrendingUp,
                      title: "CFO Services",
                      text: "Expert CFO services for strategic financial planning and decision making.",
                    },
                    {
                      icon: CheckCircle,
                      title: "Certifications",
                      text: "Professional certifications and compliance documentation support.",
                    },
                  ].map((item, index) => (
                    <motion.div
                      key={index}
                      whileHover={{ x: 8 }}
                      className="p-6 bg-white rounded-xl shadow-sm border border-primary-100"
                    >
                      <div className="flex items-start space-x-4">
                        <div className="w-12 h-12 bg-gradient-to-br from-primary-500 to-primary-700 rounded-xl flex items-center justify-center flex-shrink-0">
                          <item.icon className="w-6 h-6 text-white" />
                        </div>
                        <div>
                          <h4 className="text-lg font-bold text-secondary-900 mb-2">
                            {item.title}
                          </h4>
                          <p className="text-secondary-600">{item.text}</p>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </div>

            <div className="space-y-8">
              <motion.div
                variants={fadeInUp}
                className="bg-white rounded-2xl p-6 shadow-xl border border-primary-100"
              >
                <h3 className="text-xl font-bold text-secondary-900 mb-6 flex items-center">
                  <Users className="w-6 h-6 text-primary-600 mr-2" />
                  Outsourcing Team
                </h3>
                <div className="space-y-4">
                  {[
                    { role: "Partners", count: 2 },
                    { role: "Qualified Assistants", count: 3 },
                    { role: "Audit Assistants", count: 9 },
                  ].map((member, index) => (
                    <div
                      key={index}
                      className="flex items-center justify-between p-3 bg-primary-50 rounded-lg"
                    >
                      <span className="text-secondary-700 font-medium">
                        {member.role}
                      </span>
                      <span className="text-2xl font-bold text-primary-600">
                        {member.count}
                      </span>
                    </div>
                  ))}
                </div>
                <div className="mt-6 pt-6 border-t border-primary-100">
                  <div className="flex items-center justify-between">
                    <span className="text-secondary-900 font-bold">
                      Total Team
                    </span>
                    <span className="text-3xl font-bold text-primary-600">
                      14
                    </span>
                  </div>
                </div>
              </motion.div>

              <motion.div
                variants={fadeInUp}
                className="bg-gradient-to-br from-primary-600 to-primary-800 rounded-2xl p-6 text-white shadow-xl"
              >
                <h3 className="text-xl font-bold mb-4">Need Resources?</h3>
                <p className="text-primary-100 mb-6">
                  Get skilled staff for your projects.
                </p>
                <Link
                  href="/contact"
                  className="block w-full text-center px-6 py-3 bg-white text-primary-600 font-bold rounded-full hover:bg-primary-50 transition-all"
                >
                  Contact Us
                </Link>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
