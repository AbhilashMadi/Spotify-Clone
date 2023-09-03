import { FC } from 'react';
import { Button } from '@ui/button';
import { Shuffle, ListMusic } from 'lucide-react';
import { TSongObj } from '@/types/types';
import { btnLabel, labels } from '@/constants/labels';
import { formatDuration, formatLikes } from '@helpers/helpers';

interface IPlaylistCard {
  image: string;
  songs: TSongObj[];
  description: string;
  title: string;
}

const PlaylistCard: FC<IPlaylistCard> = (props) => {
  const { title, description, songs, image } = props;

  return (
    <section className='container md:my-8 flex bg_img p-8 md:rounded-md shadow-md relative'
      style={{ backgroundImage: `url(${image})` }}>
      <div className='z-[10] grid grid-cols-1 md:grid-cols-2 gap-4 md:w-2/3 mx-auto'>
        <div className='bg_img rounded-lg w-auto h-[235px] shadow-md hover:shadow-lg' style={{ backgroundImage: `url(${image})` }} />
        <div>
          <div>
            <p className='text-4xl font-semibold'>{title}</p>
            <p className='font-light mt-4'>{description}</p>
            <p className='flex gap-2 font-light mt-2'>
              <span>{songs.length} {labels.songs}</span>•
              <span>{formatDuration(songs)}</span>•
              <span>{formatLikes(songs)}</span>
            </p>
          </div>
          <div className='inline-flex gap-4 mt-4'>
            <Button className='bg-green-500 hover:bg-green-700 inline-flex gap-2' size={'sm'}>
              <Shuffle size={16} />
              {btnLabel.shuffle}
            </Button>
            <Button className='bg-none border border-green-500 text-green-500 inline-flex gap-2' size={'sm'}>
              <ListMusic size={16} />
              {btnLabel.addToLibrary}
            </Button>
          </div>
        </div>
      </div>
      <div className='bg-gradient-to-t from-black to-transparent w-full h-full absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-[45%]' />
    </section>
  )
}

export default PlaylistCard;