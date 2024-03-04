import { useState } from 'react';
import { useCheckInOutStudent } from '../features/students/useCheckInOutStudent';
import Spinner from './Spinner';

function Switch({ id, status }) {
  const [checked, setChecked] = useState(
    status === 'checked-out' ? false : true,
  );
  const { checkInOut, isCheckInOut } = useCheckInOutStudent();

  const toggleSwitch = () => {
    setChecked((prevChecked) => !prevChecked);
    // check-in-outを操作できる(update student's status)
    checkInOut({
      id,
      status: status === 'checked-in' ? 'checked-out' : 'checked-in',
    });
  };

  if (isCheckInOut) return <Spinner />;

  return (
    <div className="flex items-center">
      <label htmlFor={id} className="flex cursor-pointer items-center">
        <div className="relative">
          <input
            type="checkbox"
            id={id}
            className="sr-only"
            checked={checked}
            onChange={toggleSwitch}
          />
          <div
            className={`${checked ? 'bg-green-500' : 'bg-green-900'}
          relative inline-flex h-[28px] w-[50px] shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out `}
          ></div>
          <div
            className={`${checked ? 'translate-x-[22px]' : 'translate-x-0'}
            pointer-events-none absolute left-[2px] top-[2px] inline-block h-[24px] w-[24px] transform rounded-full bg-white shadow-lg ring-0 transition duration-200 ease-in-out`}
          ></div>
        </div>
      </label>
    </div>
  );
}

export default Switch;
