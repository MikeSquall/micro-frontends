import React from 'react';
import ReactDOM from 'react-dom';
import { BlueService } from '../api.js';
import '../../dist/scalecube.js';
import { RedService } from "../api.js";

const microservices = scalecube.Microservices.builder().build();

export const redService = microservices
  .proxy()
  .api(RedService)
  .create();

const recos = {
  t_porsche: ['3', '5', '6'],
  t_fendt: ['3', '6', '4'],
  t_eicher: ['1', '8', '7'],
};

const host = 'http://localhost:8080/src/';

class Recommendations extends React.Component {
  render() {
    console.log('lolo');

    return (
      <>
      <h3>Related Products</h3>
      {this.props.recommendations.map(
        id => <img src={`${host}/team-green/images/reco_${id}.jpg`} alt={`Reco ${id}`}/>
      )}
    </>;
  }
}

export class GreenRecos extends HTMLElement {
  connectedCallback() {
    redService
      .listenProduct()
      .subscribe((sku) => this.render(sku));
  }

  render(sku) {
    console.log('A');
    return <Recommendations recommendations={recos[sku] || []}/>;
  }

  disconnectedCallback() {}

  log(...args) {
    console.log('🖼️ green-recos', ...args);
  }
}
