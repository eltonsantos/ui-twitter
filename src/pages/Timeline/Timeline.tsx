import { Header } from "../../components/Header/Header";
import { Separator } from "../../components/Separator/Separator";
import { Tweet } from "../../components/Tweet/Tweet";
import "./Timeline.css";

const tweets = [
  "Tweet 1",
  "Estou fazendo um projeto bem legal que é tentar criar a user interface do Twitter. Basicamente estou tentando fazer o clone da interface. Está ficando irado, estou seguindo o tutorial da Rocketseat, nesse link aqui: https://www.youtube.com/watch?v=99okStmx-7c",
  "Tweet 3",
];

export function Timeline() {
  return (
    <main className="timeline">
      <Header title="Home" />
      <form className="new-tweet-form">
        <label htmlFor="tweet">
          <img src="https://github.com/eltonsantos.png" alt="Elton Santos" />
          <textarea id="tweet" placeholder="What's happening?" />
        </label>
        <button type="submit">Tweet</button>
      </form>

      <Separator />

      {tweets.map((tweet) => (
        <Tweet key={tweet} content={tweet} />
      ))}
    </main>
  );
}
