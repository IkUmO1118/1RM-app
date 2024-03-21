import { useMutation, useQueryClient } from '@tanstack/react-query';
import { toast } from 'react-hot-toast';
import { createStudent as createStudentApi } from '../../services/apiStudents';

export function useCreateStudent() {
  const queryClient = useQueryClient();

  const { mutate: createStudent, isLoading: isCreating } = useMutation({
    mutationFn: createStudentApi,
    onSuccess: () => {
      toast.success('New Student successfully created');
      queryClient.invalidateQueries({ queryKey: ['students'] });
    },
    onError: (err) => toast.error(err.message),
  });

  return { isCreating, createStudent };
}
