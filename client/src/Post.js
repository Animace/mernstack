import React from 'react';
import { formatISO9075 } from "date-fns";
import { Link } from "react-router-dom";

export default function Post({_id, title, summary, cover, content, createdAt, author}) {
  console.log('createdAt:', createdAt);

  return (
    <div className="post">
      <div className="image">
        <Link to={`/post/${_id}`}> {/* Ensure correct route path here */}
          <img src={`http://localhost:4000/${cover}`} alt="" />
        </Link>
      </div>

      <div className="texts">
        <Link to={`/post/${_id}`}> {/* Ensure correct route path here */}
          <h2>{title}</h2>
        </Link>
        <p className="info">
          {author && (
            <a className="author">{author.username}  </a>
          )}
          <time>{formatISO9075(new Date(createdAt))}</time>
        </p>
        <p className="summary">{summary}</p>
      </div>
    </div>
  );
}
