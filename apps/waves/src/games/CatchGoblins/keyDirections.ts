export const DIRECTION_UP = Symbol('up');
export const DIRECTION_DOWN = Symbol('down');
export const DIRECTION_LEFT = Symbol('left');
export const DIRECTION_RIGHT = Symbol('right');

export const directionByKey = {
  w: DIRECTION_UP,
  W: DIRECTION_UP,
  ArrowUp: DIRECTION_UP,
  s: DIRECTION_DOWN,
  S: DIRECTION_DOWN,
  ArrowDown: DIRECTION_DOWN,
  a: DIRECTION_LEFT,
  A: DIRECTION_LEFT,
  ArrowLeft: DIRECTION_LEFT,
  d: DIRECTION_RIGHT,
  D: DIRECTION_RIGHT,
  ArrowRight: DIRECTION_RIGHT,
};

export const directionKeys = Object.keys(directionByKey);

export const reverseDirectionByDirection = {
  [DIRECTION_UP]: DIRECTION_DOWN,
  [DIRECTION_DOWN]: DIRECTION_UP,
  [DIRECTION_LEFT]: DIRECTION_RIGHT,
  [DIRECTION_RIGHT]: DIRECTION_LEFT,
};
