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
          picked: '',
        }}
        onSubmit={async values => {
          await new Promise(r => setTimeout(r, 500));
          alert(JSON.stringify(values, null, 2));
        }}
      >
        {({ values }) => (
          <Form>
            <div id="my-radio-group">Picked</div>
            <div role="group" aria-labelledby="my-radio-group">
              <label>
                <Field type="radio" name="picked" value="One" />
                One
              </label>
              <label>
                <Field type="radio" name="picked" value="Two" />
                Two
              </label>
              <div>Picked: {values.picked}</div>
            </div>

            <button type="submit">Submit</button>
          </Form>
        )}
      </Formik>
      <form className={styles.formUser}>
        <label className={styles.label}>
          Рост *
          <input type="text" />
        </label>
        <label className={styles.label}>
          Возраст *
          <input type="text" />
        </label>
        <label className={styles.label}>
          Текущий вес *
          <input type="text" />
        </label>
        <label className={styles.label}>
          Желаемый вес *
          <input type="text" />
        </label>
        <label className={styles.label}>
          Группа крови *
          <input type="radio" value="1" />
          <input type="radio" value="2" />
          <input type="radio" value="3" />
          <input type="radio" value="4" />
        </label>
        <button type="submit">Похудеть</button>
      </form>
    </div>
  );
}
