import { useQuery } from '@tanstack/react-query';
import { getStudentsSession } from '../../services/apiStudents_Session';
import { useParams } from 'react-router-dom';

export function useStudents_Session() {
  const { studentId } = useParams();

  const {
    isLoading,
    data: students_Session,
    error,
  } = useQuery({
    queryKey: ['students_session'],
    queryFn: () => getStudentsSession(studentId),
  });

  return { isLoading, error, students_Session };
}
