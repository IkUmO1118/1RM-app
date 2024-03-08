import { format } from 'date-fns';
import BasicDateCalendar from '../../ui/BasicDateCalender';
import { HiOutlinePlusSm } from 'react-icons/hi';

const eventOfPart = {
  chest: { backgroundColor: '#d1fae5', textColor: '#047857' }, //Emerald-100-700
  back: { backgroundColor: '#fee2e2', textColor: '#b91c1c' }, //Red-100-700
  shoulder: { backgroundColor: '#dbeafe', textColor: '#1d4ed8' }, //Blue-100-700
  arms: { backgroundColor: '#fae8ff', textColor: '#a21caf' }, //Fuchsia-100-700
  legs: { backgroundColor: '#ede9fe', textColor: '#6d28d9' }, //Violet-100-700
  abs: { backgroundColor: '#fef3c7', textColor: '#b45309' }, //Amber-100-700
};

function SessionsCalender({ students_session }) {
  const workoutsArray = students_session?.map((workout) => ({
    title: workout.session.workoutMenu,
    start: format(new Date(workout.created_at), 'yyyy-MM-dd'),
    ...eventOfPart[workout.session.workoutMenu],
  }));

  return (
    <div className="relative">
      <BasicDateCalendar array={workoutsArray} />
      <button className="absolute right-0 top-0 flex items-center gap-2 rounded-full bg-emerald-800 px-5 py-4 text-xl text-white transition-all duration-200 hover:bg-emerald-700">
        <HiOutlinePlusSm className="h-7 w-7" />
        <span>Create workout</span>
      </button>
    </div>
  );
}

export default SessionsCalender;
