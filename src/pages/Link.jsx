import { Link } from "react-router-dom";
export default function Links() {
return (
        <ul>
            <li>
                <Link to="/">Home</Link>
            </li>
            <li>
                <Link to="/profile">Profile</Link>
            </li>
            <li>
                <Link to="/profile/1">Profile/1</Link>
            </li>
            <li>
                <Link to="/profile/profilesub1">ProfileSub1</Link>
            </li>
            <li>
            <   Link to="/about">About</Link>
            </li>
            <li>
                <Link to="/about?name=maseongok">About?name=maseongok</Link>
            </li>
            <li>
                <Link to="/web">Web</Link>
            </li>
        </ul>
    );
}