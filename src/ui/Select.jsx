function Select({ options, value, onChange, type, ...props }) {
  return (
    <select
      value={value}
      onChange={onChange}
      id="sortBy"
      className={`rounded-md border border-gray-100 px-6 py-3 text-xl ${
        type === 'white' ? 'bg-gray-0' : 'bg-white'
      } font-medium shadow-sm`}
      {...props}
    >
      {options.map((option) => (
        <option value={option.value} key={option.value}>
          {option.label}
        </option>
      ))}
    </select>
  );
}

export default Select;
