import { useParams } from "react-router-dom"
import useCreatorData from "../api/useCreatorData"
import { supabase } from "../client"
import { Link } from "react-router-dom"

export default function SingleCreator() {
  const { id } = useParams()
  const creator = useCreatorData(id)

  if (!creator) {
    return <div aria-busy="true">Loading...</div>
  }

  async function deleteCreator() {
    const { error } = await supabase
      .from("creators2")
      .delete()
      .eq("id", id)

    if (!error) {
      alert("creator deleted")
    }
  }


  return (
    <article>
      <header>
        <h2>{creator.name}</h2>
      </header>
      <img src={creator.imageURL} alt={creator.name} />
      <p>{creator.description}</p>
      <p>Extra silly info because you clicked on {creator.name}!</p>
      <footer>
        <section className="grid">
          <button onClick={deleteCreator}>Delete Creator</button>
          <Link to={`../edit/${id}`}><button>Edit Creator</button></Link>
        </section>
      </footer>
    </article>
  )
}
