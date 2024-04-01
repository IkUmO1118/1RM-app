import { useState } from 'react';
import InputDate from '../../ui/InputDate';
import InputNumber from '../../ui/InputNumber';
import { addMonths, format, toDate } from 'date-fns';
import { useForm } from 'react-hook-form';
import { useCreateStudent } from '../student/useCreateStudent';

function SignupForm() {
  const [startDate, setStartDate] = useState(format(new Date(), 'y-MM-dd'));
  const [endDate, setEndDate] = useState(
    format(toDate(addMonths(new Date(), 1)), 'y-MM-dd'),
  );
  const [period, setPeriod] = useState(1);

  const { register, handleSubmit, formState, reset } = useForm();
  const { errors } = formState;

  const { isCreating, createStudent } = useCreateStudent();

  function onSubmit({ fullName, email }) {
    createStudent(
      {
        fullName: fullName,
        email: email,
        startDate: toDate(startDate),
        endDate: toDate(endDate),
        contractPeriod: period,
        status: 'provisionaly',
      },
      { onSettled: () => reset() },
    );
  }

  return (
    <form
      className="rounded-md border border-gray-100 bg-white px-10 py-10"
      onSubmit={handleSubmit(onSubmit)}
    >
      <div className="grid grid-cols-[24rem_1fr_1.2fr] gap-9 border-b border-gray-100 pb-5">
        <label
          htmlFor="fullName"
          className="col-span-1 flex items-center text-2xl"
        >
          Full name
        </label>
        <input
          id="fullName"
          type="text"
          className="border-1 col-span-1 rounded-md border-gray-300  px-5 py-4 text-xl"
          autoComplete="username"
          {...register('fullName', { required: 'This field is required' })}
        />
        {errors?.fullName?.message && (
          <span className="col-span-1 flex items-center text-xl text-red-500">
            {errors?.fullName?.message}
          </span>
        )}
      </div>

      <div className="grid grid-cols-[24rem_1fr_1.2fr] gap-9 border-b border-gray-100 py-5 ">
        <label
          className="col-span-1 flex items-center text-2xl"
          htmlFor="email"
        >
          Email
        </label>
        <input
          id="email"
          type="email"
          className="border-1 col-span-1 rounded-md border-gray-300 px-5 py-4 text-xl"
          autoComplete="email"
          {...register('email', {
            required: 'This field is required',
            pattern: {
              value: /\S+@\S+\.\S+/,
              message: 'Please provide a valid email address',
            },
          })}
        />
        {errors?.email?.message && (
          <span className="col-span-1 flex items-center text-xl text-red-500">
            {errors?.email?.message}
          </span>
        )}
      </div>

      <div className="grid grid-cols-[24rem_1fr_1.2fr] gap-9 border-b border-gray-100 py-5 ">
        <label
          className="col-span-1 flex items-center text-2xl"
          htmlFor="startDate"
        >
          Date
        </label>
        <div className="col-span-1 flex gap-7">
          <InputDate
            inputId="startDate"
            state={startDate}
            setState={setStartDate}
            changeSetState={setEndDate}
            contractPeriod={period}
          />
          <span className="mt-3 items-center text-2xl">to</span>
          <InputDate
            inputId="endDate"
            state={endDate}
            setState={setEndDate}
            disabled={true}
          />
        </div>
      </div>

      <div className="grid grid-cols-[24rem_1fr_1.2fr] gap-9 border-b border-gray-100 py-5 ">
        <label
          className="col-span-1 flex items-center text-2xl"
          htmlFor="contractPeriod"
        >
          Contract period
        </label>
        <div className="col-span-1">
          <InputNumber
            inputId="contractPeriod"
            state={period}
            setState={setPeriod}
            changeSetState={setEndDate}
          />
        </div>
      </div>

      <div className="grid grid-cols-[24rem_1fr_1.2fr] gap-9">
        <div className="col-span-1 col-end-7 flex gap-3">
          <button
            className="mt-8 rounded-md border-2 border-gray-200 px-6 py-4 text-2xl text-gray-600 transition-all duration-200 hover:bg-gray-50"
            type="reset"
            disabled={isCreating}
            onClick={reset}
          >
            cancel
          </button>
          <button
            className="mt-8 rounded-md bg-emerald-700 px-6 py-4 text-2xl text-white transition-all duration-200 hover:bg-emerald-800"
            disabled={isCreating}
          >
            Create a user
          </button>
        </div>
      </div>
    </form>
  );
}

export default SignupForm;
