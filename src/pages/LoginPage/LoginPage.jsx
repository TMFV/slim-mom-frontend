import style from './LoginPage.module.scss';
import Container from '../../components/Container';
import LoginForm from '../../components/LoginForm';

const LoginPage = () => {
  return (
    <Container>
      <div className={style.login}>
        <LoginForm />
      </div>
    </Container>
  );
};

export default LoginPage;
