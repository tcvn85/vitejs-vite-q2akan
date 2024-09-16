import { useEffect } from 'react';
import './community.scss';

const pageTitle = 'Community';

const Community = () => {

  useEffect(() => {
    document.title = pageTitle;
  }, []);

  return (
    <div>Commninty content</div>
  )
}

export default Community;