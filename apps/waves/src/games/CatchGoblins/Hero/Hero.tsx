import React, { Component } from 'react';
import { render } from 'react-dom';
import { Stage, Layer, Image, Text } from 'react-konva';
import Konva from 'konva';
import useImage from 'use-image';

export const Hero = ({ x, y }) => {
  const [image] = useImage('../assets/hero.png');

  return (
    <Image x={x} y={y} image={image} />
  );
};

export default Hero;
