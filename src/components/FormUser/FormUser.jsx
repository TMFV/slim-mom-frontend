import styles from './FormUser.module.scss';
import { Formik, Field, Form } from 'formik';

export default function FormUser() {
  return (
    <div className={styles.formWrapper}>
      <h1 className={styles.header}>
        Просчитай свою суточную норму калорий прямо сейчас
      </h1>
      <Formik
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
        {({ values }) => (
          <Form className={styles.form}>
            <label>
              <Field
                id="height"
                name="height"
                placeholder="Рост *"
                type="text"
                className={styles.input}
              />
            </label>
            <label className={styles.age}>
              <Field
                id="age"
                name="age"
                className={styles.input}
                placeholder="Возраст *"
              />
            </label>
            <label className={styles.weight}>
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

            <div id="bloodGroup" className={styles.label}>
              Группа крови *
              <div
                role="group"
                aria-labelledby="bloodGroup"
                className={styles.radiogroup}
              >
                <label className={styles.label}>
                  <Field
                    className={styles.radio}
                    type="radio"
                    name="bloodGroup"
                    value="1"
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
