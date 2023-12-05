import React from "react";
import { formatISO9075 } from "date-fns";
import { Link } from "react-router-dom";

const Post = ({ _id, title, summary, cover, content, createdAt, author }) => {
  return (
    <div class="post">
      <div class="image">
        <Link to={`/post/${_id}`}>
          <img src={"http://localhost:4000/" + cover} />
        </Link>
      </div>
      <div class="texts">
        <Link to={`/post/${_id}`}>
          <h2>{title}</h2>
        </Link>
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

export default Post;
