import { FC, useState } from 'react';
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from '@ui/collapsible';
import { Button } from '@ui/button';
import { labels } from '@labels';
import { AlbumCard } from '@atoms';
import { TAlbum } from '@types';
import { AlbumsCarousel } from '@sections';

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
      {!isOpen && <AlbumsCarousel data={data} />}
      <CollapsibleContent className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 xl:grid-cols-7 gap-4 xl:gap-9'>
        {data?.map((album: TAlbum) => {
          return <AlbumCard
            key={album?.id}
            albumTitle={album?.title}
            follows={album?.follows}
            imgUrl={album?.image}
            slug={album?.slug}
          />
        })}
      </CollapsibleContent>
    </Collapsible>
  )
}

export default AlbumsCollapse;