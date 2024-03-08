import supabase from './supabase';

export async function getTrack(trackArr) {
  const { data, error } = await supabase
    .from('tracks')
    .select('*')
    .in('id', trackArr);

  if (error) {
    console.error(error);
    throw new Error('Track not found');
  }

  return data;
}
