import { useEffect, useState } from 'react';

import { isBrowser } from '@fx-project-shared/utils/is-browser.util';

import {
  calculateDays,
  calculateHours,
  calculateMinutes,
  calculateSeconds,
} from './brazilian-webinar-claudinho-countdown.util';

type CountDown = {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
};

export function useCountdown(targetDates: Date[]): CountDown {
  const initalDateNow = new Date();
  const targetDate = getCurrentTargetDate(targetDates);
  const initalDifference = targetDate.getTime() - initalDateNow.getTime();
  const initialTimeLeft = {
    days: calculateDays(initalDifference),
    hours: calculateHours(initalDifference),
    minutes: calculateMinutes(initalDifference),
    seconds: 0,
  };

  const [ timeLeft, setTimeLeft ] = useState(initialTimeLeft);

  const calculateTimeLeft = () => {
    const now = new Date();
    const difference = targetDate.getTime() - now.getTime();

    if (difference <= 0) {
      return {
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0,
      };
    }

    return {
      days: calculateDays(difference),
      hours: calculateHours(difference),
      minutes: calculateMinutes(difference),
      seconds: calculateSeconds(difference),
    };
  };

  function getCurrentTargetDate(targetDatesOptions: Date[]): Date {
    let targetDate = targetDatesOptions[0];

    for (let i = 0; i < targetDatesOptions.length; i++) {
      if (targetDatesOptions[i] > initalDateNow) {
        targetDate = targetDatesOptions[i];

        break;
      }
    }

    return targetDate;
  }

  useEffect(() => {
    if (!isBrowser) {
      return;
    }

    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, [ targetDate ]);

  return timeLeft;
}
