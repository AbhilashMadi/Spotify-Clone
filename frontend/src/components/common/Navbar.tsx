import { FC } from 'react';
import { logo, searchIcon } from '@assets';
import { Button } from '@ui/button';
import { Input } from '@ui/input';
import { btnLabel, placeholder } from '@labels';

const Navbar: FC = () => {
  return (
    <header className='bg-green-500 flex justify-between py-6 px-2 md:px-8 space-x-2'>
      <img src={logo} alt='Qtify Logo' className=''/>
      <div className='flex w-full max-w-sm items-center justify-center'>
        <Input type='text'
          placeholder={placeholder.searchASong}
          className='rounded-e-none md:w-full' />
        <Button type='submit'
          className='rounded-s-none'
          variant='outline'>
          <img src={searchIcon} alt='search icon' className='h-4 w-4' />
        </Button>
      </div>
      <div>
        <Button>
          {btnLabel.feedback}
        </Button>
      </div>
    </header>
  )
}

export default Navbar;