import { ArrowClockwise, ChatCircle, Heart } from "phosphor-react";
import "./Tweet.css";
import { Link } from "react-router-dom";

interface TweetProps {
  content: string;
}

export function Tweet(props: TweetProps) {
  return (
    <Link to="/tweet" className="tweet">
      <img src="https://github.com/eltonsantos.png" alt="Elton Santos" />

      <div className="tweet-content">
        <div className="tweet-content-header">
          <strong>Elton Santos</strong>
          <span>@eltonsantos</span>
        </div>

        <p>{props.content}</p>

        <div className="tweet-content-footer">
          <button type="button">
            <ChatCircle />
            20
          </button>
          <button type="button">
            <ArrowClockwise />
            20
          </button>
          <button type="button">
            <Heart />
            20
          </button>
        </div>
      </div>
    </Link>
  );
}
