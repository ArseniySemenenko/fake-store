import React, {useState} from 'react';
import {Product} from "./components/Product";
import Navigator from "./components/Navigator";
import {useProducts} from "./hooks/useProducts";
import Basket from "./components/Basket";
import {IProduct} from "./models";

function App() {
    const [category , setCategory] = useState("electronics");

    const {products , loading , error} = useProducts();

    const [basket , setBasket] = useState<IProduct[]>([]);
    const [modal , setModal] = useState(false);


    return (
        <div className="flex items-center flex-col">
            {
                modal &&
                <Basket products={basket} modal={modal} setModal={setModal} setBasket={setBasket}/>
            }
            <Navigator setCategory={setCategory} setModal={setModal} modal={modal}/>
            {
                loading &&
                <h1 className="text-center text-2xl">Loading...</h1>
            }
            {
                error &&
                <h1 className="text-center text-2xl text-red-400">Error</h1>
            }
            {
                products.filter(product => product.category === category).map(product => <Product basket={basket} setBasket={setBasket} product={product}/>)
            }
        </div>
    );
}

export default App;
