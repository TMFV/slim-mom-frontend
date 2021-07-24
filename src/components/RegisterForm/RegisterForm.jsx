import { Formik } from 'formik';
// import { useState } from 'react';
// import { useDispatch } from 'react-redux';
import styles from './RegisterForm.module.scss';
import * as yup from 'yup';
import { NavLink } from 'react-router-dom';
import routes from '../../routes';
// import { useEffect } from 'react';

const RegisterForm = () => {
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
    name: yup
      .string()
      .typeError('Должно быть строкой')
      .required('Обязательное поле'),
    login: yup
      .string()
      .typeError('Должно быть строкой')
      .required('Обязательное поле'),
    password: yup
      .string()
      .typeError('Должно быть строкой')
      .required('Обязательное поле'),
  });

  const login = routes.find(route => route.label === 'Login');

  return (
    <div className={styles.registration}>
      <Formik
        initialValues={{ name: '', login: '', password: '' }}
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
            <h2 className={styles.title}>Регистрация</h2>
            <div className={styles.input__form}>
              <label className={styles.label}>
                Имя*
                <input
                  className={
                    errors.name && touched.name
                      ? styles.input__error
                      : styles.input
                  }
                  type="text"
                  name="name"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.name}
                />
              </label>
              {errors.name && touched.name && (
                <p className={styles.notification}>{errors.name}</p>
              )}
            </div>
            <div className={styles.input__form}>
              <label className={styles.label}>
                Логин*
                <input
                  className={
                    errors.login && touched.login
                      ? styles.input__error
                      : styles.input
                  }
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
                  className={
                    errors.password && touched.password
                      ? styles.input__error
                      : styles.input
                  }
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
              <NavLink className={styles.btn__login} to={`${login.path}`}>
                Вход
              </NavLink>
              <button
                className={styles.btn__register}
                type="submit"
                disabled={!isValid || !dirty}
                onClick={handleSubmit}
              >
                Регистрация
              </button>
            </div>
          </form>
        )}
      </Formik>
    </div>
  );
};
export default RegisterForm;
