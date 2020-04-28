import React, { useContext } from 'react';
import FeedsListItem from './feeds-list-item.jsx';
import { StateContext } from '../reducers/state.js';

const FeedsList = () => {
  const state = useContext(StateContext);
  const feeds = state.hits;

  const renderFeeds = () => {
    if (feeds) {
      return feeds.filter(feed => (!feed.hidden)).map((feed) => {
        return <FeedsListItem key={feed.objectID} feed={feed} />
      });
    }
  }
  return <div>{renderFeeds()}</div>;
};

export default FeedsList;
