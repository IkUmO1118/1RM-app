import WorkoutsTab from '../features/workouts/WorkoutsTab';

function Workouts() {
  return (
    <>
      <div className="flex flex-col gap-6">
        <div className="flex items-center justify-between">
          <h1 className="text-5xl font-semibold text-gray-800">
            All training menus
          </h1>
          <button className="mr-3 rounded-md border-none bg-green-700 px-10 py-4 text-lg text-green-50 shadow-sm transition-all duration-300 hover:bg-green-800">
            Create workout
          </button>
        </div>

        <WorkoutsTab />
      </div>
    </>
  );
}

export default Workouts;
