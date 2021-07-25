// import style from './LoginPage.module.scss';
import Container from '../../components/Container';
import LoginForm from '../../components/LoginForm';
import AuthBackground from '../../components/AuthBackground';

const LoginPage = () => {
  return (
    <AuthBackground>
      <Container>
        <LoginForm />
      </Container>
    </AuthBackground>
  );
};

export default LoginPage;
