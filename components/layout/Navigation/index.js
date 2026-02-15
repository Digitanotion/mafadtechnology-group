"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  Menu,
  X,
  ChevronDown,
  ChevronRight,
  Globe,
  Building2,
  Briefcase,
  Users,
  Phone,
  TrendingUp,
  Award,
  Shield,
  Eye,
  Code,
  Droplet,
  Shirt,
  School,
  Truck,
  Sun,
  BarChart,
  Target,
  Handshake,
  Home,
} from "lucide-react";
import Container from "@/components/ui/Container";

// ============================================
// MASTER MENU CONFIGURATION - EDIT ONLY HERE
// ============================================

const menuConfig = {
  mainNav: [
    {
      id: "company",
      label: "Company",
      type: "dropdown",
      icon: Building2,
      items: [
        {
          label: "About Us",
          href: "/about",
          icon: Home,
          description: "Our story & mission",
        },
        {
          label: "Vision & Mission",
          href: "/about#vision-mission",
          icon: Eye,
          description: "Where we're headed",
        },
        {
          label: "Leadership",
          href: "/about#leadership",
          icon: Users,
          description: "Meet our team",
        },
        {
          label: "Governance",
          href: "/about#governance",
          icon: Shield,
          description: "How we operate",
        },
      ],
    },
    {
      id: "nigeria",
      label: "Nigeria",
      type: "mega",
      icon: Globe,
      megaContent: {
        title: "Nigeria Operations",
        subtitle: "MAFAD Technology Limited - Since 2021",
        featured: {
          title: "Authorized Sub-Dealer",
          value: "Coca-Cola HBC",
          badge: "CAC Registered",
        },
        location: "Owo & Akure, Ondo State",
        columns: [
          {
            title: "Technology & ICT",
            items: [
              {
                label: "MAFAD Technology",
                href: "/nigeria/mafad-technology",
                description: "Software, digital, training",
                icon: Code,
              },
              //   {
              //     label: "ICT Academy",
              //     href: "/nigeria/ict-academy",
              //     description: "Certification programs",
              //     icon: School,
              //   },
              {
                label: "Solar Energy",
                href: "/nigeria/solar-energy",
                description: "Renewable solutions",
                icon: Sun,
              },
            ],
          },
          {
            title: "Trade & Retail",
            items: [
              {
                label: "Coca-Cola Distribution",
                href: "/nigeria/coca-cola",
                description: "Authorized sub-dealer",
                icon: Droplet,
              },
              //   {
              //     label: "Fashion Retail",
              //     href: "/nigeria/fashion-retail",
              //     description: "Ready-to-wear clothing",
              //     icon: Shirt,
              //   },
              //   {
              //     label: "Logistics",
              //     href: "/nigeria/logistics",
              //     description: "Last-mile delivery",
              //     icon: Truck,
              //   },
              //   {
              //     label: "General Trading",
              //     href: "/nigeria/general-trading",
              //     description: "Merchandise",
              //     icon: Briefcase,
              //   },
            ],
          },
        ],
      },
    },
    {
      id: "uk",
      label: "UK",
      type: "mega",
      icon: Building2,
      megaContent: {
        title: "United Kingdom",
        subtitle: "MAFADTECH Services Limited - Since 2025",
        featured: {
          title: "Company No",
          value: "16173180",
          badge: "Companies House",
        },
        location: "Hull, England",
        columns: [
          {
            title: "Technology & Training",
            items: [
              {
                label: "MAFADTECH Services",
                href: "/united-kingdom/mafadtech-services",
                description: "Overview & all services",
                icon: Building2,
              },
              {
                label: "Technology Consultancy",
                href: "/united-kingdom/mafadtech-services#technology-consultancy",
                description:
                  "IT consultancy, system implementation & support (SIC 62020)",
                icon: Code,
              },
              {
                label: "Training Services",
                href: "/united-kingdom/mafadtech-services#training-services",
                description: "Professional development programs (SIC 85590)",
                icon: School,
              },
            ],
          },
          {
            title: "Trade & Logistics",
            items: [
              {
                label: "Shipping Services",
                href: "/united-kingdom/mafadtech-services#shipping-services",
                description:
                  "Sea & coastal freight water transport (SIC 50200)",
                icon: Truck,
              },
              {
                label: "Sales & Purchases",
                href: "/united-kingdom/mafadtech-services#sales-purchases",
                description:
                  "Agricultural, textiles & semi-finished goods (SIC 46110)",
                icon: Globe,
              },
            ],
          },
        ],
        meta: {
          sic: [
            "62020 - IT Consultancy",
            "85590 - Training",
            "46110 - Sales Agency",
            "50200 - Sea Transport",
          ],
          soc: ["2136", "2139", "3545", "1136"],
        },
      },
    },
    // {
    //   id: "investors",
    //   label: "Compliance",
    //   type: "dropdown",
    //   icon: TrendingUp,
    //   items: [
    // {
    //   label: "Financials",
    //   href: "/investor-relations/financials",
    //   icon: BarChart,
    //   description: "5-year projections",
    // },
    // {
    //   label: "Compliance",
    //   href: "/investor-relations/compliance",
    //   icon: Shield,
    //   description: "CAC, SMEDAN, BOI, NIRSAL",
    // },
    // {
    //   label: "Funding",
    //   href: "/investor-relations",
    //   icon: Target,
    //   description: "Investment opportunities",
    // },
    //   ],
    // },
    // {
    //   id: "careers",
    //   label: "Careers",
    //   type: "link",
    //   href: "/careers",
    //   icon: Briefcase,
    // },
    // {
    //   id: "contact",
    //   label: "Contact",
    //   type: "link",
    //   href: "/contact",
    //   icon: Phone,
    // },
  ],

  partnerButton: {
    label: "Contact Us",
    href: "/contact",
    icon: Handshake,
  },

  mobileSections: [
    "company",
    "nigeria",
    "uk",
    "investors",
    "careers",
    "contact",
  ],
};

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [activeMobileSubmenu, setActiveMobileSubmenu] = useState(null);
  const [scrolled, setScrolled] = useState(false);
  const [logoError, setLogoError] = useState(false);
  const dropdownRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setActiveDropdown(null);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
      setActiveMobileSubmenu(null);
    }
  }, [isOpen]);

  const toggleDropdown = (id) => {
    setActiveDropdown(activeDropdown === id ? null : id);
  };

  const toggleMobileSubmenu = (id) => {
    setActiveMobileSubmenu(activeMobileSubmenu === id ? null : id);
  };

  return (
    <nav
      ref={dropdownRef}
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled ? "bg-white/95 backdrop-blur-md shadow-lg" : "bg-white"
      }`}
    >
      <Container>
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-3 group">
            <div className="relative h-11 w-11 flex-shrink-0">
              {!logoError ? (
                <Image
                  src="/images/brand/mafad-logo.png"
                  alt="MAFAD"
                  fill
                  sizes="44px"
                  className="object-contain"
                  priority
                  onError={() => setLogoError(true)}
                />
              ) : (
                <div className="h-11 w-11 bg-mafad-navy rounded-xl flex items-center justify-center">
                  <span className="text-white font-black text-xl">M</span>
                </div>
              )}
            </div>
            <div className="flex flex-col">
              <span className="text-xl font-black text-mafad-navy">MAFAD</span>
              <span className="text-[9px] font-semibold text-mafad-cyan tracking-[0.25em] uppercase">
                TECHNOLOGY GROUP
              </span>
            </div>
          </Link>

          {/* DESKTOP NAVIGATION - FIXED */}
          <div className="hidden lg:flex items-center space-x-1">
            {menuConfig.mainNav.map((item) => {
              if (item.type === "link") {
                return (
                  <Link
                    key={item.id}
                    href={item.href}
                    className="px-4 py-2 text-gray-700 hover:text-mafad-cyan font-medium transition-colors"
                  >
                    {item.label}
                  </Link>
                );
              }

              if (item.type === "dropdown") {
                const Icon = item.icon;
                const isActive = activeDropdown === item.id;

                return (
                  <div key={item.id} className="relative">
                    <button
                      onClick={() => toggleDropdown(item.id)}
                      className={`flex items-center space-x-1 px-4 py-2 font-medium transition-colors ${
                        isActive
                          ? "text-mafad-cyan"
                          : "text-gray-700 hover:text-mafad-cyan"
                      }`}
                    >
                      {Icon && <Icon className="w-4 h-4 mr-1" />}
                      <span>{item.label}</span>
                      <ChevronDown
                        className={`w-4 h-4 transition-transform ${
                          isActive ? "rotate-180" : ""
                        }`}
                      />
                    </button>

                    {isActive && (
                      <div className="absolute top-full left-0 mt-2 w-64 bg-white rounded-xl shadow-xl py-2 border border-gray-100">
                        {item.items.map((subItem) => {
                          const SubIcon = subItem.icon;
                          return (
                            <Link
                              key={subItem.label}
                              href={subItem.href}
                              className="flex items-start px-4 py-3 hover:bg-gray-50"
                              onClick={() => setActiveDropdown(null)}
                            >
                              {SubIcon && (
                                <div className="mr-3 mt-0.5">
                                  <SubIcon className="w-4 h-4 text-gray-400" />
                                </div>
                              )}
                              <div>
                                <span className="block text-sm font-medium text-gray-900">
                                  {subItem.label}
                                </span>
                                {subItem.description && (
                                  <span className="block text-xs text-gray-500 mt-0.5">
                                    {subItem.description}
                                  </span>
                                )}
                              </div>
                            </Link>
                          );
                        })}
                      </div>
                    )}
                  </div>
                );
              }

              if (item.type === "mega") {
                const Icon = item.icon;
                const isActive = activeDropdown === item.id;

                return (
                  <div key={item.id} className="relative">
                    <button
                      onClick={() => toggleDropdown(item.id)}
                      className={`flex items-center space-x-1 px-4 py-2 font-medium transition-colors ${
                        isActive
                          ? "text-mafad-cyan"
                          : "text-gray-700 hover:text-mafad-cyan"
                      }`}
                    >
                      {Icon && <Icon className="w-4 h-4 mr-1" />}
                      <span>{item.label}</span>
                      <ChevronDown
                        className={`w-4 h-4 transition-transform ${
                          isActive ? "rotate-180" : ""
                        }`}
                      />
                    </button>

                    {isActive && (
                      <div className="absolute top-full right-0 mt-2 w-[700px] bg-white rounded-xl shadow-xl p-6 border border-gray-100">
                        <div className="grid grid-cols-2 gap-6">
                          {item.megaContent.columns.map((column, idx) => (
                            <div key={idx}>
                              <h3 className="text-xs font-semibold text-mafad-cyan uppercase tracking-wider mb-3">
                                {column.title}
                              </h3>
                              <div className="space-y-3">
                                {column.items.map((subItem) => {
                                  const SubIcon = subItem.icon;
                                  return (
                                    <Link
                                      key={subItem.label}
                                      href={subItem.href}
                                      className="flex items-start group"
                                      onClick={() => setActiveDropdown(null)}
                                    >
                                      {SubIcon && (
                                        <div className="mr-3 mt-0.5">
                                          <SubIcon className="w-4 h-4 text-gray-400 group-hover:text-mafad-cyan" />
                                        </div>
                                      )}
                                      <div>
                                        <span className="block text-sm font-medium text-gray-900 group-hover:text-mafad-cyan">
                                          {subItem.label}
                                        </span>
                                        <span className="block text-xs text-gray-500">
                                          {subItem.description}
                                        </span>
                                      </div>
                                    </Link>
                                  );
                                })}
                              </div>
                            </div>
                          ))}
                        </div>

                        {/* Featured Card */}
                        <div className="mt-6 pt-6 border-t border-gray-100">
                          <div className="bg-gray-50 rounded-lg p-4">
                            <div className="flex items-center justify-between">
                              <div>
                                <span className="text-xs font-semibold text-mafad-cyan uppercase tracking-wider">
                                  {item.megaContent.featured.badge}
                                </span>
                                <p className="text-lg font-bold text-mafad-navy mt-1">
                                  {item.megaContent.featured.value}
                                </p>
                                <p className="text-sm text-gray-600">
                                  {item.megaContent.location}
                                </p>
                              </div>
                              <div className="text-right">
                                <p className="text-xs text-gray-500">
                                  {item.megaContent.subtitle}
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                );
              }
            })}

            {/* Partner Button */}
            <Link
              href={menuConfig.partnerButton.href}
              className="ml-4 bg-mafad-cyan text-mafad-navy px-6 py-2.5 rounded-xl font-semibold hover:bg-mafad-cyan/90 transition-colors flex items-center space-x-2"
            >
              <Handshake className="w-4 h-4" />
              <span>{menuConfig.partnerButton.label}</span>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden relative w-10 h-10 rounded-xl hover:bg-gray-100 transition-colors flex items-center justify-center"
            aria-label="Toggle menu"
          >
            {isOpen ? (
              <X className="w-5 h-5 text-mafad-navy" />
            ) : (
              <Menu className="w-5 h-5 text-mafad-navy" />
            )}
          </button>
        </div>
      </Container>

      {/* MOBILE MENU */}
      {isOpen && (
        <div className="lg:hidden fixed inset-0 top-[80px] bg-white z-40 overflow-y-auto">
          <div className="min-h-full px-4 py-6">
            <div className="space-y-1">
              {menuConfig.mobileSections.map((sectionId) => {
                const item = menuConfig.mainNav.find(
                  (item) => item.id === sectionId,
                );
                if (!item) return null;

                const Icon = item.icon;
                const isSubmenuOpen = activeMobileSubmenu === item.id;

                if (item.type === "link") {
                  return (
                    <Link
                      key={item.id}
                      href={item.href}
                      className="flex items-center justify-between p-4 rounded-xl hover:bg-gray-50"
                      onClick={() => setIsOpen(false)}
                    >
                      <div className="flex items-center space-x-3">
                        {Icon && <Icon className="w-5 h-5 text-mafad-cyan" />}
                        <span className="font-medium text-gray-900">
                          {item.label}
                        </span>
                      </div>
                      <ChevronRight className="w-4 h-4 text-gray-400" />
                    </Link>
                  );
                }

                return (
                  <div
                    key={item.id}
                    className="border-b border-gray-100 last:border-0"
                  >
                    <button
                      onClick={() => toggleMobileSubmenu(item.id)}
                      className="flex items-center justify-between w-full p-4 rounded-xl hover:bg-gray-50"
                    >
                      <div className="flex items-center space-x-3">
                        {Icon && <Icon className="w-5 h-5 text-mafad-cyan" />}
                        <span className="font-medium text-gray-900">
                          {item.label}
                        </span>
                      </div>
                      <ChevronDown
                        className={`w-4 h-4 text-gray-400 transition-transform duration-200 ${
                          isSubmenuOpen ? "rotate-180 text-mafad-cyan" : ""
                        }`}
                      />
                    </button>

                    {isSubmenuOpen && (
                      <div className="pl-12 pr-4 pb-4 space-y-3">
                        {item.type === "dropdown" &&
                          item.items?.map((subItem) => {
                            const SubIcon = subItem.icon;
                            return (
                              <Link
                                key={subItem.label}
                                href={subItem.href}
                                className="flex items-start py-2"
                                onClick={() => setIsOpen(false)}
                              >
                                {SubIcon && (
                                  <div className="mr-3 mt-0.5">
                                    <SubIcon className="w-4 h-4 text-gray-400" />
                                  </div>
                                )}
                                <div>
                                  <span className="block text-sm font-medium text-gray-700">
                                    {subItem.label}
                                  </span>
                                  {subItem.description && (
                                    <span className="block text-xs text-gray-500">
                                      {subItem.description}
                                    </span>
                                  )}
                                </div>
                              </Link>
                            );
                          })}

                        {item.type === "mega" &&
                          item.megaContent?.columns.map((column, idx) => (
                            <div key={idx} className="mb-4">
                              <h4 className="text-xs font-semibold text-mafad-cyan uppercase tracking-wider mb-2">
                                {column.title}
                              </h4>
                              <div className="space-y-2">
                                {column.items.map((subItem) => {
                                  const SubIcon = subItem.icon;
                                  return (
                                    <Link
                                      key={subItem.label}
                                      href={subItem.href}
                                      className="flex items-start py-2"
                                      onClick={() => setIsOpen(false)}
                                    >
                                      {SubIcon && (
                                        <div className="mr-3 mt-0.5">
                                          <SubIcon className="w-4 h-4 text-gray-400" />
                                        </div>
                                      )}
                                      <div>
                                        <span className="block text-sm font-medium text-gray-700">
                                          {subItem.label}
                                        </span>
                                        <span className="block text-xs text-gray-500">
                                          {subItem.description}
                                        </span>
                                      </div>
                                    </Link>
                                  );
                                })}
                              </div>
                            </div>
                          ))}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>

            {/* Mobile Partner Button */}
            <div className="mt-8 pt-6 border-t border-gray-100">
              <Link
                href={menuConfig.partnerButton.href}
                className="flex items-center justify-center space-x-2 w-full bg-mafad-cyan text-mafad-navy px-6 py-4 rounded-xl font-semibold hover:bg-mafad-cyan/90 transition-colors"
                onClick={() => setIsOpen(false)}
              >
                <Handshake className="w-5 h-5" />
                <span>{menuConfig.partnerButton.label}</span>
              </Link>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
