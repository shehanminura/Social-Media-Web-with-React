import './feeds.css';

// Components
import Feed from './feed';

// Fake Api
import HomeFeedData from '../../FackApis/FirendReqData';

export default function Feeds() {
  return (
    <div className='feeds'>
      {HomeFeedData.map(fed => (
        <Feed fed={fed} key={fed.key} />
      ))}
    </div>
  );
}

