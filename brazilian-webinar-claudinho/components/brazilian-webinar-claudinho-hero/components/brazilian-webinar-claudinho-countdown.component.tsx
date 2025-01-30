/* eslint-disable @typescript-eslint/no-magic-numbers */
import './brazilian-webinar-claudinho-countdown.scss';

import { Tx } from '@react-root/features/translation/tx.component';
import UiIconWebinarsClock from '@react-root/ui/icons/ui-icon-webinars-clock';
import UiIconWebinarsLocation from '@react-root/ui/icons/ui-icon-webinars-location';
import { UiButton } from '@react-ui/button/ui-button.component';

import { buildBem } from '@fx-project-shared/features/style/style-bem/style-bem.util';

import { useCountdown } from './brazilian-webinar-claudinho-countdown.hook';

const bem = buildBem('brazilian-webinar-claudinho-countdown');
const DIGIT_MIN_NUMBER = 2;
const TARGET_DATES = [
  new Date(Date.UTC(2025, 0, 3, 0, 0, 0)),
  new Date(Date.UTC(2025, 0, 10, 0, 0, 0)),
  new Date(Date.UTC(2025, 0, 17, 0, 0, 0)),
  new Date(Date.UTC(2025, 0, 24, 0, 0, 0)),
  new Date(Date.UTC(2025, 0, 31, 0, 0, 0)),
];

type BrazilianWebinarClaudinhoCountdownProps = {
  handleClick: () => void;
};

export default function BrazilianWebinarClaudinhoCountdown(
  { handleClick }: BrazilianWebinarClaudinhoCountdownProps,
): JSX.Element {
  const {
    days,
    hours,
    minutes,
    seconds,
  } = useCountdown(TARGET_DATES);

  const countdownItems = [
    {
      value: days,
      label: 'days',
    },
    {
      value: hours,
      label: 'hours',
    },
    {
      value: minutes,
      label: 'min',
    },
    {
      value: seconds,
      label: 'sec',
    },
  ];

  return (
    <div className={bem()}>
      <div className={bem('wrapper')}>
        <h2 className={bem('subtitle')}>
          <Tx>brazilian-webinar-countdown-title</Tx>
        </h2>
        <div className={bem('time-wrapper')}>
          <UiIconWebinarsClock />
          <p className={bem('time')}><Tx>brazilian-webinar-countdown-time</Tx></p>
          <UiIconWebinarsLocation />
          <p className={bem('location')}><Tx>brazilian-webinar-countdown-location</Tx></p>
          <img
            alt="youtube-icon"
            src="https://direct-landings.azureedge.net/assets/img/pages/brazilian-webinar-claudinho/youtube-icon.svg"
          />
        </div>
        <p className={bem('session')}><Tx>brazilian-webinar-countdown-session</Tx></p>
        <p className={bem('date')}>02/01/2025</p>
        <div className={bem('box')}>
          {countdownItems.map((item, index) => (
            <div
              key={index}
              className={bem('box-item')}
            >
              <div className={bem('box-value')}>{item.value.toString().padStart(DIGIT_MIN_NUMBER, '0')}</div>
              <p className={bem('box-label')}>{item.label}</p>
            </div>
          ))}
        </div>
        <div className={bem('button')}>
          <UiButton
            wide
            className={bem('button-register')}
            handleClick={handleClick}
            size="l"
          >
            <Tx>brazilian-webinar-countdown-btn</Tx>
          </UiButton>
        </div>
      </div>
    </div>
  );
}
