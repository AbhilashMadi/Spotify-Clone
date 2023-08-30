import { TSongObj } from '@types';

export function filterSongs(key: string, songs: TSongObj[]): TSongObj[] {
  return songs.filter((songObj: TSongObj) => songObj.genre.key === key);
}