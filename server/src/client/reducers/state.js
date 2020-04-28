import React from 'react';

const feedsReducer = (state, action) => {
  switch (action.type) {
    case 'UPDATE_FEED':
      const newState = state.hits.map(feed => {
        if (feed.objectID === action.payload.objectID) {
          return action.payload;
        }
        return feed;
      });
      return {
        ...state,
        hits: newState
      };
    default:
      return state;
  }
};


const StateContext = React.createContext();
const DispatchContext = React.createContext();

export {
  feedsReducer,
  StateContext,
  DispatchContext
};
