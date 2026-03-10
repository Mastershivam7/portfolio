import React, { useState, useRef } from 'react';
import useScrollReveal from '../hooks/useScrollReveal';
import { ArrowRight, Mail, Github, Linkedin, Instagram } from 'lucide-react';

export const SOCIAL_LINKS = {
    github: "https://github.com/kushwahshivam",
    linkedin: "https://www.linkedin.com/in/kushwahshivam",
    instagram: "https://www.instagram.com/shivamm.kushwah/",
    email: "shivamkushwah97522@gmail.com"
};

export default function Contact() {
    const leftRef = useScrollReveal();
    const rightRef = useScrollReveal({ threshold: 0.15, delay: 200 });
    const [copied, setCopied] = useState(false);
    const btnRef = useRef(null);

    const handleCopy = () => {
        navigator.clipboard.writeText(SOCIAL_LINKS.email);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    };

    const handleMagnetic = (e) => {
        const btn = btnRef.current;
        if (!btn) return;
        const rect = btn.getBoundingClientRect();
        const x = e.clientX - rect.left - rect.width / 2;
        const y = e.clientY - rect.top - rect.height / 2;
        btn.style.transform = `translate(${x * 0.2}px, ${y * 0.2}px)`;
    };

    const resetMagnetic = () => {
        if (btnRef.current) {
            btnRef.current.style.transform = `translate(0px, 0px)`;
        }
    };

    return (
        <section id="contact" className="relative w-full bg-[#04040a] border-t border-white/5 py-32 px-6 md:px-12 mt-20">
            <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-16 lg:gap-8 justify-between">
                <div ref={leftRef} className="reveal flex flex-col w-full lg:w-1/2">
                    <div className="flex flex-col mb-8 leading-[0.85]">
                        <h2 className="font-bebas text-[clamp(80px,10vw,140px)] text-white m-0">LET'S</h2>
                        <h2 className="font-bebas text-[clamp(80px,10vw,140px)] stroke-text m-0 relative">
                            BUILD.
                            <div className="absolute bottom-4 right-0 w-4 h-4 bg-yellow animate-ping"></div>
                        </h2>
                    </div>
                    <p className="font-mono text-[13px] text-muted max-w-sm leading-relaxed border-l border-pink pl-4">
                        Open to collaborations, hackathon teams, and interesting problems.
                    </p>
                </div>

                <div ref={rightRef} className="reveal w-full lg:w-1/2 flex flex-col justify-end">
                    <div className="flex flex-col font-mono text-sm">
                        <a href={`mailto:${SOCIAL_LINKS.email}`} className="flex items-center justify-between py-6 border-b border-white/10 hover:border-yellow hover:bg-yellow/5 transition-all group px-4">
                            <div className="flex items-center gap-4 text-white group-hover:text-yellow transition-colors">
                                <Mail size={16} />
                                <span>{SOCIAL_LINKS.email}</span>
                            </div>
                            <ArrowRight size={16} className="text-muted group-hover:text-yellow group-hover:translate-x-2 transition-all" />
                        </a>
                        <a href={SOCIAL_LINKS.github} target="_blank" rel="noreferrer" className="flex items-center justify-between py-6 border-b border-white/10 hover:border-yellow hover:bg-yellow/5 transition-all group px-4">
                            <div className="flex items-center gap-4 text-white group-hover:text-yellow transition-colors">
                                <Github size={16} />
                                <span>github.com/Shivam</span>
                            </div>
                            <ArrowRight size={16} className="text-muted group-hover:text-yellow group-hover:translate-x-2 transition-all" />
                        </a>
                        <a href={SOCIAL_LINKS.linkedin} target="_blank" rel="noreferrer" className="flex items-center justify-between py-6 border-b border-white/10 hover:border-yellow hover:bg-yellow/5 transition-all group px-4">
                            <div className="flex items-center gap-4 text-white group-hover:text-yellow transition-colors">
                                <Linkedin size={16} />
                                <span>linkedin.com/in/kushwahshivam</span>
                            </div>
                            <ArrowRight size={16} className="text-muted group-hover:text-yellow group-hover:translate-x-2 transition-all" />
                        </a>
                        <a href={SOCIAL_LINKS.instagram} target="_blank" rel="noreferrer" className="flex items-center justify-between py-6 border-b border-white/10 hover:border-yellow hover:bg-yellow/5 transition-all group px-4">
                            <div className="flex items-center gap-4 text-white group-hover:text-yellow transition-colors">
                                <Instagram size={16} />
                                <span>instagram.com/shivamm.kushwah</span>
                            </div>
                            <ArrowRight size={16} className="text-muted group-hover:text-yellow group-hover:translate-x-2 transition-all" />
                        </a>
                    </div>

                    <div className="mt-12 ml-4">
                        <button
                            ref={btnRef}
                            onMouseMove={handleMagnetic}
                            onMouseLeave={resetMagnetic}
                            onClick={handleCopy}
                            className="bg-yellow text-black font-bebas text-2xl px-12 py-4 hover:bg-white hover:scale-105 transition-all duration-300 ease-out will-change-transform shadow-[0_0_20px_rgba(245,230,66,0.2)] hover:shadow-[0_0_30px_rgba(255,255,255,0.4)]"
                        >
                            {copied ? "COPIED ✓" : "COPY EMAIL"}
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
}
