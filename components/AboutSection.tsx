import AnimatedSection from "./AnimatedSection";

export default function AboutSection() {
  return (
    <section className="brut-container mt-16 mb-8">
      <AnimatedSection>
        <div className="modern-card modern-elevation-2 p-2 md:p-12 flex flex-col gap-6 leading-relaxed text-base md:text-xl">
          <h2 className="gradient-text">
            Trubači za svadbe, rođendane i sve vrste proslava
          </h2>
          <p className="text-muted-foreground">
            Trubači "ZLATNE TRUBE" donose{" "}
            <strong className="text-foreground">vrhunsku energiju</strong> i
            autentični duh balkanske muzike na svaku proslavu. Naš orkestar je
            poznat po snažnom zvuku, tačnom tempu i modernoj izvedbi
            tradicionalnih i popularnih hitova. Bilo da organizujete svadbu,
            rođendan, krštenje, korporativni događaj ili gradski festival – naš
            nastup pretvara događaj u{" "}
            <strong className="text-foreground">nezaboravnu žurku</strong>.
          </p>

          <div className="grid md:grid-cols-3 gap-3 items-center bg-gradient-to-r from-amber-50 to-orange-50 dark:from-amber-950/20 dark:to-orange-950/20 p-2 md:p-6 rounded-xl border-l-4 border-primary">
            <div className="space-y-6 md:col-span-2">
              <p className="text-muted-foreground">
                Sviramo po{" "}
                <strong className="text-foreground">celoj Srbiji</strong> – od
                Subotice, Novog Sada i Beograda, preko Šapca, Valjeva i
                Kragujevca, pa sve do Niša, Novog Pazara i Tutina. Dostupni smo
                i u regionu:{" "}
                <strong className="text-foreground">Hrvatska</strong> (Zagreb,
                Rijeka, Split) i{" "}
                <strong className="text-foreground">Slovenija</strong>
                (Ljubljana, Maribor). Dolazimo opremljeni, tačni i profesionalni
                – sa jasnim dogovorom i cenom bez skrivenih troškova.
              </p>
              <p className="text-muted-foreground">
                Naš repertoar obuhvata: srpske tradicionalne koračnice i kola,
                romsku muziku, stare gradske pesme, kao i moderne Balkanske i
                svetske hitove u trubačkim aranžmanima. Vešto kombinujemo lagane
                pesme za doček gostiju sa eksplozivnim setovima za podizanje
                atmosfere – savršeno tempirano za mladenački ples, iznošenje
                torte i vrhunac žurke.
              </p>
              <p className="font-semibold text-foreground">
                <span className="text-primary text-2xl mr-2">✨</span>
                Zašto nas biraju: energija na sceni, besprekorna disciplina,
                direktan kontakt sa publikom i spremnost na muzičke želje. Brzo
                odgovaramo, prilagođavamo se protokolu i poštujemo rokove.
                Rezervišite termin već danas i obezbedite pravi zvuk za vaš
                događaj.
              </p>
            </div>
            <div>
              <video
                controls
                autoPlay
                loop
                muted
                className="w-full max-h-screen object-cover rounded-xl"
              >
                {" "}
                <source
                  src="/images/video-e5cbb7a38f73cee78cce7aad679a692d-V.mp4"
                  type="video/mp4"
                />
                Your browser does not support the video tag.
              </video>
            </div>
          </div>
        </div>
      </AnimatedSection>
    </section>
  );
}
