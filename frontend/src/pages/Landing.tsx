import { FC, useEffect } from 'react';
import { Hero } from '@sections';
import { useData } from '@context/dataUtils';
import { fetchData } from '@services/requests';
import { AlbumsCollapse } from '@sections';
import { labels } from '@labels';
import { Divider } from '@atoms';
import { GenreTabs } from '@sections';

const Landing: FC = () => {
  const { dispatch, state } = useData();

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
      <GenreTabs
        albums={[]}
      />
    </>
  )
}

export default Landing;