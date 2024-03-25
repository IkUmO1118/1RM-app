import { useState } from 'react';
import SpinnerMini from '../../ui/SpinnerMini';
import { useLogin } from './useLogin';

// useLoginのisLoadingが機能しない
function LoginForm() {
  const [email, setEmail] = useState('admin@example.com');
  const [password, setPassword] = useState('pass1234');
  const { login, isLoading } = useLogin();

  function handleSubmit(e) {
    e.preventDefault();
    if (!email || !password) return;
    login(
      { email, password },
      {
        onSettled: () => {
          setEmail('');
          setPassword('');
        },
      },
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col gap-10 rounded-xl border-gray-100 bg-white px-16 py-10"
    >
      <div className="flex flex-col gap-4">
        <label htmlFor="email" className="text-xl font-medium">
          Email Address
        </label>
        <input
          type="email"
          id="email"
          className="border-1 rounded-md border-gray-300 bg-gray-50 px-5 py-4 text-xl shadow-sm"
          // This makes this form better for password managers
          autoComplete="username"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          // disabled={isLoading}
        />
      </div>

      <div className="flex flex-col gap-4">
        <label htmlFor="password" className="text-xl font-medium">
          Password
        </label>
        <input
          type="password"
          id="password"
          className="border-1 rounded-md border-gray-300 bg-gray-50 px-5 py-4 text-xl shadow-sm"
          autoComplete="current-password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          // disabled={isLoading}
        />
      </div>
      <button
        // disabled={isLoading}
        className="flex items-center justify-center rounded-md bg-emerald-700 px-10 py-5 text-2xl text-gray-50 shadow-sm transition-all duration-200 hover:bg-emerald-800"
      >
        {/* {!isLoading ? 'Log in' : <SpinnerMini />} */}
        Log in
      </button>
    </form>
  );
}

export default LoginForm;
