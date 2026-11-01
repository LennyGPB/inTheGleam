"use client";
import React, { useEffect, useRef } from "react";
import RevealOnScroll from "../RevealOnScroll/RevealOnScroll";

/* ---------- Carte avec halo qui suit la souris ---------- */

function SpotlightCard({
  className = "",
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) {
  const ref = useRef<HTMLDivElement>(null);

  const onMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const el = ref.current;
    if (!el) return;
    const r = el.getBoundingClientRect();
    el.style.setProperty("--x", `${e.clientX - r.left}px`);
    el.style.setProperty("--y", `${e.clientY - r.top}px`);
  };

  return (
    <div
      ref={ref}
      onMouseMove={onMove}
      className={`spotlight group relative h-full rounded-3xl p-px bg-gray-200/70 transition-transform duration-300 hover:-translate-y-1 ${className}`}
    >
      <div className="relative flex h-full flex-col overflow-hidden rounded-[calc(1.5rem-1px)] bg-white">
        <div
          aria-hidden="true"
          className="spotlight-glow pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
        />
        {children}
      </div>
    </div>
  );
}

function CardText({
  tag,
  title,
  description,
}: {
  tag: string;
  title: string;
  description: string;
}) {
  return (
    <div className="relative p-7 pt-6">
      <span className="font-Gudea text-[11px] font-semibold uppercase tracking-[.25em] text-purple2/70">
        {tag}
      </span>
      <h3 className="mt-2 font-Gudea text-2xl font-bold text-blackGleam group-hover:text-purple2 transition-colors duration-300">
        {title}
      </h3>
      <p className="mt-3 font-Gudea leading-relaxed text-gray-600">
        {description}
      </p>
    </div>
  );
}

/* ---------- Mini-illustrations ---------- */

function Stage({
  children,
  dark = false,
  className = "",
}: {
  children: React.ReactNode;
  dark?: boolean;
  className?: string;
}) {
  return (
    <div
      aria-hidden="true"
      className={`relative m-3 mb-0 flex h-44 items-center justify-center overflow-hidden rounded-2xl ${
        dark
          ? "bg-gradient-to-br from-blackGleam via-[#1a0a2b] to-[#2a0a4a]"
          : "bg-gradient-to-br from-purple2/[0.06] via-white to-purple3/[0.08] border border-purple2/10"
      } ${className}`}
    >
      {children}
    </div>
  );
}

function MotionVisual() {
  const tracks = [
    { left: "4%", width: "38%", color: "from-[#b080dd] to-purple3" },
    { left: "30%", width: "46%", color: "from-purple3 to-purple2" },
    { left: "12%", width: "28%", color: "from-white/70 to-white/40" },
  ];
  return (
    <Stage dark>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_20%,rgba(176,128,221,0.35),transparent_55%)]" />
      {/* Écran de prévisualisation */}
      <div className="absolute left-6 top-5 flex h-[5.5rem] w-14 items-center justify-center rounded-lg border border-white/15 bg-white/5 sm:left-8">
        <div className="h-0 w-0 border-y-[7px] border-l-[11px] border-y-transparent border-l-white/80 transition-transform duration-300 group-hover:scale-125" />
      </div>
      <div className="absolute right-6 top-5 hidden h-14 w-24 rounded-lg border border-white/15 bg-white/5 sm:block" />
      {/* Timeline */}
      <div className="absolute inset-x-6 bottom-5 space-y-2 sm:inset-x-8">
        {tracks.map((t, i) => (
          <div key={i} className="relative h-3 rounded-full bg-white/[0.06]">
            <div
              className={`absolute h-3 rounded-full bg-gradient-to-r ${t.color}`}
              style={{ left: t.left, width: t.width }}
            />
          </div>
        ))}
        <div className="motion-playhead absolute -top-2 bottom-[-6px] w-px bg-white">
          <div className="absolute -left-[4px] -top-1 h-2 w-[9px] rounded-sm bg-white" />
        </div>
      </div>
    </Stage>
  );
}

function CalendarVisual() {
  const posted = new Set([1, 4, 8, 11, 15, 18, 22, 25]);
  return (
    <Stage>
      <div className="grid grid-cols-7 gap-1.5">
        {Array.from({ length: 28 }).map((_, i) => (
          <div
            key={i}
            className={`h-5 w-5 rounded-md transition-all duration-300 ${
              posted.has(i)
                ? "bg-gradient-to-br from-purple2 to-purple3 shadow-md shadow-purple2/30 group-hover:scale-110"
                : "bg-purple2/[0.07]"
            }`}
            style={{ transitionDelay: `${i * 12}ms` }}
          />
        ))}
      </div>
    </Stage>
  );
}

function BrowserVisual() {
  return (
    <Stage>
      <div className="w-[78%] overflow-hidden rounded-xl border border-gray-200 bg-white shadow-xl shadow-purple2/10 transition-transform duration-500 group-hover:-translate-y-1 group-hover:rotate-[-1deg]">
        <div className="flex items-center gap-1.5 border-b border-gray-100 px-3 py-2">
          <span className="h-2 w-2 rounded-full bg-red-300" />
          <span className="h-2 w-2 rounded-full bg-amber-300" />
          <span className="h-2 w-2 rounded-full bg-emerald-300" />
          <span className="ml-2 h-2 flex-1 rounded-full bg-gray-100" />
        </div>
        <div className="space-y-2 p-3">
          <div className="h-10 rounded-lg bg-gradient-to-r from-purple2 to-purple3" />
          <div className="flex gap-2">
            <div className="h-8 flex-1 rounded-md bg-gray-100" />
            <div className="h-8 flex-1 rounded-md bg-gray-100" />
            <div className="h-8 flex-1 rounded-md bg-gray-100" />
          </div>
        </div>
      </div>
    </Stage>
  );
}

function PhoneVisual() {
  return (
    <Stage>
      <div className="relative h-36 w-[4.6rem] rounded-[1.1rem] border-[3px] border-blackGleam bg-white p-1.5 shadow-xl shadow-purple2/20 transition-transform duration-500 group-hover:-translate-y-1">
        <div className="mx-auto mb-2 h-1.5 w-6 rounded-full bg-blackGleam" />
        <div className="space-y-1.5">
          <div className="h-8 rounded-md bg-gradient-to-br from-purple2 to-purple3" />
          <div className="h-2 rounded bg-gray-100" />
          <div className="h-2 w-2/3 rounded bg-gray-100" />
          <div className="grid grid-cols-2 gap-1">
            <div className="h-6 rounded bg-gray-100" />
            <div className="h-6 rounded bg-gray-100" />
          </div>
        </div>
      </div>
      {/* Notification */}
      <div className="absolute right-[12%] top-6 flex items-center gap-1.5 rounded-xl border border-gray-100 bg-white px-2.5 py-1.5 shadow-lg transition-all duration-500 group-hover:-translate-y-1 group-hover:scale-105">
        <span className="h-3 w-3 rounded-full bg-gradient-to-br from-purple2 to-purple3" />
        <span className="h-1.5 w-8 rounded-full bg-gray-200" />
      </div>
    </Stage>
  );
}

function LogoVisual() {
  return (
    <Stage dark>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(176,128,221,0.3),transparent_60%)]" />
      <div className="logo-morph relative h-20 w-20 bg-gradient-to-br from-[#d6b4f5] via-[#b080dd] to-purple2 shadow-[0_0_40px_rgba(176,128,221,0.6)]" />
      <span className="absolute font-DissolveRegular text-4xl text-white">G</span>
    </Stage>
  );
}

function UptimeVisual() {
  return (
    <Stage className="flex-col gap-4 px-5">
      <div className="flex w-full items-end justify-between">
        <div>
          <p className="font-Gudea text-[11px] uppercase tracking-[.2em] text-gray-400">
            Disponibilité
          </p>
          <p className="font-Gudea text-2xl font-bold text-blackGleam">99,9 %</p>
        </div>
        <div className="flex gap-1.5">
          {["SEO", "Perf", "Sécu"].map((k) => (
            <div
              key={k}
              className="flex h-11 w-11 flex-col items-center justify-center rounded-full border-2 border-purple2/70 bg-white"
            >
              <span className="font-Gudea text-xs font-bold text-purple2">100</span>
              <span className="font-Gudea text-[8px] uppercase text-gray-400">{k}</span>
            </div>
          ))}
        </div>
      </div>
      <div className="flex w-full items-end gap-[3px]">
        {Array.from({ length: 30 }).map((_, i) => (
          <div
            key={i}
            className="uptime-bar flex-1 rounded-sm bg-gradient-to-t from-purple2 to-[#b080dd]"
            style={{
              height: `${14 + ((i * 37) % 18)}px`,
              animationDelay: `${(i % 10) * 120}ms`,
            }}
          />
        ))}
      </div>
    </Stage>
  );
}

/* ---------- Section : carrousel en boucle ---------- */

const services = [
  {
    tag: "Notre spécialité",
    title: "Motion design",
    description:
      "Des vidéos animées pour Instagram, TikTok et YouTube Shorts. Vos produits ou votre app mis en scène pour capter l'attention.",
    Visual: MotionVisual,
  },
  {
    tag: "Chaque mois",
    title: "Abonnement réseaux",
    description:
      "Vos motions livrés prêts à publier avec texte, hashtags, covers et voix off. Votre présence en ligne tourne toute seule.",
    Visual: CalendarVisual,
  },
  {
    tag: "Web",
    title: "Site vitrine & e-commerce",
    description:
      "Des sites rapides et élégants, codés sur-mesure et pensés pour convertir, du site vitrine à la boutique en ligne.",
    Visual: BrowserVisual,
  },
  {
    tag: "iOS & Android",
    title: "Application mobile",
    description:
      "Des apps fluides et intuitives, publiées sur les stores avec leurs visuels pour un lancement réussi.",
    Visual: PhoneVisual,
  },
  {
    tag: "Branding",
    title: "Identité animée",
    description:
      "Logo animé, intros, covers et miniatures : votre identité prend vie et devient reconnaissable au premier coup d'œil.",
    Visual: LogoVisual,
  },
  {
    tag: "Sur la durée",
    title: "Maintenance & SEO",
    description:
      "Mises à jour, sécurité, performances et référencement : votre site reste rapide, visible et à jour.",
    Visual: UptimeVisual,
  },
];

function ServiceCard({ service }: { service: (typeof services)[number] }) {
  const { Visual } = service;
  return (
    <SpotlightCard>
      <Visual />
      <CardText
        tag={service.tag}
        title={service.title}
        description={service.description}
      />
    </SpotlightCard>
  );
}

/** Vitesse du défilement automatique, en pixels par seconde. */
const AUTO_SPEED = 28;
/** Délai avant la reprise du défilement auto après une action manuelle. */
const RESUME_DELAY = 2000;
/** Durée de l'animation au clic sur une flèche, en ms. */
const SLIDE_DURATION = 700;

const easeInOutCubic = (t: number) =>
  t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;

function ArrowButton({
  direction,
  onClick,
}: {
  direction: "prev" | "next";
  onClick: () => void;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-label={direction === "prev" ? "Service précédent" : "Service suivant"}
      className="flex h-11 w-11 items-center justify-center rounded-full border border-purple2/20 bg-white text-purple2 shadow-md transition-all duration-300 hover:scale-110 hover:bg-purple2 hover:text-white"
    >
      <svg
        className={`h-5 w-5 ${direction === "prev" ? "rotate-180" : ""}`}
        fill="none"
        stroke="currentColor"
        strokeWidth={2}
        viewBox="0 0 24 24"
        aria-hidden="true"
      >
        <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
      </svg>
    </button>
  );
}

export default function ServicesBento() {
  const scrollerRef = useRef<HTMLDivElement>(null);
  const firstListRef = useRef<HTMLUListElement>(null);
  const state = useRef({
    pos: 0,
    hovered: false,
    dragging: false,
    pausedUntil: 0,
    dragStartX: 0,
    dragStartScroll: 0,
    // Animation déclenchée par les flèches
    anim: null as null | { from: number; to: number; start: number },
  });

  // Largeur d'une copie de la liste + l'espacement : distance d'une boucle.
  const loopWidth = () => (firstListRef.current?.offsetWidth ?? 0) + 24;

  const pauseAuto = () => {
    state.current.pausedUntil = performance.now() + RESUME_DELAY;
  };

  useEffect(() => {
    const el = scrollerRef.current;
    if (!el) return;
    let frame = 0;
    let last = performance.now();

    const tick = (now: number) => {
      const dt = Math.min(now - last, 64) / 1000;
      last = now;
      const st = state.current;
      const loop = loopWidth();
      const wrap = (x: number) => (loop > 24 ? ((x % loop) + loop) % loop : x);

      if (st.anim) {
        // Slide fluide (flèches) : position animée avec un easing
        const t = Math.min((now - st.anim.start) / SLIDE_DURATION, 1);
        st.pos = st.anim.from + (st.anim.to - st.anim.from) * easeInOutCubic(t);
        if (t >= 1) {
          st.anim = null;
          st.pos = wrap(st.pos);
          st.pausedUntil = now + RESUME_DELAY;
        }
        el.scrollLeft = wrap(st.pos);
      } else {
        const manual = st.dragging || st.hovered || now < st.pausedUntil;

        if (manual) {
          // L'utilisateur contrôle : on suit la position réelle
          st.pos = el.scrollLeft;
          // Boucle infinie aussi en manuel (y compris vers la gauche)
          if (loop > 24 && (st.pos >= loop || st.pos <= 0)) {
            st.pos = wrap(st.pos <= 0 ? st.pos + loop : st.pos);
            el.scrollLeft = st.pos;
          }
        } else {
          st.pos = wrap(st.pos + AUTO_SPEED * dt);
          el.scrollLeft = st.pos;
        }
      }
      frame = requestAnimationFrame(tick);
    };

    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, []);

  // Glisser à la souris (le tactile utilise le défilement natif)
  const onPointerDown = (e: React.PointerEvent<HTMLDivElement>) => {
    if (e.pointerType !== "mouse" || e.button !== 0) return;
    const st = state.current;
    st.dragging = true;
    st.dragStartX = e.clientX;
    st.dragStartScroll = scrollerRef.current?.scrollLeft ?? 0;
    e.currentTarget.setPointerCapture(e.pointerId);
  };
  const onPointerMove = (e: React.PointerEvent<HTMLDivElement>) => {
    const st = state.current;
    if (!st.dragging || !scrollerRef.current) return;
    scrollerRef.current.scrollLeft = st.dragStartScroll - (e.clientX - st.dragStartX);
  };
  const endDrag = () => {
    if (state.current.dragging) {
      state.current.dragging = false;
      pauseAuto();
    }
  };

  const slide = (direction: 1 | -1) => {
    const el = scrollerRef.current;
    if (!el) return;
    const st = state.current;
    const card = el.querySelector("li");
    const step = (card?.offsetWidth ?? 340) + 24;
    // Clics rapides : on enchaîne à partir de la cible en cours
    const base = st.anim ? st.anim.to : el.scrollLeft;
    st.anim = {
      from: st.anim ? st.pos : el.scrollLeft,
      to: base + direction * step,
      start: performance.now(),
    };
  };

  return (
    <RevealOnScroll>
      <div
        ref={scrollerRef}
        onMouseEnter={() => (state.current.hovered = true)}
        onMouseLeave={() => {
          state.current.hovered = false;
          endDrag();
        }}
        onPointerDown={onPointerDown}
        onPointerMove={onPointerMove}
        onPointerUp={endDrag}
        onPointerCancel={endDrag}
        onTouchStart={pauseAuto}
        onTouchMove={pauseAuto}
        onWheel={pauseAuto}
        className="relative -mx-4 cursor-grab select-none overflow-x-auto py-4 active:cursor-grabbing [scrollbar-width:none] [&::-webkit-scrollbar]:hidden [mask-image:linear-gradient(to_right,transparent,black_6%,black_94%,transparent)]"
      >
        <div className="flex w-max gap-6 px-4">
          {/* La liste est doublée pour que la boucle soit continue */}
          {[0, 1].map((copy) => (
            <ul
              key={copy}
              ref={copy === 0 ? firstListRef : undefined}
              aria-hidden={copy === 1}
              className="flex shrink-0 gap-6"
            >
              {services.map((service) => (
                <li
                  key={service.title}
                  className="w-[290px] shrink-0 sm:w-[340px]"
                >
                  <ServiceCard service={service} />
                </li>
              ))}
            </ul>
          ))}
        </div>
      </div>

      <div className="mt-6 flex items-center justify-center gap-3">
        <ArrowButton direction="prev" onClick={() => slide(-1)} />
        <ArrowButton direction="next" onClick={() => slide(1)} />
      </div>
    </RevealOnScroll>
  );
}
