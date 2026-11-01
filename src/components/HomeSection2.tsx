import React from "react";
import RevealEffect from "./RevealEffect/RevealEffect";
import ServicesBento from "./ServicesBento/ServicesBento";
import DeviceMockups from "./DeviceMockups/DeviceMockups";

export default function HomeSection2() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16" id="service">
          <h2 className="text-4xl md:text-5xl font-bold text-blackGleam mb-6 tracking-wide font-Gudea">
            Nos <span className="text-purple2">Services</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Du développement au motion design : tout ce qu&apos;il faut pour
            lancer votre marque et la faire remarquer
          </p>
        </div>

        <ServicesBento />

        {/* Vitrine motion design : PC + téléphone */}
        <RevealEffect>
          <div className="mt-24">
            <div className="text-center mb-12">
              <h3 className="text-3xl md:text-4xl font-bold text-blackGleam mb-4 font-Gudea">
                Vos contenus, sur <span className="text-purple2">tous les écrans</span>
              </h3>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Formats verticaux pour les réseaux, horizontaux pour votre site
                : chaque motion est décliné là où se trouvent vos clients.
              </p>
            </div>

            <DeviceMockups
              desktopVideo="/videos/nova-16x9.mp4"
              mobileVideo="/videos/nova-9x16.mp4"
              badge="Exemple de motion design"
            />
          </div>
        </RevealEffect>
      </div>
    </section>
  );
}
