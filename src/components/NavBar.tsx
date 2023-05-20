const NavBar = () => {

    return <NavBarLayout />
}

const NavBarLayout = () => (
    <div>
        <header>
            <a href="#" className="hamburger">GiHamburgerMenu</a>
            <a href="#" className="search">BiSearch</a>
            <div className="logo"><a href="#"><img src="../../public/logo.webp" alt="Logo sklepu" /></a></div>
            <a href="#" className="user-account">FaUserCircle</a>
            <a href="#" className="cart">FaShoppingCart</a>
        </header>
        <nav>
                <ul>
                    <li><a href="#">Strona główna</a></li>
                    <li><a href="#">O nas</a>                    </li>
                    <li><a href="#">Oferta</a></li>
                    <li><a href="#">Koszyk</a></li>
                    <li><a href="#">Promocje</a></li>
                    <li><a href="#">Regulaminy</a></li>
                </ul>
            </nav>
    </div>
)

export default NavBar