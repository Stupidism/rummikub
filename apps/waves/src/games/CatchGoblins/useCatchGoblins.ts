import { useState, useRef, useEffect } from 'react';
import { useKey, useRaf, useCounter } from 'rooks';

import { directionKeys, directionByKey, DIRECTION_UP, DIRECTION_DOWN, DIRECTION_LEFT, DIRECTION_RIGHT, reverseDirectionByDirection } from './keyDirections';

const rangeShrink = (val, min, max) => Math.max(min, Math.min(val, max));
const distance = (from, to) => Math.sqrt((from.x - to.x) ** 2 + (from.y - to.y) ** 2);

const useCatchGoblins = ({ width, height, borderWidth, baseSpeed }) => {
  const [heroPos, setHeroPos] = useState(initHeroPos);
  const [monsterPos, setMonsterPos] = useState(getRandomMonsterPos);
  const { value: caughtCount, increment } = useCounter(0);
  const speed = useRef({ dx: 0, dy: 0 });
  const time = useRef(Date.now());
  const renderTime = useRef(Date.now());
  const pressing = useRef(new Set());

  useEffect(() => {
    console.log('interval', Date.now() - renderTime.current);
    renderTime.current = Date.now();
  });

  const onHeroPosChange = (newPos) => {
    if (distance(newPos, monsterPos) > 32) {
      setHeroPos(newPos);
    } else {
      setHeroPos(initHeroPos());
      setMonsterPos(getRandomMonsterPos());
      increment();
    }
  };

  useKey(directionKeys, handleSpeedChange, {
    eventTypes: ["keydown", "keyup"]
  });

  useRaf(updateHeroPos, true);

  return {
    caughtCount,
    heroPos,
    monsterPos,
    fps: rangeShrink(Math.round(1000 / (Date.now() - time.current)), 0, 60),
  };

  function updateHeroPos() {
    const now = Date.now();
    // console.log('now', now - time.current);
    if (speed.current.dx !== 0 || speed.current.dy !== 0 ) {
      const second = (now - time.current) / 1000;
      onHeroPosChange({
        x: rangeShrink(heroPos.x + speed.current.dx * second, borderWidth, width - 2 * borderWidth),
        y: rangeShrink(heroPos.y + speed.current.dy * second, borderWidth, height - 2 * borderWidth),
      });
    }
    time.current = now;
  }

  function handleSpeedChange(e) {
    const isKeyDown = e.type === 'keydown';
    const direction = directionByKey[e.key];
    const reverseDirection = reverseDirectionByDirection[direction];

    if (isKeyDown) {
      pressing.current.add(direction);
    } else {
      pressing.current.delete(direction);
    }

    const modifier = isKeyDown 
      ? 1 
      : (pressing.current.has(reverseDirection) ? -1 : 0);

    switch(direction) {
      case DIRECTION_UP:
        speed.current.dy = -1 * modifier * baseSpeed;
        break;
      case DIRECTION_DOWN:
        speed.current.dy = 1 * modifier * baseSpeed;
        break;
      case DIRECTION_LEFT:
        speed.current.dx = -1 * modifier * baseSpeed;
        break;
      case DIRECTION_RIGHT:
        speed.current.dx = 1 * modifier * baseSpeed;
        break;
    }
  }

  function initHeroPos() {
    return {
      x: width / 2,
      y: height / 2,
    }
  }

  function getRandomMonsterPos() {
    return {
      x: borderWidth + (Math.random() * (width - borderWidth * 3)),
      y: borderWidth + (Math.random() * (height - borderWidth * 3)),
    }
  }
}

export default useCatchGoblins;
