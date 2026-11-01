import React from "react";
import LazyVideo from "./LazyVideo";

type Props = {
  /** Vidéo affichée dans l'écran du PC (format 16:10 / 16:9). */
  desktopVideo?: string;
  /** Vidéo affichée dans l'écran du téléphone (format 9:16). */
  mobileVideo?: string;
  desktopPoster?: string;
  mobilePoster?: string;
  /** Petit badge affiché en haut à gauche de l'écran du PC. */
  badge?: string;
};

function ScreenContent({ src, poster }: { src?: string; poster?: string }) {
  if (src) {
    return (
      <LazyVideo
        className="absolute inset-0 h-full w-full object-cover"
        src={src}
        poster={poster}
      />
    );
  }

  // Écran vide en attendant les motions
  return (
    <div className="absolute inset-0 bg-gradient-to-br from-[#14091f] via-[#0b0b0d] to-[#1f0736]">
      <div className="absolute inset-0 opacity-60 bg-[radial-gradient(circle_at_30%_20%,rgba(176,128,221,0.25),transparent_60%)]" />
    </div>
  );
}

export default function DeviceMockups({
  desktopVideo,
  mobileVideo,
  desktopPoster,
  mobilePoster,
  badge,
}: Props) {
  return (
    <div className="relative mx-auto w-full max-w-5xl px-2 pb-6 sm:px-10">
      {/* Halo derrière les appareils */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-10 top-10 bottom-0 rounded-full bg-purple2/25 blur-[100px]"
      />

      {/* PC portable */}
      <div className="relative w-[88%] sm:w-[85%]">
        <div className="rounded-t-[1.25rem] border border-white/10 bg-[#1a1a1d] p-[2.2%] shadow-2xl shadow-black/40">
          <div className="relative aspect-video overflow-hidden rounded-md bg-black">
            <ScreenContent src={desktopVideo} poster={desktopPoster} />
            {badge && (
              <span className="absolute left-2 top-2 z-10 inline-flex items-center gap-1.5 rounded-full border border-white/20 bg-black/50 px-2.5 py-1 font-Gudea text-[10px] font-semibold uppercase tracking-[.15em] text-white backdrop-blur-md sm:left-4 sm:top-4 sm:px-3 sm:text-xs">
                <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-[#b080dd]" />
                {badge}
              </span>
            )}
          </div>
        </div>
        {/* Base du portable */}
        <div className="relative -mx-[6%] h-3 sm:h-4 rounded-b-2xl bg-gradient-to-b from-[#d4d4d8] to-[#8e8e95] shadow-xl">
          <div className="absolute left-1/2 top-0 h-1.5 w-[16%] -translate-x-1/2 rounded-b-lg bg-[#6b6b72]" />
        </div>
      </div>

      {/* Téléphone */}
      <div className="absolute bottom-0 right-0 w-[27%] sm:right-4 sm:w-[24%] max-w-[230px]">
        <div className="relative rounded-[2.2rem] border border-white/15 bg-[#111113] p-[5%] shadow-2xl shadow-black/60 ring-1 ring-black">
          <div className="relative aspect-[9/19.5] overflow-hidden rounded-[1.7rem] bg-black">
            <ScreenContent src={mobileVideo} poster={mobilePoster} />
            {/* Dynamic Island */}
            <div className="absolute left-1/2 top-[2.5%] z-10 h-[3.2%] w-[32%] -translate-x-1/2 rounded-full bg-black" />
          </div>
        </div>
      </div>
    </div>
  );
}
