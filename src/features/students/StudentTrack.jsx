import { format } from 'date-fns';
import BasicDateCalendar from '../../ui/BasicDateCalender';
import Spinner from '../../ui/Spinner';
import { useStudents_Session } from '../session/useStudents_Session';

const eventOfPart = {
  chest: { backgroundColor: '#d1fae5', textColor: '#047857' },
  back: { backgroundColor: '#fee2e2', textColor: '#b91c1c' },
  shoulder: { backgroundColor: '#dbeafe', textColor: '#1d4ed8' },
  arms: { backgroundColor: '#fce7f3', textColor: '#be185d' },
  legs: { backgroundColor: '#f3e8ff', textColor: '#7e22ce' },
  abs: { backgroundColor: '#fef3c7', textColor: '#b45309' },
};

function StudentTrack() {
  const { students_Session, isLoading } = useStudents_Session();

  const workoutsArray = students_Session?.map((workout) => ({
    title: workout.session.workoutMenu,
    start: format(new Date(workout.session.created_at), 'yyyy-MM-dd'),
    ...eventOfPart[workout.session.workoutMenu],
  }));

  if (isLoading) return <Spinner />;

  return (
    <div>
      <BasicDateCalendar array={workoutsArray} />
    </div>
  );
}

export default StudentTrack;
