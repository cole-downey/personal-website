// credit to Josh W Comeau for this
// www.joshwcomeau.com

/* eslint-disable */

import React from 'react';

import { range, generateId } from '../utils';
import useIncrementingNumber from './use-incrementing-number.hook';

const gradientColors = [
  '#3f76ff', // blue
  '#975ca6', // purple
  '#ff3d3a', // red
  '#f3aa60', // orange
  '#faff7c', // yellow
  '#7cff89', // lime
  '#50dbff', // aqua
];
const paletteSize = gradientColors.length;
const WINDOW_SIZE = 3;

// During compile-time build, we have to assume no browser support.
// On mount, we'll check if `CSS.registerProperty` exists
const hasBrowserSupport =
  typeof window !== 'undefined'
    ? typeof window.CSS.registerProperty === 'function'
    : false;

const getColorPropName = (id, index) => `--gradient-color-${id}-${index}`;

const useAnimGradient = ({ intervalDelay = 2000 }) => {
  const prefersReducedMotion =
    typeof window === 'undefined'
      ? true
      : window.matchMedia('(prefers-reduced-motion: no-preference)');

  const isEnabled = hasBrowserSupport && prefersReducedMotion.matches;

  const { current: uniqueId } = React.useRef(generateId());

  // Register all custom properties
  React.useEffect(() => {
    if (!isEnabled) {
      return;
    }

    range(0, WINDOW_SIZE).map(index => {
      const name = getColorPropName(uniqueId, index);
      const initialValue = gradientColors[index];

      CSS.registerProperty({
        name,
        initialValue,
        syntax: '<color>',
        inherits: false,
      });
    });
  }, [WINDOW_SIZE, isEnabled]);

  const intervalCount = useIncrementingNumber(intervalDelay);

  return range(0, WINDOW_SIZE).reduce((acc, index) => {
    const effectiveIntervalCount = isEnabled ? intervalCount : 0;

    const name = getColorPropName(uniqueId, index);
    const value = gradientColors[(effectiveIntervalCount + index) % paletteSize];

    return {
      ...acc,
      [name]: value,
    };
  }, {});
};

export default useAnimGradient;