import React from 'react';
import ItemsCard from "../components/ItemsCard";

const Favorite = ({ wishlist, addToWishlist, removeFromWishlist}) => {
    return (
        <div className="w-full flex flex-col mt-32">
            <h2 className="mx-[3%] text-2xl">Favorites</h2>
            <div className="w-full flex flex-col">
                <div className="w-full flex flex-row flex-wrap justify-center">
                    {wishlist.map((item) => (
                        <ItemsCard
                            key={item.id}
                            id={item.id}
                            image={item.image}
                            name={item.name}
                            descriptions={item.descriptions}
                            price={item.price}
                            wishlist={wishlist}
                            addToWishlist={addToWishlist}
                            removeFromWishlist={removeFromWishlist}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Favorite;