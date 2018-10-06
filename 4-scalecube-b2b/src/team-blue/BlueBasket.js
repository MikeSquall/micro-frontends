import { listenBasketEvents, basketItems } from "./basket.js";

export class BlueBasket extends HTMLElement {
  connectedCallback() {
    this.render();
    listenBasketEvents.subscribe(
        () => this.render());
  }

  render() {
    const count = basketItems().length;
    const classname = count === 0 ? 'empty' : 'filled';
    this.innerHTML = `
      <div class="${classname}">basket: ${count} item(s)</div>
    `;
  }
  disconnectedCallback() {
  }
  log(...args) {
    console.log('🛒 blue-basket', ...args);
  }
}
