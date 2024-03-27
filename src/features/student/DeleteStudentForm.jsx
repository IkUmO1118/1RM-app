import ConfirmDelete from '../../ui/ConfirmDelete';
import Modal from '../../ui/Modal';
import { useDeleteStudent } from './useDeleteStudent';

function DeleteStudentForm({ id }) {
  const { isDeleting, deleteStudent } = useDeleteStudent();

  return (
    <div className="flex flex-col gap-8 divide-y divide-gray-300 rounded-md border border-gray-100 bg-white px-10 py-10">
      <p className="text-lg">
        Once a student is deleted, it cannot be restored,
        <span className="font-semibold"> you will lose students data</span>
      </p>
      <div>
        <Modal>
          <Modal.Open opens="delete">
            <button className="mt-9 rounded-md bg-red-700 px-4 py-4 text-xl text-white transition-all duration-200 hover:bg-red-800">
              Delete the student
            </button>
          </Modal.Open>
          <Modal.Window name="delete">
            <ConfirmDelete
              resourceName="student"
              disabled={isDeleting}
              onConfirm={() => deleteStudent(id)}
            />
          </Modal.Window>
        </Modal>
      </div>
    </div>
  );
}

export default DeleteStudentForm;
