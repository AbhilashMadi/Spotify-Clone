import { FC } from 'react';
import { Button } from '@ui/button';
import { labels, btnLabel } from '@labels';
import { useData } from '@context/dataUtils';
import { Paths } from '@routes';

const NotFoundPage: FC = () => {
  const { navigateToRoute } = useData();

  return (
    <div className='at_page_center'>
      <div className='flex justify-center align-middle flex-col gap-4 text-white'>
        <p>{labels.pageNotFound}</p>
        <Button
          onClick={() => navigateToRoute(Paths.LANDING)}
        >{btnLabel.backToHome}</Button>
      </div>
    </div>
  )
}

export default NotFoundPage;