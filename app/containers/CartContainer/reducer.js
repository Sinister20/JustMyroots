/*
 * AppReducer
 *
 * The reducer takes care of our data. Using actions, we can
 * update our application state. To add a new action,
 * add it to the switch statement in the reducer function
 *
 */

import produce from 'immer';
import { CART_STORE_UPDATE_BY_KEY, } from './constants';

// The initial state of the App
export const initialState = {
};

/* eslint-disable default-case, no-param-reassign */
const appReducer = (state = initialState, action) =>
  produce(state, draft => {
    switch (action.type) {
      case CART_STORE_UPDATE_BY_KEY:
        draft[action.payload.key] = action.payload.value;
        return draft
    }
  });

export default appReducer;