import { NavLink } from 'react-router-dom';
import BlockFriends from '../BlockFriends/BlockFriends';
import s from './Slidebar.module.css';

const Sidebar = (props) => {

  let nameFrienends = props.state.frieds.map(val => (<BlockFriends name={val.name} />));


  return (
    <nav className={s.nav}>
      <div ><NavLink to="/profil" 
      className = { navData => navData.isActive ? s.active : s.item }>Profile</NavLink> </div>
      <div ><NavLink to="/dialogs" className = { navData => navData.isActive ? s.active : s.item }>Messege</NavLink> </div>
      <div ><NavLink to="/news" className = { navData => navData.isActive ? s.active : s.item }>News</NavLink> </div>
      <div ><NavLink to="/music" className = { navData => navData.isActive ? s.active : s.item }>Music</NavLink> </div>
      <div ><NavLink to="/setting" className = { navData => navData.isActive ? s.active : s.item }>Settings</NavLink> </div>
      <div> Friends
        <div>
         {nameFrienends}
        </div>
      </div>
    </nav>
  )
}

export default Sidebar;