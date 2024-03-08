import BasicTabs from '../../ui/BasicTabs';
import SessionsTrack from '../sessions/SessionsTrack';
import SessionsSetting from '../sessions/SessionsSetting';
import SessionsCalender from '../sessions/SessionsCalender';
import { useStudents_Session } from '../sessions/useStudents_Session';
import Spinner from '../../ui/Spinner';

function StudentTab() {
  const { students_session, isLoading } = useStudents_Session();

  if (isLoading) return <Spinner />;

  return (
    <BasicTabs
      color="primary"
      tabSize="h6"
      tabContent={[
        {
          part: 'calender',
          component: <SessionsCalender students_session={students_session} />,
        },
        {
          part: 'track',
          component: <SessionsTrack />,
        },
        {
          part: 'settings',
          component: <SessionsSetting />,
        },
      ]}
    />
  );
}
export default StudentTab;
