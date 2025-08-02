import React, { useEffect, useRef } from "react";

export const CursorFollower = () => {
  const dotRef = useRef(null);

  useEffect(() => {
    const dot = dotRef.current;
    let mouseX = 0, mouseY = 0;
    let currentX = 0, currentY = 0;

    const handleMouseMove = (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
    };

    const animate = () => {
      // Smooth animation (lerp)
      currentX += (mouseX - currentX) * 0.15;
      currentY += (mouseY - currentY) * 0.15;

      dot.style.transform = `translate(${currentX}px, ${currentY}px)`;

      requestAnimationFrame(animate);
    };

    document.addEventListener("mousemove", handleMouseMove);
    animate(); // start animation loop

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <div
      ref={dotRef}
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "12px",
        height: "12px",
        borderRadius: "50%",
        backgroundColor: "#111",
        pointerEvents: "none",
        zIndex: 9999,
        transform: "translate(0, 0)",
        transition: "background-color 0.2s ease",
      }}
    />
  );
};

