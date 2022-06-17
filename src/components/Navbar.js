import { React } from 'react';
import { Link } from 'react-router-dom';
import profile from './assets/images/profile.png';

const Navbar = () => (
  <nav className="navBar">
    <div className="title">Bookstore CMS</div>
    <ul>
      <li>
        <Link to="/"> Books </Link>
      </li>
      <li>
        <Link to="/Categories"> Categories </Link>
      </li>
    </ul>
    <img src={profile} alt="profile" />
  </nav>
);
export default Navbar;
