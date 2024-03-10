function UpdateStudentDataForm({ fullName, email }) {
  return (
    <div className="rounded-md border border-gray-100 bg-gray-100 px-7 py-10">
      <div className="flex items-center justify-between gap-14">
        <div className="flex flex-1 flex-col gap-2">
          <label className="text-xl font-medium" htmlFor="email">
            Email
          </label>
          <input
            disabled
            id="email"
            className="border-1 rounded-md border-gray-300 bg-gray-50 px-5 py-4 text-xl shadow-sm"
            type="email"
            defaultValue={email}
          />
        </div>
        <div className="flex flex-1 flex-col gap-2">
          <label htmlFor="fullName" className="text-xl font-medium">
            Full name
          </label>
          <input
            id="fullName"
            type="text"
            className="border-1 rounded-md border-gray-300 bg-gray-50 px-5 py-4 text-xl shadow-sm"
            defaultValue={fullName}
          />
        </div>
      </div>
      <button className="mt-8 rounded-md bg-emerald-700 px-4 py-3 text-xl text-white transition-all duration-200 hover:bg-emerald-600">
        Update student
      </button>
    </div>
  );
}

export default UpdateStudentDataForm;
