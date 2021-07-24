import { NavLink } from 'react-router-dom';
import Container from '../Container';
import Logo from '../Logo';
import Nav from '../Nav';

export default function Header() {
  const isAuthenticated = false;
  return (
    <div>
      <Logo isAuthorized={isAuthenticated} />
      <Nav></Nav>
    </div>
  );
}
