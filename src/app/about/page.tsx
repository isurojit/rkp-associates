"use client";

import { motion } from "framer-motion";
import { Award, Users, Target, Lightbulb } from "lucide-react";
import Header from "@/components/ui/Header";
import Footer from "@/components/ui/Footer";
import { partners, teamComposition, vision, mission } from "@/lib/data";

export default function AboutPage() {
  return (
    <main className="min-h-screen">
      <Header />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 gradient-bg">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center max-w-3xl mx-auto"
          >
            <span className="inline-block px-4 py-2 bg-primary-100 text-primary-700 rounded-full text-sm font-semibold mb-6">
              Established 1986
            </span>
            <h1 className="text-4xl md:text-5xl font-bold text-secondary-900 mb-6">
              About RKP Associates
            </h1>
            <p className="text-lg text-secondary-600">
              With nearly four decades of experience, RKP Associates prides
              itself on its profound understanding of audit and compliance
              consultancy.
            </p>
          </motion.div>
        </div>
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
      <section className="section-padding gradient-bg">
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
                className="card"
              >
                <div className="flex items-center space-x-4 mb-4">
                  <div className="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center">
                    <Users className="w-6 h-6 text-primary-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-secondary-900">
                      {partner.name}
                    </h3>
                  </div>
                </div>
                <p className="text-secondary-600 text-sm">{partner.role}</p>
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
