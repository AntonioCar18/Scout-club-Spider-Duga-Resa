import logo from "../assets/LogoSpider.png"

const Contact = () => {
    return (
        <section id="kontakt" className="bg-white">
            <div className="max-w-2xl mx-auto px-6 py-24 flex flex-col items-center gap-5 text-center">

                <span className="flex items-center gap-2 text-sm font-semibold uppercase tracking-wide text-[#0e674b]">
                    <img src={logo} alt="" className="w-6 h-6 rounded-full object-cover" />
                    Kontakt
                </span>

                <h2 className="font-extrabold tracking-tight text-4xl text-[#083a2c]">
                    Poveži se sa Spiderom
                </h2>

                <p className="text-[#5a6359] text-base leading-relaxed max-w-lg">
                    Bilo da si mladi izviđač iz Karlovačke županije, odred koji planira zajednički logor ili partnerska organizacija koja istražuje mogućnost razmjene — Spider je lako dostupan.
                </p>

                <div className="flex flex-wrap gap-3 justify-center mt-2">
                    <a
                        href="mailto:spiderdugaresa@gmail.com"
                        className="rounded-lg bg-[#083a2c] px-7 py-3.5 text-sm font-semibold text-[#f6f1e4] hover:bg-[#0a4735] transition-colors"
                    >
                        Pošalji nam email
                    </a>
                </div>

            </div>
        </section>
    )
}

export default Contact;