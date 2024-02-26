import supabase from './supabase';

export async function getStudents() {
  const { data, error } = await supabase.from('students').select('*');

  if (error) {
    console.error(error);
    throw new Error('Cabins could not be loaded');
  }

  return data;
}
