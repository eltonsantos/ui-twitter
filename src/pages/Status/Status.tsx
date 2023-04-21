import { Header } from "../../components/Header/Header";
import { Separator } from "../../components/Separator/Separator";
import { Tweet } from "../../components/Tweet/Tweet";

import "./Status.css";

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
