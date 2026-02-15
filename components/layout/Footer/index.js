"use client";

import Link from "next/link";
import Container from "@/components/ui/Container";
import {
  MapPin,
  Phone,
  Mail,
  MessageCircle,
  Award,
  Shield,
  Building2,
  Globe,
  ExternalLink,
  Facebook,
  Instagram,
  Twitter,
  Linkedin,
  Youtube,
  Send,
} from "lucide-react";

// WhatsApp Configuration
const WHATSAPP_NIGERIA = "2348123456789"; // Replace with actual Nigeria number
const WHATSAPP_UK = "447123456789"; // Replace with actual UK number

const whatsappNigeriaUrl = `https://wa.me/${WHATSAPP_NIGERIA}?text=${encodeURIComponent("Hello MAFAD Nigeria! I have an enquiry.")}`;
const whatsappUKUrl = `https://wa.me/${WHATSAPP_UK}?text=${encodeURIComponent("Hello MAFADTECH UK! I have an enquiry.")}`;

// Social Media Links - From your documents
const socialLinks = [
  {
    name: "Facebook",
    icon: Facebook,
    url: "https://facebook.com/mafadtechnology",
    color: "hover:bg-[#1877F2]",
  },
  {
    name: "Instagram",
    icon: Instagram,
    url: "https://instagram.com/mafadtechnology",
    color: "hover:bg-[#E4405F]",
  },
  {
    name: "Twitter",
    icon: Twitter,
    url: "https://twitter.com/mafadtechnology",
    color: "hover:bg-[#1DA1F2]",
  },
  {
    name: "LinkedIn",
    icon: Linkedin,
    url: "https://linkedin.com/company/mafadtechnology",
    color: "hover:bg-[#0A66C2]",
  },
  {
    name: "YouTube",
    icon: Youtube,
    url: "https://youtube.com/@mafadtechnology",
    color: "hover:bg-[#FF0000]",
  },
];

// Quick Contact Links
const contactLinks = [
  {
    name: "WhatsApp Nigeria",
    icon: MessageCircle,
    url: whatsappNigeriaUrl,
    color: "hover:bg-[#25D366]",
  },
  {
    name: "WhatsApp UK",
    icon: MessageCircle,
    url: whatsappUKUrl,
    color: "hover:bg-[#25D366]",
  },
  {
    name: "Email Nigeria",
    icon: Mail,
    url: "mailto:info@mafadtechnology.com.ng",
    color: "hover:bg-mafad-cyan",
  },
  {
    name: "Email UK",
    icon: Mail,
    url: "mailto:info@mafadtechservices.co.uk",
    color: "hover:bg-mafad-cyan",
  },
];

export default function Footer() {
  return (
    <footer className="bg-mafad-navy text-white pt-16 pb-8">
      <Container>
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-12">
          {/* Company Info - 3 columns */}
          <div className="lg:col-span-3">
            <h3 className="text-2xl font-bold mb-4">
              <span className="text-white">MAFAD</span>
              <span className="text-mafad-cyan"> TECHNOLOGY</span>
            </h3>
            <p className="text-gray-300 text-sm mb-6 leading-relaxed">
              Innovating Technology. Powering Trade. Building the Future.
            </p>

            {/* Registration Badges */}
            <div className="space-y-3 mb-6">
              <div className="flex items-start space-x-3">
                <Award className="w-5 h-5 text-mafad-cyan flex-shrink-0 mt-0.5" />
                <div className="text-sm text-gray-300">
                  <p>CAC: RC 6893862 (NG)</p>
                  <p>Companies House: 16173180 (UK)</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Shield className="w-5 h-5 text-mafad-cyan flex-shrink-0" />
                <p className="text-sm text-gray-300">
                  SMEDAN • BOI • NIRSAL Compliant
                </p>
              </div>
            </div>

            {/* Social Media Icons */}
            <div className="space-y-3">
              <h5 className="text-xs font-semibold text-mafad-cyan uppercase tracking-wider">
                Follow Us
              </h5>
              <div className="flex flex-wrap gap-2">
                {socialLinks.map((social, idx) => {
                  const Icon = social.icon;
                  return (
                    <a
                      key={idx}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center hover:bg-opacity-100 transition-all duration-300 ${social.color} group`}
                      aria-label={social.name}
                    >
                      <Icon className="w-5 h-5 text-white group-hover:scale-110 transition-transform" />
                    </a>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Quick Links - 2 columns */}
          <div className="lg:col-span-2">
            <h4 className="font-semibold mb-4 text-mafad-cyan uppercase tracking-wider text-sm">
              Company
            </h4>
            <ul className="space-y-3 text-sm">
              <li>
                <Link
                  href="/about"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  href="/about#vision-mission"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  Vision & Mission
                </Link>
              </li>
              <li>
                <Link
                  href="/about#leadership"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  Leadership
                </Link>
              </li>
              <li>
                <Link
                  href="/about#governance"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  Governance & Compliance
                </Link>
              </li>
              <li>
                <Link
                  href="/investor-relations/compliance"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  Regulatory Compliance
                </Link>
              </li>
            </ul>
          </div>

          {/* Nigeria Operations - 2 columns */}
          <div className="lg:col-span-3">
            <h4 className="font-semibold mb-4 text-mafad-cyan uppercase tracking-wider text-sm">
              Nigeria Operations
            </h4>
            <p className="text-xs text-gray-400 mb-2">
              MAFAD Technology Limited
            </p>
            <ul className="space-y-3 text-sm">
              <li>
                <Link
                  href="/nigeria/mafad-technology"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  MAFAD Technology (ICT Services)
                </Link>
              </li>
              <li>
                <Link
                  href="/nigeria/coca-cola"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  Coca-Cola Distribution
                </Link>
              </li>
              <li>
                <Link
                  href="/nigeria/solar-energy"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  Solar & Renewable Energy
                </Link>
              </li>
              <li className="text-gray-500 text-sm italic">
                (More services coming soon)
              </li>
            </ul>
            <div className="mt-4 flex items-center space-x-2 text-xs text-gray-400">
              <MapPin className="w-3 h-3" />
              <span>Owo & Akure, Ondo State</span>
            </div>
          </div>

          {/* UK Operations - 2 columns */}
          <div className="lg:col-span-3">
            <h4 className="font-semibold mb-4 text-mafad-cyan uppercase tracking-wider text-sm">
              United Kingdom
            </h4>
            <p className="text-xs text-gray-400 mb-2">
              MAFADTECH Services Limited
            </p>
            <ul className="space-y-3 text-sm">
              <li>
                <Link
                  href="/united-kingdom/mafadtech-services#technology-consultancy"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  Technology Consultancy (62020)
                </Link>
              </li>
              <li>
                <Link
                  href="/united-kingdom/mafadtech-services#training-services"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  Training Services (85590)
                </Link>
              </li>
              <li>
                <Link
                  href="/united-kingdom/mafadtech-services#shipping-services"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  Shipping Services (50200)
                </Link>
              </li>
              <li>
                <Link
                  href="/united-kingdom/mafadtech-services#sales-purchases"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  Sales & Purchases (46110)
                </Link>
              </li>
            </ul>
            <div className="mt-4 flex items-center space-x-2 text-xs text-gray-400">
              <MapPin className="w-3 h-3" />
              <span>Hull, England HU9 5EQ</span>
            </div>
          </div>

          {/* Contact & Social - 1 column */}
          {/* <div className="lg:col-span-1">
            <h4 className="font-semibold mb-4 text-mafad-cyan uppercase tracking-wider text-sm">
              Connect
            </h4>
            <div className="space-y-3">
              {contactLinks.map((link, idx) => {
                const Icon = link.icon;
                return (
                  <a
                    key={idx}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-2 text-sm text-gray-300 hover:text-white transition-colors group"
                  >
                    <Icon className="w-4 h-4" />
                    <span>{link.name}</span>
                    <ExternalLink className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </a>
                );
              })}
            </div>
          </div> */}
        </div>

        {/* Bottom Bar with Registration Info */}
        <div className="border-t border-gray-800 pt-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 text-xs text-gray-400">
            {/* Copyright */}
            <div>
              <p>
                © {new Date().getFullYear()} MAFAD Technology Group. All rights
                reserved.
              </p>
            </div>

            {/* Registration Numbers */}
            <div className="lg:text-center">
              <p>Nigeria: RC 6893862 | UK: Company No 16173180</p>
            </div>

            {/* Legal Links */}
            <div className="lg:text-right space-x-4">
              <Link
                href="/privacy-policy"
                className="hover:text-white transition-colors"
              >
                Privacy Policy
              </Link>
              <span>•</span>
              <Link
                href="/cookie-policy"
                className="hover:text-white transition-colors"
              >
                Cookie Policy
              </Link>
              <span>•</span>
              <button
                onClick={() => {
                  // Clear consent and show banner again
                  localStorage.removeItem("cookie-consent");
                  window.location.reload();
                }}
                className="hover:text-white transition-colors text-gray-400"
              >
                Cookie Settings
              </button>
              <span>•</span>
              <Link
                href="/terms"
                className="hover:text-white transition-colors"
              >
                Terms of Use
              </Link>
            </div>
          </div>

          {/* Compliance Badges */}
          <div className="mt-6 flex flex-wrap justify-center gap-4 pt-4 border-t border-gray-800/50">
            <span className="text-xs bg-white/5 px-3 py-1 rounded-full text-gray-400">
              CAC Registered
            </span>
            <span className="text-xs bg-white/5 px-3 py-1 rounded-full text-gray-400">
              Companies House
            </span>
            <span className="text-xs bg-white/5 px-3 py-1 rounded-full text-gray-400">
              SMEDAN Certified
            </span>
            <span className="text-xs bg-white/5 px-3 py-1 rounded-full text-gray-400">
              BOI Compliant
            </span>
            <span className="text-xs bg-white/5 px-3 py-1 rounded-full text-gray-400">
              NIRSAL Eligible
            </span>
            <span className="text-xs bg-white/5 px-3 py-1 rounded-full text-gray-400">
              Coca-Cola HBC Authorized
            </span>
          </div>
        </div>
      </Container>
    </footer>
  );
}
