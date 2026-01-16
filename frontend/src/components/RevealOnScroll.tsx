import React, { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";

interface RevealOnScrollProps {
  children: React.ReactNode;
  className?: string;
  delay?: number; // Optional delay in ms
  direction?: "bottom" | "left" | "right"; // Direction of animation
}

export const RevealOnScroll = ({
  children,
  className,
  delay = 0,
  direction = "bottom",
}: RevealOnScrollProps) => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect(); // Only animate once
        }
      },
      {
        threshold: 0.1, // Trigger when 10% of the element is visible
        rootMargin: "0px 0px -50px 0px", // Trigger slightly before the bottom of the viewport
      }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      observer.disconnect();
    };
  }, []);

  const getTransformClass = () => {
    if (!isVisible) {
      switch (direction) {
        case "left":
          return "-translate-x-20"; // Start from left
        case "right":
          return "translate-x-20"; // Start from right
        case "bottom":
        default:
          return "translate-y-12"; // Start from bottom
      }
    }
    return "translate-x-0 translate-y-0"; // End position (center)
  };

  return (
    <div
      ref={ref}
      className={cn(
        "transition-all duration-1000 ease-out", // Increased duration for smoother side animations
        isVisible ? "opacity-100" : "opacity-0",
        getTransformClass(),
        className
      )}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
};
