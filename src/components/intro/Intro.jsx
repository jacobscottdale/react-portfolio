import './intro.scss';
import { ExpandMore } from '@material-ui/icons'
import { init } from 'ityped'
import { useEffect, useRef } from 'react';

export default function Intro() {
  
  const textRef = useRef()

  useEffect(() => {
    init(textRef.current, {
      showCursor: false,
      backSpeed: 30,
      backDelay: 1100, 
      // disableBackTyping: false,
      strings: ['JavaScript', 'React', 'Node.js']
    })
  }, [])
  
  return (
    <div className='intro' id='intro'>
      <div className="left">
        <div className="imgContainer">

        </div>

      </div>
      <div className="right">
        <div className="wrapper">
          <h2>Hi there, I'm</h2>
          <h1>Jacob Dale</h1>
          <h3>a {`{`} <span className='typed' ref={textRef}></span> {`}`} Developer</h3>
        </div>
        <a href="#portfolio">
          <ExpandMore className='expand' fontSize='large'/>
        </a>
      </div>
    </div>
  );
}
