export type TSongObj = {
  id: string,
  title: string,
  artists: string[],
  genre: {
    key: string,
    label: string,
  },
  likes: number,
  image: string,
  durationInMs: number,
}

export type TAlbum = {
  description: string;
  follows: number;
  id: string;
  image: string;
  slug: string;
  songs: TSongObj[];
  title: string;
}


export type TGenreObj = {
  label: string;
  key: string;
  songs: TSongObj[];
}