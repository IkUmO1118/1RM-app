import { useQuery } from '@tanstack/react-query';
import { getStudents } from '../../services/apiStudents';

export function useStudents() {
  const {
    data: students,
    isLoading,
    error,
  } = useQuery({
    queryKey: ['students'],
    queryFn: getStudents,
  });

  return { students, isLoading, error };
}
