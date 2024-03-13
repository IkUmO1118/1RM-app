import UpdateStudentDataForm from './UpdateStudentDataForm';
import { useParams } from 'react-router';
import { useQueryClient } from '@tanstack/react-query';
import UpdateStudentContractForm from './UpdateStudentContractForm';
import DeleteStudentForm from './DeleteStudentForm';
import { addMonths, format } from 'date-fns';

function SessionsSetting() {
  const { studentId } = useParams();
  const queryClient = useQueryClient();
  const { fullName, email, startDate, endDate, contractPeriod, status } =
    queryClient.getQueryData(['student', `${studentId}`]);

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
          startDate={
            status === 'expired' ? format(new Date(), 'y-MM-dd') : startDate
          }
          endDate={
            status === 'expired'
              ? format(addMonths(new Date(), 1), 'y-MM-dd')
              : endDate
          }
          contractPeriod={status === 'expired' ? 1 : contractPeriod}
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
