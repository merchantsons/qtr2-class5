"use client";
import React, { useState } from 'react';

const Body = () => {

    const [cart, setCart] = useState(0)
    const [price, setPrice] = useState(0)
    const [stock, setStock] = useState(20)

    const Inc = () => { if (cart < 20) { setCart(cart + 1), setPrice((cart + 1) * 29.99), setStock(stock - 1) } }
    const Dec = () => { if (cart > 0) { setCart(cart - 1), setPrice((cart - 1) * 29.99), setStock(stock + 1) } }
    const rprice = price.toLocaleString('en-US', { style: 'currency', currency: 'USD', });
    return (
        <div>
            <div className='text-right text-xs p-5 mr-48 mt-10'>Props Used For User Name & Welcom Message / To Check GoTo Hooks Route From Menu ↑ </div>
            <div className='text-xs p-5 w-96 mt-28 mx-auto'>useState Hook Used To Increase / Decrease Price & Stock ↓</div>
            <div className='bg-red-800 mx-auto mt-10 flex w-96 p-6 text-xs text-center rounded-lg'>
                <div className='flex text-center mx-auto flex-col'>
                    <button className="bg-sky-950 text-white p-2 m-2" onClick={Inc}> + </button>
                    <div> Total Items In Stock : {stock} </div>
                    <button className="bg-sky-950 text-white p-2 m-2" onClick={Dec}> - </button>
                </div>
                <p className="text-xs mt-5 ml-10">Items Your In Cart: {cart} </p>
                <p className="text-xs mt-5 ml-10">Total Price: {rprice}</p>
            </div>
        </div>
    )
}

export default Body