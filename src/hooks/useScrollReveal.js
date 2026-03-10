import { useEffect, useRef } from 'react';

export default function useScrollReveal(options = { threshold: 0.15, rootMargin: "0px" }) {
    const ref = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('is-visible');
                }
            });
        }, options);

        const el = ref.current;
        if (el) observer.observe(el);

        return () => {
            if (el) observer.unobserve(el);
        };
    }, [options.threshold, options.rootMargin]);

    return ref;
}
