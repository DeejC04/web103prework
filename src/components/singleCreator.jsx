import { useParams } from "react-router-dom";
import useCreatorData from "../api/useCreatorData";

export default function SingleCreator() {
  const { id } = useParams();
  const creator = useCreatorData(id);

  if (!creator) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h2>{creator.name}</h2>
      <img src={creator.imageURL} alt={creator.name} />
      <p>{creator.description}</p>
      <p>Extra silly info because you clicked on {creator.name}!</p>
    </div>
  );
}
