import './navbar.scss';
import { Mail, Person } from '@material-ui/icons';

export default function Navbar({ menuActive, setMenuActive }) {
  return (
    <div className={'navbar ' + (menuActive && 'active')}>
      <div className="wrapper">
        <div className="left">
          <a href="#intro" className='logo'>jacob dale</a>
          <div className="itemContainer">
            <Person className='icon' />
            <span>+1 631 633 8984</span>
          </div>
          <div className="itemContainer">
            <Mail className='icon' />
            <span>jacobscottdale@gmail.com</span>
          </div>
        </div>
        <div className="right">
          <div className="hamburger" onClick={() => setMenuActive(!menuActive)}>
            <span className='line1'></span>
            <span className='line2'></span>
            <span className='line3'></span>
          </div>
        </div>
      </div>
    </div>
  );
}
