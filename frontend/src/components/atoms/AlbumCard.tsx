import { FC } from 'react';
import { labels } from '@labels';
import { Badge } from '@ui/badge';

interface IAlbumCard {
  imgUrl: string;
  follows: number;
  albumTitle: string;
}

const AlbumCard: FC<IAlbumCard> = (props) => {
  const { imgUrl, follows, albumTitle } = props;

  return (
    <div className='flex flex-col space-y-1 cursor-pointer'>
      <div className='w-[160px] h-[205px] flex flex-col bg-white rounded-md'>
        <div className='w-[160px] h-[170px] rounded-t-md bg_img' style={{ backgroundImage: `url(${imgUrl})` }}>
          {/* to load backgroundImage as lazy */}
          <img src={imgUrl} alt="" className="hidden" loading="lazy" />
        </div>
        <div className='text-xs mx-auto p-2'>
          <Badge className='font-light'>{labels.follows}: {follows}</Badge>
        </div>
      </div>
      <p className='text-sm'>{albumTitle}</p>
    </div>
  )
}

export default AlbumCard;