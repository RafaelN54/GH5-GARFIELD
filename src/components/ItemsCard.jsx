import React from "react";

const ItemsCard = (props) => {
    const { image, name, descriptions, price } = props;

    return (
        <div className="flex flex-row flex-nowrap m-3 p-2 bg-orange-400 w-64 h-auto
                        justify-center items-center rounded-2xl">
            <div className="w-[90%] flex justify-stretch items-center">
                {image && <img src={image} className="justify-center items-center rounded-2xl" />}
            </div>
            <div className="flex flex-col px-3 flex-wrap">
                <h2 className="text-lg font-bold">{name}</h2>
                <p className="text-base">{price}</p>
                <p className="text-base">{descriptions}</p>
            </div>
        </div>            
    );
};

export default ItemsCard;