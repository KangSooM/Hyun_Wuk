// import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Profile from './pages/Profile';
import NotFound from "./pages/NotFound";
import Web from "./pages/Web";
import WebPost from "./pages/WebPost";
import ProfileSub1 from "./pages/ProfileSub1";
import Links from "./pages/Link";
import NavLink from "./pages/NavLink";

function App() {
  return (
    <BrowserRouter>
      <Links/>
      <NavLink/>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/About" element={<About></About>}></Route>
        <Route path="/Profile" element={<Profile></Profile>}></Route>
        <Route path="/Profile/:id" element={<Profile></Profile>}></Route>
        <Route path="/*" element={<NotFound></NotFound>}></Route>
        <Route
          path="Prfile/ProfileSub1"
          element={<ProfileSub1></ProfileSub1>}
        ></Route>
        <Route path="Web/*" element={<Web></Web>}></Route>
        <Route path=":id" element={<WebPost></WebPost>}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
