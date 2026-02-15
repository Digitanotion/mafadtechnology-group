"use client";

import {
  Droplet,
  Package,
  Truck,
  Store,
  ShoppingCart,
  Users,
  MapPin,
  Calendar,
  Star,
  TrendingUp,
  Shield,
  CheckCircle,
  Clock,
  Phone,
  MessageCircle,
  Award,
  BarChart,
  RefreshCw,
  ThumbsUp,
  CreditCard,
  ArrowRight,
  Warehouse,
  Factory,
  ShoppingBag,
} from "lucide-react";
import Container from "@/components/ui/Container";
import Card from "@/components/ui/Card";

// WhatsApp Configuration
const WHATSAPP_NUMBER = "2348123456789"; // Replace with actual number
const WHATSAPP_MESSAGE =
  "Hello! I'm interested in Coca-Cola products. Please provide more information about bulk purchases and pricing.";

const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(WHATSAPP_MESSAGE)}`;

const products = [
  {
    name: "Coca-Cola",
    description: "The original, world-famous refreshing taste",
    sizes: ["50cl", "75cl", "1L", "1.5L", "2L"],
    format: ["Bottles", "Cans", "PET"],
    icon: Droplet,
    color: "from-red-600 to-red-500",
    bgColor: "bg-red-50",
    textColor: "text-red-600",
  },
  {
    name: "Fanta",
    description: "Zesty orange flavor with a fun, vibrant taste",
    sizes: ["50cl", "75cl", "1L", "1.5L"],
    format: ["Bottles", "Cans"],
    icon: Droplet,
    color: "from-orange-500 to-orange-400",
    bgColor: "bg-orange-50",
    textColor: "text-orange-500",
  },
  {
    name: "Sprite",
    description: "Crisp, clean, and refreshing lemon-lime taste",
    sizes: ["50cl", "75cl", "1L", "1.5L"],
    format: ["Bottles", "Cans"],
    icon: Droplet,
    color: "from-green-500 to-green-400",
    bgColor: "bg-green-50",
    textColor: "text-green-500",
  },
  {
    name: "Schweppes",
    description: "Premium mixers and sparkling beverages",
    sizes: ["50cl", "1L"],
    format: ["Bottles"],
    icon: Droplet,
    color: "from-yellow-600 to-yellow-500",
    bgColor: "bg-yellow-50",
    textColor: "text-yellow-600",
  },
  {
    name: "Eva Water",
    description: "Pure, refreshing bottled water",
    sizes: ["50cl", "75cl", "1.5L"],
    format: ["Bottles", "PET"],
    icon: Droplet,
    color: "from-blue-500 to-blue-400",
    bgColor: "bg-blue-50",
    textColor: "text-blue-500",
  },
];

const benefits = [
  {
    icon: Truck,
    title: "Reliable Supply",
    description:
      "Direct from Coca-Cola HBC depots, consistent stock availability",
  },
  {
    icon: Clock,
    title: "Daily Delivery",
    description: "Regular delivery schedules to Owo and surrounding areas",
  },
  {
    icon: CreditCard,
    title: "Flexible Payment",
    description: "Cash, transfer, and payment plans for bulk purchases",
  },
  {
    icon: Shield,
    title: "Authorized Dealer",
    description: "Official Coca-Cola Hellenic Bottling Company sub-dealer",
  },
];

const pricing = [
  {
    tier: "Retail",
    minOrder: "1-5 cases",
    delivery: "Pickup only",
    support: "Standard",
    icon: ShoppingCart,
    popular: false,
  },
  {
    tier: "Wholesale",
    minOrder: "6-20 cases",
    delivery: "Local delivery",
    support: "Priority",
    icon: Package,
    popular: true,
  },
  {
    tier: "Bulk Distributor",
    minOrder: "21+ cases",
    delivery: "Free delivery",
    support: "24/7 Priority",
    icon: Warehouse,
    popular: false,
  },
];

const stats = [
  { label: "Daily Customers", value: "50+", icon: Users },
  { label: "Products Available", value: "15+", icon: Package },
  { label: "Delivery Radius", value: "50km", icon: Truck },
  { label: "Years Serving", value: "4+", icon: Calendar },
];

const testimonials = [
  {
    name: "John Adeleke",
    business: "Supermarket Owner, Owo",
    text: "MAFAD has been my Coca-Cola supplier for 3 years. Never out of stock, always fresh products, and delivery is always on time.",
    rating: 5,
  },
  {
    name: "Blessing Eze",
    business: "Restaurant Owner, Akure",
    text: "The best Coca-Cola distributor in Ondo State. Great prices, friendly service, and they always go the extra mile.",
    rating: 5,
  },
  {
    name: "Michael Ogunleye",
    business: "Event Planner",
    text: "I rely on MAFAD for all my event beverage needs. Bulk orders are handled professionally and delivered promptly.",
    rating: 5,
  },
];

export default function CocaColaDistribution() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-red-600 via-red-600 to-red-700 text-white overflow-hidden">
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
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="flex items-center space-x-2 text-white/90">
                <Droplet className="w-6 h-6" />
                <span className="text-sm font-semibold uppercase tracking-wider">
                  Coca-Cola HBC Sub-Dealer
                </span>
              </div>

              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                Official Distributor.
                <span className="text-white block mt-2">
                  Coca-Cola Products
                </span>
              </h1>

              <p className="text-xl text-white/90 max-w-2xl">
                Authorized sub-dealer for Coca-Cola Hellenic Bottling Company
                (HBC) Nigeria. Serving retailers in Owo, Akure, and surrounding
                communities with fresh, quality products.
              </p>

              <div className="flex flex-wrap gap-4 pt-4">
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center bg-white text-red-600 hover:bg-gray-100 px-8 py-4 text-lg rounded-xl font-semibold transition-all group"
                >
                  <ShoppingCart className="w-5 h-5 mr-2" />
                  Order Now on WhatsApp
                  <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                </a>
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center border-2 border-white text-white hover:bg-white hover:text-red-600 px-8 py-4 text-lg rounded-xl font-semibold transition-all"
                >
                  <Package className="w-5 h-5 mr-2" />
                  Wholesale Inquiry
                </a>
              </div>

              {/* Trust Badges */}
              <div className="flex flex-wrap gap-3 pt-6">
                <div className="flex items-center space-x-1 bg-white/20 px-3 py-1.5 rounded-full">
                  <Award className="w-4 h-4" />
                  <span className="text-sm">Coca-Cola HBC Authorized</span>
                </div>
                <div className="flex items-center space-x-1 bg-white/20 px-3 py-1.5 rounded-full">
                  <Shield className="w-4 h-4" />
                  <span className="text-sm">CAC Registered</span>
                </div>
                <div className="flex items-center space-x-1 bg-white/20 px-3 py-1.5 rounded-full">
                  <MapPin className="w-4 h-4" />
                  <span className="text-sm">Owo, Ondo State</span>
                </div>
              </div>
            </div>

            {/* Stats Grid */}
            <div className="lg:pl-12">
              <div className="grid grid-cols-2 gap-4">
                {stats.map((stat, idx) => {
                  const Icon = stat.icon;
                  return (
                    <div
                      key={idx}
                      className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20"
                    >
                      <Icon className="w-8 h-8 text-white mb-3" />
                      <div className="text-3xl font-bold">{stat.value}</div>
                      <div className="text-sm text-white/80">{stat.label}</div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-white">
        <Container>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {benefits.map((benefit, idx) => {
              const Icon = benefit.icon;
              return (
                <div key={idx} className="text-center p-6">
                  <div className="w-16 h-16 bg-red-50 rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <Icon className="w-8 h-8 text-red-600" />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    {benefit.title}
                  </h3>
                  <p className="text-sm text-gray-600">{benefit.description}</p>
                </div>
              );
            })}
          </div>
        </Container>
      </section>

      {/* Products Section */}
      <section className="py-20 bg-gray-50">
        <Container>
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-red-600 font-semibold uppercase tracking-wider text-sm">
              Our Products
            </span>
            <h2 className="text-4xl font-bold text-gray-900 mt-2 mb-4">
              Coca-Cola Range
            </h2>
            <p className="text-xl text-gray-600">
              Fresh, authentic products direct from Coca-Cola HBC Nigeria
            </p>
            <div className="w-24 h-1 bg-red-600 mx-auto mt-6" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {products.map((product, idx) => {
              const Icon = product.icon;
              return (
                <Card
                  key={idx}
                  className="group hover:shadow-xl transition-all duration-300 overflow-hidden"
                >
                  <div
                    className={`${product.bgColor} p-6 flex items-center justify-center`}
                  >
                    <div
                      className={`w-20 h-20 rounded-full bg-gradient-to-br ${product.color} p-5 flex items-center justify-center`}
                    >
                      <Icon className="w-full h-full text-white" />
                    </div>
                  </div>
                  <div className="p-6">
                    <h3
                      className={`text-2xl font-bold ${product.textColor} mb-2`}
                    >
                      {product.name}
                    </h3>
                    <p className="text-gray-600 mb-4">{product.description}</p>

                    <div className="space-y-3">
                      <div>
                        <p className="text-xs font-semibold text-gray-500 uppercase mb-1">
                          Sizes
                        </p>
                        <div className="flex flex-wrap gap-2">
                          {product.sizes.map((size, i) => (
                            <span
                              key={i}
                              className="bg-gray-100 px-2 py-1 rounded text-xs text-gray-700"
                            >
                              {size}
                            </span>
                          ))}
                        </div>
                      </div>
                      <div>
                        <p className="text-xs font-semibold text-gray-500 uppercase mb-1">
                          Formats
                        </p>
                        <div className="flex flex-wrap gap-2">
                          {product.format.map((fmt, i) => (
                            <span
                              key={i}
                              className="bg-gray-100 px-2 py-1 rounded text-xs text-gray-700"
                            >
                              {fmt}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>

                    <div className="mt-6 pt-4 border-t border-gray-100">
                      <a
                        href={whatsappUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`inline-flex items-center ${product.textColor} font-semibold hover:opacity-80 transition-colors group`}
                      >
                        Order {product.name}
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

      {/* Pricing Tiers */}
      <section className="py-20 bg-white">
        <Container>
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Pricing Tiers
            </h2>
            <p className="text-xl text-gray-600">
              Choose the plan that works best for your business
            </p>
            <div className="w-24 h-1 bg-red-600 mx-auto mt-6" />
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {pricing.map((tier, idx) => {
              const Icon = tier.icon;
              return (
                <div
                  key={idx}
                  className={`relative rounded-2xl p-8 ${
                    tier.popular
                      ? "bg-gradient-to-br from-red-600 to-red-700 text-white shadow-xl scale-105"
                      : "bg-gray-50 text-gray-900"
                  }`}
                >
                  {tier.popular && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                      <span className="bg-yellow-400 text-gray-900 text-xs font-bold px-3 py-1 rounded-full">
                        MOST POPULAR
                      </span>
                    </div>
                  )}

                  <Icon
                    className={`w-12 h-12 mb-4 ${tier.popular ? "text-white" : "text-red-600"}`}
                  />
                  <h3
                    className={`text-2xl font-bold mb-4 ${tier.popular ? "text-white" : "text-gray-900"}`}
                  >
                    {tier.tier}
                  </h3>

                  <div className="space-y-3 mb-6">
                    <div className="flex items-center">
                      <CheckCircle
                        className={`w-4 h-4 mr-2 ${tier.popular ? "text-white" : "text-red-600"}`}
                      />
                      <span className="text-sm">Min: {tier.minOrder}</span>
                    </div>
                    <div className="flex items-center">
                      <CheckCircle
                        className={`w-4 h-4 mr-2 ${tier.popular ? "text-white" : "text-red-600"}`}
                      />
                      <span className="text-sm">{tier.delivery}</span>
                    </div>
                    <div className="flex items-center">
                      <CheckCircle
                        className={`w-4 h-4 mr-2 ${tier.popular ? "text-white" : "text-red-600"}`}
                      />
                      <span className="text-sm">{tier.support} support</span>
                    </div>
                  </div>

                  <a
                    href={whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`block text-center py-3 px-4 rounded-xl font-semibold transition-all ${
                      tier.popular
                        ? "bg-white text-red-600 hover:bg-gray-100"
                        : "bg-red-600 text-white hover:bg-red-700"
                    }`}
                  >
                    Start Ordering
                  </a>
                </div>
              );
            })}
          </div>
        </Container>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-gray-50">
        <Container>
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              What Our Customers Say
            </h2>
            <p className="text-xl text-gray-600">
              Trusted by retailers across Ondo State
            </p>
            <div className="w-24 h-1 bg-red-600 mx-auto mt-6" />
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {testimonials.map((testimonial, idx) => (
              <Card key={idx} className="hover:shadow-xl transition-shadow">
                <div className="flex items-center space-x-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-5 h-5 fill-yellow-400 text-yellow-400"
                    />
                  ))}
                </div>
                <p className="text-gray-700 mb-4 italic">
                  "{testimonial.text}"
                </p>
                <div>
                  <p className="font-semibold text-gray-900">
                    {testimonial.name}
                  </p>
                  <p className="text-sm text-gray-500">
                    {testimonial.business}
                  </p>
                </div>
              </Card>
            ))}
          </div>
        </Container>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-white">
        <Container>
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="text-red-600 font-semibold uppercase tracking-wider text-sm">
                Why Choose MAFAD
              </span>
              <h2 className="text-4xl font-bold text-gray-900 mt-2 mb-6">
                Your Trusted Coca-Cola Partner in Ondo State
              </h2>
              <div className="space-y-4">
                <div className="flex space-x-4">
                  <div className="flex-shrink-0">
                    <div className="w-10 h-10 bg-red-50 rounded-lg flex items-center justify-center">
                      <Factory className="w-5 h-5 text-red-600" />
                    </div>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">
                      Direct from HBC Depots
                    </h3>
                    <p className="text-gray-600">
                      Products sourced directly from Coca-Cola Hellenic Bottling
                      Company
                    </p>
                  </div>
                </div>
                <div className="flex space-x-4">
                  <div className="flex-shrink-0">
                    <div className="w-10 h-10 bg-red-50 rounded-lg flex items-center justify-center">
                      <RefreshCw className="w-5 h-5 text-red-600" />
                    </div>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">
                      Daily Fresh Stock
                    </h3>
                    <p className="text-gray-600">
                      Regular deliveries ensure products are always fresh
                    </p>
                  </div>
                </div>
                <div className="flex space-x-4">
                  <div className="flex-shrink-0">
                    <div className="w-10 h-10 bg-red-50 rounded-lg flex items-center justify-center">
                      <ThumbsUp className="w-5 h-5 text-red-600" />
                    </div>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">
                      Competitive Pricing
                    </h3>
                    <p className="text-gray-600">
                      Best wholesale rates for retailers and bulk buyers
                    </p>
                  </div>
                </div>
                <div className="flex space-x-4">
                  <div className="flex-shrink-0">
                    <div className="w-10 h-10 bg-red-50 rounded-lg flex items-center justify-center">
                      <Truck className="w-5 h-5 text-red-600" />
                    </div>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">
                      Free Delivery
                    </h3>
                    <p className="text-gray-600">
                      Free local delivery for wholesale and bulk orders
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* WhatsApp CTA Card */}
            <div className="lg:pl-12">
              <div className="bg-gradient-to-br from-red-600 to-red-700 rounded-3xl p-8 text-white">
                <div className="flex items-center space-x-3 mb-6">
                  <div className="w-12 h-12 bg-white/20 rounded-2xl flex items-center justify-center">
                    <MessageCircle className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold">Order on WhatsApp</h3>
                    <p className="text-white/90">Fast, easy, and convenient</p>
                  </div>
                </div>

                <p className="text-white/90 mb-6">
                  Place your orders directly on WhatsApp. Our team responds
                  within minutes to confirm availability and arrange delivery.
                </p>

                <div className="space-y-3 mb-6">
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-white/90" />
                    <span className="text-sm">Instant price quotes</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-white/90" />
                    <span className="text-sm">Delivery scheduling</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-white/90" />
                    <span className="text-sm">Bulk order discounts</span>
                  </div>
                </div>

                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center w-full bg-white text-red-600 hover:bg-gray-100 px-6 py-4 rounded-xl font-semibold transition-all group"
                >
                  <MessageCircle className="w-5 h-5 mr-2" />
                  Order on WhatsApp
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </a>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Location & Contact */}
      <section className="py-20 bg-gray-50">
        <Container>
          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Visit or Contact Us
              </h2>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <MapPin className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="font-semibold text-gray-900">Our Location</p>
                    <p className="text-gray-600">Owo, Ondo State, Nigeria</p>
                    <p className="text-sm text-gray-500 mt-1">
                      Serving Owo, Akure, and surrounding communities
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <Clock className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="font-semibold text-gray-900">
                      Business Hours
                    </p>
                    <p className="text-gray-600">
                      Monday - Saturday: 8:00 AM - 6:00 PM
                    </p>
                    <p className="text-gray-600">
                      Sunday: Closed (Delivery only)
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <Phone className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="font-semibold text-gray-900">Quick Order</p>
                    <p className="text-gray-600">
                      Click the WhatsApp button below to order instantly
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                Ready to Order?
              </h3>
              <p className="text-gray-600 mb-6">
                Get in touch with us on WhatsApp for fastest response. We're
                here to help with all your beverage needs.
              </p>
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center w-full bg-red-600 text-white hover:bg-red-700 px-6 py-4 rounded-xl font-semibold transition-all group"
              >
                <MessageCircle className="w-5 h-5 mr-2" />
                Chat on WhatsApp
                <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
              </a>
            </div>
          </div>
        </Container>
      </section>

      {/* Final CTA */}
      <section className="py-20 bg-red-600">
        <Container>
          <div className="text-center max-w-3xl mx-auto">
            <Droplet className="w-12 h-12 text-white mx-auto mb-6" />
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Start Your Coca-Cola Journey Today
            </h2>
            <p className="text-lg text-white/90 mb-8">
              Join hundreds of satisfied retailers who trust MAFAD for their
              Coca-Cola supply.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center bg-white text-red-600 hover:bg-gray-100 px-8 py-4 text-lg rounded-xl font-semibold transition-all"
              >
                <ShoppingCart className="w-5 h-5 mr-2" />
                Place Your First Order
              </a>
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center bg-transparent text-white border-2 border-white hover:bg-white hover:text-red-600 px-8 py-4 text-lg rounded-xl font-semibold transition-all"
              >
                <Package className="w-5 h-5 mr-2" />
                Wholesale Registration
              </a>
            </div>
            <p className="text-sm text-white/80 mt-6">
              ⚡ Typical response time: &lt; 5 minutes on WhatsApp
            </p>
          </div>
        </Container>
      </section>
    </>
  );
}
