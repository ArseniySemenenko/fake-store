import {useEffect, useState} from "react";
import axios from 'axios';

export function useCategorys(){
    const [categorys , setCategorys] = useState<[]>([]);

    async function fetch(){
        const res = await axios.get("https://fakestoreapi.com/products/categories");
        setCategorys(res.data);
    }

    useEffect(() => {
        fetch()
    } , [])

    return{
        categorys,
    }
}