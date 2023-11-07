import {useLocation} from 'react-router-dom';
import queryString from 'query-string';

export default function About() {
    const {search} = useLocation();
    const {name, age} = queryString.parse(search);
    return <div>I am About 이에요.
        <br/> {search}
        <br/> queryString으로 넘어온 name 값은 {name}입니다.
        <br/> queryString으로 넘어온 age 값은 {age}입니다.
    </div>
}