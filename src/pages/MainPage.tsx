import { Pagination } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from "swiper/react";
import { CthuluSlide, WarhammerSlide } from "../components/slides";
import "../styles/swiper.scss";

const slides = [
    <WarhammerSlide />,
    <CthuluSlide />
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
    </div>
)

export default MainPage

interface IMainPageLayoutProps {
    slides: any[]
}