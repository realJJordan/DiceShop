const WarhammerSlide = () => {
    const layoutProps: ISlideProps = {
        imgUrl: "https://www.games-workshop.com/resources/touts/2023-04-22/GW-Seraphon-Range-2023-04-22-Portal-All-bm_.jpg",
        alt: "Image depicts figurines from warhammer age of sigmar franchise",
        title: "Warhammer Age of Sigmar",
        desc: "Odkryj świat Warhammer Age of Sigmar i wejdź do krainy niezliczonych legend.\n Zbierz swoją armię i wyrusz na podbój.",
        targetUrl: "https://gprivate.com/6531u"
    }

    return <Slide {...layoutProps} />
}

const CthuluSlide = () => {
    const layoutProps: ISlideProps = {
        imgUrl: "https://bloody-disgusting.com/wp-content/uploads/2018/10/review-call-of-cthulhu-02.jpg",
        alt: "Image depicts call of cthulu promotional image",
        title: "Call of Cthulu",
        desc: "Czeka na Ciebie świat Lovecraftowskiego horroru, gdzie koszmarne istoty i starożytne bóstwa czekają na swoją szansę.",
        targetUrl: "https://gprivate.com/6531v"
    }

    return <Slide {...layoutProps} />
}

const Slide = (props: ISlideProps) => (
    <div className="slide">
        <img
            alt={props.alt}
            src={props.imgUrl} />
        <div className="infoContainer">
            <h3>{props.title}</h3>
            <span>{props.desc}</span>
            <a className="moreInfo" href={props.targetUrl}>Dowiedz się więcej</a>
        </div>
    </div>

)

export { WarhammerSlide, CthuluSlide }

interface ISlideProps {
    imgUrl: string,
    alt: string,
    title: string,
    desc: string,
    targetUrl: string
}