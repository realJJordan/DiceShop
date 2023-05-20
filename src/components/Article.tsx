interface IArticle {
    imageUrl: string,
    alt: string,
    title: string,
    desc: string
}

const Article = (props: IArticle) => {

    const layoutProps = {
        ...props
    }
    return <ArticleLayout {...layoutProps} />
}

const ArticleLayout = (props: IArticle) => (
    <div className="article">
        <img
            src={props.imageUrl}
            alt={props.alt}
        />
        <b className="title">{props.title}</b>
        <span className="desc">{props.desc}</span>
    </div>
)

export default Article
export { IArticle }