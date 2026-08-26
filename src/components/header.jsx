import logo from "../assets/LogoSpider.png"

const Header = () => {
    return (
        <header className="sticky top-0 z-50 bg-[#083a2c]">
            <div className="max-w-6xl px-6 mx-auto flex items-center justify-between h-19.5">

                <a href="/" className="flex items-center gap-3">
                    <img src={logo} alt="OI Spider" className="w-10 h-10 rounded-full object-cover" />
                    <span className="font-bold text-[#f6f1e4] text-lg">OI Spider</span>
                </a>

                <nav className="hidden md:flex items-center gap-8">
                    <a href="#povijest" className="cursor-pointer text-sm font-medium text-[#b9c7bb] hover:text-[#f6f1e4] transition-colors relative pb-1 after:content-[''] after:absolute after:left-0 after:bottom-0 after:h-[1.5px] after:w-0 after:bg-[#f9f307] after:transition-all hover:after:w-full">
                        Povijest Odreda
                    </a>
                    <a href="#aktivnosti" className="cursor-pointer text-sm font-medium text-[#b9c7bb] hover:text-[#f6f1e4] transition-colors relative pb-1 after:content-[''] after:absolute after:left-0 after:bottom-0 after:h-[1.5px] after:w-0 after:bg-[#f9f307] after:transition-all hover:after:w-full">
                        Aktivnosti
                    </a>
                    <a href="#galerija" className="cursor-pointer text-sm font-medium text-[#b9c7bb] hover:text-[#f6f1e4] transition-colors relative pb-1 after:content-[''] after:absolute after:left-0 after:bottom-0 after:h-[1.5px] after:w-0 after:bg-[#f9f307] after:transition-all hover:after:w-full">
                        Galerija
                    </a>
                    <a href="#novosti" className="cursor-pointer text-sm font-medium text-[#b9c7bb] hover:text-[#f6f1e4] transition-colors relative pb-1 after:content-[''] after:absolute after:left-0 after:bottom-0 after:h-[1.5px] after:w-0 after:bg-[#f9f307] after:transition-all hover:after:w-full">
                        Novosti
                    </a>
                </nav>
                <a
                    className="hidden cursor-pointer md:inline-block rounded-lg bg-white px-5 py-2.5 text-sm font-semibold text-[#083a2c] hover:bg-white transition-colors"
                >
                    Pridruži nam se
                </a>

                <button className="md:hidden" aria-label="Izbornik">
                    <svg className="w-7 h-7 text-[#f6f1e4]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.8">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5M3.75 17.25h16.5" />
                    </svg>
                </button>
            </div>
        </header>
    )
}

export default Header;