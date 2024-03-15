import { Box, Skeleton } from '@mui/material';
import Table from '../../ui/Table';
import { useSelectedWorkouts } from './useSelectedWorkouts';

function SessionsRow({ session }) {
  const {
    date,
    session: { workout_1Id, workout_2Id, workout_3Id, workout_4Id },
  } = session;

  const workoutsArr = [];
  if (workout_1Id !== null) workoutsArr.push(workout_1Id);
  if (workout_2Id !== null) workoutsArr.push(workout_2Id);
  if (workout_3Id !== null) workoutsArr.push(workout_3Id);
  if (workout_4Id !== null) workoutsArr.push(workout_4Id);

  const { selectedWorkouts, isLoading } = useSelectedWorkouts(
    workoutsArr,
    date,
  );

  if (isLoading)
    return (
      <Table.Row>
        <Box sx={{ paddingY: 0.2, height: 20 }}>
          <Skeleton animation="wave" />
        </Box>
      </Table.Row>
    );

  return (
    <Table.Row>
      <div className=" font-sono flex self-center justify-self-center text-xl font-normal">
        {date}
      </div>
      {selectedWorkouts.map((workout, i) => (
        <div
          className=" font-sono flex self-center border-l border-gray-300 px-3 text-lg font-medium"
          key={workout.id}
        >
          {selectedWorkouts[i].workoutName}
        </div>
      ))}
    </Table.Row>
  );
}

export default SessionsRow;
