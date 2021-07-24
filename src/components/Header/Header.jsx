import Container from '../Container';
import Logo from '../Logo';
import Nav from '../Nav';

export default function Header() {
  return (
    <div>
      <Logo isAuthorised width="15px" height="30px" />
      <Nav />
    </div>
  );
}
