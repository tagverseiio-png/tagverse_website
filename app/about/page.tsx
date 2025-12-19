'use client';

import React from 'react';
import FadeIn from '@/components/ui/FadeIn';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { Layers, Zap, ShieldCheck } from 'lucide-react';
import ParallaxSection from '@/components/ui/ParallaxSection';
import TextReveal from '@/components/ui/TextReveal';

import CounterAnimation from '@/components/ui/CounterAnimation';
import SpotlightCard from '@/components/ui/SpotlightCard';
import ScrollReveal from '@/components/ui/ScrollReveal';

export default function AboutPage() {
    return (
        <div className="bg-porcelain text-midnight pb-20">
            {/* Hero Section */}
            <section className="relative pt-32 pb-8 px-6 max-w-6xl mx-auto overflow-hidden">
                <ParallaxSection speed={-0.2}>
                    <ScrollReveal>
                        <h1 className="text-5xl md:text-6xl font-serif text-midnight mb-8 tracking-tight">
                            <TextReveal text="The Essence of" mode="word" /> <span className="text-signature-end italic"><TextReveal text="TagVerse." mode="word" delay={300} /></span>
                        </h1>
                        <p className="text-xl text-subtext font-light max-w-2xl leading-relaxed">
                            We are not just builders; we are architects of clarity. TagVerse exists to bring poise to the chaos of digital transformation.
                        </p>
                    </ScrollReveal>
                </ParallaxSection>
            </section>

            {/* Impact Stats - New Section */}
            <section className="py-8 bg-white relative z-10 border-b border-subtext/5">
                <div className="max-w-6xl mx-auto px-6">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
                        {[
                            { value: 100, suffix: "%", label: "Client Retention" },
                            { value: 50, suffix: "+", label: "Enterprise AI Agents" },
                            { value: 37, suffix: "K+", label: "Tasks Automated" },
                            { value: 24, suffix: "/7", label: "System Uptime" }
                        ].map((stat, idx) => (
                            <ScrollReveal key={idx} delay={idx * 100} direction="up" distance={20}>
                                <div>
                                    <div className="text-4xl md:text-5xl font-serif text-signature-start mb-2">
                                        <CounterAnimation value={stat.value} suffix={stat.suffix} />
                                    </div>
                                    <div className="text-subtext font-light text-sm uppercase tracking-widest">{stat.label}</div>
                                </div>
                            </ScrollReveal>
                        ))}
                    </div>
                </div>
            </section>


            {/* Brand Story - Our Origin with Video Background */}
            <section className="py-10 relative overflow-hidden">
                <div className="absolute inset-0 z-0">
                    <video
                        autoPlay
                        loop
                        muted
                        playsInline
                        className="w-full h-full object-cover"
                    >
                        <source src="/assets/about-bg.mp4" type="video/mp4" />
                    </video>
                    {/* Reduced opacity overlay to increase background intensity while keeping text readable */}
                    <div className="absolute inset-0 bg-white/60" />
                </div>

                <div className="max-w-4xl mx-auto px-6 relative z-10">
                    <ScrollReveal>
                        <h2 className="text-3xl font-serif text-midnight mb-8 text-center">Our Origin</h2>
                        <div className="prose prose-lg prose-slate mx-auto text-subtext font-light leading-8">
                            <p className="mb-8">
                                Born from a desire to strip away the noise of the modern web, TagVerse was founded on a single principle: <span className="text-midnight font-medium">Intelligence deserves elegance.</span>
                            </p>
                            <p>
                                In an era where &quot;more&quot; is often mistaken for &quot;better,&quot; we chose a different path. We chose restraint. We chose to build systems that are powerful not because they are complex, but because they are intuitive. Our team of strategists and engineers works in unison to craft digital experiences that feel inevitable.
                            </p>
                        </div>
                    </ScrollReveal>
                </div>
            </section>

            {/* Philosophy Section */}
            <section className="py-8 bg-porcelain">
                <div className="max-w-6xl mx-auto px-6">
                    <ScrollReveal>
                        <h2 className="text-3xl font-serif text-midnight mb-10 text-center">Design Philosophy</h2>
                    </ScrollReveal>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {[
                            { title: "Minimalist Modernism", desc: "Generous white space is an active choice. It allows ideas to breathe." },
                            { title: "Disciplined Restraint", desc: "We remove the non-essential until only the pure function remains." },
                            { title: "Enterprise Precision", desc: "Robust, scalable architectures hidden behind silent interfaces." }
                        ].map((item, idx) => (
                            <ScrollReveal key={idx} delay={idx * 150} direction="up" blur="10px">
                                <ParallaxSection speed={idx * 0.05} className='h-full'>
                                    <SpotlightCard className="h-full rounded-[2rem] bg-white text-left p-0 spotlight-card shadow-sm hover:shadow-xl transition-all duration-500">
                                        <div className="p-10 h-full flex flex-col">
                                            <h3 className="text-xl font-serif text-midnight mb-4 relative z-10">{item.title}</h3>
                                            <p className="text-subtext font-light leading-relaxed relative z-10 flex-grow">{item.desc}</p>
                                        </div>
                                    </SpotlightCard>
                                </ParallaxSection>
                            </ScrollReveal>
                        ))}
                    </div>
                </div>
            </section>

            {/* Design Breakdown (Color/Typography) */}
            <section className="py-8 bg-white">
                <div className="max-w-6xl mx-auto px-6">
                    <ScrollReveal>
                        <h2 className="text-3xl font-serif text-midnight mb-8 text-center">Our Visual Language</h2>
                    </ScrollReveal>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                        <ScrollReveal direction="right">
                            <div className="space-y-6">
                                <h3 className="text-2xl font-serif text-midnight">Aesthetic Intelligence</h3>
                                <p className="text-subtext font-light leading-relaxed">
                                    Our visual identity is a reflection of our core belief: that advanced technology should feel effortless. We merge the precision of code with the fluidity of art.
                                </p>
                            </div>
                        </ScrollReveal>
                        <ScrollReveal delay={200} direction="left">
                            <div className="p-8 bg-gradient-to-br from-white to-porcelain rounded-2xl border border-white shadow-xl shadow-midnight/10 relative overflow-hidden group">
                                <div className="absolute inset-0 bg-gradient-to-r from-signature-start/20 to-signature-end/20 opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                                <p className="font-serif text-3xl text-midnight mb-4 relative z-10">
                                    &quot;Simplicity is the ultimate sophistication.&quot;
                                </p>
                                <p className="text-signature-end font-medium text-sm tracking-widest uppercase relative z-10">
                                    – Leonardo da Vinci
                                </p>
                            </div>
                        </ScrollReveal>
                        <ScrollReveal delay={300} className="md:col-span-2 flex justify-center pt-8">
                            <Link href="/services">
                                <Button size="lg" className="rounded-full px-11 text-center">Explore Our Services</Button>
                            </Link>
                        </ScrollReveal>
                    </div>
                </div>
            </section>
        </div>
    );
}
