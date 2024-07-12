import React from "react";
import './DisplaySearch.css';

const ItemsCard = ({ id, image, name, descriptions, price, wishlist, addToWishlist, removeFromWishlist }) => {
    const isWishlist = wishlist.some((item) => item.id === id);

    const handleWishlist = () => {
        const item = { id, image, name, descriptions, price };
        if (isWishlist) {
            removeFromWishlist(item);
        } else {
            addToWishlist(item);
        }
    };

    return (
        <div className="flex flex-col mx-3 mb-16 p-2 bg-[#EA9253] w-60 h-80
                        justify-start items-center rounded-xl shadow-xl
                        transition duration-200">
            <div className="relative w-[95%] items-center flex-shrink-0 mt-[8px]">
                {image && <img src={image} alt={name} className="item-image justify-center items-center rounded-xl" />}
                <div className="absolute -mt-3 -mr-3 top-0 right-0 w-10 h-10 bg-[#EA9253] rounded-full p-2" onClick={handleWishlist}>
                    <button aria-label={isWishlist ? "Remove from Wishlist" : "Add to Wishlist"}>
                        <svg xmlns="http://www.w3.org/2000/svg" fill={isWishlist ? "red" : "none"} viewBox="0 0 24 24" strokeWidth="1.5" stroke={isWishlist ? "red" : "white"}
                            className="w-6 h-6 hover:fill-red hover:stroke-red">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z" />
                        </svg>
                    </button>
                </div>
            </div>
            <div className="flex justify-end mt">
            <div className="flex flex-col py-1 flex-wrap">
                <h2 className="text-lg font-semibold">{name}</h2>
                <p className="text-xl font-bold">{price}</p>
                <p className="text-sm">{descriptions}</p>
            </div>
            </div>
        </div>
    );
};

export default ItemsCard;
