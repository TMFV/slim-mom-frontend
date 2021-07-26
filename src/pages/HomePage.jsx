import Container from '../components/Container';
import Nav from '../components/Nav';
import Header from '../components/Header';
import HomePageBackground from '../components/HomePageBackground';
import FormUser from '../components/FormUser';

export default function HomePage() {
  return (
    <HomePageBackground>
      <Header goBack={false} />
      <Container>
        <FormUser />
      </Container>
    </HomePageBackground>
  );
}
