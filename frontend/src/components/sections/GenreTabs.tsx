import { FC } from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@ui/tabs';
import { TGenreObj } from '@types';
import { keys, labels } from '@labels';
import { useData } from '@context/dataUtils';
import { filterSongs } from '@helpers/filter';
import { AlbumsCarousel } from '@sections';

const GenreTabs: FC = () => {
  const { state: { songs } } = useData();

  console.log(songs[0]);

  const genres: TGenreObj[] = [
    {
      label: labels.all,
      key: keys.all,
      songs: songs.slice(0, 50),
    },
    {
      label: labels.blues,
      key: keys.blue,
      songs: filterSongs(keys.blue, songs).slice(0,50),
    },
    {
      label: labels.jazz,
      key: keys.jazz,
      songs: filterSongs(keys.jazz, songs).slice(0, 50),
    },
    {
      label: labels.pop,
      key: keys.pop,
      songs: filterSongs(keys.pop, songs).slice(0, 50),
    },
    {
      label: labels.rock,
      key: keys.rock,
      songs: filterSongs(keys.rock, songs).slice(0, 50),
    }
  ]

  return (
    <div className='container text-white '>
      <p className='font-semibold text-green-500 text-lg my-8'>{labels.songs}</p>
      <Tabs defaultValue={keys.all} className="">
        <TabsList className='bg-gradient-to-r from-green-500 to-green-600 text-primary mb-4'>
          {genres.map((obj: TGenreObj) => {
            return <TabsTrigger key={obj.key} value={obj.key}>{obj.label}</TabsTrigger>
          })}
        </TabsList>
        {genres.map((obj: TGenreObj) => {
          return <TabsContent key={obj?.key} value={obj.key}>
            <AlbumsCarousel data={obj?.songs} isSong />
          </TabsContent>
        })}
      </Tabs>
    </div>
  )
}

export default GenreTabs;