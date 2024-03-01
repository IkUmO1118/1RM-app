import { format } from 'date-fns';
import Switch from '../../ui/Switch';
import Table from '../../ui/Table';
import { HiOutlineTrash } from 'react-icons/hi2';
import { HiOutlineArrowsExpand } from 'react-icons/hi';

function StudentRow({ student }) {
  const { id, fullName, email, status, startDate, endDate, contractPeriod } =
    student;
  const isCheckedIn = status !== 'checked-out';

  return (
    <Table.Row>
      <Switch id={`switch-${id}`} status={status} />

      <div className="mr-4 flex flex-col border-r-2">
        <div className="text-2xl text-gray-600">{fullName}</div>
        <div className="font-sans text-lg text-gray-400">{email}</div>
      </div>

      <div className="flex flex-col gap-1">
        <div className="font-sans text-xl font-semibold text-gray-600">
          {format(new Date(startDate), 'MMM dd yyyy')}
        </div>
        <span></span>
      </div>

      <div>
        <div className="font-sans text-xl font-semibold text-gray-600">
          {format(new Date(endDate), 'MMM dd yyyy')}
        </div>
        <span className="font-sans text-lg text-gray-400">
          {contractPeriod} months contract
        </span>
      </div>
      <button disabled={!isCheckedIn}>
        <HiOutlineArrowsExpand
          className={`flex h-11 w-11 self-center justify-self-center rounded-full px-2 py-2 ${isCheckedIn ? 'hover:bg-gray-200' : ''}`}
        />
      </button>
      <button>
        <HiOutlineTrash className="flex h-7 w-7 self-center justify-self-center text-red-700" />
      </button>
    </Table.Row>
  );
}

export default StudentRow;
