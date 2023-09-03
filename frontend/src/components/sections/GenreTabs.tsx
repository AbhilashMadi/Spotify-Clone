import { FC } from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@ui/tabs';
import { TGenreObj } from '@types';
import { keys, labels } from '@labels';
import { AlbumsCarousel } from '@sections';

interface IGenreTabs {
  genres: TGenreObj[];
}

const GenreTabs: FC<IGenreTabs> = (props) => {
  const { genres } = props;

  return (
    <div className='container text-white'>
      <p className='font-semibold text-green-500 text-lg my-8'>{labels.songs}</p>
      <Tabs defaultValue={keys.all} className="">
        <TabsList className='bg-gradient-to-r from-green-500 to-green-600 text-primary mb-4'>
          {genres.map((obj: TGenreObj) => {
            return <TabsTrigger key={obj.key} value={obj.key}>{obj.label}</TabsTrigger>
          })}
        </TabsList>
        {genres.map((obj: TGenreObj) => {
          return <TabsContent key={obj?.key} value={obj.key}>
            <AlbumsCarousel data={obj?.songs.slice(0, 50)} isSong />
          </TabsContent>
        })}
      </Tabs>
    </div>
  )
}

export default GenreTabs;