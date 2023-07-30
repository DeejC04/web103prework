export default function Creator({ name, image, description }) {
    return (
        <>
            <article class="grid container">
                <hgroup>
                    <h2>{name}</h2>
                    <h3>{description}</h3>
                </hgroup>
                <img src={image}></img>
            </article>
        </>
    )
}