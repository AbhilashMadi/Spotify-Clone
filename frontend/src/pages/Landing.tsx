import { FC, useEffect } from 'react';
import { Hero } from '@sections';
import { useData, ActionType } from '@context/dataUtils';
import { fetchTopAlbums } from '@services/requests';
import { AlbumsCollapse } from '@sections';
import { labels } from '@labels';
import { TAlbum } from '@types';

const Landing: FC = () => {
  const { dispatch, state } = useData();

  useEffect(() => {
    fetchTopAlbums(dispatch, ActionType.FETCH_TOP_ALBUMS, '/albums/top');
  }, []);

  return (
    <>
      <Hero />
      <AlbumsCollapse
        title={labels.topAlbums}
        data={state.topAlbums as TAlbum[]} />
    </>
  )
}

export default Landing;