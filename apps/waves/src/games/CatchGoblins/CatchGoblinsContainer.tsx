import React from 'react';
import CatchGoblins from './CatchGoblins';
import useCatchGoblins from './useCatchGoblins';

const CatchGoblinsContainer = props => {
  const hookData = useCatchGoblins(props);

  return <CatchGoblins {...props} {...hookData} />;
};

CatchGoblinsContainer.defaultProps = {
  width: 512,
  height: 480,
  borderWidth: 32,
  baseSpeed: 256,
};

export default CatchGoblinsContainer;
