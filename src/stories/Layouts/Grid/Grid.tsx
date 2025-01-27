import React, { CSSProperties, ReactNode } from "react";

interface GridProps {
    children: ReactNode;
    columns?: number; // Number of columns
    gap?: string; // Gap between grid items (e.g., "1rem", "10px")
    rowGap?: string; // Specific row gap (overrides `gap` for rows)
    columnGap?: string; // Specific column gap (overrides `gap` for columns)
    style?: CSSProperties; // Custom styles
    className?: string; // Custom class name for styling
    as?: React.ElementType; // Allow using a custom HTML element, e.g., <section> or <div>
}

const Grid: React.FC<GridProps> = ({
    children,
    columns = 12, // Default to 12-column layout
    gap = "1rem",
    rowGap,
    columnGap,
    style,
    className,
    as: Component = "div", // Default wrapper is a <div>
}) => {
    return (
        <Component
            style={{
                display: "grid",
                gridTemplateColumns: `repeat(${columns}, 1fr)`,
                gap,
                rowGap: rowGap || gap,
                columnGap: columnGap || gap,
                ...style,
            }}
            className={className}
        >
            {children}
        </Component>
    );
};

export default Grid;
