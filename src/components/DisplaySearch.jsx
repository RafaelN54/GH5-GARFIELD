import React, { useState } from "react";
import ItemsCard from "./ItemsCard";

export default function DisplaySearch({ wishlist, addToWishlist, removeFromWishlist }) {
    const Items = [
        { id: 1, image: "/asset/crochet.jpeg", name: "Penguin Crochet Doll", descriptions: "Sold 23 items", price: "Rp65.900" },
        { id: 2, image: "/asset/crochet2.jpeg", name: "Sanrio Crochet Doll", descriptions: "Sold 75 items", price: "Rp78.990" },
        { id: 3, image: "/asset/embroid.jpeg", name: "Flower Embroidery", descriptions: "Sold 10 items", price: "Rp119.990" },
        { id: 4, image: "/asset/macrame2.jpg", name: "Small Macrame", descriptions: "Sold 44 items", price: "Rp54.500" },
        { id: 5, image: "/asset/macrame.jpg", name: "Wall Hanging Macrame", descriptions: "Sold 8 items", price: "Rp249.599" },
        { id: 6, image: "/asset/papercraft.jpg", name: "Avengers Paper Dolls", descriptions: "Sold 188 items", price: "Rp35.899" },
        { id: 7, image: "/asset/papercraft2.jpg", name: "Plane Origami", descriptions: "Sold 11 items", price: "Rp9.999" },
        { id: 8, image: "/asset/pottery.jpeg", name: "Handcrafted Teacup", descriptions: "Sold 30 items", price: "Rp330.900" },
        { id: 9, image: "/asset/pottery2.jpeg", name: "Artisan Vase", descriptions: "Sold 25 items", price: "Rp150.000" },
        { id: 10, image: "/asset/rattan.jpeg", name: "Rattan Basket", descriptions: "Sold 45 items", price: "Rp75.400" },
        { id: 11, image: "/asset/stained.jpeg", name: "Stained Glass", descriptions: "Sold 18 items", price: "Rp155.000" },
        { id: 12, image: "/asset/tenun.jpeg", name: "Woven Fabric", descriptions: "Sold 55 items", price: "Rp220.000" },
        { id: 13, image: "/asset/ulos.jpeg", name: "Traditional Ulos", descriptions: "Sold 44 items", price: "Rp185.000" },
        { id: 14, image: "/asset/wood.jpeg", name: "Wooden Keychains", descriptions: "Sold 68 items", price: "Rp25.899" },
        { id: 15, image: "/asset/wood2.jpeg", name: "Carved Wood Container", descriptions: "Sold 12 items", price: "Rp350.000" },
    ];

    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 10;

    const totalPages = Math.ceil(Items.length / itemsPerPage);

    const currentItems = Items.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage);

    const handlePageChange = (pageNumber) => {
        setCurrentPage(pageNumber);
    };

    return (
        <div className="w-full flex flex-col">
            <h2 className="mx-[3%] text-2xl">Popular Products</h2>
            <div className="w-full flex flex-col">
                <div className="w-full flex flex-row flex-wrap justify-center mt-4">
                    {currentItems.map((item) => (
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
                <div className="flex justify-center mt-4">
                    {Array.from({ length: totalPages }, (_, index) => (
                        <button
                            key={index}
                            className={`px-3 py-1 mx-1 border ${index + 1 === currentPage ? 'bg-gray-300' : 'bg-white'}`}
                            onClick={() => handlePageChange(index + 1)}
                        >
                            {index + 1}
                        </button>
                    ))}
                </div>
            </div>
        </div>
    );
}
