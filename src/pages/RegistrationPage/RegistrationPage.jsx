// import style from './RegistrationPage.module.scss';
import Container from '../../components/Container';
import RegisterForm from '../../components/RegisterForm';
import AuthBackground from '../../components/AuthBackground';
import Nav from '../../components/Nav';
import Header from '../../components/Header';

const RegistrationPage = () => {
  return (
    <AuthBackground>
      <Container>
        <Nav>
          <Header />
        </Nav>
        <RegisterForm />
      </Container>
    </AuthBackground>
  );
};

export default RegistrationPage;
