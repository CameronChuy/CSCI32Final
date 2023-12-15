'use client'
import Button from "./Button";
import { useState, useEffect } from "react";

export default function Card({
    title="Title",
    img="Null",
    description="Description"
}) {

    const [cartItems, setCartItems] = useState([])

    useEffect(() => {
        // This will run whenever cartItems changes
        console.log(cartItems);
    }, [cartItems]);

    const addToCart = () => {
        // Adding the new item to the cartItems state
        const newItem = { title, description, img }
        setCartItems([...cartItems, newItem])
        console.log(cartItems)
        console.log("Test")
    }

    return (
    <div className="flex flex-col justify-between border-solid border-8 border-orange-300 p-6 m-2 min-h-fit w-64 bg-gray-100 rounded-lg shadow-xl">
        <div>
            <h1>{title}</h1>
            <img className="max-w-full" src= {img}/>
            <p className="text-gray-900">{description}</p>
            
        </div>
        <div className="flex justify-end align-bottom w-full">
            <Button onClick={addToCart}>Add Card</Button>
        </div>
    </div>
    );
}
