import style from './RegistrationPage.module.scss';
// import Container from '../../components/Container';
import RegisterForm from '../../components/RegisterForm';

const RegistrationPage = () => {
  return (
    <div className={style.signup}>
      <div className={style.wrapper}>
        <RegisterForm />
      </div>
    </div>
  );
};

export default RegistrationPage;
