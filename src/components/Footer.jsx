import React from 'react';

export default function Footer() {
    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
        <footer className="w-full border-t border-white/5 py-8 px-6 md:px-12 bg-bg text-muted font-mono text-[11px] flex justify-between items-center">
            <p>© 2026 Shivam Kushwah — Designed & Built with obsession.</p>
            <button
                onClick={scrollToTop}
                className="hover:text-yellow transition-colors px-4 py-2 hover:bg-white/5 rounded-full"
            >
                Back to top ↑
            </button>
        </footer>
    );
}
