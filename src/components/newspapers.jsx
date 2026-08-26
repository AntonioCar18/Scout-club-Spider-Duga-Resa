import logo from "../assets/LogoSpider.png"

const Newspapers = () => {
    return (
        <section id="novosti" className="bg-[#f6f1e4]" >
            <div className="max-w-6xl mx-auto px-6 pt-24 pb-24 flex flex-col items-start gap-5">
                <div className="flex items-center gap-2">
                    <img src={logo} alt="" className="w-6 h-6 rounded-full object-cover" />
                    <span className="text-sm font-semibold uppercase tracking-wide text-[#0e674b]">
                        Novosti
                    </span>
                </div>
                <div className="flex flex-col gap-4">
                    <h2 className="font-extrabold tracking-tight text-3xl sm:text-4xl leading-[1.1] w-full md:w-2/3">
                        Što je novo kod Spidera?
                    </h2>
                    <p className="text-[16px] text-[#5a6359] w-full md:w-3/4">Pročitajte što je novo kod Spidera, koji su planovi u nadolazećem periodu, ali i što se događalo.</p>
                </div>

                <div className="flex flex-col mt-4 w-full">

                    <div className="grid grid-cols-1 md:grid-cols-[140px_1fr] gap-2 md:gap-8 py-6 border-t border-[#ece4cf]">
                        <span className="text-sm text-[#5a6359]">Lipanj 2026.</span>
                        <div className="flex flex-col gap-1.5">
                            <h3 className="font-bold text-lg text-[#083a2c]">Prijave za ljetni logor otvorene</h3>
                            <p className="text-[#5a6359] text-sm leading-relaxed">Prijave za ovogodišnji ljetni logor kreću ovog mjeseca — mjesta su ograničena, javite se svom vodiču.</p>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-[140px_1fr] gap-2 md:gap-8 py-6 border-t border-[#ece4cf]">
                        <span className="text-sm text-[#5a6359]">Siječanj 2026.</span>
                        <div className="flex flex-col gap-1.5">
                            <h3 className="font-bold text-lg text-[#083a2c]">Zajednički zimski logor s "Vladimirom Nazorom"</h3>
                            <p className="text-[#5a6359] text-sm leading-relaxed">Odred je ponovno ugostio prijatelje iz Karlovca na tradicionalnom zimskom logoru punom snijega i čvorova.</p>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-[140px_1fr] gap-2 md:gap-8 py-6 border-t border-[#ece4cf]">
                        <span className="text-sm text-[#5a6359]">Prosinac 2025.</span>
                        <div className="flex flex-col gap-1.5">
                            <h3 className="font-bold text-lg text-[#083a2c]">Betlehemsko svjetlo stiglo u Duga Resu</h3>
                            <p className="text-[#5a6359] text-sm leading-relaxed">Plamen je iz Beča stigao ravno do naših vratiju i odatle krenuo dalje, iz ruke u ruku, po cijelom gradu.</p>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-[140px_1fr] gap-2 md:gap-8 py-6 border-t border-[#ece4cf] border-b">
                        <span className="text-sm text-[#5a6359]">Studeni 2025.</span>
                        <div className="flex flex-col gap-1.5">
                            <h3 className="font-bold text-lg text-[#083a2c]">Nova sezona izviđačke olimpijade</h3>
                            <p className="text-[#5a6359] text-sm leading-relaxed">Odred je otvorio pripreme za ovogodišnju izviđačku olimpijadu, s naglaskom na orijentaciju i prvu pomoć.</p>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    )
}

export default Newspapers;