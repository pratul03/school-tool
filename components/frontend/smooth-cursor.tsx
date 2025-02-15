"use client";

import { motion, useMotionValue, useSpring } from "framer-motion";
import { useEffect } from "react";

const Cursor = () => {
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  // Apply a spring effect for smooth movement
  const springX = useSpring(x, { stiffness: 300, damping: 20 });
  const springY = useSpring(y, { stiffness: 300, damping: 20 });

  useEffect(() => {
    const updateMousePosition = (e: any) => {
      x.set(e.clientX);
      y.set(e.clientY);
    };

    window.addEventListener("mousemove", updateMousePosition);
    return () => window.removeEventListener("mousemove", updateMousePosition);
  }, [x, y]);

  return (
    <motion.div
      className="fixed top-0 left-0 w-6 h-6 bg-gradient-to-r from-purple-300 to-indigo-300 rounded-full pointer-events-none z-50"
      style={{
        x: springX,
        y: springY,
      }}
    />
  );
};

export default Cursor;
