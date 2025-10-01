import AnimatedSection from "./AnimatedSection";

export default function LocationsSection() {
  const cities = [
    "Subotica",
    "Bajmok",
    "Kanjiža",
    "Bačka Topola",
    "Sombor",
    "Senta",
    "Kikinda",
    "Ada",
    "Bečej",
    "Kula",
    "Vrbas",
    "Apatin",
    "Odžaci",
    "Srbobran",
    "Srpska Crnja",
    "Novi Bečej",
    "Žabalj",
    "Zrenjanin",
    "Ečka",
    "Sečanj",
    "Kovačica",
    "Novi Sad",
    "Šid",
    "Sremska Mitrovica",
    "Ruma",
    "Inđija",
    "Batajnica",
    "Bogatić",
    "Šabac",
    "Loznica",
    "Koceljeva",
    "Krupanj",
    "Valjevo",
    "Beograd",
    "Pančevo",
    "Obrenovac",
    "Mladenovac",
    "Lazarevac",
    "Aranđelovac",
    "Topola",
    "Kovin",
    "Smederevo",
    "Požarevac",
    "Velika Plana",
    "Petrovac",
    "Kragujevac",
    "Gornji Milanovac",
    "Jagodina",
    "Ćuprija",
    "Rekovac",
    "Vrnjačka Banja",
    "Trstenik",
    "Majdanpek",
    "Žagubica",
    "Negotin",
    "Zaječar",
    "Sokobanja",
    "Despotovac",
    "Knjaževac",
    "Niš",
    "Aleksinac",
    "Leskovac",
    "Novi Pazar",
    "Tutin",
    "Zagreb",
    "Ljubljana",
    "Wien",
  ];

  return (
    <section className="container px-2 md:px-4 mx-auto mt-10">
      <AnimatedSection>
        <h2>Gde sviramo</h2>
        <div className="grid grid-cols-2 md:grid-cols-5 gap-1 mt-6 text-center md:text-left">
          {cities.map((city, i) => (
            <AnimatedSection key={city} delay={i * 0.02}>
              <div className="md-card md-elevation-1 p-1 ">
                <span className="text-xs md:text-sm lowercase align-middle">
                  trubači{" "}
                </span>
                <span className="text-xs md:text-lg font-bold uppercase align-middle">
                  {city}
                </span>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </AnimatedSection>
    </section>
  );
}
