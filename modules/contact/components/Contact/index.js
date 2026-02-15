"use client";

import { useState } from "react";
import {
  MapPin,
  Phone,
  Mail,
  MessageCircle,
  Clock,
  Building2,
  Globe,
  Users,
  ArrowRight,
  CheckCircle,
  Send,
  User,
  Briefcase,
  FileText,
  AlertCircle,
} from "lucide-react";
import Link from "next/link";
import Container from "@/components/ui/Container";
import Card from "@/components/ui/Card";

// WhatsApp Configuration
const WHATSAPP_NIGERIA = "2348123456789"; // Replace with actual Nigeria number
const WHATSAPP_UK = "447123456789"; // Replace with actual UK number

const whatsappNigeriaUrl = `https://wa.me/${WHATSAPP_NIGERIA}?text=${encodeURIComponent("Hello! I'd like to get in touch with MAFAD Technology Group Nigeria.")}`;
const whatsappUKUrl = `https://wa.me/${WHATSAPP_UK}?text=${encodeURIComponent("Hello! I'd like to get in touch with MAFADTECH Services UK.")}`;

const offices = [
  {
    country: "Nigeria",
    flag: "🇳🇬",
    company: "MAFAD Technology Limited",
    rc: "RC: 6893862",
    address: ["Owo, Ondo State", "Nigeria"],
    phone: "+234 812 345 6789",
    email: "info@mafadtechnology.com.ng",
    hours: [
      "Monday - Friday: 8:00 AM - 6:00 PM",
      "Saturday: 9:00 AM - 4:00 PM",
      "Sunday: Closed",
    ],
    icon: Building2,
    color: "from-mafad-navy to-mafad-navy/90",
    textColor: "text-mafad-cyan",
    map: "https://maps.google.com/?q=Owo,Ondo,Nigeria",
  },
  {
    country: "United Kingdom",
    flag: "🇬🇧",
    company: "MAFADTECH Services Limited",
    rc: "Company No: 16173180",
    address: ["29, Imperia Way", "Hull, England HU9 5EQ"],
    phone: "+44 7123 456789",
    email: "info@mafadtechservices.co.uk",
    hours: ["Monday - Friday: 9:00 AM - 5:30 PM", "Saturday - Sunday: Closed"],
    icon: Globe,
    color: "from-mafad-cyan to-mafad-cyan/90",
    textColor: "text-mafad-navy",
    map: "https://maps.google.com/?q=HU9+5EQ",
  },
];

const departments = [
  {
    name: "Technology & ICT",
    email: "tech@mafadtechnology.com.ng",
    phone: "+234 812 345 6789",
    whatsapp: WHATSAPP_NIGERIA,
    response: "Within 2 hours",
    icon: Briefcase,
  },
  {
    name: "Coca-Cola Distribution",
    email: "cocacola@mafadtechnology.com.ng",
    phone: "+234 812 345 6789",
    whatsapp: WHATSAPP_NIGERIA,
    response: "Within 30 minutes",
    icon: Briefcase,
  },
  {
    name: "UK Services",
    email: "services@mafadtechservices.co.uk",
    phone: "+44 7123 456789",
    whatsapp: WHATSAPP_UK,
    response: "Within 4 hours",
    icon: Globe,
  },
  {
    name: "Training & Academy",
    email: "training@mafadtechnology.com.ng",
    phone: "+234 812 345 6789",
    whatsapp: WHATSAPP_NIGERIA,
    response: "Within 24 hours",
    icon: Users,
  },
];

const faqs = [
  {
    question: "What is the best way to reach you?",
    answer:
      "WhatsApp is our fastest response channel. Click the WhatsApp buttons below to chat directly with our Nigeria or UK teams.",
  },
  {
    question: "What are your response times?",
    answer:
      "WhatsApp: < 5 minutes | Email: within 24 hours | Phone: during business hours",
  },
  {
    question: "Do you have physical offices?",
    answer:
      "Yes. We have offices in Owo, Ondo State (Nigeria) and Hull, England (United Kingdom). Appointments are recommended.",
  },
  {
    question: "Can I place orders via WhatsApp?",
    answer:
      "Absolutely! WhatsApp is our preferred ordering channel for Coca-Cola products and service inquiries.",
  },
];

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    department: "",
    message: "",
  });
  const [formStatus, setFormStatus] = useState(null);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would integrate with your form submission service
    console.log("Form submitted:", formData);
    setFormStatus("success");
    setTimeout(() => setFormStatus(null), 5000);
  };

  return (
    <>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-mafad-navy via-mafad-navy to-mafad-navy/95 text-white overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `radial-gradient(circle at 2px 2px, white 1px, transparent 0)`,
              backgroundSize: "40px 40px",
            }}
          />
        </div>

        <Container className="relative py-20 md:py-28">
          <div className="max-w-4xl mx-auto text-center">
            <div className="flex items-center justify-center space-x-2 text-mafad-cyan mb-4">
              <Users className="w-6 h-6" />
              <span className="text-sm font-semibold uppercase tracking-wider">
                Get in Touch
              </span>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
              We're Here to Help
              <span className="text-mafad-cyan block mt-2">
                Contact Our Team
              </span>
            </h1>

            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Choose the fastest way to reach us - WhatsApp, email, phone, or
              visit our offices in Nigeria and the UK.
            </p>

            {/* Quick Contact Stats */}
            <div className="flex flex-wrap justify-center gap-6 mt-12">
              <div className="flex items-center space-x-2 bg-white/10 px-4 py-2 rounded-full">
                <MessageCircle className="w-4 h-4 text-mafad-cyan" />
                <span className="text-sm">WhatsApp: &lt;5min response</span>
              </div>
              <div className="flex items-center space-x-2 bg-white/10 px-4 py-2 rounded-full">
                <Mail className="w-4 h-4 text-mafad-cyan" />
                <span className="text-sm">Email: 24hr response</span>
              </div>
              <div className="flex items-center space-x-2 bg-white/10 px-4 py-2 rounded-full">
                <Clock className="w-4 h-4 text-mafad-cyan" />
                <span className="text-sm">24/7 WhatsApp support</span>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* WhatsApp Quick Access */}
      <section className="py-12 bg-white border-b border-gray-100">
        <Container>
          <div className="grid md:grid-cols-2 gap-6">
            <a
              href={whatsappNigeriaUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-between p-6 bg-[#25D366]/10 rounded-2xl hover:bg-[#25D366]/20 transition-colors group"
            >
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-[#25D366] rounded-xl flex items-center justify-center">
                  <MessageCircle className="w-6 h-6 text-white" />
                </div>
                <div>
                  <p className="text-sm text-gray-500">WhatsApp Nigeria</p>
                  <p className="text-lg font-bold text-gray-900">
                    MAFAD Technology
                  </p>
                  <p className="text-sm text-gray-600">
                    Click to chat • &lt;5min response
                  </p>
                </div>
              </div>
              <ArrowRight className="w-5 h-5 text-[#25D366] group-hover:translate-x-1 transition-transform" />
            </a>

            <a
              href={whatsappUKUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-between p-6 bg-[#25D366]/10 rounded-2xl hover:bg-[#25D366]/20 transition-colors group"
            >
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-[#25D366] rounded-xl flex items-center justify-center">
                  <MessageCircle className="w-6 h-6 text-white" />
                </div>
                <div>
                  <p className="text-sm text-gray-500">
                    WhatsApp United Kingdom
                  </p>
                  <p className="text-lg font-bold text-gray-900">
                    MAFADTECH Services
                  </p>
                  <p className="text-sm text-gray-600">
                    Click to chat • &lt;2hr response
                  </p>
                </div>
              </div>
              <ArrowRight className="w-5 h-5 text-[#25D366] group-hover:translate-x-1 transition-transform" />
            </a>
          </div>
        </Container>
      </section>

      {/* Offices Section */}
      <section className="py-20 bg-gray-50">
        <Container>
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-4xl font-bold text-mafad-navy mb-4">
              Our Offices
            </h2>
            <p className="text-xl text-gray-600">
              Visit us in Nigeria or the United Kingdom
            </p>
            <div className="w-24 h-1 bg-mafad-cyan mx-auto mt-6" />
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {offices.map((office, idx) => {
              const Icon = office.icon;
              return (
                <Card
                  key={idx}
                  className="overflow-hidden hover:shadow-xl transition-shadow"
                >
                  <div className={`h-2 bg-gradient-to-r ${office.color}`} />
                  <div className="p-8">
                    <div className="flex items-start justify-between mb-6">
                      <div className="flex items-center space-x-3">
                        <div
                          className={`w-12 h-12 ${office.textColor === "text-mafad-cyan" ? "bg-mafad-cyan/10" : "bg-mafad-navy/10"} rounded-xl flex items-center justify-center`}
                        >
                          <Icon className={`w-6 h-6 ${office.textColor}`} />
                        </div>
                        <div>
                          <h3 className="text-2xl font-bold text-gray-900">
                            {office.country} {office.flag}
                          </h3>
                          <p className="text-sm text-gray-500">
                            {office.company}
                          </p>
                          <p className="text-xs text-gray-400">{office.rc}</p>
                        </div>
                      </div>
                    </div>

                    <div className="space-y-4">
                      <div className="flex items-start space-x-3">
                        <MapPin className="w-5 h-5 text-gray-400 flex-shrink-0 mt-0.5" />
                        <div>
                          {office.address.map((line, i) => (
                            <p key={i} className="text-gray-600">
                              {line}
                            </p>
                          ))}
                          <a
                            href={office.map}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-sm text-mafad-cyan hover:underline mt-1 inline-block"
                          >
                            View on Google Maps
                          </a>
                        </div>
                      </div>

                      <div className="flex items-start space-x-3">
                        <Phone className="w-5 h-5 text-gray-400 flex-shrink-0 mt-0.5" />
                        <div>
                          <p className="text-gray-600">{office.phone}</p>
                          <p className="text-sm text-gray-500">
                            Available during business hours
                          </p>
                        </div>
                      </div>

                      <div className="flex items-start space-x-3">
                        <Mail className="w-5 h-5 text-gray-400 flex-shrink-0 mt-0.5" />
                        <div>
                          <p className="text-gray-600">{office.email}</p>
                          <p className="text-sm text-gray-500">
                            24hr response time
                          </p>
                        </div>
                      </div>

                      <div className="flex items-start space-x-3">
                        <Clock className="w-5 h-5 text-gray-400 flex-shrink-0 mt-0.5" />
                        <div>
                          {office.hours.map((hour, i) => (
                            <p key={i} className="text-gray-600">
                              {hour}
                            </p>
                          ))}
                        </div>
                      </div>
                    </div>

                    <div className="mt-6 pt-6 border-t border-gray-100">
                      <a
                        href={
                          office.country === "Nigeria"
                            ? whatsappNigeriaUrl
                            : whatsappUKUrl
                        }
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`inline-flex items-center ${office.textColor} font-semibold hover:opacity-80 transition-opacity group`}
                      >
                        <MessageCircle className="w-4 h-4 mr-2" />
                        Chat on WhatsApp
                        <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                      </a>
                    </div>
                  </div>
                </Card>
              );
            })}
          </div>
        </Container>
      </section>

      {/* Contact Form & Departments */}
      <section className="py-20 bg-white">
        <Container>
          <div className="">
            {/* Contact Form */}
            {/* <div className="lg:col-span-2">
              <h2 className="text-3xl font-bold text-mafad-navy mb-6">
                Send Us a Message
              </h2>
              <Card>
                {formStatus === "success" && (
                  <div className="mb-6 p-4 bg-green-50 border border-green-200 rounded-lg flex items-center text-green-700">
                    <CheckCircle className="w-5 h-5 mr-2" />
                    Thank you for your message. We'll respond within 24 hours.
                  </div>
                )}

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Your Name *
                      </label>
                      <div className="relative">
                        <User className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                        <input
                          type="text"
                          name="name"
                          required
                          value={formData.name}
                          onChange={handleChange}
                          className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-mafad-cyan focus:border-transparent outline-none"
                          placeholder="John Doe"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Email Address *
                      </label>
                      <div className="relative">
                        <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                        <input
                          type="email"
                          name="email"
                          required
                          value={formData.email}
                          onChange={handleChange}
                          className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-mafad-cyan focus:border-transparent outline-none"
                          placeholder="john@example.com"
                        />
                      </div>
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Phone Number
                      </label>
                      <div className="relative">
                        <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                        <input
                          type="tel"
                          name="phone"
                          value={formData.phone}
                          onChange={handleChange}
                          className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-mafad-cyan focus:border-transparent outline-none"
                          placeholder="+234 812 345 6789"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Department
                      </label>
                      <div className="relative">
                        <Briefcase className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                        <select
                          name="department"
                          value={formData.department}
                          onChange={handleChange}
                          className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-mafad-cyan focus:border-transparent outline-none appearance-none bg-white"
                        >
                          <option value="">Select a department</option>
                          <option value="technology">Technology & ICT</option>
                          <option value="cocacola">
                            Coca-Cola Distribution
                          </option>
                          <option value="uk">UK Services</option>
                          <option value="training">Training & Academy</option>
                          <option value="other">Other</option>
                        </select>
                      </div>
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Your Message *
                    </label>
                    <div className="relative">
                      <FileText className="absolute left-3 top-3 w-5 h-5 text-gray-400" />
                      <textarea
                        name="message"
                        required
                        rows="5"
                        value={formData.message}
                        onChange={handleChange}
                        className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-mafad-cyan focus:border-transparent outline-none resize-none"
                        placeholder="How can we help you?"
                      />
                    </div>
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-mafad-cyan text-mafad-navy py-4 rounded-xl font-semibold hover:bg-mafad-cyan/90 transition-colors flex items-center justify-center space-x-2 group"
                  >
                    <Send className="w-5 h-5" />
                    <span>Send Message</span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </button>
                </form>
              </Card>
            </div> */}

            {/* Department List */}
            <div>
              <h2 className="text-3xl font-bold text-mafad-navy mb-6">
                Quick Contacts
              </h2>
              <div className="space-y-4 grid lg:grid-cols-3 gap-8">
                {departments.map((dept, idx) => {
                  const Icon = dept.icon;
                  return (
                    <Card
                      key={idx}
                      className="p-6 hover:shadow-lg transition-shadow"
                    >
                      <div className="flex items-center space-x-3 mb-3">
                        <div className="w-10 h-10 bg-mafad-cyan/10 rounded-lg flex items-center justify-center">
                          <Icon className="w-5 h-5 text-mafad-cyan" />
                        </div>
                        <div>
                          <h3 className="font-semibold text-gray-900">
                            {dept.name}
                          </h3>
                          <p className="text-xs text-gray-500">
                            Response: {dept.response}
                          </p>
                        </div>
                      </div>

                      <div className="space-y-2 text-sm">
                        <a
                          href={`mailto:${dept.email}`}
                          className="flex items-center text-gray-600 hover:text-mafad-cyan transition-colors"
                        >
                          <Mail className="w-4 h-4 mr-2" />
                          {dept.email}
                        </a>
                        <a
                          href={`https://wa.me/${dept.whatsapp}`}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center text-[#25D366] hover:opacity-80 transition-opacity"
                        >
                          <MessageCircle className="w-4 h-4 mr-2" />
                          WhatsApp
                        </a>
                      </div>
                    </Card>
                  );
                })}
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-gray-50">
        <Container>
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-4xl font-bold text-mafad-navy mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-xl text-gray-600">
              Quick answers to common questions
            </p>
            <div className="w-24 h-1 bg-mafad-cyan mx-auto mt-6" />
          </div>

          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {faqs.map((faq, idx) => (
              <Card key={idx} className="p-6">
                <h3 className="text-lg font-semibold text-mafad-navy mb-2 flex items-start">
                  <AlertCircle className="w-5 h-5 text-mafad-cyan mr-2 flex-shrink-0 mt-0.5" />
                  {faq.question}
                </h3>
                <p className="text-gray-600 ml-7">{faq.answer}</p>
              </Card>
            ))}
          </div>
        </Container>
      </section>

      {/* Map Placeholder */}
      <section className="py-12 bg-white">
        <Container>
          <div className="bg-gray-100 rounded-3xl h-96 flex items-center justify-center">
            <div className="text-center">
              <MapPin className="w-12 h-12 text-mafad-cyan mx-auto mb-4" />
              <p className="text-gray-600 mb-2">Interactive Map Coming Soon</p>
              <p className="text-sm text-gray-500">
                Owo, Nigeria | Hull, United Kingdom
              </p>
              <div className="mt-4 flex gap-4 justify-center">
                <a
                  href="https://maps.google.com/?q=Owo,Ondo,Nigeria"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-mafad-cyan hover:underline text-sm"
                >
                  Nigeria Office
                </a>
                <a
                  href="https://maps.google.com/?q=HU9+5EQ"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-mafad-cyan hover:underline text-sm"
                >
                  UK Office
                </a>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Final CTA */}
      <section className="py-20 bg-mafad-navy">
        <Container>
          <div className="text-center max-w-3xl mx-auto">
            <MessageCircle className="w-12 h-12 text-mafad-cyan mx-auto mb-6" />
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Prefer WhatsApp?
            </h2>
            <p className="text-lg text-gray-300 mb-8">
              Get the fastest response by messaging us directly on WhatsApp.
              Choose your region below.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <a
                href={whatsappNigeriaUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center bg-[#25D366] text-white hover:bg-[#25D366]/90 px-8 py-4 text-lg rounded-xl font-semibold transition-all"
              >
                <MessageCircle className="w-5 h-5 mr-2" />
                WhatsApp Nigeria
              </a>
              <a
                href={whatsappUKUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center bg-white text-mafad-navy hover:bg-gray-100 px-8 py-4 text-lg rounded-xl font-semibold transition-all"
              >
                <MessageCircle className="w-5 h-5 mr-2" />
                WhatsApp UK
              </a>
            </div>
            <p className="text-sm text-gray-400 mt-6">
              🇳🇬 Nigeria: &lt;5min response | 🇬🇧 UK: &lt;2hr response
            </p>
          </div>
        </Container>
      </section>
    </>
  );
}
