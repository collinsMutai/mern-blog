import React from 'react'
import { formatISO9075} from 'date-fns'

const Post = ({ title, summary, cover, content, createdAt, author }) => {
  return (
    <div class="post">
      <div class="image">
        <img src={"http://localhost:4000/"+cover} />
      </div>
      <div class="texts">
        <h2>{title}</h2>
        <p class="info">
          <a class="author">{author.username}</a>
          <time>{formatISO9075(new Date(createdAt))}</time>
        </p>
        <p class="summary">{summary}</p>
        <p>
          Fisker, the California-based EV startup, cut its annual production
          guidance in an effort to free up $300 million in working capital, the
          company said in a business update Friday.
        </p>
      </div>
    </div>
  );
};

export default Post