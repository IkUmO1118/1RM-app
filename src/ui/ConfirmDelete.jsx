function ConfirmDelete({ resourceName, onConfirm, disabled, onCloseModal }) {
  return (
    <div className="flex w-[40rem] flex-col gap-5">
      <h3 className="text-4xl font-medium">Delete {resourceName}</h3>
      <p className="mb-3 text-2xl">
        Are you sure you want to delete this {resourceName} permanently? This
        action cannot be undone.
      </p>

      <div className="flex justify-end gap-5">
        <button
          className="mt-8 rounded-md border border-gray-200 px-6 py-4 text-2xl text-gray-600 transition-all duration-200 hover:bg-gray-100"
          disabled={disabled}
          onClick={onCloseModal}
        >
          Cancel
        </button>
        <button
          className="mt-8 rounded-md bg-red-700 px-6 py-4 text-2xl text-white transition-all duration-200 hover:bg-red-800"
          disabled={disabled}
          onClick={onConfirm}
        >
          Delete
        </button>
      </div>
    </div>
  );
}

export default ConfirmDelete;
