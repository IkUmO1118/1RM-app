import { useQuery } from '@tanstack/react-query';
import { getSelectedWorkouts } from '../../services/apiWorkouts';

export function useSelectedWorkouts(idArr, date) {
  const {
    data: selectedWorkouts,
    isLoading,
    error,
  } = useQuery({
    queryKey: ['workout', date],
    queryFn: () => getSelectedWorkouts(idArr),
  });

  return { selectedWorkouts, isLoading, error };
}
