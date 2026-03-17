"use client";
import { useRef, useState, useEffect, useMemo } from "react";
import {
  motion,
  useInView,
  useMotionValue,
  useSpring,
  useScroll,
  useTransform,
} from "framer-motion";

/* ── Glow Orb ──────────────────────────────────────────── */
export function GlowOrb({
  color = "#0EA5E9",
  size = 400,
  style = {},
  className = "",
}: {
  color?: string;
  size?: number;
  style?: React.CSSProperties;
  className?: string;
}) {
  return (
    <div
      className={`glow-orb ${className}`}
      style={{ width: size, height: size, background: color, ...style }}
    />
  );
}

/* ── Fade In on scroll ─────────────────────────────────── */
export function FadeInView({
  children,
  delay = 0,
  className = "",
  direction = "up",
}: {
  children: React.ReactNode;
  delay?: number;
  className?: string;
  direction?: "up" | "left" | "right" | "scale" | "down";
}) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  const initial =
    direction === "left"  ? { opacity: 0, x: -50 } :
    direction === "right" ? { opacity: 0, x: 50 } :
    direction === "down"  ? { opacity: 0, y: -40 } :
    direction === "scale" ? { opacity: 0, scale: 0.88 } :
                            { opacity: 0, y: 40 };
  return (
    <motion.div
      ref={ref}
      initial={initial}
      animate={inView ? { opacity: 1, x: 0, y: 0, scale: 1 } : {}}
      transition={{ duration: 0.65, delay, ease: [0.22, 1, 0.36, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

/* ── Stagger container ─────────────────────────────────── */
export function StaggerChildren({
  children,
  className = "",
  stagger = 0.1,
  delayStart = 0,
}: {
  children: React.ReactNode;
  className?: string;
  stagger?: number;
  delayStart?: number;
}) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      variants={{
        visible: { transition: { staggerChildren: stagger, delayChildren: delayStart } },
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

/* ── Stagger item ──────────────────────────────────────── */
export function StaggerItem({
  children,
  className = "",
  direction = "up",
}: {
  children: React.ReactNode;
  className?: string;
  direction?: "up" | "left" | "right" | "scale";
}) {
  const ease = [0.22, 1, 0.36, 1] as [number, number, number, number];
  const variants = {
    up:    { hidden: { opacity: 0, y: 30 },    visible: { opacity: 1, y: 0,    transition: { duration: 0.6, ease } } },
    left:  { hidden: { opacity: 0, x: -30 },   visible: { opacity: 1, x: 0,    transition: { duration: 0.6, ease } } },
    right: { hidden: { opacity: 0, x: 30 },    visible: { opacity: 1, x: 0,    transition: { duration: 0.6, ease } } },
    scale: { hidden: { opacity: 0, scale: 0.85 }, visible: { opacity: 1, scale: 1, transition: { duration: 0.5, ease } } },
  };
  return (
    <motion.div variants={variants[direction]} className={className}>
      {children}
    </motion.div>
  );
}

/* ── 3D Tilt Card ──────────────────────────────────────── */
export function TiltCard({
  children,
  className = "",
  intensity = 10,
  glowColor = "rgba(14,165,233,0.08)",
}: {
  children: React.ReactNode;
  className?: string;
  intensity?: number;
  glowColor?: string;
}) {
  const [tilt, setTilt] = useState({ x: 0, y: 0, active: false });
  const handleMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const r = e.currentTarget.getBoundingClientRect();
    setTilt({
      x: ((e.clientY - r.top) / r.height - 0.5) * -intensity,
      y: ((e.clientX - r.left) / r.width - 0.5) * intensity,
      active: true,
    });
  };
  const handleLeave = () => setTilt({ x: 0, y: 0, active: false });
  return (
    <motion.div
      onMouseMove={handleMove}
      onMouseLeave={handleLeave}
      animate={{ rotateX: tilt.x, rotateY: tilt.y }}
      transition={{ type: "spring", stiffness: 280, damping: 22 }}
      style={{ transformStyle: "preserve-3d", perspective: 1000 }}
      className={`relative ${className}`}
    >
      <div
        className="absolute inset-0 pointer-events-none rounded-[inherit] transition-opacity duration-300"
        style={{
          background: `radial-gradient(circle at 50% 50%, ${glowColor}, transparent 70%)`,
          opacity: tilt.active ? 1 : 0,
        }}
      />
      {children}
    </motion.div>
  );
}

/* ── Count Up ──────────────────────────────────────────── */
export function CountUp({
  target,
  suffix = "",
  duration = 2000,
}: {
  target: number;
  suffix?: string;
  duration?: number;
}) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });
  const [count, setCount] = useState(0);
  useEffect(() => {
    if (!inView) return;
    let cur = 0;
    const steps = 60;
    const inc = target / steps;
    const ms = duration / steps;
    const t = setInterval(() => {
      cur += inc;
      if (cur >= target) { setCount(target); clearInterval(t); }
      else setCount(Math.floor(cur));
    }, ms);
    return () => clearInterval(t);
  }, [inView, target, duration]);
  return <span ref={ref}>{count}{suffix}</span>;
}

/* ── Floating Element ──────────────────────────────────── */
export function FloatingElement({
  children,
  amplitude = 12,
  duration = 4,
  delay = 0,
  className = "",
}: {
  children: React.ReactNode;
  amplitude?: number;
  duration?: number;
  delay?: number;
  className?: string;
}) {
  return (
    <motion.div
      animate={{ y: [0, -amplitude, 0] }}
      transition={{ repeat: Infinity, duration, ease: "easeInOut", delay }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

/* ── Magnetic Button ───────────────────────────────────── */
export function MagneticButton({
  children,
  className = "",
  strength = 0.25,
}: {
  children: React.ReactNode;
  className?: string;
  strength?: number;
}) {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const sx = useSpring(x, { stiffness: 200, damping: 15 });
  const sy = useSpring(y, { stiffness: 200, damping: 15 });
  const handleMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const r = e.currentTarget.getBoundingClientRect();
    x.set((e.clientX - r.left - r.width / 2) * strength);
    y.set((e.clientY - r.top - r.height / 2) * strength);
  };
  return (
    <motion.div
      style={{ x: sx, y: sy }}
      onMouseMove={handleMove}
      onMouseLeave={() => { x.set(0); y.set(0); }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

/* ── Animated Section Header ───────────────────────────── */
export function AnimatedSectionHeader({
  badge,
  title,
  highlight,
  sub,
  light = false,
  shimmer = false,
}: {
  badge: string;
  title: string;
  highlight?: string;
  sub?: string;
  light?: boolean;
  shimmer?: boolean;
}) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      className="text-center mb-16"
    >
      <motion.span
        className="pill-badge mb-4 inline-block"
        initial={{ scale: 0.8, opacity: 0 }}
        animate={inView ? { scale: 1, opacity: 1 } : {}}
        transition={{ delay: 0.1, duration: 0.4 }}
        style={light ? { background: "rgba(255,255,255,0.15)", color: "white", borderColor: "rgba(255,255,255,0.3)" } : {}}
      >
        {badge}
      </motion.span>
      <h2 className="section-title mb-2" style={light ? { color: "white" } : {}}>
        {title}
        {highlight && (
          <> <span className={shimmer ? "shimmer-text" : "gradient-text"}>{highlight}</span></>
        )}
      </h2>
      <div className="accent-divider" />
      {sub && (
        <motion.p
          className="section-subtitle mt-4"
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 0.3, duration: 0.6 }}
          style={light ? { color: "rgba(255,255,255,0.75)" } : {}}
        >
          {sub}
        </motion.p>
      )}
    </motion.div>
  );
}

/* ── Word-by-word heading reveal ───────────────────────── */
export function AnimatedHeading({
  text,
  className = "",
  delay = 0,
  as: Tag = "h2",
}: {
  text: string;
  className?: string;
  delay?: number;
  as?: "h1" | "h2" | "h3";
}) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-40px" });
  const words = text.split(" ");
  const MotionTag = motion[Tag];
  return (
    <MotionTag
      ref={ref}
      className={className}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      variants={{ visible: { transition: { staggerChildren: 0.08, delayChildren: delay } } }}
    >
      {words.map((word, i) => (
        <motion.span
          key={i}
          className="inline-block mr-[0.22em]"
          variants={{
            hidden: { opacity: 0, y: 20 },
            visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] } },
          }}
        >
          {word}
        </motion.span>
      ))}
    </MotionTag>
  );
}

/* ── Parallax Section ───────────────────────────────────── */
export function ParallaxSection({
  children,
  className = "",
  speed = 0.3,
  style = {},
}: {
  children: React.ReactNode;
  className?: string;
  speed?: number;
  style?: React.CSSProperties;
}) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], ["0%", `${speed * 100}%`]);
  return (
    <div ref={ref} className={`relative overflow-hidden ${className}`} style={style}>
      <motion.div style={{ y }} className="will-change-transform">
        {children}
      </motion.div>
    </div>
  );
}

/* ── Floating Particles (decorative bg dots) ────────────── */
export function FloatingParticles({ count = 12, color = "rgba(14,165,233,0.18)" }: { count?: number; color?: string }) {
  const [mounted, setMounted] = useState(false);
  useEffect(() => { setMounted(true); }, []);

  // Memoize so positions stay stable across re-renders once mounted
  const particles = useMemo(() =>
    Array.from({ length: count }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 6 + 3,
      dur: Math.random() * 6 + 5,
      delay: Math.random() * 4,
    })),
  [count]);

  if (!mounted) return null;

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden>
      {particles.map((p) => (
        <motion.div
          key={p.id}
          className="absolute rounded-full"
          style={{ left: `${p.x}%`, top: `${p.y}%`, width: p.size, height: p.size, background: color }}
          animate={{ y: [0, -28, 0], opacity: [0.4, 1, 0.4], scale: [1, 1.3, 1] }}
          transition={{ duration: p.dur, delay: p.delay, repeat: Infinity, ease: "easeInOut" }}
        />
      ))}
    </div>
  );
}

/* ── Scroll-triggered Count-Up Number ──────────────────── */
export function CountUpNumber({
  target,
  suffix = "",
  prefix = "",
  duration = 1800,
  className = "",
}: {
  target: number;
  suffix?: string;
  prefix?: string;
  duration?: number;
  className?: string;
}) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  const [count, setCount] = useState(0);
  useEffect(() => {
    if (!inView) return;
    let start = 0;
    const steps = 60;
    const inc = target / steps;
    const iv = duration / steps;
    const t = setInterval(() => {
      start += inc;
      if (start >= target) { setCount(target); clearInterval(t); }
      else setCount(Math.floor(start));
    }, iv);
    return () => clearInterval(t);
  }, [inView, target, duration]);
  return <span ref={ref} className={className}>{prefix}{count}{suffix}</span>;
}

/* ── Scroll Reveal (slide + fade) ───────────────────────── */
export function ScrollReveal({
  children,
  delay = 0,
  direction = "up",
  className = "",
}: {
  children: React.ReactNode;
  delay?: number;
  direction?: "up" | "down" | "left" | "right";
  className?: string;
}) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  const dirs = {
    up:    { hidden: { y: 50, opacity: 0 }, visible: { y: 0, opacity: 1 } },
    down:  { hidden: { y: -50, opacity: 0 }, visible: { y: 0, opacity: 1 } },
    left:  { hidden: { x: -60, opacity: 0 }, visible: { x: 0, opacity: 1 } },
    right: { hidden: { x: 60, opacity: 0 }, visible: { x: 0, opacity: 1 } },
  };
  return (
    <motion.div
      ref={ref}
      className={className}
      variants={dirs[direction]}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      transition={{ duration: 0.75, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
}

/* ── Stagger Children on Scroll ─────────────────────────── */
export function StaggerOnScroll({
  children,
  className = "",
  stagger = 0.1,
  delay = 0,
}: {
  children: React.ReactNode;
  className?: string;
  stagger?: number;
  delay?: number;
}) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  return (
    <motion.div
      ref={ref}
      className={className}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      variants={{ visible: { transition: { staggerChildren: stagger, delayChildren: delay } } }}
    >
      {children}
    </motion.div>
  );
}

/* ── Individual stagger child ───────────────────────────── */
export function StaggerChild({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return (
    <motion.div
      className={className}
      variants={{
        hidden: { opacity: 0, y: 35 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1] } },
      }}
    >
      {children}
    </motion.div>
  );
}

/* ── Animated gradient text ─────────────────────────────── */
export function GradientText({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return (
    <motion.span
      className={`gradient-text ${className}`}
      animate={{ backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"] }}
      transition={{ duration: 5, repeat: Infinity, ease: "linear" }}
      style={{ backgroundSize: "200% 200%" }}
    >
      {children}
    </motion.span>
  );
}
