import BasicTabs from '../../ui/BasicTabs';
import Studentsession from './StudentSession';
import StudentSetting from './StudentSetting';
import StudentCalender from './StudentCalender';
import { useStudents_Session } from './useStudents_Session';
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
          component: <StudentCalender students_session={students_session} />,
        },
        {
          part: 'session',
          component: <Studentsession students_session={students_session} />,
        },
        {
          part: 'settings',
          component: <StudentSetting />,
        },
      ]}
    />
  );
}
export default StudentTab;
