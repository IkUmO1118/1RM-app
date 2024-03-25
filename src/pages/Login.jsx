import LoginForm from '../features/authentication/LoginForm';

function Login() {
  return (
    <main className="grid min-h-screen grid-cols-[48rem] content-center justify-center gap-12 bg-gray-50">
      <h1 className="justify-self-center text-5xl font-semibold">
        Log in to your account
      </h1>
      <LoginForm />
    </main>
  );
}

export default Login;
