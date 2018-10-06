import { BlueService } from '../api.js';
import '../../dist/scalecube.js';

const microservices = scalecube
						.Microservices
						.builder()
						.build();

export const blueService = microservices
    .proxy()
    .api(BlueService)
    .create();