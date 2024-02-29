import { HiOutlineTrash } from 'react-icons/hi2';
import Table from '../../ui/Table';

function WorkoutRow({ workout }) {
  const { workoutName, image, awareness, part, equipment } = workout;
  // const colorOfPart = {
  //   chest: 'bg-green-200',
  //   back: 'bg-sky-200',
  //   shoulder: 'bg-red-200',
  //   arms: 'bg-yellow-200',
  //   legs: 'bg-orange-200',
  //   abs: 'bg-blue-200',
  // };
  return (
    <Table.Row>
      <img
        className="aspect-w-3 aspect-h-2 w-24 transform object-cover object-center"
        alt="workoutImage"
        src={image}
      />
      <div className=" font-sono flex self-center text-2xl font-semibold text-gray-600">
        {workoutName}
      </div>
      <div className="flex self-center text-2xl">{equipment}</div>
      <div
        className={`mx-auto my-4 flex self-center rounded-md  bg-green-100 px-4 py-1 text-xl font-medium text-green-700`}
      >
        {part}
      </div>
      <div className="font-sono bg flex self-center text-lg font-normal">
        {awareness}
      </div>
      <button className="flex self-center justify-self-end">
        <HiOutlineTrash className="h-6 w-6 " />
      </button>
    </Table.Row>
  );
}

export default WorkoutRow;
