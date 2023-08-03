import React, { useState } from "react";
import { supabase } from "../client";

const NewCreator = () => {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [selectedFile, setSelectedFile] = useState(null);
  const [imageURL, setImageURL] = useState(""); // Separate state for imageURL input

  const handleUpload = async (file) => {
    try {
      const { data, error } = await supabase.storage
        .from("images")
        .upload(file.name, file);

      if (data) {
        console.log(data);
        return data.path;
      } else if (error) {
        throw new Error(error.message);
      }
    } catch (error) {
      console.log("Error during image upload:", error);
      return null;
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!name) {
      alert("Please enter a name");
      return;
    } 

    let uploadedImageURL = "";
    if (selectedFile) {
      uploadedImageURL = "https://covnxxxckhwwsmistvjd.supabase.co/storage/v1/object/public/images/" + `${await handleUpload(selectedFile)}`
      console.log(uploadedImageURL)
      if (!uploadedImageURL) {
        console.log("Image upload failed");
        return;
      }
    }


    if (! uploadedImageURL || imageURL) {
        alert("Please enter an image URL or upload one!")
        return
    }

    const { data, error } = await supabase.from("creators2").insert([
      { name, imageURL: imageURL || uploadedImageURL, description }, // Use the provided imageURL or the uploadedImageURL
    ]);



    if (error) {
      console.log(error);
    } else {
      console.log(`Inserted ${name} into table.`);
      alert(`Submitted ${name}`);
    }
  };

  const handleFileChange = (e) => {
    if (e.target.files.length > 0) {
      setSelectedFile(e.target.files[0]);
    }
  };

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
            value={imageURL} // Use the separate state for imageURL input
            onChange={(e) => setImageURL(e.target.value)}
          />
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
  );
};

export default NewCreator;
