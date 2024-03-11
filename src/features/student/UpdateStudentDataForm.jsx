import { useRef, useState } from 'react';
import { useUpdateStudent } from '../students/useUpdateStudent';

function UpdateStudentDataForm({ fullName, email, id }) {
  const resetFocusRef = useRef();
  const { updateStudent, isUpdating } = useUpdateStudent();
  const [studentName, setStudentName] = useState(fullName);

  function handleSubmit(e) {
    e.preventDefault();
    if (!studentName) return;
    resetFocusRef.current.blur();
    updateStudent({ studentName, id });
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="rounded-md border border-gray-100 bg-gray-100 px-10 py-10"
    >
      <div className="flex items-center justify-between gap-14">
        <div className="flex flex-1 flex-col gap-2">
          <label className="text-xl font-medium" htmlFor="email">
            Email
          </label>
          <input
            disabled
            id="email"
            className="border-1 rounded-md border-gray-300 bg-gray-50 px-5 py-4 text-xl shadow-sm disabled:bg-gray-200 disabled:text-gray-500"
            type="email"
            defaultValue={email}
            autoComplete="email"
          />
        </div>
        <div className="flex flex-1 flex-col gap-2">
          <label htmlFor="fullName" className="text-xl font-medium">
            Full name
          </label>
          <input
            ref={resetFocusRef}
            id="fullName"
            type="text"
            className="border-1 rounded-md border-gray-300 bg-gray-50 px-5 py-4 text-xl shadow-sm"
            defaultValue={studentName}
            autoComplete="username"
            disabled={isUpdating}
            onChange={(e) => setStudentName(e.target.value)}
          />
        </div>
      </div>
      <button
        disabled={isUpdating}
        className="mt-8 rounded-md bg-emerald-700 px-4 py-4 text-xl text-white transition-all duration-200 hover:bg-emerald-600"
      >
        Update student
      </button>
    </form>
  );
}

export default UpdateStudentDataForm;
