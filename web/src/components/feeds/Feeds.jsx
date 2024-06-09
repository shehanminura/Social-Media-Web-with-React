import './feeds.css';
import Feed from './feed';
import HomeFeedData from '../../FackApis/HomeFeedData';  // Ensure this path is correct

export default function Feeds() {
  return (
    <div className='feeds'>
      {HomeFeedData.map(fed => (
        <Feed fed={fed} key={fed.id} />
      ))}
    </div>
  );
}
