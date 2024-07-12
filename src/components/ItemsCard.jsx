import React from "react";

const ItemsCard = (props) => {
    const { image, name, descriptions, price } = props;

    return (
        <div className="flex flex-col m-3 p-2 bg-orange-400 w-64 h-80
                        justify-center items-center rounded-2xl shadow-xl
                        hover:scale-125 transition duration-75">
            <div className="relative w-[95%] items-center flex-shrink-0 m-2">
                {image && <img src={image} className="justify-center items-center rounded-2xl" />}
                <div className="absolute mt-2 mr-2 w-6 h-6">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z" />
                    </svg>
                </div>
            </div>
            <div className="flex flex-col py-2 flex-wrap">
                <h2 className="text-lg font-semibold">{name}</h2>
                <p className="text-xl font-bold">{price}</p>
                <p className="text-base">{descriptions}</p>
            </div>
        </div>
    );
};

export default ItemsCard;