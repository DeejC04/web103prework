import { useState, useEffect } from "react";
import { supabase } from "../client";
import Creator from "../components/creatorCard";

export default function ShowCreators() {

    const [creators, setCreators] = useState([]);

    useEffect(() => {
        getCreators();
    }, []);

    async function getCreators() {
        const { data } = await supabase.from("creators").select();
        setCreators(data);
    }

    return (

        <div class="container grid" style={{ alignItems: "stretch", gridTemplateColumns: "repeat(2, 1fr)" }}>
            {creators.map((creator) => (
                <Creator
                    id={creator.id}
                    name={creator.name}
                    image={creator.imageURL}
                    description={creator.description}
                />
            ))}
        </div>

    );
}
