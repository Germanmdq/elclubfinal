import { ReactNode } from "react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

/* AnimatedSection Component
   - Wrapper que aplica animaciones de scroll
   - Soporta diferentes tipos de animación
   - Delay configurable para animaciones escalonadas
*/

type AnimationType = "fade-up" | "fade-in" | "slide-left" | "slide-right" | "scale";

interface AnimatedSectionProps {
  children: ReactNode;
  animation?: AnimationType;
  delay?: number;
  duration?: number;
  className?: string;
  threshold?: number;
}

const animationClasses: Record<AnimationType, { initial: string; visible: string }> = {
  "fade-up": {
    initial: "opacity-0 translate-y-10",
    visible: "opacity-100 translate-y-0",
  },
  "fade-in": {
    initial: "opacity-0",
    visible: "opacity-100",
  },
  "slide-left": {
    initial: "opacity-0 translate-x-10",
    visible: "opacity-100 translate-x-0",
  },
  "slide-right": {
    initial: "opacity-0 -translate-x-10",
    visible: "opacity-100 translate-x-0",
  },
  "scale": {
    initial: "opacity-0 scale-95",
    visible: "opacity-100 scale-100",
  },
};

export default function AnimatedSection({
  children,
  animation = "fade-up",
  delay = 0,
  duration = 700,
  className = "",
  threshold = 0.1,
}: AnimatedSectionProps) {
  const { ref, isVisible } = useScrollAnimation({ threshold });
  const { initial, visible } = animationClasses[animation];

  return (
    <div
      ref={ref}
      className={`transition-all ${isVisible ? visible : initial} ${className}`}
      style={{
        transitionDuration: `${duration}ms`,
        transitionDelay: `${delay}ms`,
        transitionTimingFunction: "cubic-bezier(0.4, 0, 0.2, 1)",
      }}
    >
      {children}
    </div>
  );
}
