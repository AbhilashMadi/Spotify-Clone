import { TSongObj } from '@types';

export function filterSongs(key: string, songs: TSongObj[]): TSongObj[] {
  return songs.filter((songObj: TSongObj) => songObj.genre.key === key);
}

export function formatDuration(songs: TSongObj[]): string {
  const durationInMs: number = songs.reduce((duration: number, song: TSongObj) => duration + song.durationInMs, 0);

  const hours = Math.floor(durationInMs / (1000 * 60 * 60));
  const minutes = Math.floor((durationInMs % (1000 * 60 * 60)) / (1000 * 60));

  return `${hours} hr ${minutes} min`;
}

export function formatLikes(songs: TSongObj[]): string {
  const likes: number = songs.reduce((likes: number, song: TSongObj) => likes + song.likes, 0);
  
  if (likes < 1000) {
    return `${likes} likes`;
  } else if (likes < 1000000) {
    const roundedLikes = Math.round(likes / 1000);
    return `${roundedLikes}k likes`;
  } else {
    const roundedLikes = Math.round(likes / 100000) / 10;
    return `${roundedLikes}M likes`;
  }
}