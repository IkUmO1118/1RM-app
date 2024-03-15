import { useParams } from 'react-router';
import SessionsDetail from '../features/sessions/SessionsDetail';
import { useStudents_Session } from '../features/student/useStudents_Session';
import Spinner from '../ui/Spinner';

function Sessions() {
  const { students_session, isLoading } = useStudents_Session();

  if (isLoading) return <Spinner />;
  return (
    <div>
      <SessionsDetail students_session={students_session} />
    </div>
  );
}

export default Sessions;
