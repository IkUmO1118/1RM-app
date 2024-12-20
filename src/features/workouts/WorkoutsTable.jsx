import Table from '../../ui/Table';
import Spinner from '../../ui/Spinner';
import WorkoutRow from './WorkoutRow';
import Menus from '../../ui/Menus';

function WorkoutsTable({ workouts, isLoading }) {
  if (isLoading) return <Spinner />;

  return (
    <Menus>
      <Table columns="grid-cols-[0.3fr_1.1fr_1.1fr_0.4fr_0.5fr_0.2fr]">
        <Table.Header>
          <div></div>
          <div className="flex items-center justify-self-center">種目名</div>
          <div className="flex items-center justify-self-center">使う設備</div>
          <div className="flex items-center justify-self-center">
            鍛える部位
          </div>
          <div className="flex items-center justify-self-center">ポイント</div>
          <div></div>
        </Table.Header>

        <Table.Body
          data={workouts || []}
          render={(workout) => (
            <WorkoutRow workout={workout} key={workout.id} />
          )}
        />
      </Table>
    </Menus>
  );
}

export default WorkoutsTable;
