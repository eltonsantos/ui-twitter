import { Header } from "../components/Header/Header";
import { Separator } from "../components/Separator/Separator";
import { Tweet } from "../components/Tweet/Tweet";

import "./Status.css";

// const tweets = [
//   "Tweet 1",
//   "Estou fazendo um projeto bem legal que é tentar criar a user interface do Twitter. Basicamente estou tentando fazer o clone da interface. Está ficando irado, estou seguindo o tutorial da Rocketseat, nesse link aqui: https://www.youtube.com/watch?v=99okStmx-7c",
//   "Tweet 3",
// ];

const answers = ["Concordo", "Faz sentido", "Legal oh"];

export function Status() {
  return (
    <main className="status">
      <Header title="Tweet" />

      <Tweet content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi eligendi cum accusamus corporis eveniet quae minima veniam deserunt neque officiis dolorem laboriosam, possimus blanditiis accusantium? Reiciendis blanditiis voluptas odit illum." />

      <Separator />

      <form className="answer-tweet-form">
        <label htmlFor="tweet">
          <img src="https://github.com/eltonsantos.png" alt="Elton Santos" />
          <textarea id="tweet" placeholder="Tweet your answer" />
        </label>
        <button type="submit">Answer</button>
      </form>

      {answers.map((answer) => {
        return <Tweet key={answer} content={answer} />;
      })}
    </main>
  );
}
