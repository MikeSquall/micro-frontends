import { getState } from "./state.js";
import {host} from "./data.js";

function renderOption(variant) {
    const active = getState() === variant.sku ? 'active' : '';
    return `
                    <button class="${active}" type="button" data-sku="${variant.sku}">
                      <img src="${host+variant.thumb}" alt="${variant.name}" />
                    </button>
                  `;
}

export const template = ({product,variant}) =>
    `
                <div id="image"><div><img src="${host + variant.image}" alt="${variant.name}" /></div></div>
                <h2 id="name">${product.name} <small>${variant.name}</small></h2>
                <div id="options">${product.variants.map(renderOption).join('')}</div>
                <button id="buy" type="button">buy for ${variant.price}</button>
    `;
