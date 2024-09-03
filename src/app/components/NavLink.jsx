    import Link from "next/link"
    import './ProjectSection.css'
    
    
    const NavLink = ({href, title}) => {
        return (
            <Link href={href} className="navlinks block py-2 pl-3 pr-4 text-[#ADB7BE] sm:text-xl rounded md:p-0 hover:text-white">
            {title}
            </Link>
        )
    }

    export default NavLink; 