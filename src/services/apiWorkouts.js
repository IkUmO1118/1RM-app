import supabase from './supabase';

export async function getWorkouts() {
  const { data, error } = await supabase.from('workouts').select('*');

  if (error) {
    console.error(error);
    throw new Error('Workouts could not be loaded');
  }

  return data;
}

export async function getSelectedWorkouts(workoutsArr) {
  const { data, error } = await supabase
    .from('workouts')
    .select('*')
    .in('id', workoutsArr);

  if (error) {
    console.error(error);
    throw new Error('workouts not found');
  }

  return data;
}

export async function createWorkouts(newWorkout) {
  const { data, error } = await supabase
    .from('workouts')
    .insert([{ ...newWorkout }])
    .select();

  if (error) {
    console.error(error);
    throw new Error('Workouts could not be created');
  }

  return data;
}

export async function deleteWorkouts(id) {
  const { data, error } = await supabase.from('workouts').delete().eq('id', id);

  if (error) {
    console.error(error);
    throw new Error('Workouts could not be deleted');
  }

  return data;
}
