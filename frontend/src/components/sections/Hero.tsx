import { FC } from 'react';
import { headset } from '@assets';
import { headline } from '@labels';

const Hero: FC = () => {
  return (
    <section className='p-10 flex justify-center flex-wrap space-x-6 text-center align-middle'>
      <p className='text-white scroll-m-20 pb-2 text-sm sm:text-3xl font-semibold tracking-tight my-auto transition-colors sm:w-[35%]'>
        {headline.heroHeadline}
      </p>
      <img src={headset} alt='Headset' className='h-auto'/>
    </section>
  )
}

export default Hero;