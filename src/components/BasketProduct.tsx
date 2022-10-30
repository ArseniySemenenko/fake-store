import React from 'react';
import {IProduct} from "../models";
import basket from "./Basket";

interface IProps{
    product: IProduct,
    setBasket: any,
    basket:IProduct[],
}

function BasketProduct({product , setBasket , basket} : IProps) {
    return (
        <div
            className="border py-2 px-4 rounded flex items-center mt-2 w-full justify-around"
        >
            <img src={product.image} className="w-1/6" alt={product.title} />
            <p>{ product.title }</p>
            <p className="font-bold">{product.price}</p>
            <button
                className="text-2xl"
                onClick={() => {
                    setBasket(basket.filter(item => item.title !== product.title))
                }}
            >x</button>
        </div>
    );
}

export default BasketProduct;