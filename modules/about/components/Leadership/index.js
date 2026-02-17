"use client";

import { useState } from "react";
import Container from "@/components/ui/Container";
import Image from "next/image";
import { Linkedin, Mail, MapPin, Briefcase, Award } from "lucide-react";
import Link from "next/link";

const teamMembers = [
  {
    id: 1,
    name: "Muyiwa Ayolotu",
    position: "Founder & Group Director",
    department: "Executive Leadership",
    location: "Nigeria & UK",
    bio: "",
    image: "/images/team/muyiwa.jpg",
    social: {
      linkedin: "#",
      email: "muyiwa.ayolotu@mafadtechnology.com",
    },
    expertise: [
      //   "Strategic Planning",
      //   "Business Development",
      //   "Operations Management",
      //   "Technology Innovation",
    ],
    awards: [
      //   "Tech Entrepreneur of the Year 2024",
      //   "Business Leadership Award 2023",
    ],
  },
  {
    id: 2,
    name: "Emily Ayolotu",
    position: "Director of Finance (Group)",
    department: "Finance",
    location: "",
    bio: "",
    image: "/images/team/emily.jpg",
    social: {
      linkedin: "#",
      email: "",
    },
    expertise: [
      //   "FMCG Distribution",
      //   "Supply Chain",
      //   "ICT Services",
      //   "Team Leadership",
    ],
    awards: [],
  },
  {
    id: 3,
    name: "Joseph Ayolotu",
    position: "Director of Operations (Group)",
    department: "Operations",
    location: "",
    bio: "",
    image: "/images/team/joseph.png",
    social: {
      linkedin: "#",
      email: "",
    },
    expertise: [
      //   "Software Architecture",
      //   "Cloud Solutions",
      //   "Renewable Energy",
      //   "Technical Training",
    ],
    awards: [
      //   "Microsoft Certified Trainer",
      //   "Cisco Certified Network Professional",
    ],
  },
  {
    id: 4,
    name: "Dulal Deb",
    position: "Director of Administrations (Group)",
    department: "Administrations",
    location: "",
    bio: "",
    image: "/images/team/dulal_.png",
    social: {
      linkedin: "#",
      email: "",
    },
    expertise: [
      //   "IT Consultancy",
      //   "Business Strategy",
      //   "UK Immigration Compliance",
      //   "Professional Training",
    ],
    awards: [""],
  },
  {
    id: 5,
    name: "Divine Ezelibe",
    position: "Director of Information Technology (Group)",
    department: "ICT",
    location: "",
    bio: "",
    image: "/images/team/divine.png",
    social: {
      linkedin: "#",
      email: "",
    },
    expertise: [
      //   "Retail Operations",
      //   "E-commerce",
      //   "Brand Management",
      //   "Customer Experience",
    ],
    awards: [""],
  },
  //   {
  //     id: 6,
  //     name: "Dr. Amina Yusuf",
  //     position: "Head of ICT Academy",
  //     department: "Training & Development",
  //     location: "Owo, Ondo State",
  //     bio: "Leads professional certification programs and skills development initiatives. PhD in Educational Technology.",
  //     image: "/images/team/placeholder1.png",
  //     social: {
  //       linkedin: "#",
  //       email: "amina.yusuf@mafadtechnology.com",
  //     },
  //     expertise: [
  //       "Curriculum Development",
  //       "Certification Programs",
  //       "EdTech",
  //       "Vocational Training",
  //     ],
  //     awards: ["Excellence in Education 2024"],
  //   },
  //   {
  //     id: 7,
  //     name: "David Thompson",
  //     position: "Head of Logistics",
  //     department: "Logistics & Haulage",
  //     location: "Hull, England",
  //     bio: "Coordinates UK logistics and haulage operations. Specializes in supply chain optimization and last-mile delivery.",
  //     image: "/images/team/placeholder2.png",
  //     social: {
  //       linkedin: "#",
  //       email: "d.thompson@mafadtechservices.co.uk",
  //     },
  //     expertise: [
  //       "Logistics Coordination",
  //       "Supply Chain",
  //       "Fleet Management",
  //       "UK Transport",
  //     ],
  //     awards: ["Logistics Excellence Award 2024"],
  //   },
];

export default function Leadership() {
  const [selectedMember, setSelectedMember] = useState(null);

  return (
    <section id="leadership" className="py-20 bg-white scroll-mt-24">
      <Container>
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-mafad-cyan font-semibold uppercase tracking-wider text-sm">
            Our Team
          </span>
          <h2 className="text-4xl font-bold text-mafad-navy mt-2 mb-6">
            Meet Our Leadership
          </h2>
          <p className="text-lg text-gray-600">
            Experienced professionals dedicated to driving innovation and growth
            across Nigeria and the United Kingdom
          </p>
          <div className="w-24 h-1 bg-mafad-cyan mx-auto mt-6" />
        </div>

        {/* Team Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {teamMembers.map((member) => (
            <div
              key={member.id}
              className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden cursor-pointer"
              onClick={() => setSelectedMember(member)}
            >
              {/* Image Container */}
              <div className="relative h-64 overflow-hidden bg-gradient-to-br from-mafad-navy to-mafad-navy/80">
                <Image
                  src={member.image}
                  alt={member.name}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                  onError={(e) => {
                    e.target.src = `https://ui-avatars.com/api/?name=${encodeURIComponent(member.name)}&background=0A2E4D&color=07E9E9&size=400`;
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                {/* Social Icons */}
                <div className="absolute bottom-4 left-4 right-4 flex justify-center space-x-3 translate-y-10 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                  <Link
                    href={member.social.linkedin}
                    className="w-8 h-8 bg-white rounded-full flex items-center justify-center hover:bg-mafad-cyan transition-colors"
                  >
                    <Linkedin className="w-4 h-4 text-mafad-navy" />
                  </Link>
                  <a
                    href={`mailto:${member.social.email}`}
                    className="w-8 h-8 bg-white rounded-full flex items-center justify-center hover:bg-mafad-cyan transition-colors"
                  >
                    <Mail className="w-4 h-4 text-mafad-navy" />
                  </a>
                </div>
              </div>

              {/* Info */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-mafad-navy mb-1 group-hover:text-mafad-cyan transition-colors">
                  {member.name}
                </h3>
                <p className="text-sm font-semibold text-mafad-cyan mb-1">
                  {member.position}
                </p>
                <div className="flex items-center text-xs text-gray-500 mb-3">
                  <Briefcase className="w-3 h-3 mr-1" />
                  {member.department}
                  <MapPin className="w-3 h-3 ml-2 mr-1" />
                  {member.location}
                </div>
                <p className="text-sm text-gray-600 line-clamp-2">
                  {member.bio}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Director's Note */}
        <div className="mt-20 bg-gradient-to-br from-mafad-navy to-mafad-navy/90 rounded-3xl p-8 md:p-12 text-white">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center space-x-2 mb-6">
              <Award className="w-6 h-6 text-mafad-cyan" />
              <span className="text-mafad-cyan font-semibold uppercase tracking-wider text-sm">
                Director's Message
              </span>
            </div>

            <blockquote className="text-xl md:text-2xl italic font-light text-white/90 mb-6">
              "Our greatest asset is our people. The MAFAD Technology Group team
              comprises dedicated professionals who share a common vision of
              building sustainable, impactful businesses that create value for
              our clients, partners, and communities across Nigeria and the
              United Kingdom."
            </blockquote>

            <div className="flex items-center">
              <div className="relative h-16 w-16 rounded-full overflow-hidden border-2 border-mafad-cyan mr-4">
                <Image
                  src="/images/team/team1.png"
                  alt="Muyiwa Ayolotu"
                  fill
                  className="object-cover"
                  onError={(e) => {
                    e.target.src =
                      "https://ui-avatars.com/api/?name=Muyiwa+Ayolotu&background=07E9E9&color=0A2E4D&size=128";
                  }}
                />
              </div>
              <div>
                <p className="font-bold text-white">Muyiwa Ayolotu</p>
                <p className="text-sm text-mafad-cyan">
                  Founder & Group Director
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Member Modal */}
        {selectedMember && (
          <div
            className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4"
            onClick={() => setSelectedMember(null)}
          >
            <div
              className="bg-white rounded-3xl max-w-4xl w-full max-h-[90vh] overflow-y-auto"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="relative h-80 bg-gradient-to-br from-mafad-navy to-mafad-navy/90">
                <button
                  onClick={() => setSelectedMember(null)}
                  className="absolute top-4 right-4 w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/40 transition-colors z-10"
                >
                  ✕
                </button>

                <div className="absolute bottom-0 left-0 right-0 p-8 bg-gradient-to-t from-black/70 to-transparent">
                  <h3 className="text-3xl font-bold text-white mb-2">
                    {selectedMember.name}
                  </h3>
                  <p className="text-xl text-mafad-cyan">
                    {selectedMember.position}
                  </p>
                </div>
              </div>

              <div className="p-8">
                <div className="grid md:grid-cols-3 gap-8">
                  <div className="md:col-span-2">
                    <h4 className="text-lg font-semibold text-mafad-navy mb-3">
                      Biography
                    </h4>
                    <p className="text-gray-600 mb-6">{selectedMember.bio}</p>

                    <h4 className="text-lg font-semibold text-mafad-navy mb-3">
                      Expertise
                    </h4>
                    <div className="flex flex-wrap gap-2 mb-6">
                      {selectedMember.expertise.map((skill, idx) => (
                        <span
                          key={idx}
                          className="bg-gray-100 px-3 py-1 rounded-full text-sm text-gray-700"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="bg-gray-50 rounded-2xl p-6">
                    <h4 className="text-lg font-semibold text-mafad-navy mb-4">
                      Details
                    </h4>

                    <div className="space-y-4">
                      <div>
                        <p className="text-xs text-gray-500 uppercase">
                          Department
                        </p>
                        <p className="font-medium text-gray-900">
                          {selectedMember.department}
                        </p>
                      </div>
                      <div>
                        <p className="text-xs text-gray-500 uppercase">
                          Location
                        </p>
                        <p className="font-medium text-gray-900">
                          {selectedMember.location}
                        </p>
                      </div>
                      <div>
                        <p className="text-xs text-gray-500 uppercase">Email</p>
                        <a
                          href={`mailto:${selectedMember.social.email}`}
                          className="font-medium text-mafad-cyan hover:underline"
                        >
                          {selectedMember.social.email}
                        </a>
                      </div>

                      <div>
                        <p className="text-xs text-gray-500 uppercase mb-2">
                          Awards & Recognition
                        </p>
                        <div className="space-y-2">
                          {selectedMember.awards.map((award, idx) => (
                            <div
                              key={idx}
                              className="flex items-start space-x-2"
                            >
                              <Award className="w-4 h-4 text-mafad-cyan flex-shrink-0 mt-0.5" />
                              <span className="text-sm text-gray-700">
                                {award}
                              </span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </Container>
    </section>
  );
}
