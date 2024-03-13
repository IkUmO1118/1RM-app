import supabase from './supabase';

export async function getSelectedTracks(tracksArr) {
  const { data, error } = await supabase
    .from('tracks')
    .select('*')
    .in('id', tracksArr);

  if (error) {
    console.error(error);
    throw new Error('Track not found');
  }

  return data;
}
