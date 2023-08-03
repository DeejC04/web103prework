import { Link } from "react-router-dom"

export default function Creator({ name, image, description, id }) {
    if (!id) {
        return(
            <div aria-busy="true">Loading...</div>
        )
    }
    return (
        <>
            <div className="container grid">
                <article style={{display: "flex", flexDirection: "column"}}>
                    <header>
                        <hgroup>
                            <h2>{name}</h2>
                            <h3>{description}</h3>
                        </hgroup>
                    </header>
                    <img 
                    src={image} 
                    style={{ maxHeight: "100%", maxWidth: "100%", objectFit: "contain" }} />
                    <footer style={{marginTop: "auto"}}>
                        <h4><Link to={`creators/${id}`}>View Creator Page</Link></h4>
                    </footer>
                </article>
            </div>
        </>
    )
}