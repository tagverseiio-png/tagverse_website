'use client';

import React from 'react';
import FadeIn from '@/components/ui/FadeIn';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import Image from 'next/image';
import PerspectiveCard from '@/components/ui/PerspectiveCard';
import TextReveal from '@/components/ui/TextReveal';
import ParallaxSection from '@/components/ui/ParallaxSection';
import ScrollReveal from '@/components/ui/ScrollReveal';

export default function PortfolioPage() {
    const projects = [
        { title: "FinTech AI Automation", category: "Agents & Automation", image: "/assets/fintech-bg.jpg" },
        { title: "Healthcare Intelligent Systems", category: "AI-Powered Solutions", image: "/assets/health-bg.jpg" },
        { title: "E-commerce Scaling Platform", category: "AI Marketing & SaaS", image: "/assets/ecom-bg.jpg" },
        { title: "Predictive Analytics Engine", category: "Data Intelligence", image: "/assets/data-bg.jpg" },
        { title: "Retail Intelligence Suite", category: "Industry Solution", image: "/assets/industry-bg.jpg" },
        { title: "Secure Banking Infrastructure", category: "AI Powered Security", image: "/assets/secutity-bg.jpg" },
    ];

    return (
        <div className="bg-porcelain text-midnight pb-12 overflow-hidden">
            <section className="pt-32 pb-8 px-6 max-w-6xl mx-auto">
                <ParallaxSection speed={-0.1}>
                    <ScrollReveal>
                        <h1 className="text-5xl md:text-6xl font-serif text-midnight mb-8 tracking-tight">
                            <TextReveal text="Proven Excellence in" mode="word" />
                            <br />
                            <span className="text-signature-end italic">
                                <TextReveal text="AI Solutions & Automation" mode="word" delay={300} />
                            </span>
                        </h1>
                    </ScrollReveal>
                </ParallaxSection>
            </section>

            <section className="px-6 max-w-6xl mx-auto mb-12">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-8">
                    {/* Updated with richer data */}
                    {[
                        { title: "FinTech AI Automation", category: "Agents & Automation", image: "/assets/fintech-bg.jpg", result: "40% Efficiency Boost", description: "Autonomous financial processing agents handling high-frequency trading data." },
                        { title: "Healthcare Intelligent Systems", category: "AI-Powered Solutions", image: "/assets/health-bg.jpg", result: "99% Data Accuracy", description: "Diagnostic precision systems powered by deep learning algorithms." },
                        { title: "E-commerce Scaling Platform", category: "AI Marketing & SaaS", image: "/assets/ecom-bg.jpg", result: "2.5x Revenue Growth", description: "Dynamic pricing engines and personalized shopping experiences." },
                        { title: "Predictive Analytics Engine", category: "Data Intelligence", image: "/assets/data-bg.jpg", result: "Real-time Forecasting", description: "Enterprise-grade demand forecasting and supply chain optimization." },
                        { title: "Retail Intelligence Suite", category: "Industry Solution", image: "/assets/industry-bg.jpg", result: "Omnichannel Unity", description: "Unified customer journey tracking across physical and digital storefronts." },
                        { title: "Secure Banking Infrastructure", category: "AI Powered Security", image: "/assets/secutity-bg.jpg", result: "Zero Breach Record", description: "Next-gen fraud detection systems with real-time threat neutralization." },
                    ].map((project, idx) => (
                        <ScrollReveal
                            key={idx}
                            delay={idx * 150}
                            className="w-full"
                            direction={idx % 3 === 0 ? 'left' : idx % 3 === 1 ? 'up' : 'right'}
                            distance={30}
                            blur="10px"
                            viewport={{ once: true, amount: 0.1 }}
                        >
                            <PerspectiveCard className="rounded-[2rem] w-full shadow-lg hover:shadow-2xl transition-shadow duration-500">
                                <div className="group relative aspect-[4/5] md:aspect-[4/3] rounded-[2rem] overflow-hidden cursor-pointer bg-midnight border border-white/10 h-full w-full">
                                    {/* Background Image */}
                                    <Image
                                        src={project.image}
                                        alt={project.title}
                                        fill
                                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                        className="object-cover opacity-80 group-hover:opacity-100 group-hover:scale-110 transition-all duration-1000 ease-out"
                                        priority={idx < 2}
                                    />

                                    {/* Overlay Gradient - Premium & Classy */}
                                    <div className="absolute inset-0 bg-gradient-to-t from-midnight via-midnight/50 to-transparent opacity-90 group-hover:opacity-70 transition-opacity duration-700" />

                                    {/* Content */}
                                    <div className="absolute bottom-0 left-0 p-6 md:p-8 w-full translate-y-0 md:translate-y-2 group-hover:translate-y-0 transition-transform duration-700 ease-out transform-style-3d">
                                        <div className="h-0.5 w-12 bg-signature-start mb-3 md:mb-4 opacity-100 md:opacity-0 group-hover:opacity-100 transition-opacity duration-700 delay-100" />
                                        <p className="text-signature-start text-xs font-bold uppercase tracking-[0.2em] mb-2 md:mb-3 opacity-90 group-hover:opacity-100 transition-opacity translate-z-10">{project.category}</p>
                                        <h3 className="text-white text-xl md:text-2xl font-serif tracking-wide group-hover:text-white transition-colors duration-500 translate-z-20 mb-1 md:mb-2">{project.title}</h3>

                                        {/* Revealed Metric & Description - Always visible on mobile, reveal on hover for desktop */}
                                        <div className="overflow-hidden max-h-[200px] md:max-h-0 group-hover:max-h-[200px] transition-all duration-700 ease-in-out">
                                            <p className="text-white/70 font-light text-sm mb-2 translate-y-0 md:translate-y-4 group-hover:translate-y-0 transition-transform duration-500 delay-100 line-clamp-2">
                                                {project.description}
                                            </p>
                                            <p className="text-white/80 font-light text-sm translate-y-0 md:translate-y-4 group-hover:translate-y-0 transition-transform duration-500 delay-200">
                                                Impact: <span className="text-white font-medium">{project.result}</span>
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </PerspectiveCard>
                        </ScrollReveal>
                    ))}
                </div>
            </section>

            <section className="py-10 text-center bg-white relative z-10">
                <ParallaxSection speed={0.05}>
                    <ScrollReveal>
                        <h2 className="text-3xl font-serif mb-6">Ready to build your success story?</h2>
                        <Link href="/contact">
                            <Button>Connect for Custom Solutions</Button>
                        </Link>
                    </ScrollReveal>
                </ParallaxSection>
            </section>
        </div>
    );
}
