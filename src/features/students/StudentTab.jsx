import BasicTabs from '../../ui/BasicTabs';
import StudentTrack from './StudentTrack';
import StudentSetting from './StudentSetting';
import StudentCreate from './StudentCreate';

function StudentTab() {
  return (
    <BasicTabs
      color="primary"
      tabSize="h6"
      tabContent={[
        {
          part: 'Tarck',
          component: <StudentTrack />,
        },
        {
          part: 'Settings',
          component: <StudentSetting />,
        },
        {
          part: 'Create',
          component: <StudentCreate />,
        },
      ]}
    />
  );
}
export default StudentTab;
