const menuItems = [
    {
        title: "Home",
        href: "/"
    },
    {
        title: "About",
        href: "/about"
    },
    {
        title: "Jewelry",
        href: "/jewelry"
    },
    {
        title: "Checkout",
        href: "/checkout"
    },
    {
        title: "Policies",
        href: "/policies"
    }
]

export default function Navbar() {
    return (
    <div className ="flex justify-between align-center gap-2 m-4">
        <div>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" class="h-10">
  <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007zM8.625 10.5a.375.375 0 11-.75 0 .375.375 0 01.75 0zm7.5 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z" />
</svg>
        </div>
        <div className="flex gap-2 justify-end">
            {menuItems.map((item, index) => (
                <a key={index} href= {item.href} className="px-4 py-2 bg-orange-200 rounded-md shadow font-serif" >{item.title}</a>
            ))}
        </div>
        
    </div>
    )
}