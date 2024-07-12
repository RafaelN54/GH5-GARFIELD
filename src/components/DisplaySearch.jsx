import React from "react";
import ItemsCard from "./ItemsCard";

const Items = [
    {
        id: 1,
        image: "",
        name: "",
        descriptions: "",
        price: "",
    },

]

export default function DisplaySearch (){
    return (
        <div className="w-full flex flex-col">
            <h1>
                Search Result ...
            </h1>
            <div className="w-full flex flex-row flex-wrap">
                {items.map((item, index) => (
                    <ItemsCard 
                        key={index}
                        image={item.image}
                        name={item.name}
                        descriptions={item.descriptions}
                        price={item.price}    
                    />
                ))}
            </div>
        </div>
    );
};