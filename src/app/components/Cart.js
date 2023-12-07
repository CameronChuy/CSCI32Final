import Item from "./Item";


export default function Cart() {
    return(
        <form className="m-6 p-2 rounded-lg bg-orange-200">
            <Item />
            <Item />
        </form>
    )
}