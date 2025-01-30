import {
  DAY_IN_HOURS,
  MINUTE,
  ONE_DAY_MS,
  ONE_HOUR_MS,
  ONE_MINUTE_MS,
  ONE_SECOND_MS,
} from '@fx-project-shared/constants/time.constant';

export function calculateDays(timeMs: number): number {
  const difference = Math.floor(timeMs / ONE_DAY_MS);

  return difference < 0 ? 0 : difference;
}

export function calculateHours(timeMs: number): number {
  const difference = Math.floor((timeMs / ONE_HOUR_MS) % DAY_IN_HOURS);

  return difference < 0 ? 0 : difference;
}

export function calculateMinutes(timeMs: number): number {
  const difference = Math.floor((timeMs / ONE_MINUTE_MS) % MINUTE);

  return difference < 0 ? 0 : difference;
}

export function calculateSeconds(timeMs: number): number {
  const difference = Math.floor((timeMs / ONE_SECOND_MS) % MINUTE);

  return difference < 0 ? 0 : difference;
}
