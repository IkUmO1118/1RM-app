import supabase from './supabase';

export async function getSelectedTracks(idArr) {
  const { data, error } = await supabase
    .from('tracks')
    .select('*')
    .in('id', idArr);

  if (error) {
    console.error(error);
    throw new Error('Track not found');
  }

  return data;
}
