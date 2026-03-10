import React from 'react';
import useScrollReveal from '../hooks/useScrollReveal';

export default function About() {
    const leftRef = useScrollReveal();
    const rightRef = useScrollReveal({ threshold: 0.1, delay: 200 });

    return (
        <section id="about" className="relative w-full py-32 px-6 md:px-12 max-w-7xl mx-auto flex flex-col md:flex-row gap-16 item-center justify-between">
            <div className="absolute top-1/2 left-0 -translate-y-1/2 font-bebas ghost-text text-[20vw] select-none pointer-events-none z-0">
                ABOUT
            </div>

            <div ref={leftRef} className="reveal relative z-10 w-full md:w-1/2">
                <div className="flex items-end gap-4 mb-8">
                    <h2 className="font-bebas text-7xl leading-none">ABOUT ME</h2>
                </div>

                <div className="font-mono text-sm text-text leading-[1.8] space-y-6">
                    <p>
                        Hey — I'm Shivam Kushwah, a Full Stack Developer and 3rd-year
                        B.Tech CSE student at SDBCT, Indore. I build AI-driven systems
                        that solve real problems — not demos.
                    </p>
                    <p>
                        From backend systems to scalable REST APIs and secure authentication services, I turn ideas into working applications using Java and Spring Boot. I believe in learning by building real projects, improving them continuously, and writing clean, maintainable code.
                    </p>
                    <p>
                        Currently focused on building scalable backend systems, designing RESTful APIs, and developing secure web applications using Java and Spring Boo
                    </p>
                </div>
            </div>

            <div ref={rightRef} className="reveal relative z-10 w-full md:w-5/12">
                <div className="p-8 border border-white/10 bg-bg/50 backdrop-blur-sm relative group overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-br from-yellow/5 to-pink/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                    <div className="font-mono text-sm space-y-4 text-gray-300 relative z-10">
                        <div className="flex items-center gap-2 mb-6 pb-4 border-b border-white/10">
                            <div className="w-3 h-3 rounded-full bg-red-500"></div>
                            <div className="w-3 h-3 rounded-full bg-yellow"></div>
                            <div className="w-3 h-3 rounded-full bg-green-500"></div>
                        </div>

                        <p className="animate-[fade-in_1s_ease-out_both] delay-100">
                            <span className="text-pink">&gt;</span> <span className="text-cyan">role</span>: "Full Stack Developer"
                        </p>
                        <p className="animate-[fade-in_1s_ease-out_both] delay-[300ms]">
                            <span className="text-pink">&gt;</span> <span className="text-cyan">focus</span>: Backend Systems + Web Applications
                        </p>
                        <p className="animate-[fade-in_1s_ease-out_both] delay-[500ms]">
                            <span className="text-pink">&gt;</span> <span className="text-cyan">location</span>: "Indore, India"
                        </p>
                        <p className="animate-[fade-in_1s_ease-out_both] delay-[700ms]">
                            <span className="text-pink">&gt;</span> <span className="text-cyan">available</span>: <span className="text-yellow">true</span>
                        </p>
                        <p className="animate-[fade-in_1s_ease-out_both] delay-[900ms] flex">
                            <span className="text-pink mr-2">&gt;</span>
                            <span><span className="text-cyan">fun_fact</span>: I learn faster by breaking things and rebuilding them better.<span className="inline-block w-2 h-4 bg-yellow ml-1 animate-pulse"></span></span>
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}
