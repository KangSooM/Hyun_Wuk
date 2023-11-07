import { useParams } from "react-router-dom";

export default function WebPost() {
  const { id } = useParams();
  return (
    <div>
      <h1>Webpost {id}</h1>
    </div>
  );
}