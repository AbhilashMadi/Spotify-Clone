import { FC } from 'react';
import {
  Accordion,
  AccordionTrigger,
  AccordionItem,
  AccordionContent
} from '@ui/accordion';
import { TFaqQestion } from '@types';

const FaqAccordion: FC = () => {
  const faqQuestion: TFaqQestion[] = [
    {
      question: 'Is it accessible?',
      answer: 'Yes. It adheres to the WAI-ARIA design pattern.',
      value: 'item-1',
    },
    {
      question: 'Is it accessible?',
      answer: 'Yes. It adheres to the WAI-ARIA design pattern.',
      value: 'item-2',
    },
    {
      question: 'Is it accessible?',
      answer: 'Yes. It adheres to the WAI-ARIA design pattern.',
      value: 'item-3',
    },
    {
      question: 'Is it accessible?',
      answer: 'Yes. It adheres to the WAI-ARIA design pattern.',
      value: 'item-4',
    },
  ]
  return (
    <div className='container'>
      <Accordion type='single' collapsible className="text-white sm:px-20">
        {faqQuestion.map((obj: TFaqQestion) => {
          return <AccordionItem value={obj?.value} className='bg-white mb-4 rounded-md border-[1px] border-white'>
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