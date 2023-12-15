

export default function Item({
    title="Title",
    img="Null",
    description="Description"
}) {
    return( 
        <div>
            <div className="flex " >
                <img className="w-1/12" src= {img}/>
                <div className="flex flex-col justify-evenly m-2" >
                    <h1 className="font-bold" >{title}</h1>
                    <p className="text-gray-900">{description}</p>
                </div>
            </div>
        </div>
    )
}