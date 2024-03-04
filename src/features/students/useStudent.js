import { useQuery } from '@tanstack/react-query';
import { useParams } from 'react-router-dom';
import { getStudent } from '../../services/apiStudents';

export function useStudent() {
  const { studentId } = useParams();

  const {
    isLoading,
    data: student,
    error,
  } = useQuery({
    queryKey: ['student', studentId],
    queryFn: () => getStudent(studentId),
    retry: false,
  });

  return { isLoading, error, student };
}
