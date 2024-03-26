import { useSettings } from './useSettings';
import { useUpdateSetting } from './useUpdateSetting';

function UpdateSettingsForm() {
  const { updateSetting, isUpdating } = useUpdateSetting();
  const { settings: { maxStudentLength, membershipPrice } = {}, isLoading } =
    useSettings();

  function handleUpdate(e, field) {
    const { value } = e.target;

    if (!value) return;
    updateSetting({ [field]: value });
  }

  return (
    <form className="rounded-md border border-gray-100 bg-white px-10 py-10">
      <div className="grid grid-cols-[24rem_1fr_1.2fr] gap-9 border-b border-gray-100 pb-5">
        <label
          htmlFor="max-students"
          className="col-span-1 flex items-center text-2xl"
        >
          Maximum students
        </label>
        <input
          id="max-students"
          type="number"
          defaultValue={maxStudentLength}
          disabled={isLoading || isUpdating}
          className="border-1 col-span-1 rounded-md border-gray-300  px-5 py-4 text-xl disabled:bg-gray-200"
          onBlur={(e) => handleUpdate(e, 'maxStudentLength')}
        />
      </div>

      <div className="grid grid-cols-[24rem_1fr_1.2fr] gap-9 border-b border-gray-100 py-5 ">
        <label
          className="col-span-1 flex items-center text-2xl"
          htmlFor="membership-price"
        >
          Membership price
        </label>
        <input
          id="membership-price"
          type="number"
          defaultValue={membershipPrice}
          disabled={isLoading || isUpdating}
          className="border-1 col-span-1 rounded-md border-gray-300 px-5 py-4 text-xl disabled:bg-gray-200"
          onBlur={(e) => handleUpdate(e, 'membershipPrice')}
        />
      </div>
    </form>
  );
}

export default UpdateSettingsForm;
