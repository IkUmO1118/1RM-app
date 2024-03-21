import Table from '../../ui/Table';
import Spinner from '../../ui/Spinner';
import SessionsRow from './SessionsRow';
import { toDate } from 'date-fns';

function SessionsTable({ sessions, isLoading }) {
  if (isLoading) return <Spinner />;

  const sortedSessionsByDate = sessions.sort(
    (a, b) => toDate(b.date) - toDate(a.date),
  );

  return (
    <Table columns="grid-cols-[0.6fr_1fr_1fr_1fr_1fr]">
      <Table.Header>
        <div></div>
        <div className="justify-self-center">- 1 -</div>
        <div className="justify-self-center">- 2 -</div>
        <div className="justify-self-center">- 3 -</div>
        <div className="justify-self-center">- 4 -</div>
      </Table.Header>

      <Table.Body
        data={sortedSessionsByDate || []}
        render={(session) => (
          <SessionsRow session={session} key={session.date} />
        )}
      />
    </Table>
  );
}

export default SessionsTable;
