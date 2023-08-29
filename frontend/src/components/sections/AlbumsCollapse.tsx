import { FC, useState } from 'react';
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from '@ui/collapsible';
import { Button } from '@ui/button';
import { labels } from '@labels';
import { AlbumCard } from '@atoms';
import { TAlbum } from '@types';
import { AlbumCarousel } from '@sections';

interface IAlbumsCollapse {
  title: string;
  data: TAlbum[];
}

const AlbumsCollapse: FC<IAlbumsCollapse> = (props) => {
  const { data, title } = props;
  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <Collapsible
      open={isOpen}
      onOpenChange={setIsOpen}
      className='text-white container'
    >
      <div className='flex justify-between mb-6'>
        <h4 className='font-semibold text-green-500 text-lg'>
          {title}
        </h4>
        <CollapsibleTrigger asChild>
          <Button variant='secondary' size='sm'>
            {isOpen ? labels.collapse : labels.showAll}
          </Button>
        </CollapsibleTrigger>
      </div>
      {!isOpen && <AlbumCarousel data={data} />}
      <CollapsibleContent className='flex flex-wrap gap-9'>
        {data?.map((album: TAlbum) => {
          return <AlbumCard
            key={album?.id}
            albumTitle={album?.title}
            follows={album?.follows}
            imgUrl={album?.image} />
        })}
      </CollapsibleContent>
    </Collapsible>
  )
}

export default AlbumsCollapse;