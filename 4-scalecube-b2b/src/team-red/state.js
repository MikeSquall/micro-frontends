import {Observable} from "./Observable.js";


export const state = {
    variant: 't_porsche',
};

const observers = [];
const notify = ()=>{
    observers.map((obs)=>obs.next(getState()));
};

export const setState = (newState) => {
    state.variant = newState;
    notify(state.variant);
};

export const listenState = () => {
    return new Observable((obs) => {
        obs.next(getState());
        observers.push(obs);
    });
};

export const getState = () => state.variant;
