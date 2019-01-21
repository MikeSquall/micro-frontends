import { Observable } from "./Observable.js";

const basket = [];

let notify = () => {
};

export const addToBasket = (item) => {
  basket.push(item);
  notify(item);
};

export const listenBasketEvents = new Observable((obs) => {
  notify = (item) => obs.next(item);
});

export const basketItems = () => [...basket];