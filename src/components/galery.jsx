import logo from "../assets/LogoSpider.png"
import slika1 from "../assets/Slika1.jpg"
import slika2 from "../assets/Slika2.jpg"
import slika3 from "../assets/Slika3.jpg"
import slika4 from "../assets/Slika4.jpg"
import slika5 from "../assets/Slika5.jpg"
import slika6 from "../assets/Slika6.jpg"
import GalleryCard from "./subcomponents/galeryCard";

const Galery = () => {
    return (
        <section id="galerija" className="bg-white">
            <div className="max-w-6xl mx-auto px-6 pt-24 pb-24 flex flex-col items-start gap-5">
                <div className="flex items-center gap-2">
                    <img src={logo} alt="" className="w-6 h-6 rounded-full object-cover" />
                    <span className="text-sm font-semibold uppercase tracking-wide text-[#0e674b]">
                        Galerija fotografija
                    </span>                                      
                </div>
                <div className="flex flex-col gap-4">
                    <h2 className="font-extrabold tracking-tight text-4xl sm:text-5xl leading-[1.1] w-full md:w-2/3">
                        Aktivnosti u Spideru kroz fotografije
                    </h2>
                    <p className="text-[16px] text-[#5a6359] w-full md:w-3/4">Redovit boravak u prirodi, logorovanja, zimovanja te razne suradnje i projekti dio su svakodnevice dugoreških izviđača.</p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8 w-full">
                    <GalleryCard 
                        imageSrc={slika1}
                        altText="Logorovanje Rovinj"
                        caption="Logorovanje Rovinj, ljeto 2026."
                    />
                    <GalleryCard 
                        imageSrc={slika2}
                        altText="Memorijal Krešimir Belavić"
                        caption="Memorijal Krešimir Belavić - Krešo, Lipanj 2026."
                    />
                    <GalleryCard 
                        imageSrc={slika3}
                        altText="Druženje na putovanjima"
                        caption="Druženje tijekom odlaska na aktivnosti"
                    />
                    <GalleryCard 
                        imageSrc={slika4}
                        altText="Tehnika boravka u prirodi"
                        caption="Tehnika boravka u prirodi, baratanje alatima"
                    />
                    <GalleryCard 
                        imageSrc={slika5}
                        altText="Polaganje zavjeta"
                        caption="Polaganje zavjeta za nove članove"
                    />
                    <GalleryCard 
                        imageSrc={slika6}
                        altText="Druženje tijekom odlaska na aktivnosti"
                        caption="Druženje tijekom odlaska na aktivnosti"
                    />
                </div>
            </div>
        </section>
    );
}

export default Galery;