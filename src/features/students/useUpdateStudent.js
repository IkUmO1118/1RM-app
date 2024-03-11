import { useMutation, useQueryClient } from '@tanstack/react-query';
import { toast } from 'react-hot-toast';
import { updateStudentData } from '../../services/apiStudents';

export function useUpdateStudent() {
  const queryClient = useQueryClient();

  const { mutate: updateStudent, isLoading: isUpdating } = useMutation({
    mutationFn: updateStudentData,
    onSuccess: (data) => {
      toast.success(`${data.fullName} account successfully updated`);
      queryClient.invalidateQueries(['student', `${data.id}`]);
      console.log(data);
    },
    onError: (err) => toast.error(err.message),
  });

  return { updateStudent, isUpdating };
}
