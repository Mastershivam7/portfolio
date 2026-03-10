import React from 'react';

export default function Marquee() {
    const text = "JAVA BACKEND DEVELOPER • SPRING BOOT • REST APIs • MONGODB • MYSQL • JWT AUTHENTICATION • SPRING SECURITY • APACHE KAFKA • REDIS • REACT • GIT • DSA • ";

    return (
        <section className="w-full bg-pink overflow-hidden py-3 -rotate-3 scale-110 my-10 border-y border-pink/50 shadow-[0_0_30px_rgba(255,45,120,0.3)]">
            <div className="marquee-track flex whitespace-nowrap text-white font-bebas text-xl tracking-[2px]">
                <span className="px-4">{text}</span>
                <span className="px-4">{text}</span>
                <span className="px-4">{text}</span>
                <span className="px-4">{text}</span>
            </div>
        </section>
    );
}
