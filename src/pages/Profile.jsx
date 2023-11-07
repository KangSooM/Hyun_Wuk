import {useParams} from "react-router-dom";

export default function Profile() {
    const {id} = useParams();

    return <div>
        I am Profile 이에요.
        <br></br>
        {id && <span>id는 {id}</span>}
        </div>
}