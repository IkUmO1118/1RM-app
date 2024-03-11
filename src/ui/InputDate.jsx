import { addDays } from 'date-fns';
import { Datepicker } from 'flowbite-react';
import { customTheme } from '../utils/helpers';

function InputDate({ state, handleFn, disabled = false, id }) {
  return (
    <Datepicker
      theme={customTheme}
      disabled={disabled}
      selected={state}
      showtimeselect="ture"
      onChange={handleFn}
      timeformat="HH:mm"
      viewmode="start time"
      timeintervals={30}
      timecaption="time"
      dateformat="MMMM d, yyyy h:mm aa"
      placeholder="start time"
      name="start time"
      minDate={new Date()}
      maxDate={addDays(new Date(), 365)}
      inputtype="datepicker"
      id={id}
    />
  );
}

export default InputDate;
