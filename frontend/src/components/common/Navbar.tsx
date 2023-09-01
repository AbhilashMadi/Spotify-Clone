import { FC, useState } from 'react';
import { logo } from '@assets';
import { Button } from '@ui/button';
import { Input } from '@ui/input';
import { placeholder } from '@labels';
import { Paths } from '@routes';
import { useData } from '@context/dataUtils';
import { FeedbackForm } from '@forms';
import { Search } from 'lucide-react';

const Navbar: FC = () => {
  const [openModal, setOpenModal] = useState<boolean>(false);
  const { navigateToRoute } = useData();

  const handleModal = (): void => {
    setOpenModal(!openModal);
  }

  return (
    <header className='bg-gradient-to-r from-green-600 to-green-400 flex justify-between py-6 px-2 md:px-8 space-x-2'>
      <img src={logo} alt='Qtify Logo' className='h-full' onClick={() => navigateToRoute(Paths.LANDING)} />
      <div className='flex w-full max-w-sm items-center justify-center'>
        <Input type='text'
          placeholder={placeholder.searchASong}
          className='rounded-e-none md:w-full' />
        <Button type='submit'
          className='rounded-s-none'
          variant='outline'>
          <Search className='h-4 l-4' />
        </Button>
      </div>
      <div>
        <FeedbackForm openModal={openModal} handleModal={handleModal} />
      </div>
    </header>
  )
}

export default Navbar;