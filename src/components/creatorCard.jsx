import { Link } from "react-router-dom";

export default function Creator({ name, image, description, id }) {
    return (
        <>
            <div class="container grid" style={{alignItems: "stretch"}}>
                <article>
                    <header>
                        <hgroup>
                            <h2>{name}</h2>
                            <h3>{description}</h3>
                        </hgroup>
                    </header>
                    <img 
                    src={image} 
                    style={{ maxHeight: "100%", maxWidth: "100%", objectFit: "contain" }} />
                    <footer>
                        <h4><Link to={`creators/${id}`}>View Creator Page</Link></h4>
                    </footer>
                </article>
            </div>
        </>
    )
}