import React from 'react'

const Post = () => {
  return (
    <div class="post">
      <div class="image">
        <img src="https://techcrunch.com/wp-content/uploads/2023/07/Fisker_Ocean_2022_Big_Sur_Blue_Driving_Smart_Traction_Fisker12366_20210129_yfduak.jpg?w=1390&crop=1" />
      </div>
      <div class="texts">
        <h2>
          EV startup Fisker cut its 2023 production target for the fourth time
        </h2>
        <p class="info">
          <a class="author">Collo</a>
          <time>2023-12-02 20:22</time>
        </p>
        <p class="summary">Fisker, the California-based EV startup</p>
        <p>
          Fisker, the California-based EV startup, cut its annual production
          guidance in an effort to free up $300 million in working capital, the
          company said in a business update Friday.
        </p>
      </div>
    </div>
  );
}

export default Post