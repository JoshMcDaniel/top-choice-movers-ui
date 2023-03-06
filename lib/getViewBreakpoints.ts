import resolveConfig from 'tailwindcss/resolveConfig';
import tailwindConfig from '../tailwind.config';
import useWindowDimensions from './useWindowDimensions';

const fullConfig = resolveConfig(tailwindConfig);

export const getCurrentBreakpoint = (): string => {
  const { width } = useWindowDimensions();

  let currentBreakpoint: string = '';
  let biggestBreakpointValue = 0;
  if (fullConfig?.theme?.screens) {
    for (const [breakpoint, value] of Object.entries(
      fullConfig.theme.screens
    )) {
      const strVal = value.toString();
      const breakpointValue = +strVal.slice(0, strVal.indexOf('px'));
      if (
        width &&
        breakpointValue > biggestBreakpointValue &&
        width >= breakpointValue
      ) {
        biggestBreakpointValue = breakpointValue;
        currentBreakpoint = breakpoint;
      }
    }
  }
  return currentBreakpoint;
};
