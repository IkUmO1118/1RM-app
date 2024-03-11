import { useState } from 'react';
import { HiOutlinePlus } from 'react-icons/hi';
import { HiOutlineMinus } from 'react-icons/hi';

function InputNumber({ state, handleFn, id }) {
  const [number, setNumber] = useState(0);

  function handleInc() {
    if (number < 99) setNumber((el) => el + 1);
  }

  function handleDec() {
    if (number > 1) setNumber((el) => el - 1);
  }

  return (
    <div className="relative flex max-w-[13rem] items-center">
      <button
        onChange={() => handleDec()}
        type="button"
        className="rounded-s-lg border border-gray-300 bg-gray-100 p-5 hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-gray-100 "
      >
        <HiOutlineMinus className="h-5 w-5" />
      </button>
      <input
        onChange={() => {}}
        type="text"
        inputMode="numeric"
        value={number}
        className="block w-full border-x-0 border-gray-300 bg-gray-50 px-5 py-4 text-center text-xl text-gray-900"
        name="inputnumber"
        id={id}
      />
      <button
        onChange={() => handleInc()}
        type="button"
        className="rounded-e-lg border border-gray-300 bg-gray-100 p-5 hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-gray-100 "
      >
        <HiOutlinePlus className="h-5 w-5" />
      </button>
    </div>
  );
}

export default InputNumber;
