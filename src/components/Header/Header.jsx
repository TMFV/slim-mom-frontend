import Container from '../Container';
import Logo from '../Logo';
import Nav from '../Nav';

export default function Header() {
  return (
    <div>
      <Logo isAuthorized={false} />
      <Nav />
    </div>
  );
}
