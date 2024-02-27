import { BasicTabs } from '../ui/BasicTabs';
import ChestTab from '../ui/ChestTab';
import BackTab from '../ui/BackTab';
import ShoulderTab from '../ui/ShoulderTab';
import ArmsTab from '../ui/ArmsTab';
import LegsTab from '../ui/LegsTab';
import AbsTab from '../ui/AbsTab';

function Workouts() {
  return (
    <div className="flex flex-col gap-6">
      <h1 className="text-5xl font-semibold text-gray-800">
        All training menus
      </h1>
      <BasicTabs
        color="primary"
        workoutPart={[
          { part: 'Chest', component: <ChestTab /> },
          { part: 'Back', component: <BackTab /> },
          { part: 'Shoulder', component: <ShoulderTab /> },
          { part: 'Arms', component: <ArmsTab /> },
          { part: 'Legs', component: <LegsTab /> },
          { part: 'Abs', component: <AbsTab /> },
        ]}
      />
    </div>
  );
}

export default Workouts;
