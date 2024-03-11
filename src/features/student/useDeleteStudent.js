import { useMutation, useQueryClient } from '@tanstack/react-query';
import { deleteStudent as deleteStudentApi } from '../../services/apiStudents';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';

export function useDeleteStudent() {
  const queryClient = useQueryClient();
  const navigate = useNavigate();

  const { isLoading: isDeleting, mutate: deleteStudent } = useMutation({
    mutationFn: deleteStudentApi,
    onSuccess: () => {
      toast.success('Student successfully deleted');

      queryClient.invalidateQueries({
        queryKey: ['students'],
      });
    },
    onError: (err) => toast.error(err.message),
    onSettled: () => navigate(-1),
  });

  return { isDeleting, deleteStudent };
}
