'useclient'
import Card from "./Card";
import { useState } from "react"
import { findCards } from './utils/supabase-client'

export default async function CardContainer() {

    const [cartItems, setCartItems] = useState([])

    useEffect(() => {
      // This will run whenever cartItems changes
      console.log(cartItems);
  }, [cartItems]);
  
  const addToCart = () => {
      // Adding the new item to the cartItems state
      const newItem = { title, description, img }
      setCartItems([...cartItems, newItem])
  }
  
    const Cards = await findCards()

    return(
        <div className='flex gap-4 w-full my-6 p-6 flex-wrap'>
            {Cards.map((card, index) => (
            <Card key={index} title={card.title} img={card.img} description={card.description} addToCart={addToCart} cartItems={cartItems} />
            ))}
        </div>
    )
}