import Spinner from '../../ui/Spinner';
import Table from '../../ui/Table';
import StudentRow from './StudentRow';
import { useStudents } from './useStudents';

function StudentsTable() {
  const { students, isLoading } = useStudents();

  if (isLoading) return <Spinner />;

  return (
    <Table columns="grid-cols-[0.6fr_3fr_1.6fr_1.6fr_0.6fr_0.6fr]">
      <Table.Header>
        <div></div>
        <div>名前</div>
        <div>契約開始日</div>
        <div>契約満了日</div>
        <div>View</div>
        <div></div>
      </Table.Header>

      <Table.Body
        data={students || []}
        render={(student) => <StudentRow student={student} key={student.id} />}
      />
    </Table>
  );
}

export default StudentsTable;
