
export default function Button({ children, onClick, type="button"}) {
    return <button className="bg-slate-50 px-4 py-2 mx-2 mt-2 rounded-md hover:bg-orange-400 active:bg-orange-500 transition-all" type={ type } onClick= { onClick } >
        { children }
    </button>
}