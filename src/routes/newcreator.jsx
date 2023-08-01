import { useState, useEffect } from "react";
import { supabase } from "../client";

export default function NewCreator() {
    const [name, setName] = useState('');
    const [imageURL, setImageURL] = useState('');
    const [description, setDescription] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault()
        if (!name) {
            alert("Please enter a name")
            return
        }

        const { data, error } = await supabase
            .from("creators")
            .insert([{ name, imageURL, description }])

        if (error) {
            console.log(error)
        } else {
            console.log(`Inserted ${name} and ${imageURL} into table.`)
            alert(`Submitted ${name}`)
        }

    }
    return (
        <div className="container">
            <form onSubmit={handleSubmit}>
                <label>
                    Creator Name:
                    <input
                        name="creatorName"
                        type="text"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                    />
                </label>
                <label>
                    Image URL
                    <input
                        name="creatorImage"
                        type="text"
                        value={imageURL}
                        onChange={(e) => setImageURL(e.target.value)}
                    />
                </label>
                <label>
                    Description
                    <textarea
                        name="creatorDescription"
                        type="text"
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                    />
                </label>
                <button type="submit">Submit form</button>
            </form>
        </div>
    )
}