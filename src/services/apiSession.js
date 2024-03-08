import supabase from './supabase';

export async function getSession(sessionId) {
  const { data, error } = await supabase
    .from('session')
    .select(`*`)
    .eq('id', sessionId);

  if (error) {
    console.error(error);
    throw new Error('Session not found');
  }

  return data;
}
// export async function getSession(sessionId, trackId) {
//   const { data, error } = await supabase
//     .from('session')
//     .select(`*, tracks!public_menus_workout_track${trackId}Id_fkey(*)`)
//     .eq('id', sessionId);

//   if (error) {
//     console.error(error);
//     throw new Error('Session not found');
//   }

//   return data;
// }
