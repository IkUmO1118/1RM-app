import StudentTableOperation from '../features/students/StudentTableOperation';
import StudentsTable from '../features/students/StudentsTable';

function Students() {
  return (
    <div className="flex flex-col gap-4">
      <div className="flex justify-between">
        <h1 className="text-5xl font-semibold text-gray-800">All students</h1>
      </div>
      <StudentTableOperation />
      <StudentsTable />
    </div>
  );
}

export default Students;
