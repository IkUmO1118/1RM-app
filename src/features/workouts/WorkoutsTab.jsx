import BasicTabs from '../../ui/BasicTabs';
import WorkoutsTable from './WorkoutsTable';
import { useWorkouts } from './useWorkouts';

function WorkoutsTab() {
  const { workouts, isLoading } = useWorkouts();
  return (
    <BasicTabs
      color="primary"
      tabSize="h6"
      tabContent={[
        {
          part: 'Chest',
          component: (
            <WorkoutsTable
              workouts={workouts?.filter((workout) => workout.part === 'chest')}
              isLoading={isLoading}
            />
          ),
        },
        {
          part: 'Back',
          component: (
            <WorkoutsTable
              workouts={workouts?.filter((workout) => workout.part === 'back')}
              isLoading={isLoading}
            />
          ),
        },
        {
          part: 'Shoulder',
          component: (
            <WorkoutsTable
              workouts={workouts?.filter(
                (workout) => workout.part === 'shoulder',
              )}
              isLoading={isLoading}
            />
          ),
        },
        {
          part: 'Arms',
          component: (
            <WorkoutsTable
              workouts={workouts?.filter((workout) => workout.part === 'arms')}
              isLoading={isLoading}
            />
          ),
        },
        {
          part: 'Legs',
          component: (
            <WorkoutsTable
              workouts={workouts?.filter((workout) => workout.part === 'legs')}
              isLoading={isLoading}
            />
          ),
        },
        {
          part: 'Abs',
          component: (
            <WorkoutsTable
              workouts={workouts?.filter((workout) => workout.part === 'bs')}
              isLoading={isLoading}
            />
          ),
        },
      ]}
    />
  );
}

export default WorkoutsTab;
