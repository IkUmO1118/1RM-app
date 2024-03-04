import supabase from './supabase';

export async function getStudents({ filter }) {
  let query = supabase.from('students').select('*');

  if (filter) query = query[filter.method || 'eq'](filter.field, filter.value);

  const { data, error } = await query;
  if (error) {
    console.error(error);
    throw new Error('Students could not be loaded');
  }

  return data;
}

export async function getStudent(id) {
  const { data, error } = await supabase
    .from('students')
    .select('*')
    .eq('id', id)
    .single();

  if (error) {
    console.error(error);
    throw new Error('Student not found');
  }

  return data;
}

export async function updateStudent(id, obj) {
  console.log(obj);
  const { data, error } = await supabase
    .from('students')
    .update(obj)
    .eq('id', id)
    .select()
    .single();

  if (error) {
    console.error(error);
    throw new Error('Student could not be updated');
  }

  return data;
}
