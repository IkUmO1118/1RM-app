import { addMonths, format, subMonths, toDate } from 'date-fns';
import { HiOutlinePlus } from 'react-icons/hi';
import { HiOutlineMinus } from 'react-icons/hi';

function InputNumber({ state, setState, inputId, changeSetState }) {
  // changeSetStateは+, -を押したときにendDateを変更するようにsetEndDateを
  function handleInc() {
    if (state < 99) setState((el) => el + 1);
    changeSetState((date) => format(addMonths(toDate(date), 1), 'y-MM-dd'));
  }

  function handleDec() {
    if (state > 0) setState((el) => el - 1);
    changeSetState((date) => format(subMonths(toDate(date), 1), 'y-MM-dd'));
  }

  return (
    <div className="relative flex max-w-[13rem] items-center">
      <button
        onClick={handleDec}
        type="button"
        disabled={state === 0 && true}
        className="rounded-s-lg border border-gray-300 bg-gray-100 p-5 hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-gray-100 "
      >
        <HiOutlineMinus className="h-5 w-5" />
      </button>
      <input
        type="text"
        inputMode="numeric"
        // defaultValue={state}
        onChange={() => {}}
        value={state}
        className="block w-full border-x-0 border-gray-300 bg-gray-50 px-5 py-4 text-center text-xl text-gray-900"
        name="inputnumber"
        id={inputId}
      />
      <button
        onClick={handleInc}
        type="button"
        disabled={state === 99 && true}
        className="rounded-e-lg border border-gray-300 bg-gray-100 p-5 hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-gray-100 "
      >
        <HiOutlinePlus className="h-5 w-5" />
      </button>
    </div>
  );
}

export default InputNumber;
