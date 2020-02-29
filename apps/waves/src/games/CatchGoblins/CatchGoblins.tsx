import React from 'react';
import { Stage, Layer, Image, Text } from 'react-konva';
import useImage from 'use-image';

import Hero from './Hero';
import Monster from './Monster';

export const CatchGoblins = ({ width, height, heroPos, monsterPos, caughtCount, borderWidth, fps }) => {
  const [backgroundImage] = useImage('assets/background.png');

  return (
    <Stage width={width} height={height}>
      <Layer>
        <Image image={backgroundImage} />
        <Text 
          x={borderWidth} 
          y={borderWidth} 
          text={`Goblins Caught: ${caughtCount}`}
          fill="white"
          fontSize={24}
          fontFamily="Helvetica"
        />
        <Text 
          x={width - 120} 
          y={borderWidth} 
          text={`FPS: ${fps}`}
          fill="white"
          fontSize={24}
          align="right"
          fontFamily="Helvetica"
        />
        <Monster {...monsterPos} />
      </Layer>
      <Layer>
        <Hero {...heroPos} />
      </Layer>
    </Stage>
  );
};

export default CatchGoblins;
