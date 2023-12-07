import Button from "./Button";



export default function Card({
    title="Title",
    img="Null",
    description="Description"
}) {

    var cartItems = {}

    function addToCart(title, img, description) {
        var itemAttributes = [{img}, {description}];
        cartItems[{title}] = itemAttributes;
        console.log("Success", {title})
    }

    return (
    <div className="flex flex-col justify-between border-solid border-8 border-orange-300 p-6 m-2 min-h-fit w-64 bg-gray-100 rounded-lg shadow-xl">
        <div>
            <h1>{title}</h1>
            <img className="max-w-full" src= {img}/>
            <p className="text-gray-900">{description}</p>
            
        </div>
        <div className="flex justify-end align-bottom w-full">
            <Button onClick={addToCart({title}, {description}, {img})}>Add Card</Button>
        </div>
    </div>
    );
}
