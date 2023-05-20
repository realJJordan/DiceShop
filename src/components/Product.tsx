type TCategory = "Gry planszowe i towarzyskie" | "Karcianki kolekcjonerskie" | "Gry figurkowe i bitewne" | "Akcesoria"
type TSubCategory = "Gry planszowe dla dzieci" | "Dodatki do gier" | "Rodzinne gry planszowe" | "Gry imprezowe i towarzyskie" | "Przygodowe gry planszowe" | "Strategiczne gry planszowe" | "Gry planszowe dla dorosłych"
type TAgeRating = 8 | 12 | 16 | 18
type TPlayerCount = 1 | 2 | 3 | 4
type TTime = "15min" | "30min" | "1h" | "4h"

interface IProductProps {
    title: string,
    desc: string,
    imageUrl: string,
    alt: string,
    extended: boolean,
    price: string,
    category: TCategory,
    subCategory: TSubCategory,
    ageRating: TAgeRating
}

const Product = (props: IProductProps) => {

    const layoutProps: IProductProps = {
        ...props
    }

    return <ProductLayout {...layoutProps} />
}

const ProductLayout = (props: IProductProps) => (
    <div className={`product${props.extended ? " extended" : ""}`}>
        <img
            width={200}
            src={props.imageUrl}
            alt={props.alt} />
        {props.extended ?
            <>
                <div className="extendedInfo">
                    <span className="spacer" />
                    <span className="category">{props.category} / {props.subCategory}</span>
                    <span className="spacer" />
                    <div>
                        <b>{props.title}</b>
                        <span> | od {props.ageRating} lat</span>
                    </div>
                    <span className="spacer" />
                    <span className="desc">{props.desc}</span>
                    <span className="spacer" />
                    <span className="price">{props.price} zł</span>
                    <span className="spacer" />
                </div>
            </>
            :
            <>
                <span className="category">{props.category} / {props.subCategory}</span>
                <b>{props.title}</b>
                <span className="price">{props.price} zł</span>
            </>
        }
    </div>
)

export default Product
export { IProductProps }

