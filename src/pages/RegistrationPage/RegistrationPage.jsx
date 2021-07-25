// import style from './RegistrationPage.module.scss';
import Container from '../../components/Container';
import RegisterForm from '../../components/RegisterForm';
import AuthBackground from '../../components/AuthBackground';

const RegistrationPage = () => {
  return (
    <AuthBackground>
      <Container>
        <RegisterForm />
      </Container>
    </AuthBackground>
  );
};

export default RegistrationPage;
