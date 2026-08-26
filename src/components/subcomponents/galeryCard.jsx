import React from 'react';

const GalleryCard = ({ imageSrc, altText, caption }) => {
    return (
        <div className="flex flex-col gap-3">
            <div className="rounded-2xl overflow-hidden bg-[#f6f1e4] border border-[#ece4cf] hover:border-[#c6b99a] transition-colors duration-200 h-80">
                <img 
                    src={imageSrc} 
                    alt={altText} 
                    className="w-full h-full object-cover" 
                />
            </div>
            <div className='border-l-2 border-amber-300'>
                <p className="ml-2 text-[#5a6359] text-sm">{caption}</p>
            </div>
        </div>
    );
};

export default GalleryCard;