import React, { Component } from 'react';
import { render } from 'react-dom';
import { Stage, Layer, Image, Text } from 'react-konva';
import Konva from 'konva';
import useImage from 'use-image';

export const Monster = ({ x, y }) => {
  const [image] = useImage('../assets/monster.png');

  return <Image x={x} y={y} image={image} />;
};

export default Monster;
