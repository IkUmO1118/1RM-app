import { useMoveBack } from '../hooks/useMoveBack';

function PageNotFound() {
  const moveBack = useMoveBack();
  return (
    <main className="flex h-screen w-full flex-col items-center justify-center gap-12">
      <h1 className="bg-gradient-to-b from-teal-400 to-teal-900 bg-clip-text text-[15rem] font-extrabold leading-none text-transparent">
        404
      </h1>
      <div className="flex flex-col items-center">
        <p className="mb-8 text-5xl font-bold text-teal-950">
          Opps... Something went wrong
        </p>
        <p className="text-2xl font-bold text-gray-600">
          The page you are looking for could not be found!
        </p>
      </div>
      <button
        onClick={moveBack}
        className="rounded-lg bg-teal-600 px-6 py-3 text-xl font-semibold text-teal-50"
      >
        &larr; Go back
      </button>
    </main>
  );
}

export default PageNotFound;