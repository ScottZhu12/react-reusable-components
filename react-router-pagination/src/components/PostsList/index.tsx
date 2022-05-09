import React from 'react';

import { useAppSelector, useAppDispatch } from '../../hooks';

const PostsList: React.FC = () => {
  const posts = useAppSelector((state) => state.posts);

  const renderedPosts = posts.map((post) => {
    return (
      <article key={post.id}>
        <h3>{post.title}</h3>
        <p>{post.content.substring(0, 100)}</p>
      </article>
    );
  });

  return (
    <div>
      <h2>Posts</h2>
      {renderedPosts}
    </div>
  );
};

export default PostsList;
