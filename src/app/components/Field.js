
export default function Field({ children }) {
    // render children inside a div with a flex-col layout 
    return <div className="flex flex-col mb-2 mx-2" > { children } </div>
  }