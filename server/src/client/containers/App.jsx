import React, { useReducer } from 'react';
import FeedsList from '../components/feeds-list.jsx';
import UpvotesChart from '../components/upvotes-chart.jsx';
import {
  feedsReducer,
  StateContext,
  DispatchContext
} from '../reducers/state';


const App = ({ state }) => {
  //check for any hidden feed in localstorage and update the feed on load
  state.hits = state.hits.map(feed => {
    try {
      const feedItem = feed.objectID + '-hidden';
      if (window.localStorage.getItem(feedItem) === 'true')
        feed.hidden = true;
    }
    catch (e) {
      console.error('localstorage not available in node');
    }
    return feed;
  });

  const [rootState, dispatch] = useReducer(feedsReducer, state);

  let moreBtn = '';
  if (state.page < state.nbPages - 1) {
    let page = state.page + 1;
    moreBtn = <a className='more-button' href={'story?page=' + page}>More</a>
  }

  return (<DispatchContext.Provider value={dispatch}>
    <StateContext.Provider value={rootState}>
      <div className='container'>
        <header>
          <a href="story?page=1" className='logo'>
            <img src="y18.gif" width="18" height="18"></img>
          </a>
        </header>
        <FeedsList />
        {moreBtn}
        <UpvotesChart />
      </div>
    </StateContext.Provider>
  </DispatchContext.Provider>);
};

export default App;
