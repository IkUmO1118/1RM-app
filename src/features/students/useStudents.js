import { useQuery } from '@tanstack/react-query';
import { getStudents } from '../../services/apiStudents';
import { useSearchParams } from 'react-router-dom';

export function useStudents() {
  const [searchParams] = useSearchParams();

  const filterValue = searchParams.get('status');

  const filter =
    !filterValue || filterValue === 'all'
      ? null
      : { field: 'status', value: filterValue };

  const {
    data: students,
    isLoading,
    error,
  } = useQuery({
    queryKey: ['students', filter],
    queryFn: () => getStudents({ filter }),
  });

  return { students, isLoading, error };
}
