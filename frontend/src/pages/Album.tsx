import { FC, useEffect } from 'react';
import { PlaylistCard } from '@sections';
import { useParams } from 'react-router-dom';
import { fetchPlaylist } from '@services/requests';
import { useData } from '@context/dataUtils';

const Album: FC = () => {
  const { albumSlug } = useParams();
  const { dispatch, state } = useData();
  const { playList } = state;

  useEffect(() => {
    if (albumSlug) {
      fetchPlaylist(dispatch, albumSlug);
    }
  }, []);

  return (
    <div className='text-white'>
      <PlaylistCard
        songs={playList.songs}
        description={playList.description}
        image={playList.image}
        title={playList.title}
      />
    </div>
  )
}

export default Album;