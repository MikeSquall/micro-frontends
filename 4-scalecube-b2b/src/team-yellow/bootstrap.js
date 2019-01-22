import '@babel/polyfill';

import { BlueService } from '../team-blue/BlueService.js';
import { RedService } from '../team-red/RedService.js';
import {GreenService} from "../team-green/GreenService.js";
import '../../dist/scalecube.js';

const builder = scalecube.Microservices.builder();

const microservices = builder
    .services(
        new BlueService(),
        new RedService(),
        new GreenService()
    )
    .build();

const redService = microservices
    .proxy()
    .api(RedService)
    .create();

const blueService = microservices
    .proxy()
    .api(BlueService)
    .create();

const greenService = microservices
    .proxy()
    .api(GreenService)
    .create();


redService
    .product()
    .then(
        RedProduct =>
            window.customElements
                .define('red-product', RedProduct)
    );

blueService
    .basket()
    .then(
        BlueBasket =>
            window.customElements
                .define('blue-basket', BlueBasket)
    );

greenService
    .recos()
    .then(
        GreenRecos =>
            window.customElements
                .define('green-recos', GreenRecos)
    );
