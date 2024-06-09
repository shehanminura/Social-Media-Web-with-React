
// components......................
import AddPost from '../../components/addPost/AddPost'
import Feeds from '../../components/feeds/Feeds'
import Stories from '../../components/stories/Stories'

//Fake Api...................
import CurrentUserData from '../../FackApis/CurrentUserData'

//Font Awesome Icon.................
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export default function Home() {
  return (
<>
<Stories/>
<AddPost/>
<Feeds/>

</>

  )
}
