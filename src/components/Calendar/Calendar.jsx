import { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import style from './Calendar.module.scss';

const Calendar = () => {
  const [startDate, setStartDate] = useState(new Date());

  return (
    <DatePicker
      className={style.calendar}
      selected={startDate}
      dateFormat="dd.MM.yyyy"
      onChange={date => setStartDate(date)}
      minDate={new Date()}
    ></DatePicker>
  );
};

export default Calendar;
