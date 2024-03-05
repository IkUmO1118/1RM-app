import BasicTabs from '../../ui/BasicTabs';
import StudentTrack from './StudentTrack';
import StudentSetting from './StudentSetting';
import StudentCreate from './StudentCreate';
import StudentCalender from './StudentCalender';

function StudentTab() {
  return (
    <BasicTabs
      color="primary"
      tabSize="h6"
      tabContent={[
        {
          part: 'calender',
          component: <StudentCalender />,
        },
        {
          part: 'track',
          component: <StudentTrack />,
        },
        {
          part: 'settings',
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
