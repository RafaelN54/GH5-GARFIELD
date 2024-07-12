import React, { useState, useEffect } from "react";
import './KotakCart.css';

function Kotakcart({onPriceChange, id, onDelete}){
    const harga = 1000
    const [counterItem, setCounterItem] = useState(1);
    const [totalPrice, setTotalPrice] = useState(harga);
    
    useEffect(() => {
        if(counterItem === 0){
            onDelete(id);
        } else {
            const newTotalPrice = counterItem * harga;
            setTotalPrice(newTotalPrice);
            onPriceChange(id, newTotalPrice);
        }
    }, [counterItem]);

    const increaseCounter = () => {
        setCounterItem(prevCounter => prevCounter + 1);
    };

    const decreaseCounter = () => {
        setCounterItem(prevCounter => prevCounter - 1);
    };

    return(
    <div className="Pembungkus border-2 border-black rounded-xl">
        <div className="ProductInfo">
            <a>image</a>
            <br/>
            <a>nama barang {harga}</a>
        </div>
        <div className="ProductPricing">
            <strong>{totalPrice}</strong>
            <br/>
            <button onClick={decreaseCounter}>-</button>
            <a>{counterItem}</a>
            <button onClick={increaseCounter}>+</button>
        </div>
    </div>
    )
}

export default Kotakcart;