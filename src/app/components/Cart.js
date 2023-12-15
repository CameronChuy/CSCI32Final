import Item from "./Item";

export default function Cart( {itemAttributes} ) {
    
    return(
        <form className="m-6 p-2 rounded-lg bg-orange-200">
            <Item title="Purple gemstone and triangle earrings" description="Triangular metal charm with gemstone beads dangling between" img="https://i.etsystatic.com/22910192/r/il/a313ef/5544280448/il_1588xN.5544280448_d16d.jpg"/>
        </form>
    )
}

