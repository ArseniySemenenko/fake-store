import React, {useState} from 'react';
import {IProduct} from '../models';
import basket from "./Basket";

interface ProductProps {
    product: IProduct,
    setBasket: any,
    basket: IProduct[],
}

export function Product({ product , setBasket , basket}: ProductProps) {
    const [details, setDetails] = useState(false)

    function addToBasket(){
        setBasket([...basket , product]);
        console.log(basket);
    }

    return (
        <div
            className="border py-2 px-4 rounded flex flex-col items-center mt-2 w-[800px]"
        >
            <img src={product.image} className="w-1/6" alt={product.title} />
            <p>{ product.title }</p>
            <p className="font-bold">{product.price}</p>
            <button
                className={details ? 'py-2 px-4 border bg-yellow-400' : 'py-2 px-4 border bg-blue-400'}
                onClick={() => setDetails(!details)}
            >
                { details ? 'Hide Details' : 'Show Details' }
            </button>
            <button
                className={'mt-2 py-2 px-4 border bg-yellow-400'}
                onClick={addToBasket}
            >
                Add to basket
            </button>

            {details && <div>
                <p>{ product.description }</p>
                <p>Rate: <span style={{ fontWeight: 'bold' }}>{product?.rating?.rate}</span></p>
            </div>}

        </div>
    )
}