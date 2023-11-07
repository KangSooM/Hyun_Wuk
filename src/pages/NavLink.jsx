import { NavLink } from 'react-router-dom';

export default function Links() {
    return (
        <ul>
            <li>
                <NavLink to="/">Home</NavLink>
            </li>
            <li>
                <NavLink to="/Profile">Profile</NavLink>
            </li>
            <li>
                <NavLink to="/Profile/1">Profile/1</NavLink>
            </li>
            <li>
                <NavLink to="/ProfileSub1">ProfileSub1</NavLink>
            </li>
            <li>
                <NavLink to="/About">About</NavLink>
            </li>
        </ul>
    );
}