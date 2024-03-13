import Spinner from '../../ui/Spinner';
import Empty from '../../ui/Empty';
import { useStudent } from './useStudent';
import { useMoveBack } from '../../hooks/useMoveBack';
import StudentTab from '../student/StudentTab';

function StudentDetail() {
  const moveBack = useMoveBack();
  const { student, isLoading } = useStudent();

  if (isLoading) return <Spinner />;
  if (!student) return <Empty resourceName="student" />;

  const {
    id: studentId,
    fullName,
    status,
    email,
    startDate,
    endDate,
    contractPeriod,
  } = student;

  const statusToTagName = {
    provisionaly: 'bg-red-100 text-red-700',
    expired: 'bg-sky-100 text-sky-700',
    'checked-in': 'bg-green-100 text-green-700',
    'checked-out': 'bg-silver-100 text-silver-700',
  };

  return (
    <div className="flex flex-col gap-6">
      <div className="flex items-center justify-between">
        <div className="flex gap-8">
          <h1 className="text-5xl font-semibold text-gray-800">
            Student #{studentId}
          </h1>
          <span
            className={`h-fit w-fit self-center rounded-full px-5 py-1 text-lg font-medium uppercase ${statusToTagName[status]}`}
          >
            {status}
          </span>
        </div>
        <button
          className="text-2xl font-semibold text-green-700"
          onClick={moveBack}
        >
          &larr; Back
        </button>
      </div>

      <div>
        <StudentTab />
      </div>
    </div>
  );
}

export default StudentDetail;
