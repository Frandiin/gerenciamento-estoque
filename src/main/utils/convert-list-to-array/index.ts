import type { Values } from 'presentation/atomic-component/atom';

export const convertListToArray = (list: Values[]): (number | string)[] =>
  list.map((item) => item.value);
