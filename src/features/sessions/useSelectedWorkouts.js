import { useQuery } from '@tanstack/react-query';
import { getSelectedWorkouts } from '../../services/apiWorkouts';
import { useParams } from 'react-router';

export function useSelectedWorkouts(idArr) {
  const { partId } = useParams();
  const {
    data: selectedWorkouts,
    isLoading,
    error,
  } = useQuery({
    queryKey: ['workout', partId],
    queryFn: () => getSelectedWorkouts(idArr),
  });

  return { selectedWorkouts, isLoading, error };
}
