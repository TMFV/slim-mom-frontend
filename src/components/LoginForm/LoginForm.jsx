import { Formik } from 'formik';
// import { useState } from 'react';
// import { useDispatch } from 'react-redux';
import styles from './LoginForm.module.scss';
import * as yup from 'yup';
import { NavLink } from 'react-router-dom';
import routes from '../../routes';
// import { useEffect } from 'react';

const LoginForm = () => {
  // const dispatch = useDispatch();

  // const onSignIn = credentials => dispatch(authOperations.logIn(credentials));

  // const [email, setEmail] = useState('');

  // const handleChangeEmail = event => {
  //   setEmail(event.currentTarget.value);
  // };

  // const [password, setPassword] = useState('');

  // const handleChangePassword = event => {
  //   setPassword(event.currentTarget.value);
  // };

  // const handleSubmit = event => {
  //   event.preventDefault();
  //   const credentials = {
  //     email,
  //     password,
  //   };

  //   // onSignIn(credentials);
  //   reset();
  // };

  // const reset = () => {
  //   setEmail('');
  //   setPassword('');
  // };

  const validationSchema = yup.object().shape({
    login: yup
      .string()
      .typeError('Должно быть строкой')
      .required('Обязательное поле'),
    password: yup
      .string()
      .typeError('Должно быть строкой')
      .required('Обязательное поле'),
  });

  const signup = routes.find(route => route.label === 'Signup');

  return (
    <div className={styles.loginisation}>
      <h2 className={styles.title}>Вход</h2>
      <Formik
        initialValues={{ login: '', password: '' }}
        validateOnBlur
        onSubmit={(values, { resetForm }) => {
          console.log(values);
          resetForm();
        }}
        validationSchema={validationSchema}
      >
        {({
          values,
          errors,
          touched,
          handleChange,
          handleBlur,
          isValid,
          handleSubmit,
          dirty,
        }) => (
          <form className={styles.form} onSubmit={handleSubmit}>
            <div className={styles.input__form}>
              <label className={styles.label}>
                Логин*
                <input
                  className={styles.input}
                  type="text"
                  name="login"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.login}
                />
              </label>
              {errors.login && touched.login && (
                <p className={styles.notification}>{errors.login}</p>
              )}
            </div>
            <div className={styles.input__form}>
              <label className={styles.label}>
                Пароль*
                <input
                  className={styles.input}
                  type="password"
                  name="password"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.password}
                />
              </label>
              {errors.password && touched.password && (
                <p className={styles.notification}>{errors.password}</p>
              )}
            </div>
            <div className={styles.buttons}>
              <button
                className={styles.btn__login}
                type="submit"
                disabled={!isValid && !dirty}
                onClick={handleSubmit}
              >
                Вход
              </button>
              <NavLink className={styles.btn__register} to={`${signup.path}`}>
                Регистрация
              </NavLink>
            </div>
          </form>
        )}
      </Formik>
    </div>
  );
};
export default LoginForm;
