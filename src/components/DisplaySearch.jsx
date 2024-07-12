import React from "react";
import ItemsCard from "./ItemsCard";

export default function DisplaySearch (){
    const Items = [
        {
            id: 1,
            image: "https://placehold.co/400",
            name: "Test",
            descriptions: "Test 2",
            price: "Rp10000",
        },
        {
            id: 2,
            image: "https://placehold.co/400",
            name: "A",
            descriptions: "B",
            price: "Rp10.000",
        },
        {
            id: 1,
            image: "https://placehold.co/400",
            name: "Test",
            descriptions: "Test 2",
            price: "Rp10.000000",
        },
        {
            id: 2,
            image: "https://placehold.co/400",
            name: "A",
            descriptions: "B",
            price: "Rp10.000",
        },
    ]

    return (
        <div className="w-full flex flex-col">
            <div className="w-full flex flex-row flex-nowrap justify-center">
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