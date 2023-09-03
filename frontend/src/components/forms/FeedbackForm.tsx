import { FC, useState, ChangeEvent, FormEvent } from 'react';
import { Button } from '@ui/button';
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from '@ui/dialog';
import { btnLabel, labels } from '@/constants/labels';
import { Input } from '@ui/input';
import { Textarea } from '@ui/textarea';
import { useToast } from '@ui/use-toast';

interface IFeedbackForm {
  openModal: boolean;
  handleModal: () => void;
}

const FeedbackForm: FC<IFeedbackForm> = (props) => {
  const { openModal = false, handleModal } = props;
  const { toast } = useToast();
  const [formValues, setFormValues] = useState({
    fullName: "",
    emailId: "",
    subject: "",
    message: "",
  });

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormValues((pre) => ({ ...pre, [name]: value }))
  }

  const handleTextAreaChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormValues((pre) => ({ ...pre, [name]: value }))
  }

  const handleformSubmit = (e: FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    setFormValues({
      fullName: "",
      emailId: "",
      subject: "",
      message: "",
    })
    // console.log(formValues);
    if (Object.values(formValues).every((val: string) => val !== "")) {
      toast({
        title: `${labels.feedbackTitle} ${formValues?.fullName} 🤩🤝`,
        description: labels.feedbackDescription,
      })
    } else {
      toast({
        description: labels.noFeedbackProvided,
      })
    }
  }

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
        <form className='flex flex-col gap-4' onSubmit={handleformSubmit}>
          <Input placeholder='Full Name' name="fullName" onChange={handleInputChange} />
          <Input placeholder='Email ID' name="emailId" onChange={handleInputChange} />
          <Input placeholder='Subject' name="subject" onChange={handleInputChange} />
          <Textarea placeholder='Message' name="message" onChange={handleTextAreaChange} />
          <DialogFooter>
            <Button type='submit' className='bg-green-500' onClick={handleModal}>{labels.submit}</Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  )
}

export default FeedbackForm;