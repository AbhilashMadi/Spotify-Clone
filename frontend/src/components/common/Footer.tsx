import { headline } from '@labels';
import { FC } from 'react';

const Footer: FC = () => {
  return (
    <p className='text-sm bg-gradient-to-r from-green-600 to-green-400 p-5 text-center mt-8'>
      {headline.footerCopyright} &copy;{new Date().getFullYear()}
    </p>
  )
}

export default Footer;