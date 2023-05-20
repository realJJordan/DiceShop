import FacebookIcon from "../icons/FacebookIcon"

const customerServiceLinks: ILinks[] = [
    {
        label: "Koszty dostawy",
        link: "wip"
    },
    {
        label: "Kontakt",
        link: "wip"
    },
    {
        label: "Reklamacje i zwrotu",
        link: "wip"
    },
    {
        label: "Czas realizacji zamówień",
        link: "wip"
    },
    {
        label: "Sposoby płatności",
        link: "wip"
    },
    {
        label: "FAQ",
        link: "wip"
    }
]

const diceShopLinks: ILinks[] = [
    {
        label: "O nas",
        link: "wip"
    },
    {
        label: "Opinie Klientów",
        link: "wip"
    },
    {
        label: "Newsletter",
        link: "wip"
    },
    {
        label: "Polityka prywatności",
        link: "wip"
    },
    {
        label: "Polityka cookies",
        link: "wip"
    },
    {
        label: "Regulamin",
        link: "wip"
    }
]

const Footer = () => {

    const layoutProps: IFooterLayoutProps = {
        customerServiceLinks,
        diceShopLinks
    }

    return <FooterLayout {...layoutProps} />
}

const FooterLayout = (props: IFooterLayoutProps) => (
    <div className="footer">
        <div className="section">
            <b className="title">Obsługa Klienta</b>
            <ul className="linksList">
                {props.customerServiceLinks.map(link => (
                    <li className="linkRow">
                        <a className="link" href={link.link}>{link.label}</a>
                    </li>
                ))}
            </ul>
        </div>
        <div className="section">
            <b className="title">DiceShop</b>
            <ul className="linksList">
                {props.customerServiceLinks.map(link => (
                    <li className="linkRow">
                        <a className="link" href={link.link}>{link.label}</a>
                    </li>
                ))}
            </ul>
        </div>

        <div className="section">
            <b>Parlez vous francais</b>
            <FacebookIcon />
        </div>
        <div className="section">
            <b>Obserwuj nas</b>
        </div>
    </div>
)

export default Footer

interface ILinks {
    label: string,
    link: string
}

interface IFooterLayoutProps {
    customerServiceLinks: ILinks[],
    diceShopLinks: ILinks[]
}