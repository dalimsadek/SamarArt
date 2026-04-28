import React from "react";

const services = [
  {
    title: "Conseil Signature:",
    desc: "Un rendez-vous personnalisé pour clarifier vos envies, révéler le potentiel de votre intérieur et vous guider vers des choix justes, esthétiques et intemporels.",
    image: "/conseil.png",
  },
  {
    title: "Conception d’Espace:",
    desc: "Une étude sur mesure pour repenser vos volumes avec fluidité et élégance : plans d’aménagement 2D/3D, circulation optimisée et vision globale pour vous projeter en toute confiance.",
    image: "/conception.png",
  },
  {
    title: "Sélection & Harmonie",
    desc: "Mobilier, matières, couleurs, luminaires… Chaque élément est soigneusement choisi pour composer un intérieur cohérent, durable et profondément accueillant.",
    image: "/selection.png",
  },
  {
    title: "Valorisation Immobilière:",
    desc: "Nous mettons en scène votre bien pour révéler tout son attrait et déclencher le coup de cœur dès la première visite. Grâce à un regard expert et des ajustements ciblés, votre intérieur se démarque, rassure et maximise son potentiel sur le marché.",
    image: "/valorisation.png",
  },
];

export default function Design() {
  return (
    <section id="services" className="py-20 bg-base">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <p className="serif uppercase tracking-[0.26em] text-sm text-secondary">
          Nos prestations
        </p>
        <h3 className="serif text-3xl font-bold mt-2">
          L’art de concevoir des lieux qui vous ressemblent.
        </h3>
        <p className="mt-4 text-secondary max-w-3xl mx-auto">
          Chaque projet est une création sur mesure, orchestrée avec exigence —
          de la conception aux finitions — afin de donner naissance à des
          espaces élégants, fonctionnels et intemporels
        </p>

        <div className="mt-10">
          <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6">
            {services.map((item) => (
              <div
                key={item.title}
                className="bg-surface rounded-xl shadow-sm border border-line overflow-hidden h-full flex flex-col"
              >
                <div className="w-full aspect-[4/5] overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                </div>
                <div className="p-6 flex flex-col gap-3 flex-1 text-left">
                  <h4 className="font-semibold text-primary tracking-[0.1em] uppercase text-sm">
                    {item.title}
                  </h4>
                  <p className="text-sm text-secondary leading-relaxed flex-1">
                    {item.desc}
                  </p>
                  {/* <a
                    href="/prestation"
                    className="inline-flex items-center justify-center w-full px-4 py-2.5 rounded-full bg-[var(--color-accent)] text-white tracking-[0.14em] uppercase text-xs hover:bg-[var(--color-accent-2)] transition"
                  >
                    Découvrir la prestation
                  </a> */}
                </div>
              </div>
            ))}
          </div>
        </div>

        <a
          href="#contact"
          className="inline-flex items-center gap-2 mt-8 px-6 py-3 rounded-full bg-[var(--color-accent)] text-white tracking-[0.18em] uppercase text-xs hover:bg-[var(--color-accent-2)] transition shadow-sm"
        >
          Débuter votre projet
        </a>
      </div>
    </section>
  );
}
