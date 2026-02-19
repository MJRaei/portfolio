"use client";

import { useEffect, useState } from "react";
import { useTheme } from "next-themes";

const lightStops = [
  { r: 250, g: 250, b: 250 }, // neutral white
  { r: 240, g: 228, b: 216 }, // warm sand
  { r: 218, g: 232, b: 245 }, // sky blue
  { r: 232, g: 218, b: 239 }, // lavender
  { r: 220, g: 235, b: 225 }, // sage green
];

const darkStops = [
  { r: 10, g: 10, b: 10 },   // neutral dark
  { r: 20, g: 10, b: 30 },   // deep purple
  { r: 8, g: 18, b: 32 },    // midnight blue
  { r: 28, g: 16, b: 10 },   // dark ember
  { r: 10, g: 20, b: 18 },   // dark teal
];

function lerp(a: number, b: number, t: number) {
  return Math.round(a + (b - a) * t);
}

function getColor(stops: typeof lightStops, progress: number) {
  const clamped = Math.max(0, Math.min(1, progress || 0));
  const segment = clamped * (stops.length - 1);
  const index = Math.min(Math.floor(segment), stops.length - 2);
  const t = segment - index;
  const from = stops[index];
  const to = stops[index + 1];
  return `rgb(${lerp(from.r, to.r, t)}, ${lerp(from.g, to.g, t)}, ${lerp(from.b, to.b, t)})`;
}

export function ScrollBackground() {
  const [scrollProgress, setScrollProgress] = useState(0);
  const { resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    function handleScroll() {
      const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
      if (scrollHeight > 0) {
        setScrollProgress(Math.min(window.scrollY / scrollHeight, 1));
      }
    }

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  if (!mounted) return null;

  const stops = resolvedTheme === "dark" ? darkStops : lightStops;
  const bgColor = getColor(stops, scrollProgress);

  return (
    <div
      className="fixed inset-0 -z-10 transition-colors duration-700 ease-out"
      style={{ backgroundColor: bgColor }}
    />
  );
}
