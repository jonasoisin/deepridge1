import React from "react";
import { cn } from "@/lib/utils";

interface SectionProps extends React.HTMLAttributes<HTMLElement> {
    container?: boolean;
    background?: "white" | "gray" | "dark";
}

export const Section = React.forwardRef<HTMLElement, SectionProps>(
    ({ className, children, container = true, background = "white", ...props }, ref) => {
        const backgrounds = {
            white: "bg-white text-secondary",
            gray: "bg-gray-50 text-secondary",
            dark: "bg-secondary text-white",
        };

        return (
            <section
                ref={ref}
                className={cn("py-16 md:py-24", backgrounds[background], className)}
                {...props}
            >
                {container ? (
                    <div className="container px-4 md:px-6 mx-auto">{children}</div>
                ) : (
                    children
                )}
            </section>
        );
    }
);

Section.displayName = "Section";
