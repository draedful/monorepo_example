import { graph } from '@draedful-private/graph';
import React from 'react';

console.log(graph());

export const react = () => {
  return 'react';
};

export const App = () => {
  return React.createElement('div', null, graph());
};
