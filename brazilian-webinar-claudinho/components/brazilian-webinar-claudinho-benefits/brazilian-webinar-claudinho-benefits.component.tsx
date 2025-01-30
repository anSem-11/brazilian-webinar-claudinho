import './brazilian-webinar-claudinho-benefits.scss';

import { Tx } from '@react-root/features/translation/tx.component';

import { buildBem } from '@fx-project-shared/features/style/style-bem/style-bem.util';


const bem = buildBem('brazilian-webinar-claudinho-benefits');

const BASE_IMG_URL = 'https://direct-landings.azureedge.net/assets/img/pages/brazilian-webinar-claudinho/';

const benefitItems = [
  {
    imgSrc: 'item3.svg',
    subtitleKey: 'brazilian-webinar-claudinho-benefits-subtitle1',
    descriptionKey: 'brazilian-webinar-claudinho-benefits-item1',
  },
  {
    imgSrc: 'item2.svg',
    subtitleKey: 'brazilian-webinar-claudinho-benefits-subtitle2',
    descriptionKey: 'brazilian-webinar-claudinho-benefits-item2',
  },
  {
    imgSrc: 'item1.svg',
    subtitleKey: 'brazilian-webinar-claudinho-benefits-subtitle3',
    descriptionKey: 'brazilian-webinar-claudinho-benefits-item3',
  },
  {
    imgSrc: 'item4.svg',
    subtitleKey: 'brazilian-webinar-claudinho-benefits-subtitle4',
    descriptionKey: 'brazilian-webinar-claudinho-benefits-item4',
  },
];

const BenefitItem = ({
  imgSrc,
  subtitleKey,
  descriptionKey,
}: { imgSrc: string; subtitleKey: string; descriptionKey: string }) => (
  <li className={bem('item')}>
    <img
      alt=""
      className={bem('item-img')}
      src={`${BASE_IMG_URL}${imgSrc}`}
    />
    <h4 className={bem('item-subtitle')}>
      <Tx>{subtitleKey}</Tx>
    </h4>
    <p className={bem('item-description')}>
      <Tx>{descriptionKey}</Tx>
    </p>
  </li>
);

export default function BrazilianWebinarClaudinhoBenefits(): JSX.Element {
  return (
    <section className={bem()}>
      <div className="landing-container">
        <h2 className={bem('title')}>
          <Tx>brazilian-webinar-claudinho-benefits-title</Tx>
        </h2>
        <ul className={bem('list')}>
          {benefitItems.map((item, index) => (
            <BenefitItem
              key={index}
              {...item}
            />
          ))}
        </ul>
      </div>
    </section>
  );
}
