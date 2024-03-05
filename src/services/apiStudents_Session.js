import supabase from './supabase';

export async function getStudentsSession(id) {
  let { data, error } = await supabase
    .from('students_session')
    .select('*, session(*)')
    .eq('studentId', id);

  if (error) {
    console.error(error);
    throw new Error('Student_Session not found');
  }

  return data;
}
