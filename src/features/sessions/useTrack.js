import { useQuery } from '@tanstack/react-query';
import { getTrack } from '../../services/apiTracks';

export function useTrack(idArr, sessionId) {
  const {
    data: trackData,
    isLoading,
    error,
  } = useQuery({
    queryKey: ['tracks', sessionId],
    queryFn: () => getTrack(idArr),
    retry: false,
  });

  return { trackData, isLoading, error };
}
