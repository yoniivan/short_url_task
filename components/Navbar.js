import Link from 'next/link';
//import '../css/style.css'

const Navbar = () => {
    return <nav className="navbar">
        <Link href="/">
            <a className="navbar-brand">Shorten APP</a>
        </Link>
    </nav>
}

export default Navbar;