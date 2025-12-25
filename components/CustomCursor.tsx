import React, { useEffect, useState } from "react";

const CustomCursor: React.FC = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isOverText, setIsOverText] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Detect if device is touch-based or small-screen
    const mobileCheck =
      window.matchMedia("(pointer: coarse)").matches || window.innerWidth < 768;
    setIsMobile(mobileCheck);

    if (mobileCheck) return; // stop adding listeners on mobile

    const moveHandler = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    const TEXT_TAGS = new Set([
      "P",
      "H1",
      "H2",
      "H3",
      "H4",
      "H5",
      "H6",
      "SPAN",
      "LI",
      "BLOCKQUOTE",
      "LABEL",
      "TD",
      "TH",
      "CAPTION",
      "SMALL",
      "STRONG",
      "EM",
      "I",
      "B",
      "U",
      "DEL",
      "INS",
      "MARK",
      "CODE",
      "PRE",
      "ABBR",
      "CITE",
      "Q",
    ]);

    const checkIfOverText = (el: HTMLElement | null): boolean => {
      if (!el || el === document.body || el === document.documentElement)
        return false;

      if (TEXT_TAGS.has(el.tagName)) {
        const text = el.textContent?.trim();
        if (text && text.length > 0) return true;
      }

      const computedStyle = window.getComputedStyle(el);
      if (computedStyle.cursor === "text") return true;

      return el.parentElement ? checkIfOverText(el.parentElement) : false;
    };

    const overHandler = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      setIsOverText(checkIfOverText(target));
    };

    window.addEventListener("mousemove", moveHandler);
    window.addEventListener("mouseover", overHandler);
    window.addEventListener("mouseout", () => setIsOverText(false));

    return () => {
      window.removeEventListener("mousemove", moveHandler);
      window.removeEventListener("mouseover", overHandler);
      window.removeEventListener("mouseout", () => setIsOverText(false));
    };
  }, []);

  // If mobile, don't render the custom cursor at all
  if (isMobile) return null;

  const scale = isOverText ? 3.8 : 0.8;

  return (
    <div
      className="fixed left-0 top-0 w-4 h-4 rounded-full pointer-events-none z-[9999] origin-center"
      style={{
        left: position.x - 8,
        top: position.y - 8,
        background: isOverText
          ? "#ffffff"
          : "linear-gradient(135deg, #62cff4, #2c67f2,#2c67f2)",
        mixBlendMode: isOverText ? "difference" : "normal",
        transform: `scale(${scale}) translateZ(0)`,
        transition:
          "transform 0.28s cubic-bezier(0.22, 0.95, 0.34, 1.38), background 0.22s ease, mix-blend-mode 0.22s ease",
      }}
    />
  );
};

export default CustomCursor;
