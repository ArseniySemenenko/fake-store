import {useEffect, useState} from "react";
import {IProduct} from "../models";
import axios, {AxiosError} from 'axios';

export function useProducts(){
    const [loading , setLoading] = useState(false);
    const [error , setError] = useState("");
    const [products , setProducts] = useState<IProduct[]>([]);

    async function fetch(){
        try{
            setLoading(true);
            const res = await axios.get('https://fakestoreapi.com/products');
            setProducts(res.data);
            setLoading(false);
        }
        catch (e: unknown){
            const error = e as AxiosError
            setLoading(false);
            setError(error.message);
        }
    }

    useEffect(() => {
        fetch()
    } , [])

    return{
        loading,
        error,
        products,
    }
}