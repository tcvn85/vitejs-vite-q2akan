import { useEffect } from 'react';
import './no-page.scss';

const pageTitle = "Page not found";

const NoPage = () => {

  useEffect(() => {
    document.title = pageTitle;
  }, []);

  return (
    <div>404</div>
  )
}

export default NoPage;