import React from "react";

const ItemsCard = (props) => {
    const { image, name, descriptions, price } = props;

    return (
        <div className="w-1/5 flex flex-col">
            <div className="">
                {image && <img src={image} className="" />}
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