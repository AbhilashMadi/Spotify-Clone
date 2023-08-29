import { FC, useEffect } from 'react';
import { Hero } from '@sections';
import { AlbumCard } from '@atoms';
import { useData, ActionType } from '@context/dataUtils';
import { fetchTopAlbums } from '@services/requests';

const Landing: FC = () => {
  const { dispatch, state } = useData();

  useEffect(() => {
    fetchTopAlbums(dispatch, ActionType.FETCH_TOP_ALBUMS, '/albums/top');
  }, []);

  console.log(state);

  return (
    <>
      <Hero />
      {/* <AlbumCard /> */}
    </>
  )
}

export default Landing;