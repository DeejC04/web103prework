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
                <nav class="container-fluid">
                    <ul>
                        <li><strong>Creatorverse</strong></li>
                    </ul>
                    <ul>
                        <li><a href="/newcreator" role="button" class="outline">New Creator</a></li>
                        <li><a href="/" role="button" class="outline">View All Creators</a></li>
                    </ul>
                </nav>
            </header>
            <main class="container">
                <Outlet />
            </main>
        </>
    )
}