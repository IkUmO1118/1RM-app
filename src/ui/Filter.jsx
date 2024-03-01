import { useSearchParams } from 'react-router-dom';

function Filter({ filterField, options }) {
  const [searchParams, setSearchParams] = useSearchParams();
  const currentFilter = searchParams.get(filterField) || options.at(0).value;

  function handleClick(value) {
    searchParams.set(filterField, value);
    if (searchParams.get('page')) searchParams.set('page', 1);

    setSearchParams(searchParams);
  }

  return (
    <div className="flex gap-1 rounded-sm border border-gray-100 bg-white p-1 shadow-sm">
      {options.map((option) => (
        <button
          className={`rounded-md border-none px-4 py-2 text-xl font-medium transition duration-300 hover:bg-green-600 hover:text-green-50 ${option.value === currentFilter ? 'bg-green-600 text-green-50' : ''}`}
          key={option.value}
          onClick={() => handleClick(option.value)}
          disabled={option.value === currentFilter}
        >
          {option.label}
        </button>
      ))}
    </div>
  );
}

export default Filter;
