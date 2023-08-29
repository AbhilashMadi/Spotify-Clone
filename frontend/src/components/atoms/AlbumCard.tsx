import { FC } from 'react';
import { labels } from '@labels';

interface IAlbumCard {
  imgUrl: string;
  follows: string;
  albumTitle: string;
}

const AlbumCard: FC<IAlbumCard> = (props) => {
  const { imgUrl, follows, albumTitle } = props;

  return (
    <>
      <div className='w-[160px] h-[205px] flex flex-col'>
        <div className={`w-[160px] h-[170px] bg-white bg-[url(${imgUrl})]`} />
        <div className='rounded-full bg-background'>
          {follows} {labels.follows}
        </div>
      </div>
      {albumTitle}
    </>
  )
}

export default AlbumCard;