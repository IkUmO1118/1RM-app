import { HiOutlinePencil, HiOutlineTrash } from 'react-icons/hi2';
import Table from '../../ui/Table';

function WorkoutRow({ workout }) {
  const { workoutName, image, awareness, part, equipment } = workout;

  return (
    <Table.Row>
      <img
        className="aspect-w-3 aspect-h-2 w-24 transform object-cover object-center"
        alt="workoutImage"
        src={image}
      />
      <div className=" font-sono flex self-center text-2xl font-normal">
        {workoutName}
      </div>
      <div className="flex self-center text-xl font-medium text-gray-600">
        {equipment}
      </div>
      <div
        className={`mx-auto my-4 flex self-center justify-self-start rounded-lg  bg-green-100 px-4 py-1 text-xl font-medium text-green-700`}
      >
        {part}
      </div>
      <div className="font-sono bg flex self-center text-lg font-normal">
        {awareness}
      </div>
      <div className="flex justify-around self-center">
        <button className="items-center p-1 hover:bg-slate-200">
          <HiOutlinePencil className="h-6 w-6" />
        </button>
        <button className="items-center p-1  hover:bg-slate-200">
          <HiOutlineTrash className="h-6 w-6" />
        </button>
      </div>
    </Table.Row>
  );
}

export default WorkoutRow;
