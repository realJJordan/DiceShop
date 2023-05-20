import FacebookIcon from "../icons/FacebookIcon"
import InstagramIcon from "../icons/InstagramIcon"
import TwitterIcon from "../icons/TwitterIcon"
import YoutubeIcon from "../icons/YoutubeIcon"

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

const brandLinks: ILinks[] = [
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

const languages: ILanguage[] = [
    {
        src: "https://flagcdn.com/pl.svg",
        height: 20,
        onClick: () => console.log("WIP")
    }
]

const socialLinks: ISocial[] = [
    {
        icon: <FacebookIcon />,
        link: "https://www.facebook.com/diceshoppl"
    },
    {
        icon: <TwitterIcon />,
        link: "https://twitter.com/pl_diceshop"
    },
    {
        icon: <YoutubeIcon />,
        link: "https://www.youtube.com/user/diceshop_user"
    },
    {
        icon: <InstagramIcon />,
        link: "https://www.instagram.com/diceshop_pl"
    }
]

const Footer = () => {

    const layoutProps: IFooterLayoutProps = {
        customerServiceLinks,
        brandLinks,
        socialLinks,
        languages
    }

    return <FooterLayout {...layoutProps} />
}

const FooterLayout = (props: IFooterLayoutProps) => (
    <div className="footer">
        <div className="section">
            <b className="title">Obsługa Klienta</b>
            <ul className="linksList">
                {props.customerServiceLinks.map((link, index) => (
                    <li key={`customerServiceLink_${index}`} className="linkRow">
                        <a className="link" href={link.link}>{link.label}</a>
                    </li>
                ))}
            </ul>
        </div>
        <div className="section">
            <b className="title">DiceShop</b>
            <ul className="linksList">
                {props.brandLinks.map((link, index) => (
                    <li key={`brandLink_${index}`} className="linkRow">
                        <a className="link" href={link.link}>{link.label}</a>
                    </li>
                ))}
            </ul>
        </div>

        <div className="section">
            <b>Parlez vous francais?</b>
            <div className="socialContainer">
                {props.languages.map((language, index) => (
                    <img
                        key={`language_${index}`}
                        onClick={language.onClick}
                        src={language.src}
                        height={language.height}
                    />
                ))}
            </div>
        </div>
        <div className="section">
            <b>Obserwuj nas!</b>
            <div className="socialContainer">
                {props.socialLinks.map((link, index) => (
                    <a key={`socialLink_${index}`} className="socialLink" href={link.link}>{link.icon}</a>
                ))}
            </div>
        </div>
    </div>
)

export default Footer

interface ILinks {
    label: string,
    link: string
}

interface ISocial {
    icon: JSX.Element,
    link: string
}

interface ILanguage {
    src: string,
    height: number,
    onClick: () => void
}

interface IFooterLayoutProps {
    customerServiceLinks: ILinks[],
    brandLinks: ILinks[],
    socialLinks: ISocial[],
    languages: ILanguage[]
}