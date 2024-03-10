function UpdateStudentContractForm({ startDate, endDate, contractPeriod }) {
  return (
    <div className="rounded-md border border-gray-100 bg-gray-100 px-7 py-10">
      <div className="flex items-center justify-between gap-14"></div>
      <button className="mt-8 rounded-md bg-emerald-700 px-4 py-3 text-xl text-white transition-all duration-200 hover:bg-emerald-600">
        Update student
      </button>
    </div>
  );
}

export default UpdateStudentContractForm;
