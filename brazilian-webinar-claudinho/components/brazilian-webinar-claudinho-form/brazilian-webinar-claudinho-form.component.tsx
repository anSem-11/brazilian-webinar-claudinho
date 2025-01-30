import './brazilian-webinar-claudinho-form.scss';

import { Tx } from '@react-root/features/translation/tx.component';
import UiWebinarsModal from '@react-root/ui/ui-webinars-modal/ui-webinars-modal';

import { buildBem } from '@fx-project-shared/features/style/style-bem/style-bem.util';

const bem = buildBem('brazilian-webinar-claudinho-form');


export default function BrazilianWebinarClaudinhoForm(): JSX.Element {
  return (
    <section className={bem()}>
      <div className="landing-container">
        <h1 className={bem('title')}>
          <Tx>brazilian-webinar-form-title</Tx>
        </h1>
        <div className={bem('form')}>
          <UiWebinarsModal
            defaultCountry="BR"
            eventName="brazilian_form_sended"
            product="Brazilian Webinar Claudinho"
            submitButtonKey="brazilian-webinar-claudinho-hero-btn"
          />
        </div>
      </div>
    </section>
  );
}
