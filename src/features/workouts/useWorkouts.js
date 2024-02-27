import { useQuery } from '@tanstack/react-query';
import { getWorkouts } from '../../services/apiWorkouts';

export function useWorkouts() {
  const {
    isLoading,
    data: workouts,
    error,
  } = useQuery({
    queryKey: ['workouts'],
    queryFn: getWorkouts,
  });

  return { isLoading, error, workouts };
}
