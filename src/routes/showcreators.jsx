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

    const listItems = creators.map(creator =>
        <li 
        key={creator.id} 
        style={{ listStyleType: "none" }}
        > 
        <Creator class
            id={creator.id}
            image={creator.imageURL}
            name={creator.name}
            description={creator.description}
        />
        </li>
    );
    return (
        
       <div class="grid" style={{ gridTemplateColumns: "1fr 1fr", justifyItems: "stretch", alignItems: "stretch"}}>{listItems}</div>
    
    );
}
