import { FC } from 'react';
import { Button } from '@ui/button';
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from '@ui/dialog';
import { btnLabel, labels } from '@/constants/labels';
import { Input } from '@ui/input';
import { Textarea } from '@ui/textarea';

interface IFeedbackForm {
  openModal: boolean;
  handleModal: () => void;
}

const FeedbackForm: FC<IFeedbackForm> = (props) => {
  const { openModal = false, handleModal } = props;

  return (
    <Dialog open={openModal} onOpenChange={handleModal}>
      <DialogTrigger asChild>
        <Button variant='default' onClick={handleModal}>{btnLabel.feedback}</Button>
      </DialogTrigger>
      <DialogContent className='sm:max-w-[420px]'>
        <DialogHeader>
          <DialogTitle>{labels.feedbackForm}</DialogTitle>
          <DialogDescription>
            {labels.pleaseProvideFeedback}
          </DialogDescription>
        </DialogHeader>
        <form className='flex flex-col gap-4'>
          <Input placeholder='Full Name' />
          <Input placeholder='Email ID' />
          <Input placeholder='Subject' />
          <Textarea placeholder='Message'/>
          <DialogFooter>
            <Button type='submit' className='bg-green-500' onClick={handleModal}>{labels.submit}</Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  )
}

export default FeedbackForm;