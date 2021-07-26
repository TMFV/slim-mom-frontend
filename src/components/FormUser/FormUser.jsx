import styles from './FormUser.module.scss';
import { Formik, Field, Form } from 'formik';

export default function FormUser() {
  return (
    <div className={styles.formWrapper}>
      <h1 className={styles.header}>
        Просчитай свою суточную норму калорий прямо сейчас
      </h1>
      <Formik
        initialValues={{
          height: '',
          age: '',
          weight: '',
          desiredWeight: '',
        }}
        onSubmit={async values =>
          await localStorage.setItem('user', JSON.stringify(values, null, 2))
        }
      >
        {({ values }) => (
          <Form>
            <label>
              <Field
                id="height"
                name="height"
                placeholder="Рост *"
                type="text"
                className={styles.input}
              />
            </label>
            <label>
              <Field
                id="age"
                name="age"
                className={styles.input}
                placeholder="Возраст *"
              />
            </label>
            <label>
              <Field
                id="weight"
                name="weight"
                className={styles.input}
                placeholder="Текущий вес *"
              />
            </label>
            <label>
              <Field
                id="desiredWeight"
                name="desiredWeight"
                type="text"
                className={styles.input}
                placeholder="Желаемый вес *"
              />
            </label>
            <label>
              Группа крови *
              <Field id="first" type="radio" value="1" />
              <Field id="second" type="radio" value="2" />
              <Field id="third" type="radio" value="3" />
              <Field id="fourth" type="radio" value="4" />
            </label>
            <button type="submit">Похудеть</button>
          </Form>
        )}
      </Formik>
      <form className={styles.formUser}></form>
    </div>
  );
}
