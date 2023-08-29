import { TAlbum } from '@/types/types';
import { FC } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { AlbumCard } from '@atoms';
import 'swiper/css';
import 'swiper/css/navigation';
import '../../css/swiper.css'

import { Navigation } from 'swiper/modules';

interface IAlbumsCarousel {
  data: TAlbum[];
}

const AlbumsCarousel: FC<IAlbumsCarousel> = (props) => {
  const { data } = props;

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
        {data.map((album: TAlbum) => {
          return <SwiperSlide key={album?.id}>
            <AlbumCard albumTitle={album?.title}
              follows={album?.follows}
              imgUrl={album?.image} />
          </SwiperSlide>
        })}
      </Swiper>
    </>
  )
}

export default AlbumsCarousel;