import { useContext } from 'react';

// Immediately export all of our contexts as hooks for simple re-use across our application

import { ConfigContext } from '../__context__/ConfigContext';
import { ShowContext } from '../__context__/ShowContext';
import { SiteContext } from '../__context__/SiteContext';

export const useConfigContext = () => useContext(ConfigContext);
export const useSiteContext = () => useContext(SiteContext);
export const useShowContext = () => useContext(ShowContext);
