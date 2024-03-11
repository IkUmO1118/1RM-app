import { useState } from 'react';
import InputDate from '../../ui/InputDate';
import InputNumber from '../../ui/InputNumber';

function UpdateStudentContractForm({
  id,
  startDate: start,
  endDate: end,
  contractPeriod,
  status,
}) {
  const [startDate, setStartDate] = useState(start);
  const [endDate, setEndDate] = useState(end);
  const [period, setPeriod] = useState(contractPeriod);

  function handleClick() {}

  return (
    <div className="rounded-md border border-gray-100 bg-gray-100 px-10 py-10">
      <div className="flex gap-12 divide-x divide-gray-300">
        <div className="flex items-center">
          <div className="flex flex-col gap-2">
            <label className="text-xl font-medium" htmlFor="startDate">
              Start date
            </label>
            <InputDate
              id="startDate"
              state={startDate}
              setState={setStartDate}
            />
          </div>

          <span className="mx-5 mt-7 text-2xl">to</span>

          <div className="flex flex-col gap-2">
            <label className="text-xl font-medium" htmlFor="endDate">
              End date
            </label>
            <InputDate id="endDate" state={endDate} setState={setEndDate} />
          </div>
        </div>
        <div className="flex flex-col gap-2">
          <label
            className=" ml-14 text-xl font-medium"
            htmlFor="contractPeriod"
          >
            Contract period
          </label>
          <div className="ml-12">
            <InputNumber
              id="contractPeriod"
              state={period}
              setState={setPeriod}
            />
          </div>
        </div>
      </div>
      <button
        onClick={handleClick}
        className="mt-8 rounded-md bg-emerald-700 px-4 py-4 text-xl text-white transition-all duration-200 hover:bg-emerald-600"
      >
        Update contract
      </button>
    </div>
  );
}

export default UpdateStudentContractForm;
