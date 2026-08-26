import logo from "../assets/LogoSpider.png"

const BethlemLight = () => {
    return (
        <section id="tradicija" className="bg-[#083a2c]">
            <div className="max-w-2xl mx-auto px-6 py-24 flex flex-col items-center gap-5 text-center">

                <span className="flex items-center gap-2 text-sm font-semibold uppercase tracking-wide text-white">
                    <img src={logo} alt="" className="w-6 h-6 rounded-full object-cover" />
                    Tradicija
                </span>

                <h2 className="text-white text-3xl md:text-5xl font-bold">Betlehemsko svjetlo mira</h2>

                <p className="text-[#b9c7bb] leading-relaxed max-w-lg">
                    Svake godine Spider preuzima Svjetlo u Beču i donosi ga kući, a potom se plamen iz ruke u ruku prenosi kroz Duga Resu i ostale dijelove Karlovačke županije, od kuće do kuće.
                </p>

                <div className="flex items-center gap-3 text-white font-bold text-sm mt-2">
                    <span>Betlehem</span>
                    <span className="text-[#f9f307]">→</span>
                    <span>Austrija</span>
                    <span className="text-[#f9f307]">→</span>
                    <span>Duga Resa</span>
                </div>

            </div>
        </section>
    );
}

export default BethlemLight;