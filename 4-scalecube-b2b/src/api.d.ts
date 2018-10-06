
export interface RedService {
    product(): Promise<HTMLElement>;
    listenProduct():Observable<string>;
}
export interface BlueService {
    addToBasket(req:AddToBasketRequest): Promise<undefined>;
    basket():Promise<HTMLElement>;
}
export interface GreenService {
    recos(): Promise<HTMLElement>;
}


interface AddToBasketRequest extends Product{
}

interface Product {
    name: string
    variants: Variant[];
}

interface Variant {
    sku:  string;
    color:string;
    name: string;
    image:string;
    thumb:string;
    price:string;
}

interface Observable<T> {
}