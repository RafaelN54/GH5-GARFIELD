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
    <div className="Pembungkus border-2 border-[#EA9253] bg-white rounded-md">
        <div className="flex flex-col mx-8">
        <div className="ProductInfo flex flex-row">
            <img className="w-[150px] h-[150px] rounded-sm" src="https://img.freepik.com/free-photo/cute-plush-toy-made-from-crochet_23-2151145662.jpg?t=st=1720782177~exp=1720785777~hmac=47f157d867332b1cd6e3ef2dc29491e0c7ee3ade55f63071999fe9fe543c2dab&w=360"></img>
            <br/>
            <div className="flex flex-col mx-3">
            <div>nama barang</div>
            <br/>
            <div>Rp{harga}</div>
            </div>
        </div>
        </div>
        <div className="ProductPricing flex flex-row">
            <div className="mx-2">
            <p className="text-[12px] text-center my-2"> Quantity </p>
            <button className="font-bold text-[#EA9253] w-[20px] h-[20px] mx-2 text-center" onClick={decreaseCounter}>-</button>
            <a>{counterItem}</a>
            <button className="font-bold text-[#EA9253] w-[20px] h-[20px] mx-2 text-center" onClick={increaseCounter}>+</button>
            </div>
            <div className="mx-2">
            <p className="text-[12px] my-2">Total Price</p>
            <strong>Rp{totalPrice}</strong>
            </div>
        </div>
    </div>
    )
}

export default Kotakcart;