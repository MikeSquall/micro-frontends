import { createApi } from './apiUtil.js';

export class RedService {
    product(){
        return 'Promise';
    }
    listenProduct(){
        return 'Observable';
    }
}
createApi(RedService);

export class BlueService {
    addToBasket(){
        return 'Promise'
    }
    basket(){
        return 'Promise';
    }
}
createApi(BlueService);

export class GreenService {
    recos() {
        return 'Promise';
    }
}
createApi(GreenService);
