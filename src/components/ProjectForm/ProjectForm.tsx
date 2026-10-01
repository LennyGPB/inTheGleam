"use client";
import React, { useState } from "react";

const PROJECT_TYPES = [
  "Site vitrine",
  "Site e-commerce",
  "Application mobile",
  "Application web",
  "Refonte / Maintenance",
  "Autre",
];

type Status = "idle" | "sending" | "success" | "error";

const inputClass =
  "w-full rounded-xl border border-gray-200 bg-gray-50 px-4 py-3 font-Gudea text-blackGleam placeholder:text-gray-400 focus:border-purple2 focus:bg-white focus:outline-none focus:ring-4 focus:ring-purple2/10 transition-all duration-300";

const labelClass = "block mb-2 text-sm font-semibold text-blackGleam font-Gudea";

export default function ProjectForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [error, setError] = useState("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    setStatus("sending");
    setError("");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(Object.fromEntries(new FormData(form))),
      });
      const data = await res.json().catch(() => ({}));

      if (!res.ok) {
        throw new Error(data.error || "L'envoi a échoué.");
      }

      form.reset();
      setStatus("success");
    } catch (err) {
      setError(err instanceof Error ? err.message : "L'envoi a échoué.");
      setStatus("error");
    }
  };

  if (status === "success") {
    return (
      <div className="bg-white rounded-3xl p-8 md:p-10 shadow-lg border border-gray-100 text-center">
        <div className="w-16 h-16 mx-auto mb-6 bg-gradient-to-br from-purple2 to-purple3 rounded-2xl flex items-center justify-center shadow-lg shadow-purple2/30">
          <svg
            className="w-8 h-8 text-white"
            fill="none"
            stroke="currentColor"
            strokeWidth={1.5}
            viewBox="0 0 24 24"
            aria-hidden="true"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
          </svg>
        </div>
        <h3 className="text-2xl font-bold text-blackGleam mb-3 font-Gudea">
          Message envoyé !
        </h3>
        <p className="text-gray-600 font-Gudea mb-8">
          Merci pour votre message. Nous revenons vers vous en moins de 24
          heures.
        </p>
        <button
          type="button"
          onClick={() => setStatus("idle")}
          className="font-Gudea font-semibold text-purple2 hover:underline"
        >
          Envoyer un autre message
        </button>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white rounded-3xl p-8 md:p-10 shadow-lg border border-gray-100"
    >
      <h2 className="text-2xl font-bold text-blackGleam mb-2 font-Gudea">
        Parlez-nous de votre <span className="text-purple2">projet</span>
      </h2>
      <p className="text-gray-600 font-Gudea mb-8">
        Remplissez le formulaire, nous vous répondons sous 24 heures.
      </p>

      <div className="grid sm:grid-cols-2 gap-5">
        <div>
          <label htmlFor="name" className={labelClass}>
            Nom complet <span className="text-purple2">*</span>
          </label>
          <input
            id="name"
            name="name"
            type="text"
            required
            maxLength={100}
            autoComplete="name"
            placeholder="Jean Dupont"
            className={inputClass}
          />
        </div>

        <div>
          <label htmlFor="email" className={labelClass}>
            Email <span className="text-purple2">*</span>
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            maxLength={150}
            autoComplete="email"
            placeholder="jean@exemple.fr"
            className={inputClass}
          />
        </div>

        <div>
          <label htmlFor="phone" className={labelClass}>
            Téléphone
          </label>
          <input
            id="phone"
            name="phone"
            type="tel"
            maxLength={30}
            autoComplete="tel"
            placeholder="06 12 34 56 78"
            className={inputClass}
          />
        </div>

        <div>
          <label htmlFor="projectType" className={labelClass}>
            Type de projet
          </label>
          <select
            id="projectType"
            name="projectType"
            defaultValue=""
            className={inputClass}
          >
            <option value="" disabled>
              Sélectionnez...
            </option>
            {PROJECT_TYPES.map((type) => (
              <option key={type} value={type}>
                {type}
              </option>
            ))}
          </select>
        </div>

        <div className="sm:col-span-2">
          <label htmlFor="message" className={labelClass}>
            Votre message <span className="text-purple2">*</span>
          </label>
          <textarea
            id="message"
            name="message"
            required
            minLength={10}
            maxLength={3000}
            rows={6}
            placeholder="Décrivez votre projet, vos besoins, vos délais..."
            className={`${inputClass} resize-none`}
          />
        </div>
      </div>

      {/* Honeypot anti-spam, invisible pour les humains */}
      <input
        type="text"
        name="website"
        tabIndex={-1}
        autoComplete="off"
        aria-hidden="true"
        className="hidden"
      />

      {status === "error" && (
        <p
          role="alert"
          className="mt-5 rounded-xl bg-red-50 border border-red-200 px-4 py-3 text-sm text-red-700 font-Gudea"
        >
          {error}
        </p>
      )}

      <button
        type="submit"
        disabled={status === "sending"}
        className="group mt-6 w-full inline-flex items-center justify-center gap-2 bg-gradient-to-r from-purple2 to-purple3 text-white font-bold font-Gudea text-lg py-4 px-8 rounded-2xl shadow-lg shadow-purple2/30 hover:shadow-xl hover:shadow-purple2/40 hover:scale-[1.02] disabled:opacity-60 disabled:hover:scale-100 transition-all duration-300"
      >
        {status === "sending" ? "Envoi en cours..." : "Envoyer ma demande"}
        {status !== "sending" && (
          <svg
            className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300"
            fill="none"
            stroke="currentColor"
            strokeWidth={2}
            viewBox="0 0 24 24"
            aria-hidden="true"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
          </svg>
        )}
      </button>
    </form>
  );
}
