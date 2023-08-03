// Home page, renders all creators in database

import { useState, useEffect } from "react"
import { supabase } from "../client"
import Creator from "../components/creatorCard"

export default function ShowCreators() {
    const [creators, setCreators] = useState([])

    useEffect(() => {
        getCreators()
    }, [])

    const [isMobile, setIsMobile] = useState(window.innerWidth < 1200);

{/* Performs similarly to componentDidMount in classes */}
useEffect(() => {
    window.addEventListener("resize", () => {
        const ismobile = window.innerWidth < 1000;
        if (ismobile !== isMobile) setIsMobile(ismobile);
    }, false);
}, [isMobile]);

    async function getCreators() {
        const { data } = await supabase
            .from("creators2")
            .select()
            .order("id", { ascending: false })
        setCreators(data)
    }

    if (!creators || creators.length === 0) {
        return <h1 style={{textAlign: "center"}}>No creators. <a href="/newcreator">Would you like to add one?</a></h1>
    }

    return (

        <div className={`container ${isMobile ? "" : "grid"}`} style={{ alignItems: "stretch", gridTemplateColumns: "repeat(2, 1fr)" }}>
            {creators.map((creator) => (
                <Creator
                    key={creator.id}
                    id={creator.id}
                    name={creator.name}
                    image={creator.imageURL}
                    description={creator.description}
                    youtube={creator.youtubeURL}
                    twitter={creator.twitterURL}
                    instagram={creator.instagramURL}
                />
            ))}
        </div>

    )
}
