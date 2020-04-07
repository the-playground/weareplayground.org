import { useContext } from 'react';

// Immediately export all of our contexts as hooks for simple re-use across our application

import { ConfigContext } from '../__context__/ConfigContext';
import { NavigationContext } from '../__context__/NavigationContext';
import { ShowContext } from '../__context__/ShowContext';
import { SeasonContext } from '../__context__/SeasonContext';

export const useConfigContext = () => useContext(ConfigContext);
export const useNavContext = () => useContext(NavigationContext);
export const useSeasonContext = () => useContext(SeasonContext);
export const useShowContext = () => useContext(ShowContext);
