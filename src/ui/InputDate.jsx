import { addDays, addMonths, format, toDate } from 'date-fns';
import { Datepicker } from 'flowbite-react';
import { customTheme } from '../utils/helpers';

function InputDate({
  state,
  setState,
  disabled = false,
  inputId,
  changeSetState,
  contractPeriod = 1,
}) {
  function handleChange(date) {
    setState(format(date, 'y-MM-dd'));
    changeSetState(format(addMonths(toDate(date), contractPeriod), 'y-MM-dd'));
  }

  return (
    <Datepicker
      theme={customTheme}
      disabled={disabled}
      showtimeselect="true"
      onSelectedDateChanged={handleChange}
      timeformat="HH:mm"
      // viewmode="start time"
      timeintervals={30}
      timecaption="time"
      dateformat="MMMM d, yyyy h:mm aa"
      placeholder="start time"
      name="start time"
      // minDate={new Date()}
      // maxDate={addDays(new Date(), 365)}
      value={state}
      inputtype="datepicker"
      id={inputId}
    />
  );
}

export default InputDate;
