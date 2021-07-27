import MenuItem from '../menuItem/MenuItem';
import './menu.scss';

export default function Menu({ menuActive, setMenuActive }) {
  const menuDirectory = [
    { id: '#intro', text: 'Intro' },
    { id: '#portfolio', text: 'Portfolio' },
    { id: '#works', text: 'Works' },
    { id: '#testimonials', text: 'Testimonials' },
    { id: '#contact', text: 'Contact' },
  ];

  return (
    <div className={'menu ' + (menuActive && 'active')}>
      <ul>
        {menuDirectory.map(({ id, text }, idx) => <MenuItem id={id} text={text} onClick={setMenuActive} key={idx}/>)}
      </ul>
    </div>
  );
}
