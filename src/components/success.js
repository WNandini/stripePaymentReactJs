import React from 'react';
import { RxCheckCircled } from "react-icons/rx";

const Success = () => {
    return (
        <div className='flex justify-center my-10 lg:my-20'>
            <div className='py-20 lg:border-2 lg:shadow-lg 
            md:border-2 md:shadow-lg sm:border-2 sm:shadow-lg
            border-slate-300 w-1/2 flex flex-col justify-center items-center'>
                <RxCheckCircled color="green" style={{height: '60px', width: '60px'}}/>
                <h1 className='py-4 text-green-900 font-bold'>
                    Payment Successful
                </h1>
            </div>
        </div>
    )
}   

export default Success;