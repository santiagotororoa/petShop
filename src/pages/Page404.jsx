import image from "../assets/img/doguito404.svg";
import "../assets/css/404.css"

const Page404 = () => {
    return (
        <main className="container flex felx--center felx-column">
            <img className="dog-image" src={image} alt="Doguito"/>
            <p className="notfound-text">Esta pagina no existe</p>
        </main>
    )
}