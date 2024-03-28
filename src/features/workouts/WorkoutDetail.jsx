function WorkoutDetail({ awareness, onCloseModal }) {
  return (
    <div className="max-w-[260px] p-8">
      <span>{awareness}</span>
      <button onClick={onCloseModal}></button>
    </div>
  );
}

export default WorkoutDetail;
