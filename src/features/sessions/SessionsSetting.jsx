import { useState } from 'react';
import InputDate from '../../ui/InputDate';
import UpdateStudentDataForm from '../student/UpdateStudentDataForm';
import { useParams } from 'react-router';
import { useQueryClient } from '@tanstack/react-query';
import UpdateStudentContractForm from '../student/UpdateStudentContractForm';

function SessionsSetting() {
  const { studentId } = useParams();
  const queryClient = useQueryClient();
  const { fullName, email, startDate, endDate, contractPeriod } =
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
    <div className="flex flex-col gap-10 divide-y-2 px-4">
      <div>
        <p className="mb-5 mt-8 text-2xl font-medium">Update user</p>
        <UpdateStudentDataForm fullName={fullName} email={email} />
      </div>
      <div>
        <p className="mb-5 mt-8 text-2xl font-medium">Update contract</p>
        <UpdateStudentContractForm
          startDate={startDate}
          endDate={endDate}
          contractPeriod={contractPeriod}
        />
      </div>
      <div>
        <p className="mb-5 mt-8 text-2xl font-medium">Delete student</p>
        <UpdateStudentContractForm
          startDate={startDate}
          endDate={endDate}
          contractPeriod={contractPeriod}
        />
      </div>
    </div>
  );
}

export default SessionsSetting;
