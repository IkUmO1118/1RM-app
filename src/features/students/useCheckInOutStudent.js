import { useMutation, useQueryClient } from '@tanstack/react-query';
import { toast } from 'react-hot-toast';
import { updateStudent } from '../../services/apiStudents';

export function useCheckInOutStudent() {
  const queryClient = useQueryClient();

  const { mutate: checkInOut, isLoading: isCheckInOut } = useMutation({
    mutationFn: ({ id, status }) => updateStudent(id, { status: status }),
    onSuccess: (data) => {
      toast.success(`Student #${data.id} successfully edited`);
      queryClient.invalidateQueries({ queryKey: ['students'] });
    },
    onError: () => toast.error('There was an error while checking in or out'),
  });

  return { checkInOut, isCheckInOut };
}
