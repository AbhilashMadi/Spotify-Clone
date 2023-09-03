import { FC } from 'react';
import '@css/loader.css';

const Loader: FC = () => {
  return (
    <div className='at_page_center'>
      <div className='spinner'>
        {Array.from({ length: 5 }).map((_, index: number): JSX.Element => {
          return <div key={index} className={`r${index + 1}`} />
        })}
      </div>
    </div>
  )
}

export default Loader;