const NavBar = () => {

    return <NavBarLayout />
}

const NavBarLayout = () => (
    <div>
        <header>
            <a href="#" className="hamburger">GiHamburgerMenu</a>
            <a href="#" className="search">BiSearch</a>
            <a href="#" className="logo"><img src="../../public/logo.webp" alt="Logo sklepu" /></a>
            <a href="#" className="user-account">FaUserCircle</a>
            <a href="#" className="cart">FaShoppingCart</a>
        </header>
        <nav>
            <ul>
                <li><a href="#">Strona główna</a></li>
                <li>
                    <a href="#">O nas</a>
                    <ul>
                        <li><a href="#">O firmie</a></li>
                        <li><a href="#">Nasza kadra</a></li>
                        <li><a href="#">Pozwolenia</a></li>
                    </ul>
                </li>
                <li><a href="#">Oferta</a></li>
                <li><a href="#">Promocje</a></li>
                <li><a href="#">Producenci</a></li>
            </ul>
        </nav>
    </div>
)

export default NavBar