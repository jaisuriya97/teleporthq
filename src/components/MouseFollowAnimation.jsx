import React, { useState, useEffect } from "react";

const MouseFollowAnimation = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (event) => {
      setMousePosition({ x: event.clientX, y: event.clientY });
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <div
      className="follower"
      style={{
        top: mousePosition.y,
        left: mousePosition.x,
      }}
    >
         <div className="dot"></div>
    </div>
  );
};

export default MouseFollowAnimation;
