import CartIcon from "../icons/CartIcon"
import UserIcon from "../icons/UserIcon"

const NavBar = () => {

    return <NavBarLayout />
}

const NavBarLayout = () => (
    <div>
        <header>
            <a href="#" className="hamburger">GiHamburgerMenu</a>
            <a href="#" className="search-mobile">BiSearch</a>
            <div className="logo"><a href="#"><img src="logo.webp" alt="Logo sklepu" /></a></div>
            <nav>
                <ul>
                    <li><a href="#">Strona główna</a></li>
                    <li><a href="#">Kontakt</a></li>
                    <li><a href="#">Oferta</a></li>
                    <li><a href="#">Koszyk</a></li>
                    <li><a href="#">Promocje</a></li>
                    <li><a href="#">Regulaminy</a></li>
                </ul>
            </nav>
            <input className="search" type="text" placeholder="Szukaj..."/>
            <div className="user-cart">
                <a href="#" className="user"><UserIcon /></a>
                <a href="#" className="cart"><CartIcon /></a>
            </div>
        </header>
    </div>
)

export default NavBar