import React, { useEffect, useState } from 'react';
import useScrollReveal from '../hooks/useScrollReveal';

const categories = [
    { 
        name: "LANGUAGES", 
        items: ["Java", "C++", "Python", "JavaScript"] 
    },
    { 
        name: "BACKEND", 
        items: ["Spring Boot", "REST APIs", "Servlets", "JDBC"] 
    },
    { 
        name: "DATABASE", 
        items: ["MongoDB", "MySQL"] 
    },
    { 
        name: "SECURITY", 
        items: ["Spring Security", "JWT Authentication"] 
    },
    { 
        name: "MESSAGING / CACHE", 
        items: ["Apache Kafka", "Redis"] 
    },
    { 
        name: "FRONTEND", 
        items: ["React", "HTML5", "CSS3"] 
    },
    { 
        name: "TOOLS", 
        items: ["Git", "GitHub", "Postman"] 
    }
];

export default function TechStack() {
    const headerRef = useScrollReveal();
    const listRef = useScrollReveal();
    const [meterWidth, setMeterWidth] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
            const section = document.getElementById('stack');
            if (section) {
                const rect = section.getBoundingClientRect();
                if (rect.top < window.innerHeight && rect.bottom > 0) {
                    setTimeout(() => setMeterWidth(97), 500);
                }
            }
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <section id="stack" className="relative w-full py-32 px-6 md:px-12 max-w-7xl mx-auto">
            <div ref={headerRef} className="reveal flex items-end gap-4 mb-20">
                <h2 className="font-bebas text-7xl leading-none">TECH STACK</h2>
            </div>

            <div ref={listRef} className="reveal stagger-children space-y-8 max-w-4xl relative z-10">
                {categories.map((cat, idx) => (
                    <div key={idx} className="flex flex-col md:flex-row md:items-baseline gap-2 md:gap-8 border-b border-white/5 pb-4 transition-all hover:border-white/20 group">
                        <h4 className="font-bebas text-yellow text-sm tracking-[3px] w-40 shrink-0">
                            {cat.name}
                        </h4>
                        <div className="flex flex-wrap font-mono text-[13px] text-muted leading-relaxed">
                            {cat.items.map((item, i) => (
                                <React.Fragment key={item}>
                                    <span className="hover:text-cyan transition-colors duration-150 cursor-crosshair">
                                        {item}
                                    </span>
                                    {i < cat.items.length - 1 && <span className="mx-2 opacity-30 text-white">/</span>}
                                </React.Fragment>
                            ))}
                        </div>
                    </div>
                ))}
            </div>

            <div className="mt-32 max-w-3xl ml-auto border border-white/10 p-4 bg-black/50 relative overflow-hidden backdrop-blur-sm">
                <div className="flex justify-between font-mono text-xs uppercase tracking-widest mb-3 relative z-10">
                    <span className="text-muted">Shipping Speed</span>
                    <span className="text-yellow font-bold">{meterWidth}%</span>
                </div>
                <div className="h-2 w-full bg-white/5 relative z-10">
                    <div
                        className="h-full bg-gradient-to-r from-pink to-yellow w-0 transition-all duration-[2s] cubic-bezier(0.16, 1, 0.3, 1)"
                        style={{ width: `${meterWidth}%` }}
                    ></div>
                </div>
                <div className="absolute -right-10 -bottom-10 font-bebas text-pink/10 text-[120px] leading-none pointer-events-none select-none">
                    HUSTLE
                </div>
            </div>
        </section>
    );
}
