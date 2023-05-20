import { Pagination } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from "swiper/react";
import { CthuluSlide, WarhammerSlide } from "../components/slides";
import "../styles/swiper.scss";
import "../styles/mainPage.scss";
import Product, { IProductProps } from "../components/Product";
import Article, { IArticle } from "../components/Article";

const slides = [
    <WarhammerSlide />,
    <CthuluSlide />
]

const firstRow: IProductProps[] = [
    {
        title: "My Little Pony",
        desc: "",
        imageUrl: "https://files.rebel.pl/products/100/302/_2016888/mlpgrakarciana-1200x900-ffffff.jpg",
        alt: "Image depicts My little pony the game",
        extended: false,
        price: "139,99",
        category: "Gry figurkowe i bitewne",
        subCategory: "Strategiczne gry planszowe",
        ageRating: 8
    },
    {
        title: "Kangurek Kao",
        desc: "Wyrusz w niesamowitą przygodę z uroczym kangurkiem Kao w tej wciągającej grze planszowej! Przeżyj emocje skoków przez malownicze krajobrazy Australii, rozwiązuj zagadki i pokonuj przeciwności losu, aby odnaleźć skradzione przedmioty.",
        imageUrl: "https://files.rebel.pl/products/100/606/_2017184/kangurek-kao-gra-planszowa-pudelko-3d-1200x900-ffffff.jpg",
        alt: "Image depicts kangurek kao",
        extended: true,
        price: "239,99",
        category: "Gry planszowe i towarzyskie",
        subCategory: "Przygodowe gry planszowe",
        ageRating: 12
    },
    {
        title: "Wsiąść do pociągu",
        desc: "",
        imageUrl: "https://files.rebel.pl/products/100/606/_2001639/rebel-gra-familijna-wsiasc-do-pociagu-europa-rocznica-box3d-1200x900-ffffff.png",
        alt: "Image depicts board game about trains",
        extended: false,
        price: "129,99",
        category: "Gry planszowe i towarzyskie",
        subCategory: "Gry imprezowe i towarzyskie",
        ageRating: 12
    },

]

const secondRow: IProductProps[] = [
    {
        title: "Pokemon TCG",
        desc: "",
        imageUrl: "https://files.rebel.pl/products/1065/5759/_2012719/183-85108_Sword%20Shield--Silver%20Tempest%20Build%20and%20Battle%20Stadium%20-%20Outer%20Sleeve_EN-3099x2329-7d870fb-1200x900-ffffff.png",
        alt: "Image depicts Pokemon trading game",
        extended: false,
        price: "279,99",
        category: "Karcianki kolekcjonerskie",
        subCategory: "Dodatki do gier",
        ageRating: 8
    },
    {
        title: "Magic the Gathering: The Lord of the Rings",
        desc: "Wyrusz w niesamowitą przygodę z uroczym kangurkiem Kao w tej wciągającej grze planszowej! Przeżyj emocje skoków przez malownicze krajobrazy Australii, rozwiązuj zagadki i pokonuj przeciwności losu, aby odnaleźć skradzione przedmioty.",
        imageUrl: "https://files.rebel.pl/products/1065/5759/_2016002/MTGLTR_EN_BstrDspBx_Drft_01_01-1200x900-ffffff.png",
        alt: "Image depicts Magic the gathering trading game",
        extended: true,
        price: "239,99",
        category: "Karcianki kolekcjonerskie",
        subCategory: "Dodatki do gier",
        ageRating: 18
    },
    {
        title: "Flesh & Blood",
        desc: "",
        imageUrl: "https://files.rebel.pl/products/1065/5759/_2009855/upr_mock_booster_box_Fx5.width-10000-1200x900-ffffff.png",
        alt: "Image depicts Flesh & Blood trading game",
        extended: false,
        price: "129,99",
        category: "Gry planszowe i towarzyskie",
        subCategory: "Gry imprezowe i towarzyskie",
        ageRating: 12
    },

]

const thirdRow: IProductProps[] = [
    {
        title: "Warhammer 2ed- Księga Zbawienia",
        desc: "",
        imageUrl: "https://files.rebel.pl/products/102/22/_108530/podrecznik-copernicus-corp-warhammer-frp-Ksiega-Zbawienia-okladka-1200x900-ffffff.png",
        alt: "image contains something",
        extended: false,
        price: "179,99",
        category: "Gry planszowe i towarzyskie",
        subCategory: "Gry planszowe dla dorosłych",
        ageRating: 18
    },
    {
        title: "Warhammer 4ed - Zestaw Startowy",
        desc: "image contains something",
        imageUrl: "https://files.rebel.pl/products/1065/5759/_2001172/Box-lid-cover_pl-1200x900-ffffff.png",
        alt: "",
        extended: false,
        price: "129,99",
        category: "Gry planszowe i towarzyskie",
        subCategory: "Gry planszowe dla dorosłych",
        ageRating: 18
    },
    {
        title: "Warhammer 2ed- Poradnik Staroświatowca",
        desc: "",
        imageUrl: "https://files.rebel.pl/products/102/22/_109968/Poradnik-Staroswiatowca-OKLADKA-1200x900-ffffff.png",
        alt: "image contains something",
        extended: false,
        price: "129,99",
        category: "Gry planszowe i towarzyskie",
        subCategory: "Gry planszowe dla dorosłych",
        ageRating: 18
    },

]

const articles: IArticle[] = [
    {
        imageUrl: "https://th.bing.com/th/id/R.c90965d57b77c304773c3228a0405b42?rik=ReD7OAcu5XYwKQ&pid=ImgRaw&r=0",
        alt: "image contains something",
        title: "Zapowiedziano Warhammer Old World",
        desc: "Co to oznacza dla fanów Age of Sigmar..."
    },
    {
        imageUrl: "https://www.nme.com/wp-content/uploads/2020/10/Among-Us-2.jpg",
        alt: "image contains something",
        title: "AMOGUS?!",
        desc: "Plotki o nowej grze planszowej ze znanego uniwersum"
    },
    {
        imageUrl: "https://th.bing.com/th/id/R.08866babab6f3f1d9e3e0777bc5e235f?rik=fzL6l8q4JPiZGw&riu=http%3a%2f%2fwww.tribality.com%2fwp-content%2fuploads%2f2014%2f10%2fcover-dnd-e1501645849868.jpg&ehk=Y6s8TQUpVhUdqAtrS8fPi%2fTjYM2mZACsQVlMFssyiIQ%3d&risl=&pid=ImgRaw&r=0",
        alt: "image contains something",
        title: "D&D znowu w Opałach",
        desc: "Protesty w związku z OGL 2.0 rosną na sile"
    }
]

const MainPage = () => {

    const layoutProps: IMainPageLayoutProps = {
        slides
    }
    return <MainPageLayout {...layoutProps} />
}

const MainPageLayout = (props: IMainPageLayoutProps) => (
    <div className="mainPage">
        <Swiper pagination={{
            dynamicBullets: true,
        }}
            modules={[Pagination]}
            className="mySwiper">
            {props.slides.map((slide, index) => (
                <SwiperSlide key={`slide_${index}`}>{slide}</SwiperSlide>
            ))}
        </Swiper>
        <h2>Nowości!</h2>
        <div className="productContainer">
            {firstRow.map((product, index) => <Product key={`product_${index}`} {...product} />)}
        </div>
        <div className="productContainer">
            {secondRow.map((product, index) => <Product key={`product_${index}`} {...product} />)}
        </div>
        <h2>Dowiedz się więcej!</h2>
        <div className="articleContainer">
            {articles.map((article, index) => <Article key={`article_${index}`} {...article} />)}
        </div>

        <h2>Krew dla Boga Krwi</h2>
        <div className="productContainer">
            {thirdRow.map((product, index) => <Product key={`product_${index}`} {...product} />)}
        </div>
    </div>
)

export default MainPage

interface IMainPageLayoutProps {
    slides: any[]
}