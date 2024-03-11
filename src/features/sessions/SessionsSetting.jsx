import UpdateStudentDataForm from '../student/UpdateStudentDataForm';
import { useParams } from 'react-router';
import { useQueryClient } from '@tanstack/react-query';
import UpdateStudentContractForm from '../student/UpdateStudentContractForm';
import DeleteStudentForm from '../student/DeleteStudentForm';

function SessionsSetting() {
  const { studentId } = useParams();
  const queryClient = useQueryClient();
  const { fullName, email, startDate, endDate, contractPeriod, status } =
    queryClient.getQueryData(['student', `${studentId}`]);
  // const [startDate, setStartDate] = useState(new Date());
  // const [endDate, setEndDate] = useState(new Date());

  // function handleStartDate(date) {
  //   setStartDate(date);
  // }
  // function handleEndDate(date) {
  //   setEndDate(date);
  // }
  // <InputDate state={startDate} handleFn={handleStartDate} disabled={true} />
  return (
    <div className="flex flex-col gap-16 divide-y divide-gray-300 px-4">
      <div>
        <p className="mb-8 mt-4 text-2xl font-medium">Update user</p>
        <UpdateStudentDataForm
          fullName={fullName}
          email={email}
          id={studentId}
        />
      </div>
      <div>
        <p className="mb-8 mt-12 text-2xl font-medium">Update contract</p>
        <UpdateStudentContractForm
          id={studentId}
          startDate={startDate}
          endDate={endDate}
          contractPeriod={contractPeriod}
          status={status}
        />
      </div>
      <div>
        <p className="mb-8 mt-12 text-2xl font-medium">Delete student</p>
        <DeleteStudentForm id={studentId} />
      </div>
    </div>
  );
}

export default SessionsSetting;
