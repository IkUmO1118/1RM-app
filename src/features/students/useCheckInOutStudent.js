import { useMutation, useQueryClient } from '@tanstack/react-query';
import { toast } from 'react-hot-toast';
import { updateStudentStatus } from '../../services/apiStudents';

export function useCheckInOutStudent() {
  const queryClient = useQueryClient();

  const { mutate: checkInOut, isLoading: isCheckInOut } = useMutation({
    mutationFn: ({ id, status }) => updateStudentStatus(id, { status: status }),
    onSuccess: (data) => {
      toast.success(`Student #${data.id} successfully check-in-out.`);
      queryClient.invalidateQueries({ queryKey: ['students'] });
    },
    onError: () => toast.error('There was an error while checking in or out'),
  });

  return { checkInOut, isCheckInOut };
}
