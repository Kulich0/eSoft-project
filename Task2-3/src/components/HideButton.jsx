// HideButton.js
import React, { useState } from 'react';
import PostList from './PostList';

const HideButton = ({ setHidePosts, posts }) => {
  const [isHidden, setIsHidden] = useState(false);
  const [data, setData] = useState(posts);

  const HideShow = () => {
    setIsHidden(!isHidden);
    setHidePosts(!isHidden);
  };

  const More50 = () => {
    setData(posts.filter(item => parseInt(item.progress) > 50)); // Convert progress to integer
  };

  const Less50 = () => {
    setData(posts.filter(item => parseInt(item.progress) <= 50)); // Convert progress to integer
  };

  return (
    <div>
      <div>
        <button onClick={HideShow}>
          {isHidden ? 'Вернуть посты' : 'Скрыть посты'}
        </button>
        <button onClick={More50}>
          Показать больше 50%
        </button>
        <button onClick={Less50}>
          Показать меньше 50%
        </button>
      </div>
      {/* <PostList posts={data}/> */}
    </div>
  );
};

export default HideButton;
