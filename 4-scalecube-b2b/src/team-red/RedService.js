import '../api.js';
import { decorateClass } from '../apiUtil.js';
import { listenState } from "./state.js";

export class RedService {
    product(){
        return new Promise(async (resolve) => {
            let mod = await import('./RedProduct.js');
            resolve(mod.RedProduct)
        });
    }
    listenProduct() {
        return listenState();
    }
}

decorateClass(RedService);
