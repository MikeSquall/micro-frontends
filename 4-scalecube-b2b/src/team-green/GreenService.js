import '../api.js';
import { decorateClass } from '../apiUtil.js';

export class GreenService {
    recos(){
        return new Promise(async (resolve) => {
            let mod = await import('./GreenRecos.js');
            resolve(mod.GreenRecos);
        });
    }
}

decorateClass(GreenService);
