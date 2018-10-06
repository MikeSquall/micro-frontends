import { Microservices } from '@scalecube/scalecube-js';

const mc = Microservices.builder();

window['scalecube'] = {
    Microservices: {
        builder: () => mc
    }
};
