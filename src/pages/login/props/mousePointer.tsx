import { useEffect, useState } from "react";

export function useMousePointer() {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: MouseEvent) => {
    console.log("Entered handle mouse");
    setPosition({ x: e.pageX, y: e.pageY });
  };

  useEffect(() => {
    window.addEventListener("mousemove", handleMouseMove);

    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return position;
}
