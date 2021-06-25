// import prices from '../database/prices.json';
import {readFile} from 'fs/promises';

const prices = JSON.parse(await readFile(new URL('../database/prices.json', import.meta.url)))

const allPrices = () => {
    return prices;
}

export {allPrices};
