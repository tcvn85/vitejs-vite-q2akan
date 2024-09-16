import { useEffect } from 'react';
import './entry-game.scss';

const pageTitle = 'Entry Game';

const EntryGame = () => {

  useEffect(() => {
    document.title = pageTitle;
  }, []);

  return (
    <div>EntryGame content</div>
  )
}

export default EntryGame;