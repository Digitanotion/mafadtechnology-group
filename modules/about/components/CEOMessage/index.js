"use client";

import { useState } from "react";
import Container from "@/components/ui/Container";
import Image from "next/image";
import { Quote, Play } from "lucide-react";

export default function CEOMessage() {
  const [showVideo, setShowVideo] = useState(false);

  return (
    <section className="py-20 bg-white">
      <Container>
        <div className="max-w-5xl mx-auto">
          <span className="text-mafad-cyan font-semibold uppercase tracking-wider text-sm">
            CEO&apos;s Welcome Message
          </span>
          <h2 className="text-4xl font-bold text-mafad-navy mt-2 mb-8">
            Welcome to MAFAD GROUP LIMITED
          </h2>

          <div className="grid md:grid-cols-5 gap-8 items-start">
            {/* Photo / Video */}
            <div className="md:col-span-2">
              <div className="relative rounded-3xl overflow-hidden bg-mafad-navy aspect-[4/5]">
                {showVideo ? (
                  <video
                    className="w-full h-full object-cover"
                    controls
                    autoPlay
                    preload="none"
                    poster="/images/team/muyiwa-ceo.png"
                  >
                    <source src="/videos/ceo-message.mp4" type="video/mp4" />
                  </video>
                ) : (
                  <>
                    <Image
                      src="/images/team/muyiwa-ceo.png"
                      alt="Muyiwa Ayolotu, Chief Executive Officer, MAFAD Group Limited"
                      fill
                      sizes="(max-width: 768px) 100vw, 40vw"
                      className="object-cover"
                      priority
                    />
                    <button
                      onClick={() => setShowVideo(true)}
                      aria-label="Play CEO welcome message video"
                      className="absolute inset-0 flex items-center justify-center bg-black/20 hover:bg-black/30 transition-colors group"
                    >
                      <span className="w-16 h-16 rounded-full bg-mafad-cyan flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                        <Play className="w-7 h-7 text-mafad-navy ml-1" fill="currentColor" />
                      </span>
                    </button>
                  </>
                )}
              </div>
            </div>

            {/* Quote */}
            <div className="md:col-span-3 relative bg-gray-50 rounded-3xl p-8 md:p-10">
              <Quote className="w-10 h-10 text-mafad-cyan/30 mb-4" />
              <div className="space-y-4 text-lg text-gray-700 leading-relaxed">
                <p>
                  At MAFAD Group Limited, our mission is simple yet powerful:
                  to use innovation, expertise and responsible enterprise to
                  solve problems, develop people, strengthen businesses and
                  create sustainable value.
                </p>
                <p>
                  With strategic operations across Nigeria and the United
                  Kingdom, we are building a diversified business group that
                  connects technology with opportunity, people with skills,
                  businesses with partners and ideas with possibilities.
                </p>
                <p>
                  Our journey is driven by a commitment to excellence,
                  integrity and continuous improvement. Together, we are
                  creating a future of growth, impact and shared success.
                </p>
              </div>

              <div className="mt-8 pt-6 border-t border-gray-200">
                <p className="font-bold text-mafad-navy">Muyiwa Ayolotu</p>
                <p className="text-sm text-gray-600">
                  Chief Executive Officer, MAFAD Group Limited
                </p>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
