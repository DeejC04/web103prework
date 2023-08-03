import { useParams } from "react-router-dom"
import { useState, useEffect } from "react"
import { supabase } from "../client"


export default function EditCreator() {
  const { id } = useParams()
  const [name, setName] = useState("")
  const [imageURL, setImageURL] = useState("")
  const [description, setDescription] = useState("")
  const [youtubeURL, setYoutubeURL] = useState("")
  const [twitterURL, setTwitterURL] = useState("")
  const [instagramURL, setInstagramURL] = useState("")
  const [selectedFile, setSelectedFile] = useState(null)

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
        setYoutubeURL(data.youtubeURL)
        setTwitterURL(data.twitterURL)
        setInstagramURL(data.instagramURL)
      }
    }

    fetchCreatorData() 
  }, [id])


  const handleSubmit = async (e) => {
    e.preventDefault()

    const { data, error } = await supabase
      .from("creators2")
      .update({ name, imageURL, description, youtubeURL, twitterURL, instagramURL })
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
      <div className="container">
      <form onSubmit={handleSubmit}>
        <h2>Basic Info</h2>
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
        <h2>Social media URLs</h2>
        <label>
          YouTube URL:
          <input
            name="youtubeURL"
            type="text"
            value={youtubeURL}
            onChange={(e) => setYoutubeURL(e.target.value)}
          />
        </label>
        <label>
          Twitter URL:
          <input
            name="twitterURL"
            type="text"
            value={twitterURL}
            onChange={(e) => setTwitterURL(e.target.value)}
          />
        </label>
        <label>
          Instagram URL:
          <input
            name="instagramURL"
            type="text"
            value={instagramURL}
            onChange={(e) => setInstagramURL(e.target.value)}
          />
        </label>
        <button type="submit">Submit form</button>
      </form>
    </div>
  )
}
