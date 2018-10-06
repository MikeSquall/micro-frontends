import { addToBasket } from "./basket.js";
import '../api.js';
import { decorateClass } from '../apiUtil.js';

export class BlueService {
    addToBasket(product){
        return new Promise(async (resolve) => {
            addToBasket(product);
            resolve();
        });
    }
    basket(){
        return new Promise(async (resolve) => {
            let mod = await import('./BlueBasket.js');
            resolve(mod.BlueBasket);
        });
    }
}

decorateClass(BlueService);
