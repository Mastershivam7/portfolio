import React from 'react';
import useScrollReveal from '../hooks/useScrollReveal';

const timeline = [
    {
        year: "2026",
        title: "Journal App Backend",
        location: "Personal Project",
        desc: "Built a secure journaling backend using Spring Boot",
        projectDetails: "Developed scalable REST APIs with JWT authentication and role-based authorization using Spring Security. Integrated MongoDB Atlas for cloud database, Redis for caching, and Apache Kafka for event-driven communication.",
        tags: ["Java", "Spring Boot", "MongoDB", "JWT", "Redis", "Kafka"],
        accent: "#FF2D78"
    },
    {
        year: "2025",
        title: "Student Management System",
        location: "Academic Project",
        desc: "Developed a CRUD-based student management system",
        projectDetails: "Implemented using JSP, Servlets, and MySQL following MVC architecture. Added session-based authentication, server-side validation, and database operations using JDBC.",
        tags: ["Java", "JSP", "Servlets", "MySQL", "MVC"],
        accent: "#00F5FF"
    },
    {
        year: "2025",
        title: "Portfolio Website",
        location: "Personal Project",
        desc: "Built a responsive developer portfolio",
        projectDetails: "Designed and developed a personal portfolio website using HTML and CSS to showcase backend projects, GitHub work, and technical skills.",
        tags: ["HTML", "CSS", "Frontend"],
        accent: "#FFD700"
    },
    {
        year: "2024",
        title: "Backend Development Journey",
        location: "Self Learning",
        desc: "Started learning Java backend development",
        projectDetails: "Built a strong foundation in Object-Oriented Programming and Data Structures while learning backend development with Java, REST APIs, and database systems.",
        tags: ["Java", "OOP", "DSA", "Backend"],
        accent: "#7C3AED"
    }
];

const TimelineItem = ({ item, idx }) => {
    const revealRef = useScrollReveal();
    const isEven = idx % 2 === 0;

    return (
        <div ref={revealRef} className="reveal relative flex flex-col md:flex-row w-full items-center group mb-16 md:mb-24">
            <div className={`md:hidden absolute left-[7px] top-6 w-1.5 h-1.5 ${item.award ? 'bg-yellow' : 'bg-transparent'} outline outline-4 ${item.award ? 'outline-yellow' : 'outline-bg'} border border-yellow z-10 group-hover:scale-150 transition-transform`}></div>
            <div className={`hidden md:block absolute left-1/2 top-1/2 -translate-y-1/2 -translate-x-1/2 w-3 h-3 ${item.award ? 'bg-yellow' : 'bg-transparent'} outline outline-8 ${item.award ? 'outline-yellow/20' : 'outline-bg'} border-2 border-yellow z-10 group-hover:scale-150 transition-transform`}></div>

            <div className={`w-full md:w-1/2 pl-8 md:pl-0 ${isEven ? 'md:pr-16 md:text-right' : 'md:pl-16 md:order-2 md:text-left'}`}>
                <div
                    className={`p-6 border bg-white/[0.02] rounded-xl transition-colors duration-500 relative h-full`}
                    style={{ borderColor: item.award ? 'rgba(245,230,66,0.2)' : 'rgba(255,255,255,0.05)' }}
                    onMouseEnter={(e) => {
                        e.currentTarget.style.borderColor = item.accent || (isEven ? 'rgba(255,45,120,0.3)' : 'rgba(0,245,255,0.3)');
                        if (item.award) e.currentTarget.style.boxShadow = '0 0 20px rgba(245, 230, 66, 0.2)';
                    }}
                    onMouseLeave={(e) => {
                        e.currentTarget.style.borderColor = item.award ? 'rgba(245,230,66,0.2)' : 'rgba(255,255,255,0.05)';
                        if (item.award) e.currentTarget.style.boxShadow = 'none';
                    }}
                >
                    <div className={`absolute top-0 p-4 font-mono text-[10px] text-muted opacity-50 ${isEven ? 'left-0' : 'right-0'}`}>
                        {item.year}
                    </div>
                    {item.award && (
                        <div className={`absolute -top-3 ${isEven ? 'right-6' : 'left-6'} bg-yellow text-bg font-bold font-sans text-[10px] px-3 py-1 rounded-full whitespace-nowrap z-20 shadow-md`}>
                            {item.award} 🏆
                        </div>
                    )}
                    <h3 className="font-bebas text-3xl md:text-4xl text-yellow mb-2 mt-4 flex items-center gap-3 justify-start md:justify-end">
                        {!isEven && item.title}
                        {isEven && item.title}
                    </h3>
                    <p className="font-mono text-xs text-pink mb-4">📍 {item.location}</p>
                    <div className={`flex flex-wrap gap-2 gap-y-2 mt-4 font-mono text-[11px] text-muted ${isEven ? 'md:justify-end' : 'md:justify-start'}`}>
                        {item.tags.map((tag, i) => (
                            <span key={i} className="bg-white/5 px-2 py-1 rounded border border-white/10">{tag}</span>
                        ))}
                    </div>
                </div>
            </div>

            <div className={`w-full md:w-1/2 pl-8 md:pl-0 mt-4 md:mt-0 ${isEven ? 'md:pl-16 md:text-left' : 'md:pr-16 md:order-1 md:text-right'}`}>
                <div
                    className="p-6 border border-white/5 bg-white/[0.02] rounded-xl transition-colors duration-500 h-full flex flex-col justify-center"
                    onMouseEnter={(e) => e.currentTarget.style.borderColor = item.accent || (isEven ? 'rgba(0,245,255,0.3)' : 'rgba(255,45,120,0.3)')}
                    onMouseLeave={(e) => e.currentTarget.style.borderColor = 'rgba(255,255,255,0.05)'}
                >
                    <h4 className="font-sans text-lg md:text-xl text-white mb-2 font-bold">{item.desc}</h4>
                    <p className="font-mono text-[13px] text-muted leading-relaxed hidden md:block">{item.projectDetails}</p>
                </div>
            </div>
        </div>
    );
};

export default function Achievements() {
    const headerRef = useScrollReveal();
    const footerRef = useScrollReveal();

    return (
        <section className="relative w-full py-32 px-6 md:px-12 max-w-5xl mx-auto overflow-hidden">
            <div ref={headerRef} className="reveal flex flex-col items-center justify-center text-center gap-4 mb-24">
                <h2 className="font-bebas text-6xl md:text-8xl leading-none">Projects</h2>
            </div>

            <div className="relative w-full">
                <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-[1px] bg-yellow/20 -translate-x-1/2"></div>
                <div className="md:hidden absolute left-[10px] top-0 bottom-0 w-[1px] bg-yellow/20"></div>

                <div className="flex flex-col w-full text-left">
                    {timeline.map((item, idx) => (
                        <TimelineItem key={idx} item={item} idx={idx} />
                    ))}
                </div>
            </div>

            <div ref={footerRef} className="reveal mt-32 text-center p-8 border border-dashed border-white/20 max-w-3xl mx-auto bg-pink/5 block">
                <p className="font-mono text-sm text-yellow italic">
                    "Building backend systems with Java & Spring Boot · Focused on scalable APIs, secure authentication, and real-world applications. Still learning."
                </p>
            </div>
        </section>
    );
}
