import React from "react";
import ItemsCard from "./ItemsCard";

export default function DisplaySearch (){
    const Items = [
        {
            id: 1,
            image: "https://placehold.co/400",
            name: "Test",
            descriptions: "",
            price: "",
        },
    
    ]

    return (
        <div className="w-full flex flex-col">
            <h1>
                Search Result ...
            </h1>
            <div className="w-full flex flex-row flex-wrap">
                {Items.map((item, index) => (
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