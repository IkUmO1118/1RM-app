import {
  differenceInCalendarDays,
  format,
  intervalToDuration,
  isAfter,
  isBefore,
  isToday,
} from 'date-fns';
import Switch from '../../ui/Switch';
import Table from '../../ui/Table';
import { HiOutlineTrash } from 'react-icons/hi2';
import { HiOutlineArrowsExpand } from 'react-icons/hi';
import { useNavigate } from 'react-router-dom';
import Modal from '../../ui/Modal';
import ConfirmDelete from '../../ui/ConfirmDelete';
import { useDeleteStudent } from '../student/useDeleteStudent';

function StudentRow({ student }) {
  const navigate = useNavigate();
  const { isDeleting, deleteStudent } = useDeleteStudent();
  const {
    id: studentId,
    fullName,
    email,
    status,
    startDate,
    endDate,
    contractPeriod,
  } = student;
  const isCheckedIn = status !== 'checked-out';

  function calcDuration() {
    const { years, months, days } = intervalToDuration({
      start: new Date(endDate),
      end: new Date(),
    });
    if (months < 1 && years < 1) return `${days} days`;
    if (years <= 0 && months >= 1) return `${months} months`;
    if (years >= 1) return `${years} years`;
  }

  return (
    <Table.Row>
      {status === 'checked-in' || status === 'checked-out' ? (
        <Switch id={studentId} status={status} />
      ) : (
        <div></div>
      )}

      <div className="mr-4 flex flex-col border-r-2">
        <div className="text-2xl text-gray-600">{fullName}</div>
        <div className="font-sans text-lg text-gray-400">{email}</div>
      </div>

      <div className="flex flex-col gap-1">
        <div className="font-sans text-xl font-semibold text-gray-600">
          {format(new Date(startDate), 'MMM dd yyyy')}
        </div>
        <span className="font-sans text-lg text-gray-400">
          {isToday(new Date(startDate)) && 'Today ~'}
          {isAfter(new Date(), new Date(startDate)) &&
            isBefore(new Date(), new Date(endDate)) &&
            `${differenceInCalendarDays(new Date(), new Date(startDate)) + 1}日目`}
          {isBefore(new Date(), new Date(startDate)) &&
            `${differenceInCalendarDays(new Date(startDate), new Date())}日後~`}
          {isBefore(new Date(endDate), new Date()) && `${calcDuration()} ago`}
        </span>
      </div>

      <div>
        <div className="font-sans text-xl font-semibold text-gray-600">
          {format(new Date(endDate), 'MMM dd yyyy')}
        </div>
        <span className="font-sans text-lg text-gray-400">
          {contractPeriod || 1} months contract
        </span>
      </div>
      <button
        disabled={!isCheckedIn}
        onClick={() => navigate(`/students/${studentId}`)}
      >
        <HiOutlineArrowsExpand
          className={`flex h-11 w-11 self-center justify-self-center rounded-md p-2 transition-all duration-200 ${isCheckedIn ? 'hover:bg-gray-200' : ''}`}
        />
      </button>

      <Modal>
        <Modal.Open opens="delete">
          <button className="flex self-center justify-self-center rounded-md p-2 hover:bg-gray-200">
            <HiOutlineTrash className="h-8 w-8 text-red-700" />
          </button>
        </Modal.Open>
        <Modal.Window name="delete">
          <ConfirmDelete
            resourceName="student"
            disabled={isDeleting}
            onConfirm={() =>
              deleteStudent(studentId, {
                onSettled: () => navigate(-1),
              })
            }
          />
        </Modal.Window>
      </Modal>
    </Table.Row>
  );
}

export default StudentRow;
