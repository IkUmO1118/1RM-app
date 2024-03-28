import { HiOutlineExclamationCircle, HiPencil, HiTrash } from 'react-icons/hi2';
import Table from '../../ui/Table';
import Modal from '../../ui/Modal';
import WorkoutDetail from './WorkoutDetail';
import { shadeOfPart } from '../../utils/helpers';
import Menus from '../../ui/Menus';
import ConfirmDelete from '../../ui/ConfirmDelete';

function WorkoutRow({ workout }) {
  const {
    id: workoutId,
    workoutName,
    image,
    awareness,
    part,
    equipment,
  } = workout;

  return (
    <Table.Row>
      <Modal>
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
          <Modal.Open opens="workout-detail">
            <HiOutlineExclamationCircle className="h-11 w-11 cursor-pointer rounded-full p-1 transition-all duration-200 hover:bg-gray-200" />
          </Modal.Open>

          <Modal.Window name="workout-detail">
            <WorkoutDetail awareness={awareness} />
          </Modal.Window>
        </div>

        <div className="flex self-center justify-self-center">
          <Menus.Toggle id={workoutId} />

          <Menus.List id={workoutId}>
            <Menus.Button icon={<HiPencil className="h-6 w-6 text-gray-400" />}>
              Edit
            </Menus.Button>
            <Modal.Open opens="delete-workout">
              <Menus.Button
                icon={<HiTrash className="h-6 w-6 text-gray-400" />}
              >
                Delete
              </Menus.Button>
            </Modal.Open>
          </Menus.List>

          <Modal.Window name="delete-workout">
            <ConfirmDelete
              resourceName="workout"
              // disabled={isDeleting}
              onConfirm={() => {}}
            />
          </Modal.Window>
        </div>
      </Modal>
    </Table.Row>
  );
}

export default WorkoutRow;
