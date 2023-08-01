import { useParams } from "react-router-dom";
import useCreatorData from "../api/useCreatorData";
import { supabase } from "../client";
import { Link } from "react-router-dom";

export default function SingleCreator() {
  const { id } = useParams();
  const creator = useCreatorData(id);

  if (!creator) {
    return <div aria-busy="true">Loading...</div>;
  }

    async function deleteCreator() {
        const { error } = await supabase
        .from('creators')
        .delete()
        .eq('id', id)

        if (!error) {
            alert("creator deleted")
        }
    }


  return (
    <div>
      <h2>{creator.name}</h2>
      <img src={creator.imageURL} alt={creator.name} />
      <p>{creator.description}</p>
      <p>Extra silly info because you clicked on {creator.name}!</p>
      <button onClick={deleteCreator}>delete creator</button>
      <h4><Link to={`../edit/${id}`}>Edit Creator</Link></h4>
    </div>
  );
}
