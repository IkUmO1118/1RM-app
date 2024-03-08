import { useQuery } from '@tanstack/react-query';
import { getSession } from '../../services/apiSession';

export function useSession(id) {
  const {
    data: session,
    isLoading,
    error,
  } = useQuery({
    queryKey: ['session'],
    queryFn: () => getSession(id),
  });

  return { session, isLoading, error };
}
