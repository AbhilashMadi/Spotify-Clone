import { FC, useEffect } from 'react';
import { FaqAccordion, Hero } from '@sections';
import { useData } from '@context/dataUtils';
import { fetchData } from '@services/requests';
import { AlbumsCollapse } from '@sections';
import { labels } from '@labels';
import { Divider } from '@atoms';
import { GenreTabs } from '@sections';
import { keys } from '@labels';
import { filterSongs } from '@helpers/filter';
import { TGenreObj } from '@types';

const Landing: FC = () => {
  const { dispatch, state } = useData();
  const { songs } = state;

  const genres: TGenreObj[] = [
    {
      label: labels.all,
      key: keys.all,
      songs: songs,
    },
    {
      label: labels.blues,
      key: keys.blue,
      songs: filterSongs(keys.blue, songs),
    },
    {
      label: labels.jazz,
      key: keys.jazz,
      songs: filterSongs(keys.jazz, songs),
    },
    {
      label: labels.pop,
      key: keys.pop,
      songs: filterSongs(keys.pop, songs),
    },
    {
      label: labels.rock,
      key: keys.rock,
      songs: filterSongs(keys.rock, songs),
    }
  ]

  useEffect(() => {
    fetchData(dispatch);
  }, []);

  return (
    <>
      <Hero />
      <AlbumsCollapse
        title={labels.topAlbums}
        data={state.topAlbums} />
      <Divider />
      <AlbumsCollapse
        title={labels.newAlbums}
        data={state.newAlbums} />
      <Divider />
      <GenreTabs genres={genres} />
      <Divider />
      <FaqAccordion />
    </>
  )
}

export default Landing;