import { getTrack } from '../../services/apiTracks';

export async function SessionDay(idArr) {
  try {
    const data = await getTrack(idArr);
    return data;
  } catch (error) {
    console.error(error);
    throw error;
  }
}
