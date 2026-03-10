import React, { useState } from 'react';
import useScrollReveal from '../hooks/useScrollReveal';
import { ArrowUpRight } from 'lucide-react';

const projects = [
    {
        id: "01",
        name: "JOURNAL APP",
        tagline: "Secure personal journaling backend built with Spring Boot.",
        description: "A scalable RESTful backend system for managing personal journal entries. Implements JWT authentication and role-based authorization using Spring Security. Integrated MongoDB Atlas for cloud database, Redis for performance caching, and Apache Kafka for asynchronous event-driven communication.",
        tags: ["Java", "Spring Boot", "MongoDB", "JWT", "Redis", "Kafka"],
        accent: "#FF2D78",
        github: "https://github.com/kushwahshivam/Journal_App",
        features: [
            "JWT_AUTHENTICATION_SECURITY",
            "REDIS_CACHING_PERFORMANCE",
            "KAFKA_EVENT_DRIVEN_ARCH"
        ]
    },
    {
        id: "02",
        name: "STUDENT MANAGEMENT",
        tagline: "Full CRUD student management web system.",
        description: "A Java web application built using JSP, Servlets, and MySQL to manage student records. Implements session-based authentication, MVC architecture, server-side validation, and database operations using JDBC.",
        tags: ["Java", "JSP", "Servlets", "MySQL", "JDBC"],
        accent: "#00F5FF",
        github: "https://github.com/kushwahshivam",
        features: [
            "CRUD_STUDENT_OPERATIONS",
            "SESSION_AUTHENTICATION",
            "MVC_ARCHITECTURE_SYSTEM"
        ]
    },
    {
        id: "03",
        name: "PORTFOLIO WEBSITE",
        tagline: "Personal developer portfolio website.",
        description: "A responsive portfolio website designed to showcase projects, skills, and GitHub work. Built with HTML5 and CSS3 focusing on clean UI, responsiveness, and professional presentation.",
        tags: ["HTML", "CSS", "Responsive Design"],
        accent: "#F5E642",
        github: "https://github.com/kushwahshivam",
        features: [
            "RESPONSIVE_LAYOUT",
            "PROJECT_SHOWCASE",
            "CLEAN_UI_DESIGN"
        ]
    },
    {
        id: "04",
        name: "DSA PRACTICE",
        tagline: "Strengthening problem solving with algorithms.",
        description: "Practicing data structures and algorithms with Java through coding platforms like LeetCode. Focused on recursion, dynamic programming, greedy algorithms, and problem solving patterns.",
        tags: ["Java", "DSA", "Algorithms", "LeetCode"],
        accent: "#7C3AED",
        github: "https://github.com/kushwahshivam",
        features: [
            "DYNAMIC_PROGRAMMING",
            "RECURSION_PROBLEMS",
            "ALGORITHM_OPTIMIZATION"
        ]
    }
];

const ProjectCard = ({ project, index }) => {
    const isEven = index % 2 === 0;
    const revealRef = useScrollReveal();
    const [isHovered, setIsHovered] = useState(false);

    return (
        <div
            ref={revealRef}
            className={`reveal flex flex-col ${isEven ? 'md:flex-row' : 'md:flex-row-reverse'} gap-8 md:gap-16 w-full items-center p-8 border border-white/5 rounded-2xl relative overflow-hidden transition-all duration-700 hover:border-white/20`}
            style={{ backgroundColor: isHovered ? `${project.accent}05` : '#111' }}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            <div className="w-full md:w-1/2 flex flex-col z-10">
                <h3
                    className="font-bebas text-5xl md:text-7xl mb-2 transition-transform duration-500 origin-left"
                    style={{ transform: isHovered ? 'scale(1.02)' : 'scale(1)' }}
                >
                    {project.name}
                </h3>
                <p className="font-mono italic text-sm text-yellow mb-6">
                    {project.tagline}
                </p>
                <p className="font-mono text-[13px] text-muted leading-relaxed mb-8 max-w-lg">
                    {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-8">
                    {project.tags.map((tag, i) => (
                        <span
                            key={i}
                            className={`font-mono text-[10px] px-3 py-1 uppercase tracking-wider rounded-full border border-white/20`}
                            style={{ color: i % 2 === 0 ? 'var(--cyan)' : 'var(--pink)', borderColor: i % 2 === 0 ? 'rgba(0,245,255,0.3)' : 'rgba(255,45,120,0.3)' }}
                        >
                            {tag}
                        </span>
                    ))}
                </div>

                <div className="flex gap-6 font-mono text-sm">
                    <a href={project.github} target="_blank" rel="noreferrer" className="flex items-center gap-1 border-b border-transparent hover:border-yellow text-text hover:text-yellow transition-colors group">
                        GitHub <ArrowUpRight size={14} className="group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition-transform" />
                    </a>
                    {project.liveDemo && (
                        <a href={project.liveDemo} target="_blank" rel="noreferrer" className="flex items-center gap-1 border-b border-transparent hover:border-cyan text-text hover:text-cyan transition-colors group">
                            Live Demo <ArrowUpRight size={14} className="group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition-transform" />
                        </a>
                    )}
                </div>
            </div>

            <div className="w-full md:w-1/2 h-full min-h-[300px] flex items-center justify-center relative select-none">
                <div
                    className="absolute w-64 h-64 blur-[100px] rounded-full transition-opacity duration-1000 pointer-events-none"
                    style={{ backgroundColor: project.accent, opacity: isHovered ? 0.3 : 0.05 }}
                ></div>

                <div className="relative z-10 w-full max-w-sm flex flex-col gap-4">
                    <div className="border-l-2 pl-4 py-1 transition-colors duration-500" style={{ borderColor: isHovered ? project.accent : 'rgba(255,255,255,0.1)' }}>
                        <div className="font-mono text-[10px] text-muted mb-1 tracking-widest">SYSTEM_STATUS</div>
                        <div className="font-bebas text-3xl tracking-wide text-white transition-all duration-500" style={{ textShadow: isHovered ? `0 0 15px ${project.accent}80` : 'none' }}>
                            {project.liveDemo ? "PRODUCTION_DEPLOYED" : "SOURCE_AVAILABLE"}
                        </div>
                    </div>

                    <div className="p-5 border bg-black/40 backdrop-blur-md rounded-lg break-all transition-all duration-500" style={{ borderColor: isHovered ? `${project.accent}40` : 'rgba(255,255,255,0.05)' }}>
                        <div className="font-mono text-[10px] text-muted mb-4 border-b border-white/10 pb-2 flex justify-between">
                            <span>{'>'} ./extract_features.sh</span>
                            <span style={{ color: project.accent }} className={isHovered ? "animate-pulse" : ""}>ACTIVE</span>
                        </div>
                        <ul className="space-y-3 font-mono text-xs">
                            {project.features.map((feat, i) => (
                                <li key={i} className="flex gap-2 items-start" style={{ transitionDelay: `${i * 100}ms` }}>
                                    <span style={{ color: project.accent, opacity: isHovered ? 1 : 0.5 }}>[✔]</span>
                                    <span className="text-gray-300 group-hover:text-white transition-colors">{feat}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default function Projects() {
    const headerRef = useScrollReveal();

    return (
        <section id="projects" className="relative w-full py-32 px-6 md:px-12 max-w-7xl mx-auto">
            <div className="absolute top-32 right-0 font-bebas ghost-text text-[20vw] select-none pointer-events-none z-0 overflow-hidden leading-none">
                WORK
            </div>

            <div ref={headerRef} className="reveal relative z-10 flex items-end gap-4 mb-24">
                <h2 className="font-bebas text-7xl leading-none">PROJECTS</h2>
            </div>

            <div className="space-y-16 relative z-10">
                {projects.map((proj, idx) => (
                    <ProjectCard key={proj.id} project={proj} index={idx} />
                ))}
            </div>
        </section>
    );
}
