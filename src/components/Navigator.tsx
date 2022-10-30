import React from 'react';
import {useCategorys} from "../hooks/useCategorys";

interface IProps{
    setCategory: any,
    setModal: any,
    modal: boolean,
}

function Navigator({setCategory , setModal , modal} : IProps) {

    const {categorys} = useCategorys();

    return(
        <nav className="h-[50px] w-screen flex justify-around px-5 bg-gray-500 items-center text-white">
            <span className="font-bold">FakeStoreAPI</span>

            <span>
                {
                    categorys.map(category => <span className="mr-5 cursor-pointer" onClick={() => {setCategory(category)}}>{category}</span>)
                }
            </span>
            <span
                className="font-bold cursor-pointer"
                onClick={() => {
                    setModal(!modal)
                }}
            >basket</span>
        </nav>
    );
}

export default Navigator;