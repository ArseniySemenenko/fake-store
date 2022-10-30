import React, {useState} from 'react';
import {Product} from "./components/Product";
import Navigator from "./components/Navigator";
import {useProducts} from "./hooks/useProducts";

function App() {

    const [category , setCategory] = useState("electronics");

    const {products , loading , error} = useProducts();


  return (
      <div>
          <Navigator setCategory={setCategory}/>
          {
              loading &&
              <h1 className="text-center text-2xl">Loading...</h1>
          }
          {
              error &&
              <h1 className="text-center text-2xl text-red-400">Error</h1>
          }
          {
              products.filter(product => product.category === category).map(product => <Product product={product}/>)
          }
      </div>
  );
}

export default App;
