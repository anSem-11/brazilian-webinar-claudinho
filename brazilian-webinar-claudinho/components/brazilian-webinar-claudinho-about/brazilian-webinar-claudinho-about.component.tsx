import './brazilian-webinar-claudinho-about.scss';

import { Tx } from '@react-root/features/translation/tx.component';

import { buildBem } from '@fx-project-shared/features/style/style-bem/style-bem.util';

import BrazilianWebinarClaudinhoRegisterButton from '../brazilian-webinar-claudinho-register-button/brazilian-webinar-claudinho-register-button.component';


const bem = buildBem('brazilian-webinar-claudinho-about');
interface AboutProps {
  onRegisterClick: () => void;
}

export default function BrazilianWebinarClaudinhoAbout({ onRegisterClick }: AboutProps): JSX.Element {
  return (
    <section className={bem()}>
      <div className="landing-container">
        <h3 className={bem('title')}>
          <Tx>brazilian-webinar-claudinho-about-description</Tx>
        </h3>
        <div className={bem('photo')} />
        <p className={bem('name')}>
          <Tx>brazilian-webinar-claudinho-about-name</Tx>
        </p>
        <div
          className={bem('button')}
        >
          <BrazilianWebinarClaudinhoRegisterButton handleClick={onRegisterClick}>
            <Tx>brazilian-webinar-claudinho-about-btn</Tx>
          </BrazilianWebinarClaudinhoRegisterButton>
        </div>
      </div>
    </section>
  );
}
