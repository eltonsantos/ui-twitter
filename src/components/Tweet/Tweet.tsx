import { ArrowClockwise, ChatCircle, Heart } from "phosphor-react";
import "./Tweet.css";

export function Tweet() {
  return (
    <a href="" className="tweet">
      <img src="https://github.com/eltonsantos.png" alt="Elton Santos" />

      <div className="tweet-content">
        <div className="tweet-content-header">
          <strong>Elton Santos</strong>
          <span>@eltonsantos</span>
        </div>

        <p>
          Estou fazendo um projeto bem legal que é tentar criar a user interface
          do Twitter. Basicamente estou tentando fazer o clone da interface.
          Está ficando irado, estou seguindo o tutorial da Rocketseat, nesse
          link aqui: https://www.youtube.com/watch?v=99okStmx-7c
        </p>

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
    </a>
  );
}
