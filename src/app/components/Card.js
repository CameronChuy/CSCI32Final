

const productList = [
    {
        name : "Garnet + Flower Necklace",
        img : "https://i.etsystatic.com/22910192/r/il/4ccde1/3879792914/il_1588xN.3879792914_8kte.jpg",
        description : "Polished red garnet stone pieces and purple flower suspended in resin, with black necklace strap. The resin background is transparent and framed with a gold colored rectangular charm!"
    },
    {
        name : "Handmade Blue Flower Resin Necklace",
        img : "https://i.etsystatic.com/22910192/r/il/ea6f7c/3879792148/il_1588xN.3879792148_tnlz.jpg",
        description : "Two blue flowers suspended in resin, with pale blue necklace strap. The resin background is transparent and framed with a silver colored square charm!"
    },
    {
        name : "Yellow Resin Flower Necklace Pendant",
        img : "https://i.etsystatic.com/22910192/r/il/8ad545/5202614098/il_1588xN.5202614098_djbn.jpg",
        description : "Handmade necklace with real yellow flowers suspended in resin. Comes with whiter starter strap."
    }

]

export default function Card() {

    return (
    <div class="border-solid border-8 border-amber-300 p-6 m-2 w-64 bg-gray-100 rounded-lg shadow-xl">
        {productList.map((product) => (
            <div>
                <h1>{product.name}</h1>
                <img class="max-w-full" src= {product.img}/>
                <p class="text-gray-900">{product.description}</p>
            </div>
        ))}
    </div>
    );
}