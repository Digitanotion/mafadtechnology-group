"use client";

import Container from "@/components/ui/Container";
import VideoPlayer from "@/components/ui/VideoPlayer";

export default function OurStory() {
  return (
    <section className="py-20 bg-gray-50">
      <Container>
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <span className="text-mafad-cyan font-semibold uppercase tracking-wider text-sm">
              Our Story
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-mafad-navy mt-2 mb-6">
              Building Businesses. Empowering People.
            </h2>
            <p className="text-lg text-gray-600">
              Watch our Founder &amp; Group Director share how MAFAD Group
              Limited began with a clear ambition - to build sustainable
              businesses and deliver lasting impact across Nigeria and the
              United Kingdom.
            </p>
          </div>
          <VideoPlayer
            src="/videos/company-overview.mp4"
            poster="/images/video-posters/company-overview-poster.jpg"
            alt="MAFAD Group Limited - Global Expansion & Impact"
            aspect="aspect-[4/5] md:aspect-video"
          />
        </div>
      </Container>
    </section>
  );
}
