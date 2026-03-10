import React from 'react';
import useScrollReveal from '../hooks/useScrollReveal';

export default function Hero() {
    const revealRef = useScrollReveal();

    return (
        <section className="relative w-full h-[100svh] bg-bg overflow-hidden flex items-center justify-center">
            <div className="absolute inset-0 z-0 bg-gradient-to-b from-transparent to-bg/80"></div>

            <div ref={revealRef} className="reveal absolute inset-0 z-10 pointer-events-none p-6 md:p-12 flex flex-col justify-between max-w-7xl mx-auto">
                <div className="flex flex-col items-start px-4 border-l-[3px] border-yellow mt-20 self-start">
                    <h2 className="font-bebas text-4xl md:text-6xl text-white tracking-widest leading-none">
                        Shivam KUSHWAH
                    </h2>
                    <p className="font-mono text-xs md:text-sm text-yellow mt-2">
                        SELECTED WORKS &copy; 2026
                    </p>
                </div>

                <div className="flex-1 flex flex-col justify-center items-center text-center -mt-10">
                    <h1 className="font-bebas text-[clamp(60px,12vw,160px)] leading-[0.85] text-white m-0 relative z-10 drop-shadow-2xl">
                        FULL STACK
                    </h1>
                    <h1 className="font-bebas text-[clamp(60px,12vw,160px)] leading-[0.85] stroke-text m-0 relative z-10 hover:text-white transition-colors duration-500 cursor-crosshair">
                        DEVELOPER
                    </h1>
                </div>

                <div className="flex justify-between items-end mb-8">
                    <div className="max-w-xs font-mono text-[13px] text-muted leading-relaxed">
                        <p>3rd Year B.Tech CSE &middot; SDBCT Indore</p>
                        <p>Building AI-driven real-world systems</p>
                    </div>

                    <div className="flex flex-col items-center gap-2">
                        <span className="font-mono text-xs text-yellow tracking-widest writing-vertical-rl rotate-180">
                            SCROLL
                        </span>
                        <div className="w-[1px] h-12 bg-yellow/30 relative overflow-hidden">
                            <div className="absolute top-0 left-0 w-full h-1/2 bg-yellow animate-[bounce_2s_infinite]"></div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
