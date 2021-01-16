import { hero, heroWithImage, simpleHero, simpleHeroWithImage } from './hero';
import { subscribe } from './subscribe';
import { notFound } from './notFound';

export const components = [
    notFound,
    hero,
    heroWithImage,
    simpleHero,
    simpleHeroWithImage,
    subscribe,
];
