import React, { useEffect, useRef, useState } from 'react';

export default function Cursor() {
    const dotRef = useRef(null);
    const ringRef = useRef(null);
    const requestRef = useRef(null);

    const mouse = useRef({ x: 0, y: 0 });
    const ringPos = useRef({ x: 0, y: 0 });
    const [isHovering, setIsHovering] = useState(false);

    useEffect(() => {
        const onMouseMove = (e) => {
            mouse.current = { x: e.clientX, y: e.clientY };

            if (dotRef.current) {
                dotRef.current.style.transform = `translate3d(${e.clientX}px, ${e.clientY}px, 0) translate(-50%, -50%)`;
            }
        };

        const animateLoop = () => {
            ringPos.current.x += (mouse.current.x - ringPos.current.x) * 0.15;
            ringPos.current.y += (mouse.current.y - ringPos.current.y) * 0.15;

            if (ringRef.current) {
                ringRef.current.style.transform = `translate3d(${ringPos.current.x}px, ${ringPos.current.y}px, 0) translate(-50%, -50%) scale(${isHovering ? 2.5 : 1})`;
                if (isHovering) {
                    ringRef.current.style.backgroundColor = 'rgba(245, 230, 66, 0.2)';
                } else {
                    ringRef.current.style.backgroundColor = 'transparent';
                }
            }

            requestRef.current = requestAnimationFrame(animateLoop);
        };

        const handleMouseOver = (e) => {
            if (e.target.tagName.toLowerCase() === 'a' ||
                e.target.tagName.toLowerCase() === 'button' ||
                e.target.closest('a') ||
                e.target.closest('button')) {
                setIsHovering(true);
            } else {
                setIsHovering(false);
            }
        };

        window.addEventListener('mousemove', onMouseMove);
        window.addEventListener('mouseover', handleMouseOver);
        requestRef.current = requestAnimationFrame(animateLoop);

        return () => {
            window.removeEventListener('mousemove', onMouseMove);
            window.removeEventListener('mouseover', handleMouseOver);
            cancelAnimationFrame(requestRef.current);
        };
    }, [isHovering]);

    return (
        <>
            <div
                ref={ringRef}
                className="fixed top-0 left-0 w-8 h-8 border-[1.5px] border-yellow rounded-full pointer-events-none z-[10000] mix-blend-difference transition-colors duration-200 ease-out"
                style={{ willChange: 'transform' }}
            />
            <div
                ref={dotRef}
                className="fixed top-0 left-0 w-2 h-2 bg-yellow rounded-full pointer-events-none z-[10000] mix-blend-difference"
                style={{ willChange: 'transform' }}
            />
        </>
    );
}
