import { FC } from 'react';
import {
  Accordion,
  AccordionTrigger,
  AccordionItem,
  AccordionContent
} from '@ui/accordion';
import { TFaqQestion } from '@types';
import { labels } from '@/constants/labels';
import { randomId } from '@helpers/uniq';

const FaqAccordion: FC = () => {
  const faqQuestion: TFaqQestion[] = [
    {
      question: 'What is Qtify, and how does it work?',
      answer: 'Qtify is a music streaming application that allows you to listen to your favorite music anytime, anywhere. Simply sign up, browse our extensive music library, and start enjoying your favorite tunes',
      value: 'item-1',
    },
    {
      question: 'Is Qtify available on multiple devices?',
      answer: 'Yes! Qtify is available on various devices, including smartphones, tablets, and desktop computers. We offer apps for iOS, Android, and a web version for other devices.',
      value: 'item-2',
    },
    {
      question: 'Can I listen to music offline?',
      answer: 'No! Qtify doesn\'t offers an offline mode. Albums, or playlists are accessible when you\'re connected to the internet, and you can enjoy them without lag.',
      value: 'item-3',
    },
    {
      question: 'Can I download and listen to songs offline?',
      answer: 'Sorry, unfortunately we don\'t provide the service to download any songs.',
      value: 'item-4',
    },
  ];

  return (
    <div className='container'>
      <p className='text-white text-center mb-8 text-2xl font-semibold'>{labels.faqs}</p>
      <Accordion type='single' collapsible className="text-white sm:px-20">
        {faqQuestion.map((obj: TFaqQestion) => {
          return <AccordionItem key={randomId()} value={obj?.value} className='bg-gradient-to-r from-white to-slate-300 mb-4 rounded-md border-[1px] border-white'>
            <AccordionTrigger className='px-4 sm:px-10 bg-primary mb-[2px] rounded-md' >
              {obj?.question}
            </AccordionTrigger>
            <AccordionContent className='px-4 sm:px-10 text-primary'>
              {obj?.answer}
            </AccordionContent>
          </AccordionItem>
        })}
      </Accordion>
    </div>
  )
}

export default FaqAccordion;