import { useEffect } from 'react';
import { getStudents } from '../services/apiStudents';

function Students() {
  useEffect(function () {
    getStudents().then((data) => console.log(data));
  }, []);
  return (
    <>
      <div className="flex justify-between">
        <h1 className="text-5xl font-semibold text-gray-800">All students</h1>
        <div className="flex items-center gap-6">
          <h1>Filter</h1>
          <h1>Sort By</h1>
        </div>
      </div>

      {/* <StudentTable /> */}
    </>
  );
}

export default Students;
