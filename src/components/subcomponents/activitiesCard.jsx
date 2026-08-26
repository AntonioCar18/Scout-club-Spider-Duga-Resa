const ActivitiesCard = ({title, desc, icon}) => {

    const Icon = icon

    return (
        <div className="p-8 bg-white rounded-2xl shadow-lg border border-gray-200 hover:border-gray-500 transition-all duration-300">
            <div className="bg-[#eaf3ee] rounded-2xl p-3 w-fit mb-2">
                <Icon className="text-[#0e674b] w-6 h-6" />    
            </div>
            <h3 className="font-semibold text-lg mt-2 text-gray-900">{title}</h3>
            <p className="mt-2 text-[#5a6359] leading-relaxed">
                {desc}
            </p>
        </div>
    );
};

export default ActivitiesCard;