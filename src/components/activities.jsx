import { Flame, Tent, Trophy, Waves } from "lucide-react";
import logo from "../assets/LogoSpider.png"
import ActivitiesCard from "./subcomponents/activitiesCard";

const Activities = () => {
    return (
        <section id="aktivnosti" className="bg-[#f6f1e4]">
            <div className="max-w-6xl mx-auto px-6 pt-24 pb-24 flex flex-col items-start gap-5">
                <div className="flex items-center gap-2">
                    <img src={logo} alt="" className="w-6 h-6 rounded-full object-cover" />
                    <span className="text-sm font-semibold uppercase tracking-wide text-[#0e674b]">
                        Aktivnosti
                    </span>                                      
                </div>
                <div className="flex flex-col gap-4">
                    <h2 className="font-extrabold tracking-tight text-4xl sm:text-5xl leading-[1.1] w-full md:w-1/2">
                        Učenje kroz boravak u prirodi
                    </h2>
                    <p className="text-[16px] text-[#5a6359] w-full md:w-3/4">Redovit boravak u prirodi, logorovanja, zimovanja te razne suradnje i projekti dio su svakodnevice dugoreških izviđača.</p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mt-8 w-full">
                    <ActivitiesCard 
                        icon={Tent}
                        title="Logorovanje"
                        desc="Zimski i ljetni logori na terenu, dani u kojima raspored diktiraju vrijeme, čvorovi i dežurstva u kuhinji."
                    />
                    <ActivitiesCard 
                        icon={Trophy}
                        title="Memorijal Krešimir Belavić - Krešo"
                        desc="Kroz prijateljsko natjecanje testiraju se terenske vještine: orijentacija, prva pomoć i rad s užetom."
                    />
                    <ActivitiesCard 
                        icon={Flame}
                        title="Vještine preživljavanja"
                        desc="Kroz prijateljsko natjecanje testiraju se terenske vještine: orijentacija, prva pomoć i rad s užetom."
                    />
                    <ActivitiesCard 
                        icon={Waves}
                        title="Aktivnosti na Mrežnici"
                        desc="Odred svoje aktivnosti gradi uz rijeku Mrežnicu,   vrijeme na vodi dio je svakodnevice, baš kao i ugošćivanje izviđača iz cijele Europe na njezinim obalama."
                    />
                </div>
            </div>
        </section>
    );
}

export default Activities;