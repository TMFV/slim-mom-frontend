import Container from '../components/Container';
import Nav from '../components/Nav';
import Header from '../components/Header';
import HomePageBackground from '../components/HomePageBackground';

export default function HomePage() {
  return (
    <HomePageBackground>
      <Container>
        <Nav>
          <Header />
          <p></p>
        </Nav>
      </Container>
    </HomePageBackground>
  );
}
