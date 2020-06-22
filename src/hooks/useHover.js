import { useState, useEffect, useRef } from "react";

export default function useHover() {
  const [hovered, setHovered] = useState(false);
  const ref = useRef(null);

  const inside = () => setHovered(true);

  const outside = () => setHovered(false);

  useEffect(() => {
    const myRef = ref.current;
    myRef.addEventListener("mouseover", inside);
    myRef.addEventListener("mouseleave", outside);
    return () => {
      myRef.removeEventListener("mouseover", inside);
      myRef.removeEventListener("mouseleave", outside);
    };
  }, []);

  return [hovered, ref];
}
