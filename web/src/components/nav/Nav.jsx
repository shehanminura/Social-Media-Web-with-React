import './nav.css'
import {Link} from 'react-router-dom'

//Fake Api Data......................
import CurrentUser from '../../FackApis/CurrentUserData'

// Components....................
import DarkMoode from '../darkmod/DarkMoode'


// FontAwesome Icon.................... 
import { faBars, faBell, faEnvelope, faHome, faSearch, faUser } from '@fortawesome/free-solid-svg-icons' 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export default function Nav() {
  return (
    <nav>
      <div className='nav-container'>

        {/*............NavAria Left............*/}
        <div className='nav-left'>
          <Link to='/login'>
              <h3 className='logo'>NapaExtra</h3>
          </Link>
          <Link to='/'>
          <FontAwesomeIcon icon={faHome}/>
          </Link>
          <Link to='/profile/id'>
          <FontAwesomeIcon icon={faUser}/>
          </Link>
          <div className='Nav-Serchbar'>
          <FontAwesomeIcon icon={faSearch}/>
          <input type='search' />
          </div>
          </div>
        <div className='nav-right'>
          <Link to='/chatbox/id'>
          <FontAwesomeIcon icon={faEnvelope}/>
          </Link>

          <Link to='/chatbox/id'>
          <FontAwesomeIcon icon={faBell}/>
          </Link>

          <DarkMoode/>

          <Link to='/chatbox/id'>
          <FontAwesomeIcon icon={faBars}/>
          </Link>
          <div className='user'>
            <img src={CurrentUser.map(user=>(user.ProfieImage))} alt=''/>
          </div>

        </div>
      </div>
    </nav>
  )
}
