import React, { useEffect, useRef, ReactElement } from "react";
import gsap from "gsap";

interface MagneticButtonProps {
  children: ReactElement; // Expecting a single React child element
}

export default function MagneticButton({ children }: MagneticButtonProps) {
  const magnetic = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    // Ensure children is a valid React element before cloning
    if (!React.isValidElement(children)) {
      console.error(
        "MagneticButton expects a single valid React element as children."
      );
      return;
    }

    // GSAP animations for magnetic effect
    const xTo = gsap.quickTo(magnetic.current, "x", {
      duration: 1,
      ease: "elastic.out(1, 0.3)",
    });
    const yTo = gsap.quickTo(magnetic.current, "y", {
      duration: 1,
      ease: "elastic.out(1, 0.3)",
    });

    const handleMouseMove = (e: MouseEvent) => {
      if (magnetic.current) {
        const { clientX, clientY } = e;
        const { height, width, left, top } =
          magnetic.current.getBoundingClientRect();
        const x = clientX - (left + width / 2);
        const y = clientY - (top + height / 2);
        xTo(x * 0.35);
        yTo(y * 0.35);
      }
    };

    const handleMouseLeave = () => {
      xTo(0);
      yTo(0);
    };

    if (magnetic.current) {
      magnetic.current.addEventListener("mousemove", handleMouseMove);
      magnetic.current.addEventListener("mouseleave", handleMouseLeave);
    }

    // Cleanup listeners on component unmount
    return () => {
      if (magnetic.current) {
        magnetic.current.removeEventListener("mousemove", handleMouseMove);
        magnetic.current.removeEventListener("mouseleave", handleMouseLeave);
      }
    };
  }, [children]);

  // Use cloneElement to pass the ref down to the child
  return React.cloneElement(children, { ref: magnetic });
}
