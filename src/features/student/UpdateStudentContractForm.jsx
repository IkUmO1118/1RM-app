import { useState } from 'react';
import InputDate from '../../ui/InputDate';
import InputNumber from '../../ui/InputNumber';
import { useUpdateStudent } from '../students/useUpdateStudent';
import { toDate } from 'date-fns';

function UpdateStudentContractForm({
  id,
  startDate: start,
  endDate: end,
  contractPeriod,
  status,
}) {
  const { updateStudent, isUpdating } = useUpdateStudent();

  const [startDate, setStartDate] = useState(start);
  const [endDate, setEndDate] = useState(end);
  const [period, setPeriod] = useState(contractPeriod);

  function handleClick(e) {
    e.preventDefault();
    if (!startDate || !endDate || !period) return;
    let contract = {
      startDate: toDate(startDate),
      endDate: toDate(endDate),
      contractPeriod: period,
    };
    updateStudent({
      contract,
      id,
    });
  }

  return (
    <div className="rounded-md border border-gray-100 bg-white px-10 py-10">
      <div className="flex gap-12 divide-x divide-gray-300">
        <div className="flex items-center">
          <div className="flex flex-col gap-2">
            <label className="text-xl font-medium" htmlFor="startDate">
              Start date
            </label>
            <InputDate
              inputId="startDate"
              state={startDate}
              setState={setStartDate}
              disabled={status === 'checked-in' && true}
              changeSetState={setEndDate}
              contractPeriod={period}
            />
          </div>

          <span className="mx-5 mt-7 text-2xl">to</span>

          <div className="flex flex-col gap-2">
            <label className="text-xl font-medium" htmlFor="endDate">
              End date
            </label>
            <InputDate
              inputId="endDate"
              state={endDate}
              setState={setEndDate}
              disabled={true}
            />
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
              inputId="contractPeriod"
              state={period}
              setState={setPeriod}
              changeSetState={setEndDate}
            />
          </div>
        </div>
      </div>
      <button
        onClick={handleClick}
        disabled={isUpdating}
        className="mt-8 rounded-md bg-emerald-700 px-4 py-4 text-xl text-white transition-all duration-200 hover:bg-emerald-800"
      >
        Update contract
      </button>
    </div>
  );
}

export default UpdateStudentContractForm;
