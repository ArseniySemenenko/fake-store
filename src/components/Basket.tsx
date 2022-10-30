import React from 'react';
import {IProduct} from "../models";
import BasketProduct from "./BasketProduct";

interface IProps{
    products: IProduct[],
    modal: boolean,
    setModal: any,
    setBasket: any,
}

function Basket({products , modal , setModal , setBasket} : IProps) {
    return (
       <>
           <div
               className='fixed bottom-0 top-0 right-0 left-0 bg-black/50'
               onClick={() => {
                   setModal(!modal);
               }}
           >
           </div>
           <div
               className="w-[70%] px-20 py-10 rounded bg-white absolute top-10 left-1/2 -translate-x-1/2"
           >
               <h1
                   className="text-center font-bold text-2xl"
               >Basket</h1>
               {products.length !== 0 &&
                   products.map(product => <BasketProduct basket={products} setBasket={setBasket} product={product}/>)
               }
               {
                   products.length === 0 &&
                   <h1 className="text-2xl text-center mt-10">Void</h1>
               }
               <div className="text-center mt-10">
                   <button
                       className='text-2xl py-2 px-4 border bg-blue-400'
                   >Order</button>
               </div>
           </div>
       </>
    );
}

export default Basket;