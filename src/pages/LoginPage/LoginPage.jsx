// import style from './LoginPage.module.scss';
import Container from '../../components/Container';
import LoginForm from '../../components/LoginForm';
import AuthBackground from '../../components/AuthBackground';
import Nav from '../../components/Nav';
import Header from '../../components/Header';

const LoginPage = () => {
  return (
    <AuthBackground>
      <Container>
        <Nav>
          <Header />
        </Nav>
        <LoginForm />
      </Container>
    </AuthBackground>
  );
};

export default LoginPage;
