const ErrorPage = () => {

    return <ErrorPageLayout />
}

const ErrorPageLayout = () => (
    <div>
        <h1>Coś poszło nie tak</h1>
        <span>Nasi najlepsi programiści (nieroby) pracują nad naprawą tego błędu</span>
        <br />
        <span>W międzyczasie rekomendujemy powrót na główną stronę</span>
        <br />
        <a href="/" >Powrót</a>
    </div>
)

export default ErrorPage