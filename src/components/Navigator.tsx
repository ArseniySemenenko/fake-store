import React from 'react';
import {useCategorys} from "../hooks/useCategorys";

interface IProps{
    setCategory: any,
}

function Navigator({setCategory} : IProps) {

    const {categorys} = useCategorys();

    return(
        <nav className="h-[50px] w-screen flex justify-around px-5 bg-gray-500 items-center text-white">
            <span className="font-bold">FakeStoreAPI</span>

            <span>
                {
                    categorys.map(category => <span className="mr-5 cursor-pointer" onClick={() => {setCategory(category)}}>{category}</span>)
                }
            </span>
        </nav>
    );
}

export default Navigator;