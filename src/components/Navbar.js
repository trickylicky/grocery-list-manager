import { Link , useResolvedPath ,useMatch } from "react-router-dom";

const  Navbar = () => {
    return(
        <nav className="nav">
            <Link to="/" className="site-title"><span className="logo-tg">TG </span> add</Link>
            <ul>
                <li><CustomLink to="/">home</CustomLink></li>
                <li><CustomLink to="/about">about</CustomLink></li>
                <li><CustomLink to="/productS">Products</CustomLink></li>
            </ul>
        </nav>
    )
}
function CustomLink({to, children, ...props }){
    const resolvedPath= useResolvedPath(to)
    const isActive = useMatch( {path : resolvedPath.pathname,end:true})
    return(
        <li className={isActive ?"active" : ""} >
            <Link to={to} {...props}>
                {children}
            </Link>

        </li>
    )
}

export default Navbar;