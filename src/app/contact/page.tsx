"use client";

import { motion } from "framer-motion";
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  Send,
  Building2,
  MessageCircle,
  ExternalLink,
  Loader2,
} from "lucide-react";
import { useState } from "react";
import Header from "@/components/ui/Header";
import Footer from "@/components/ui/Footer";
import { contactData } from "@/lib/data";
import emailjs from "@emailjs/browser";
import toast from "react-hot-toast";

export default function ContactPage() {
  const [selectedOffice, setSelectedOffice] = useState(0);
  const [loading, setLoading] = useState(false);
  const office = contactData[selectedOffice];

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      await emailjs.send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE!,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE!,
        {
          ...formData,
          office: office.city,
        },
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!,
      );

      toast.success("Message sent successfully!");

      setFormData({
        name: "",
        email: "",
        phone: "",
        subject: "",
        message: "",
      });
    } catch (error) {
      toast.error("Failed to send message");
    } finally {
      setLoading(false);
    }
  };

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >,
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <main className="min-h-screen relative overflow-hidden bg-white">
      <Header />

      {/* --- Global Animated Background Elements --- */}
      <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden">
        {/* Top Left Blob */}
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            x: [0, 50, 0],
            y: [0, 30, 0],
          }}
          transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
          className="absolute -top-20 -left-20 w-96 h-96 bg-primary-100 rounded-full mix-blend-multiply filter blur-3xl opacity-50"
        />
        {/* Bottom Right Blob */}
        <motion.div
          animate={{
            scale: [1, 1.4, 1],
            x: [0, -60, 0],
            y: [0, -40, 0],
          }}
          transition={{
            duration: 18,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2,
          }}
          className="absolute top-[40%] -right-20 w-[30rem] h-[30rem] bg-secondary-100 rounded-full mix-blend-multiply filter blur-3xl opacity-50"
        />
        {/* Center Floating Blob */}
        <motion.div
          animate={{
            scale: [0.8, 1.1, 0.8],
            x: [0, -30, 0],
            y: [0, 50, 0],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 5,
          }}
          className="absolute bottom-0 left-[30%] w-80 h-80 bg-primary-50 rounded-full mix-blend-multiply filter blur-3xl opacity-60"
        />
      </div>

      {/* Page Content (Z-10 to sit above background) */}
      <div className="relative z-10">
        {/* Hero Section */}
        <section className="pt-32 pb-24 px-4">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="text-center"
            >
              <motion.span
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.2, duration: 0.5 }}
                className="inline-flex px-4 py-2 rounded-full bg-primary-100/80 backdrop-blur-sm text-primary-700 text-sm font-medium border border-primary-200 shadow-sm"
              >
                PAN India Presence • Since 1986
              </motion.span>

              <h1 className="mt-6 text-5xl md:text-6xl font-bold text-secondary-900 tracking-tight">
                Contact Our
                <span className="text-primary-600 relative whitespace-nowrap">
                  <span className="relative z-10"> Experts</span>
                  {/* Decorative underline */}
                  <motion.svg
                    initial={{ pathLength: 0 }}
                    animate={{ pathLength: 1 }}
                    transition={{ delay: 0.5, duration: 1, ease: "easeInOut" }}
                    className="absolute -bottom-2 left-0 w-full h-3 text-primary-200"
                    viewBox="0 0 100 10"
                    preserveAspectRatio="none"
                  >
                    <motion.path
                      d="M0 5 Q 50 10 100 5"
                      stroke="currentColor"
                      strokeWidth="8"
                      fill="transparent"
                      strokeLinecap="round"
                    />
                  </motion.svg>
                </span>
              </h1>

              <p className="mt-6 text-lg text-secondary-600 max-w-3xl mx-auto leading-relaxed">
                Audit, Taxation, Advisory, Compliance and Consulting Services
                across India. Our team is ready to assist you.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Quick Contact Cards */}
        <section className="py-8">
          <div className="max-w-7xl mx-auto px-4">
            <div className="grid md:grid-cols-3 gap-6">
              {[
                {
                  icon: Phone,
                  title: "Call Us",
                  desc: "+91 94355 65649",
                  href: "tel:+919435565649",
                },
                {
                  icon: Mail,
                  title: "Email Us",
                  desc: "info@rkpassociates.in",
                  href: "mailto:info@rkpassociates.in",
                },
                {
                  icon: MessageCircle,
                  title: "WhatsApp Us",
                  desc: "+91 94355 65649",
                  href: "https://wa.me/919435565649",
                },
              ].map((item, idx) => (
                <motion.a
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 + idx * 0.1, duration: 0.5 }}
                  whileHover={{ y: -8, scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  href={item.href}
                  target={
                    item.title.includes("WhatsApp") ? "_blank" : undefined
                  }
                  rel={
                    item.title.includes("WhatsApp")
                      ? "noopener noreferrer"
                      : undefined
                  }
                  className="card text-center p-8 bg-white/80 backdrop-blur-md border border-secondary-100 shadow-xl shadow-secondary-100/20 rounded-2xl group"
                >
                  <div className="w-16 h-16 mx-auto bg-primary-50 rounded-2xl flex items-center justify-center mb-4 group-hover:bg-primary-600 transition-colors duration-300">
                    <item.icon className="w-8 h-8 text-primary-600 group-hover:text-white transition-colors duration-300" />
                  </div>
                  <h3 className="font-semibold text-xl text-secondary-900">
                    {item.title}
                  </h3>
                  <p className="text-secondary-600 mt-2 font-medium">
                    {item.desc}
                  </p>
                </motion.a>
              ))}
            </div>
          </div>
        </section>

        {/* Main Contact Section */}
        <section className="section-padding py-16">
          <div className="max-w-7xl mx-auto px-4">
            <div className="grid xl:grid-cols-5 gap-12 items-start">
              {/* Contact Form */}
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.7 }}
                className="xl:col-span-2"
              >
                <div className="card bg-white/90 backdrop-blur-lg p-8 rounded-3xl shadow-2xl shadow-secondary-200/40 border border-secondary-100 relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-primary-100 rounded-full blur-3xl opacity-50 translate-x-1/2 -translate-y-1/2" />

                  <h2 className="text-3xl font-bold text-secondary-900 mb-8 relative z-10">
                    Send Us a Message
                  </h2>
                  <form
                    onSubmit={handleSubmit}
                    className="space-y-6 relative z-10"
                  >
                    <div className="grid sm:grid-cols-2 gap-6">
                      <div>
                        <label
                          htmlFor="name"
                          className="block text-sm font-semibold text-secondary-700 mb-2"
                        >
                          Full Name *
                        </label>
                        <input
                          type="text"
                          id="name"
                          name="name"
                          required
                          value={formData.name}
                          onChange={handleChange}
                          className="w-full px-4 py-3 bg-secondary-50/50 border border-secondary-200 rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all outline-none"
                          placeholder="John Doe"
                        />
                      </div>
                      <div>
                        <label
                          htmlFor="email"
                          className="block text-sm font-semibold text-secondary-700 mb-2"
                        >
                          Email Address *
                        </label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          required
                          value={formData.email}
                          onChange={handleChange}
                          className="w-full px-4 py-3 bg-secondary-50/50 border border-secondary-200 rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all outline-none"
                          placeholder="john@example.com"
                        />
                      </div>
                    </div>

                    <div className="grid sm:grid-cols-2 gap-6">
                      <div>
                        <label
                          htmlFor="phone"
                          className="block text-sm font-semibold text-secondary-700 mb-2"
                        >
                          Phone Number
                        </label>
                        <input
                          type="tel"
                          id="phone"
                          name="phone"
                          value={formData.phone}
                          onChange={handleChange}
                          className="w-full px-4 py-3 bg-secondary-50/50 border border-secondary-200 rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all outline-none"
                          placeholder="+91 XXXXX XXXXX"
                        />
                      </div>
                      <div>
                        <label
                          htmlFor="subject"
                          className="block text-sm font-semibold text-secondary-700 mb-2"
                        >
                          Subject *
                        </label>
                        <select
                          id="subject"
                          name="subject"
                          required
                          value={formData.subject}
                          onChange={handleChange}
                          className="w-full px-4 py-3 bg-secondary-50/50 border border-secondary-200 rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all outline-none appearance-none"
                        >
                          <option value="">Select a subject</option>
                          <option value="Internal Audit">Internal Audit</option>
                          <option value="Statutory Audit">
                            Statutory Audit
                          </option>
                          <option value="Tax Consultancy">
                            Tax Consultancy
                          </option>
                          <option value="IT Services">IT Services</option>
                          <option value="Other">Other</option>
                        </select>
                      </div>
                    </div>

                    <div>
                      <label
                        htmlFor="message"
                        className="block text-sm font-semibold text-secondary-700 mb-2"
                      >
                        Message *
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        required
                        value={formData.message}
                        onChange={handleChange}
                        rows={4}
                        className="w-full px-4 py-3 bg-secondary-50/50 border border-secondary-200 rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all resize-none outline-none"
                        placeholder="Tell us about your requirements..."
                      />
                    </div>

                    <motion.button
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      type="submit"
                      disabled={loading}
                      className="w-full bg-primary-600 hover:bg-primary-700 text-white px-6 py-4 rounded-xl flex items-center justify-center space-x-2 disabled:opacity-70 disabled:cursor-not-allowed transition-all font-semibold shadow-lg shadow-primary-600/30"
                    >
                      <span>{loading ? "Sending..." : "Send Message"}</span>
                      {loading ? (
                        <Loader2 className="w-5 h-5 animate-spin" />
                      ) : (
                        <Send className="w-5 h-5" />
                      )}
                    </motion.button>
                  </form>
                </div>
              </motion.div>

              {/* Contact Info & Maps */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.7 }}
                className="xl:col-span-3 space-y-8"
              >
                {/* Office Tabs */}
                <div>
                  <h2 className="text-2xl font-bold text-secondary-900 mb-4">
                    Our Locations
                  </h2>
                  <div className="flex flex-wrap gap-3">
                    {contactData.map((item, index) => (
                      <button
                        key={index}
                        onClick={() => setSelectedOffice(index)}
                        className={`px-5 py-2.5 rounded-full text-sm font-semibold transition-all duration-300 ${
                          selectedOffice === index
                            ? "bg-primary-600 text-white shadow-lg shadow-primary-600/30 transform scale-105"
                            : "bg-white text-secondary-600 hover:bg-primary-50 hover:text-primary-700 border border-secondary-200"
                        }`}
                      >
                        {item.city}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Office Details Card */}
                <motion.div
                  key={selectedOffice}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4 }}
                  className="card relative overflow-hidden bg-white/90 backdrop-blur-md p-8 rounded-3xl shadow-xl shadow-secondary-100/50 border border-secondary-100"
                >
                  {/* Internal Decorative Background */}
                  <div className="absolute -top-20 -right-20 w-64 h-64 bg-primary-50 rounded-full blur-3xl opacity-70 pointer-events-none" />

                  <div className="relative z-10">
                    <div className="flex items-center gap-4 mb-6">
                      <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary-100 to-primary-50 flex items-center justify-center shadow-sm">
                        <Building2 className="w-8 h-8 text-primary-600" />
                      </div>
                      <div>
                        <h3 className="text-3xl font-bold text-secondary-900">
                          {office.city}
                        </h3>
                        <p className="text-primary-600 font-medium">
                          RKP Associates Branch Office
                        </p>
                      </div>
                    </div>

                    <div className="space-y-5 mb-8">
                      <div className="flex items-start gap-4">
                        <div className="mt-1 bg-secondary-100 p-2 rounded-lg text-secondary-600">
                          <MapPin className="w-5 h-5" />
                        </div>
                        <p className="text-secondary-700 leading-relaxed pt-1">
                          {office.address}
                        </p>
                      </div>

                      <div className="flex items-center gap-4">
                        <div className="bg-secondary-100 p-2 rounded-lg text-secondary-600">
                          <Phone className="w-5 h-5" />
                        </div>
                        <a
                          href={`tel:${office.mobile.replace(/\s+/g, "")}`}
                          className="text-secondary-700 hover:text-primary-600 font-medium transition-colors"
                        >
                          {office.mobile}
                        </a>
                      </div>

                      <div className="flex items-center gap-4">
                        <div className="bg-secondary-100 p-2 rounded-lg text-secondary-600">
                          <Mail className="w-5 h-5" />
                        </div>
                        <a
                          href={`mailto:${office.email}`}
                          className="text-secondary-700 hover:text-primary-600 font-medium transition-colors break-all"
                        >
                          {office.email}
                        </a>
                      </div>

                      <div className="flex items-start gap-4">
                        <div className="mt-1 bg-secondary-100 p-2 rounded-lg text-secondary-600">
                          <Clock className="w-5 h-5" />
                        </div>
                        <div className="text-secondary-700 pt-1 space-y-1">
                          <p>Monday - Friday: 9:00 AM - 6:00 PM</p>
                          <p>Saturday: 9:00 AM - 1:00 PM</p>
                        </div>
                      </div>
                    </div>

                    <div className="flex flex-wrap gap-4 pt-4 border-t border-secondary-100">
                      <a
                        href={office.map}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-secondary-900 text-white hover:bg-secondary-800 transition-all font-semibold shadow-md"
                      >
                        Get Directions
                        <ExternalLink size={18} />
                      </a>
                      <a
                        href={`https://wa.me/${office.mobile.replace(/\D/g, "")}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-[#25D366] text-white hover:bg-[#20bd5a] transition-all font-semibold shadow-md shadow-[#25D366]/20"
                      >
                        <MessageCircle size={18} />
                        WhatsApp Us
                      </a>
                    </div>
                  </div>
                </motion.div>

                {/* Map Iframe */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  key={`map-${office.city}`}
                  className="overflow-hidden rounded-3xl shadow-xl shadow-secondary-200/30 border-4 border-white bg-white h-[350px] relative"
                >
                  <iframe
                    title={`${office.city} Office Map`}
                    src={`https://maps.google.com/maps?q=${encodeURIComponent(
                      office.address,
                    )}&t=&z=15&ie=UTF8&iwloc=&output=embed`}
                    width="100%"
                    height="100%"
                    className="absolute inset-0 border-0"
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  />
                </motion.div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-20 relative border-t border-secondary-100">
          <div className="absolute inset-0 bg-gradient-to-b from-transparent to-primary-50/30" />
          <div className="max-w-7xl mx-auto px-4 relative z-10">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {[
                { value: "10+", label: "Offices", delay: 0 },
                { value: "500+", label: "Clients", delay: 0.1 },
                { value: "20+", label: "Years Experience", delay: 0.2 },
                { value: "PAN India", label: "Presence", delay: 0.3 },
              ].map((stat, idx) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: stat.delay, duration: 0.5 }}
                  whileHover={{ y: -8, scale: 1.05 }}
                  className="card text-center p-8 bg-white/80 backdrop-blur-sm rounded-3xl shadow-sm border border-secondary-100"
                >
                  <h3 className="text-4xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-primary-600 to-primary-400">
                    {stat.value}
                  </h3>
                  <p className="text-secondary-600 mt-3 font-semibold uppercase tracking-wider text-sm">
                    {stat.label}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      </div>

      <Footer />
    </main>
  );
}
