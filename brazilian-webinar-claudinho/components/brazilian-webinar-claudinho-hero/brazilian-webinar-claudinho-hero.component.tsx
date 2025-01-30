import './brazilian-webinar-claudinho-hero.scss';

import { Tx } from '@react-root/features/translation/tx.component';

import { buildBem } from '@fx-project-shared/features/style/style-bem/style-bem.util';

import BrazilianWebinarClaudinhoRegisterButton from '../brazilian-webinar-claudinho-register-button/brazilian-webinar-claudinho-register-button.component';

import BrazilianWebinarClaudinhoCountdown from './components/brazilian-webinar-claudinho-countdown.component';


const bem = buildBem('brazilian-webinar-claudinho-hero');

interface HeroProps {
  onRegisterClick: () => void;
}

export default function BrazilianWebinarClaudinhoHero({ onRegisterClick }: HeroProps): JSX.Element {
  return (
    <section className={bem()}>
      <div className="landing-container">
        <h1 className={bem('title')}>
          <Tx>brazilian-webinar-claudinho-hero-title</Tx>
        </h1>
        <p className={bem('description')}>
          <Tx>brazilian-webinar-claudinho-hero-description</Tx>
        </p>
        <div
          className={bem('button')}
        >
          <BrazilianWebinarClaudinhoRegisterButton handleClick={onRegisterClick}>
            <Tx>brazilian-webinar-claudinho-hero-btn</Tx>
          </BrazilianWebinarClaudinhoRegisterButton>
        </div>
      </div>
      <BrazilianWebinarClaudinhoCountdown handleClick={onRegisterClick} />
    </section>
  );
}
