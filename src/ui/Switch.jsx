import { useState } from 'react';

function Switch({ id, status }) {
  const [checked, setChecked] = useState(
    status === 'checked-out' ? false : true,
  );

  const toggleSwitch = () => {
    setChecked((prevChecked) => !prevChecked);
    // check-in-outを操作できる(update student's status)
  };

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
            className={`${checked ? 'bg-teal-600' : 'bg-green-900'}
          relative inline-flex h-[32px] w-[56px] shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out `}
          ></div>
          <div
            className={`${checked ? 'translate-x-[24px]' : 'translate-x-0'}
            pointer-events-none absolute left-[2px] top-[2px] inline-block h-[28px] w-[28px] transform rounded-full bg-white shadow-lg ring-0 transition duration-200 ease-in-out`}
          ></div>
        </div>
      </label>
    </div>
  );
}

export default Switch;
