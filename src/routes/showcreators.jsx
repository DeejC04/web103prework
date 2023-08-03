import { useState, useEffect } from "react";
import { supabase } from "../client";
import Creator from "../components/creatorCard";

export default function ShowCreators() {

    const [creators, setCreators] = useState([]);

    useEffect(() => {
        getCreators();
    }, []);

    async function getCreators() {
        const { data } = await supabase.from("creators2").select().order('id', {ascending: false});
        setCreators(data);
    }

    console.log(creators)

    if (!creators || creators.length === 0) {
        return <p aria-busy="true">Loading...</p>;
    }

    return (

        <div className="container grid" style={{ alignItems: "stretch", gridTemplateColumns: "repeat(2, 1fr)" }}>
            {creators.map((creator) => (
                <Creator
                    key={creator.id}
                    id={creator.id}
                    name={creator.name}
                    image={creator.imageURL}
                    description={creator.description}
                />
            ))}
        </div>

    );
}
