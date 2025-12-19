'use client';

import React from 'react';
import Link from 'next/link';
import { ArrowUpRight, Brain, Layers, ShieldCheck, Zap, Code2, Globe } from 'lucide-react';
import { Button } from '@/components/ui/button';
import FadeIn from '@/components/ui/FadeIn';
import ParallaxVideo from '@/components/ui/ParallaxVideo';
import ParallaxSection from '@/components/ui/ParallaxSection';
import MouseParallax from '@/components/ui/MouseParallax';
import ParallaxImage from '@/components/ui/ParallaxImage';
import TextReveal from '@/components/ui/TextReveal';
import MagneticWrapper from '@/components/ui/MagneticWrapper';
import AnimatedBackground from '@/components/ui/AnimatedBackground';
import ScrollReveal from '@/components/ui/ScrollReveal';


const Hero = () => {
  return (
    <section className="relative min-h-[90vh] flex items-center pt-24 md:pt-32 pb-12 overflow-hidden">
      {/* Background Video - Expanded to Hero Dimensions */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover z-0"
      >
        <source src="/assets/home.bg.mp4" type="video/mp4" />
      </video>

      {/* Added Overlay to mute video intensity */}
      <div className="absolute inset-0 bg-white/60 z-[0]" />

      {/* Soft Purple Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-porcelain/50 to-porcelain pointer-events-none z-[1]" />

      <div className="max-w-6xl mx-auto px-6 relative z-10 w-full">
        <div className="max-w-5xl">
          <ParallaxSection speed={-0.2}>
            <MouseParallax strength={0.02}>
              <div className="mb-12 md:mb-8">
                {/* Replaced FadeIn H1 with TextReveal for word-by-word entry */}
                <h1 className="text-4xl sm:text-5xl md:text-7xl font-serif font-medium tracking-tight text-midnight leading-[1.1] md:leading-[1.05]">
                  <TextReveal text="AI Solutions & Automation" delay={200} />
                  <span className="text-subtext font-light italic pr-4 font-sans text-3xl sm:text-5xl md:text-6xl inline-block transform translate-y-[-4px] md:translate-y-[-8px]">with</span>
                  <div className="inline-block pb-1">
                    <TextReveal
                      text="poise & precision."
                      delay={100}
                      mode="char"
                      stagger={0.03}
                      className="bg-clip-text text-transparent bg-gradient-to-r from-purple-700 to-signature-end drop-shadow-sm filter"
                    />
                  </div>
                </h1>
              </div>
            </MouseParallax>
          </ParallaxSection>

          <ParallaxSection speed={0.1}>
            <MouseParallax strength={0.01}>
              <FadeIn delay={1200} duration={1}>
                <p className="text-lg sm:text-xl md:text-2xl text-subtext leading-relaxed max-w-2xl mb-10 font-light tracking-wide">
                  TagVerse is a premier AI Solutions & Automation Agency helping businesses scale with custom AI automation systems, GPT-based AI agents, AI chatbots, SaaS platforms, and AI marketing automation.
                </p>
              </FadeIn>
            </MouseParallax>
          </ParallaxSection>

          <ParallaxSection speed={0.2}>
            <FadeIn delay={1500} direction="up">
              <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 items-start sm:items-center">
                <Link href="/contact" className="w-full sm:w-auto">
                  <MagneticWrapper strength={0.3}>
                    <Button variant="default" size="default" icon className="w-full sm:w-auto">Start Transformation</Button>
                  </MagneticWrapper>
                </Link>
                <Link href="/services" className="w-full sm:w-auto">
                  <MagneticWrapper strength={0.3}>
                    <Button variant="outline" size="default" className="w-full sm:w-auto">View Capabilities</Button>
                  </MagneticWrapper>
                </Link>
              </div>
            </FadeIn>
          </ParallaxSection>
        </div>
      </div>
    </section>
  );
};

const WhatIsTagVerse = () => {
  const videoRef = React.useRef<HTMLVideoElement>(null);

  React.useEffect(() => {
    if (videoRef.current) {
      videoRef.current.playbackRate = 0.75;
    }
  }, []);

  return (
    <section className="py-16 md:py-24 relative z-10 overflow-hidden bg-porcelain/30">
      {/* Realistic Ambient Lighting - Scene Illumination */}
      <div className="absolute inset-0 pointer-events-none">
        <MouseParallax strength={0.02} className="absolute top-0 left-0 w-full h-full">
          {/* Main Light Source (Top Left) */}
          <div className="absolute top-[-20%] left-[-10%] w-[400px] md:w-[800px] h-[400px] md:h-[800px] bg-gradient-radial from-white/40 to-transparent blur-[80px] md:blur-[120px] opacity-40 mix-blend-soft-light" />
          {/* Ambient Fill (Bottom Right) */}
          <div className="absolute bottom-[-20%] right-[-10%] w-[400px] md:w-[800px] h-[400px] md:h-[800px] bg-signature-end/10 rounded-full blur-[100px] md:blur-[150px] opacity-30" />
        </MouseParallax>
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-center">

          {/* Left Column: Content */}
          <ParallaxSection speed={0.05} className="order-2 lg:order-1">
            <ScrollReveal direction="right" duration={1.2} distance={40}>
              <div className="space-y-8 md:space-y-10 relative">
                <MouseParallax strength={-0.01} className="relative z-10">
                  <h2 className="text-4xl sm:text-5xl lg:text-7xl font-serif text-midnight mb-6 md:mb-8 leading-[0.95] md:leading-[0.9] tracking-tight drop-shadow-sm">
                    AI-Powered
                    <br />
                    Business
                    <br />
                    <span className="italic text-transparent bg-clip-text bg-gradient-to-r from-signature-start to-signature-end filter drop-shadow-sm">Solutions.</span>
                  </h2>
                </MouseParallax>

                <div className="space-y-6 md:space-y-8 text-base sm:text-lg sm:text-xl text-subtext font-light leading-relaxed max-w-lg">
                  <p>
                    Precision meets elegance. We architect intelligent automation ecosystems where specialized AI agents and elegant design converge.
                  </p>
                  <p className="text-midnight/80 font-normal">
                    From custom GPTs to enterprise Chatbots, we transform chaotic workflows into composed clarity.
                  </p>
                </div>

                <div className="flex items-center gap-4 pt-4">
                  <div className="h-px w-16 md:w-20 bg-gradient-to-r from-signature-start to-transparent" />
                  <span className="text-xs font-medium tracking-[0.2em] text-signature-end/70 uppercase">Future Manifested</span>
                </div>
              </div>
            </ScrollReveal>
          </ParallaxSection>

          {/* Right Column: Realistic 3D Globe Composition */}
          <ParallaxSection speed={-0.2} className="order-1 lg:order-2 flex justify-center lg:justify-end relative perspective-1000">
            <ScrollReveal delay={200} direction="left" duration={1.5} distance={50} blur="20px">
              <div className="relative">

                {/* Floating Glass Particles - Simulated Depth of Field */}
                <div className="absolute top-10 md:top-20 -left-10 md:-left-24 z-20 pointer-events-none blur-[1px]">
                  <MouseParallax strength={0.12} className="w-full h-full">
                    <div className="w-12 h-12 md:w-20 md:h-20 rounded-full bg-gradient-to-b from-white/40 to-white/10 shadow-[0_8px_32px_0_rgba(31,38,135,0.15)] backdrop-blur-md border border-white/30" />
                  </MouseParallax>
                </div>
                <div className="absolute -bottom-6 md:-bottom-12 -right-8 md:-right-16 z-0 pointer-events-none blur-[2px]">
                  <MouseParallax strength={-0.05} className="w-full h-full">
                    <div className="w-20 h-20 md:w-32 md:h-32 rounded-full bg-signature-start/10 shadow-2xl backdrop-blur-3xl" />
                  </MouseParallax>
                </div>

                {/* Main Sphere Container */}
                <MouseParallax strength={0.04} className="relative z-10">
                  <div className="relative w-full max-w-[280px] sm:max-w-md lg:max-w-lg aspect-square rounded-full group isolate will-change-transform mx-auto lg:mx-0">

                    {/* 1. Realistic Deep Shadow (Grounding) */}
                    <div className="absolute inset-4 rounded-full bg-midnight/30 blur-2xl transform translate-y-8 scale-95 -z-10" />

                    {/* 2. Main Clip Container */}
                    <div className="relative h-full w-full rounded-full overflow-hidden shadow-[0_0_0_1px_rgba(255,255,255,0.1),0_20px_60px_-15px_rgba(0,0,0,0.3)] bg-midnight">

                      {/* Video Layer */}
                      <video
                        ref={videoRef}
                        autoPlay
                        loop
                        muted
                        playsInline
                        className="w-full h-full object-cover scale-[1.35] group-hover:scale-[1.4] transition-transform duration-[2s] ease-out will-change-transform"
                        poster="/assets/globe-hero.png"
                      >
                        <source src="/assets/intel-bg.mp4" type="video/mp4" />
                      </video>

                      {/* 3. Inner Ambience & Interaction */}
                      <div className="absolute inset-0 bg-gradient-to-tr from-midnight/60 via-transparent to-white/10 mix-blend-overlay pointer-events-none" />

                      {/* 4. Specular Highlight (The "Gloss" Effect) */}
                      <div className="absolute top-0 right-0 w-3/4 h-3/4 bg-gradient-to-bl from-white/30 via-white/5 to-transparent rounded-full opacity-60 pointer-events-none filter blur-2xl transform translate-x-10 -translate-y-10" />
                      <div className="absolute top-[5%] right-[20%] w-[100px] md:w-[150px] h-[50px] md:h-[80px] bg-white opacity-20 blur-[20px] md:blur-[30px] rounded-full transform -rotate-45 pointer-events-none" />

                      {/* 5. Rim Light (Edge Definition) */}
                      <div className="absolute inset-0 rounded-full ring-1 ring-inset ring-white/20 pointer-events-none" />
                      <div className="absolute inset-0 rounded-full shadow-[inset_0_0_40px_rgba(0,0,0,0.5)] pointer-events-none" />

                    </div>
                  </div>
                </MouseParallax>
              </div>
            </ScrollReveal>
          </ParallaxSection>
        </div>
      </div>
    </section>
  );
};

const CapabilitiesTeaser = () => {
  const capabilities = [
    {
      icon: Brain,
      title: "Custom GPT AI Agents",
      desc: "Deploy intelligent agents that autonomously handle complex workflows. Our custom architecture ensures predictive accuracy and seamless integration with your existing data systems."
    },
    {
      icon: Zap,
      title: "AI Automation Services",
      desc: "Revolutionize your operational efficiency with end-to-end automation. We streamline repetitive processes, allowing your team to focus on strategic growth and innovation."
    },
    {
      icon: Globe,
      title: "AI SaaS & Marketing Automation",
      desc: "Scale your digital presence with powerful, AI-driven marketing engines. Drive e-commerce growth through personalized customer experiences and automated campaign management."
    },
  ];

  return (
    <section className="py-16 relative z-10">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex flex-col md:flex-row md:justify-between md:items-end gap-8 md:gap-0 mb-12 md:mb-16">
          <ParallaxSection speed={0}>
            <ScrollReveal direction="left" distance={20}>
              <h2 className="text-3xl sm:text-4xl font-serif text-midnight">Core Capabilities</h2>
            </ScrollReveal>
          </ParallaxSection>
          <ParallaxSection speed={0}>
            <ScrollReveal delay={100} direction="right" distance={20}>
              <Link href="/services">
                <Button variant="text" size="sm" icon>View All Services</Button>
              </Link>
            </ScrollReveal>
          </ParallaxSection>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {capabilities.map((cap, idx) => (
            <ParallaxSection key={idx} speed={idx * 0.05} className="h-full">
              <MouseParallax strength={0.05} className="h-full">
                <ScrollReveal
                  delay={idx * 200}
                  className="h-full"
                  direction={idx % 3 === 0 ? 'left' : idx % 3 === 1 ? 'up' : 'right'}
                  distance={40}
                  blur="15px"
                >
                  <div className="group p-6 md:p-10 bg-white/80 backdrop-blur-md rounded-3xl border border-white/20 hover:border-signature-start/30 transition-all duration-700 hover:shadow-[0_20px_40px_-15px_rgba(0,0,0,0.1)] hover:-translate-y-2 relative overflow-hidden h-full flex flex-col">
                    <div className="absolute inset-0 bg-gradient-to-br from-signature-start/5 via-purple-100/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />

                    <div className="w-12 h-12 md:w-14 md:h-14 rounded-2xl bg-porcelain flex items-center justify-center mb-6 md:mb-8 group-hover:bg-midnight group-hover:text-white transition-all duration-500 relative z-10 group-hover:scale-110 shadow-sm group-hover:shadow-md">
                      <cap.icon className="w-6 h-6 md:w-7 md:h-7 text-subtext group-hover:text-white transition-colors" strokeWidth={1.5} />
                    </div>

                    <h3 className="text-xl md:text-2xl font-serif text-midnight mb-3 md:mb-4 relative z-10">{cap.title}</h3>
                    <p className="text-base text-subtext font-light leading-relaxed relative z-10 mb-6 md:mb-8 flex-grow">{cap.desc}</p>

                    <div className="relative z-10 flex items-center text-signature-start font-medium text-sm overflow-hidden">
                      <span className="transform translate-y-8 group-hover:translate-y-0 transition-transform duration-500 flex items-center gap-2">
                        Explore Solution <ArrowUpRight className="w-4 h-4" />
                      </span>
                    </div>
                  </div>
                </ScrollReveal>
              </MouseParallax>
            </ParallaxSection>
          ))}
        </div>
      </div>
    </section>
  );
};

const TeamIntro = () => (
  <section className="py-12 md:py-16 overflow-hidden relative z-10">
    <div className="max-w-5xl mx-auto px-6 relative z-10">
      <ParallaxSection speed={0.1}>
        <FadeIn>
          <div className="text-center max-w-3xl mx-auto mb-10 md:mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-serif text-midnight mb-4 md:mb-6">Meet the Visionaries</h2>
            <p className="text-lg md:text-xl text-subtext font-light">
              Our team blends AI expertise with strategic foresight, committed to crafting solutions that redefine the world of AI.
            </p>
          </div>
        </FadeIn>
      </ParallaxSection>

      <ParallaxSection speed={-0.1}>
        <FadeIn delay={200} fullWidth>
          {/* Replaced Static Image Div with ParallaxImage for window effect */}
          <div className="relative w-full aspect-[4/5] sm:aspect-[16/9] md:aspect-[2.5/1] rounded-[2rem] overflow-hidden mb-12 md:mb-16 shadow-2xl shadow-midnight/5 group">
            {/* Using a placeholder image for now, but enabling the parallax effect */}
            <ParallaxImage
              src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=2000&q=80"
              alt="TagVerse Team"
              speed={0.15}
              className="absolute inset-0 w-full h-full"
            />

            {/* Overlay Content remains on top */}
            <div className="absolute inset-0 bg-gradient-to-t md:bg-gradient-to-r from-midnight/90 via-midnight/60 md:via-midnight/40 to-transparent z-10" />

            <div className="absolute bottom-0 left-0 right-0 p-8 md:p-12 z-20">
              <div className="flex flex-col md:flex-row md:justify-between md:items-end gap-6 md:gap-0">
                <div>
                  <h3 className="text-white text-2xl md:text-3xl font-serif mb-2">The Collective</h3>
                  <p className="text-white/80 font-light text-base">Designers, Engineers, Strategists</p>
                </div>
                <Link href="/about">
                  <div className="w-12 h-12 md:w-16 md:h-16 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center hover:bg-white hover:text-midnight transition-all text-white cursor-pointer group-hover:scale-110 duration-500">
                    <ArrowUpRight size={20} className="md:w-6 md:h-6" strokeWidth={1.5} />
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </FadeIn>
      </ParallaxSection>
    </div>
  </section>
);

const ClosingCTA = () => (
  <section className="py-16 md:py-20 relative overflow-hidden z-10">
    <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-white/80 to-transparent pointer-events-none" />
    <div className="max-w-4xl mx-auto px-6 relative z-10 text-center">
      <ParallaxSection speed={0}>
        <FadeIn>
          <h2 className="text-3xl sm:text-5xl md:text-6xl font-serif text-midnight mb-6 md:mb-8 tracking-tight">
            Scale Your Business <span className="text-signature-end italic">with AI.</span>
          </h2>
          <p className="text-lg md:text-2xl text-subtext font-light mb-10 md:mb-12 max-w-2xl mx-auto">
            Ready to architect a future of your business? Let&apos;s discuss your vision.
          </p>
          <Link href="/contact">
            <MagneticWrapper strength={0.4}>
              <Button size="lg" className="h-16 px-10 text-lg md:h-20 md:px-16 md:text-xl rounded-full shadow-2xl shadow-signature-start/30 hover:scale-105 transition-transform w-full sm:w-auto">
                Schedule Consultation
              </Button>
            </MagneticWrapper>
          </Link>
        </FadeIn>
      </ParallaxSection>
    </div>
  </section>
);

export default function Home() {
  return (
    <main className="relative min-h-screen overflow-hidden">
      <AnimatedBackground />
      <Hero />
      <WhatIsTagVerse />
      <CapabilitiesTeaser />
      <TeamIntro />
      <ClosingCTA />
    </main>
  );
}
