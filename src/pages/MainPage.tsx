import { Pagination } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from "swiper/react";
import { CthuluSlide, WarhammerSlide } from "../components/slides";
import "../styles/swiper.scss";
import "../styles/mainPage.scss";
import Product, { IProductProps } from "../components/Product";

const slides = [
    <WarhammerSlide />,
    <CthuluSlide />
]

const firstRow: IProductProps[] = [
    {
        title: "Kangurek Kao",
        desc: "Wyrusz w niesamowitą przygodę z uroczym kangurkiem Kao w tej wciągającej grze planszowej! Przeżyj emocje skoków przez malownicze krajobrazy Australii, rozwiązuj zagadki i pokonuj przeciwności losu, aby odnaleźć skradzione przedmioty.",
        imageUrl: "https://files.rebel.pl/products/100/606/_2017184/kangurek-kao-gra-planszowa-pudelko-3d-1200x900-ffffff.jpg",
        alt: "Image depicts kangurek kao",
        extended: false,
        price: "239,99",
        category: "Gry figurkowe i bitewne",
        subCategory: "Przygodowe gry planszowe",
        ageRating: 12
    },
    {
        title: "Kangurek Kao",
        desc: "Wyrusz w niesamowitą przygodę z uroczym kangurkiem Kao w tej wciągającej grze planszowej! Przeżyj emocje skoków przez malownicze krajobrazy Australii, rozwiązuj zagadki i pokonuj przeciwności losu, aby odnaleźć skradzione przedmioty.",
        imageUrl: "https://files.rebel.pl/products/100/606/_2017184/kangurek-kao-gra-planszowa-pudelko-3d-1200x900-ffffff.jpg",
        alt: "Image depicts kangurek kao",
        extended: true,
        price: "239,99",
        category: "Gry figurkowe i bitewne",
        subCategory: "Przygodowe gry planszowe",
        ageRating: 12
    },
    {
        title: "Kangurek Kao",
        desc: "Wyrusz w niesamowitą przygodę z uroczym kangurkiem Kao w tej wciągającej grze planszowej! Przeżyj emocje skoków przez malownicze krajobrazy Australii, rozwiązuj zagadki i pokonuj przeciwności losu, aby odnaleźć skradzione przedmioty.",
        imageUrl: "https://files.rebel.pl/products/100/606/_2017184/kangurek-kao-gra-planszowa-pudelko-3d-1200x900-ffffff.jpg",
        alt: "Image depicts kangurek kao",
        extended: false,
        price: "239,99",
        category: "Gry figurkowe i bitewne",
        subCategory: "Przygodowe gry planszowe",
        ageRating: 12
    },

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
            {firstRow.map((product, index) => <Product key={`product_${index}`} {...product} />)}
        </div>

    </div>
)

export default MainPage

interface IMainPageLayoutProps {
    slides: any[]
}