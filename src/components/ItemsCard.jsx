import React from "react";

const ItemsCard = (props) => {
    const { image, name, descriptions, price } = props;

    return (
        <div className="w-1/5 flex flex-row m-3 p-2 bg-orange-400
                        justify-center items-center rounded-2xl">
            <div className="w-[90%] flex justify-center items-center">
                {image && <img src={image} className="justify-center items-center rounded-2xl" />}
            </div>
            <div className="flex flex-col">
                <h2>{name}</h2>
                <p>{price}</p>
                <p>{descriptions}</p>
            </div>
        </div>
    );
};

export default ItemsCard;