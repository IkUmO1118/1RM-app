import Table from '../../ui/Table';
import Spinner from '../../ui/Spinner';
import WorkoutRow from './WorkoutRow';

function WorkoutsTable({ workouts, isLoading }) {
  if (isLoading) return <Spinner />;

  return (
    <Table columns="grid-cols-[0.6fr_1.4fr_1.1fr_0.6fr_2.0fr_0.3fr]">
      <Table.Header>
        <div></div>
        <div>種目名</div>
        <div>使う設備</div>
        <div>鍛える部位</div>
        <div>注意ポイント</div>
        <div></div>
      </Table.Header>

      <Table.Body
        data={workouts || []}
        render={(workout) => <WorkoutRow workout={workout} key={workout.id} />}
      />
    </Table>
  );
}

export default WorkoutsTable;
