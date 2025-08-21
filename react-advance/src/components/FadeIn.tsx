import { useGSAP } from "@gsap/react";
import { useRef, type ReactNode } from "react";
import { gsap } from "gsap";

interface FadeInProps {
  children: ReactNode;
  vars?: {
    opacity?: number;
    x?: number;
    y?: number;
    scale?: number;
    rotation?: number;
    duration?: number;
    delay?: number;
    ease?: string;
    stagger?: number | gsap.StaggerVars;
  };

  as?: any;

  className?: string;

  trigger?: 'mount' | 'scroll';

  scrollTrigger?: {
    start?: string;
    end?: string;
    scrub?: boolean | number;
    toggleActions?: string;
  };
  onComplete?: () => void;
}

export function FadeIn({ 
  children, 
  vars = {},
  as: Element = 'span',
  className,
  trigger = 'mount',
  scrollTrigger,
  onComplete
}: FadeInProps) {
  const el = useRef<HTMLElement>(null);
  
  useGSAP(() => {
    if (!el.current) return;
    
    const defaultVars = {
      duration: 1,
      ease: "power2.out",
      ...vars
    };

    let animation;
    
    if (trigger === 'scroll' && scrollTrigger) {
      animation = gsap.fromTo(
        el.current.children,
        { opacity: 0, ...vars },
        {
          opacity: 1,
          ...defaultVars,
          scrollTrigger: {
            trigger: el.current,
            start: "top 80%",
            end: "bottom 20%",
            toggleActions: "play none none reverse",
            ...scrollTrigger
          },
          onComplete
        }
      );
    } else {
      animation = gsap.from(el.current.children, {
        opacity: 0,
        ...defaultVars,
        onComplete
      });
    }
    
    return () => {
      animation?.kill();
    };
  }, [vars, trigger, scrollTrigger, onComplete]);
  
  return (
    <Element ref={el} className={className}>
      {children}
    </Element>
  );
}

