import React, {useState} from 'react';
import {IProduct} from "../models";

interface IProps{
    product: IProduct,
    setBasket: any,
    basket:IProduct[],
}

function BasketProduct({product , setBasket , basket} : IProps) {

    const [count , setCount] = useState(0);

    return (
        <div
            className="border py-2 px-4 rounded flex items-center mt-2 w-full justify-around"
        >
            <img src={product.image} className="w-1/6" alt={product.title} />
            <div className="text-center">
                <p>{ product.title }</p>
                <p>{count}</p>
                <button
                    className="mr-5"
                    onClick={() => {
                        setCount(count + 1);
                    }}
                >+</button>
                <button
                    onClick={() => {
                        if(count > 0){
                            setCount(count-1);
                        }
                    }}
                >-</button>
            </div>
            <p className="font-bold">{product.price}</p>
            <button
                className="text-2xl"
                onClick={() => {
                    setBasket(basket.filter(item => item.id !== product.id))
                }}
            >x</button>
        </div>
    );
}

export default BasketProduct;