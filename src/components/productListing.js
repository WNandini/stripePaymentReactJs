import React, { useState } from 'react';
import { loadStripe } from '@stripe/stripe-js';
import { FaSpinner } from "react-icons/fa"

const stripekey = process.env.STRIPE_KEY;

const ProductListing = () => {
    const [loader, setLoader] = useState(false);
    const [selectedId, setSelectedId] = useState(0);

    const product = [
        {
            id: 0,
            name: 'Bella Vita Organic',
            image: 'perfume1.jpg',
            price: 300,
            qty: 2
        },
        {
            id: 1,
            name: 'Renee',
            image: 'perfume7.jpg',
            price: 350,
            qty: 2
        },
        {
            id: 2,
            name: 'Park Avenue',
            image: 'perfume3.jpg',
            price: 400,
            qty: 2
        },
        {
            id: 3,
            name: 'Nisara',
            image: 'perfume4.jpg',
            price: 250,
            qty: 2
        },
        {
            id: 4,
            name: 'Dress Berry',
            image: 'perfume3.jpg',
            price: 305,
            qty: 2
        },
        {
            id: 5,
            name: 'Dress Berry',
            image: 'perfume6.jpg',
            price: 500,
            qty: 2
        },
        {
            id: 6,
            name: 'Park Avenue',
            image: 'perfume7.jpg',
            price: 350,
            qty: 2
        },
        {
            id: 7,
            name: 'Nisara',
            image: 'perfume4.jpg',
            price: 250,
            qty: 2
        }
    ]

    const makePayment = async(item) => {
        setLoader(true)
        setSelectedId(item.id)
        const stripe = await loadStripe(stripekey)
        const sendData = {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({
                products: item
            })
        }
        const resp = await fetch('https://stripepaymentbackend.onrender.com/api/create-checkout-session',sendData)
        const data = await resp.json()        
        const result = stripe.redirectToCheckout({
            sessionId: data.id
        })
        if(result.error){
            console.log('result',result.error)
        }
    }

    return (
        <div className='container mx-auto lg:px-10 lg:py-10'>
            <div className='grid grid-cols-1 lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-3 gap-4'>
                {product.map((item, index) => 
                <div className='border border-grey-300 hover:shadow-lg hover:shadow-grey-500 
                border-radius rounded-md m-4'>
                    <div className='p-3'>
                        <img 
                        className=''
                        src={item.image}
                        alt="Data"
                        />
                        <div className='flex justify-between py-4'>
                            <h3>{item.name}</h3> 
                            <h3 className='font-bold'>Rs. {item.price}</h3>
                        </div>
                        <button className='border w-full p-2 my-2 border-radius rounded-md 
                        hover:bg-gradient-to-r from-cyan-500 to-blue-500 hover:text-white
                        flex justify-between items-center '
                        onClick={() => makePayment(item)} 
                        >
                            <p>Buy Now</p>
                            {loader && selectedId === item.id &&
                            <svg class="animate-spin h-5 w-5 p-0" viewBox="0 0 24 24">
                                <FaSpinner/>
                            </svg>}
                        </button>
                    </div>
                </div>
                )}
            </div>
        </div>
    )
}   

export default ProductListing;