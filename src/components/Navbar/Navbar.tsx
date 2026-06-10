"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { SparklesCore } from "../ui/vortex";

const itemNavbar = [
  {
    text: "Accueil",
    link: "/",
  },
  {
    text: "Projets",
    link: "/projets",
  },
  {
    text: "E-Commerce",
    link: "/e-commerce",
  },
  {
    text: "Vitrine",
    link: "/vitrine",
  },
  {
    text: "À Propos",
    link: "/a-propos",
  },
  {
    text: "Contact",
    link: "/contact",
  },
];

export default function Navbar() {
  const [navActive, setNavActive] = useState(false);
  const [isScrolledOnHome, setIsScrolledOnHome] = useState(false);

  //! BURGER TO CROSS + AFFICHE LA NAVBAR MOBILE
  const [isActive, setIsActive] = useState(false);
  const handleClick = () => {
    setIsActive(!isActive);
    setNavActive(!navActive);
  };

  const pathname = usePathname();
  const isHomePage = pathname === "/";
  const scrolled = !isHomePage || isScrolledOnHome;

  //! NAVBAR SCROLL
  useEffect(() => {
    if (!isHomePage) {
      return;
    }

    const handleScroll = () => {
      setIsScrolledOnHome(window.scrollY > 50);
    };

    // Synchronise l'etat au montage puis sur scroll pour la page d'accueil.
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [isHomePage]);

  return (
    <header
      className={`sticky top-0 z-50 flex w-full items-center justify-around px-32 pt-4 pb-4 transition-all duration-300 ease-in-out max-[800px]:px-8 max-[800px]:pt-4 max-[800px]:pb-8 min-[801px]:justify-start ${
        scrolled ? "bg-[#080808] backdrop-blur-[10px]" : "bg-transparent"
      }`}
    >
      <div className="pointer-events-none absolute inset-0 h-full w-full">
        <SparklesCore
          id="tsparticlesHeader"
          background="transparent"
          minSize={0.3}
          maxSize={1}
          particleDensity={100}
          className="w-full h-full"
          particleColor="#FFFFFF"
        />
      </div>
      <nav
        className="relative z-10 flex w-full items-center justify-between text-[aliceblue] min-[801px]:justify-between"
      >
        <Link href="/" className="min-[801px]:shrink-0">
          <Image
            className="z-[11] mt-4 ml-0 h-10 w-auto drop-shadow-[0_0_2px_#ffffff] transition-all duration-300 ease-in-out max-[800px]:h-10 min-[801px]:mt-0 min-[801px]:mr-8 min-[801px]:h-10"
            src="/logos/Logo_icon_inTheGleam_White.png"
            alt="Logo intTheGleam"
            width={400}
            height={400}
          />
        </Link>

        <div
          className="z-10 mt-4 flex cursor-pointer flex-col items-center justify-center gap-[0.3rem] min-[801px]:hidden"
          onClick={handleClick}
        >
          <div
            className={`h-[0.2rem] w-10 rounded-[10rem] bg-white transition-all duration-300 ease-in-out ${
              isActive ? "translate-y-[10px] rotate-45" : "translate-y-0"
            }`}
          ></div>
          <div
            className={`h-[0.2rem] w-10 rounded-[10rem] bg-white transition-all duration-300 ease-in-out ${
              isActive ? "opacity-0" : "opacity-100"
            }`}
          ></div>
          <div
            className={`h-[0.2rem] w-10 rounded-[10rem] bg-white transition-all duration-300 ease-in-out ${
              isActive ? "-translate-y-[10px] -rotate-45" : "translate-y-0"
            }`}
          ></div>
        </div>

        <div
          className={`fixed left-0 flex w-full flex-col items-center justify-center gap-20 bg-[#080808f3] px-4 py-6 transition-all duration-500 ease-in-out [font-family:'Gudea-Regular'] max-[800px]:h-screen min-[801px]:static min-[801px]:ml-auto min-[801px]:h-auto min-[801px]:w-auto min-[801px]:flex-row min-[801px]:items-center min-[801px]:gap-20 min-[801px]:bg-transparent min-[801px]:px-0 min-[801px]:py-0 min-[801px]:pt-0 min-[801px]:text-[1.2rem] min-[801px]:leading-7 ${
            navActive
              ? "top-0 z-[9] opacity-100"
              : "-top-[100vh] z-[-1] opacity-0 min-[801px]:top-0 min-[801px]:z-auto min-[801px]:opacity-100"
          }`}
        >
          {itemNavbar.map((item) => {
            const active =
              item.link === "/"
                ? pathname === "/"
                : pathname.startsWith(item.link);
            return (
              <div key={item.link}>
                <Link
                  href={item.link}
                  onClick={() => {
                    if (navActive) {
                      handleClick();
                    }
                  }}
                  className={`relative cursor-pointer text-center text-xl text-white transition-all duration-300 ease-in-out min-[801px]:text-sm ${
                    active
                      ? "border-b border-b-[#5c0adf]"
                      : "hover:border-b hover:border-b-[#5c0adf]"
                  }`}
                >
                  {item.text}
                </Link>
              </div>
            );
          })}
        </div>
        {/* <Link href="/contact">
              <div className="bg-purple2 rounded-full w-12 h-12 m-2 lg:m-4 fixed bottom-1 right-0 flex items-center justify-center hover:scale-110 hover:bg-black transition duration-500">
                <span className="animate-ping absolute top-1 right-0 -mt-1 mr-1 flex items-center justify-center rounded-full h-3 w-3 bg-sky-500"></span>

                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  class="w-8 h-8"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M20.25 8.511c.884.284 1.5 1.128 1.5 2.097v4.286c0 1.136-.847 2.1-1.98 2.193-.34.027-.68.052-1.02.072v3.091l-3-3c-1.354 0-2.694-.055-4.02-.163a2.115 2.115 0 0 1-.825-.242m9.345-8.334a2.126 2.126 0 0 0-.476-.095 48.64 48.64 0 0 0-8.048 0c-1.131.094-1.976 1.057-1.976 2.192v4.286c0 .837.46 1.58 1.155 1.951m9.345-8.334V6.637c0-1.621-1.152-3.026-2.76-3.235A48.455 48.455 0 0 0 11.25 3c-2.115 0-4.198.137-6.24.402-1.608.209-2.76 1.614-2.76 3.235v6.226c0 1.621 1.152 3.026 2.76 3.235.577.075 1.157.14 1.74.194V21l4.155-4.155"
                  />
                </svg>
              </div>
            </Link> */}
      </nav>
    </header>
  );
}
