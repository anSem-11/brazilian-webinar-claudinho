import './brazilian-webinar-claudinho-faq.scss';

import { Tx } from '@react-root/features/translation/tx.component';

import { buildBem } from '@fx-project-shared/features/style/style-bem/style-bem.util';


const bem = buildBem('brazilian-webinar-claudinho-faq');

const faqItems = [
  {
    question: 'brazilian-webinar-claudinho-faq-q1',
    answer: 'brazilian-webinar-claudinho-faq-a1',
  },
  {
    question: 'brazilian-webinar-claudinho-faq-q2',
    answer: 'brazilian-webinar-claudinho-faq-a2',
  },
  {
    question: 'brazilian-webinar-claudinho-faq-q3',
    answer: 'brazilian-webinar-claudinho-faq-a3',
  },
  {
    question: 'brazilian-webinar-claudinho-faq-q4',
    answer: 'brazilian-webinar-claudinho-faq-a4',
  },
];

const FaqItem = ({
  question,
  answer,
}: { question: string; answer: string }) => (
  <li className={bem('item')}>
    <p className={bem('item-question')}>
      <Tx>{question}</Tx>
    </p>
    <p className={bem('item-answer')}>
      <Tx>{answer}</Tx>
    </p>
  </li>
);

export default function BrazilianWebinarClaudinhoFaq(): JSX.Element {
  return (
    <section className={bem()}>
      <div className="landing-container">
        <h2 className={bem('title')}>
          <Tx>global_faqs</Tx>
        </h2>
        <p className={bem('description')}>
          <Tx>brazilian-webinar-claudinho-faq-description</Tx>
        </p>
        <ul className={bem('list')}>
          {faqItems.map((item, index) => (
            <FaqItem
              key={index}
              {...item}
            />
          ))}
        </ul>
      </div>
    </section>
  );
}
