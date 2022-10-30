import React, {useState} from 'react';
import {IProduct} from '../models';

interface ProductProps {
    product: IProduct
}

export function Product({ product }: ProductProps) {
    const [details, setDetails] = useState(false)

    return (
        <div
            className="border py-2 px-4 rounded flex flex-col items-center mb-2"
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

            {details && <div>
                <p>{ product.description }</p>
                <p>Rate: <span style={{ fontWeight: 'bold' }}>{product?.rating?.rate}</span></p>
            </div>}

        </div>
    )
}