import { useParams } from "react-router-dom"
import { useState, useEffect } from "react"
import { supabase } from "../client"

export default function EditCreator() {
  const { id } = useParams()
  const [name, setName] = useState("")
  const [imageURL, setImageURL] = useState("")
  const [description, setDescription] = useState("")

  useEffect(() => {
    async function fetchCreatorData() {
      const { data, error } = await supabase
        .from("creators2")
        .select()
        .eq("id", id)
        .single()

      if (error) {
        console.log(error)
      } else {
        setName(data.name)
        setImageURL(data.imageURL)
        setDescription(data.description)
      }
    }

    fetchCreatorData() 
  }, [id])

  const handleSubmit = async (e) => {
    e.preventDefault()

    const { data, error } = await supabase
      .from("creators2")
      .update({ name, imageURL, description })
      .eq("id", id)
      .select()

    if (error) {
      console.log(error)
    } else {
      console.log(`Updated creator: ${name}`)
      alert(`Submitted ${name}`)
    }
  }

  return (
    <>
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
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />
          </label>
          <button type="submit">Submit form</button>
        </form>
      </div>
    </>
  )
}
