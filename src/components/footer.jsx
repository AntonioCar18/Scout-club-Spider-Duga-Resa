import logo from "../assets/LogoSpider.png"

const Footer = () => {
    return (
        <footer className="bg-[#083a2c]">
            <div className="max-w-5xl mx-auto px-6 pt-16 pb-10">

                <div className="grid grid-cols-1 md:grid-cols-[1.4fr_1fr_1fr_1fr] gap-10">

                    <div className="flex flex-col gap-4">
                        <a href="#top" className="flex items-center gap-3">
                            <img src={logo} alt="OI Spider" className="w-11 h-11 rounded-full object-cover" />
                            <span className="font-bold text-[#f6f1e4] text-lg">OI Spider</span>
                        </a>
                        <p className="text-sm text-[#b9c7bb] leading-relaxed max-w-xs">
                            Od 1952. povezujemo mlade, prirodu i rijeku Mrežnicu, a sve to kroz logore, igru i tradiciju koja traje.
                        </p>
                        <div className="flex items-center gap-3 mt-1">
                            <a
                                href="https://www.facebook.com/izvidacidugaresa"
                                target="__blank__"
                                aria-label="Facebook"
                                className="w-9 h-9 rounded-full bg-white/10 hover:bg-[#f9f307] flex items-center justify-center transition-colors group"
                            >
                                <svg viewBox="0 0 24 24" className="w-4 h-4 fill-[#f6f1e4] group-hover:fill-[#083a2c]">
                                    <path d="M13.5 22v-8.4h2.8l.4-3.3h-3.2V8.1c0-.95.26-1.6 1.63-1.6h1.74V3.5c-.3-.04-1.33-.13-2.53-.13-2.5 0-4.22 1.53-4.22 4.34v2.42H7.3v3.3h2.85V22h3.35Z"/>
                                </svg>
                            </a>
                            <a
                                href="https://www.instagram.com/odredizvidacaspider/"
                                target="__blank__"
                                aria-label="Instagram"
                                className="w-9 h-9 rounded-full bg-white/10 hover:bg-[#f9f307] flex items-center justify-center transition-colors group"
                            >
                                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" className="w-4 h-4 text-[#f6f1e4] group-hover:text-[#083a2c]">
                                    <rect x="3.5" y="3.5" width="17" height="17" rx="5" />
                                    <circle cx="12" cy="12" r="4" />
                                    <circle cx="17" cy="7" r="0.9" fill="currentColor" stroke="none" />
                                </svg>
                            </a>
                        </div>
                    </div>

                    <div className="flex flex-col gap-3">
                        <span className="text-xs font-semibold uppercase tracking-wide text-[#f9f307]">Odred</span>
                        <a href="#povijest" className="text-sm text-[#b9c7bb] hover:text-[#f6f1e4] transition-colors w-fit">Povijest</a>
                        <a href="#aktivnosti" className="text-sm text-[#b9c7bb] hover:text-[#f6f1e4] transition-colors w-fit">Aktivnosti</a>
                        <a href="#galerija" className="text-sm text-[#b9c7bb] hover:text-[#f6f1e4] transition-colors w-fit">Galerija</a>
                        <a href="#novosti" className="text-sm text-[#b9c7bb] hover:text-[#f6f1e4] transition-colors w-fit">Novosti</a>
                    </div>

                    <div className="flex flex-col gap-3">
                        <span className="text-xs font-semibold uppercase tracking-wide text-[#f9f307]">Tradicija</span>
                        <a href="#tradicija" className="text-sm text-[#b9c7bb] hover:text-[#f6f1e4] transition-colors w-fit">Betlehemsko svjetlo</a>
                        <a href="#kontakt" className="text-sm text-[#b9c7bb] hover:text-[#f6f1e4] transition-colors w-fit">Kontakt</a>
                    </div>

                    <div className="flex flex-col gap-3">
                        <span className="text-xs font-semibold uppercase tracking-wide text-[#f9f307]">Kontakt</span>
                        <a href="mailto:spiderdugaresa@gmail.com" className="text-sm text-[#b9c7bb] hover:text-[#f6f1e4] transition-colors w-fit">
                            spiderdugaresa@gmail.com
                        </a>
                        <span className="text-sm text-[#b9c7bb]">Duga Resa</span>
                        <span className="text-sm text-[#b9c7bb]">Karlovačka županija</span>
                    </div>

                </div>

                <div className="relative mt-14 mb-8 h-px w-full">
                    <div className="absolute inset-0 border-t border-dashed border-white/15" />
                </div>

                <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
                    <p className="text-xs text-[#8a9587]">
                        Odred izviđača „Spider” · Duga Resa · Osnovan 1952.
                    </p>
                    <a
                        href="/"
                        className="text-xs font-semibold text-[#b9c7bb] hover:text-[#f9f307] transition-colors"
                    >
                        Nazad na vrh ↑
                    </a>
                </div>

            </div>
        </footer>
    )
}

export default Footer;