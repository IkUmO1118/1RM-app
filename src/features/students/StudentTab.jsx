import BasicTabs from '../../ui/BasicTabs';
import StudentTrack from './StudentTrack';

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
          part: 'Talk',
          component: <StudentTrack />,
        },
        {
          part: 'Settings',
          component: <StudentTrack />,
        },
      ]}
    />
  );
}
export default StudentTab;
