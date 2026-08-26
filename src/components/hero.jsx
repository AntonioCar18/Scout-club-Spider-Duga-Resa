const Hero = () => {
    return (
        <section id="top" className="bg-[#f6f1e4]">
            <div className="max-w-6xl mx-auto px-6 pt-12 pb-24 flex flex-col items-start gap-5">

                <h1 className=" font-extrabold text-4xl md:text-7xl leading-tight max-w-3xl">
                    Odred izviđača <span className="text-[#0e674b]">Spider</span>, Duga Resa
                </h1>

                <p className="text-sm md:text-lg text-[#5a6359] max-w-xl">
                    Od 1952. povezujemo mlade, prirodu i rijeku Mrežnicu kroz logore, igru i međunarodnu suradnju.
                </p>

                <div className="flex flex-wrap gap-3 mt-2">
                    <a
                        href="#kontakt"
                        className="rounded-lg bg-[#083a2c] px-7 py-3.5 text-sm font-semibold text-[#f6f1e4] hover:bg-[#0a4735] transition-colors"
                    >
                        Pridruži se
                    </a>
                    <a
                        href="#povijest"
                        className="rounded-lg border border-[#083a2c] px-7 py-3.5 text-sm font-semibold text-[#083a2c] hover:bg-[#083a2c] hover:text-[#f6f1e4] transition-colors"
                    >
                        Naša priča
                    </a>
                </div>

                <div className="flex flex-wrap gap-11 mt-8 pt-7 border-t border-[#e3dcc4] w-full">
                    <div>
                        <b className="block font-bold text-3xl text-[#083a2c]">1927.</b>
                        <span className="text-sm text-[#5a6359]">Prvi zabilježeni podaci</span>
                    </div>
                    <div>
                        <b className="block font-bold text-3xl text-[#083a2c]">25. 04. 1952.</b>
                        <span className="text-sm text-[#5a6359]">Službeno osnovan odred</span>
                    </div>
                    <div>
                        <b className="block font-bold text-3xl text-[#083a2c]">Duga Resa</b>
                        <span className="text-sm text-[#5a6359]">Sjedište odreda</span>
                    </div>
                </div>

            </div>
        </section>
    );
}

export default Hero;