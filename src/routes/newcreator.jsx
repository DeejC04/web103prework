import React, { useState, useEffect } from "react"
import { supabase } from "../client"

const NewCreator = () => {
  const [name, setName] = useState("")
  const [description, setDescription] = useState("")
  const [selectedFile, setSelectedFile] = useState(null)
  const [imageURL, setImageURL] = useState("")
  const [youtubeURL, setYoutubeURL] = useState("")
  const [twitterURL, setTwitterURL] = useState("")
  const [instagramURL, setInstagramURL] = useState("")
  const [preview, setPreview] = useState(null)

  const handleUpload = async (file) => {
    try {
      const { data, error } = await supabase.storage
        .from("images")
        .upload(file.name, file)

      if (data) {
        console.log(data)
        return data.path
      } else if (error) {
        throw new Error(error.message)
      }
    } catch (error) {
      console.log("Error during image upload:", error)
      return null
    }
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (!name) {
      alert("Please enter a name")
      return
    }

    let uploadedImageURL = ""
    if (selectedFile) {
      uploadedImageURL = "https://covnxxxckhwwsmistvjd.supabase.co/storage/v1/object/public/images/" + `${await handleUpload(selectedFile)}`
      console.log(uploadedImageURL)
      if (!uploadedImageURL) {
        console.log("Image upload failed")
        return
      }
    }


    if (!uploadedImageURL && !imageURL) {
      alert("Please enter an image URL or upload one!")
      return
    }

    const { data, error } = await supabase
      .from(import.meta.env.VITE_SUPABASE_TABLE_NAME)
      .insert([
        { name, imageURL: imageURL || uploadedImageURL, description, youtubeURL, twitterURL, instagramURL }
      ])



    if (error) {
      console.log(error)
    } else {
      console.log(`Inserted ${name} into table.`)
      alert(`Submitted ${name}`)
    }
  }

  const handleFileChange = (e) => {
    if (e.target.files.length > 0) {
      setSelectedFile(e.target.files[0])
    }
  }

  useEffect(() => {
    if (!selectedFile) {
      setPreview(undefined)
      return
    }

    const objectUrl = URL.createObjectURL(selectedFile)
    setPreview(objectUrl)

    return () => URL.revokeObjectURL(objectUrl)
  }, [selectedFile])

  const onSelectFile = e => {
    if (!e.target.files || e.target.files.length === 0) {
      setSelectedFile(undefined)
      return
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
          {imageURL && (<img src={imageURL}></img>)}
        </label>
        <label>
          Or, upload an image
          <input
            type="file"
            accept="image/*"
            id="file_input"
            onChange={handleFileChange}
          />
        </label>
        <img src={preview}></img>
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

export default NewCreator
