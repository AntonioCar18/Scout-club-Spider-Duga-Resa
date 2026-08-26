import logo from "../assets/LogoSpider.png";

const History = () => {
    return (
        <section id="povijest" className="bg-white">
            <div className="max-w-6xl mx-auto px-6 py-24 flex flex-col items-start gap-16">

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-16 w-full items-start">

                    <div className="flex flex-col gap-10">
                        <div className="flex flex-col gap-5">
                            <div className="flex items-center gap-2">
                                <img src={logo} alt="" className="w-6 h-6 rounded-full object-cover" />
                                <span className="text-sm font-semibold uppercase tracking-wide text-[#0e674b]">
                                    Povijest Odreda
                                </span>
                            </div>

                            <h2 className="font-extrabold tracking-tight text-4xl sm:text-5xl leading-[1.1]">
                                Pričamo Vam priču o našoj povijesti
                            </h2>
                        </div>

                        <div className="flex flex-col gap-6 text-[#5a6359] text-base leading-relaxed text-justify">
                            <p>
                                Povijest Odreda izviđača Spider iz Duge Rese seže u 1927. godinu, kada se pojavljuju prvi zapisi o izviđaštvu u Dugoj Resi.
                                Službeni zapisi o osnutku odreda postoje, a prema njima, od 25. travnja 1952. godine postoji izviđaštvo u Dugoj Resi, ali tada pod nazivom „OI Vladimir Gortan”.
                            </p>

                            <p>
                                Godine 1996., nakon završetka Domovinskog rata, OI „Vladimir Gortan” mijenja ime u OI „Spider” i nastavlja svoj rad. Posebno se ističe 2010. godina, kada povratak mnogih članova odredu daje novi zamah i podiže ga na razinu koju održava i danas.
                            </p>

                            <p>
                                Odred izviđača „Spider” danas broji preko 60 aktivnih članova raznih uzrasta koji kroz godinu sudjeluju u raznim natjecanjima, logorovanjima i projektima. Osim redovitih zimskih i ljetnih logora te izviđačke olimpijade, odred svake godine organizira i zajednički zimski logor s Odredom izviđača „Vladimir Nazor” iz Karlovca, a kroz Erasmus+ razmjene ugošćuje vršnjake iz cijele Europe na obalama Mrežnice.
                            </p>
                        </div>
                    </div>

                    <div className="flex flex-col justify-between h-full pt-0 md:pt-48">

                        <div className="flex items-start gap-6 mb-10 md:mb-0">
                            <span className="font-['Space_Grotesk'] text-2xl font-bold text-[#0e674b] w-20 shrink-0">
                                1927.
                            </span>
                            <div className="flex flex-col gap-1.5">
                                <h3 className="font-bold text-gray-900">Prvi zabilježeni izviđači</h3>
                                <p className="text-[#5a6359] text-sm leading-relaxed">
                                    Izviđaštvo se javlja u Dugoj Resi, desetljećima prije današnjeg imena odreda.
                                </p>
                            </div>
                        </div>

                        <div className="flex items-start gap-6 mb-10 md:mb-0">
                            <span className="font-['Space_Grotesk'] text-2xl font-bold text-[#0e674b] w-20 shrink-0">
                                1952.
                            </span>
                            <div className="flex flex-col gap-1.5">
                                <h3 className="font-bold text-gray-900">Službeno osnivanje Odreda</h3>
                                <p className="text-[#5a6359] text-sm leading-relaxed">
                                    Nakon Drugog svjetskog rata odred se ponovno okuplja i formalno osniva kao OI „Vladimir Gortan”.
                                </p>
                            </div>
                        </div>

                        <div className="flex items-start gap-6 mb-10 md:mb-0">
                            <span className="font-['Space_Grotesk'] text-2xl font-bold text-[#0e674b] w-20 shrink-0">
                                1996.
                            </span>
                            <div className="flex flex-col gap-1.5">
                                <h3 className="font-bold text-gray-900">Promjena imena u „Spider”</h3>
                                <p className="text-[#5a6359] text-sm leading-relaxed">
                                    Nakon završetka Domovinskog rata odred mijenja ime i nastavlja rad pod današnjim prepoznatljivim nazivom.
                                </p>
                            </div>
                        </div>

                        <div className="flex items-start gap-6">
                            <span className="font-['Space_Grotesk'] text-2xl font-bold text-[#0e674b] w-20 shrink-0">
                                Danas
                            </span>
                            <div className="flex flex-col gap-1.5">
                                <h3 className="font-bold text-gray-900">OI „Spider” — avantura koja traje</h3>
                                <p className="text-[#5a6359] text-sm leading-relaxed">
                                    Logori, razmjene i tradicija koje se nastavljaju iz godine u godinu.
                                </p>
                            </div>
                        </div>

                    </div>

                </div>

            </div>
        </section>
    );
};

export default History;