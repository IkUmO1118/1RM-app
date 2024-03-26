import UpdateSettingsForm from '../features/settings/UpdateSettingsForm';

function Settings() {
  return (
    <div className="flex flex-col gap-12">
      <h1 className="text-5xl font-semibold text-gray-800">
        Update tracking settings
      </h1>
      <UpdateSettingsForm />
    </div>
  );
}

export default Settings;
