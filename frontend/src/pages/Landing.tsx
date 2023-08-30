import { FC, useEffect } from 'react';
import { Hero } from '@sections';
import { useData, ActionType } from '@context/dataUtils';
import { fetchAlbums, updateSongs } from '@services/requests';
import { AlbumsCollapse } from '@sections';
import { labels } from '@labels';
import { Divider } from '@atoms';
import { GenreTabs } from '@sections';

const Landing: FC = () => {
  const { dispatch, state } = useData();

  const fetchData = async () => {
    try {
      const [topAlbumsData, newAlbumsData] = await Promise.all([
        fetchAlbums(dispatch, ActionType.FETCH_TOP_ALBUMS, '/albums/top'),
        fetchAlbums(dispatch, ActionType.FETCH_NEW_ALBUMS, '/albums/new'),
      ]);

      const combinedAlbums = [...topAlbumsData, ...newAlbumsData];
      updateSongs(dispatch, combinedAlbums);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchData();
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
      <GenreTabs
        albums={[]}
      />
    </>
  )
}

export default Landing;