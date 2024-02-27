import BasicTabs from '../../ui/BasicTabs';
import AbsTab from './AbsTab';
import ArmsTab from './ArmsTab';
import BackTab from './BackTab';
import ChestTab from './ChestTab';
import LegsTab from './LegsTab';
import ShoulderTab from './ShoulderTab';
import { useWorkouts } from './useWorkouts';

function WorkoutsTab() {
  const { workouts, isLoading } = useWorkouts();
  return (
    <BasicTabs
      color="primary"
      tabSize="h6"
      workoutPart={[
        { part: 'Chest', component: <ChestTab /> },
        { part: 'Back', component: <BackTab /> },
        { part: 'Shoulder', component: <ShoulderTab /> },
        { part: 'Arms', component: <ArmsTab /> },
        { part: 'Legs', component: <LegsTab /> },
        { part: 'Abs', component: <AbsTab /> },
      ]}
    />
  );
}

export default WorkoutsTab;
