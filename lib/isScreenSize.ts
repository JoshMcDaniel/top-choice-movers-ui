import { getCurrentBreakpoint } from './getViewBreakpoints';
import resolveConfig from 'tailwindcss/resolveConfig';
import tailwindConfig from '../tailwind.config';
import useWindowDimensions from './useWindowDimensions';

const fullConfig = resolveConfig(tailwindConfig);

const isScreenSize = (size: 'sm' | 'md' | 'lg' | 'xl'): boolean => {
  const { width } = useWindowDimensions();

  if (fullConfig?.theme?.screens) {
    const kvs = Object.entries(fullConfig.theme.screens);
    const targetPair = kvs.find(([k, _]) => k.toString() === size);

    if (targetPair && width) {
      const [_, v] = targetPair;
      const strVal = v.toString();
      const breakpointValue = +strVal.slice(0, strVal.indexOf('px'));
      return breakpointValue <= width;
    }
  }
  return false;
};

export default isScreenSize;
