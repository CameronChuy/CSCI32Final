
export default function Label({ label, htmlFor }) {
    return <label className="text-lg font-bold" htmlFor= { htmlFor }> { label } </label> 
}