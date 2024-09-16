import { useEffect } from "react";
import "./indie-game.scss";

const pageTitle = "Indie Game";

const IndieGame = () => {

  useEffect(() => {
    document.title = pageTitle;
  }, []);

  return (
    <div>Indie game content</div>
  )
}

export default IndieGame;