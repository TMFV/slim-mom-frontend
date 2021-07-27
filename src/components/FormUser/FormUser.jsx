import styles from './FormUser.module.scss';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';

const SignupSchema = Yup.object().shape({
  height: Yup.string()
    .min(2, 'Слишком мало...')
    .max(3, 'Слишком много...')
    .required('Заполните все поля'),
  age: Yup.string()
    .min(1, 'Слишком мало...')
    .max(3, 'Слишком много...')
    .required('Заполните все поля'),
  weight: Yup.string()
    .min(2, 'Слишком мало...')
    .max(3, 'Слишком много...')
    .required('Заполните все поля'),
  desiredWeight: Yup.string()
    .min(1, 'Слишком мало...')
    .max(3, 'Слишком много...')
    .required('Заполните все поля'),
});

export default function FormUser() {
  return (
    <div className={styles.formWrapper}>
      <h1 className={styles.header}>
        Просчитай свою суточную норму калорий прямо сейчас
      </h1>
      <Formik
        validationSchema={SignupSchema}
        className={styles.formWrapper}
        initialValues={{
          height: '',
          age: '',
          weight: '',
          desiredWeight: '',
          bloodGroup: '',
        }}
        onSubmit={async values =>
          await localStorage.setItem('user', JSON.stringify(values))
        }
      >
        {({ values, handleSubmit, handleChange }) => (
          <Form className={styles.form} onSubmit={handleSubmit}>
            <label>
              <Field
                value={values.height}
                onChange={handleChange}
                id="height"
                name="height"
                placeholder="Рост *"
                type="text"
                className={styles.input}
              />
              <ErrorMessage name="height">
                {msg => <p className={styles.notification}>{msg}</p>}
              </ErrorMessage>
            </label>

            <label className={styles.age}>
              <Field
                value={values.age}
                onChange={handleChange}
                id="age"
                name="age"
                className={styles.input}
                placeholder="Возраст *"
              />
              <ErrorMessage name="age">
                {msg => <p className={styles.notification}>{msg}</p>}
              </ErrorMessage>
            </label>

            <label className={styles.weight}>
              <Field
                value={values.weight}
                onChange={handleChange}
                id="weight"
                name="weight"
                className={styles.input}
                placeholder="Текущий вес *"
              />
              <ErrorMessage name="weight">
                {msg => <p className={styles.notification}>{msg}</p>}
              </ErrorMessage>
            </label>

            <label>
              <Field
                value={values.desiredWeight}
                onChange={handleChange}
                id="desiredWeight"
                name="desiredWeight"
                type="text"
                className={styles.input}
                placeholder="Желаемый вес *"
              />
              <ErrorMessage name="desiredWeight">
                {msg => <p className={styles.notification}>{msg}</p>}
              </ErrorMessage>
            </label>

            <div id="bloodGroup" className={styles.label}>
              Группа крови *
              <div
                role="group"
                aria-labelledby="bloodGroup"
                className={styles.radiogroup}
              >
                <label className={styles.label}>
                  <Field
                    onChange={handleChange}
                    className={styles.radio}
                    type="radio"
                    name="bloodGroup"
                    value="1"
                    checked={true}
                  />
                  1
                </label>
                <label className={styles.label}>
                  <Field
                    className={styles.radio}
                    type="radio"
                    name="bloodGroup"
                    value="2"
                  />
                  2
                </label>
                <label className={styles.label}>
                  <Field
                    className={styles.radio}
                    type="radio"
                    name="bloodGroup"
                    value="3"
                  />
                  3
                </label>
                <label className={styles.label}>
                  <Field
                    className={styles.radio}
                    type="radio"
                    name="bloodGroup"
                    value="4"
                  />
                  4
                </label>
              </div>
            </div>

            <button type="submit" className={styles.btnSubmit}>
              Похудеть
            </button>
          </Form>
        )}
      </Formik>
      <form className={styles.formUser}></form>
    </div>
  );
}
