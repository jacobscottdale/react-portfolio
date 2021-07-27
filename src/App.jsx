import Navbar from './components/navbar/Navbar'
import Intro from './components/intro/Intro'
import Portfolio from './components/portfolio/Portfolio'
import Testimonials from './components/testimonials/Testimonials'
import Works from './components/works/Works'
import Contact from './components/contact/Contact'
import './app.scss'
import { useState } from 'react';
import Menu from './components/menu/Menu';

function App() {
  const [menuActive, setMenuActive] = useState(false)

  return (
    <div className="app">
      <Navbar menuActive={menuActive} setMenuActive={setMenuActive}/>
      <Menu menuActive={menuActive} setMenuActive={setMenuActive}/>
      <div className="sections">
        <Intro/>
        <Portfolio/>
        <Works/>
        <Testimonials/>
        <Contact/>

      </div>
    </div>
  );
}

export default App;
