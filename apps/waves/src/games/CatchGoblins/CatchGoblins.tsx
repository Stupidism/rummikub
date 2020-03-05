import React from 'react';
import { Stage, Layer, Image, Text } from 'react-konva';

import Hero from './Hero';
import Monster from './Monster';

export const CatchGoblins = ({
  width,
  height,
  heroPos,
  monsterPos,
  caughtCount,
  borderWidth,
  layerRef,
  backgroundImage,
}) => (
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
      <Monster {...monsterPos} />
    </Layer>
    <Layer ref={layerRef}>
      <Hero {...heroPos} />
    </Layer>
  </Stage>
);

export default CatchGoblins;
