import { FC } from 'react';
import { } from '@css/loader.css';

const Loader: FC = () => {
  return (
    <div className='min-h-screen grid place-items-center'>
      <div className='spinner'>
        <div className='r1'></div>
        <div className='r2'></div>
        <div className='r3'></div>
        <div className='r4'></div>
        <div className='r5'></div>
      </div>
    </div>
  )
}

export default Loader;