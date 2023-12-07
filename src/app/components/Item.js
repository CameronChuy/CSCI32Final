

export default function Item({
    title="Title",
    img="Null",
    description="Description"
}) {
    return( 
        <div>
            <div>
                <h1>{title}</h1>
                <img className="max-w-full" src= {img}/>
                <p className="text-gray-900">{description}</p>
            </div>
        </div>
    )
}