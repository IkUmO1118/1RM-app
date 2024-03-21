import SignupForm from '../features/authentication/SignupForm';

function Users() {
  return (
    <div className="flex flex-col gap-12">
      <h1 className="text-5xl font-semibold text-gray-800">
        Create a new user
      </h1>

      <SignupForm />
    </div>
  );
}

export default Users;
