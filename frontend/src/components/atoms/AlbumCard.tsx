import { FC } from 'react';
import { labels } from '@labels';
import { Badge } from '@ui/badge';
import { useData } from '@context/dataUtils';

interface IAlbumCard {
  imgUrl: string;
  follows: number;
  albumTitle: string;
  isSong?: boolean;
  slug?: string;
}

const AlbumCard: FC<IAlbumCard> = (props) => {
  const { imgUrl, follows, albumTitle, isSong = false, slug } = props;
  const { navigateToRoute } = useData();

  const handleNavigate = (): void => {
    navigateToRoute(`/album/${slug}`)
  }

  return (
    <div className='flex flex-col space-y-1 cursor-pointer' onClick={handleNavigate}>
      <div className='w-[160px] h-[205px] flex flex-col bg-white rounded-md'>
        <div className='w-[160px] h-[170px] rounded-t-md bg_img' style={{ backgroundImage: `url(${imgUrl})` }}>
          {/* to load backgroundImage as lazy */}
          <img src={imgUrl} alt="" className="hidden" loading="lazy" />
        </div>
        <div className='text-xs mx-auto p-2'>
          <Badge className='font-light'>{isSong ? labels.likes : labels.follows}: {follows}</Badge>
        </div>
      </div>
      <p className='text-sm'>{albumTitle}</p>
    </div>
  )
}

export default AlbumCard;