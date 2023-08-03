import { Link } from "react-router-dom"
import { faInstagram, faTwitter, faYoutube } from "@fortawesome/free-brands-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

export default function Creator({ name, image, description, id, youtube, twitter, instagram }) {
    if (!id) {
        return (
            <div aria-busy="true">Loading...</div>
        )
    }

    // if (youtube) {
    //     return <a href={youtube}><FontAwesomeIcon icon={faYoutube} size="3x" /></a>
    // }
    return (
        <>
            <div className="container grid">
                <article style={{ display: "flex", flexDirection: "column" }}>
                    <header>
                        <hgroup>
                            <h2>{name}</h2>
                            <h3>{description}</h3>
                        </hgroup>
                    </header>
                    <img
                        src={image}
                        style={{ maxHeight: "100%", maxWidth: "100%", objectFit: "contain" }} />
                    <footer style={{ marginTop: "auto" }}>
                        <h4><Link to={`creators/${id}`}>View Creator Page</Link></h4>
                        {youtube && (
                            <a href={youtube}>
                                <FontAwesomeIcon icon={faYoutube} size="3x" />
                            </a>
                        )}
                        {twitter && (
                            <a href={twitter}>
                                <FontAwesomeIcon icon={faTwitter} size="3x" />
                            </a>
                        )}
                        {instagram && (
                            <a href={instagram}>
                                <FontAwesomeIcon icon={faInstagram} size="3x" />
                            </a>
                        )}
                    </footer>
                </article>
            </div>
        </>
    )
}