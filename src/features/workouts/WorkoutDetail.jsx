import { shadeOfPart } from '../../utils/helpers';

function WorkoutDetail({ workout, onCloseModal }) {
  const { workoutName, image, awareness, part, equipment } = workout;

  const detailHeight = window.innerHeight - 60;
  const detailWidth = window.innerWidth / 1.9;

  const searchLink = `https://www.google.com/search?q=${workoutName.split(' ').join('+')}`;

  return (
    <div
      className="flex flex-col gap-14 p-8"
      style={{ height: detailHeight, width: detailWidth }}
    >
      <div className="flex gap-10">
        <h1 className="self-center text-4xl font-semibold">{workoutName}</h1>
        <div
          className={`my-4 flex self-center justify-self-center rounded-lg  bg-${shadeOfPart[part].thin} px-4 py-1 text-xl font-medium text-${shadeOfPart[part].thick}`}
        >
          {part}
        </div>
      </div>
      <div className="mx-auto flex flex-col gap-2">
        <img
          src={image}
          alt="workout-equipment"
          className="w-1/2 self-center"
        />
        <span className="self-center text-xl font-semibold">{equipment}</span>
      </div>
      <div className="mt-10 w-3/4 self-center text-2xl">{awareness}</div>

      <a
        href={searchLink}
        target="_blank"
        rel="noreferrer"
        className="mt-8 self-center rounded-full px-9 py-4 text-2xl transition-all duration-200 hover:-translate-y-1 hover:bg-gray-100"
      >
        Search
      </a>

      <button
        onClick={onCloseModal}
        className="-m-8 rounded-full border border-gray-600 py-3 text-2xl font-semibold transition-all duration-200 hover:bg-white"
      >
        戻る
      </button>
    </div>
  );
}

export default WorkoutDetail;
