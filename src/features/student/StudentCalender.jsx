import { format } from 'date-fns';
import BasicDateCalendar from '../../ui/BasicDateCalender';
import { HiOutlinePlusSm } from 'react-icons/hi';
import { eventOfPart } from '../../utils/helpers';

function StudentCalender({ students_session }) {
  const workoutsArray = students_session?.map((workout) => ({
    title: workout.session.workoutMenu,
    start: format(new Date(workout.created_at), 'yyyy-MM-dd'),
    ...eventOfPart[workout.session.workoutMenu],
  }));

  return (
    <div className="relative">
      <BasicDateCalendar array={workoutsArray} />
      <button className="absolute right-0 top-0 flex items-center gap-2 rounded-full bg-emerald-700 px-5 py-4 text-xl text-white transition-all duration-200 hover:bg-emerald-800">
        <HiOutlinePlusSm className="h-7 w-7" />
        <span>Create workout</span>
      </button>
    </div>
  );
}

export default StudentCalender;
