function CustomTooltip({ active, payload, label }) {
  if (active && payload && payload.length) {
    return (
      <div className="custom-tooltip bg-white p-3">
        <p className="label text-base font-medium">{label}</p>
        <p className="intro text-sm font-medium">{`Vol : ${payload[0].value}`}</p>
      </div>
    );
  }

  return null;
}

export default CustomTooltip;
