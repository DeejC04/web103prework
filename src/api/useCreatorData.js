import { useState, useEffect } from "react"
import { supabase } from "../client"

export default function useCreatorData(creatorId) {
  const [creator, setCreator] = useState(null)

  useEffect(() => {
    getCreator()
  }, [creatorId])

  async function getCreator() {
    const { data, error } = await supabase
      .from("creators2")
      .select()
      .eq("id", creatorId)
      .single()
      
    if (error) {
      console.error("Error fetching creator:", error)
    } else {
      setCreator(data)
    }
  }

  return creator
}
