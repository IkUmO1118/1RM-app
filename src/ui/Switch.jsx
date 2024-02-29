import { useState } from 'react';

function Example() {
  const [checked, setChecked] = useState(false);

  const toggleSwitch = () => {
    setChecked((prevChecked) => !prevChecked);
  };

  return (
    <div className="flex items-center">
      <label htmlFor="toggle" className="flex cursor-pointer items-center">
        <div className="relative">
          <input
            type="checkbox"
            id="toggle"
            className="sr-only"
            checked={checked}
            onChange={toggleSwitch}
          />
          <div
            className={`${checked ? 'bg-teal-900' : 'bg-teal-700'}
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

export default Example;
