import { TAlbum, TSongObj } from '@/types/types';
import { FC } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { AlbumCard } from '@atoms';
import 'swiper/css';
import 'swiper/css/navigation';
import '@css/swiper_navigation.css';
import { randomId } from '@helpers/uniq';

import { Navigation } from 'swiper/modules';

interface IAlbumsCarousel {
  data: TAlbum[] | TSongObj[];
  isSong?: boolean;
}

const AlbumsCarousel: FC<IAlbumsCarousel> = (props) => {
  const { data, isSong = false } = props;

  return (
    <>
      <Swiper
        navigation
        slidesPerView={7}
        spaceBetween={30}
        modules={[Navigation]}
        breakpoints={{
          380: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          640: {
            slidesPerView: 3,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 4,
            spaceBetween: 40,
          },
          1024: {
            slidesPerView: 7,
            spaceBetween: 30,
          },
        }}
      >
        {data.map((obj: TAlbum | TSongObj) => {
          return <SwiperSlide key={randomId()}>
            <AlbumCard
              isSong={isSong}
              albumTitle={obj?.title}
              follows={isSong ? (obj as TSongObj)?.likes : (obj as TAlbum)?.follows}
              imgUrl={obj?.image}
            />
          </SwiperSlide>
        })}
      </Swiper>
    </>
  )
}

export default AlbumsCarousel;