import React, { useState } from 'react';
import styles from './FormUser.module.scss';
import { Formik, Field, Form } from 'formik';
import Modal from '../Modal/Modal';
import products from '../../JsonData/products.json';

export default function FormUser() {
  const [modalActive, setModalActive] = useState(false);
  const toggleModal = () => setModalActive(prevModalActive => !prevModalActive);

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
        onSubmit={async values => {
          await new Promise(r => setTimeout(r, 500));
          alert(JSON.stringify(values, null, 2));
        }}
      >
        {({ values }) => (
          <Form>
            <label htmlFor="height">
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
              <Field id="" type="radio" value="1" />
              <Field id="" type="radio" value="2" />
              <Field id="" type="radio" value="3" />
              <Field id="" type="radio" value="4" />
            </label>
            <button type="submit" onClick={toggleModal}>
              Похудеть
            </button>
          </Form>
        )}
      </Formik>
      <form className={styles.formUser}></form>
      {modalActive && (
        <Modal
          products={products}
          active={modalActive}
          setActive={setModalActive}
        />
      )}
    </div>
  );
}
