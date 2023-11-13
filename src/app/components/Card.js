
export default function Card({
    title="Title",
    img="Null",
    description="Description"
}) {


    return (
    <div className="border-solid border-8 border-amber-300 p-6 m-2 w-64 bg-gray-100 rounded-lg shadow-xl">
        <div>
            <h1>{title}</h1>
            <img className="max-w-full" src= {img}/>
            <p className="text-gray-900">{description}</p>
        </div>
    </div>
    );
}