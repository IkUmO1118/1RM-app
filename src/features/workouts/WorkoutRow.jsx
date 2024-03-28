import {
  HiEllipsisVertical,
  HiOutlineExclamationCircle,
  HiOutlinePencil,
  HiOutlineTrash,
} from 'react-icons/hi2';
import Table from '../../ui/Table';
import Modal from '../../ui/Modal';
import WorkoutDetail from './WorkoutDetail';
import { shadeOfPart } from '../../utils/helpers';

function WorkoutRow({ workout }) {
  const { workoutName, image, awareness, part, equipment } = workout;

  return (
    <Table.Row>
      <img
        className="aspect-w-3 aspect-h-2 w-24 transform object-cover object-center"
        alt="workoutImage"
        src={image}
      />
      <div className=" font-sono flex self-center justify-self-center text-2xl font-medium">
        {workoutName}
      </div>
      <div className="flex self-center justify-self-center text-2xl text-gray-600">
        {equipment}
      </div>
      <div
        className={`mx-auto my-4 flex self-center justify-self-center rounded-lg  bg-${shadeOfPart[part].thin} px-4 py-1 text-xl font-medium text-${shadeOfPart[part].thick}`}
      >
        {part}
      </div>
      <div className="flex self-center justify-self-center">
        <Modal>
          <Modal.Open opens="workout-detail">
            <HiOutlineExclamationCircle className="h-11 w-11 cursor-pointer rounded-full p-1 transition-all duration-200 hover:bg-gray-200" />
          </Modal.Open>

          <Modal.Window name="workout-detail">
            <WorkoutDetail awareness={awareness} />
          </Modal.Window>
        </Modal>
      </div>
      <div className="flex self-center justify-self-center">
        <HiEllipsisVertical className="h-12 w-12 cursor-pointer rounded-md p-2 hover:bg-gray-200" />
      </div>
    </Table.Row>
  );
}

export default WorkoutRow;
