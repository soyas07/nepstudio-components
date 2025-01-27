import React, { useEffect, useRef } from "react";
import "./CustomCursor.css";

interface CustomCursorProps {
    size?: number;
    color?: string;
    label?: string;
}

const CustomCursor: React.FC<CustomCursorProps> = ({ size = 20, color = "black", label = "" }) => {
    const cursorRef = useRef<HTMLDivElement | null>(null);

    const moveCursor = (e: MouseEvent) => {
        if (cursorRef.current) {
            cursorRef.current.style.transform = `translate(${e.clientX}px, ${e.clientY}px)`;
        }
    };

    useEffect(() => {
        document.addEventListener("mousemove", moveCursor);

        return () => {
        document.removeEventListener("mousemove", moveCursor);
        };
    }, []);

    return (
        <div
            ref={cursorRef}
            className="custom-cursor"
            style={{
                width: `${size}px`,
                height: `${size}px`,
                backgroundColor: color,
                borderRadius: "50%",
            }}
        >{label}</div>
    );
};

export default CustomCursor;
