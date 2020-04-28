import React, { useState, useEffect, useContext } from 'react';
import { DispatchContext } from '../reducers/state';
import { timeSince } from '../utils'

const FeedsListItem = ({ feed }) => {
  const [hidden, setHidden] = useState(false);
  const dispatch = useContext(DispatchContext);

  const handleHideClick = () => {
    window.localStorage.setItem(feed.objectID + '-hidden', true);
    dispatch({
      type: 'UPDATE_FEED', payload: {
        ...feed, hidden: true
      }
    });
  };

  const handleUpvote = () => {
    const key = feed.objectID + '-upvote';
    let localUpVotes = (window.localStorage.getItem(key)) ? window.localStorage.getItem(key) : 0;
    if (localUpVotes < 10) {
      window.localStorage.setItem(key, ++localUpVotes);
      dispatch({
        type: 'UPDATE_FEED', payload: {
          ...feed, points: feed.points + 1
        }
      });
    }
    else {
      alert('Already upvoted 10 times')
    }
  };

  useEffect(() => {
    try {
      setHidden(feed.hidden);
    }
    catch (e) {
      console.log('window not available in node');
    }
  }, [feed]);

  return <div className={hidden ? 'hidden' : 'feed-list-item'}>
    <div className='feed-id'>
      {feed.objectID}
    </div>
    <span className='feed-points'>
      <span>{feed.points}</span>
      <button onClick={handleUpvote} className='vote-btn'>
        <span className="vote-arrow" title="upvote"></span>
      </button>
    </span>
    <div className='feed-url'>
      <a href={feed.url}>{feed.title}</a>
      <span className='secondary feed-author padding-left-5'>by</span>
      <span className='feed-author padding-left-5'>{feed.author}</span>
      <span className='secondary feed-time'>{timeSince(feed.created_at_i)}</span>
      <span className='secondary padding-left-5'>
        [<button className='hide-button primary' onClick={handleHideClick}>hide</button>]
      </span>
    </div>
  </div>
};

export default FeedsListItem;
