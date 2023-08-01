import { Outlet } from "react-router-dom";

export default function Root() {
    return (
        <>
            <head>
                <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/@picocss/pico@1/css/pico.min.css" />
                <meta name="description" content="This is my website description" />
                <meta name="keywords" content="react, javascript, web development" />
            </head>
            <header>
                <nav className="container-fluid">
                    <ul>
                        <li><a href="/" className="secondary" style={{textDecoration: "none"}}><strong>Creatorverse</strong></a></li>
                    </ul>
                    <ul>
                        <li><a href="/newcreator" role="button" className="outline">New Creator</a></li>
                        <li><a href="/" role="button" className="outline">View All Creators</a></li>
                    </ul>
                </nav>
            </header>
            <main className="container">
                <Outlet />
            </main>
        </>
    )
}