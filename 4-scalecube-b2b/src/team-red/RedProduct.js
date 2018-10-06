/* eslint-disable no-use-before-define, no-console, class-methods-use-this */
/* globals HTMLElement, window, CustomEvent */
import { product } from "./data.js";
import { template } from "./template.js";
import { blueService } from "./services.js";
import { getState, setState } from "./state.js";

export class RedProduct extends HTMLElement {
        connectedCallback() {
            this.render();

            const $btns = document.querySelectorAll('#options button');
            Array.prototype.forEach.call($btns, $btn => (
                $btn.addEventListener('click', (e)=>
                    this.handleClickOption(
                        e.currentTarget.getAttribute('data-sku')))
            ));

            const $buy = document.querySelectorAll('#buy')
            $buy[0].addEventListener('click', (e)=>
                blueService.addToBasket(
                    this.variant()
                ));
        }
        variant(){
            return product.variants.find(v => getState() === v.sku);
        }
        render() {
            this.innerHTML = template({
                product,
                variant:this.variant()
            });
        }
        handleClickOption(sku) {
            setState(sku);
            this.disconnectedCallback();
            this.connectedCallback();
        }

        disconnectedCallback() {
            const $btns = document.querySelectorAll('#options button');
            Array.prototype.forEach.call($btns, $btn => (
                $btn.removeEventListener('click', this.handleClickOption)
            ));
        }
        log(...args) {
            console.log('🔘 red-product', ...args);
        }
    }


