function WorkoutDetail({ workout, onCloseModal }) {
  const {
    id: workoutId,
    workoutName,
    image,
    awareness,
    part,
    equipment,
  } = workout;
  return (
    <div className="max-w-[260px] p-8">
      <span>{awareness}</span>
      <button onClick={onCloseModal}></button>
    </div>
  );
}

export default WorkoutDetail;
