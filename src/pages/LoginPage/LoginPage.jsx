import style from './LoginPage.module.scss';
// import Container from '../../components/Container';
import LoginForm from '../../components/LoginForm';

const LoginPage = () => {
  return (
    <div className={style.login}>
      <div className={style.wrapper}>
        <LoginForm />
      </div>
    </div>
  );
};

export default LoginPage;
